import Link from './Link'

const express = require('express')
const app = express()
app.use(express.json())


const config = {
    port : 3001,
    codeTime: 86400000
    // codeTime: 10000
}

const errors = {
    se: {
        "status" : "server_error"
    },
    nf: {
        "status" : "not_found"
    },
    ir: {
        "status" : "invalid_request"
    }
}


app.get('/api/link', (request, response) => {
    console.log("[GET] /api/link");
    let code = request.query.code;
    let link = new Link(undefined, undefined, code)
    link.getUrl((result) => {
        if (result == false) {
            response.json(errors.se)
        } else if (result.length == 0) {
            response.json(errors.nf)
        } else if (result.length > 1) {
            response.json(errors.se)
        } else {
            let now = Date.now()
            if (now - result[0].date > config.codeTime) {
                link.remove((res) => {
                    if (res) {
                        response.json(errors.nf)
                    } else {
                        response.json(errors.se)
                    }
                })
            } else {
                response.json({
                    "status" : "ok",
                    "url" : '"' +result[0].url + '"'
                })
            }
        }
    })
    
});

app.post('/api/create', (request, response) => {
    console.log("[POST] /api/create");
    const keys = ['url']
    for (let i = 0; i < keys.length; i++) {
        if (!request.body[keys[i]]) {
            return response.json(errors.ir)
        }
    }
    try {
        let url = new URL(request.body.url)
        url = url.origin.replace('https://', 'http://')
    } catch {
        return response.json(errors.ir)
    }
    const ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress
    const link = new Link(request.body.url, ip, undefined)
    link.write((result) => {
        if (result.success) {
            response.json({
                "status" : "ok",
                "code" : result.code
            })
        }
    })
    
});

app.listen(config.port, () => {
    console.log('Listening on ' + config.port);
});
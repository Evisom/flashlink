import Link from './Link'

const express = require('express')
const app = express()
app.use(express.json())


const config = {
    port : 3001
}


app.get('/api/', (request, response) => {
    console.log("[GET] /api/");
    response.json({text:"Hello flashlink API"});
});

app.get('/api/link', (request, response) => {
    console.log("[GET] /api/link");
    let code = request.query.code;
    let link = new Link(undefined, undefined, code)
    link.getUrl((result) => {
        if (result == false) {
            response.json({
                "status" : "server_error"
            })
        } else if (result.length == 0) {
            response.json({
                "status" : "not_found"
            })
        } else if (result.length > 1) {
            response.json({
                "status" : "server_error"
            })
        } else {
            response.json({
                "status" : "ok",
                "url" : '"' +result[0].url + '"'
            })
        }
    })
    
});

app.post('/api/create', (request, response) => {
    console.log("[POST] /api/create");
    const keys = ['url']
    for (let i = 0; i < keys.length; i++) {
        if (!request.body[keys[i]]) {
            response.json({
                status: "error"
            })
        }
    }
    const ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress
    const link = new Link(request.body.url, ip, undefined)
    console.log(link)
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
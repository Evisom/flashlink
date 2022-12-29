import Link from './Link'

const express = require('express')
const app = express()
app.use(express.json())


const config = {
    port : 3001
}

const DB = {
    "00000": {
        url: "https://example.com"
    }
}

app.get('/api/', (request, response) => {
    console.log("[GET] /api/");
    response.json({text:"Hello flashlink API"});
});

app.get('/api/link', (request, response) => {
    console.log("[GET] /api/link");
    let code = request.query.code;
    if (code) {
        if (DB[code]) {
            response.json({url: DB[code].url});
        } else {
            response.json({status: "error"});
        }
    } else {
        response.json({status: "error"})
    }
    
});

app.post('/api/create', (request, response) => {
    console.log("[POST] /api/create");
    // url 
    // ip 
    // date 
    const keys = ['url']
    for (let i = 0; i < keys.length; i++) {
        if (!request.body[keys[i]]) {
            response.json({
                status: "error"
            })
        }
    }
    const ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress
    const link = new Link(request.body.url, ip)
    console.log(link)
});

app.listen(config.port, () => {
    console.log('Listening on ' + config.port);
});
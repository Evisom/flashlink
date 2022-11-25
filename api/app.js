const express = require('express')
const app = express()
app.use(express.json())


const config = {
    port : 3001
}

const DB = {
    0: {
        url: "https://example.com"
    }
}

app.get('/api/', (request, response) => {
    console.log("[GET] /api/");
    response.json({text:"Hello flashlink API"});
});

app.get('/api/link', (request, response) => {
    console.log("[GET] /api/link");
    code = request.query.code;
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
    console.log(request.body);
    if (request.body.url) {
        code = Number(Object.keys(DB)[Object.keys(DB).length - 1]) + 1
        DB[code] = {url:request.body.url}
        response.json({status:"OK"});
    } else {
        response.json({status:"error"});
    }
    
});

app.listen(config.port, () => {
    console.log('Listening on ' + config.port);
});
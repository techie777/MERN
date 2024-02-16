const http = require("http");

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.write(req.url);
    res.end("Hello world");
})

server.listen(8080);
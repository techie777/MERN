const http = require("http");

const fs = require("fs");

const msg = require('./mymodule.js')

const hostname = '127.0.0.1';

const port = 8080;


const server = http.createServer((req, res)=>{
    const mymsg = msg.helloworld();
    res.end(req.url);
    console.log("Will be executed once the url is hit...");                
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at ${hostname}:${port}`);
});

const a = 10;
const b = 20;
c = a+b;

console.log(`Result ${c}`);
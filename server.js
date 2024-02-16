const http = require("http");

const hostname = "127.0.0.1";

const port = 5050;

const server = http.createServer(function(req, res){
    res.setHeader('content-type','text/plain');
    res.end(`${req.url}`);
    console.log(`Hello...`);
}).listen(port, hostname, function(){
    console.log(`Server running at ${hostname}:${port}`);
})
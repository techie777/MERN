const http = require("http");

const hostname = "127.0.0.1";

const port = 5050;

const server = http.createServer(function(req, res){
    res.end("Hello world");
})

server.listen(port, hostname, function(){
    console.log(`Server running at ${hostname}:${port}`);
})
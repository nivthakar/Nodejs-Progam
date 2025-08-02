let http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<center><h1>Welcome</h1></center>");
    res.end();
}).listen(8080);
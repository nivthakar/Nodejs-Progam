let http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    let name=()=>{
        res.write("This is arrow function<br> ");
    }
    name();
    name();
    name();
    name();
    name();
    res.end('Hello World!');
}).listen(8080);
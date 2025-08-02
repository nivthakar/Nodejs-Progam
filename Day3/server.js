let http = require('node:http');

let hostname = "127.0.0.1";
let port = 5000;
let name = "ABc";
let a = 5;
let b = 5;
let total;
let server = http.createServer((req, rs) => {
    rs.statusCode = 200;
    rs.setHeader('Content-Type', 'text/html');
    rs.write("My name is " + name+"<br>");
    total=a+b;
    rs.write((total)+"<br>");

    rs.write("<body bgcolor='pink'>");
    rs.end();

});

server.listen(port, hostname, () => {
    console.log(`Server is connected at http://${hostname}:${port}/`);

});
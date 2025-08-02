let http = require('http');

let server = http.createServer((req,res)=>{
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write("<b>This is my first program</b>");
	res.end("<h1>This is server</h1>");
	
});

let port = 3000;
let host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
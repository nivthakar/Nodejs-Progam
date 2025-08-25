let http = require('http');

let server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1>Hello World</h1>');

});

let port = 4000;
let host = 'localhost';
server.listen(port,host,()=>{
    console.log(`Server is running at http://${host}:${port}`);
});
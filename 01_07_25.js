const http = require('http');

class abc {
    constructor(res) {
        this.res = res;
    }

    test() {
        this.res.write("<p>Hello Test</p>");
    }
}

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    let obj = new abc(res);
    obj.test();

    res.end('<h1>Hello World!</h1>');
}).listen(8080, () => {
    console.log("Server running at http://localhost:8080/");
});

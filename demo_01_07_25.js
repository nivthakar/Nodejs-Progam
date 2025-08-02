let http = require('http');
class abc{
    constructor(res){
        this.res =res;

    }
    test(){
        this.res.write("Stud");
    }

}


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
   // res.write("Hello Test");
   let obj =new abc(res);
   obj.test();
    res.end('Hello World!');
}).listen(8181);
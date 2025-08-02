let http = require('http');
let port =5000;
let host ='localhost';

let name="Nirav";
let city="Rajkot";

let server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    //res.write("This is my first program");
    for(let i=1;i<=5; i++){
        res.write(i+"<br>");
    }
  //  res.write(name+" "+city);
    res.end("<h1>Welcome Nodejs</h1>");
});

server.listen(port,host,()=>{
    console.log(`Server Start at http://${host}:${port}`);
});
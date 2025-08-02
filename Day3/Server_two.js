let  http =require('http');

let server = http.createServer((req,res)=>{

    if(req.url==='/'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end("<h1>Welcome to Home Page</h1>");
    }else if(req.url==='/about'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end("<h1>Welcome to About Page</h1>");
    }
    else if(req.url==='/Service'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end("<h1>Here is Service </h1>");
    }
    else if(req.url==='/contact'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end("<h1>Here is Contact </h1>");
    }else{
         res.writeHead(200, {'Content-Type':'text/html'});
        //res.writeHead(404);
        res.end("<h1 style=color:red;>Page not Found</h1>");
    }
  

});

server.listen(3000,()=>{
    console.log('Server running at http://localhost:3000');
});
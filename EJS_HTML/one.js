const https = require('https');

https.get('https://jsonplaceholder.typicode.com/posts/1',(response)=>{
    let data = '';
    response.on('data',(chunk)=>{
            data+=chunk;

    });
    response.on('end',()=>{
        console.log('Response:',JSON.parse(data));

    });
    

}).on('error',(err)=>{
    console.error('Error:',err.message);
});
const https = require('https');

https.get('https://dummyjson.com/users',(response)=>{
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
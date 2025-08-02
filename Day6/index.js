const express= require('express');
const app = express()
const path = require('path');
const port = 3000;

app.get('/',(req,res)=>{

    //res.send("<h1>This is test</h1>");
    res.sendFile(path.join(__dirname,'home.html'));
})

app.get('/about',(req,res)=>{

    //res.send("<h1>This is test</h1>");
    res.sendFile(path.join(__dirname,'about.html'));
})

app.get('/contact',(req,res)=>{

    //res.send("<h1>This is test</h1>");
    res.sendFile(path.join(__dirname,'contact.html'));
})


app.get('/',(req,res)=>{

    //res.send("<h1>This is test</h1>");
    res.sendFile(path.join(__dirname,'home.html'));
})


app.get('/test',(req,res)=>{

    //res.send("<h1>This is test</h1>");
    res.sendFile(path.join(__dirname,'note.text'));
})
app.listen(port,()=>{

    console.log(`Server Start at ${port}`);
});
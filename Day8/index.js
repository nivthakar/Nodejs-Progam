const express = require('express')
const app = express()
const path = require('path');
const port = 4000
app.use(express.static('public'))
app.use(express.static('file'))


app.get('/',(req,res)=>{

   /* res.send("Test");*/
   res.sendFile(path.join(__dirname,'index.html'))
})

app.use((req,res)=>{

    res.sendFile(path.join(__dirname,'public','404.html'))
})
app.listen(port,()=>{

    console.log(`Server Start is port ${port}`);
    
})


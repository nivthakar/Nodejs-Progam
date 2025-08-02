const express =  require('express')
const app = express()
const path = require('path');
const  port = 3000

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
 res.render('home');   
})


app.get('/about/:id',(req,res)=>{
 res.render('about',{id:req.params.id});   
})
app.listen(port,()=>{

    console.log(`Server start on port ${port}`);
});
const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.urlencoded({extended:true}));
app.use(express.static('view'));
app.get('/',(req,res)=>{

    res.sendFile(__dirname+'/view/form.html');

});
app.post('/submit',(req,res)=>{
    const {name,age,email,num_one,num_two }= req.body;
    const sum = parseInt(num_one)+parseInt(num_two);
    res.send(`
        <h1>UserDetails</h1>
        <p><strong>Name:</strong>${name}</p>
        <p><strong>Age:</strong>${age}</p>
        <p><strong>Email:</strong>${email}</p>
        <p><strong>Number Sum:</strong>${num_one}+${num_two} = ${sum}</p>

        `);


});
app.listen(PORT,()=>{

    console.log(`Server running on http://localhost:${PORT}`);

});

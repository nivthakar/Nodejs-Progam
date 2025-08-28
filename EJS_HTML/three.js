const axios= require('axios');
axios.post('https://jsonplaceholder.typicode.com/posts',{

    title:'New Post',
    body:'This is the content',
    userId: 1

})
.then(response=>{
    console.log('New Post ID:',response.data.id);
    
})
.catch(error=>{
    console.error('Error:',error.message );

});
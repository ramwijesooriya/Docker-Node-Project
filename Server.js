const express = require('express');
const app = express();

const PORT = process.env.PORT || 500;

//end point defined for fetching data

app.get('/posts',async(req,res)=>{

    try {
        const responce =await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
        const data = await responce.json();
        res.json(data);
    } catch (error) {
        console.error("error fetching posts",error);
        res.status(500).json({error:"error feching posts"});
        
    }
});

app.get('/posts/:id',async(req,res)=>{
const {id} = req.params;
try {
   const response= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    res.json(data);

} catch (error) {
    console.error("error fetching posts",error);
    res.status(500).json({error:"error feching posts"});
}
});

app.listen(PORT,()=>console.log(`server is running on on port ${PORT}`));
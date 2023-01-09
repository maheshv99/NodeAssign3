const express=require("express");
const app=express();

const firstMid=(req,res,next)=>{
    console.log("This is a First Middle Ware Function");
    next();
}

app.use(firstMid);

const secondMid=(req,res,next)=>{
 
    console.log("this is a Secind Middle Ware Function");
    next();
}


app.get('/',(req,res)=>{
    console.log("this is a Home Page");
    res.send(`
    <h1>This is a Home Page</h1>
    <hr>
    `)
})

app.get('/student',secondMid,(req,res)=>{
    console.log("this is a Student Page");
    res.send(`<h1>This is a Student Page</h1><hr>`)
})

app.get('/contact',secondMid,(req,res)=>{
    console.log("this is a Contact Page");
    res.send("<h1>This is a Contact Page</h1><hr>")
})

app.get('/about',(req,res)=>{
    console.log("this is a About Page");
    res.send("<h1>This is About Page</h1><hr>")
})




app.listen(2020,(req,res)=>{
    console.log("This server is runnin 2020 port");
})
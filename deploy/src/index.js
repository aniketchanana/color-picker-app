const express = require("express");
const path = require("path");
const app = express();

const port = process.env.port || 3000;

app.use(express.static(path.join(__dirname,"../public")))


console.log(path.join(__dirname,"../public"));

app.get('/test',(req,res)=>{
    res.send("hello")
})

app.listen(port,()=>{
    console.log("listening at " + port);
});
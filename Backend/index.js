const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())

app.post("/AddTodo",(req,res)=>{

});
app.get("/Todos",(req,res)=>{

});
app.put("/UpdateTodo/:id",(req,res)=>{

});
app.delete("DeleteTodo/:id",(req,res)=>{

});


app.listen(port,()=>{
    console.log(`Welcome to the express server at ${port}`);
})
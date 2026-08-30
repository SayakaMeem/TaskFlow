const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


let tasks = [
    {
        id:1,
        title:"Learn React",
        completed:false
    }
];


// GET all tasks
app.get("/tasks",(req,res)=>{
    res.json(tasks);
});


// CREATE task
app.post("/tasks",(req,res)=>{

    if(!req.body.title || req.body.title.length < 3){

    return res.status(400).json({

        message:"Title must contain at least 3 characters"

    });

}


    const task={
        id:Date.now(),
        title:req.body.title,
        completed:false
    };


    tasks.push(task);

    res.json(task);

});


// DELETE task
app.delete("/tasks/:id",(req,res)=>{

    tasks = tasks.filter(
        t=>t.id != req.params.id
    );

    res.json({
        message:"Deleted"
    });

});


// COMPLETE task
app.put("/tasks/:id",(req,res)=>{

    const task = tasks.find(
        t=>t.id == req.params.id
    );


    task.completed = !task.completed;


    res.json(task);

});


app.listen(5000,()=>{
    console.log(
        "Server running on port 5000"
    );
});
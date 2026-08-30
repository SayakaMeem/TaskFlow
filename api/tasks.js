let tasks = [
    {
        id:1,
        title:"Learn React",
        completed:false
    }
];


export default function handler(req,res){

    res.setHeader(
        "Access-Control-Allow-Origin",
        "*"
    );


    if(req.method==="GET"){

        return res.status(200).json(tasks);

    }


    if(req.method==="POST"){

        const task={
            id:Date.now(),
            title:req.body.title,
            completed:false
        };

        tasks.push(task);

        return res.json(task);

    }


    if(req.method==="DELETE"){

        tasks =
        tasks.filter(
            t=>t.id != req.query.id
        );

        return res.json({
            message:"Deleted"
        });

    }


    if(req.method==="PUT"){

        let task =
        tasks.find(
            t=>t.id == req.query.id
        );


        task.completed =
        !task.completed;


        return res.json(task);

    }

}
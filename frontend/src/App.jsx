import { useEffect, useState } from "react";
import axios from "axios";


function App() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const API = "/api/tasks";


  // Load all tasks
  const fetchTasks = async () => {

    try {

      const response = await axios.get(API);

      setTasks(response.data);

    } catch (error) {

      console.log("API Error:", error);

    }

  };


  useEffect(() => {

    fetchTasks();

  }, []);



  // Add new task
  const addTask = async () => {

    if (title.trim() === "") {
      return;
    }


    await axios.post(API, {
      title: title
    });


    setTitle("");

    fetchTasks();

  };



  // Mark complete
  const completeTask = async (id) => {

    await axios.put(
      `${API}/${id}`
    );

    fetchTasks();

  };



  // Delete task
  const deleteTask = async (id) => {

    await axios.delete(
      `${API}/${id}`
    );

    fetchTasks();

  };



  return (

    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "#111827",
        color: "white",
        fontFamily: "Arial"
      }}
    >


      <h1>
        🚀 TaskFlow
      </h1>


      <p>
        Full Stack Task Management Application
      </p>



      <div>

        <input

          type="text"

          placeholder="Enter a task..."

          value={title}

          onChange={
            (e)=>setTitle(e.target.value)
          }


          style={{
            padding:"10px",
            width:"300px",
            marginRight:"10px"
          }}

        />


        <button

          onClick={addTask}

          style={{
            padding:"10px 20px",
            cursor:"pointer"
          }}

        >
          Add Task
        </button>


      </div>



      <hr
        style={{
          margin:"30px 0"
        }}
      />



      {
        tasks.map((task)=>(


          <div

            key={task.id}

            style={{

              background:"#1f2937",

              padding:"20px",

              marginBottom:"15px",

              borderRadius:"10px"

            }}

          >


            <h3>

              {task.title}

            </h3>



            <p>

              Status:

              {
                task.completed

                ?

                " ✅ Completed"

                :

                " ⏳ Pending"

              }

            </p>



            <button

              onClick={
                ()=>completeTask(task.id)
              }

              style={{
                marginRight:"10px"
              }}

            >

              Complete

            </button>




            <button

              onClick={
                ()=>deleteTask(task.id)
              }

            >

              Delete

            </button>



          </div>


        ))

      }


    </div>

  );

}


export default App;
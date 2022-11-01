import "../styles/App.scss";
import Status from "./Status";
import {useState,useEffect} from "react";


function App() {
  const[tasks,setTasks] = useState([]);
  useEffect(()=>{
    console.log("using effect")
  },[]);
  function addEmptyTask(status){
//
  }
  function addTask(tasktoAdd){
///
  }
  function moveTask(taskId){
///
  }
  function deleteTask(taskId){
    ///
  }
  function moveTask(id, newStatus){
    ///
  }
  function saveTToLS(tasks){
    ///
  }
  function loadTFromLS(tasks){
    ///
  }
  return (
    <div className="App">
     <h1>Task Manager</h1>
     <main>
      <section>
        <Status
        task={tasks}
        addEmptyTask={addEmptyTask}
        addTask={addTask}
        deleteTask={deleteTask}
        moveTask={moveTask}
        status="Overdue"/>
         <Status
        task={tasks}
        addEmptyTask={addEmptyTask}
        addTask={addTask}
        deleteTask={deleteTask}
        moveTask={moveTask}
        status="In Progress"/>
         <Status
        task={tasks}
        addEmptyTask={addEmptyTask}
        addTask={addTask}
        deleteTask={deleteTask}
        moveTask={moveTask}
        status="Completed"/>


       
      </section>
     </main>
    </div>
  );
}

export default App;

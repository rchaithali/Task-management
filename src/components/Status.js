import "../styles/status.scss";
import Task from "./Task";
export default function Status(props){
    const{status,tasks,addTask,deleteTask,addEmptyTask,moveTask}= props;
    let taskList,taskForStatus;
    function handleEmpty(){
        addEmptyTask(status);
    }
    if(tasks){
        taskForStatus=tasks.filter((task)=>{
            return task.status === status;
        });
    }
    if (taskForStatus){
        taskList=taskForStatus.map((task)=>{
            return(
                <Task
                addTask={(task)=>addTask(task)}
                deleteTask={(id)=>deleteTask(id)}
                moveTask={(id,status)=>moveTask}
                key={task.id}
                task={task}/>
            );
        });
    }
    return (
    <div className="status">
        <h3>{status}
    </h3>
    </div>
    
    
    
    );
}
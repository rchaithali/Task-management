import { useState, useEffect } from "react";
import "../styles/App.scss";
import Status from "./Status";

function App() {
  const [tasks, setTasks] = useState([]);
   useEffect(() => {
    loadTFromLS();
  }, []);

  function addEmptyTask(status) {
    const lastTask = tasks[tasks.length - 1];

    let newTaskId = 1;

    if (lastTask !== undefined) {
      newTaskId = lastTask.id + 1;
    }

    setTasks((tasks) => [
      ...tasks,
      {
        id: newTaskId,
        title: "",
        description: "",
        urgency: "",
        status: status,
      },
    ]);
  }

  function addTask(taskToAdd) {
    let filteredTasks = tasks.filter((task) => {
      return task.id !== taskToAdd.id;
    });

    let newTaskList = [...filteredTasks, taskToAdd];

    setTasks(newTaskList);

     saveTToLS(newTaskList);
  }

  function deleteTask(taskId) {
    let filteredTasks = tasks.filter((task) => {
      return task.id !== taskId;
    });

    setTasks(filteredTasks);

     saveTToLS(filteredTasks);
  }

  function moveTask(id, newStatus) {
    let task = tasks.filter((task) => {
      return task.id === id;
    })[0];

    let filteredTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    task.status = newStatus;

    let newTaskList = [...filteredTasks, task];

    setTasks(newTaskList);

     saveTToLS(newTaskList);
  }

  function  saveTToLS(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function loadTFromLS() {
    let loadedTasks = localStorage.getItem("tasks");

    let tasks = JSON.parse(loadedTasks);

    if (tasks) {
      setTasks(tasks);
    }
  }

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <main>
        <section>
          <Status
            tasks={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="Overdue"
          />
          <Status
            tasks={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="In Progress"
          />
          <Status
            tasks={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="Completed"
          />
        </section>
      </main>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id, title) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, title } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearTasks = () => {
    setTasks([]);
  };

  const getCompletedTasks = () => tasks.filter((task) => task.completed);
  const getRemainingTasks = () => tasks.filter((task) => !task.completed);

  return (
    <div className={`hero min-vh-100 d-flex flex-column align-items-center mt-4`}>
      <div className="container bg-white p-5 rounded bg-opacity-50">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="text-uppercase display-4">To Do List</h1>
        </div>
        <AddTaskForm onAddTask={addTask} />
        <div className={`task-list mt-3 p-3 rounded border`}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <p>{getRemainingTasks().length} tasks left</p>
            <button className="btn btn-danger" onClick={clearTasks}>Clear all tasks</button>
          </div>
          {tasks.length ? (
            <TaskList
              tasks={tasks}
              onEditTask={editTask}
              onDeleteTask={deleteTask}
              onToggleCompleted={toggleCompleted}
            />
          ) : (
            <div className="text-center">
              <p className="text-muted">Empty task</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
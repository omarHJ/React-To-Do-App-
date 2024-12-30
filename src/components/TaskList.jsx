import React from "react";
import Task from "./Task";
import 'bootstrap/dist/css/bootstrap.min.css';


const TaskList = ({ tasks, onEditTask, onDeleteTask, onToggleCompleted }) => {
  const reversedTasks = tasks.slice().reverse();
  return (
    <ul className="list-group">
      {reversedTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
          onToggleCompleted={onToggleCompleted}
        />
      ))}
    </ul>
  );
};

export default TaskList;
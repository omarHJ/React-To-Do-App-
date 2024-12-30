import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const Task = ({ task, onEditTask, onDeleteTask, onToggleCompleted }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
    setTitle(task.title);
  };

  const handleDone = () => {
    if (title.trim()) {
      onEditTask(task.id, title.trim());
      setEditing(false);
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    onDeleteTask(task.id);
  };

  const handleToggleCompleted = () => {
    onToggleCompleted(task.id);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {editing ? (
        <form onSubmit={handleDone} className="w-100 d-flex justify-content-between">
          <input
            type="text"
            value={title}
            onChange={handleChange}
            className="form-control"
          />
          <div>
            <button type="submit" className="btn btn-success">
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button type="button" className="btn btn-warning" onClick={handleCancel}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </form>
      ) : (
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={handleToggleCompleted}
              className="me-2"
            />
            <span className={task.completed ? "text-decoration-line-through" : ""}>
              {task.title}
            </span>
          </div>
          <div>
            <button className="btn btn-info me-2" onClick={handleEdit}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default Task;
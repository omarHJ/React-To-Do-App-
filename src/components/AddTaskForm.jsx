import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title.trim());
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex mb-3">
      <div className={`input-group bg-secondary rounded`}>
        <input
          className="form-control"
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">Add</button>
      </div>
    </form>
  );
};

export default AddTaskForm;
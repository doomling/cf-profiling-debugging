import React, { Profiler } from "react";

function TodoItem({ task, toggleTask, deleteTask }) {
  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {task.text}
      <button onClick={() => toggleTask(task.id)}>Toggle</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;

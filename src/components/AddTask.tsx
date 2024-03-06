import React, { useState } from "react";

function AddTask({ handleAddTask }) {
  const [task, setTask] = useState("");

  function addTask() {
    handleAddTask(task);
  }
  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
    </>
  );
}

export default AddTask;

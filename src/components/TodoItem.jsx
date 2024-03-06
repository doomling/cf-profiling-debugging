import React from "react";

function TodoItem({ task, toggleTask, deleteTask }) {
  // Cada vez que TodoItem se renderiza, se crea una nueva referencia para style
  const style = {
    textDecoration: task.completed ? "line-through" : "none",
    backgroundColor: "white", // Esta línea es simplemente para agregar más al literal, pudiendo ser cualquier propiedad de estilo.
  };

  return (
    <li style={style}>
      {" "}
      {/* Aquí, el objeto `style` es una nueva referencia en cada render */}
      {task.text}
      <button onClick={() => toggleTask(task.id)}>Toggle</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

TodoItem.whyDidYouRender = true;

export default TodoItem;

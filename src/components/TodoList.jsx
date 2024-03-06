import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { useEffect, useRef } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const firstRender = useRef(true);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTasks(savedTodos);
    }
  }, []);

  // Guarda las tareas en el almacenamiento local cada vez que cambian
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false; // After the first render, set this to false
      return; // Exit the effect without doing anything
    }
    // This code runs on subsequent renders, not the first one
    localStorage.setItem("todos", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task !== "") {
      const newTasks = [
        ...tasks,
        { id: Date.now(), text: task, completed: false },
      ];
      setTasks([...newTasks]); // spread innecesario
      setTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => {
          return (
            <TodoItem
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          );
        })}{" "}
      </ul>
    </div>
  );
}
TodoList.whyDidYouRender = true;

export default TodoList;

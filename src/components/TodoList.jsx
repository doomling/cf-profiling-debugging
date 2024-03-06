import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { useEffect, useRef } from "react";
import AddTask from "./AddTask";

function TodoList() {
  const [tasks, setTasks] = useState([]);
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

  const addTask = (newTask) => {
    if (newTask !== "") {
      const newTasks = [
        ...tasks,
        { id: Date.now(), text: newTask, completed: false },
      ];
      setTasks([...newTasks]); // spread innecesario
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
      <AddTask handleAddTask={addTask} />
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

export default TodoList;

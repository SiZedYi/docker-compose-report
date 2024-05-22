import React, { useState, useEffect } from "react";
import axios from "axios";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({
    content: "",
    priority: 0,
    deadline: "",
  });

  // Lấy danh sách todos
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/todos")
      .then((response) => setTodos(response.data))
      .catch((error) => console.error(`Error: ${error}`));
  }, []);

  // Thêm mới todo
  const addTodo = () => {
    axios
      .post("http://localhost:3001/api/todos", newTodo)
      .then((response) => setTodos([...todos, response.data]))
      .catch((error) => console.error(`Error: ${error}`));
  };

  // Sửa todo
  const updateTodo = (id, updatedTodo) => {
    axios
      .put(`http://localhost:3001/api/todos/${id}`, updatedTodo)
      .then((response) => {
        const updatedTodos = todos.map((todo) =>
          todo.id === id ? response.data : todo
        );
        setTodos(updatedTodos);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  // Xóa todo
  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:3001/api/todos/${id}`)
      .then(() => {
        const remainingTodos = todos.filter((todo) => todo.id !== id);
        setTodos(remainingTodos);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <div style={{ padding: 30 }}>
      <input
        type="text"
        onChange={(e) => setNewTodo({ ...newTodo, content: e.target.value })}
        placeholder="Content"
        style={{ padding: 5 }}
      />
      <input
        type="number"
        onChange={(e) => setNewTodo({ ...newTodo, priority: e.target.value })}
        placeholder="Priority"
        style={{ padding: 5, margin:5 }}
      />
      <input
        type="date"
        onChange={(e) => setNewTodo({ ...newTodo, deadline: e.target.value })}
        placeholder="Deadline"
        style={{ padding: 5 }}
      />
      <button onClick={addTodo} style={{ padding: 5, margin:5 }}>
        Thêm mới
      </button>
      {/* Render danh sách todos */}
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>Content: {todo.content}</p>
          <p>Priority: {todo.priority}</p>
          <p>Deadline: {todo.deadline}</p>
          <button onClick={() => deleteTodo(todo.id)}>Xóa</button>
          <h3>_______________________________</h3>
        </div>
      ))}
    </div>
  );
};

export default TodoApp;

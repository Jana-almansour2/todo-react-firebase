import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc, getDocs, query, where, deleteDoc, doc } from "firebase/firestore";
import { logout } from "../services/authService";
import "./Todo.css";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const fetchTodos = async () => {
    const q = query(collection(db, "todos"), where("uid", "==", auth.currentUser.uid));
    const querySnapshot = await getDocs(q);
    const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setTodos(items);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (newTodo.trim() === "") return;
    await addDoc(collection(db, "todos"), {
      text: newTodo,
      uid: auth.currentUser.uid,
      createdAt: new Date()
    });
    setNewTodo("");
    fetchTodos();
  };

  const removeTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
    fetchTodos();
  };

  return (
    <div className="todo-container">
      <h1>My Todos</h1>
      <div className="input-section">
        <input 
          type="text" 
          value={newTodo} 
          onChange={(e) => setNewTodo(e.target.value)} 
          placeholder="Add new todo" 
        />
        <button className="add-btn" onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            {todo.text}
            <button className="delete-btn" onClick={() => removeTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button className="logout-btn" onClick={logout}>Logout</button>
    </div>
  );
}

export default Todo;

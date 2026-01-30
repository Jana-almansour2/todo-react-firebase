import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc, getDocs, query, where, deleteDoc, doc } from "firebase/firestore";
import { logout } from "../services/authService";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // تجيب المهام الخاصة بالمستخدم
  const fetchTodos = async () => {
    const q = query(collection(db, "todos"), where("uid", "==", auth.currentUser.uid));
    const querySnapshot = await getDocs(q);
    const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setTodos(items);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // إضافة مهمة جديدة
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

  // حذف مهمة
  const removeTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
    fetchTodos();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>My Todos</h1>
      <div>
        <input 
          type="text" 
          value={newTodo} 
          onChange={(e) => setNewTodo(e.target.value)} 
          placeholder="Add new todo" 
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text} 
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Todo;

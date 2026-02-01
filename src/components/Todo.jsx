import { useEffect, useState } from "react";
import {
  addTodo,
  getUserTodos,
  deleteTodo,
  updateTodo
} from "../services/todoService";
import "./Todo.css";

const Todo = ({ user }) => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dark, setDark] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const loadTodos = async () => {
    const data = await getUserTodos(user.uid);

    const sorted = data.sort((a, b) => a.completed - b.completed);
    setTodos(sorted);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAdd = async () => {
    if (!text.trim()) return;

    await addTodo({
      text,
      priority,
      completed: false,
      uid: user.uid,
      createdAt: new Date()
    });

    setText("");
    setPriority("medium");
    loadTodos();
  };

  const toggleTodo = async (todo) => {
    await updateTodo(todo.id, { completed: !todo.completed });
    loadTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditingText(todo.text);
  };

  const saveEdit = async (id) => {
    await updateTodo(id, { text: editingText });
    setEditingId(null);
    setEditingText("");
    loadTodos();
  };

  return (
    <div className={`todo ${dark ? "dark" : ""}`}>
      <header>
        <h2>My Todos</h2>
        <button onClick={() => setDark(!dark)}>
          {dark ? "☀ Light" : "🌙 Dark"}
        </button>
      </header>

      <div className="add-box">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="New task..."
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "done" : ""}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo)}
            />

            <span className={`priority ${todo.priority}`}></span>

            {editingId === todo.id ? (
              <>
                <input
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={() => saveEdit(todo.id)}>💾</button>
              </>
            ) : (
              <>
                <p onDoubleClick={() => startEdit(todo)}>
                  {todo.text}
                </p>
                <div className="actions">
                  <button onClick={() => startEdit(todo)}>✏</button>
                  <button onClick={() => handleDelete(todo.id)}>❌</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

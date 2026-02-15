// src/App.jsx

import { useAuth } from "./context/AuthContext";
import { useTheme } from "./context/ThemeContext";
import Login from "./components/Login";
import Todo from "./components/Todo";
import { logout } from "./services/authService";

function App() {
  const { user, loading } = useAuth();
  const { isDark, toggleTheme } = useTheme();

  if (loading) return <div>Loading...</div>;

  return (
    <div className={isDark ? "dark" : ""}>
      
      {/* زر تغيير الثيم */}
      <button
        onClick={toggleTheme}
        style={{
          position: "fixed",
          top: "16px",
          right: "16px",
          zIndex: 1000,
          padding: "8px 16px",
          borderRadius: "8px",
          background: isDark ? "#333" : "#f0f0f0",
          color: isDark ? "#fff" : "#333",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
        }}
      >
        {isDark ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      {user ? (
        <>
          <button onClick={logout}>Logout</button>
          <Todo user={user} />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;

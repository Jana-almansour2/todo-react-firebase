import { signInWithGoogle } from "../services/authService";
import "./Login.css";

const Login = () => {
  const handleLogin = async () => {
    try {
      console.log("Sign in button clicked");
      await signInWithGoogle();
      console.log("signInWithGoogle completed successfully");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome to Todo App</h1>
      <p className="subtitle">
        Organize your tasks, set priorities, and stay productive
      </p>

      <button className="google-btn" onClick={handleLogin}>
        <img
          className="google-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="Google"
        />
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;

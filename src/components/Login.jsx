import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import "./Login.css";

const Login = () => {
  const login = async () => {
    await signInWithPopup(auth, provider);
  };

  return (
    <div className="login-container">
      <h1>Welcome to Todo App 📝</h1>
      <p className="subtitle">
        Organize your tasks, set priorities, and stay productive
      </p>

      <button className="google-btn" onClick={login}>
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

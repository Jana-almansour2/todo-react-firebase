import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../services/authService";
import "./Login.css"; 

function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/todo");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome to My Todo App</h1>
      <button className="google-btn" onClick={handleGoogleLogin}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" 
             alt="Google logo" className="google-logo" />
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;


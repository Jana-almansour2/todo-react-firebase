import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import Todo from "./components/Todo";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {user ? (
        <>
          <button onClick={() => signOut(auth)}>Logout</button>
          <Todo user={user} />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;


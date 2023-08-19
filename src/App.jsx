import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";
import { auth } from "./firebase";
import Login from "./pages/Login";
import Post from "./pages/Post";
import Home from "./pages/Home";
import "./App.css";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        {!isAuth ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
            <Link to="/post">Create Post</Link>
            <button className="logOut" onClick={signUserOut}>
              Log Out
            </button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/post" element={<Post isAuth={isAuth} />} />
      </Routes>
    </>
  );
}

export default App;

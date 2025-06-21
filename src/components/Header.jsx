import React,{useState} from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from "../assets/logo.png"
import { signInWithPopup, signOut } from 'firebase/auth';
import {auth, googleAuthProvider} from "../firebase/config";

const Header = () => {
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("isAuth") || false));
  const handleLogin = () => {
    signInWithPopup(auth, googleAuthProvider).then((data) => console.log(data));
    setIsAuth(true);
    localStorage.setItem("isAuth", true);
  };
  const handleLogout = () => {
    signOut(auth);
    setIsAuth(false);
    localStorage.setItem("isAuth", false);
  };
  return (
   <header>
    <Link to="/" className="logo">
      <img src={Logo} alt="logo" />
      <span>The Blog</span>
    </Link>
    <nav className="nav">
      <NavLink  to="/">
        <span className="link">Home</span>
      </NavLink>
      { isAuth ? (
        <>
          <NavLink to="/create">
            <span className="link" >Create</span>
          </NavLink>
          <button onClick={handleLogout} className="auth"><i className="bi bi-box-arrow-right"></i> Logout</button>
        </>
      ) : (
        <button onClick={handleLogin} className="auth"><i className="bi bi-google"></i> Login</button>
      )
      }
    
    </nav>
   </header>
  )
}

export default Header

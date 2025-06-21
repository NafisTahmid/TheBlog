import React from 'react'
import { useNavigate } from 'react-router-dom';
const ProtectedRoutes = ({children}) => {
    const navigate = useNavigate();
    const isAuth = JSON.parse(localStorage.getItem("isAuth"));
  return isAuth ? children : navigate("/")
  
}

export default ProtectedRoutes

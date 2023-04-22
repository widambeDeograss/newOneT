import React from "react";
import { Navigate,Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "./AuthSlice";


function AdminRequireAuth() {
    const token = useSelector(selectCurrentToken);
    const user = localStorage.getItem("user")
    const location = useLocation();
    const role =JSON.parse(user) 
    console.log(role);
  return (
    token && role.role === 0
    ? <Outlet/>
    : <Navigate to="login"  />
  )
}

export default AdminRequireAuth

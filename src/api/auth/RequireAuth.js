import { Navigate,Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./AuthSlice";


function RequireAuth() {
    const token = useSelector(selectCurrentToken);
    const location = useLocation();

  return (
    token
    ? <Outlet/>
    : <Navigate to="login"  />
  )
}

export default RequireAuth
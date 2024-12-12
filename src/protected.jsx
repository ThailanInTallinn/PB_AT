import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const sessionID = localStorage.getItem("sessionID");

  return sessionID ? <Outlet /> : <Navigate to="/signin" />;
};

export default Protected;

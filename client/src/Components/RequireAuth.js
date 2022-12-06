import React, { useContext } from "react";
import UserContext from "../context/userContext";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { userdata } = useContext(UserContext);
  if (!userdata) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default RequireAuth;

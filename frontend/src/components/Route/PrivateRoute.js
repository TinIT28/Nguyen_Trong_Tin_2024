import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component }) => {
  const { isAuthenticated } = useSelector((state) => state.userReducer);

  if (isAuthenticated === false) {
    return <Navigate to="/login" replace />;
  }

  return <Component />;
};

export default ProtectedRoute;

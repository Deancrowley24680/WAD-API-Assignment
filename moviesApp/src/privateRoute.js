import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from './contexts/authContext';

const PrivateRoute = ({ children }) => {
  const context = useContext(AuthContext);
  const location = useLocation();

  if (context.isAuthenticated) {
    return children;
  }

  return (
    <Navigate
      to="/login"
      state={{ from: location }}
      replace
    />
  );
};

export default PrivateRoute;
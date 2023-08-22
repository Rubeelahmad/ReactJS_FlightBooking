import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // Handle login logic

  return (
    <>
      <h2>Login</h2>
      {/* Login form content */}
      <Link to="/register">Don't have an account? Register here.</Link>
    </>
  );
};

export default Login;

import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

const Login = () => {
  // Handle login logic

  return (
    <AuthLayout>
      <h2>Login</h2>
      {/* Login form content */}
      <Link to="/register">Don't have an account? Register here.</Link>
    </AuthLayout>
  );
};

export default Login;

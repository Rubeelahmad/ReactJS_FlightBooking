import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

const Register = () => {
  // Handle registration logic

  return (
    <AuthLayout>
      <h2>Register</h2>
      {/* Register form content */}
      <Link to="/login">Already have an account? Login here.</Link>
    </AuthLayout>
  );
};

export default Register;

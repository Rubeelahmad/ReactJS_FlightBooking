import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  // Handle registration logic

  return (
    <>
      <h2>Register</h2>
      {/* Register form content */}
      <Link to="/login">Already have an account? Login here.</Link>
    </>
  );
};

export default Register;

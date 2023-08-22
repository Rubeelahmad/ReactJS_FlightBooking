import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import "./styles/main.css";
import AuthLayout from "./layouts/AuthLayout";
import AuthRoutes from "./routes/AuthRoutes";

function App() {
  return (
    <Router>
      <AuthLayout>
        <Routes>
          {AuthRoutes.map((route) => (
            <Route path={route.path} element={route.component} />
          ))}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

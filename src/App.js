import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import "./styles/main.css";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import PublicRoutes from "./routes/PublicRoutes";
import AlertComponent from "./components/Alert/AlertComponent";
import { showAlertMessage } from "./store/features/generalSlice/alertSlice";

function App() {
  const alertMsg = useSelector((state) => state.alert.alertMsg);
  const dispatch = useDispatch();
  return (
    <Router>
      <AuthLayout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {PublicRoutes.map((route) => (
            <Route path={route.path} element={route.component} />
          ))}
          <Route path="/" element={<Home />} />
        </Routes>
        {alertMsg.open && (
          <AlertComponent
            open={alertMsg.open}
            severity={alertMsg.severity}
            message={alertMsg.message}
            onClose={() => dispatch(showAlertMessage({ open: false }))}
          />
        )}
      </AuthLayout>
    </Router>
  );
}

export default App;

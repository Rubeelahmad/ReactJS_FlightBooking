import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import "./styles/main.css";
import PublicLayout from "./layouts/PublicLayout";
import PublicRoutes from "./routes/PublicRoutes";
import AlertComponent from "./components/Alert/AlertComponent";
import { showAlertMessage } from "./store/features/generalSlice/alertSlice";
import Loading from "./components/Loader/Loading";
import FlightBooking from "./pages/FlightBooking";
import AvailabelFlights from "./pages/AvailableFlights";

function App() {
  const alertMsg = useSelector((state) => state.alert.alertMsg);
  const loading = useSelector((state) => state.alert.loading);
  const dispatch = useDispatch();
  return (
    <Router>
      <PublicLayout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {PublicRoutes.map((route) => (
            <Route path={route.path} element={route.component} />
          ))}
          <Route path="/flightbooking" element={<FlightBooking />} />
          <Route path="/flights" element={<AvailabelFlights />} />
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
        {loading && <Loading />}
      </PublicLayout>
    </Router>
  );
}

export default App;

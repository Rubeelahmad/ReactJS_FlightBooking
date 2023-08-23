import React from "react";
import Header from "../../components/Header";
import "./styles.css";
import Footer from "../../components/Footer";
import ContactUsFooter from "../../components/ContactUsFooter";
import { useLocation } from "react-router-dom";

const AuthLayout = ({ children }) => {
  const location = useLocation();
  return (
    <div
      className="auth-layout"
      style={{ backgroundImage: "url('../../assets/icons/authBg.svg')" }}
    >
      <Header isTransparent={location.pathname === "/"} />
      <main className="auth-main">{children}</main>
      <ContactUsFooter />
      <Footer />
    </div>
  );
};

export default AuthLayout;

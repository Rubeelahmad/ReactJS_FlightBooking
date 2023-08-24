import React from "react";
import Header from "../../components/Header";
import "./styles.css";
import Footer from "../../components/Footer";
import ContactUsFooter from "../../components/ContactUsFooter";
import { useLocation } from "react-router-dom";

const PublicLayout = ({ children }) => {
  const location = useLocation();
  return (
    <div className="auth-layout">
      <Header
        isTransparent={location.pathname === "/"}
        lightColor={location.pathname === "/"}
      />
      <main className="auth-main">{children}</main>
      <ContactUsFooter />
      <Footer />
    </div>
  );
};

export default PublicLayout;

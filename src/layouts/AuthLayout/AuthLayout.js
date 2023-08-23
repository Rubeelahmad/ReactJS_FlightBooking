import React from "react";
import Header from "../../components/Header";
import "./styles.css";
import Footer from "../../components/Footer";
import ContactUsFooter from "../../components/ContactUsFooter";

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      <Header />
      <main className="auth-main">
        <div className="auth-card">{children}</div>
      </main>
      <ContactUsFooter />
      <Footer />
    </div>
  );
};

export default AuthLayout;

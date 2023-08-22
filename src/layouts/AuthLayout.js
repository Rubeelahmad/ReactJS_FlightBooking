import React from "react";
import Header from "../components/Header";

function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      <Header />
      <main className="auth-main">
        <div className="auth-card">{children}</div>
      </main>
    </div>
  );
}

export default AuthLayout;

import React from "react";

function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      <main className="auth-main">
        <div className="auth-card">{children}</div>
      </main>
    </div>
  );
}

export default AuthLayout;

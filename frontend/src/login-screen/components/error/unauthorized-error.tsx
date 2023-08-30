import React from "react";
import "./style/unauthorized-error.css";

function UnauthorizedError() {
  return (
    <div className="main">
      <p className="unauthorized-text">Email/Senha incorretos ou inválidos</p>
    </div>
  );
}

export default UnauthorizedError;

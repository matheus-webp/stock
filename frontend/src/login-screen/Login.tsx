import React from "react";
import axios from "axios";
import UnauthorizedError from "./components/error/unauthorized-error";
import "./login.css";
import { CustomInput } from "../components/input/custom-input";

export function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleEmailCHange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/login`, {
        email,
        password,
      });

      const authToken = response.data.access_token;
      localStorage.setItem("authToken", authToken);
    } catch (error) {
      setError(true);
    }
  };

  const loginDemoAccount = async (event: React.FormEvent) => {
    event.preventDefault();
    await axios.post(`http://localhost:3000/login`, {
      email: "demo@demo.com",
      password: "123456",
    });
  };

  return (
    <div id="main">
      <div id="login">
        {error && <UnauthorizedError />}
        <div id="loginTitle">Login</div>
        <form onSubmit={handleFormSubmit}>
          <CustomInput
            value={email}
            type="text"
            label="Email"
            onChange={handleEmailCHange}
          />
          <CustomInput
            value={password}
            type="password"
            label="Senha"
            onChange={handlePasswordChange}
          />
          <button type="submit" className="enter-button">
            Entrar
          </button>
          <p className="footer-text">
            Não tem uma conta?{" "}
            <a href="http://localhost:5173/signup">Criar conta</a>
          </p>
          <div className="footer">
            <div className="line"></div>
            <p className="account-demo">Ou</p>
            <div className="line"></div>
          </div>
          <button
            type="submit"
            className="demo-button"
            onClick={loginDemoAccount}
          >
            Entrar com conta demo
          </button>
        </form>
      </div>
    </div>
  );
}

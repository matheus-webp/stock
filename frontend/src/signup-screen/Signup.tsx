import React from "react";
import "./signup.css";
import { CustomInput } from "../components/input/custom-input";
import axios from "axios";

export function Signup() {
  const [error, setError] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
  const [name, setName] = React.useState("");

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post(`http://localhost:3000/user/signup`, {
        name,
        email,
        password,
        passwordConfirmation,
      });
    } catch (error) {
      setError(true);
    }
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = (e: any) => {
    setPasswordConfirmation(e.target.value);
  };

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  return (
    <div className="signup-container">
      <div id="loginTitle">Criar conta</div>
      <form onSubmit={handleFormSubmit}>
        <CustomInput
          value={name}
          type="text"
          label="Nome"
          onChange={handleNameChange}
        />
        <CustomInput
          value={email}
          type="email"
          label="Email"
          onChange={handleEmailChange}
        />
        <CustomInput
          value={password}
          type="password"
          label="Senha"
          onChange={handlePasswordChange}
        />
        <CustomInput
          value={passwordConfirmation}
          type="password"
          label="Confirmação de senha"
          onChange={handlePasswordConfirmChange}
        />
        <button type="submit" className="enter-button">
          Cadastrar
        </button>
        <p className="footer-text">
          Já tem uma conta? <a href="http://localhost:5173/">Fazer Login</a>
        </p>
      </form>
    </div>
  );
}

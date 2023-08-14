import React from "react";
import axios from "axios";
import UnauthorizedError from "./components/error/unauthorized-error";
import "./login.css";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);

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

  return (
    <div id="login">
      {error && <UnauthorizedError />}
      <div id="loginTitle">Login</div>
      <form onSubmit={handleFormSubmit}>
        <div className="labelLayout">
          <label htmlFor="emailInput" className="inputTitle">
            Email
          </label>
          <div>
            <input
              type="text"
              id="emailInput"
              className="inputText"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="labelLayout">
          <label htmlFor="passwordInput" className="inputTitle">
            Senha
          </label>
          <div>
            <input
              type="password"
              id="passwordInput"
              className="inputText"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button type="submit"> Entrar</button>
        </div>
      </form>
    </div>
  );
}

export default Login;

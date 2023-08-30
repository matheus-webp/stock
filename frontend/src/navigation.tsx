import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./login-screen/Login";
import { Signup } from "./signup-screen/Signup";

export function Navigation() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

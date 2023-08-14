import React from "react";
import Login from "./login-screen/Login";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <Login />
    </>
  );
}

export default App;

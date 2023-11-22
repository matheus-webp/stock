/* eslint-disable no-undef */
import styles from "./ButtonDemo.module.css";

const ButtonDemo = () => {
  function demoAccountLogin() {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(`${process.env.API_BASE_URL}/login`, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Não foi possível obter os dados.");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <button onClick={demoAccountLogin} className={styles.buttonDemo}>
      <p className={styles.buttonDemoText}>Entre com conta demo</p>
    </button>
  );
};

export default ButtonDemo;

import styles from './ButtonDemo.module.css';

const ButtonDemo = () => {
  function teste2() {
    console.log('clicou');
  }

  return (
    <button onClick={teste2} className={styles.buttonDemo}>
      <p className={styles.buttonDemoText}>Entre com conta demo</p>
    </button>
  );
};

export default ButtonDemo;

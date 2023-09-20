import styles from './ButtonSubmit.module.css';

const ButtonSubmit = () => {
  function teste() {
    console.log('clicou');
  }

  return (
    <button onClick={teste} className={styles.buttonSubmit}>
      Entrar
    </button>
  );
};

export default ButtonSubmit;

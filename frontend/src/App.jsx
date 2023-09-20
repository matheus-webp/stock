import ButtonSubmit from './Components/ButtonSubmit';
import Input from './Components/Input';
import styles from './App.module.css';
import ButtonDemo from './Components/ButtonDemo';

const App = () => {
  return (
    <div className={styles.login}>
      <h1 className={styles.loginTitulo}>Login</h1>
      <Input title="Email" type="email" />
      <Input title="Senha" type="password" />
      <ButtonSubmit background="#189EA7" color="#fff" border="none" />
      <p className={styles.createAccount}>
        Não tem uma conta?{' '}
        <a className={styles.createAccountLink} href="https://google.com/">
          Criar conta
        </a>
      </p>
      <fieldset className={styles.divider}>
        <legend className={styles.dividerText}>Ou</legend>
      </fieldset>
      <ButtonDemo />
    </div>
  );
};

export default App;

import PropTypes from 'prop-types';
import styles from './Input.module.css';

const Input = ({ title, type }) => {
  return (
    <div className={styles.input}>
      <label className={styles.inputName} htmlFor={title}>
        {title}
      </label>
      <input className={styles.inputField} type={type} />
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;

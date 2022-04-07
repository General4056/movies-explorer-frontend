import "./Register.css";
import { Link } from "react-router-dom";
import { useInput } from "../../utils/hooks/useInput";
import { register } from "../../utils/MainApi";

function Register({ handleRegister, registerError, isRequestSending }) {
  const name = useInput("", { isEmpty: true, minLength: 4, maxLength: 30 });
  const email = useInput("", {
    isEmpty: true,
    isEmail: true,
    minLength: 4,
  });
  const password = useInput("", {
    isEmpty: true,
    minLength: 6,
  });

  function handleRegisterButtonClick(e) {
    e.preventDefault();
    handleRegister(name.value, email.value, password.value);
  }

  return (
    <div className="register">
      <Link to="/" className="logo register__logo"></Link>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="form-register" name="form-register">
        <label className="form-register__label">
          <span className="form-register__span">Имя</span>
          <input
            value={name.value}
            onChange={name.onChange}
            onBlur={name.onBlur}
            type="name"
            name="name"
            className={`form-register__input ${
              !name.inputValid && name.isVisited && "form-register__input_error"
            }`}
            minLength="4"
            maxLength="30"
            required
          />
          {!name.inputValid && name.isVisited && (
            <span className="form-register__error">{name.errorMessage}</span>
          )}
        </label>
        <label className="form-register__label">
          <span className="form-register__span">E-mail</span>
          <input
            value={email.value}
            onChange={email.onChange}
            onBlur={email.onBlur}
            type="email"
            name="email"
            className={`form-register__input ${
              !email.inputValid &&
              email.isVisited &&
              "form-register__input_error"
            }`}
            minLength="4"
            maxLength="30"
            required
          />
          {!email.inputValid && email.isVisited && (
            <span className="form-register__error">{email.errorMessage}</span>
          )}
        </label>
        <label className="form-register__label">
          <span className="form-register__span">Пароль</span>
          <input
            value={password.value}
            onChange={password.onChange}
            onBlur={password.onBlur}
            type="password"
            name="password"
            className={`form-register__input ${
              !password.inputValid &&
              password.isVisited &&
              "form-register__input_error"
            }`}
            minLength="4"
            maxLength="30"
            required
          />
          {!password.inputValid && password.isVisited && (
            <span className="form-register__error">
              {password.errorMessage}
            </span>
          )}
        </label>
        <div className="form-register__container">
          <span className="form-register__submit-error">{registerError}</span>
          <button
            onClick={handleRegisterButtonClick}
            disabled={
              !name.inputValid ||
              !email.inputValid ||
              !password.inputValid ||
              isRequestSending
            }
            className="form-register__submit-button"
          >
            Зарегистрироваться
          </button>
          <p className="form-register__text">
            {`Уже зарегистрированы? `}
            <Link to="/signin" className="form-register__link">
              Войти
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;

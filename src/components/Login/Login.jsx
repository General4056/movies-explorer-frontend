import "../Register/Register.css";
import { Link } from "react-router-dom";
import { useInput } from "../../utils/hooks/useInput";

function Login({ handleLogin, loginError, isRequestSending }) {
  const email = useInput("", {
    isEmpty: true,
    isEmail: true,
    minLength: 4,
  });
  const password = useInput("", {
    isEmpty: true,
    minLength: 6,
  });

  function handleLoginButtonClick(e) {
    e.preventDefault();
    handleLogin(email.value, password.value);
  }
  return (
    <div className="register">
      <Link to="/" className="logo register__logo"></Link>
      <h2 className="register__title">Рады видеть!</h2>
      <form className="form-register" name="form-register">
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
            required
          />
          {!password.inputValid && password.isVisited && (
            <span className="form-register__error">
              {password.errorMessage}
            </span>
          )}
        </label>
        <div className="form-register__container">
          <span className="form-register__submit-error">{loginError}</span>
          <button
            onClick={handleLoginButtonClick}
            disabled={
              !password.inputValid || !email.inputValid || isRequestSending
            }
            className="form-register__submit-button"
          >
            Войти
          </button>
          <p className="form-register__text">
            {`Ещё не зарегистрированы? `}
            <Link to="/signup" className="form-register__link">
              Регистрация
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;

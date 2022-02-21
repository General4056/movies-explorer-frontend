import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <Link to="/" className="logo register__logo"></Link>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="form-register" name="form-register">
        <label className="form-register__label">
          <span className="form-register__span">Имя</span>
          <input
            type="name"
            name="name"
            className="form-register__input"
            minLength="4"
            maxLength="30"
            required
          />
          <span className="form-register__error"></span>
        </label>
        <label className="form-register__label">
          <span className="form-register__span">E-mail</span>
          <input
            type="email"
            name="email"
            className="form-register__input"
            minLength="4"
            maxLength="30"
            required
          />
          <span className="form-register__error"></span>
        </label>
        <label className="form-register__label">
          <span className="form-register__span">Пароль</span>
          <input
            type="password"
            name="password"
            className="form-register__input form-register__input_error"
            minLength="4"
            maxLength="30"
            required
          />
          <span className="form-register__error">Что-то пошло не так...</span>
        </label>
        <div className="form-register__container">
          <button className="form-register__submit-button">
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

import "./Promo.css";
import landingLogo from "../../images/landing-logo.png";
import { Link, useNavigate } from "react-router-dom";

function Promo() {
  const navigate = useNavigate();
  function onSigninClick() {
    navigate("/signin");
  }
  return (
    <section className="promo">
      <div className="promo__header">
        <Link to="/" className="logo"></Link>
        <div className="promo__button-container">
          <Link to="/signup" className="promo__register-button">
            Регистрация
          </Link>
          <button onClick={onSigninClick} className="promo__signin-button">
            Войти
          </button>
        </div>
      </div>
      <div className="promo__description">
        <div className="promo__description-container">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <button className="promo__link">Узнать больше</button>
        </div>
        <img
          src={landingLogo}
          alt="логотип"
          className="promo__landing-logo"
        ></img>
      </div>
    </section>
  );
}

export default Promo;

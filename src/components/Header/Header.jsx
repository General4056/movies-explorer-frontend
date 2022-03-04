import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountButton from "../AccountButton/AccountButton";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ loggedIn, isThisMain }) {
  const [navigationIsVisible, setNavigationIsVisible] = useState(false);
  function onBurgerClick() {
    setNavigationIsVisible(!navigationIsVisible);
  }
  const navigate = useNavigate();
  function onSigninClick() {
    navigate("/signin");
  }
  return (
    <>
      <section className={isThisMain ? "header header_main-color" : "header"}>
        <Link to="/" className="logo"></Link>
        {loggedIn ? (
          <>
            <nav className="header__nav">
              <Link to="/movies" className="header__nav-link">
                Фильмы
              </Link>
              <Link to="/saved-movies" className="header__nav-link">
                Сохранённые фильмы
              </Link>
            </nav>
            <div className="header__account">
              <AccountButton />
            </div>
            <button
              className={
                isThisMain
                  ? "header__burger-button header__burger-button_main-color"
                  : "header__burger-button"
              }
              onClick={onBurgerClick}
            ></button>
          </>
        ) : (
          <>
            <div className="header__button-container">
              <Link to="/signup" className="header__register-button">
                Регистрация
              </Link>
              <button onClick={onSigninClick} className="header__signin-button">
                Войти
              </button>
            </div>
          </>
        )}
      </section>
      {navigationIsVisible && <Navigation onMenuClose={onBurgerClick} />}
    </>
  );
}

export default Header;

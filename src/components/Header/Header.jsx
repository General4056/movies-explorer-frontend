import { useState } from "react";
import { Link } from "react-router-dom";
import AccountButton from "../AccountButton/AccountButton";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  const [navigationIsVisible, setNavigationIsVisible] = useState(false);
  function onBurgerClick() {
    setNavigationIsVisible(!navigationIsVisible);
  }
  return (
    <>
      <section className="header">
        <Link to="/" className="logo"></Link>
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
          className="header__burger-button"
          onClick={onBurgerClick}
        ></button>
      </section>
      {navigationIsVisible && <Navigation onMenuClose={onBurgerClick} />}
    </>
  );
}

export default Header;

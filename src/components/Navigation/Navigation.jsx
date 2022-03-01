import { Link } from "react-router-dom";
import AccountButton from "../AccountButton/AccountButton";
import "./Navigation.css";

function Navigation({ onMenuClose }) {
  return (
    <div className="overlay">
      <div className="navigation">
        <button className="navigation__close" onClick={onMenuClose}></button>
        <div className="navigation__container">
          <Link to="/" className="navigation__link">
            Главная
          </Link>
          <Link to="/movies" className="navigation__link">
            Фильмы
          </Link>
          <Link to="/saved-movies" className="navigation__link">
            Сохранённые фильмы
          </Link>
        </div>
        <div className="navigation__button">
          <AccountButton />
        </div>
      </div>
    </div>
  );
}

export default Navigation;

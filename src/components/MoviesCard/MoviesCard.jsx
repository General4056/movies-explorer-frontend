import "./MoviesCard.css";
import cardImage from "../../images/card_img.png";
import { useState } from "react";
import MoviesCardSaveButton from "../MoviesCardSaveButton/MoviesCardSaveButton";
import MoviesCardDeleteButton from "../MoviesCardDeleteButton/MoviesCardDeleteButton";

function MoviesCard({ isThisSavedMovies }) {
  //Состояния для проверки верстки
  const [isSaved, setIsSaved] = useState(false);
  return (
    <li className="movie-card">
      <div className="movie-card__container">
        <h2 className="movie-card__title">В погоне за Бенкси</h2>
        <p className="movie-card__text">27 минут</p>
      </div>
      <img
        src={cardImage}
        alt="В погоне за Бенкси"
        className="movie-card__image"
      />
      {!isThisSavedMovies ? (
        <MoviesCardSaveButton isSaved={isSaved} setIsSaved={setIsSaved} />
      ) : (
        <MoviesCardDeleteButton />
      )}
    </li>
  );
}

export default MoviesCard;

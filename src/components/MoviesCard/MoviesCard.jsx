import "./MoviesCard.css";
import MoviesCardSaveButton from "../MoviesCardSaveButton/MoviesCardSaveButton";
import MoviesCardDeleteButton from "../MoviesCardDeleteButton/MoviesCardDeleteButton";

function MoviesCard({
  movie,
  isThisSavedMovies,
  savedMovies,
  onMovieCardButtonClick,
}) {
  const isSaved = savedMovies.some((i) => i.movieId === movie.movieId);

  function onButtonClick() {
    console.log(isSaved);
    onMovieCardButtonClick(movie, isSaved);
  }
  return (
    <li className="movie-card">
      <div className="movie-card__container">
        <h2 className="movie-card__title">{movie.nameRU}</h2>
        <p className="movie-card__text">{`${movie.duration} минут`}</p>
      </div>
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img
          src={movie.image}
          alt={movie.nameRU}
          className="movie-card__image"
        />
      </a>

      {!isThisSavedMovies ? (
        <MoviesCardSaveButton isSaved={isSaved} onButtonClick={onButtonClick} />
      ) : (
        <MoviesCardDeleteButton onButtonClick={onButtonClick} />
      )}
    </li>
  );
}

export default MoviesCard;

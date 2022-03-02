import "./MoviesCardDeleteButton.css";

function MoviesCardDeleteButton({ onButtonClick }) {
  return (
    <button
      className="movie-card__delete-button"
      onClick={() => onButtonClick()}
    ></button>
  );
}

export default MoviesCardDeleteButton;

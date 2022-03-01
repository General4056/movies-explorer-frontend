import "./MoviesCardSaveButton.css";

function MoviesCardSaveButton({ isSaved, setIsSaved }) {
  //Состояния для проверки верстки
  const saveButtonClassName = `movie-card__save-button ${
    isSaved && "movie-card__save-button_active"
  }`;
  const saveButtonText = !isSaved ? "Сохранить" : "";

  return (
    <button
      className={saveButtonClassName}
      onClick={() => setIsSaved(!isSaved)}
    >
      {saveButtonText}
    </button>
  );
}

export default MoviesCardSaveButton;

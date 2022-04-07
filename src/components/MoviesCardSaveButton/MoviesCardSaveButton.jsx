import "./MoviesCardSaveButton.css";

function MoviesCardSaveButton({ isSaved, onButtonClick }) {
  //Состояния для проверки верстки
  const saveButtonClassName = `movie-card__save-button ${
    isSaved && "movie-card__save-button_active"
  }`;

  const saveButtonText = !isSaved ? "Сохранить" : "";

  return (
    <button
      className={saveButtonClassName}
      onClick={() => {
        onButtonClick();
      }}
    >
      {saveButtonText}
    </button>
  );
}

export default MoviesCardSaveButton;

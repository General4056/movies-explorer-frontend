import { useState } from "react";
import "./ErrorPopup.css";

function ErrorPopup({ errorMessage, setErrorMessage }) {
  function closePopup() {
    setErrorMessage("");
  }

  return (
    <div className={`popup ${errorMessage && "popup_is-opened"}`}>
      <div className="popup__container">
        <h3 className="popup__title">Возникла ошибка</h3>
        <p className="popup__text">{errorMessage}</p>
        <button
          onClick={closePopup}
          aria-label="Закрыть"
          type="button"
          className="popup__close-button"
        ></button>
      </div>
    </div>
  );
}

export default ErrorPopup;

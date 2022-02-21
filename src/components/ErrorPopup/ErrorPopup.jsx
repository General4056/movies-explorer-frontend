import { useState } from "react";
import "./ErrorPopup.css";

function ErrorPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const errorMessage = "возникла какая-то ошибка пожалуйста исправте";

  function closePopup() {
    setIsOpen(false);
  }

  return (
    <div className={`popup ${isOpen && "popup_is-opened"}`}>
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

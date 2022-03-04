import "./Profile.css";
import Header from "../Header/Header";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useInput } from "../../utils/hooks/useInput";

function Profile({
  onEditProfile,
  updateUserMessage,
  handleExit,
  isRequestSending,
  loggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);
  const userNameInput = useInput(`${currentUser.name}`, {
    isEmpty: true,
    minLength: 4,
    maxLength: 30,
  });
  const userEmailInput = useInput(`${currentUser.email}`, {
    isEmpty: true,
    isEmail: true,
    minLength: 4,
  });

  function handleForm(e) {
    e.preventDefault();
    if (
      currentUser.name === userNameInput.value &&
      currentUser.email === userEmailInput.value
    ) {
      return;
    }
    onEditProfile(userNameInput.value, userEmailInput.value);
  }

  return (
    <div className="profile">
      <Header isThisMain={false} loggedIn={loggedIn} />
      <div className="profile__container">
        <h2 className="profile__greeting">{`Привет, ${currentUser.name}!`}</h2>
        <form
          name="profile-form"
          className="profile__form"
          onSubmit={handleForm}
        >
          <label htmlFor="name" className="profile__label">
            <span className="profile__label-text profile__label-text_name">
              Имя
            </span>
            <input
              value={userNameInput.value}
              onChange={userNameInput.onChange}
              onBlur={userNameInput.onBlur}
              type="text"
              className="profile__input profile__input_name"
              name="name"
            />
            {!userNameInput.inputValid && userNameInput.isVisited && (
              <span className="profile__span profile__span_error">
                {userNameInput.errorMessage}
              </span>
            )}
          </label>
          <label htmlFor="E-mail" className="profile__label">
            <span className="profile__label-text profile__label-text_email">
              E-mail
            </span>
            <input
              value={userEmailInput.value}
              onChange={userEmailInput.onChange}
              onBlur={userEmailInput.onBlur}
              type="text"
              className="profile__input profile__input_email"
              name="E-mail"
            />
            {!userEmailInput.inputValid && userEmailInput.isVisited && (
              <span className="profile__span profile__span_error-email">
                {userEmailInput.errorMessage}
              </span>
            )}
          </label>
          <span className="profile__span">{updateUserMessage}</span>
          <button
            className="profile__form-button"
            disabled={
              !userNameInput.inputValid ||
              !userEmailInput.inputValid ||
              isRequestSending
            }
          >
            Редактировать
          </button>
        </form>
        <button className="profile__exit-button" onClick={handleExit}>
          Выйти из аккаунта
        </button>
      </div>
    </div>
  );
}

export default Profile;

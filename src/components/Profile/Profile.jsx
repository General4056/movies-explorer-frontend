import "./Profile.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Profile() {
  //временные данные
  const name = "Виталий";
  const email = "pochta@yandex.ru";

  return (
    <div className="profile">
      <Header />
      <div className="profile__container">
        <h2 className="profile__greeting">{`Привет, ${name}!`}</h2>
        <form name="profile-form" className="profile__form">
          <label for="name" className="profile__label">
            <span className="profile__label-text profile__label-text_name">
              Имя
            </span>
            <input
              type="text"
              className="profile__input profile__input_name"
              value={name}
              name="name"
            />
          </label>
          <label for="E-mail" className="profile__label">
            <span className="profile__label-text profile__label-text_email">
              E-mail
            </span>
            <input
              type="text"
              className="profile__input profile__input_email"
              name="E-mail"
              value={email}
            />
          </label>
          <button className="profile__form-button">Редактировать</button>
        </form>
        <button className="profile__exit-button">Выйти из аккаунта</button>
      </div>
    </div>
  );
}

export default Profile;

import "./AboutMe.css";
import student from "../../images/student.png";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title main-title">Студент</h2>
      <div className="about-me__description">
        <div className="about-me__wrapper">
          <p className="about-me__student-name">Виталий</p>
          <p className="about-me__student-profession">
            Фронтенд-разработчик, 30 лет
          </p>
          <p className="about-me__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className="about-me__social-links">
            <li className="about-me__social-link">
              <a
                href="https://www.facebook.com"
                className="about-me__link-text"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="about-me__social-link">
              <a
                href="https://github.com"
                className="about-me__link-text"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img src={student} alt="студент" className="about-me__image" />
      </div>
      <div className="portfolio">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <a
              href="https://github.com"
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              <span>Статичный сайт</span>
              <div className="portfolio__icon"></div>
            </a>
          </li>
          <li className="portfolio__item">
            <a
              href="https://github.com"
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              <span>Адаптивный сайт</span>
              <div className="portfolio__icon"></div>
            </a>
          </li>
          <li className="portfolio__item">
            <a
              href="https://github.com"
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              <span>Одностраничное приложение</span>
              <div className="portfolio__icon"></div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;

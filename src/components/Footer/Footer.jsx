import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__warapper">
        <span className="footer__year">&#169; 2022</span>
        <nav className="navbar">
          <a href="https://practicum.yandex.ru" className="navbar__link">
            Яндекс.Практикум
          </a>
          <a href="https://github.com" className="navbar__link">
            Github
          </a>
          <a href="https://www.facebook.com" className="navbar__link">
            Facebook
          </a>
        </nav>
      </div>
    </section>
  );
}

export default Footer;

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
          <a
            href="https://practicum.yandex.ru"
            className="navbar__link"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            href="https://github.com"
            className="navbar__link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.facebook.com"
            className="navbar__link"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </nav>
      </div>
    </section>
  );
}

export default Footer;

import "./Promo.css";
import landingLogo from "../../images/landing-logo.png";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__description">
        <div className="promo__description-container">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <button className="promo__link">Узнать больше</button>
        </div>
        <img
          src={landingLogo}
          alt="логотип"
          className="promo__landing-logo"
        ></img>
      </div>
    </section>
  );
}

export default Promo;

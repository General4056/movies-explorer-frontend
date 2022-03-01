import "./Techs.css";

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title main-title">Технологии</h2>
      <p className="techs__subtitle">7 технологий</p>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__list">
        <li className="techs__list-item">
          <span>HTML</span>
        </li>
        <li className="techs__list-item">
          <span>CSS</span>
        </li>
        <li className="techs__list-item">
          <span>JS</span>
        </li>
        <li className="techs__list-item">
          <span>React</span>
        </li>
        <li className="techs__list-item">
          <span>Git</span>
        </li>
        <li className="techs__list-item">
          <span>Express.js</span>
        </li>
        <li className="techs__list-item">
          <span>mongoDB</span>
        </li>
      </ul>
    </section>
  );
}

export default Techs;

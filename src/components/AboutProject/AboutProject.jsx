import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title main-title">О проекте</h2>
      <div className="about-project__description">
        <div className="about-project__column">
          <h3 className="about-project__heading">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__column">
          <h3 className="about-project__heading">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__stages">
        <div className="about-project__stage">
          <div className="about-project__wrapper about-project__wrapper_green">
            <span className="about-project__stage-text about-project__stage-text_black">
              1 неделя
            </span>
          </div>
          <div className="about-project__wrapper">
            <span className="about-project__stage-text about-project__stage-text_grey">
              Back-end
            </span>
          </div>
        </div>
        <div className="about-project__stage">
          <div className="about-project__wrapper about-project__wrapper_dark">
            <span className="about-project__stage-text about-project__stage-text_white">
              4 недели
            </span>
          </div>
          <div className="about-project__wrapper">
            <span className="about-project__stage-text about-project__stage-text_grey">
              Front-end
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;

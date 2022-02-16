import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import "./Main.css";

function Main() {
  return (
    <>
      <Promo />
      <div className="main">
        <AboutProject />
        <Techs />
        <AboutMe />
      </div>
    </>
  );
}

export default Main;

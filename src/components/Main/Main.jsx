import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import "./Main.css";

function Main({ loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} isThisMain={true} />
      <Promo />
      <div className="main">
        <AboutProject />
        <Techs />
        <AboutMe />
      </div>
      <Footer />
    </>
  );
}

export default Main;

import { useNavigate } from "react-router";
import "./PageNotFound.css";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="page-not-found">
      <div>
        <p className="page-not-found__number">404</p>
        <p className="page-not-found__text">Страница не найдена</p>
      </div>
      <button className="page-not-found__button" onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  );
}

export default PageNotFound;

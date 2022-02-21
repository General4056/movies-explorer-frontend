import { Link } from "react-router-dom";
import "./AccountButton.css";

function AccountButton() {
  return (
    <Link to="/profile" className="account-button">
      <span className="account-button__text">Аккаунт</span>
      <div className="account-button__image">
        <div className="account-button__icon"></div>
      </div>
    </Link>
  );
}

export default AccountButton;

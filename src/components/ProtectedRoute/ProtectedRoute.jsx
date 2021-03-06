import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ loggedIn, component }) => {
  return loggedIn ? component : <Navigate to="/" />;
};

export default ProtectedRoute;

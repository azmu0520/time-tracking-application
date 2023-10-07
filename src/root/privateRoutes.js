import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/Auth";

const PrivateRoute = ({ children }) => {
  const [{ token }] = useAuthContext();

  if (!token) {
    return <Navigate to="/register" replace={true} />;
  }
  return children;
};

export default PrivateRoute;

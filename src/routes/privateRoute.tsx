import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  if (localStorage.getItem("token")) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;

/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";

function ProtectedRoute({ children }) {
  const { userData } = useAuthStore();
  return userData.isLoggedIn ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;

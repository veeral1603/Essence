import { Navigate, useLocation } from "react-router-dom";
import useAuthStore from "../stores/AuthStore";

export default function MyAccount() {
  const { isAuth } = useAuthStore();
  const location = useLocation(); //

  const currentPath = location.pathname;
  const isAuthPage =
    currentPath.endsWith("/login") || currentPath.endsWith("/signup");

  if (!isAuth && !isAuthPage) {
    return <Navigate to="/login" replace />;
  }

  return (
    <section>
      <div className="container">Profile</div>
    </section>
  );
}

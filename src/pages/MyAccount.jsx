import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function MyAccount() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const location = useLocation(); //

  const currentPath = location.pathname;
  const isAuthPage =
    currentPath.endsWith("/login") || currentPath.endsWith("/signup");

  if (!isLoggedIn && !isAuthPage) {
    return <Navigate to="/login" replace />;
  }

  return (
    <section>
      <div className="container">Profile</div>
    </section>
  );
}

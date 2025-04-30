import { NavLink } from "react-router-dom";

export default function SecondaryNavbar() {
  return (
    <nav className="py-3 md:py-6 border-b border-primaryBorder bg-white">
      <div className="container">
        <div className="font-volkhov font-semibold text-3xl md:text-4xl flex items-center gap-6">
          <NavLink to={"/"}>
            <p>ESSENCE</p>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

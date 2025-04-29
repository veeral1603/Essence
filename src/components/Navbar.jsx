import useUiStore from "../stores/UiStore";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LuSearch, LuStar, LuUserRound } from "react-icons/lu";

import { NavLink, useNavigate } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Men", path: "/men" },
  { label: "Women", path: "/women" },
  { label: "Shop", path: "/shop" },
];

export default function Navbar() {
  const toggleIsMobileMenuOpen = useUiStore(
    (state) => state.toggleIsMobileMenuOpen
  );

  const navigate = useNavigate();

  return (
    <nav className="w-full py-3 md:py-6   border-b  border-primaryBorder ">
      <div className="container flex items-center justify-between ">
        <div className="font-volkhov font-semibold text-3xl md:text-4xl flex items-center gap-6">
          <NavLink to={"/"}>
            <p>ESSENCE</p>
          </NavLink>
        </div>

        <div className="hidden md:block">
          <ul className="flex items-center gap-2 lg:gap-4 xl:gap-6 md:text-sm lg:text-[15px] font-medium">
            {navLinks.map((item) => {
              {
                return (
                  <li className="py-1 px-2 font-normal" key={item.label}>
                    <NavLink to={item.path}>{item.label}</NavLink>
                  </li>
                );
              }
            })}
          </ul>
        </div>

        <div className="flex items-center gap-5 md:gap-4 lg:gap-6 md:text-lg">
          <LuSearch className="text-xl md:text-base lg:text-xl cursor-pointer" />
          <FontAwesomeIcon
            icon={faBars}
            className="md:hidden cursor-pointer"
            onClick={toggleIsMobileMenuOpen}
          />
          <LuStar
            className="text-xl md:text-base lg:text-xl hidden md:block font-bold cursor-pointer"
            onClick={() => navigate(`/favorites`)}
          />

          <LuUserRound
            onClick={() => navigate(`my-account`)}
            className="text-xl md:text-base lg:text-xl hidden md:block cursor-pointer"
          />
        </div>

        <MobileMenu />
      </div>
    </nav>
  );
}

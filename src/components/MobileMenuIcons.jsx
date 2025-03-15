import { NavLink } from "react-router-dom";
import useUiStore from "../stores/UiStore";

export default function MobileMenuIcons({ children, label, path }) {
  const setIsMobileMenuOpen = useUiStore((state) => state.setIsMobileMenuOpen);

  return (
    <div className="flex flex-col">
      <NavLink
        to={path}
        className={({ isActive }) =>
          `aspect-square ${
            isActive ? `bg-[#333333] text-stone-100` : `bg-neutral-100`
          }  md:hover:bg-neutral-200 rounded-full flex items-center justify-center transition-all duration-150`
        }
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div className="overflow-hidden flex items-center justify-center">
          <span className="text-3xl sm:text-4xl">{children}</span>
        </div>
      </NavLink>

      <p className="inline mx-auto medium text-black text-xs  mt-1 sm:mt-2">
        {label}
      </p>
    </div>
  );
}

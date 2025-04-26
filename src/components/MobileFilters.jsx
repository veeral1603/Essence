import { useEffect } from "react";
import useUiStore from "../stores/UiStore";
import { useShallow } from "zustand/shallow";
import { TbFilterSearch } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import Filters from "./Filters";

export default function MobileFilters() {
  const [
    isMobileMenuOpen,
    isMobileFiltersOpen,
    toggleIsMobileFiltersOpen,
    setIsMobileFiltersOpen,
    isSideCartOpen,
  ] = useUiStore(
    useShallow((state) => [
      state.isMobileMenuOpen,
      state.isMobileFiltersOpen,
      state.toggleIsMobileFiltersOpen,
      state.setIsMobileFiltersOpen,
      state.isSideCartOpen,
    ])
  );

  useEffect(() => {
    if (isMobileFiltersOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;

      // Apply fixed positioning
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%"; // Prevent horizontal shift

      return () => {
        // Restore scroll position
        const savedScrollY = Math.abs(
          parseInt(document.body.style.top || "0", 10)
        );
        document.body.style.position = "";
        document.body.style.top = "";
        window.scrollTo(0, savedScrollY);
      };
    }
  }, [isMobileFiltersOpen]);

  return (
    <>
      <div
        className={`${
          isMobileFiltersOpen ? `block opacity-100` : `hidden opactiy-0`
        } fixed inset-0 z-[99] bg-black/70  md:hidden`}
        onClick={() => setIsMobileFiltersOpen(false)}
      ></div>

      <div
        className={`${
          isMobileFiltersOpen ? `block left-0` : ` -left-full`
        } fixed top-0 bottom-0  w-[80%] bg-[white] border-r border-primaryBorder md:hidden z-[100] shadow-lg transition-all duration-200 overflow-y-auto p-2`}
      >
        <div className="text-2xl font-semibold px-2 py-2.5 border-b border-primaryBorder flex items-center justify-between">
          <h2>Filters</h2>
          <div
            className="self-stretch flex items-center justify-center cursor-pointer"
            onClick={toggleIsMobileFiltersOpen}
          >
            <IoClose className="text-2xl" />
          </div>
        </div>
        <Filters />
      </div>

      {!isMobileMenuOpen && !isSideCartOpen && (
        <div
          className={`fixed bottom-5 left-7 sm:bottom-6  md:bottom-7 lg:bottom-10  bg-black rounded-xl text-stone-100 shadow-lg flex items-center justify-center p-3 md:p-4 cursor-pointer z-[110] 
          ${isMobileFiltersOpen ? "hidden" : ""} md:hidden`}
          onClick={toggleIsMobileFiltersOpen}
        >
          <TbFilterSearch className="text-2xl" />
        </div>
      )}
    </>
  );
}

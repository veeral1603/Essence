import { LuShoppingCart } from "react-icons/lu";
import useUiStore from "../stores/UiStore";
import { useShallow } from "zustand/shallow";
import { IoClose } from "react-icons/io5";
import SideCartItem from "./SideCartItem";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useCartStore from "../stores/CartStore";
import Button from "../components/Button";

export default function SideCart() {
  const [
    isMobileMenuOpen,
    isSideCartOpen,
    toggleIsSideCartOpen,
    setIsSideCartOpen,
    isMobileFiltersOpen,
    currency,
  ] = useUiStore(
    useShallow((state) => [
      state.isMobileMenuOpen,
      state.isSideCartOpen,
      state.toggleIsSideCartOpen,
      state.setIsSideCartOpen,
      state.isMobileFiltersOpen,
      state.currency,
    ])
  );

  useEffect(() => {
    if (isSideCartOpen) {
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
  }, [isSideCartOpen]);

  const navigate = useNavigate();

  const { cart } = useCartStore();

  return (
    <>
      <div
        className={`${
          isSideCartOpen ? `block opacity-100` : `hidden opactiy-0`
        } fixed inset-0 z-[99] bg-black/70  `}
        onClick={() => setIsSideCartOpen(false)}
      ></div>

      <div
        className={`${
          isSideCartOpen ? `right-0` : `translate-x-full right-0`
        } fixed top-0 bottom-0  w-[80%] sm:w-[50%] lg:w-[40%] xl:w-[35%] 2xl:w-[25%] bg-[white] border-l border-primaryBorder  z-[111] shadow-lg transition-all duration-200 overflow-y-auto p-4 lg:p-6 flex flex-col`}
      >
        <div className="w-full pb-3 border-b border-primaryBorder relative">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-bold">Your Cart</h2>
            <div
              className="flex items-center justify-center cursor-pointer"
              onClick={toggleIsSideCartOpen}
            >
              <IoClose className="text-2xl" />
            </div>
          </div>
          <p className="font-medium text-base/5 mt-1">
            Add $99 worth of more items to get{" "}
            <span className="font-semibold">extra 5% off!</span>
          </p>
        </div>

        {cart.length > 0 ? (
          <>
            <div className="flex-1 flex flex-col  overflow-y-auto scrollbar pr-2">
              {cart?.map((item, i) => {
                {
                  return <SideCartItem item={item} key={i} />;
                }
              })}
            </div>

            <div className="summary pt-2 ">
              <div className="flex items-center justify-between border-t border-primaryBorder pt-4">
                <h2 className="text-sm md:text-base xl:text-lg font-semibold">
                  Subtotal:
                </h2>
                <h2 className="text-sm md:text-base xl:text-lg font-semibold">
                  {currency}{" "}
                  {cart.reduce(
                    (acc, cur) => acc + cur.discountPrice * cur.quantity,
                    0
                  ).toFixed(2)}
                </h2>
              </div>

              <div className="flex flex-col mt-4 gap-3">
                <button
                  className="bg-black text-stone-100 text-sm md:text-base py-3 rounded-lg"
                  onClick={() => navigate(`/checkout`)}
                >
                  Checkout
                </button>
                <NavLink
                  to={`/cart`}
                  className={`text-center text-sm md:text-base underline`}
                >
                  View Cart
                </NavLink>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="h-full flex flex-col items-center justify-center text-neutral-500 gap-3">
              <LuShoppingCart className="text-8xl" />
              <h2 className=" text-2xl md:text-3xl font-semibold mb-3">
                {" "}
                Your Cart is Empty
              </h2>
              <Button
                onClick={() => {
                  navigate(`/shop`);
                  setIsSideCartOpen(false);
                }}
              >
                SHOP NOW
              </Button>
            </div>
          </>
        )}
      </div>

      {!isMobileMenuOpen && !isMobileFiltersOpen && (
        <div
          className={`fixed bottom-5 right-7 sm:bottom-6  md:bottom-7 lg:bottom-10  bg-black rounded-xl text-stone-100 shadow-lg flex items-center justify-center p-3 md:p-4 cursor-pointer z-[110] ${
            isSideCartOpen
              ? `sm:right-[53%] md:right-[53%] lg:right-[43%] xl:right-[37%] 2xl:right-[27%]`
              : `sm:right-6 md:right-7 lg:right-10`
          } transiton-all duration-200`}
          onClick={toggleIsSideCartOpen}
        >
          <LuShoppingCart className="text-2xl" />
          {cart?.length > 0 && (
            <div className="absolute bg-red-600  w-6 h-6 rounded-full -top-2 -right-2 flex items-center justify-center text-sm">
              {cart?.length}
            </div>
          )}
        </div>
      )}
    </>
  );
}

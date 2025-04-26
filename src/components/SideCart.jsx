import { LuShoppingCart } from "react-icons/lu";
import useUiStore from "../stores/UiStore";
import { useShallow } from "zustand/shallow";
import { IoClose } from "react-icons/io5";
import SideCartItem from "./SideCartItem";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const cartItems = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    category: "beauty",
    price: 9.99,
    discountPercentage: 7.17,
    rating: 4.94,
    stock: 5,
    tags: ["beauty", "mascara"],
    brand: "Essence",
    sku: "RCH45Q1A",

    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    description:
      "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    category: "beauty",
    price: 19.99,
    discountPercentage: 5.5,
    rating: 3.28,
    stock: 44,
    tags: ["beauty", "eyeshadow"],
    brand: "Glamour Beauty",
    sku: "MVCFH27F",
    weight: 3,
    dimensions: {
      width: 12.42,
      height: 8.63,
      depth: 29.13,
    },
    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 2 weeks",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 4,
        comment: "Very satisfied!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Liam Garcia",
        reviewerEmail: "liam.garcia@x.dummyjson.com",
      },
      {
        rating: 1,
        comment: "Very disappointed!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Nora Russell",
        reviewerEmail: "nora.russell@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Highly impressed!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Elena Baker",
        reviewerEmail: "elena.baker@x.dummyjson.com",
      },
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 32,
    meta: {
      createdAt: "2024-05-23T08:56:21.618Z",
      updatedAt: "2024-05-23T08:56:21.618Z",
      barcode: "2817839095220",
      qrCode: "https://assets.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
  },
  {
    id: 3,
    title: "Powder Canister",
    description:
      "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    category: "beauty",
    price: 14.99,
    discountPercentage: 18.14,
    rating: 3.82,
    stock: 59,
    tags: ["beauty", "face powder"],
    brand: "Velvet Touch",
    sku: "9EN8WLT2",
    weight: 8,
    dimensions: {
      width: 24.16,
      height: 10.7,
      depth: 11.07,
    },
    warrantyInformation: "2 year warranty",
    shippingInformation: "Ships in 1-2 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Very happy with my purchase!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Ethan Thompson",
        reviewerEmail: "ethan.thompson@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Great value for money!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Levi Hicks",
        reviewerEmail: "levi.hicks@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Highly impressed!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Hazel Gardner",
        reviewerEmail: "hazel.gardner@x.dummyjson.com",
      },
    ],
    returnPolicy: "60 days return policy",
    minimumOrderQuantity: 25,
    meta: {
      createdAt: "2024-05-23T08:56:21.618Z",
      updatedAt: "2024-05-23T08:56:21.618Z",
      barcode: "0516267971277",
      qrCode: "https://assets.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
  },
];

export default function SideCart() {
  const [
    isMobileMenuOpen,
    isSideCartOpen,
    toggleIsSideCartOpen,
    setIsSideCartOpen,
    isMobileFiltersOpen,
  ] = useUiStore(
    useShallow((state) => [
      state.isMobileMenuOpen,
      state.isSideCartOpen,
      state.toggleIsSideCartOpen,
      state.setIsSideCartOpen,
      state.isMobileFiltersOpen,
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

        <div className="flex-1 flex flex-col  overflow-y-auto scrollbar pr-2">
          {cartItems.map((item, i) => {
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
              $10
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
          <div className="absolute bg-red-600  w-6 h-6 rounded-full -top-2 -right-2 flex items-center justify-center text-sm">
            2
          </div>
        </div>
      )}
    </>
  );
}

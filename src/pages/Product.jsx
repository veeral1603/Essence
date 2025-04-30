import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../services/apiProducts";
import { LuShoppingCart, LuStar } from "react-icons/lu";

import { FaRegEye } from "react-icons/fa";

import Button from "../components/Button";
import Loader from "../components/Loader";
import TrustSection from "../sections/TrustSection";
import NewsletterSection from "../sections/NewsletterSection";

import useUiStore from "../stores/UiStore";
import useFavoritesStore from "../stores/FavoritesStore.js";
import useCartStore from "../stores/CartStore";
import { toast } from "react-toastify";
import QuantityInput from "../components/QuantityInput.jsx";

const sizes = ["S", "M", "L", "XL", "XXL"];
const sizesShoe = ["UK6", "UK7", "UK8", "UK9", "UK10"];
const colors = [
  { value: "Black", swatch: "bg-stone-900" },
  { value: "White", swatch: "bg-stone-100" },
  { value: "Red", swatch: "bg-red-500" },
  { value: "Blue", swatch: "bg-blue-300" },
  { value: "Yellow", swatch: "bg-yellow-200" },
];

export default function Product() {
  const { productID } = useParams();

  const [currentImage, setCurrentImage] = useState(null);
  const [viewerCount] = useState(() => Math.floor(Math.random() * 30) + 1);

  const [size, setSize] = useState(null);
  const [shoeSize, setShoeSize] = useState(null);
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const [currentProduct, setCurrentProduct] = useState({});
  const { currency, setIsSideCartOpen } = useUiStore();
  const { addProduct, cart } = useCartStore();
  const { favorites, addToFavorites, removeFromFavorites } =
    useFavoritesStore();

  const { data, isLoading } = useQuery({
    queryKey: ["product", productID],
    queryFn: () => getProduct(productID),
  });

  useEffect(() => {
    if (data) {
      setCurrentProduct(data);
    }
  }, [data, setCurrentProduct]);

  useEffect(() => {
    if (currentProduct?.images?.length > 0) {
      // Set the first image when the product is loaded
      setCurrentImage(currentProduct.images[0]);
    }
  }, [currentProduct]);

  const increaseQuantity = () => {
    setQuantity((cur) => cur + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((cur) => (cur > 1 ? cur - 1 : 1));
  };

  const resetOptions = () => {
    setQuantity(1);
    setColor(null);
    setSize(null);
  };

  const addToCart = () => {
    const discountPrice = (
      currentProduct.price -
      (currentProduct.discountPercentage * currentProduct.price) / 100
    ).toFixed(2);

    const productObj = {
      ...currentProduct,
      quantity,
      color,
      size: size ? size : shoeSize,
      discountPrice,
      cartItemId: cart.length + 1,
    };

    setIsSideCartOpen(true);
    resetOptions();
    addProduct(productObj);
  };

  const addFavorites = () => {
    addToFavorites(currentProduct);
    toast.success("Added to Favorites");
  };

  const removeFavorite = () => {
    removeFromFavorites(currentProduct.id);
    toast.success("Removed from Favorites");
  };

  if (currentProduct.id) {
    var isClothing = ["mens-shirts", "womens-dresses", "tops"].includes(
      currentProduct?.category
    );
    var isFootwear = ["mens-shoes", "womens-shoes"].includes(
      currentProduct?.category
    );
  }
  return (
    <>
      {isLoading ? (
        <div className="h-full flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <>
          <section className="py-3 md:pt-10">
            <div className="container h-full">
              <div className="flex flex-col sm:flex-row gap-4 md:gap-8 lg:gap-12">
                {/* Left Section  */}

                <div className="flex flex-1 flex-col-reverse  sm:flex-row gap-2 w-full ">
                  {/* All Images  */}
                  <div className="flex sm:flex-col gap-2 flex-1 overflow-scroll sm:overflow-hidden no-scrollbar">
                    {currentProduct?.images?.map((img, i) => (
                      <div
                        key={i}
                        className={` ${
                          currentImage == img ? `bg-stone-200` : `bg-stone-100`
                        } cursor-pointer group  min-w-[125px] max-w-[125px] w-[125px] sm:w-auto sm:min-w-full overflow-hidden aspect-square`}
                        onClick={() => setCurrentImage(img)}
                      >
                        <img
                          src={img}
                          alt={`Img${i + 1}`}
                          loading="lazy"
                          className="md:group-hover:scale-[1.05] transition w-full"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Main Image  */}
                  <div className="w-full sm:w-[80%]">
                    <div className="bg-gradient-to-tr from-stone-50 to-stone-200 w-full  aspect-square overflow-hidden flex items-center justify-center">
                      <img
                        src={currentImage}
                        alt="Main Image"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Section  */}

                <div className="flex-1 flex flex-col  sm:mt-0">
                  {currentProduct?.brand && (
                    <div className="text-sm text-neutral-500">
                      <p>{currentProduct?.brand}</p>
                    </div>
                  )}
                  <div className="text-xl md:text-2xl lg:text-3xl font-semibold lg:font-extrabold flex items-center justify-between gap-1 md:gap-2">
                    <h2>{currentProduct?.title}</h2>

                    <button
                      className={`text-lg/5 p-2 border  border-primaryBorder rounded-full ${
                        favorites.some(
                          (product) => product.id === currentProduct.id
                        )
                          ? `bg-black`
                          : ""
                      }`}
                      onClick={
                        favorites.some(
                          (product) => product.id === currentProduct.id
                        )
                          ? removeFavorite
                          : addFavorites
                      }
                    >
                      <LuStar
                        className={`${
                          favorites.some(
                            (product) => product.id === currentProduct.id
                          )
                            ? `text-stone-100`
                            : ""
                        }`}
                      />
                    </button>
                  </div>
                  <div className="my-2 lg:my-4 font-volkhov flex items-center gap-3 ">
                    <h2 className="font-semibold text-2xl lg:text-3xl">
                      {currency}
                      {(
                        currentProduct?.price -
                        (currentProduct?.price *
                          currentProduct?.discountPercentage) /
                          100
                      ).toFixed(2)}
                    </h2>

                    <h2 className="line-through text-neutral-500 text-base lg:text-xl">
                      {currency}
                      {currentProduct?.price}
                    </h2>

                    <div className="py-1 px-2 rounded-full bg-red-500 text-stone-100 text-[8px] md:text-[10px] font-poppins flex items-center justify-center">
                      SAVE {currentProduct?.discountPercentage}%
                    </div>
                  </div>
                  <div className="flex items-center gap-2 my-2 lg:my-1">
                    <FaRegEye className="text-black text-base" />
                    <p className="text-neutral-400 text-xs lg:text-sm">
                      {viewerCount} People are viewing this right now
                    </p>
                  </div>
                  <div className="my-3 lg:my-5 px-3 py-2 flex items-center justify-between bg-gray-200 border border-black rounded-sm text-sm lg:text-base">
                    <div className="font-volkhov text-black font-semibold">
                      <h2>Hurry Up! Sale ends in:</h2>
                    </div>
                    <div className="font-volkhov text-black font-semibold flex items-center ">
                      <span>00</span>
                      <span className="mx-2 lg:mx-3">:</span>
                      <span>05</span>
                      <span className="mx-2 lg:mx-3">:</span>
                      <span>59</span>
                      <span className="mx-2 lg:mx-3">:</span>
                      <span>47</span>
                    </div>
                  </div>
                  <div
                    className={`w-24 text-sm font-medium flex items-center justify-center px-2 py-1  rounded-full ${
                      currentProduct?.availabilityStatus?.includes("Low") ||
                      currentProduct?.availabilityStatus?.includes("Out")
                        ? `bg-red-100 text-red-400`
                        : `bg-green-100 text-green-500`
                    }`}
                  >
                    <h2>{currentProduct?.availabilityStatus}</h2>
                  </div>
                  {/* Product Options  */}
                  <div className="flex flex-col my-5 gap-4">
                    {/* Size Options  */}
                    {isClothing && (
                      <div className="flex flex-col">
                        <h2 className=" font-semibold text-sm font-volkhov">
                          Size:
                        </h2>
                        <div className="flex gap-4 md:gap-4 mt-2">
                          {sizes.map((item, i) => (
                            <button
                              className={`ring-1 ring-offset-[3px] -sm flex items-center justify-center w-[40px] md:w-[45px] aspect-square text-sm rounded-sm md:font-medium hover:bg-black hover:text-stone-100  transition ${
                                item == size
                                  ? `bg-black text-stone-100 ring-black`
                                  : `bg-stone-100 ring-transparent rounded`
                              }`}
                              value={item}
                              key={i}
                              onClick={() => setSize(item)}
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Shoe Size Options  */}

                    {isFootwear && (
                      <div className="flex flex-col">
                        <h2 className=" font-semibold text-sm font-volkhov">
                          Size:
                        </h2>
                        <div className="flex gap-4 md:gap-4 mt-2">
                          {sizesShoe.map((item, i) => (
                            <button
                              className={`ring-1 ring-offset-[3px] -sm flex items-center justify-center w-[40px] md:w-[45px] aspect-square text-sm rounded-sm md:font-medium hover:bg-black hover:text-stone-100  transition ${
                                item == shoeSize
                                  ? `bg-black text-stone-100 ring-black`
                                  : `bg-stone-100 ring-transparent rounded`
                              }`}
                              value={item}
                              key={i}
                              onClick={() => setShoeSize(item)}
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Color Options  */}
                    {isClothing && (
                      <div className="flex flex-col">
                        <h2 className=" font-semibold text-sm font-volkhov">
                          Color:
                        </h2>
                        <div className="flex gap-4 md:gap-4 mt-2">
                          {colors.map((item, i) => (
                            <button
                              className={`ring-1 
                              ring-offset-[3px] ring-offset-white rounded-sm flex items-center justify-center w-[40px] md:w-[45px] aspect-square text-sm  md:font-medium hover:ring-black transition ${
                                item.value == color
                                  ? "ring-black"
                                  : "ring-transparent"
                              } ${item.swatch}`}
                              value={item.value}
                              key={i}
                              onClick={() => setColor(item.value)}
                            ></button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Quantity Options  */}
                    <div className="flex flex-col">
                      <h2 className=" font-semibold text-sm font-volkhov">
                        Quantity:
                      </h2>
                      <QuantityInput
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                        value={quantity}
                        className={"mt-2"}
                      />
                    </div>

                    <div className="text-xs  -mt-2 md:-mt-3">
                      <p onClick={resetOptions} className="cursor-pointer">
                        Reset
                      </p>
                    </div>
                  </div>

                  <Button
                    disabled={
                      (isClothing && !(quantity && color && size)) ||
                      (isFootwear && !(quantity && shoeSize))
                    }
                    classname={` flex items-center justify-center gap-2`}
                    onClick={addToCart}
                  >
                    {(isClothing && !(quantity && color && size)) ||
                    (isFootwear && !(quantity && shoeSize)) ? (
                      <>SELECT OPTIONS</>
                    ) : (
                      <>
                        <LuShoppingCart className="text-lg md:text-xl font-semibold" />{" "}
                        ADD TO CART
                      </>
                    )}
                  </Button>

                  <div className="mt-8 flex flex-col gap-2 md:gap-1">
                    <div className="flex flex-col">
                      <h2 className=" font-semibold text-sm font-volkhov">
                        Product Description:
                      </h2>
                      <p className="text-sm text-neutral-500">
                        {currentProduct?.description}
                      </p>
                    </div>
                    <div className="text-sm text-neutral-500">
                      <p>
                        <span className="font-semibold  font-volkhov text-primaryText">
                          Estimated Delivery:
                        </span>{" "}
                        5-7 Business days.
                      </p>
                    </div>
                    <div className="text-sm text-neutral-500">
                      <p>
                        <span className="font-semibold  font-volkhov text-primaryText">
                          Free Shipping & Returns:
                        </span>{" "}
                        On all orders over $75
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <TrustSection />
          <NewsletterSection />
        </>
      )}
    </>
  );
}

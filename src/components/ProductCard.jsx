import { useState } from "react";
import useUiStore from "../stores/UiStore";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

export default function ProductCard({ product, rating = true }) {
  const { currency } = useUiStore();

  const [isFav, setIsFav] = useState(false);

  return (
    <div
      className={`group border border-neutral-200 shadow-sm md:hover:shadow-lg transition-shadow duration-150 overflow-hidden rounded-lg cursor-pointer animate-fade-in-up relative`}
    >
      <div className="w-full aspect-square flex items-center justify-center bg-gradient-to-tr from-stone-50 to-stone-200 overflow-hidden relative">
        <img
          src={product.thumbnail}
          className={`w-full md:group-hover:scale-105 transition-transform duration-150 
          }`}
          loading="lazy"
        />
        <div className="absolute top-4 right-4 z-10">
          {isFav ? (
            <GoHeartFill
              className="text-2xl text-pink-600"
              onClick={() => setIsFav((current) => !current)}
            />
          ) : (
            <GoHeart
              className="text-2xl md:hover:text-pink-600 transition-colors duration-100"
              onClick={() => setIsFav((current) => !current)}
            />
          )}
        </div>
      </div>
      <div className="p-3">
        <div className="flex md:items-center flex-col md:flex-row justify-between">
          <p className="font-medium md:font-semibold font-volkhov text-sm md:text-lg">
            {currency}
            {product.price}
          </p>
          {rating && (
            <div className="flex items-center text-xs md:text-sm text-yellow-500 ">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStarHalf />
            </div>
          )}
        </div>

        <h2 className="font-medium  text-sm/4 md:text-sm/5 truncate mt-1 md:mt-0">
          {product.title}
        </h2>

        <p className="text-xs md:text-xs text-gray-400 truncate">
          {product.brand ? `Brand: ${product.brand}` : "Brand: Unknown"}
        </p>
      </div>
    </div>
  );
}

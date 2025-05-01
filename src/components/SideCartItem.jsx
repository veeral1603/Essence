import { LuTrash } from "react-icons/lu";
import useUiStore from "../stores/UiStore";
import useCartStore from "../stores/CartStore";
import { useNavigate } from "react-router-dom";

export default function SideCartItem({ item }) {
  const { currency } = useUiStore();
  const { removeFromCart } = useCartStore();
  const { setIsSideCartOpen } = useUiStore();

  const navigate = useNavigate();

  return (
    <div className="py-3 flex  border-b border-primaryBorder last:border-none gap-2 animate-fade-in-up">
      <div className="w-[100px] md:w-[140px]  bg-stone-100 flex items-center justify-center">
        <img src={item.thumbnail} className="" />
      </div>
      <div className="flex-1 py-1">
        <div className="flex items-start justify-between gap-1 md:gap-2">
          <h2
            className="text-[15px]/5 md:text-lg/6 font-semibold cursor-pointer"
            onClick={() => {
              navigate(`/product/${item.id}`);
              setIsSideCartOpen(false);
            }}
          >
            {item.title}
          </h2>
          <div
            className="cursor-pointer text-stone-500 hover:text-stone-800 transition-all duration-100"
            onClick={() => removeFromCart(item)}
          >
            <LuTrash />
          </div>
        </div>
        <div className="text-xs/3 md:text-xs/3 text-stone-500 my-1 md:my-2 lg:my-3 sm:space-y-1 ">
          {item.color && <p>Color: {item.color}</p>}
          {item.size && <p>Size: {item.size}</p>}
          <p>Quantity: {item.quantity}</p>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-sm md:text-base/4 text-red-500">
            {currency}
            {(item.discountPrice * item.quantity).toFixed(2)}
          </h2>
        </div>
      </div>
    </div>
  );
}

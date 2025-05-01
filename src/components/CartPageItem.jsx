import { LuTrash } from "react-icons/lu";
import useCartStore from "../stores/CartStore";
import useUiStore from "../stores/UiStore";
import QuantityInput from "./QuantityInput";
import { useNavigate } from "react-router-dom";

export default function CartPageItem({ product }) {
  const { currency } = useUiStore();
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCartStore();

  const increaseProductQuantity = () => {
    increaseQuantity(product.id);
  };

  const decreaseProductQuantity = () => {
    decreaseQuantity(product.id);
  };

  return (
    <tr className="border-b border-primaryBorder">
      <td className="py-4 pr-4">
        <div className="flex gap-4 md:gap-6 lg:items-center">
          <div className="bg-stone-100 w-28 md:w-36 aspect-square">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <div className="text-sm md:text-base/5 font-medium cursor-pointer">
              <h2>{product.title}</h2>
            </div>
            <div className="text-neutral-500 text-xs md:text-sm mt-1">
              {product.color && <p>Color: {product.color}</p>}
              {product.size && <p>Size: {product.size}</p>}
            </div>
            <div className="flex items-center gap-4 lg:hidden">
              <QuantityInput
                increaseQuantity={increaseProductQuantity}
                decreaseQuantity={decreaseProductQuantity}
                value={product.quantity}
                className={"!w-28 mt-2"}
                btnPadding={"p-[2px]"}
              />
              <div
                className="cursor-pointer flex items-center justify-center text-stone-500 hover:text-stone-800 transition-all duration-100 "
                onClick={() => removeFromCart(product)}
              >
                <LuTrash />
              </div>
            </div>
          </div>
        </div>
      </td>

      <td className="py-4 lg:pr-20 hidden lg:table-cell">
        <div>
          <div className="flex items-center gap-4">
            <QuantityInput
              increaseQuantity={increaseProductQuantity}
              decreaseQuantity={decreaseProductQuantity}
              value={product.quantity}
              className={"!w-24"}
            />
            <div
              className="cursor-pointer flex items-center justify-center text-stone-500 hover:text-stone-800 transition-all duration-100 "
              onClick={() => removeFromCart(product)}
            >
              <LuTrash />
            </div>
          </div>
        </div>
      </td>

      <td className="py-4 text-right">
        <div className="text-red-500 text-sm md:text-base">
          <p>
            {currency}
            {(product.quantity * product.discountPrice).toFixed(2)}
          </p>
        </div>
      </td>
    </tr>
  );
}

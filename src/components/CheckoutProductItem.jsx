import useUiStore from "../stores/UiStore";

export default function CheckoutProductItem({ product }) {
  const { currency } = useUiStore();
  return (
    <div className="flex gap-4 py-4 justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-[100px] aspect-square bg-stone-100">
          <img src={product.thumbnail} className="w-full" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-sm md:text-base/5 font-semibold">
            {product.title}
          </h2>
          <div className="text-xs text-neutral-500">
            {product.color && <p>Color: {product.color}</p>}
            {product.size && <p>Size: {product.size}</p>}
            {product.quantity && <p>Quantity: {product.quantity}</p>}
          </div>
        </div>
      </div>

      <div className="text-sm text-red-500">
        <p>
          {currency}
          {(product.discountPrice * product.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

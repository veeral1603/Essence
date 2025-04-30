export default function QuantityInput({
  value,
  increaseQuantity,
  decreaseQuantity,
  className,
  btnPadding,
}) {
  return (
    <div
      className={`flex items-stretch w-32 md:w-32 border border-primaryBorder  ${className}`}
    >
      <button
        className={`flex-1 active:bg-stone-100 md:hover:bg-stone-100 text-xl w-1/3 p-1 transition ${btnPadding}`}
        onClick={decreaseQuantity}
      >
        -
      </button>
      <div
        className={`flex items-center justify-center  w-1/3 p-1 ${btnPadding}`}
      >
        <p className="font-volkhov text-sm md:text-base">{value}</p>
      </div>
      <button
        className={`flex-1 active:bg-stone-100 md:hover:bg-stone-100 text-xl w-1/3 p-1 transition ${btnPadding}`}
        onClick={increaseQuantity}
      >
        +
      </button>
    </div>
  );
}

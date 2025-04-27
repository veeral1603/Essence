export default function Button({
  children,
  classname,
  onClick,
  type = "primary",
  btnType = "button",
  disabled = false,
}) {
  return (
    <button
      onClick={onClick}
      type={btnType}
      disabled={disabled}
      className={`drop-shadow-xl  ${
        type == "secondary" ? "bg-neutral-100" : "bg-black text-stone-100"
      }    text-center text-sm py-3 px-4 rounded-md whitespace-nowrap shrink-0 min-w-[140px] disabled:bg-neutral-500 disabled:cursor-not-allowed transition-colors duration-300 ${classname}`}
    >
      {children}
    </button>
  );
}

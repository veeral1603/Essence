export default function Button({
  children,
  classname,
  onClick,
  type = "primary",
}) {
  return (
    <button
      onClick={onClick}
      className={`drop-shadow-xl  ${
        type == "secondary" ? "bg-neutral-100" : "bg-black text-stone-100"
      }   text-center text-sm py-3 px-4 rounded-md whitespace-nowrap shrink-0 min-w-[140px] ${classname}`}
    >
      {children}
    </button>
  );
}

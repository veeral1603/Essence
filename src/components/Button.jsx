export default function Button({ children, classname, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`drop-shadow-xl  bg-black text-stone-100 text-xs   px-10 py-3 sm:px-10 md:py-2 md:px-8 lg:py-3 lg:px-12 rounded-lg mt-2 ${classname}`}
    >
      {children}
    </button>
  );
}

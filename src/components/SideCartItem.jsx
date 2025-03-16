import { LuTrash } from "react-icons/lu";

export default function SideCartItem({ item }) {
  return (
    <div className="py-3 flex  border-b border-primaryBorder last:border-none gap-2 ">
      <div className="w-[100px] md:w-[140px]  bg-stone-100 flex items-center justify-center">
        <img src={item.thumbnail} className="" />
      </div>
      <div className="flex-1 py-1">
        <div className="flex items-start justify-between gap-1">
          <h2 className="text-sm/4 md:text-base/4 font-semibold cursor-pointer">
            {item.title}
          </h2>
          <div className="cursor-pointer text-stone-500 hover:text-stone-800 transition-all duration-100">
            <LuTrash />
          </div>
        </div>
        <div className="text-xs/3 md:text-sm/3 text-stone-500 my-1 md:my-2 lg:my-3 sm:space-y-1 lg:space-y-2">
          <p>Color: Red</p>
          <p>Size: XL</p>
          <p>Quantity: 1</p>
        </div>
        <div className="">
          <h2 className="text-sm font-semibold md:text-base/4">
            ${item.price}
          </h2>
        </div>
      </div>
    </div>
  );
}

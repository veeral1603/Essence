import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img4 from "../assets/4.png";

export default function HeroSection() {
  return (
    <section className="container px-10 py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 gap-4">
        <div className="flex w-full  bg-stone-200 row-span-4 py-2 rounded-lg  items-end justify-center">
          <img src={img1} className="w-[280px] md:w-[auto]" />
        </div>
        <div className="bg-stone-200 rounded-lg hidden md:flex  row-span-1 items-end px-2">
          <img src={img2} />
        </div>
        <div className="bg-stone-200 row-span-4 rounded-lg hidden md:flex  flex-col justify-end items-center">
          <img src={img1} className="transform -scale-x-100" />
        </div>
        <div className="py-3 md:py-0 row-span-2 rounded-lg text-center flex flex-col justify-center">
          <div className="text-6xl font-bold  md:text-5xl lg:text-6xl xl:text-7xl">
            <h2>ULTIMATE</h2>
            <h2 className="">SALE</h2>
          </div>
          <div className="mt-3">
            <h2 className="text-base uppercase font-medium hidden md:block">
              New Collection
            </h2>
            <button className="bg-black text-stone-100 font-semibold text-sm  px-8 py-4 md:px-6 rounded-lg mt-2">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className=" row-span-1 rounded-lg hidden md:flex  flex-col justify-end">
          <img src={img4} />
        </div>
      </div>
    </section>
  );
}

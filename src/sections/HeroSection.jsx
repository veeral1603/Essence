import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

import img1 from "../assets/heroImages/1.png";
import img2 from "../assets/heroImages/2.png";
import img4 from "../assets/heroImages/4.png";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="container  py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 gap-2 md:gap-4">
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
            <Button onClick={() => navigate(`/shop`)} classname={"md:mt-3"}>
              SHOP NOW
            </Button>
          </div>
        </div>
        <div className=" row-span-1 rounded-lg hidden md:flex  flex-col justify-end">
          <img src={img4} />
        </div>
      </div>
    </section>
  );
}

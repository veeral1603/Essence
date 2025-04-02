import Button from "../components/Button";
import OffersSlider from "../components/OffersSlider";
import Timer from "../components/Timer";

export default function DealsSection() {
  return (
    <section className="w-full py-8 md:py-12 lg:py-20 bg-stone-100 ">
      <div className="container flex flex-col md:flex-row w-full gap-8 md:gap-2 items-stretch overflow-x-visible">
        <div className="md:w-1/3 flex flex-col items-center md:items-start h-full">
          <div className="space-y-2 md:space-y-4 lg:space-y-6 mb-6 md:mb-6 lg:mb-8 text-center md:text-left">
            <h2 className="font-volkhov text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
              Deals Of The Month
            </h2>
            <p className=" text-xs md:text-sm text-secondaryText">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
              culpa illum libero officia nam voluptate voluptatibus nulla Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quae tempore
            </p>
            <div className="hidden md:block">
              <Button>BUY NOW</Button>
            </div>
          </div>
          <div className="">
            <h3 className="hidden md:block text-xl font-medium md:mb-3">
              Hurry, Before It&apos;s Too Late!
            </h3>
            <Timer />
          </div>
        </div>

        <div className="flex-1 h-[400px] md:w-2/3">
          <OffersSlider />
        </div>
      </div>
    </section>
  );
}

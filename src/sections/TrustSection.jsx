import { PiHeadphones } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { PiPackage } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa6";

export default function TrustSection() {
  return (
    <section className="py-8">
      <div className="container !px-0 grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-4 md:gap-4  ">
        <div className="flex  justify-center flex-col p-2 md:p-4 text-center">
          <div className="text-3xl md:text-4xl mx-auto">
            <FaRegStar />
          </div>
          <div className="flex flex-col md:gap-1 mt-2">
            <p className="text-sm/4 md:text-base/4 font-semibold">
              High Quality
            </p>
            <p className="text-xs/4 md:text-sm/4 text-neutral-500">
              Crafted from top materials
            </p>
          </div>
        </div>

        <div className="flex  justify-center flex-col p-2 md:p-4 text-center">
          <div className="text-3xl md:text-4xl mx-auto">
            <SlBadge />
          </div>
          <div className="flex flex-col md:gap-1 mt-2">
            <p className="text-sm/4 md:text-base/4 font-semibold">
              Warranty Protection
            </p>
            <p className="text-xs/4 md:text-sm/4 text-neutral-500">
              Over Two Years
            </p>
          </div>
        </div>

        <div className="flex  justify-center flex-col p-2 md:p-4 text-center">
          <div className="text-3xl md:text-4xl mx-auto">
            <PiPackage />
          </div>
          <div className="flex flex-col md:gap-1 mt-2">
            <p className="text-sm/4 md:text-base/4 font-semibold">
              Free Shipping
            </p>
            <p className="text-xs/4 md:text-sm/4 text-neutral-500">
              On orders above $250
            </p>
          </div>
        </div>

        <div className="flex  justify-center flex-col p-2 md:p-4 text-center">
          <div className="text-3xl md:text-4xl mx-auto">
            <PiHeadphones />
          </div>
          <div className="flex flex-col md:gap-1 mt-2">
            <p className="text-sm/4 md:text-base/4 font-semibold">
              24/7 Support
            </p>
            <p className="text-xs/4 md:text-sm/4 text-neutral-500">
              Dedicated Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

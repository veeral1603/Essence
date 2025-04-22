import { IoStar, IoStarHalf } from "react-icons/io5";
import avatar from "../assets/profilePlaceholder.jpg";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

export default function TestimonialCard({ item }) {
  return (
    <div className="lg:flex items-center justify-center p-6 lg:p-12  bg-white border border-primaryBorder shadow-md w-full h-full">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-10 rounded-2xl h-full lg:h-auto">
        <div className="rounded-full lg:rounded-none overflow-hidden aspect-square w-[100px] lg:w-[250px] xl:w-[270px] border border-primaryBorder">
          <img src={avatar} className="w-full" />
        </div>
        <div className="flex-1 flex flex-col ">
          <div className="flex flex-col items-center lg:items-start">
            <div className="text-sm/4 text-center lg:text-left lg:text-lg  mt-4 lg:mt-0 text-neutral-600">
              <p>
                <FaQuoteLeft className="inline mr-1 lg:mr-2 lg:text-2xl" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laborum! Vel, consequatur animi. Fugit pariatur unde minus
                veniam. Nostrum, doloribus.asdasdas Lorem ipsum dolor sit amet
                <FaQuoteRight className="inline ml-1 lg:ml-2 lg:text-2xl" />
              </p>
            </div>
            <div className="flex items-center text-lg lg:text-2xl text-yellow-500 mt-4 ">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStarHalf />
            </div>
          </div>

          <div className="mt-auto w-full text-center lg:text-left">
            <div className="h-[2px] w-full lg:w-3/5 bg-primaryBorder my-4 lg:mt-5 lg:mb-4"></div>
            <p className="text-xl lg:text-2xl xl:text-3xl font-volkhov">
              {item.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

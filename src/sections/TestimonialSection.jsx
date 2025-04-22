import Heading from "../components/Heading";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Navigation } from "swiper/modules";
import TestimonialCard from "../components/TestimonialCard";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";

const testi = [
  { name: "John Hopkins", category: "Topwear" },
  { name: "Mike Ross", category: "Topwear" },
  { name: "Harvey Spectre", category: "Bottoms" },
  { name: "Jessica Pearson", category: "Dresses" },
  { name: "Daniel Hardman", category: "Watch" },
  { name: "Louis Liit", category: "Tuxedo" },
];

export default function TestimonialSection() {
  return (
    <section className="py-10 md:py-16 bg-stone-100">
      <div className="container overflow-hidden xl:overflow-visible flex flex-col items-center md:py-0">
        <Heading sub="This is what our customers say about us">
          Customer Reviews
        </Heading>

        <div className=" mt-8  xl:overflow-visible">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="mySwiper w-[250px] h-[400px] md:w-[500px] md:h-[300px] lg:w-[700px] lg:h-[400px] xl:w-[800px] xl:h-[400px]"
          >
            {testi.map((item, i) => {
              {
                return (
                  <SwiperSlide className={`rounded-2xl shadow-sm`} key={i}>
                    <TestimonialCard item={item} />
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
        </div>

        <div className="flex items-center gap-4 mt-6 mb-2 md:mt-6 md:mb-0">
          <button className="bg-white rounded-full h-10 w-10 md:w-12 md:h-12 shadow-sm md:hover:shadow-md transition-shadow duration-100 swiper-button-prev flex items-center justify-center cursor-pointer">
            <FaCaretLeft className="md:text-xl" />
          </button>
          <button className="bg-white rounded-full h-10 w-10 md:w-12 md:h-12 shadow-sm md:hover:shadow-md transition-shadow duration-100 swiper-button-next flex items-center justify-center cursor-pointer">
            <FaCaretRight className="md:text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
}

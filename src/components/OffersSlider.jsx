import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import OffersCard from "./OffersCard";

import img2 from "../assets/OfferImages/2.png";
import img3 from "../assets/OfferImages/3.png";

const offerProducts = [
  {
    image: img2,
    sale: "Spring Sale",
    offer: "20% OFF",
  },
  {
    image: img3,
    sale: "Clearance Sale",
    offer: "25% OFF",
  },
  {
    image: img2,
    sale: "Spring Sale",
    offer: "20% OFF",
  },
  {
    image: img3,
    sale: "Spring Sale",
    offer: "20% OFF",
  },
  {
    image: img2,
    sale: "Spring Sale",
    offer: "20% OFF",
  },
  {
    image: img3,
    sale: "Spring Sale",
    offer: "20% OFF",
  },
];

export default function OffersSlider() {
  return (
    <div className=" w-full h-full rounded-md overflow-visible relative">
      <Swiper
        slidesPerView={2.5}
        spaceBetween={35}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 }, // Mobile: 1 slide
          480: { slidesPerView: 2, spaceBetween: 25 }, // Small devices
          768: { slidesPerView: 1.8 }, // Tablet
          1024: { slidesPerView: 2.3 }, // Tablet
          1280: { slidesPerView: 2.5 }, // Large screens
        }}
        className="my-swpier h-full relative rounded-md py-2"
      >
        {offerProducts.map((item, i) => {
          {
            return (
              <SwiperSlide key={i}>
                <OffersCard item={item} />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
}

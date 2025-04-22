import Slider from "react-infinite-logo-slider";

import brand1 from "../assets/brandLogos/1.png";
import brand2 from "../assets/brandLogos/2.png";
import brand3 from "../assets/brandLogos/3.png";
import brand4 from "../assets/brandLogos/4.png";
import brand5 from "../assets/brandLogos/5.png";

const brandLogos = [
  { logo: brand1, altText: "Chanel Logo" },
  { logo: brand2, altText: "LV Logo" },
  { logo: brand3, altText: "Prada Logo" },
  { logo: brand4, altText: "CK Logo" },
  { logo: brand5, altText: "Denim Logo" },
];

export default function LogoCarousel() {
  return (
    <>
      <section className="hidden md:block container md:py-[30px] lg:py-[60px] ">
        <div className="flex items-center justify-between">
          {brandLogos.map((item) => {
            {
              return (
                <img
                  src={item.logo}
                  className="w-[100px] lg:w-[130px] xl:w-[150px]"
                  alt={item.altText}
                  key={item.altText}
                />
              );
            }
          })}
        </div>
      </section>

      <section className="md:hidden pt-4 pb-10">
        <Slider width="125px" duration={20} pauseOnHover={false}>
          {brandLogos.map((item, i) => {
            {
              return (
                <Slider.Slide key={i}>
                  <img
                    src={item.logo}
                    className="w-[100px]"
                    alt={item.altText}
                  />
                </Slider.Slide>
              );
            }
          })}
        </Slider>
      </section>
    </>
  );
}

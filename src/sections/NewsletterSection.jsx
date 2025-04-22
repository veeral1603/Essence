import img1 from "../assets/newsletterImages/1.png";
import img2 from "../assets/newsletterImages/2.png";
import Button from "../components/Button";
import Heading from "../components/Heading";

export default function NewsletterSection() {
  return (
    <section className="pt-10 pb-6 md:py-12">
      <div className="container grid grid-cols-1  lg:grid-cols-[1fr_2fr_1fr] md:gap-6">
        <div className="hidden lg:flex items-center justify-start">
          <img src={img1} className="" />
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="mx-auto lg:mx-0 px-2 md:px-0">
            <form className="flex flex-col items-center">
              <Heading>Subscribe to Our Newsletter</Heading>

              <input
                type="email"
                required
                placeholder="example@mail.com"
                className="mt-6 shadow-md w-full p-4 outline-none rounded-md focus:shadow-xl transition-shadow duration-150"
              />
              <Button classname={`mt-6`}>Subscribe Now</Button>
            </form>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-end">
          <img src={img2} className="" />
        </div>
      </div>
    </section>
  );
}

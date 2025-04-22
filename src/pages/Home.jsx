import DealsSection from "../sections/DealsSection";
import HeroSection from "../sections/HeroSection";
import LogoCarousel from "../sections/LogoCarousel";
import NewArrivalsSection from "../sections/NewArrivalsSection";
import NewsletterSection from "../sections/NewsletterSection";
import TestimonialSection from "../sections/TestimonialSection";
import TrustSection from "../sections/TrustSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoCarousel />
      <DealsSection />
      <NewArrivalsSection />
      <TrustSection />
      <TestimonialSection />
      <NewsletterSection />
    </>
  );
}

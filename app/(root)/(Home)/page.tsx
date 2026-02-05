import Hero from "./_components/Hero";
import RoomBookingSearch from "./_components/RoomBookingSearch";
import LogoMarquee from "./_components/BrandLogo";
import { WhyChooseSection } from "./_components/StudentChoose";
import { AskedQuestions } from "./_components/AskedQuestions";
import HowToWorks from "./_components/HowToWorks";
import { GuestsSay } from "./_components/GuestsSay";
import FeaturedHome from "./_components/FeaturedHome";

export default function Home() {
  return (
    <div>
      <Hero />
      <RoomBookingSearch />
      <LogoMarquee />
      <FeaturedHome />

      <WhyChooseSection />
      <AskedQuestions />
      <HowToWorks />
      <GuestsSay />
    </div>
  );
}

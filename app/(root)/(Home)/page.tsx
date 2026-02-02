import Hero from "./_components/Hero";
import RoomBookingSearch from "./_components/RoomBookingSearch";
import LogoMarquee from "./_components/BrandLogo";
import FeaturedCategotyCard, { featuredCategoryData } from "./_components/FeaturedCategotyCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { WhyChooseSection } from "./_components/StudentChoose";
import { AskedQuestions } from "./_components/AskedQuestions";
import HowToWorks from "./_components/HowToWorks";
import { GuestsSay } from "./_components/GuestsSay";

export default function Home() {
  return (
    <div>
      <Hero />
      <RoomBookingSearch />
      <LogoMarquee />

      {/* Featured cards */}
    <div className="max-w-[1280px] mx-auto">
  <h1 className="text-[48px] font-semibold leading-[100%] text-black">
    Featured <span className="text-[#FF9807]">Student</span> Accommodations
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-3 mt-12 gap-6">
    {featuredCategoryData.map((item) => (
      <FeaturedCategotyCard key={item.id} data={item} />
    ))}
  </div>

  {/* Centered Button */}
  <div className="flex justify-center mt-[30px] mb-[120px]">
    <Button
      asChild
      className="group relative overflow-hidden bg-[#F97316] hover:bg-[#F97316] text-white w-[247px] h-[60px]"
    >
      <Link href="#" className="relative flex items-center justify-center gap-2">
        <span className="relative flex items-center gap-[10px] z-10 text-[22px] text-white font-medium">
         View All Rooms
         <FaArrowRightLong className="w-6 h-6"/>
        </span>

        <span
          className="
            absolute top-[-50%] left-[-60px]
            w-8 h-[200%]
            bg-white/30
            rotate-[35deg]
            transition-all duration-[550ms]
            ease-[cubic-bezier(0.19,1,0.22,1)]
            group-hover:left-[120%]
          "
        />
      </Link>
    </Button>
  </div>
</div>
<WhyChooseSection/>
<AskedQuestions/>
<HowToWorks/>
<GuestsSay/>

    </div>
  );
}

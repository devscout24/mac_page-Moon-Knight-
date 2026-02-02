import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { div } from "framer-motion/client";
import Link from "next/link";
import { SlLocationPin } from "react-icons/sl";
import { TiStar } from "react-icons/ti";

export interface FeaturedCategory {
  id: number;
  image: string;
  featured: string;
  city: string;
  title: string;
  description: string;
  amenities: string[];
  rating: number;
  reviews: number;
}

// Sample data
export const featuredCategoryData: FeaturedCategory[] = [
  {
    id: 1,
    image: "/images/Frame1.png",
    featured: "25/week",
    city: "Dublin",
    title: "Sunny room near Trinity College",
    description: "A cozy room in a quiet residential area. 10 mins walk to city center, Includes high-speed WiFi and a study desk...",
    amenities: [
      "/icons/Frame.svg",
      "/icons/cil_bed.svg",
      "/icons/teenyicons_bath-outline.svg",
      "/icons/arcticons_aeg-kitchen.svg",
    ],
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 2,
    image: "/images/Frame2.png",
    featured: "30/week",
    city: "City Center",
    title: "Cozy single room in City Center",
    description: "A cozy room in a quiet residential area. 10 mins walk to city center, Includes high-speed WiFi and a study desk...",
    amenities: [
      "/icons/Frame.svg",
      "/icons/cil_bed.svg",
      "/icons/teenyicons_bath-outline.svg",
      "/icons/arcticons_aeg-kitchen.svg",
    ],
    rating: 4.2,
    reviews: 86,
  },
  {
    id: 3,
    image: "/images/Frame2.png",
    featured: "30/week",
    city: "Rotterdam",
    title: "Cozy single room in City Center",
    description: "A cozy room in a quiet residential area. 10 mins walk to city center, Includes high-speed WiFi and a study desk...",
    amenities: [
      "/icons/Frame.svg",
      "/icons/cil_bed.svg",
      "/icons/teenyicons_bath-outline.svg",
      "/icons/arcticons_aeg-kitchen.svg",
    ],
    rating: 4.2,
    reviews: 86,
  },
];

interface Props {
  data: FeaturedCategory;
}

const FeaturedCategotyCard = ({ data }: Props) => {
  return (
    <div>
      
      <Card className="relative w-full max-w-[416px] overflow-hidden bg-[#FBFBFB] border  border-[#707070] rounded-[16px] p-3">
      {/* Image */}
      <div className="relative">
        <img   
          src={data.image}
          alt={data.title}
          className="w-full  h-[270px] object-cover rounded-[16px]"
        />
        <div className="absolute inset-0 bg-black/35 rounded-[16px]" />
        {data.featured && (
          <Badge className="absolute top-3 right-3 z-20 text-[12px] h-[28px] leading-[28px] bg-white text-black ">
            € {data.featured}
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className=" flex flex-col gap-2">
        {/* City */}
        <div className="flex items-center gap-1 text-[#707070] text-[14px] uppercase">
          <SlLocationPin className="w-4 h-4" />
          <span>{data.city}</span>
        </div>

        {/* Title */}
        <h3 className="text-[16px] font-medium text-black leading-[20px] mb-2">
          {data.title}
        </h3>

        {/* Description */}
        <p className="text-[14px] text-[#707070] leading-[18px] mb-[30px]">
          {data.description}
        </p>

        {/* Amenities */}
        {data.amenities?.length > 0 && (
          <div className="flex gap-2 ">
            {data.amenities.map((icon, i) => (
              <img key={i} src={icon} alt="amenity" className="w-5 h-5" />
            ))}
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-[#D9D9D9] my-[24px]" />

        {/* Rating */}
        <div className="flex justify-between items-center gap-4 text-[#707070] text-[14px] mb-6">
          <span className="flex items-center gap-[10px] text-lg leading-[18px] font-medium text-black"> <TiStar className="text-[#FF9807] w-5 h-5" /> {data.rating}</span>
          <span className="text-[16px] font-normal text-[#707070] leading-[18px]"> {data.reviews} reviews</span>
        </div>
      </div>
    </Card>

   
    </div>
  );
};

export default FeaturedCategotyCard;

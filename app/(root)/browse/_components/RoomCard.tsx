import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import { useRouter } from "next/navigation";
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
  type?: string;
}

// Sample data
export const featuredCategoryData: FeaturedCategory[] = [
  {
    id: 1,
    image: "/images/Frame1.png",
    featured: "25/week",
    city: "Dublin",
    title: "Sunny room near Trinity College",
    description: "A comfortable single room perfect for students, located in the heart of the city. Close to universities, public transport, and all amenities. The room is fully furnished with a comfortable bed, study desk, and wardrobe. Shared kitchen and bathroom facilities are modern and well-maintained.",
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
    description: "A comfortable single room perfect for students, located in the heart of the city. Close to universities, public transport, and all amenities. The room is fully furnished with a comfortable bed, study desk, and wardrobe. Shared kitchen and bathroom facilities are modern and well-maintained.",
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
    description: "A comfortable single room perfect for students, located in the heart of the city. Close to universities, public transport, and all amenities. The room is fully furnished with a comfortable bed, study desk, and wardrobe. Shared kitchen and bathroom facilities are modern and well-maintained.",
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
    id: 4,
    image: "/images/Frame2.png",
    featured: "30/week",
    city: "Rotterdam",
    title: "Cozy single room in City Center",
    description: "A comfortable single room perfect for students, located in the heart of the city. Close to universities, public transport, and all amenities. The room is fully furnished with a comfortable bed, study desk, and wardrobe. Shared kitchen and bathroom facilities are modern and well-maintained.",
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
    id: 5,
    image: "/images/Frame2.png",
    featured: "30/week",
    city: "Rotterdam",
    title: "Cozy single room in City Center",
    description: "A comfortable single room perfect for students, located in the heart of the city. Close to universities, public transport, and all amenities. The room is fully furnished with a comfortable bed, study desk, and wardrobe. Shared kitchen and bathroom facilities are modern and well-maintained.",
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
    id: 6,
    image: "/images/Frame2.png",
    featured: "30/week",
    city: "Rotterdam",
    title: "Cozy single room in City Center",
    description: "A comfortable single room perfect for students, located in the heart of the city. Close to universities, public transport, and all amenities. The room is fully furnished with a comfortable bed, study desk, and wardrobe. Shared kitchen and bathroom facilities are modern and well-maintained.",
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
    id: 7,
    image: "/images/Frame2.png",
    featured: "30/week",
    city: "Rotterdam",
    title: "Cozy single room in City Center",
    description: "A comfortable single room perfect for students, located in the heart of the city. Close to universities, public transport, and all amenities. The room is fully furnished with a comfortable bed, study desk, and wardrobe. Shared kitchen and bathroom facilities are modern and well-maintained.",
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
    id: 8,
    image: "/images/Frame2.png",
    featured: "30/week",
    city: "Rotterdam",
    title: "Cozy single room in City Center",
    description: "A comfortable single room perfect for students, located in the heart of the city. Close to universities, public transport, and all amenities. The room is fully furnished with a comfortable bed, study desk, and wardrobe. Shared kitchen and bathroom facilities are modern and well-maintained.",
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
    id: 9,
    image: "/images/Frame2.png",
    featured: "30/week",
    city: "Rotterdam",
    title: "Cozy single room in City Center",
    description: "A comfortable single room perfect for students, located in the heart of the city. Close to universities, public transport, and all amenities. The room is fully furnished with a comfortable bed, study desk, and wardrobe. Shared kitchen and bathroom facilities are modern and well-maintained.",
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
    id: 10,
    image: "/images/Frame2.png",
    featured: "30/week",
    city: "Rotterdam",
    title: "Cozy single room in City Center",
    description: "A comfortable single room perfect for students, located in the heart of the city. Close to universities, public transport, and all amenities. The room is fully furnished with a comfortable bed, study desk, and wardrobe. Shared kitchen and bathroom facilities are modern and well-maintained.",
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
    id: 11,
    image: "/images/Frame2.png",
    featured: "30/week",
    city: "Rotterdam",
    title: "Cozy single room in City Center",
    description: "A comfortable single room perfect for students, located in the heart of the city. Close to universities, public transport, and all amenities. The room is fully furnished with a comfortable bed, study desk, and wardrobe. Shared kitchen and bathroom facilities are modern and well-maintained.",
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
    id: 12,
    image: "/images/Frame2.png",
    featured: "30/week",
    city: "Rotterdam",
    title: "Cozy single room in City Center",
    description: "A comfortable single room perfect for students, located in the heart of the city. Close to universities, public transport, and all amenities. The room is fully furnished with a comfortable bed, study desk, and wardrobe. Shared kitchen and bathroom facilities are modern and well-maintained.",
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
    id: 13,
    image: "/images/Frame2.png",
    featured: "30/week",
    city: "Rotterdam",
    title: "Cozy single room in City Center",
    description: "A comfortable single room perfect for students, located in the heart of the city. Close to universities, public transport, and all amenities. The room is fully furnished with a comfortable bed, study desk, and wardrobe. Shared kitchen and bathroom facilities are modern and well-maintained.     ",
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
    id: 14,
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
  {
    id: 15,
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
  {
    id: 16,
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
  {
    id: 17,
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
  {
    id: 18,
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
  {
    id: 19,
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

const RoomCard = ({ data }: Props) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/browse/${data.id}`)
  }
  return (
    
    <div>
      
      <Card
      className="relative w-full max-w-[416px] overflow-hidden bg-[#FBFBFB] border border-[#707070] rounded-[16px] p-3 cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative">
        <img src={data.image} alt={data.title} className="w-full h-[270px] object-cover rounded-[16px]" />
        <div className="absolute inset-0 bg-black/25 rounded-[16px]" />
        {data.featured && (
          <Badge className="absolute top-3 right-3 text-[12px] h-[28px] leading-[28px] bg-white text-black z-10">
            € {data.featured}
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-2 mt-3">
        <div className="flex items-center gap-1 text-[#707070] text-[14px] uppercase">
          <SlLocationPin className="w-4 h-4" /> <span>{data.city}</span>
        </div>

        <h3 className="text-[16px] font-medium text-black leading-[20px]">{data.title}</h3>
        <p className="text-[14px] text-[#707070] leading-[18px]">{data.description}</p>

        {data.amenities?.length > 0 && (
          <div className="flex gap-2">
            {data.amenities.map((icon, i) => (
              <img key={i} src={icon} alt="amenity" className="w-5 h-5" />
            ))}
          </div>
        )}

        <div className="border-t border-[#D9D9D9] my-3" />

        <div className="flex justify-between items-center text-[#707070] text-[14px]">
          <span className="flex items-center gap-1 text-black font-medium">
            <TiStar className="text-[#FF9807] w-5 h-5" /> {data.rating}
          </span>
          <span className="text-[14px]">{data.reviews} reviews</span>
        </div>
      </div>
    </Card>

   
    </div>
  );
};

export default RoomCard;

"use client";

import { useState, useEffect } from "react";
import { Heart, Star, MapPin, CalendarIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  FeaturedCategory,
  featuredCategoryData,
} from "../../_components/RoomCard";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";

interface Props {
  roomId: string;
}

export default function RoomDetailsPage({ roomId }: Props) {
  const [room, setRoom] = useState<FeaturedCategory | null>(null);
  const [thumbnailImages, setThumbnailImages] = useState<string[]>([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();

  // Find room by ID
  useEffect(() => {
    const id = Number(roomId);
    const foundRoom = featuredCategoryData.find((r) => r.id === id);
    setRoom(foundRoom || null);
  }, [roomId]);

  // Set images
  useEffect(() => {
    if (room) {
      setThumbnailImages([room.image, ...room.amenities]);
    }
  }, [room]);

  if (!room) {
    return (
      <div className="text-center py-24">
        <h2 className="text-2xl font-semibold mb-2">Room not found 😔</h2>
        <p className="text-gray-500">
          This room may have been removed or the link is incorrect.
        </p>
      </div>
    );
  }

  if (thumbnailImages.length === 0) {
    return <div className="text-center py-20">Loading...</div>;
  }

  const nights = 7;
  const pricePerWeek = parseInt(room.featured.replace(/[^\d]/g, ""), 10) || 0;
  const serviceFee = 50;
  const bookingFee = 20;
  const total = pricePerWeek * nights + serviceFee + bookingFee;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-3 gap-3 ">
        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-6">
          {/* Main Image */}
          <div className="relative  ">
            <img
              src={thumbnailImages[activeImageIndex]}
              alt="Room"
              className="w-full sm:w-[795px] h-full object-cover rounded-[16px]"
            />
            <button
              className="absolute top-4 right-10 p-2 bg-white rounded-full shadow"
              onClick={() => setLiked(!liked)}
            >
              <Heart
                size={24}
                className={
                  liked ? "fill-red-500 text-red-500" : "text-gray-400"
                }
              />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-6 gap-2">
            {thumbnailImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`rounded-lg overflow-hidden border-2 ${
                  activeImageIndex === idx
                    ? "border-orange-500"
                    : "border-transparent"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Room Info */}
          <Card className="px-6 pt-[36px] border-[#BFBFBF]">
            {/* <div className="flex justify-between items-center">
              <h1 className="text-[26px] leading-[26px] font-semibold text-black">
                {room.title}
              </h1>
              <h4>
                <span className="text-[#F97316] text-[38px]  font-semibold leading-[38px]">
                  €{parseInt(room.featured)}
                </span>
               
              </h4>
            </div> */}

            {/* <div className="flex justify-between w-full">
 
  <div className="flex items-center justify-center ">
    <MapPin
      size={20}
      className="text-[16px] font-normal text-[#707070] leading-[18px]"
    />
    <span className="text-gray-600 ml-2">{room.city}</span>

    <div className="flex items-center gap-1 ">
      <Star className="w-[18px] h-[18px] fill-[#F97316] text-[#F97316] ml-5" />
      <span className="text-[16px] font-normal text-[#707070] leading-[18px]">
        {room.rating}
      </span>
      <span className="text-[16px] font-normal text-[#707070] leading-[18px] ml-2">
        ({room.reviews} reviews)
      </span>
    </div>
  </div>


  <div className="flex justify-end  border--2">
    <span className="block text-[16px] leading-[20.8px] font-normal text-[#707070]">
      Per week
    </span>
  </div>
</div> */}

            <div className="border-t-2 pt-5">
              <h2 className="text-xl font-semibold leading-[20px] text-black mb-4">About this room</h2>
              <p className="text-gray-700 mb-4">{room.description}</p>
            </div>
          </Card>
        </div>

        {/* RIGHT SECTION */}
        {/* <div className="lg:col-span-1">
          <Card className="p-6 sticky top-6 space-y-6">
            <h2 className="text-2xl font-semibold">Book This Room</h2>

          
            <div>
              <label className="block text-[16px] leading-[18px] font-normal mb-[10px]">
                Check-in Date
              </label>

              <Popover>
                <PopoverTrigger asChild>
                  <div className="relative">
                    <Input
                      readOnly
                      value={checkIn ? format(checkIn, "dd/MM/yyyy") : ""}
                      placeholder="Pick date"
                      className="w-full justify-between bg-[#EFEFEF] text-[#707070] sm:w-[350px] h-[56px] font-normal text-lg leading-[18px]"
                    />
                    <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 text-[#707070]" />
                  </div>
                </PopoverTrigger>

                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            
            <div>
              <label className="block text-[16px] leading-[18px] font-normal mb-[10px]">
                Check-in Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <div className="relative">
                    <Input
                      readOnly
                      value={checkOut ? format(checkOut, "dd/MM/yyyy") : ""}
                      placeholder="Pick date"
                      className="w-full justify-between bg-[#EFEFEF] text-[#707070] sm:w-[350px] h-[56px] font-normal text-lg leading-[18px]"
                    />
                    <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7  text-[#707070]" />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                  />
                </PopoverContent>
              </Popover>
            </div>

            
            <div className="flex justify-between text-lg">
              <span>Total</span>
              <span className="font-bold text-orange-500">€{total}</span>
            </div>

            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              Book Now
            </Button>
          </Card>
        </div> */}
      </div>
    </div>
  );
}

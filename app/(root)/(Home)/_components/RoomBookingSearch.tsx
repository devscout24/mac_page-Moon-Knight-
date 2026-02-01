"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Modal from "@/components/Modal/modal";

const cities = ["Dublin", "Cork", "Galway", "Limerick"];

const RoomBookingSearch = () => {
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [city, setCity] = useState("");
  const [keyword, setKeyword] = useState("");

  return (
    <div className="max-w-[1095px] my-[46px] mx-auto bg-[#EFEFEF] px-10 py-10 rounded-xl shadow-md -mt-[100px]  relative mb-20">
      {/* Heading */}
      <h2 className="text-[26px] font-medium leading-[33.8px] text-black mb-6">
        Find Your Perfect Room
      </h2>

      {/* Filters row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        {/* Min Price Input */}
        <input
          type="number"
          placeholder="Min Price €"
          value={minPrice}
          onChange={(e) =>
            setMinPrice(e.target.value ? Number(e.target.value) : "")
          }
          className="w-[240px] h-[56px] border rounded-lg px-4 py-3 bg-[#FBFBFB] text-lg font-normal text-[#707070] placeholder:text-[#707070]"
        />

        {/* Max Price Input */}
        <input
          type="number"
          placeholder="Max Price €"
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(e.target.value ? Number(e.target.value) : "")
          }
          className="w-[240px] h-[56px] border rounded-lg px-4 py-3 bg-[#FBFBFB] text-lg font-normal text-[#707070] placeholder:text-[#707070]"
        />

        
<div>
  <Select value={city} onValueChange={setCity}>
    <SelectTrigger className="w-[240px] h-[56px] border rounded-lg px-4 py-[27px] bg-[#FBFBFB] text-lg font-normal text-[#707070] placeholder:text-[#707070]">
      <SelectValue placeholder="Select City" />
    </SelectTrigger>

    <SelectContent
      position="popper"   
      sideOffset={6}
      className="w-[240px] z-50"
    >
      {cities.map((c) => (
        <SelectItem key={c} value={c}>
          {c}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
</div>





        {/* Search Button */}
        <Button
                asChild
                className="group relative overflow-hidden bg-[#F97316] hover:bg-[#F97316] text-white w-[240px] h-[56px] "
              >
                <a className="relative flex items-center gap-2 ">
                  <span className="relative z-10 text-[22px] text-white font-medium">
                   Search
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
                </a>
              </Button>
      </div>

  
    </div>
  );
};

export default RoomBookingSearch;

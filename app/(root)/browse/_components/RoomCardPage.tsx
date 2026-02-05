"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import RoomCard, { featuredCategoryData, FeaturedCategory } from "./RoomCard";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const ITEMS_PER_PAGE = 9;

const RoomCardPage = () => {
  const [page, setPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false);

  // Filter state
  const [roomTypes, setRoomTypes] = useState<string[]>([]);
  const [amenities, setAmenities] = useState<string[]>([]);

  const roomOptions = ["Single Room", "Shared Room", "Studio Ensuite"];
  const amenityOptions = ["Wifi", "Furnished", "Private Bathroom", "Kitchen Access", "Laundry"];

  const toggleRoomType = (type: string) => {
    setRoomTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleAmenity = (amenity: string) => {
    setAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
    );
  };

  const applyFilters = () => {
    setShowFilter(false);
    setPage(1);
  };

  const clearFilters = () => {
    setRoomTypes([]);
    setAmenities([]);
    setShowFilter(false);
    setPage(1);
  };

  // Filtered rooms
  const filteredRooms = featuredCategoryData.filter((room: FeaturedCategory) => {
    const typeMatch = roomTypes.length === 0 || (room.type && roomTypes.includes(room.type));
    const amenitiesMatch =
      amenities.length === 0 || amenities.every((a) => room.amenities.includes(a));
    return typeMatch && amenitiesMatch;
  });

  const totalRooms = filteredRooms.length;
  const totalPages = Math.ceil(totalRooms / ITEMS_PER_PAGE);

  const paginatedRooms = filteredRooms.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h5 className="text-[18px] font-semibold text-black">
          {totalRooms}{" "}
          <span className="text-[#3C3C3C] font-normal leading-[18px]">
            rooms available
          </span>
        </h5>

        {/* Button Container */}
        <div className="flex gap-2 relative">
          {/* Advance Filter Button */}
          <Button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-3 w-[185px] h-[52px] py-4 bg-black text-lg font-medium leading-[18px] overflow-hidden group relative z-0"
          >
            <img src="/icons/Frame (13).svg" alt="" />
            Advance Filter
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
          </Button>

          {/* Clear Filters Button */}
          {(roomTypes.length > 0 || amenities.length > 0) && (
            <Button
              variant="outline"
              onClick={clearFilters}
              className="flex items-center gap-2 w-[185px] h-[52px] py-4 bg-white text-lg font-medium leading-[18px] border border-gray-400 overflow-hidden group relative z-0"
            >
              Clear all filters
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
            </Button>
          )}

          {/* Filter Panel */}
          {showFilter && (
            <div className="w-full absolute top-full left-0 mt-8 bg-white  p-6 rounded-lg shadow-xl border border-gray-200 w-[500px] z-50">
              {/* Header */}
              <div className="flex justify-between items-center mb-4 mt-20 w-full">
                <h2 className="text-xl font-semibold">Advance Filters</h2>
                <button
                  onClick={() => setShowFilter(false)}
                  className="text-red-500 hover:text-red-600 p-2 rounded text-lg font-bold"
                >
                  X
                </button>
              </div>

              {/* Room Type Checkboxes */}
              <div className="mb-6">
                <label className="block font-medium mb-3">Room Type</label>
                <div className="space-y-2">
                  {roomOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded"
                    >
                      <input
                        type="checkbox"
                        checked={roomTypes.includes(option)}
                        onChange={() => toggleRoomType(option)}
                        className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Amenities Checkboxes */}
              <div className="mb-6">
                <label className="block font-medium mb-3">Amenities</label>
                <div className="space-y-2">
                  {amenityOptions.map((amenity) => (
                    <label
                      key={amenity}
                      className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded"
                    >
                      <input
                        type="checkbox"
                        checked={amenities.includes(amenity)}
                        onChange={() => toggleAmenity(amenity)}
                        className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <span className="text-gray-700">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filter Button */}
              <div className="flex justify-end">
                <Button
                  onClick={applyFilters}
                  className="flex items-center gap-2 w-full h-[52px] py-4 bg-black text-lg font-medium leading-[18px] overflow-hidden group relative z-0"
                >
                  Filter
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
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Room Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 mt-12 gap-6">
        {paginatedRooms.map((item) => (
          <RoomCard key={item.id} data={item} />
        ))}
        {paginatedRooms.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No rooms found with the selected filters.
          </p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-self-end items-center gap-6 mt-12 mb-16">
        <Button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="group relative overflow-hidden bg-[#F97316] hover:bg-white text-white w-[209px] h-[60px] flex items-center justify-center gap-2"
        >
          <FaArrowLeft />
          Previous
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
        </Button>

        <Button
          disabled={page === totalPages || totalPages === 0}
          onClick={() => setPage(page + 1)}
          className="group relative overflow-hidden bg-[#F97316] hover:bg-white text-white w-[209px] h-[60px] flex items-center justify-center gap-2"
        >
          Next
          <FaArrowRightLong />
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
        </Button>
      </div>
    </div>
  );
};

export default RoomCardPage;

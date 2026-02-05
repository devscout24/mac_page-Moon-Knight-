'use client'

import { Star } from 'lucide-react'

interface Testimonial {
  id: number
  rating: number
  text: string
  author: string
  role: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    text: "A cozy room in a quiet residential area. 10 mins walk to city center, Includes high-speed WiFi and a study desk...",
    author: "Atif Islam",
    role: "Student in Ireland",
    avatar: "/icons/Ellipse 1 (1).svg"
  },
  {
    id: 2,
    rating: 5,
    text: "A cozy room in a quiet residential area. 10 mins walk to city center, Includes high-speed WiFi and a study desk...",
    author: "Sanjay M.",
    role: "Student in Ireland",
    avatar: "/icons/Ellipse 1 (2).svg"
  },
  {
    id: 3,
    rating: 5,
    text: "A cozy room in a quiet residential area. 10 mins walk to city center, Includes high-speed WiFi and a study desk...",
    author: "Emma L.",
    role: "Student in Ireland",
   avatar: "/icons/Ellipse 1 (3).svg"
  }
]

export function GuestsSay() {
  return (
    <div className="w-full max-w-[1280px] mx-auto py-[120px]">


      {/* Main container with blue border */}
      <div className="rounded-lg  bg-white">
        {/* Title */}
        <div className="text-center mb-[34px]">
          <h2 className="text-4xl font-bold">
            What Our{' '}
            <span className="text-orange-500">Guests</span>
            {' '}Say
          </h2>
          
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-100 rounded-lg p-6 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-[#FF9807] text-[#FF9807]"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-700 italic text-lg my-5 flex-grow">
                {testimonial.text}
              </p>

              {/* Guest profile */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-[18px]">
                    {testimonial.author}
                  </p>
                  <p className="text-[16px] font-normal text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative bottom stripe */}
      
    </div>
  )
}



import { useState, useEffect } from "react"
import { Heart, Star, MapPin, Wifi, Zap, Sofa, Clock, Cigarette, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { featuredCategoryData, FeaturedCategory } from "../../_components/RoomCard"

interface Props {
  roomId: number
}

export default function RoomDetailsPage({ roomId }: Props) {
  const [room, setRoom] = useState<FeaturedCategory | null>(null)
  const [thumbnailImages, setThumbnailImages] = useState<string[]>([])
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [liked, setLiked] = useState(false)
  const [checkInDate, setCheckInDate] = useState('')
  const [checkOutDate, setCheckOutDate] = useState('')

  useEffect(() => {
    const foundRoom = featuredCategoryData.find(r => r.id === roomId)
    setRoom(foundRoom || null)
  }, [roomId])

  useEffect(() => {
    if (room) setThumbnailImages([room.image, ...room.amenities])
  }, [room])

  useEffect(() => {
    setCheckInDate('15/01/2026')
    setCheckOutDate('01/02/2026')
  }, [])

  if (!room) return <div className="text-center py-20">Room not found</div>
  if (thumbnailImages.length === 0) return <div className="text-center py-20">Loading...</div>

  const nights = 7
  const pricePerWeek = parseInt(room.featured.replace(/[^\d]/g, ''), 10) || 0
  const serviceFee = 50
  const bookingFee = 20
  const total = pricePerWeek * nights + serviceFee + bookingFee

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative rounded-lg overflow-hidden aspect-video">
            <img src={thumbnailImages[activeImageIndex]} alt="Room" className="w-full h-full object-cover" />
            <button
              className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg"
              onClick={() => setLiked(!liked)}
            >
              <Heart size={24} className={liked ? 'fill-red-500 text-red-500' : 'text-gray-400'} />
            </button>
          </div>

          <div className="grid grid-cols-6 gap-2">
            {thumbnailImages.map((img, idx) => (
              <button key={idx} onClick={() => setActiveImageIndex(idx)} className={`rounded-lg overflow-hidden border-2 ${activeImageIndex === idx ? 'border-orange-500' : 'border-transparent'}`}>
                <img src={img} alt={`thumb ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <Card className="p-6">
            <h1 className="text-2xl font-bold">{room.title}</h1>
            <div className="flex items-center gap-2 my-2">
              <MapPin size={18} className="text-gray-500" />
              <span className="text-gray-600">{room.city}</span>
              <div className="flex items-center gap-1 ml-2">
                <Star size={18} className="fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{room.rating}</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{room.description}</p>
            <div className="text-3xl font-bold text-orange-500 mb-4">€{room.featured} / week</div>
          </Card>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-8 space-y-4">
            <h2 className="text-xl font-bold">Book This Room</h2>
            <label className="text-sm text-gray-600">Check-in Date</label>
            <Input value={checkInDate} onChange={e => setCheckInDate(e.target.value)} />
            <label className="text-sm text-gray-600 mt-2">Check-out Date</label>
            <Input value={checkOutDate} onChange={e => setCheckOutDate(e.target.value)} />

            <div className="flex justify-between mt-4">
              <span>Total</span>
              <span className="font-bold text-orange-500">€{total}</span>
            </div>

            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-4">Book Now</Button>
          </Card>
        </div>
      </div>
    </div>
  )
}

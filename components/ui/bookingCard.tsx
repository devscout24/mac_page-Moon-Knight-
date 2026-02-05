

// import { CalendarIcon } from 'lucide-react'
// import { useState } from 'react'
// import { format } from 'date-fns'

// import { Calendar } from '@/components/ui/calendar'
// import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
// import { Button } from '@/components/ui/button'

// export function BookingCard() {
//   const [checkIn, setCheckIn] = useState<Date | undefined>(new Date())
//   const [checkOut, setCheckOut] = useState<Date | undefined>(new Date())

//   const roomCost = 375
//   const serviceFee = 37.5
//   const protectionFee = 100
//   const total = roomCost + serviceFee + protectionFee

//   return (
//     <div className="w-full max-w-[455px] mx-auto bg-white">
//       {/* Header */}
    
       


//         <div className="relative pt-12 pb-6 px-6">
//           <h2 className="text-2xl font-bold text-gray-900">Book This Room</h2>
//         </div>
    

//       {/* Body */}
//       <div className="bg-white border-l-4 border-r-4 border-blue-500 px-6 py-6 space-y-4">
//         {/* Check-in */}
//         <div>
//           <label className="block text-sm font-semibold text-gray-900 mb-2 border-b-2 border-dashed border-gray-400 pb-2">
//             Check-in Date
//           </label>

//           <Popover>
//             <PopoverTrigger asChild>
//               <Button
//                 variant="outline"
//                 className="w-full justify-between bg-gray-100 hover:bg-gray-100 text-gray-700"
//               >
//                 {checkIn ? format(checkIn, 'dd/MM/yyyy') : 'Pick date'}
//                 <CalendarIcon className="w-5 h-5 opacity-70" />
//               </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-auto p-0">
//               <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} initialFocus />
//             </PopoverContent>
//           </Popover>
//         </div>

//         {/* Check-out */}
//         <div>
//           <label className="block text-sm font-semibold text-gray-900 mb-2 border-b-2 border-dashed border-gray-400 pb-2">
//             Check-out Date
//           </label>

//           <Popover>
//             <PopoverTrigger asChild>
//               <Button
//                 variant="outline"
//                 className="w-full justify-between bg-gray-100 hover:bg-gray-100 text-gray-700"
//               >
//                 {checkOut ? format(checkOut, 'dd/MM/yyyy') : 'Pick date'}
//                 <CalendarIcon className="w-5 h-5 opacity-70" />
//               </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-auto p-0">
//               <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} initialFocus />
//             </PopoverContent>
//           </Popover>
//         </div>
//       </div>

//       {/* Pricing */}
//       <div className="bg-white border-l-4 border-r-4 border-blue-500 px-6 py-6 space-y-3 border-t-2 border-t-dashed border-t-gray-300">
//         <div className="flex justify-between">
//           <span>€25 × 15 days</span>
//           <span className="font-semibold">€{roomCost.toFixed(2)}</span>
//         </div>

//         <div className="flex justify-between">
//           <span>Platform Service & Support Fee (€2/day)</span>
//           <span className="font-semibold">€{serviceFee.toFixed(1)}</span>
//         </div>

//         <div className="flex justify-between">
//           <span>Booking & Protection Fee</span>
//           <span className="font-semibold">€{protectionFee.toFixed(2)}</span>
//         </div>

//         <div className="border-t-2 border-dashed border-gray-300 pt-3 mt-3" />

//         <div className="flex justify-between items-center">
//           <span className="font-bold">Total</span>
//           <span className="text-3xl font-bold text-orange-500">
//             €{total.toFixed(2)}
//           </span>
//         </div>
//       </div>

//       {/* Button */}
//       <div className="bg-white border-4 border-blue-500 border-t-0 px-6 pb-6">
//         <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-full transition">
//           Book Now
//         </button>
//       </div>

//       {/* Bottom badge */}
//       <div className="relative bg-white border-4 border-t-0 border-blue-500 h-8 flex items-center justify-end pr-3">
//         <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white">
//           24
//         </div>
//       </div>
//     </div>
//   )
// }
import { Button } from "@/components/ui/button"
import {
} from "@/components/ui/dropdown-menu"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const isLoggedIn = false 

const Hero = () => {
  return (
    <section className="max-w-[1280px] mx-auto relative h-[740px] w-full overflow-hidden rounded-4xl">
      
      <Image
        src="/images/Hero.png" 
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />

      
      <div className="absolute inset-0 bg-black/40" />

     
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 md:px-16 max-w-[1000px] mx-auto">
        <h1 className="text-3xl md:text-[70px] font-bold text-[#FFF] leading-[78px] text-shadow-2px text-shadow-2px text-shadow-6px text-shadow-black">
          Affordable Mid-Term Room Rentals in Ireland You Can Trust
        </h1>

        <h3 className="mt-6 text-lg md:text-[26px] text-[#FFF] leading-[33.8px] ">
          Warmwelcome connects Guests with verified Home Partners for safe,
          affordable, and respectful living across Ireland.
        </h3>

       
        <div className="flex items-center gap-6 mt-8">
          {!isLoggedIn && (
            <>
              
              <Button
                className="
                  group relative overflow-hidden
                  bg-[#8A9A5B]
                  hover:bg-[#8A9A5B]
                  text-white
                w-[362px] h-[60px]
                  flex items-center gap-2
                "
              >
                <Search className="w-6 h-6 relative z-10 ml-6" />
                <span className="relative z-10 text-[22px] text-white font-medium  ">I’m a Guest → Find a Room</span>

                
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
                asChild
                className="group relative overflow-hidden bg-[#F97316] hover:bg-[#F97316] text-white w-[209px] h-[60px]"
              >
                <Link href="#" className="relative flex items-center gap-2">
                  <span className="relative z-10 text-[22px] text-white font-medium">
                   Become a Host
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
            </>
          )}

          
          {/* {isLoggedIn && (
            <>
              <button className="relative p-2 text-white hover:bg-white/10 rounded-lg">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#F97316] rounded-full" />
              </button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer hover:bg-white/10 text-white">
                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center font-semibold text-sm">
                      M
                    </div>

                    <div className="hidden sm:block">
                      <div className="text-sm font-medium">Mr James</div>
                      <div className="text-xs text-gray-300">
                        Guest Account
                      </div>
                    </div>

                    <ChevronDown className="w-4 h-4" />
                  </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" sideOffset={8} className="w-40">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-500">
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )} */}
        </div>
      </div>
    </section>
  )
}

export default Hero

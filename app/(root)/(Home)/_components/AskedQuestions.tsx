import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CgMathMinus } from "react-icons/cg"
import { IoIosAdd } from "react-icons/io"

const items = [
  {
    id: 1,
    trigger: "What is Warmwelcome?",
    content:
      "WarmWelcome is a trusted accommodation platform that connects students with verified hosts offering safe, comfortable places to stay. We focus on transparency, trust, and community to ensure a welcoming experience for both guests and hosts.",
  },
  {
    id: 2,
    trigger: "How do I book a room safely?",
    content:
      "Control your privacy settings and security preferences. Enable two-factor authentication, manage connected devices, review active sessions, and configure data sharing preferences.",
  },
  {
    id: 3,
    trigger: "Where is Warmwelcome available?",
    content:
      "View your current plan, payment history, and upcoming invoices.",
  },
  {
    id: 4,
    trigger: "Who can use this platform?",
    content:
      "WarmWelcome is a trusted accommodation platform that connects students with verified hosts offering safe, comfortable places to stay. We focus on transparency, trust, and community to ensure a welcoming experience for both guests and hosts.",
  },
]


export function AskedQuestions() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 mb-[50px]">
      <h2 className="text-[46px] font-bold leading-[100%] text-black text-center my-[50px]">
        <span className="text-[#F97316]">Frequently</span> Asked Questions
      </h2>

      <Accordion type="multiple" className="space-y-4">
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            value={String(item.id)}
            className="rounded-xl bg-[#F5F5F5] border-none text-black"
          >
            <AccordionTrigger
              className="group flex justify-between items-center px-6 py-4 rounded-xl 
                         bg-gray-100 text-black text-[26px] font-bold no-underline hover:no-underline"
            >
              <span>{item.trigger}</span>

              <span className="text-2xl">
                <IoIosAdd className="block group-data-[state=open]:hidden border border-black rounded-full" />
                <CgMathMinus className="hidden group-data-[state=open]:block border border-black rounded-full" />
              </span>
            </AccordionTrigger>

            <AccordionContent className="px-6 py-4 text-[#3C3C3C] mb-[50px] text-[16px] font-normal ">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* SEE MORE BUTTON */}
      <div className="flex justify-center mt-[50px] mb-[120px]">
         <Button
                asChild
                className="group relative overflow-hidden bg-[#F97316] hover:bg-[#F97316] text-white w-[207px] h-[60px] "
              >
                <Link href="#" className="relative flex items-center gap-2">
                  <span className="relative z-10 text-[22px] text-white font-medium">
                  see more FAQs
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
  )
}


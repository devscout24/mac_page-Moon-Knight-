"use client";

type Logo = {
  id: number;
  src: string;
  alt?: string;
};

const logos: Logo[] = [
  { id: 1, src: "/images/logo.png" },
  { id: 2, src: "/images/logo1.svg" },
  { id: 3, src: "/images/logo2.png" },
  { id: 4, src: "/images/logo3.svg" },
  { id: 5, src: "/images/logo4.svg" },
  { id: 6, src: "/images/logo5.svg" },
];

const Marquee: any = "marquee";

const LogoMarquee = () => {
  return (
    <section className="w-full my-12 overflow-hidden">
      <div className=" bg-black ">

        <h2 className="text-center text-[26px] font-semibold text-[#FBFBFB] py-[30px]">
          WHERE <span className="text-[#F97316]">GUESTS</span> ARE  BASED
        </h2>

        <Marquee
          direction="left"
          scrollamount="6"
          className="flex items-center"
          onMouseOver={(e: any) => e.currentTarget.stop()}
          onMouseOut={(e: any) => e.currentTarget.start()}
        >
          <div className="flex items-center gap-3 mb-[30px]">
            {logos.map((logo) => (
              <img
                key={logo.id}
                src={logo.src}
                alt={logo.alt || "Logo"}
                className="h-[35px] w-auto object-contain grayscale-0 transition mx-[140px]"
              />
            ))}
          </div>
        </Marquee>

      </div>
    </section>
  );
};

export default LogoMarquee;
import Image from "next/image";
import { Label } from "@/components/Label";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import What from "@/components/sections/what";
import Contact from "@/components/sections/contact";
import Work from "@/components/sections/work";
import Why from "@/components/sections/why";
import UnderMaintenance from "@/components/sections/underMaintenance";


const features = [
  {
    // iconComponent: renderIcon(LandPlot),
    name: "Peep our work",
    description: "A glimpse at the things we’ve built.",
    // href: "/",
    cta: "Learn more",
    background: (
      <Image
        src="/images/hero-system.png"
        alt="File storage illustration"
        className="absolute"
        width={600}
        height={600}
      />
    ),
    fullScreenContent: <Work />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 hover:bg-secondary-800 text-mono-100 transition-all duration-700 ease-in-out",
  },
  {
    // iconComponent: renderIcon(Album),
    name: "What we can do for you",
    description: "From ideas to full-on apps — we handle it all.",
    // href: "/",
    cta: "Learn more",
    background: (
      <Image
        src="/images/hero-good.png"
        alt="Search illustration"
        className="absolute -right-0 -top-10 "
        width={250}
        height={220}
      />
    ),
    fullScreenContent: <UnderMaintenance />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 hover:bg-[#FFD000] text-mono-100 transition-all duration-700 ease-in-out",
  },
  {
    // iconComponent: renderIcon(SquareMousePointer),
    name: "Behind the screens",
    description: "We build with purpose, powered by curiosity and clean design.",
    // href: "/",
    cta: "Learn more",
    background: (
      <Image
        src="/images/hero-bad.png"
        alt="Globe illustration"
        className="absolute -right-20 -top-20 "
        width={200}
        height={320}
      />
    ),
    fullScreenContent: <What/>,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 hover:bg-[#38427B] text-mono-100 transition-all duration-700 ease-in-out",
  },
  {
    // iconComponent: renderIcon(Mail),
    name: "Say 👋",
    description: "Got an idea? Let’s chat and make it real.",
    // href: "/",
    cta: "Let's connect",
    background: (
      <Image
        src="/images/birdmail.png"
        alt="Calendar illustration"
        className="absolute -right-20 -top-20 "
        width={400}
        height={320}
      />
    ),
    fullScreenContent: <Contact />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2 hover:bg-[#6E24DD] text-mono-100 transition-all duration-700 ease-in-out",
  },
  {
    // iconComponent: renderIcon(BookUser),
    name: "Who even are we?",
    description:
      "Just a bunch of makers turning ideas into digital magic.",
    // href: "/",
    cta: "Learn more",
    background: (
      <Image
        src="/images/human-approach-2.png"
        alt="Notifications illustration"
        className="absolute lg:-right-5 lg:-top-5"
        width={250}
        height={250}
      />
    ),
    fullScreenContent: <Why />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4 hover:bg-secondary-400 text-mono-100 transition-all duration-700 ease-in-out",
  },
];

export default function HeroGrid() {
  return (
    <div className="relative w-full flex flex-col lg:flex-row items-center lg:h-screen px-4 py-36 lg:px-20 lg:py-[200px] gap-4 bg-primary-500 z-0">
      <div className="flex flex-col gap-4">
        <div className="relative w-full flex flex-col mb-2 z-10 items-center justify-center">
          <div className="absolute z-40 top-[-10px] left-0 lg:left-[20px] ">
            <Label color="secondary" className="">Digital tech – Web app development</Label>
          </div>
          <h1 className="text-6xl lg:text-8xl font-black uppercase text-secondary-800 pt-6">
            Let&apos;s Build <br />
            Something Together
          </h1>
        </div>
      </div>
      <div className="">
        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
      <div className="absolute bottom-0 w-full ">
        <div className="w-full p-4 flex flex-col lg:flex-row gap-1 items-center justify-center text-center text-base text-mono-800">
          <Image
            src="/images/asterisk.png"
            alt="Dualiti"
            width={12}
            height={12}
          />
          We are a digital tech agency that turns good ideas into great products
          — fast, fun, and functional.
        </div>
      </div>
    </div>
  );
}
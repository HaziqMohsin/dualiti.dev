import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Label } from "@/components/Label";

export default function Hero() {
  return (
    <div className="w-full mx-auto px-4 lg:px-20 py-6 h-screen pt-36 lg:pt-[190px] flex flex-col items-center">
      <div className="flex flex-col gap-4">
        <div className="relative mb-2 z-10">
          <Label color="secondary">Digital tech – Web app development</Label>
          <h1 className="text-6xl lg:text-9xl font-black uppercase text-secondary-800 pt-6">
            Let&apos;s Build <br />
            Something <br />
            Together
          </h1>
        </div>

        <Link href="/" className="flex items-center gap-x-2">
          <div className="flex flex-row items-center gap-x-6 hover:gap-x-10 pl-8 pr-2 py-2 rounded-full bg-secondary-800 hover:bg-secondary-900 transition-all duration-300 hover:scale-110 z-10">
            <div className="text-mono-100 text-lg">Let&apos;s connect</div>
            <div className="flex items-center justify-center bg-[#A224DD] hover:bg-[#712494] rounded-full p-2 transition-all duration-300">
              <ArrowRight size={44} color="#fff" />
            </div>
          </div>
        </Link>
      </div>
      <div className="">
        {/* <div className="absolute z-0 flex right-0 bottom-0">
          <Image
            src="/images/hero-system.png"
            alt="Dualiti"
            width={800}
            height={800}
            className="w-44 sm:w-44 md:w-100 lg:w-[800px] h-auto"
          />
        </div> */}
        <div className="absolute bottom-24 lg:bottom-0 right-0 motion-safe:animate-bounce z-20">
          <Image
            src="/images/hero-good.png"
            alt="Dualiti"
            width={616}
            height={616}
            className="w-44 sm:w-44 md:w-100 lg:w-[616px] h-auto"
          />
        </div>
        <div className="absolute bottom-24 lg:bottom-0 right-1/4 lg:right-1/6 motion-safe:animate-bounce z-0">
          <Image
            src="/images/hero-bad.png"
            alt="Dualiti"
            width={544}
            height={544}
            className="w-40 sm:w-40 md:w-86 lg:w-[544px] h-auto blur-sm"
          />
        </div>
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

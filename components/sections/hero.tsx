import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full mx-auto px-4 lg:px-20 py-6 h-screen pt-[190px]">
      <div className="flex flex-col gap-4">
        <div className="text-2xl px-3 py-2 capitalize text-secondary-400 border-2 border-secondary-400 rounded-2xl w-fit">
          Digital tech – Web app development
        </div>
        <div className="mb-6">
          <h1 className="text-9xl font-black uppercase text-secondary-800">
            Let&apos;s Build <br />
            Something <br />
            Together
          </h1>
        </div>

        <Link href="/" className="flex items-center gap-x-2 pt-6">
          <div className="flex flex-row items-center gap-x-6 hover:gap-x-10 pl-8 pr-2 py-2 rounded-full bg-secondary-800 hover:bg-secondary-900 transition-all duration-300 hover:scale-110">
            <div className="text-mono-100 text-lg">Let&apos;s connect</div>
            <div className="flex items-center justify-center bg-[#A224DD] hover:bg-[#712494] rounded-full p-2 transition-all duration-300">
              <ArrowRight size={44} color="#fff" />
            </div>
          </div>
        </Link>
      </div>
      <div className="hidden lg:block">
        <div className="lg:absolute bottom-0 right-0 motion-safe:animate-bounce z-20">
          <Image
            src="/images/hero-good.png"
            alt="Dualiti"
            width={616}
            height={616}
          />
        </div>
        <div className="absolute bottom-0 right-1/4 motion-safe:animate-bounce z-10">
          <Image
            src="/images/hero-bad.png"
            alt="Dualiti"
            width={544}
            height={544}
          />
        </div>
      </div>
      <div className="lg:absolute bottom-4 w-full ">
        <div className="w-full flex gap-2 items-center justify-center text-center text-base text-mono-800">
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

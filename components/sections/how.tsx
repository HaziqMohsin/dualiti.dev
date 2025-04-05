import Image from "next/image";
import { Label } from "@/components/Label";

export default function How() {
  return (
    <div className="relative w-full mx-auto flex flex-col px-4 lg:px-20 py-24 lg:py-52 bg-secondary-900 gap-8 ">
      <div className="relative flex lg:flex-col gap-2 flex-col-reverse">
        <div className="z-10 lg:z-0">
          <div className="text-6xl lg:text-9xl text-mono-100 font-black uppercase">
            Our
            <br />
            <span className="text-primary-400">Not-so-secret</span>
            <br />
            sauce
          </div>
          <div className="text-xl lg:text-2xl text-mono-100">
            Every app, tool, or platform we build starts with one simple thing:
            <div className="italic font-bold">
              Understanding The Problem. From there, we research, prototype,
              test, and build.
            </div>
          </div>
        </div>
        <div className="absolute bottom-44 lg:bottom-0 lg:right-[-40px] z-0 lg:z-10 opacity-60 lg:opacity-100">
          <Image
            src="/images/Secret-sauce-01.png"
            alt="Dualiti"
            width={750}
            height={750}
            className="w-80 sm:w-84 md:w-200 lg:w-[750px] h-auto"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row pt-16">
        <div className="w-full lg:w-1/2 flex items-center justify-end">
          <Image
            src="/images/Secret-sauce-02.png"
            alt="Dualiti"
            width={563}
            height={563}
          />
        </div>
        <div className="relative lg:w-1/2 mx-auto flex items-center justify-center">
          <div className="z-10 relative">
            <Label color="primary">The Dualiti Way</Label>
            <div className="p-4 flex flex-col gap-4">
              <div className="text-2xl text-mono-100 flex-col gap-1">
                <div className="pt-2 font-bold">Understand the problem</div>
                <div className="text-xl italic text-mono-400">
                  Real users. Real pain points. Real insights. No assumptions.
                </div>
              </div>
              <div className="text-2xl text-mono-100 flex-col gap-1">
                <div className="font-bold">Spot the trends</div>
                <div className="text-xl italic text-mono-400">
                  We scan the market, spy the gaps, and see where your idea can
                  shine.
                </div>
              </div>
              <div className="text-2xl text-mono-100 flex-col gap-1">
                <div className="font-bold">Build a quick POC</div>
                <div className="text-xl italic text-mono-400">
                  Think of it like an MVP’s cool, younger sibling. Fast, lean,
                  and testable.
                </div>
              </div>
              <div className="text-2xl text-mono-100 flex-col gap-1">
                <div className="font-bold">Launch for real</div>
                <div className="text-xl italic text-mono-400">
                  Once we know it hits? We go full production mode. Clean code.
                  Scalable design. It’s a “Ready-Set-Go” time.
                </div>
              </div>
            </div>
          </div>
          {/* <div className="absolute w-80 h-80 bg-secondary-600/50 rounded-3xl z-20 left-2 rotate-[15deg] backdrop-blur-sm"></div> */}
          {/* <ParallaxSquare speed={0.5} /> */}
        </div>
      </div>
    </div>
  );
}

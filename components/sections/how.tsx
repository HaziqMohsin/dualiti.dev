import Image from "next/image";
import { Label } from "@/components/label";

export default function How() {
  return (
    <div className="relative w-full mx-auto flex flex-col px-4 lg:px-20 py-6 bg-secondary-900 gap-8">
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
            Understanding The Problem. From there, we research, prototype, test, and build.
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-[-100px] z-0 lg:z-10 blur-sm lg:blur-none opacity-60 lg:opacity-100">
          <Image
            src="/images/Secret-sauce-01.png"
            alt="Dualiti"
            width={750}
            height={750}
            className="w-80 sm:w-84 md:w-200 lg:w-[750px] h-auto blur-none lg:blur-sm"
          />
        </div>
      </div>
      <div className="relative flex flex-col lg:items-end">
        <div className="lg:absolute bottom-[-200px] left-0 z-10">
          <Image
            src="/images/Secret-sauce-02.png"
            alt="Dualiti"
            width={563}
            height={563}
          />
        </div>
        <div className="lg:w-[40vw] flex flex-col gap-4">
          <Label color="primary">The Dualiti Way</Label>
          <div className="text-2xl text-mono-100 flex-col gap-1">
            <div className="font-bold">Understand the problem</div>
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
              Think of it like an MVP’s cool, younger sibling. Fast, lean, and
              testable.
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
    </div>
  );
}

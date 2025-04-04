import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="max-w-[1200px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center p-4 gap-2">
      <div className="relative mb-8 lg:mb-0">
        <div className="mb-6">
          <h1 className="text-8xl font-extrabold">
            Bridging ideas
          </h1>
          <h1 className="text-8xl font-normal text-[#A224DD]">
            – connect.
          </h1>
        </div>
        <div className="max-w-[650px] flex flex-col items-center gap-y-8">
          Welcome to our world of endless imagination and boundless creativity.
          <br />
          Together, let&apos;s embark on a remarkable journey where dreams become tangible realities.
        </div>

        <Link href="/" className="flex items-center gap-x-2 pt-6">
          <div className="flex flex-row items-center gap-x-6 hover:gap-x-10 pl-8 pr-2 py-2 rounded-full bg-mono-800 hover:bg-mono-900 transition-all duration-300 hover:scale-110">
            <div className="text-mono-100 text-lg">Let&apos;s connect</div>
            <div className="flex items-center justify-center bg-[#A224DD] hover:bg-[#712494] rounded-full p-2 transition-all duration-300">
              <ArrowRight size={44} color="#fff"/>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
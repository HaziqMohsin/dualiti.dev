import Image from "next/image"
// import { Menu } from "lucide-react"

export const Header = () => {
    return (
      <header className="absolute top-0 px-8 lg:px-20 py-8 flex items-center justify-between z-10">
        <div className="flex items-center gap-x-3">
          <Image
            src="/logo/logo_standalone_light.svg"
            alt="Dualiti"
            width={120}
            height={120}
            className="w-16 sm:w-16 md:w-20 lg:w-[120px] h-auto"
          />
        </div>
        {/* <div className="flex items-center gap-x-3">
          <Menu className="w-12 h-12 text-secondary-800 hover:text-secondary-400 transition-all"/>
        </div> */}
      </header>
    )
}
import { Header } from "@/app/(main)/header";
import Image from "next/image";
// import { Footer } from "@/app/(main)/footer";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="w-screen min-h-screen flex flex-col bg-primary-400 lg:overflow-y-hidden relative">
      <Header />
      <main className="flex lg:items-center justify-center h-dvh">
        {children}
      </main>
      {/* <Footer /> */}
      <div className="absolute bottom-1 w-full ">
        <div className="w-full flex flex-col lg:flex-row gap-1 items-center justify-center text-center text-base text-mono-800">
          <Image
            src="/images/asterisk.png"
            alt="Dualiti"
            width={12}
            height={12}
          />
          <span className="text-sm">
            We are a digital tech agency that turns good ideas into great
            products — fast, fun, and functional.
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

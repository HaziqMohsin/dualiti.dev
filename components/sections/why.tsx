import CardGrid from "@/components/CardGrid";

export default function Why() {
  return (
    <div className="relative w-full mx-auto flex flex-col items-center justify-center bg-secondary-800 py-24 lg:py-52 h-fit lg:screen">
      <div className="w-full flex flex-col gap-2 text-center">
        <div className="w-full lg:w-1/2 mx-auto text-5xl lg:text-9xl text-primary-100 font-black uppercase">
          we kinda <span className="text-primary-400">awesome 😎</span>
        </div>
        <div className="text-base lg:text-2xl text-primary-100 font-bold w-full lg:w-1/2 mx-auto">
          <div>We’re not just coders or designers.</div>
          <div className="text-base lg:text-2xl text-primary-100 font-normal">
            We’re solution architects with vibes. We care about your users,
            obsess over clean UX, and geek out over elegant builds.
          </div>
        </div>
      </div>
      <CardGrid />
    </div>
  );
}

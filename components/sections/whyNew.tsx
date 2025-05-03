import CardGrid from "@/components/CardGrid";

const WhyNew = () => {
  return (
    <div className="bg-secondary-800 min-h-screen flex flex-col items-center pt-24">
      <div className="w-full lg:w-1/2 mx-auto text-5xl lg:text-9xl text-primary-100 font-black uppercase text-center">
        we kinda <span className="text-primary-400">awesome 😎</span>
      </div>
      <div className="text-base lg:text-2xl text-primary-100 font-bold w-full lg:w-1/2 mx-auto text-center">
        <div>We’re not just coders or designers.</div>
        <div className="text-base lg:text-2xl text-primary-100 font-normal">
          We’re solution architects with vibes. We care about your users, obsess
          over clean UX, and geek out over elegant builds.
        </div>
      </div>
      <CardGrid />
    </div>
  );
};

export default WhyNew;

import CardWork from "@/components/CardWork";

export default function Work() {
  return (
    <div className="relative w-full lg:h-screen mx-auto flex flex-col items-center justify-center bg-primary-400 py-24 lg:py-52 px-4 lg:px-20">
      <div className="w-full flex flex-col gap-12 text-right">
        <div className="w-full flex flex-col gap-4 items-end justify-end text-right">
          <div className="text-5xl lg:text-9xl text-secondary-900 font-black uppercase">
            🧩 PEEP our <span className="text-secondary-400">work</span>
          </div>
          <div className="lg:w-1/2 text-base lg:text-2xl text-secondary-900 font-bold w-full">
            <div>Stuff we’ve brought to life.</div>
            <div className="text-base lg:text-2xl text-secondary-900 font-normal">
              From small passion projects to robust platforms, here’s a sneak
              peek at what we’ve been up to:
            </div>
          </div>
        </div>
        <CardWork />
      </div>
    </div>
  );
}

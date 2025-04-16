export default function UnderMaintenance() {
  return (
    <div className="relative w-full mx-auto flex flex-col items-center justify-center bg-secondary-800 py-24 lg:py-52 h-screen">
      <div className="w-full flex flex-col gap-2 text-center">
        <div className="w-full lg:w-1/2 mx-auto text-5xl lg:text-9xl text-primary-100 font-black uppercase">
          O&apos;o<span className="text-primary-400">oh 🕳️</span>
        </div>
        <div className="text-base lg:text-2xl text-primary-100 font-bold w-full lg:w-1/2 mx-auto">
          <div>This page isn&apos;t ready yet </div>
          <div className="text-base lg:text-2xl text-primary-100 font-normal">
          We’re still putting the finishing touches on this one. <br /> Designing, coding, probably overthinking (just a bit).
          </div>
        </div>
      </div>
    </div>
  );
}

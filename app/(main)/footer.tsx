
export const Footer = () => {
  return (
    <div className="relative w-full mx-auto flex flex-col items-center justify-center bg-secondary-900 h-screen">
      <div className="flex flex-col gap-2 h-max text-center">
        <div className="text-2xl text-primary-100 font-normal">
          Slide <span className="font-bold">hello 👋</span> into our inbox
        </div>
        <div className="text-9xl text-primary-100 uppercase font-black">
        <a href="mailto:we@dualiti.dev">We@<span className="text-primary-400">dualiti.dev</span> </a>
        </div>
        <div className="text-2xl text-primary-100 font-bold">
          Got a big idea, a gnarly problem, or just curious what we could do
          together?
        </div>
        <div className="text-2xl text-primary-100 ">
          Whether it’s just a thought in your Notes app or a detailed brief —
          we’re down to <br /> explore and help you bring it to life. POC or
          full build, let’s figure it out together.
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-screen">
        <div className="w-full items-center justify-center text-center text-sm font-light text-mono-100">
          Built with brain 🧠 and heart ❤️ by the folks at Dualiti.
        </div>
      </div>
      <div className="relative"></div>
    </div>
  );
};

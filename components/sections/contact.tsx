export default function Contact() {
  return (
    <div className="relative w-full mx-auto flex flex-col items-center justify-center bg-secondary-900 h-screen p-4">
      <div className="w-full flex flex-col gap-2 h-max text-center">
        <div className="text-lg lg:text-2xl text-primary-100 font-normal">
          Slide <span className="font-bold">hello 👋</span> into our inbox
        </div>
        <div className="text-5xl lg:text-9xl text-primary-100 font-black">
        <a href="mailto:we@dualiti.dev">we@<span className="text-primary-400">dualiti.dev</span> </a>
        </div>
        <div className="text-base lg:text-2xl text-primary-100 font-bold">
          Got a big idea, a gnarly problem, or just curious what we could do
          together?
        </div>
        <div className="text-base lg:text-2xl text-primary-100 ">
          Whether it’s just a thought in your Notes app or a detailed brief —
          we’re down to explore and help you bring it to life. POC or
          full build, let’s figure it out together.
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-screen bg-primary-400 p-4">
        <div className="w-full items-center justify-center text-center text-sm font-light text-mono-800">
          Built with brain 🧠 and heart ❤️ by the folks at Dualiti.
        </div>
      </div>
    </div>
  );
};

import CardWork from "@/components/CardWork";

const WorkNew = () => {
  return (
    <div className="bg-primary-400 min-h-screen p-24">
      <div className="h-16"></div>
      <div className="text-5xl lg:text-9xl text-secondary-900 font-black uppercase text-right">
        🧩 PEEP our <span className="text-secondary-400">work</span>
      </div>
      <div className="text-base lg:text-2xl text-secondary-900 font-bold w-full text-right">
        <div>Stuff we’ve brought to life.</div>
        <div className="text-base lg:text-2xl text-secondary-900 font-normal">
          From small passion projects to robust platforms, <br />
          here’s a sneak peek at what we’ve been up to:
        </div>
      </div>
      <CardWork />
    </div>
  );
};

export default WorkNew;

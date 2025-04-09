import { Button } from "../ui/button";
import { ArrowDown } from "lucide-react";
import How from "./how";

export default function What() {
  return (
    <div className="relative p-4 w-full mx-auto flex flex-col items-center justify-center bg-secondary-900 gap-8">
      <div className="flex flex-col gap-2 h-screen items-center justify-center text-center">
        <div className="text-3xl lg:text-5xl text-primary-100 font-normal">
          We help you go from
          <br />
          <span className="text-primary-400 italic">
            “this might be a cool idea...”
          </span>
          <br />
          to a fully working product.
        </div>
        <div className="text-lg lg:text-2xl text-primary-100">
          starting with a proof of concept, always driven by real user needs.
        </div>
        <div className="flex item-center justify-center">
          <Button variant="primary" size="lg">
            Peep our work <ArrowDown />
          </Button>
        </div>
      </div>

      <How />
    </div>
  );
}

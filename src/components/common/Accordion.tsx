import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type props = {
  name: string;
  day: string;
  timings: string[];
  lang?: string;
  img?: string;
};

export const Accordion = ({ program }: { program: props }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      onClick={() => setShow(!show)}
      className="p-2 border-b border-black w-full grid py-2"
    >
      {/* accordion */}
      <div className="py-2 duration-200 transition-colors md:hover:text-blue-500 ">
        <div className="flex justify-between w-full space-y-1">
          <div>
            <p className={`text-xl font-semibold`}>{program.name}</p>

            <p className="text-sm italic">
              {program.day} at {program.timings.join(", ")}
            </p>
          </div>
          <button>
            <ChevronDownIcon
              className={`ml-auto mr-2 w-6 duration-300 transition-transform ${
                show && "rotate-180"
              }`}
            />
          </button>
        </div>
      </div>
      {/* accordion content */}
      <div
        className={`transition-all duration-300 ease-in-out max-h-0 overflow-y-hidden ${
          show && "max-h-60"
        }`}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
        perferendis.
      </div>
    </div>
  );
};

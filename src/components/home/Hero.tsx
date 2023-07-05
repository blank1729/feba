import {
  RadioIcon,
  SignalIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { audioAtom, isPlayingAtom, playerAtom } from "../../app/store";
import { useAtom, useAtomValue, useSetAtom } from "jotai";

const Hero = () => {
  const setShowPlayer = useSetAtom(playerAtom);
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);
  const audio = useAtomValue(audioAtom);
  return (
    <section className="section h-[calc(90vh-3rem)]">
      <div className="grid items-center w-full">
        <div className="space-y-4 lg:space-y-6 mb-4">
          <h1 className="group text-4xl  sm:text-6xl lg:text-8xl font-bold flex items-center">
            <span>FEBA</span>{" "}
            <RadioIcon className="duration-200 transition-colors md:group-hover:text-red-500 w-12 lg:w-24 pl-2" />
          </h1>
          <h2 className="grid text-2xl sm:text-3xl lg:text-4xl space-y-2">
            <span>Spreading Love and Gospel</span>
            <span>through the power of</span>
            <span className="font-semibold">Radio</span>
          </h2>
        </div>

        {/* Listen live button */}
        <div className="flex gap-2">
          <button
            onClick={() => {
              setShowPlayer(true);
              setIsPlaying(true);
              if (!isPlaying) {
                audio.play();
              }
            }}
            className="flex space-x-2 border-2 group border-black px-4 py-2 rounded-md text-lg md:hover:scale-105 duration-200 transition-transform"
          >
            <p>Listen Live</p>
            <SignalIcon className="w-6 duration-200 transition-colors group-hover:text-red-400" />
          </button>
          <Link
            to={"/podcast"}
            className="border-2 border-black inline-block px-4 py-2 rounded-md text-lg md:hover:scale-105 duration-200 transition-transform"
          >
            <span className="group flex space-x-2 items-center">
              <p>Podcast</p>
              <MicrophoneIcon className="w-6 duration-200 transition-colors group-hover:text-red-400" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import {
  BackwardIcon,
  ForwardIcon,
  PauseIcon,
  PlayIcon,
  XMarkIcon,
  MicrophoneIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";
import { useEffect } from "react";
import Played from "../temp/Played";
import { useAtom } from "jotai";
import { isPlayingAtom, playerAtom } from "../../app/store";

type props = {
  // showPlayer: boolean;
  // setShowPlayer: React.Dispatch<React.SetStateAction<boolean>>;
  audio: HTMLAudioElement;
};

const Player = ({ audio }: props) => {
  const [showPlayer, setShowPlayer] = useAtom(playerAtom);
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);

  audio.onpause = () => setIsPlaying(false);
  audio.onplay = () => setIsPlaying(true);

  useEffect(() => {
    if (audio.paused) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  }, [audio]);

  const handleToggle = () => {
    console.log(audio);
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleFastForward = () => {
    audio.currentTime += 10;
  };
  const handleReplay = () => {
    audio.currentTime -= 10;
  };

  return (
    <div>
      {/* Player interface start */}
      {showPlayer && (
        <div
          id="player"
          className={`fixed z-40 bg-white duration-1000 transition-all ease-in-out rounded-lg border-2 border-black
          w-[calc(100vw-1rem)] h-[calc(92vh-2rem)] sm:w-[calc(100vw-3rem)] sm:h-[calc(100vh-3rem)] md:w-[350px] md:h-[500px] 
          bottom-2 right-2 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8
          max-h-0 max-w-0 overflow-hidden ${
            showPlayer && "max-w-[100vw] max-h-[100vh]"
          }`}
        >
          {/* episode list */}
          <div
            className="absolute top-0 right-0 w-full pt-2 px-4 pb-24 h-full grid gap-y-2 overflow-y-scroll rounded-lg mx-1"
            id="episodelist"
          >
            {/* todo: reaplce with an actual list from api */}
            <Played />
          </div>
          {/* episode list end */}

          {/* audio controls start */}
          <div
            id="controls"
            className="absolute rounded-b-lg bg-white bottom-0 border-t border-black w-full h-20 flex items-center gap-x-4 pr-16 justify-center"
          >
            <button onClick={handleReplay} className="w-8">
              <BackwardIcon />
            </button>
            <button onClick={handleToggle} className="w-12">
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
            <button onClick={handleFastForward} className="w-8">
              <ForwardIcon />
            </button>
            <button className="w-8">
              <MicrophoneIcon />
            </button>
          </div>
          {/* audio controls  end */}
        </div>
      )}
      {/* Player interface end */}

      {/* PlayerToggle start */}
      <button
        onClick={() => setShowPlayer(!showPlayer)}
        className="fixed z-50 p-1 bg-gray-100 transition-all duration-200 border rounded-full border-black
        bottom-6 right-6 sm:bottom-8 sm:right-8 md:bottom-12 md:right-12"
      >
        {showPlayer ? (
          <XMarkIcon className="w-10" />
        ) : (
          <SignalIcon className="w-10" />
        )}
      </button>
      {/* PlayerToggle start */}
    </div>
  );
};

export default Player;

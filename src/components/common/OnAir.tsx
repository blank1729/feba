import { SignalIcon } from "@heroicons/react/24/outline";
import { useAtomValue } from "jotai";
import { Link } from "react-router-dom";
import { onAirAtom } from "../../app/store";

const OnAir = () => {
  const onair = useAtomValue(onAirAtom);
  return (
    <Link
      to={"/"}
      className={`flex gap-x-1 text-sm items-center border px-1 shadow-lg outline-none border-none backdrop-blur-md rounded-md ${
        onair
          ? "bg-green-400 animate-bounce shadow-green-400 "
          : "bg-red-400 shadow-red-400"
      }`}
    >
      {onair ? "On Air" : "Live"}
      <SignalIcon className="w-4 h-4" />
    </Link>
  );
};

export default OnAir;

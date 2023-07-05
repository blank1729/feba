import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Outlet } from "react-router-dom";
import Player from "./components/common/Player";
import { useEffect } from "react";
import { useAtomValue } from "jotai";
import { audioAtom } from "./app/store";

const App = () => {
  //   const [isLive, setIsLive] = useState(false);
  // const [showPlayer, setShowPlayer] = useState(false);
  useEffect(() => {
    console.log("App.tsx Rerendered");
  });
  const audio = useAtomValue(audioAtom);

  return (
    <>
      <Header />
      <Outlet />
      <Player
        audio={audio}
        // showPlayer={showPlayer}
        // setShowPlayer={setShowPlayer}
      />
      <Footer />
    </>
  );
};

export default App;

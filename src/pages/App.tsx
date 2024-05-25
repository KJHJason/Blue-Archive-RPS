import { useState } from "react";
import Button from "../components/Button";
import paper from "../public/paper.mp4";
import initial from "../public/initial.jpg";
import { ROCK, PAPER, SCISSORS } from "../scripts/constants";
import { GetRandomAction, GetResult } from "../scripts/game";
import Footer from "../components/Footer";
import Scores from "../components/Scores";

const App = () => {
  const videoEl = document.querySelector("video");
  // console.log(videoEl);

  const [playerAction, setPlayerAction] = useState("");
  const [computerAction, setComputerAction] = useState("");
  const onUserClick = (action: string) => {
    setPlayerAction(action);
    setComputerAction(GetRandomAction());

    console.log(
      playerAction,
      computerAction,
      GetResult(playerAction, computerAction)
    );
  };

  return (
    <>
      <h1 className="text-center">Arona</h1>
      <main className="sm:p-5 p-1 w-full items-center justify-center text-center">
        <div className="mx-auto aspect-video md:w-[70%] w-full">
          {/* <video className="rounded-lg" muted>
            <source src={paper} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <img className="rounded-lg" src={initial} alt="initial image" />
        </div>
        <Button role={ROCK} onClick={onUserClick} />
        <Button role={PAPER} onClick={onUserClick} />
        <Button role={SCISSORS} onClick={onUserClick} />
        <Scores />
      </main>
      <Footer />
    </>
  );
};

export default App;

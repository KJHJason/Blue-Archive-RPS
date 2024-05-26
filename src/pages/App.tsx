import { useState } from "react";
import { ROCK, PAPER, SCISSORS, WIN_KEY, LOSS_KEY, TIE_KEY } from "../scripts/constants";
import { GetRandomAction } from "../scripts/game";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Scores from "../components/Scores";
import AronaVideo from "../components/AronaContent";
import SelctedButton from "../components/SelectedButton";

const App = () => {
  const [playerAction, setPlayerAction] = useState("");
  const [computerAction, setComputerAction] = useState("");

  const savedWins = Number(localStorage.getItem(WIN_KEY)) || 0;
  const savedLosses = Number(localStorage.getItem(LOSS_KEY)) || 0;
  const savedTies = Number(localStorage.getItem(TIE_KEY)) || 0;
  const [wins, setWins] = useState(savedWins);
  const [losses, setLosses] = useState(savedLosses);
  const [ties, setTies] = useState(savedTies);
  const incrementWins = () => {
    localStorage.setItem(WIN_KEY, (wins + 1).toString());
    setWins(x => x + 1);
  }
  const incrementLosses = () => {
    localStorage.setItem(LOSS_KEY, (losses + 1).toString());
    setLosses(x => x + 1);
  }
  const incrementTies = () => {
    localStorage.setItem(TIE_KEY, (ties + 1).toString());
    setTies(x => x + 1);
  }

  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const onUserClick = (action: string) => {
    if (isButtonDisabled) return;

    setPlayerAction(action);
    setComputerAction(GetRandomAction());

    // Disable the button for 1 second
    // after click to prevent spamming.
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 1000);
  };

  const onReset = () => {
    setWins(0);
    setLosses(0);
    setTies(0);
    localStorage.removeItem(WIN_KEY);
    localStorage.removeItem(LOSS_KEY);
    localStorage.removeItem(TIE_KEY);
  };

  return (
    <>
      <h1 className="text-center">Arona RPS</h1>
      <main className="sm:p-5 p-1 w-full text-center">
        <div className="mx-auto aspect-video md:w-[70%] w-full">
          <AronaVideo
            senseiAction={playerAction}
            aronaAction={computerAction}
            incrementWins={incrementWins}
            incrementLosses={incrementLosses}
            incrementTies={incrementTies}
            isPlayingVideo={isPlayingVideo}
            setIsPlayingVideo={setIsPlayingVideo}
          />
        </div>
        {isPlayingVideo && <SelctedButton action={playerAction} />}
        {!isPlayingVideo && (
          <>
            <Button
              action={ROCK}
              onClick={onUserClick}
              disabled={isPlayingVideo}
            />
            <Button
              action={PAPER}
              onClick={onUserClick}
              disabled={isPlayingVideo}
            />
            <Button
              action={SCISSORS}
              onClick={onUserClick}
              disabled={isPlayingVideo}
            />
          </>
        )}
        <Scores wins={wins} losses={losses} ties={ties} onReset={onReset} />
      </main>
      <Footer />
    </>
  );
};

export default App;

import { useEffect, useRef } from "react";
import { ROCK, PAPER, SCISSORS } from "../scripts/constants";
import { GetResult, LOSE, WIN } from "../scripts/game";
import paper from "../public/paper.mp4";
import rock from "../public/rock.mp4";
import scissors from "../public/scissors.mp4";
import initial from "../public/initial.jpg";

interface Props {
  senseiAction: string;
  aronaAction: string;
  incrementWins: () => void;
  incrementLosses: () => void;
  incrementTies: () => void;

  isPlayingVideo: boolean;
  setIsPlayingVideo: (isPlaying: boolean) => void;
}

const getVideoFromAction = (action: string) => {
  switch (action) {
    case SCISSORS:
      return scissors;
    case ROCK:
      return rock;
    case PAPER:
      return paper;
    default: // user has not started the game yet
      return "";
  }
};

const AronaVideo = ({
  senseiAction,
  aronaAction,
  incrementWins,
  incrementLosses,
  incrementTies,
  isPlayingVideo,
  setIsPlayingVideo,
}: Props) => {
  // useRef is similar to svelte's bind:this={variable}
  // in this case, bind:this={videoRef} in svelte
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (aronaAction === "") return;

    const videoElement = videoRef.current;
    if (!videoElement) {
      console.error("video element is not found");
      return;
    }

    if (isPlayingVideo) return;

    videoElement.onended = () => {
      setTimeout(() => {
        setIsPlayingVideo(false);

        const result = GetResult(senseiAction, aronaAction);
        if (result === WIN) {
          incrementWins();
        } else if (result === LOSE) {
          incrementLosses();
        } else {
          incrementTies();
        }
      }, 1000);
    };

    videoElement.load();
    setIsPlayingVideo(true)
    videoElement.play();
  }, [aronaAction]);

  if (aronaAction === "")
    return (
      <img
        className="rounded-lg"
        src={initial}
        alt="initial image"
        id="initial-img"
      />
    );

  return (
    <video className="rounded-lg" autoPlay ref={videoRef}>
      <source src={getVideoFromAction(aronaAction)} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default AronaVideo;

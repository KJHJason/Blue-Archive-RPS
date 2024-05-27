import { ROCK, PAPER, SCISSORS } from "./constants";
import paper from "../assets/paper.png";
import rock from "../assets/rock.png";
import scissors from "../assets/scissors.png";

export const actionToImg = (action: string): string => {
  switch (action) {
    case ROCK:
      return rock;
    case PAPER:
      return paper;
    case SCISSORS:
      return scissors;
    default:
      throw new Error("Invalid role");
  }
};

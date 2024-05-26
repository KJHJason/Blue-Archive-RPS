import { ROCK, PAPER, SCISSORS } from "./constants";
import paper from "../public/paper.png";
import rock from "../public/rock.png";
import scissors from "../public/scissors.png";

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

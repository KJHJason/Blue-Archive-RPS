import { ACTIONS, ROCK, PAPER, SCISSORS } from './constants';

// https://stackoverflow.com/a/42321673/16377492
const getRandomIntFromRange = (min: number, max: number): number => {
    const randomBuffer = new Uint32Array(1);

    window.crypto.getRandomValues(randomBuffer);

    const randomNumber = randomBuffer[0] / (0xffffffff + 1);

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(randomNumber * (max - min + 1)) + min;
};

export const GetRandomAction = (): string => {
    return ACTIONS[getRandomIntFromRange(0, 2)];
};

export const DRAW = "Draw";
export const WIN = "You win";
export const LOSE = "Arona wins";
export const GetResult = (playerAction: string, computerAction: string): string => {
    if (playerAction === computerAction) {
        return DRAW;
    }

    if (
        (playerAction === ROCK && computerAction === SCISSORS) ||
        (playerAction === PAPER && computerAction === ROCK) ||
        (playerAction === SCISSORS && computerAction === PAPER)
    ) {
        return WIN;
    }

    return LOSE;
};

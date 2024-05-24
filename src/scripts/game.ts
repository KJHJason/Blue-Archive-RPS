import { ACTIONS } from './constants';

// https://stackoverflow.com/a/42321673/16377492
const getRandomIntFromRange = (min: number, max: number): number => {
    const randomBuffer = new Uint32Array(1);

    window.crypto.getRandomValues(randomBuffer);

    const randomNumber = randomBuffer[0] / (0xffffffff + 1);

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(randomNumber * (max - min + 1)) + min;
}

export const GetRandomAction = (): string => {
    return ACTIONS[getRandomIntFromRange(0, 2)];
}

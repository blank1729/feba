import { atom } from "jotai";

// const audio = new Audio("/audio/life-is-fun.mp3");
const audio = new Audio("https://www.radioking.com/play/feba-online");
audio.preload = "metadata";

export const playerAtom = atom(false);
export const isPlayingAtom = atom(false);
export const audioAtom = atom(audio);

export const onAirAtom = atom(true);

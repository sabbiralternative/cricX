import sound from "../assets/sound";

export const playBetClick = () => {
  return new Audio(sound.bet_click).play();
};
export const playJetGoAway = () => {
  return new Audio(sound.jet_go_away).play();
};
export const playJetStart = () => {
  return new Audio(sound.jet_start).play();
};
export const playWinSound = () => {
  return new Audio(sound.win).play();
};

const audio = new Audio(sound.sfx_main);

export const playSfxMain = (play) => {
  if (play) {
    audio.currentTime = 0; // Optional: restart from beginning
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0; // Reset to start
  }
};

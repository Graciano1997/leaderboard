import * as Variable from './globalvar.js';
import itachSong from '../music/itachi.mp3';
import madaraSong from '../music/madara.mp3';

const songs = [itachSong, madaraSong];
const randomMusic = (musicArray) => {
  const music = Math.floor(Math.random() * musicArray.length);
  return musicArray[music];
};

const audio = new Audio(randomMusic(songs));
audio.id = 'musicTheme';
document.body.append(audio);

const themeFunction = () => {
  const theme = ['url(../src/pictures/obito.jpg)', 'url(../src/pictures/madara.jpg)'];
  if (localStorage.getItem('NarutoTheme') === theme[0]) {
    localStorage.setItem('NarutoTheme', theme[1]);
  } else {
    localStorage.setItem('NarutoTheme', theme[0]);
  }
};

const defaultBackground = () => {
  const theme = ['url(../src/pictures/obito.jpg)', 'url(../src/pictures/madara.jpg)'];
  if (localStorage.getItem('NarutoTheme') === null) {
    localStorage.setItem('NarutoTheme', theme[0]);
  }
};

const initializeBackground = () => {
  defaultBackground();
  const theme = localStorage.getItem('NarutoTheme');
  Variable.bodyContainer.style.backgroundImage = theme;
  Variable.bodyContainer.style.backgroundSize = '100%';
  document.querySelector('#musicTheme').currentTime = 0;
  document.querySelector('#musicTheme').src = randomMusic(songs);
  document.querySelector('#musicTheme').autoplay = true;
};

const themeFunctionListener = () => {
  Variable.btnTheme.addEventListener('click', () => {
    themeFunction(Variable.bodyContainer);
    initializeBackground();
  });

  Variable.desktopThema.addEventListener('click', () => {
    themeFunction();
    initializeBackground();
  });
};

export { initializeBackground, themeFunctionListener };

import * as Variable from './globalvar.js';
import icon from '../pictures/icon.ico';
import logo from '../pictures/logo.png';

const metaHeaders = () => {
  // const iconLink = document.createElement('link');
  // iconLink.href = icon;
  // iconLink.type = 'image/x-icon';
  // iconLink.rel = 'shortcut icon';

  // const metaTitle = document.createElement('meta');
  // metaTitle.property = 'og:title';
  // metaTitle.content = 'NARUTO LeadBoard Fighters';

  // const metaUrl = document.createElement('meta');
  // metaUrl.property = 'og:url';
  // metaUrl.content = 'https://graciano1997.github.io/leaderboard/dist/';

  // const metaImg = document.createElement('meta');
  // metaImg.property = 'og:image';
  // metaImg.content = '../pictures/NARUTOSAMA.jpg';
  document.head.append(iconLink);
};

const setLogo = () => {
  const myLogo = new Image();
  myLogo.src = logo;
  myLogo.classList.add('logo');
  Variable.logoContainer.append(myLogo);
};

export { setLogo, metaHeaders };

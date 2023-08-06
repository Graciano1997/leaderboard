import * as Variable from './globalvar.js';
import icon from '../pictures/icon.ico';
import logo from '../pictures/logo.png';

const metaHeaders = () => {
  const iconLink = document.createElement('link');
  iconLink.href = icon;
  iconLink.type = 'image/x-icon';
  iconLink.rel = 'shortcut icon';
  document.head.append(iconLink);
};

const setLogo = () => {
  const myLogo = new Image();
  myLogo.src = logo;
  myLogo.classList.add('logo');
  Variable.logoContainer.append(myLogo);
};

export { setLogo, metaHeaders };

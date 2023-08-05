import './index.css';
import './desktop.css';
import icon from './pictures/icon.ico';
import logo from './pictures/logo.png';
import { createNewGame } from './modules/apiControler.js';
import { initializeScoreOperationsListener, initializeScoreReader, refresAllListener } from './modules/scoreOperations.js';
import { initializeBackground, themeFunctionListener } from './modules/theme.js';

createNewGame('Naruto_Heroes_Fight');
initializeScoreReader();
initializeScoreOperationsListener();
refresAllListener();
themeFunctionListener();
initializeBackground();

const iconLink = document.createElement('link');
iconLink.href = icon;
iconLink.type = 'image/x-icon';
iconLink.rel = 'shortcut icon';
document.head.append(iconLink);

const myLogo = new Image();
myLogo.src = logo;
myLogo.classList.add('logo');
document.querySelector('.logoLink').append(myLogo);

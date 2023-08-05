import './index.css';
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
const myLogo = new Image();
myLogo.src = logo;
myLogo.classList.add('logo');
document.querySelector('.logoLink').append(myLogo);

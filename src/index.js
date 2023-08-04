import './index.css';
import logo from './pictures/logo.png';
import { createNewGame } from './modules/apiControler.js';
import { initializeScoreOperationsListener, initializeScoreReader, refresAllListener } from './modules/scoreOperations.js';

createNewGame('Naruto_Heroes_Fight');
initializeScoreReader();
initializeScoreOperationsListener();
refresAllListener();

const myLogo = new Image();
myLogo.src=logo;
myLogo.classList.add('logo');
document.querySelector('.logoLink').append(myLogo);

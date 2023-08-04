import './index.css';
import { createNewGame } from './modules/apiControler.js';
import { initializeScoreOperationsListener, initializeScoreReader, refresAllListener } from './modules/scoreOperations.js';

createNewGame('Naruto_Heroes_Fight');
initializeScoreReader();
initializeScoreOperationsListener();
refresAllListener();

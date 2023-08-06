import './index.css';
import './desktop.css';
import { createNewGame } from './modules/apiControler.js';
import { initializeScoreOperationsListener, initializeScoreReader, refresAllListener } from './modules/scoreOperations.js';
import { initializeBackground, themeFunctionListener } from './modules/theme.js';
import { metaHeaders, setLogo } from './modules/metaData.js';

metaHeaders();
setLogo();
createNewGame('Naruto_Heroes_Fight');
initializeScoreReader();
initializeScoreOperationsListener();
refresAllListener();
themeFunctionListener();
initializeBackground();

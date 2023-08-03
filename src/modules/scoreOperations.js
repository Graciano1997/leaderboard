import * as Variable from './globalvar.js';
import { listElementConstructor } from './listConstructor.js';

const addNewScore = (score) => {
  const scoreDB = JSON.parse(localStorage.getItem("scores")) === null ? [] : JSON.parse(localStorage.getItem("scores"));
  scoreDB.push(score);
  localStorage.setItem("scores", JSON.stringify(scoreDB));
}

const cleanAll = () => {
  while (Variable.listContainer.firstChild) {
    Variable.listContainer.firstChild.remove();
  }
}

const readScores = () => {
  cleanAll();
  const scoreDB =JSON.parse(localStorage.getItem("scores"));
  const scoreOrganized=scoreDB.sort((a,b)=>b.number - a.number); 
  try {
    scoreOrganized.forEach((score, index) => {
      if (index % 2 === 0) {
        Variable.listContainer.append(listElementConstructor(score, 'even'));
      }
      else {
        Variable.listContainer.append(listElementConstructor(score, null));
      }
    });
  } catch (error) {
  }

}

const initializeScoreOperationsListener = () => {
  Variable.formSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    const score = {
      name: Variable.inputName.value,
      number: Variable.inputScore.value
    }
    console.log(score);
    addNewScore(score);
    readScores();
  });
}

const initializeScoreReader = () => {
  window.addEventListener('DOMContentLoaded', readScores);
}

export { initializeScoreOperationsListener, initializeScoreReader };

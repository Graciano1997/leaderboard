import * as Variable from './globalvar.js';
import listElementConstructor from './listConstructor.js';

const cleanAll = () => {
  while (Variable.listContainer.firstChild) {
    Variable.listContainer.firstChild.remove();
  }
};

const readScores = async () => {
  cleanAll();
  const response = await fetch(Variable.NarutoHeroesFightUrl);
  const narutoHeroesFightScoreResponse = await response.json();
  const narutoHeroesFightScore = narutoHeroesFightScoreResponse.result;
  const scoreOrganized = narutoHeroesFightScore.sort((fA, fB) => (fB.score - fA.score));

  if (scoreOrganized !== null) {
    scoreOrganized.forEach((score, index) => {
      if (index % 2 === 0) {
        Variable.listContainer.append(listElementConstructor(score, 'even'));
      } else {
        Variable.listContainer.append(listElementConstructor(score, null));
      }
    });
  }
};

const addNewScore = async (score) => {
  await fetch(Variable.NarutoHeroesFightUrl, {
    method: 'POST',
    body: JSON.stringify(score),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
  await readScores();
};

const initializeScoreOperationsListener = () => {
  Variable.formSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    const scoreObject = {
      user: Variable.inputName.value,
      score: Variable.inputScore.value,
    };
    addNewScore(scoreObject);
    Variable.formSubmit.reset();
  });
};

const initializeScoreReader = async () => {
  window.addEventListener('DOMContentLoaded', readScores);
};

const refresAllListener = () => {
  Variable.btnRefres.addEventListener('click', readScores);
};

export {
  initializeScoreOperationsListener, readScores, initializeScoreReader, refresAllListener,
};

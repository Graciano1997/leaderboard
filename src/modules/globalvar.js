const NarutoHeroesFightUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/MJWU8HdCnxMClWZRRZzW/scores/';
const listContainer = document.querySelector('.list');
const inputName = document.querySelector('#name');
const inputScore = document.querySelector('#score');
const btnRefres = document.querySelector('#btnRefres');
const btnTheme = document.querySelector('#btnTheme');
const formSubmit = document.querySelector('.formItem');
const bodyContainer = document.querySelector('.container');
const desktopThema = document.querySelector('#newThema');

export {
  listContainer,
  formSubmit,
  inputName,
  inputScore,
  NarutoHeroesFightUrl,
  btnRefres,
  bodyContainer,
  btnTheme,
  desktopThema,
};
import * as Variable from './globalvar.js';

const themeFunction = (element) => {
    let theme = ['url(\"../src/pictures/obito.jpg\")', 'url(\"../src/pictures/madara.jpg\")'];
    if (element.style.backgroundImage === theme[0]) {
        localStorage.setItem("NarutoTheme",theme[1]);
    } else {
        localStorage.setItem("NarutoTheme",theme[0]);
    }
}

const defaultBackground = () => {
    let theme = ['url(\"../src/pictures/obito.jpg\")', 'url(\"../src/pictures/madara.jpg\")'];
    if(localStorage.getItem("NarutoTheme")===null){
        localStorage.setItem("NarutoTheme",theme[0]);
    }    
}

const initializeBackground = () => {
    defaultBackground();
    const theme = localStorage.getItem("NarutoTheme");
        Variable.bodyContainer.style.backgroundImage = theme;
        Variable.bodyContainer.style.backgroundSize = '100%';
}

const themeFunctionListener = () => {
    Variable.btnTheme.addEventListener('click', () => {
        themeFunction(Variable.bodyContainer);
        initializeBackground();
    });
}

export { initializeBackground, themeFunctionListener };
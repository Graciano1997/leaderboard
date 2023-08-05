"use strict";
(self["webpackChunkworkflows"] = self["webpackChunkworkflows"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/desktop.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/desktop.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./pictures/valeyofend.jpg */ "./src/pictures/valeyofend.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media (min-width: 768px) {
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-repeat: repeat;
    background-size: 100%;
    height: 100%;
  }

  nav {
    display: block;
    background: transparent;
    position: absolute;
    top: 0;
    width: 100%;
    height: 60px;
    opacity: 0.5;
  }

  nav ul {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    color: white;
    margin-right: 5%;
    padding: 2%;
  }

  nav ul li {
    list-style-type: none;
    cursor: pointer;
    font-size: 15px;
  }

  nav ul li a {
    text-decoration: none;
    color: white;
    opacity: 1;
    font-size: 15px;
  }

  .mainTitle {
    font-size: 60px;
    text-align: left;
  }

  .main {
    display: flex;
    justify-content: center;
  }

  .leaderBoardContainer {
    margin-top: 3%;
    display: grid;
    grid-template-rows: 25px 80fr;
    grid-template-columns: 1fr;
    column-gap: 4%;
    width: 80%;
  }

  .leadBoardHeader,
  .leaderBoardBody {
    column-gap: 8%;
    display: grid;
    grid-template: 1fr / 1fr 1fr;
  }

  .leadBoardHeader {
    padding-bottom: 4%;
  }

  #btnRefres {
    align-self: flex-start;
  }

  .leaderBoardBody {
    margin-top: 3%;
    justify-items: flex-start;
  }

  .displaySection {
    width: 100%;
    height: 100%;
  }

  .refreshButton {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .listScoreContainer {
    border: 2px solid black;
    width: 100%;
    height: 100%;
  }

  .list {
    display: flex;
    flex-direction: column;
    height: 90vh;
  }

  .list .item {
    list-style-type: none;
    margin-bottom: 1%;
    padding-left: 1%;
    padding-right: 1%;
  }

  .formSection {
    display: flex;
    flex-direction: column;
    gap: 4%;
  }

  .formItem {
    padding-top: 2%;
  }

  .formItem div {
    display: flex;
    flex-direction: column;
    padding-bottom: 8%;
  }

  .formItem div input {
    border: 2px solid white;
  }

  button {
    border: transparent;
    padding-left: 1.5%;
    padding-right: 1.5%;
  }

  button:hover {
    box-shadow: 2px 2px 0 0 rgb(249, 240, 240);
  }

  #btnTheme,
  #recenteScore {
    display: none;
  }

  .scoreHeader {
    display: inline;
    color: white;
    font-size: 25pt;
    font-family: var(--font-secondary);
    text-shadow: 4px 4px 4px black;
  }

  #submitFight {
    padding: 3%;
    font-family: var(--font-secondary);
  }

  #lastName {
    display: inline;
    font-size: 20pt;
  }
}
`, "",{"version":3,"sources":["webpack://./src/desktop.css"],"names":[],"mappings":"AAAA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mDAA0C;IAC1C,yBAAyB;IACzB,qBAAqB;IACrB,YAAY;EACd;;EAEA;IACE,cAAc;IACd,uBAAuB;IACvB,kBAAkB;IAClB,MAAM;IACN,WAAW;IACX,YAAY;IACZ,YAAY;EACd;;EAEA;IACE,aAAa;IACb,SAAS;IACT,yBAAyB;IACzB,YAAY;IACZ,gBAAgB;IAChB,WAAW;EACb;;EAEA;IACE,qBAAqB;IACrB,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,qBAAqB;IACrB,YAAY;IACZ,UAAU;IACV,eAAe;EACjB;;EAEA;IACE,eAAe;IACf,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,uBAAuB;EACzB;;EAEA;IACE,cAAc;IACd,aAAa;IACb,6BAA6B;IAC7B,0BAA0B;IAC1B,cAAc;IACd,UAAU;EACZ;;EAEA;;IAEE,cAAc;IACd,aAAa;IACb,4BAA4B;EAC9B;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,cAAc;IACd,yBAAyB;EAC3B;;EAEA;IACE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,8BAA8B;EAChC;;EAEA;IACE,uBAAuB;IACvB,WAAW;IACX,YAAY;EACd;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,YAAY;EACd;;EAEA;IACE,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,OAAO;EACT;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,kBAAkB;EACpB;;EAEA;IACE,uBAAuB;EACzB;;EAEA;IACE,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;EACrB;;EAEA;IACE,0CAA0C;EAC5C;;EAEA;;IAEE,aAAa;EACf;;EAEA;IACE,eAAe;IACf,YAAY;IACZ,eAAe;IACf,kCAAkC;IAClC,8BAA8B;EAChC;;EAEA;IACE,WAAW;IACX,kCAAkC;EACpC;;EAEA;IACE,eAAe;IACf,eAAe;EACjB;AACF","sourcesContent":["@media (min-width: 768px) {\r\n  .container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    background: url(./pictures/valeyofend.jpg);\r\n    background-repeat: repeat;\r\n    background-size: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  nav {\r\n    display: block;\r\n    background: transparent;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 60px;\r\n    opacity: 0.5;\r\n  }\r\n\r\n  nav ul {\r\n    display: flex;\r\n    gap: 10px;\r\n    justify-content: flex-end;\r\n    color: white;\r\n    margin-right: 5%;\r\n    padding: 2%;\r\n  }\r\n\r\n  nav ul li {\r\n    list-style-type: none;\r\n    cursor: pointer;\r\n    font-size: 15px;\r\n  }\r\n\r\n  nav ul li a {\r\n    text-decoration: none;\r\n    color: white;\r\n    opacity: 1;\r\n    font-size: 15px;\r\n  }\r\n\r\n  .mainTitle {\r\n    font-size: 60px;\r\n    text-align: left;\r\n  }\r\n\r\n  .main {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n\r\n  .leaderBoardContainer {\r\n    margin-top: 3%;\r\n    display: grid;\r\n    grid-template-rows: 25px 80fr;\r\n    grid-template-columns: 1fr;\r\n    column-gap: 4%;\r\n    width: 80%;\r\n  }\r\n\r\n  .leadBoardHeader,\r\n  .leaderBoardBody {\r\n    column-gap: 8%;\r\n    display: grid;\r\n    grid-template: 1fr / 1fr 1fr;\r\n  }\r\n\r\n  .leadBoardHeader {\r\n    padding-bottom: 4%;\r\n  }\r\n\r\n  #btnRefres {\r\n    align-self: flex-start;\r\n  }\r\n\r\n  .leaderBoardBody {\r\n    margin-top: 3%;\r\n    justify-items: flex-start;\r\n  }\r\n\r\n  .displaySection {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .refreshButton {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .listScoreContainer {\r\n    border: 2px solid black;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 90vh;\r\n  }\r\n\r\n  .list .item {\r\n    list-style-type: none;\r\n    margin-bottom: 1%;\r\n    padding-left: 1%;\r\n    padding-right: 1%;\r\n  }\r\n\r\n  .formSection {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 4%;\r\n  }\r\n\r\n  .formItem {\r\n    padding-top: 2%;\r\n  }\r\n\r\n  .formItem div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-bottom: 8%;\r\n  }\r\n\r\n  .formItem div input {\r\n    border: 2px solid white;\r\n  }\r\n\r\n  button {\r\n    border: transparent;\r\n    padding-left: 1.5%;\r\n    padding-right: 1.5%;\r\n  }\r\n\r\n  button:hover {\r\n    box-shadow: 2px 2px 0 0 rgb(249, 240, 240);\r\n  }\r\n\r\n  #btnTheme,\r\n  #recenteScore {\r\n    display: none;\r\n  }\r\n\r\n  .scoreHeader {\r\n    display: inline;\r\n    color: white;\r\n    font-size: 25pt;\r\n    font-family: var(--font-secondary);\r\n    text-shadow: 4px 4px 4px black;\r\n  }\r\n\r\n  #submitFight {\r\n    padding: 3%;\r\n    font-family: var(--font-secondary);\r\n  }\r\n\r\n  #lastName {\r\n    display: inline;\r\n    font-size: 20pt;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Righteous&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --font-primary: 'Lato', sans-serif;
  --font-secondary: 'Righteous', cursive;
  --orange: orange;
}

* {
  padding: 0;
  margin: 0;
  font-size: 12pt;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

header {
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav {
  display: none;
}

.logoContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -8%;
  padding-top: 8%;
}

.logoLink {
  text-align: center;
  padding-top: -4%;
}

.logo {
  text-align: center;
  width: 40%;
  height: 40%;
  opacity: 0.6;
  cursor: pointer;
  transition: all 4s;
}

.logo:hover {
  opacity: 1;
}

.mainTitle {
  margin-top: 5%;
  padding-left: 2%;
  font-size: 40px;
  font-weight: 400;
  color: var(--orange);
  width: 80%;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 0, 3, 0.852);
  opacity: 70%;
  font-family: var(--font-secondary);
  transition: all 2s;
}

.mainTitle:hover {
  opacity: 100%;
}

h2 {
  font-size: 20pt;
  font-weight: 700;
}

.main {
  display: flex;
  flex-direction: column-reverse;
  padding-left: 4%;
  padding-right: 4%;
}

.leaderBoardContainer {
  margin-top: 3%;
  padding-bottom: 10%;
}

.leaderBoardBody {
  display: flex;
  flex-direction: column-reverse;
}

.displaySection {
  width: 100%;
  height: 100%;
}

.refreshButton {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.listScoreContainer {
  border: 2px solid black;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background: rgba(248, 164, 8, 0.585);
  backdrop-filter: blur(5px);
}

.list {
  display: flex;
  flex-direction: column;
  margin: 4px;
  border-radius: 4px;
  padding-top: 2%;
  height: 80vh;
  overflow-y: scroll;
}

.list .item {
  list-style-type: none;
  margin-bottom: 1%;
  padding: 2%;
  font-weight: bolder;
  font-size: 14pt;
}

.even {
  background: rgba(227, 221, 221, 0.948);
  border-radius: 4px;
}

.formSection {
  display: flex;
  flex-direction: column;
  gap: 4%;
}

.formItem div {
  display: flex;
  flex-direction: column;
  padding-bottom: 8%;
}

.formItem div input {
  border: 2px solid  rgb(248, 164, 8);
  padding: 3%;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.527);
  color: white;
  font-size: 15pt;
}

button {
  padding: 3%;
  border-radius: 10px;
  background: rgb(248, 164, 8);
  color: black;
  border: transparent;
  transition: all 2s;
}

button:hover {
  box-shadow: 4px 4px 4px 4px black;
}

#btnRefres {
  align-self: flex-end;
}

.formItem .submitContainer {
  display: flex;
  align-items: end;
}

label {
  display: none;
}

#recenteScore {
  padding-bottom: 2%;
  color: white;
  font-size: 25pt;
  font-family: var(--font-secondary);
  text-shadow: 4px 4px 4px black;
}

.addScore {
  padding-bottom: 2%;
  color: white;
  font-size: 20pt;
  font-family: var(--font-secondary);
  text-shadow: 4px 4px 4px black;
}

.scoreHeader {
  display: none;
}

.description {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.3%;
}

#btnTheme {
  background: rgb(231, 74, 6);
  color: white;
  font-weight: bold;
  border: 1px solid black;
}

footer {
  color: white;
  font-size: 20pt;
  text-align: center;
  font-family: var(--font-secondary);
}

footer p {
  padding-bottom: 2%;
  font-size: 20pt;
  transition: all 3s;
}

footer p:hover {
  font-size: 35px;
  padding-bottom: 3%;
}

.heart {
  color: rgb(221, 20, 30);
  font-size: 30px;
  transition: all 3s;
}

.heart:hover {
  font-size: 40px;
  color: red;
}

#lastName {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAGA;EACE,kCAAkC;EAClC,sCAAsC;EACtC,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,oBAAoB;EACpB,UAAU;EACV,kBAAkB;EAClB,0CAA0C;EAC1C,YAAY;EACZ,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,oCAAoC;EACpC,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,WAAW;EACX,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,sCAAsC;EACtC,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,OAAO;AACT;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,mCAAmC;EACnC,WAAW;EACX,mBAAmB;EACnB,gCAAgC;EAChC,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,4BAA4B;EAC5B,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,kCAAkC;EAClC,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,kCAAkC;EAClC,8BAA8B;AAChC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,oBAAoB;AACtB;;AAEA;EACE,2BAA2B;EAC3B,YAAY;EACZ,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,aAAa;AACf","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');\r\n\r\n:root {\r\n  --font-primary: 'Lato', sans-serif;\r\n  --font-secondary: 'Righteous', cursive;\r\n  --orange: orange;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 12pt;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\nheader {\r\n  padding-top: 5%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nnav {\r\n  display: none;\r\n}\r\n\r\n.logoContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: -8%;\r\n  padding-top: 8%;\r\n}\r\n\r\n.logoLink {\r\n  text-align: center;\r\n  padding-top: -4%;\r\n}\r\n\r\n.logo {\r\n  text-align: center;\r\n  width: 40%;\r\n  height: 40%;\r\n  opacity: 0.6;\r\n  cursor: pointer;\r\n  transition: all 4s;\r\n}\r\n\r\n.logo:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.mainTitle {\r\n  margin-top: 5%;\r\n  padding-left: 2%;\r\n  font-size: 40px;\r\n  font-weight: 400;\r\n  color: var(--orange);\r\n  width: 80%;\r\n  text-align: center;\r\n  text-shadow: 0 0 10px rgba(0, 0, 3, 0.852);\r\n  opacity: 70%;\r\n  font-family: var(--font-secondary);\r\n  transition: all 2s;\r\n}\r\n\r\n.mainTitle:hover {\r\n  opacity: 100%;\r\n}\r\n\r\nh2 {\r\n  font-size: 20pt;\r\n  font-weight: 700;\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  flex-direction: column-reverse;\r\n  padding-left: 4%;\r\n  padding-right: 4%;\r\n}\r\n\r\n.leaderBoardContainer {\r\n  margin-top: 3%;\r\n  padding-bottom: 10%;\r\n}\r\n\r\n.leaderBoardBody {\r\n  display: flex;\r\n  flex-direction: column-reverse;\r\n}\r\n\r\n.displaySection {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.refreshButton {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n.listScoreContainer {\r\n  border: 2px solid black;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 15px;\r\n  background: rgba(248, 164, 8, 0.585);\r\n  backdrop-filter: blur(5px);\r\n}\r\n\r\n.list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 4px;\r\n  border-radius: 4px;\r\n  padding-top: 2%;\r\n  height: 80vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.list .item {\r\n  list-style-type: none;\r\n  margin-bottom: 1%;\r\n  padding: 2%;\r\n  font-weight: bolder;\r\n  font-size: 14pt;\r\n}\r\n\r\n.even {\r\n  background: rgba(227, 221, 221, 0.948);\r\n  border-radius: 4px;\r\n}\r\n\r\n.formSection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 4%;\r\n}\r\n\r\n.formItem div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-bottom: 8%;\r\n}\r\n\r\n.formItem div input {\r\n  border: 2px solid  rgb(248, 164, 8);\r\n  padding: 3%;\r\n  border-radius: 10px;\r\n  background: rgba(0, 0, 0, 0.527);\r\n  color: white;\r\n  font-size: 15pt;\r\n}\r\n\r\nbutton {\r\n  padding: 3%;\r\n  border-radius: 10px;\r\n  background: rgb(248, 164, 8);\r\n  color: black;\r\n  border: transparent;\r\n  transition: all 2s;\r\n}\r\n\r\nbutton:hover {\r\n  box-shadow: 4px 4px 4px 4px black;\r\n}\r\n\r\n#btnRefres {\r\n  align-self: flex-end;\r\n}\r\n\r\n.formItem .submitContainer {\r\n  display: flex;\r\n  align-items: end;\r\n}\r\n\r\nlabel {\r\n  display: none;\r\n}\r\n\r\n#recenteScore {\r\n  padding-bottom: 2%;\r\n  color: white;\r\n  font-size: 25pt;\r\n  font-family: var(--font-secondary);\r\n  text-shadow: 4px 4px 4px black;\r\n}\r\n\r\n.addScore {\r\n  padding-bottom: 2%;\r\n  color: white;\r\n  font-size: 20pt;\r\n  font-family: var(--font-secondary);\r\n  text-shadow: 4px 4px 4px black;\r\n}\r\n\r\n.scoreHeader {\r\n  display: none;\r\n}\r\n\r\n.description {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-bottom: 1.3%;\r\n}\r\n\r\n#btnTheme {\r\n  background: rgb(231, 74, 6);\r\n  color: white;\r\n  font-weight: bold;\r\n  border: 1px solid black;\r\n}\r\n\r\nfooter {\r\n  color: white;\r\n  font-size: 20pt;\r\n  text-align: center;\r\n  font-family: var(--font-secondary);\r\n}\r\n\r\nfooter p {\r\n  padding-bottom: 2%;\r\n  font-size: 20pt;\r\n  transition: all 3s;\r\n}\r\n\r\nfooter p:hover {\r\n  font-size: 35px;\r\n  padding-bottom: 3%;\r\n}\r\n\r\n.heart {\r\n  color: rgb(221, 20, 30);\r\n  font-size: 30px;\r\n  transition: all 3s;\r\n}\r\n\r\n.heart:hover {\r\n  font-size: 40px;\r\n  color: red;\r\n}\r\n\r\n#lastName {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/desktop.css":
/*!*************************!*\
  !*** ./src/desktop.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_desktop_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./desktop.css */ "./node_modules/css-loader/dist/cjs.js!./src/desktop.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_desktop_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_desktop_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_desktop_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_desktop_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _desktop_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desktop.css */ "./src/desktop.css");
/* harmony import */ var _pictures_icon_ico__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pictures/icon.ico */ "./src/pictures/icon.ico");
/* harmony import */ var _pictures_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pictures/logo.png */ "./src/pictures/logo.png");
/* harmony import */ var _modules_apiControler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/apiControler.js */ "./src/modules/apiControler.js");
/* harmony import */ var _modules_scoreOperations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/scoreOperations.js */ "./src/modules/scoreOperations.js");
/* harmony import */ var _modules_theme_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/theme.js */ "./src/modules/theme.js");








(0,_modules_apiControler_js__WEBPACK_IMPORTED_MODULE_4__.createNewGame)('Naruto_Heroes_Fight');
(0,_modules_scoreOperations_js__WEBPACK_IMPORTED_MODULE_5__.initializeScoreReader)();
(0,_modules_scoreOperations_js__WEBPACK_IMPORTED_MODULE_5__.initializeScoreOperationsListener)();
(0,_modules_scoreOperations_js__WEBPACK_IMPORTED_MODULE_5__.refresAllListener)();
(0,_modules_theme_js__WEBPACK_IMPORTED_MODULE_6__.themeFunctionListener)();
(0,_modules_theme_js__WEBPACK_IMPORTED_MODULE_6__.initializeBackground)();

const iconLink = document.createElement('link');
iconLink.href = _pictures_icon_ico__WEBPACK_IMPORTED_MODULE_2__;
iconLink.type = 'image/x-icon';
iconLink.rel = 'shortcut icon';
document.head.append(iconLink);

const myLogo = new Image();
myLogo.src = _pictures_logo_png__WEBPACK_IMPORTED_MODULE_3__;
myLogo.classList.add('logo');
document.querySelector('.logoLink').append(myLogo);


/***/ }),

/***/ "./src/modules/apiControler.js":
/*!*************************************!*\
  !*** ./src/modules/apiControler.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewGame: () => (/* binding */ createNewGame),
/* harmony export */   gameValidator: () => (/* binding */ gameValidator)
/* harmony export */ });
/* harmony import */ var _globalvar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalvar.js */ "./src/modules/globalvar.js");


const gameValidator = async () => {
  let gameAlreadyExist = false;
  await fetch(_globalvar_js__WEBPACK_IMPORTED_MODULE_0__.NarutoHeroesFightUrl)
    .then((res) => { if (res.ok) { gameAlreadyExist = true; } });
  return gameAlreadyExist;
};

const createNewGame = async (gameName) => {
  if (!gameValidator()) {
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      body: JSON.stringify({ name: gameName }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json());
  }
};




/***/ }),

/***/ "./src/modules/globalvar.js":
/*!**********************************!*\
  !*** ./src/modules/globalvar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NarutoHeroesFightUrl: () => (/* binding */ NarutoHeroesFightUrl),
/* harmony export */   bodyContainer: () => (/* binding */ bodyContainer),
/* harmony export */   btnRefres: () => (/* binding */ btnRefres),
/* harmony export */   btnTheme: () => (/* binding */ btnTheme),
/* harmony export */   desktopThema: () => (/* binding */ desktopThema),
/* harmony export */   formSubmit: () => (/* binding */ formSubmit),
/* harmony export */   inputName: () => (/* binding */ inputName),
/* harmony export */   inputScore: () => (/* binding */ inputScore),
/* harmony export */   listContainer: () => (/* binding */ listContainer)
/* harmony export */ });
const NarutoHeroesFightUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/MJWU8HdCnxMClWZRRZzW/scores/';
const listContainer = document.querySelector('.list');
const inputName = document.querySelector('#name');
const inputScore = document.querySelector('#score');
const btnRefres = document.querySelector('#btnRefres');
const btnTheme = document.querySelector('#btnTheme');
const formSubmit = document.querySelector('.formItem');
const bodyContainer = document.querySelector('.container');
const desktopThema = document.querySelector('#newThema');



/***/ }),

/***/ "./src/modules/scoreOperations.js":
/*!****************************************!*\
  !*** ./src/modules/scoreOperations.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeScoreOperationsListener: () => (/* binding */ initializeScoreOperationsListener),
/* harmony export */   initializeScoreReader: () => (/* binding */ initializeScoreReader),
/* harmony export */   readScores: () => (/* binding */ readScores),
/* harmony export */   refresAllListener: () => (/* binding */ refresAllListener)
/* harmony export */ });
/* harmony import */ var _globalvar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalvar.js */ "./src/modules/globalvar.js");


const listElementConstructor = (score, even = null) => {
  const li = document.createElement('li');
  li.classList.add('item');
  if (even !== null) { li.classList.add('even'); }
  li.textContent = `${score.user} : ${score.score} pts`;
  return li;
};

const cleanAll = () => {
  while (_globalvar_js__WEBPACK_IMPORTED_MODULE_0__.listContainer.firstChild) {
    _globalvar_js__WEBPACK_IMPORTED_MODULE_0__.listContainer.firstChild.remove();
  }
};

const readScores = async () => {
  cleanAll();
  const response = await fetch(_globalvar_js__WEBPACK_IMPORTED_MODULE_0__.NarutoHeroesFightUrl);
  const narutoHeroesFightScoreResponse = await response.json();
  const narutoHeroesFightScore = narutoHeroesFightScoreResponse.result;
  const scoreOrganized = narutoHeroesFightScore.sort((fA, fB) => (fB.score - fA.score));

  if (scoreOrganized !== null) {
    scoreOrganized.forEach((score, index) => {
      if (index % 2 === 0) {
        _globalvar_js__WEBPACK_IMPORTED_MODULE_0__.listContainer.append(listElementConstructor(score, 'even'));
      } else {
        _globalvar_js__WEBPACK_IMPORTED_MODULE_0__.listContainer.append(listElementConstructor(score, null));
      }
    });
  }
};

const addNewScore = async (score) => {
  await fetch(_globalvar_js__WEBPACK_IMPORTED_MODULE_0__.NarutoHeroesFightUrl, {
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
  _globalvar_js__WEBPACK_IMPORTED_MODULE_0__.formSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    const scoreObject = {
      user: _globalvar_js__WEBPACK_IMPORTED_MODULE_0__.inputName.value,
      score: _globalvar_js__WEBPACK_IMPORTED_MODULE_0__.inputScore.value,
    };
    addNewScore(scoreObject);
    _globalvar_js__WEBPACK_IMPORTED_MODULE_0__.formSubmit.reset();
  });
};

const initializeScoreReader = async () => {
  window.addEventListener('DOMContentLoaded', readScores);
};

const refresAllListener = () => {
  _globalvar_js__WEBPACK_IMPORTED_MODULE_0__.btnRefres.addEventListener('click', readScores);
};




/***/ }),

/***/ "./src/modules/theme.js":
/*!******************************!*\
  !*** ./src/modules/theme.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeBackground: () => (/* binding */ initializeBackground),
/* harmony export */   themeFunctionListener: () => (/* binding */ themeFunctionListener)
/* harmony export */ });
/* harmony import */ var _globalvar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalvar.js */ "./src/modules/globalvar.js");


const themeFunction = () => {
  const theme = ['url(../src/pictures/obito.jpg)', 'url(../src/pictures/madara.jpg)'];
  if (localStorage.getItem('NarutoTheme') === theme[0]) {
    localStorage.setItem('NarutoTheme', theme[1]);
  } else {
    localStorage.setItem('NarutoTheme', theme[0]);
  }
};

const defaultBackground = () => {
  const theme = ['url(../src/pictures/obito.jpg)', 'url(../src/pictures/madara.jpg)'];
  if (localStorage.getItem('NarutoTheme') === null) {
    localStorage.setItem('NarutoTheme', theme[0]);
  }
};

const initializeBackground = () => {
  defaultBackground();
  const theme = localStorage.getItem('NarutoTheme');
  _globalvar_js__WEBPACK_IMPORTED_MODULE_0__.bodyContainer.style.backgroundImage = theme;
  _globalvar_js__WEBPACK_IMPORTED_MODULE_0__.bodyContainer.style.backgroundSize = '100%';
};

const themeFunctionListener = () => {
  _globalvar_js__WEBPACK_IMPORTED_MODULE_0__.btnTheme.addEventListener('click', () => {
    themeFunction(_globalvar_js__WEBPACK_IMPORTED_MODULE_0__.bodyContainer);
    initializeBackground();
  });

  _globalvar_js__WEBPACK_IMPORTED_MODULE_0__.desktopThema.addEventListener('click', () => {
    themeFunction();
    initializeBackground();
  });
};



/***/ }),

/***/ "./src/pictures/icon.ico":
/*!*******************************!*\
  !*** ./src/pictures/icon.ico ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c2d1fed9a31847a0491.ico";

/***/ }),

/***/ "./src/pictures/logo.png":
/*!*******************************!*\
  !*** ./src/pictures/logo.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "adbbff09258a90f6b37b.png";

/***/ }),

/***/ "./src/pictures/valeyofend.jpg":
/*!*************************************!*\
  !*** ./src/pictures/valeyofend.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f06789ef275c7a1e3eb.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RkFBcUM7QUFDL0YsMkhBQTJIO0FBQzNILHVIQUF1SDtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVks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QXNCO0FBQzlCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLCtEQUE2QjtBQUMzQztBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekMsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHFEQUFtQjtBQUNyQjtBQUNBO0FBQ0EsWUFBWSxvREFBa0I7QUFDOUIsYUFBYSxxREFBbUI7QUFDaEM7QUFDQTtBQUNBLElBQUkscURBQW1CO0FBQ3ZCLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLG9EQUFrQjtBQUNwQjs7QUFJRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRXlDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0RBQXNCO0FBQ3hCLEVBQUUsd0RBQXNCO0FBQ3hCOztBQUVBO0FBQ0EsRUFBRSxtREFBaUI7QUFDbkIsa0JBQWtCLHdEQUFzQjtBQUN4QztBQUNBLEdBQUc7O0FBRUgsRUFBRSx1REFBcUI7QUFDdkI7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcmtmbG93cy8uL3NyYy9kZXNrdG9wLmNzcyIsIndlYnBhY2s6Ly93b3JrZmxvd3MvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3dvcmtmbG93cy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3dzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93b3JrZmxvd3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93b3JrZmxvd3MvLi9zcmMvZGVza3RvcC5jc3M/OTMwMCIsIndlYnBhY2s6Ly93b3JrZmxvd3MvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vd29ya2Zsb3dzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dvcmtmbG93cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3dzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dvcmtmbG93cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93b3JrZmxvd3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93b3JrZmxvd3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93b3JrZmxvd3MvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3dzLy4vc3JjL21vZHVsZXMvYXBpQ29udHJvbGVyLmpzIiwid2VicGFjazovL3dvcmtmbG93cy8uL3NyYy9tb2R1bGVzL2dsb2JhbHZhci5qcyIsIndlYnBhY2s6Ly93b3JrZmxvd3MvLi9zcmMvbW9kdWxlcy9zY29yZU9wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3dzLy4vc3JjL21vZHVsZXMvdGhlbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vcGljdHVyZXMvdmFsZXlvZmVuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBuYXYge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuXHJcbiAgbmF2IHVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gIH1cclxuXHJcbiAgbmF2IHVsIGxpIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcblxyXG4gIG5hdiB1bCBsaSBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAubWFpblRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAubWFpbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubGVhZGVyQm9hcmRDb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNXB4IDgwZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGNvbHVtbi1nYXA6IDQlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcblxyXG4gIC5sZWFkQm9hcmRIZWFkZXIsXHJcbiAgLmxlYWRlckJvYXJkQm9keSB7XHJcbiAgICBjb2x1bW4tZ2FwOiA4JTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnIgMWZyO1xyXG4gIH1cclxuXHJcbiAgLmxlYWRCb2FyZEhlYWRlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNCU7XHJcbiAgfVxyXG5cclxuICAjYnRuUmVmcmVzIHtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAubGVhZGVyQm9hcmRCb2R5IHtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAganVzdGlmeS1pdGVtczogZmxleC1zdGFydDtcclxuICB9XHJcblxyXG4gIC5kaXNwbGF5U2VjdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5yZWZyZXNoQnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLmxpc3RTY29yZUNvbnRhaW5lciB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgfVxyXG5cclxuICAubGlzdCAuaXRlbSB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICAgIHBhZGRpbmctbGVmdDogMSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxJTtcclxuICB9XHJcblxyXG4gIC5mb3JtU2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogNCU7XHJcbiAgfVxyXG5cclxuICAuZm9ybUl0ZW0ge1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG4gIH1cclxuXHJcbiAgLmZvcm1JdGVtIGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4JTtcclxuICB9XHJcblxyXG4gIC5mb3JtSXRlbSBkaXYgaW5wdXQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmctbGVmdDogMS41JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEuNSU7XHJcbiAgfVxyXG5cclxuICBidXR0b246aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAwIDAgcmdiKDI0OSwgMjQwLCAyNDApO1xyXG4gIH1cclxuXHJcbiAgI2J0blRoZW1lLFxyXG4gICNyZWNlbnRlU2NvcmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5zY29yZUhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDI1cHQ7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zZWNvbmRhcnkpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDRweCA0cHggNHB4IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgI3N1Ym1pdEZpZ2h0IHtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Vjb25kYXJ5KTtcclxuICB9XHJcblxyXG4gICNsYXN0TmFtZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBmb250LXNpemU6IDIwcHQ7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Rlc2t0b3AuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtREFBMEM7SUFDMUMseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsU0FBUztJQUNULHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osVUFBVTtJQUNWLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsVUFBVTtFQUNaOztFQUVBOztJQUVFLGNBQWM7SUFDZCxhQUFhO0lBQ2IsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsY0FBYztJQUNkLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLE9BQU87RUFDVDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsMENBQTBDO0VBQzVDOztFQUVBOztJQUVFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtJQUNmLGtDQUFrQztJQUNsQyw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7RUFDakI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vcGljdHVyZXMvdmFsZXlvZmVuZC5qcGcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG5hdiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG5hdiB1bCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xcclxcbiAgICBwYWRkaW5nOiAyJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG5hdiB1bCBsaSB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBuYXYgdWwgbGkgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpblRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sZWFkZXJCb2FyZENvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1cHggODBmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDQlO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxlYWRCb2FyZEhlYWRlcixcXHJcXG4gIC5sZWFkZXJCb2FyZEJvZHkge1xcclxcbiAgICBjb2x1bW4tZ2FwOiA4JTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyIDFmcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sZWFkQm9hcmRIZWFkZXIge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjYnRuUmVmcmVzIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sZWFkZXJCb2FyZEJvZHkge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzJTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kaXNwbGF5U2VjdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVmcmVzaEJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5saXN0U2NvcmVDb250YWluZXIge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpc3QgLml0ZW0ge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDElO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtU2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogNCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9ybUl0ZW0ge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMiU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9ybUl0ZW0gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDglO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm1JdGVtIGRpdiBpbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgfVxcclxcblxcclxcbiAgYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjUlO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAwIDAgcmdiKDI0OSwgMjQwLCAyNDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2J0blRoZW1lLFxcclxcbiAgI3JlY2VudGVTY29yZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2NvcmVIZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB0O1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zZWNvbmRhcnkpO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogNHB4IDRweCA0cHggYmxhY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjc3VibWl0RmlnaHQge1xcclxcbiAgICBwYWRkaW5nOiAzJTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Vjb25kYXJ5KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNsYXN0TmFtZSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB0O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOndnaHRANzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJpZ2h0ZW91cyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAtLWZvbnQtcHJpbWFyeTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gIC0tZm9udC1zZWNvbmRhcnk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xyXG4gIC0tb3JhbmdlOiBvcmFuZ2U7XHJcbn1cclxuXHJcbioge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTJwdDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxubmF2IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubG9nb0NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogLTglO1xyXG4gIHBhZGRpbmctdG9wOiA4JTtcclxufVxyXG5cclxuLmxvZ29MaW5rIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IC00JTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogNDAlO1xyXG4gIGhlaWdodDogNDAlO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDRzO1xyXG59XHJcblxyXG4ubG9nbzpob3ZlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLm1haW5UaXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcclxuICB3aWR0aDogODAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAzLCAwLjg1Mik7XHJcbiAgb3BhY2l0eTogNzAlO1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNlY29uZGFyeSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDJzO1xyXG59XHJcblxyXG4ubWFpblRpdGxlOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxMDAlO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAyMHB0O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICBwYWRkaW5nLWxlZnQ6IDQlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQlO1xyXG59XHJcblxyXG4ubGVhZGVyQm9hcmRDb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbn1cclxuXHJcbi5sZWFkZXJCb2FyZEJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG59XHJcblxyXG4uZGlzcGxheVNlY3Rpb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnJlZnJlc2hCdXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxpc3RTY29yZUNvbnRhaW5lciB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNDgsIDE2NCwgOCwgMC41ODUpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLmxpc3QgLml0ZW0ge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICBwYWRkaW5nOiAyJTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRwdDtcclxufVxyXG5cclxuLmV2ZW4ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjI3LCAyMjEsIDIyMSwgMC45NDgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmZvcm1TZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA0JTtcclxufVxyXG5cclxuLmZvcm1JdGVtIGRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmctYm90dG9tOiA4JTtcclxufVxyXG5cclxuLmZvcm1JdGVtIGRpdiBpbnB1dCB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIHJnYigyNDgsIDE2NCwgOCk7XHJcbiAgcGFkZGluZzogMyU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTI3KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNXB0O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHBhZGRpbmc6IDMlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI0OCwgMTY0LCA4KTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMnM7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggNHB4IGJsYWNrO1xyXG59XHJcblxyXG4jYnRuUmVmcmVzIHtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmZvcm1JdGVtIC5zdWJtaXRDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGVuZDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNyZWNlbnRlU2NvcmUge1xyXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyNXB0O1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNlY29uZGFyeSk7XHJcbiAgdGV4dC1zaGFkb3c6IDRweCA0cHggNHB4IGJsYWNrO1xyXG59XHJcblxyXG4uYWRkU2NvcmUge1xyXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyMHB0O1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNlY29uZGFyeSk7XHJcbiAgdGV4dC1zaGFkb3c6IDRweCA0cHggNHB4IGJsYWNrO1xyXG59XHJcblxyXG4uc2NvcmVIZWFkZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy1ib3R0b206IDEuMyU7XHJcbn1cclxuXHJcbiNidG5UaGVtZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIzMSwgNzQsIDYpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyMHB0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG5mb290ZXIgcCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gIGZvbnQtc2l6ZTogMjBwdDtcclxuICB0cmFuc2l0aW9uOiBhbGwgM3M7XHJcbn1cclxuXHJcbmZvb3RlciBwOmhvdmVyIHtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMlO1xyXG59XHJcblxyXG4uaGVhcnQge1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMCwgMzApO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgM3M7XHJcbn1cclxuXHJcbi5oZWFydDpob3ZlciB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbiNsYXN0TmFtZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxrQ0FBa0M7RUFDbEMsc0NBQXNDO0VBQ3RDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLE9BQU87QUFDVDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGtDQUFrQztFQUNsQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJpZ2h0ZW91cyZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWZvbnQtcHJpbWFyeTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgLS1mb250LXNlY29uZGFyeTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XFxyXFxuICAtLW9yYW5nZTogb3JhbmdlO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXNpemU6IDEycHQ7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmctdG9wOiA1JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sb2dvQ29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IC04JTtcXHJcXG4gIHBhZGRpbmctdG9wOiA4JTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ29MaW5rIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctdG9wOiAtNCU7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBoZWlnaHQ6IDQwJTtcXHJcXG4gIG9wYWNpdHk6IDAuNjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCA0cztcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ286aG92ZXIge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5UaXRsZSB7XFxyXFxuICBtYXJnaW4tdG9wOiA1JTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMiU7XFxyXFxuICBmb250LXNpemU6IDQwcHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMywgMC44NTIpO1xcclxcbiAgb3BhY2l0eTogNzAlO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Vjb25kYXJ5KTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAycztcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5UaXRsZTpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBmb250LXNpemU6IDIwcHQ7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA0JTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDQlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVhZGVyQm9hcmRDb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMyU7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVhZGVyQm9hcmRCb2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5U2VjdGlvbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZnJlc2hCdXR0b24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RTY29yZUNvbnRhaW5lciB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ4LCAxNjQsIDgsIDAuNTg1KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbjogNHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgcGFkZGluZy10b3A6IDIlO1xcclxcbiAgaGVpZ2h0OiA4MHZoO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCAuaXRlbSB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxJTtcXHJcXG4gIHBhZGRpbmc6IDIlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTRwdDtcXHJcXG59XFxyXFxuXFxyXFxuLmV2ZW4ge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyMjcsIDIyMSwgMjIxLCAwLjk0OCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtU2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNCU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtSXRlbSBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogOCU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtSXRlbSBkaXYgaW5wdXQge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIHJnYigyNDgsIDE2NCwgOCk7XFxyXFxuICBwYWRkaW5nOiAzJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTI3KTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTVwdDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDMlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigyNDgsIDE2NCwgOCk7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDJzO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggNHB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jYnRuUmVmcmVzIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybUl0ZW0gLnN1Ym1pdENvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxubGFiZWwge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3JlY2VudGVTY29yZSB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMiU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDI1cHQ7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zZWNvbmRhcnkpO1xcclxcbiAgdGV4dC1zaGFkb3c6IDRweCA0cHggNHB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkU2NvcmUge1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAyMHB0O1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Vjb25kYXJ5KTtcXHJcXG4gIHRleHQtc2hhZG93OiA0cHggNHB4IDRweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlSGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEuMyU7XFxyXFxufVxcclxcblxcclxcbiNidG5UaGVtZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMjMxLCA3NCwgNik7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAyMHB0O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Vjb25kYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHAge1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIlO1xcclxcbiAgZm9udC1zaXplOiAyMHB0O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDNzO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgcDpob3ZlciB7XFxyXFxuICBmb250LXNpemU6IDM1cHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMyU7XFxyXFxufVxcclxcblxcclxcbi5oZWFydCB7XFxyXFxuICBjb2xvcjogcmdiKDIyMSwgMjAsIDMwKTtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAzcztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYXJ0OmhvdmVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbiNsYXN0TmFtZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGVza3RvcC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Rlc2t0b3AuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCAnLi9kZXNrdG9wLmNzcyc7XG5pbXBvcnQgaWNvbiBmcm9tICcuL3BpY3R1cmVzL2ljb24uaWNvJztcbmltcG9ydCBsb2dvIGZyb20gJy4vcGljdHVyZXMvbG9nby5wbmcnO1xuaW1wb3J0IHsgY3JlYXRlTmV3R2FtZSB9IGZyb20gJy4vbW9kdWxlcy9hcGlDb250cm9sZXIuanMnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZVNjb3JlT3BlcmF0aW9uc0xpc3RlbmVyLCBpbml0aWFsaXplU2NvcmVSZWFkZXIsIHJlZnJlc0FsbExpc3RlbmVyIH0gZnJvbSAnLi9tb2R1bGVzL3Njb3JlT3BlcmF0aW9ucy5qcyc7XG5pbXBvcnQgeyBpbml0aWFsaXplQmFja2dyb3VuZCwgdGhlbWVGdW5jdGlvbkxpc3RlbmVyIH0gZnJvbSAnLi9tb2R1bGVzL3RoZW1lLmpzJztcblxuY3JlYXRlTmV3R2FtZSgnTmFydXRvX0hlcm9lc19GaWdodCcpO1xuaW5pdGlhbGl6ZVNjb3JlUmVhZGVyKCk7XG5pbml0aWFsaXplU2NvcmVPcGVyYXRpb25zTGlzdGVuZXIoKTtcbnJlZnJlc0FsbExpc3RlbmVyKCk7XG50aGVtZUZ1bmN0aW9uTGlzdGVuZXIoKTtcbmluaXRpYWxpemVCYWNrZ3JvdW5kKCk7XG5cbmNvbnN0IGljb25MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuaWNvbkxpbmsuaHJlZiA9IGljb247XG5pY29uTGluay50eXBlID0gJ2ltYWdlL3gtaWNvbic7XG5pY29uTGluay5yZWwgPSAnc2hvcnRjdXQgaWNvbic7XG5kb2N1bWVudC5oZWFkLmFwcGVuZChpY29uTGluayk7XG5cbmNvbnN0IG15TG9nbyA9IG5ldyBJbWFnZSgpO1xubXlMb2dvLnNyYyA9IGxvZ287XG5teUxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ29MaW5rJykuYXBwZW5kKG15TG9nbyk7XG4iLCJpbXBvcnQgeyBOYXJ1dG9IZXJvZXNGaWdodFVybCB9IGZyb20gJy4vZ2xvYmFsdmFyLmpzJztcblxuY29uc3QgZ2FtZVZhbGlkYXRvciA9IGFzeW5jICgpID0+IHtcbiAgbGV0IGdhbWVBbHJlYWR5RXhpc3QgPSBmYWxzZTtcbiAgYXdhaXQgZmV0Y2goTmFydXRvSGVyb2VzRmlnaHRVcmwpXG4gICAgLnRoZW4oKHJlcykgPT4geyBpZiAocmVzLm9rKSB7IGdhbWVBbHJlYWR5RXhpc3QgPSB0cnVlOyB9IH0pO1xuICByZXR1cm4gZ2FtZUFscmVhZHlFeGlzdDtcbn07XG5cbmNvbnN0IGNyZWF0ZU5ld0dhbWUgPSBhc3luYyAoZ2FtZU5hbWUpID0+IHtcbiAgaWYgKCFnYW1lVmFsaWRhdG9yKCkpIHtcbiAgICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWU6IGdhbWVOYW1lIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgfSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9XG59O1xuXG5leHBvcnQgeyBjcmVhdGVOZXdHYW1lLCBnYW1lVmFsaWRhdG9yIH07XG4iLCJjb25zdCBOYXJ1dG9IZXJvZXNGaWdodFVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9nYW1lcy9NSldVOEhkQ254TUNsV1pSUlp6Vy9zY29yZXMvJztcbmNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpO1xuY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcbmNvbnN0IGlucHV0U2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NvcmUnKTtcbmNvbnN0IGJ0blJlZnJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5SZWZyZXMnKTtcbmNvbnN0IGJ0blRoZW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0blRoZW1lJyk7XG5jb25zdCBmb3JtU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1JdGVtJyk7XG5jb25zdCBib2R5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuY29uc3QgZGVza3RvcFRoZW1hID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1RoZW1hJyk7XG5cbmV4cG9ydCB7XG4gIGxpc3RDb250YWluZXIsXG4gIGZvcm1TdWJtaXQsXG4gIGlucHV0TmFtZSxcbiAgaW5wdXRTY29yZSxcbiAgTmFydXRvSGVyb2VzRmlnaHRVcmwsXG4gIGJ0blJlZnJlcyxcbiAgYm9keUNvbnRhaW5lcixcbiAgYnRuVGhlbWUsXG4gIGRlc2t0b3BUaGVtYSxcbn07IiwiaW1wb3J0ICogYXMgVmFyaWFibGUgZnJvbSAnLi9nbG9iYWx2YXIuanMnO1xuXG5jb25zdCBsaXN0RWxlbWVudENvbnN0cnVjdG9yID0gKHNjb3JlLCBldmVuID0gbnVsbCkgPT4ge1xuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgaWYgKGV2ZW4gIT09IG51bGwpIHsgbGkuY2xhc3NMaXN0LmFkZCgnZXZlbicpOyB9XG4gIGxpLnRleHRDb250ZW50ID0gYCR7c2NvcmUudXNlcn0gOiAke3Njb3JlLnNjb3JlfSBwdHNgO1xuICByZXR1cm4gbGk7XG59O1xuXG5jb25zdCBjbGVhbkFsbCA9ICgpID0+IHtcbiAgd2hpbGUgKFZhcmlhYmxlLmxpc3RDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIFZhcmlhYmxlLmxpc3RDb250YWluZXIuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgfVxufTtcblxuY29uc3QgcmVhZFNjb3JlcyA9IGFzeW5jICgpID0+IHtcbiAgY2xlYW5BbGwoKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChWYXJpYWJsZS5OYXJ1dG9IZXJvZXNGaWdodFVybCk7XG4gIGNvbnN0IG5hcnV0b0hlcm9lc0ZpZ2h0U2NvcmVSZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgbmFydXRvSGVyb2VzRmlnaHRTY29yZSA9IG5hcnV0b0hlcm9lc0ZpZ2h0U2NvcmVSZXNwb25zZS5yZXN1bHQ7XG4gIGNvbnN0IHNjb3JlT3JnYW5pemVkID0gbmFydXRvSGVyb2VzRmlnaHRTY29yZS5zb3J0KChmQSwgZkIpID0+IChmQi5zY29yZSAtIGZBLnNjb3JlKSk7XG5cbiAgaWYgKHNjb3JlT3JnYW5pemVkICE9PSBudWxsKSB7XG4gICAgc2NvcmVPcmdhbml6ZWQuZm9yRWFjaCgoc2NvcmUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggJSAyID09PSAwKSB7XG4gICAgICAgIFZhcmlhYmxlLmxpc3RDb250YWluZXIuYXBwZW5kKGxpc3RFbGVtZW50Q29uc3RydWN0b3Ioc2NvcmUsICdldmVuJykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgVmFyaWFibGUubGlzdENvbnRhaW5lci5hcHBlbmQobGlzdEVsZW1lbnRDb25zdHJ1Y3RvcihzY29yZSwgbnVsbCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBhZGROZXdTY29yZSA9IGFzeW5jIChzY29yZSkgPT4ge1xuICBhd2FpdCBmZXRjaChWYXJpYWJsZS5OYXJ1dG9IZXJvZXNGaWdodFVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHNjb3JlKSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuICBhd2FpdCByZWFkU2NvcmVzKCk7XG59O1xuXG5jb25zdCBpbml0aWFsaXplU2NvcmVPcGVyYXRpb25zTGlzdGVuZXIgPSAoKSA9PiB7XG4gIFZhcmlhYmxlLmZvcm1TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgc2NvcmVPYmplY3QgPSB7XG4gICAgICB1c2VyOiBWYXJpYWJsZS5pbnB1dE5hbWUudmFsdWUsXG4gICAgICBzY29yZTogVmFyaWFibGUuaW5wdXRTY29yZS52YWx1ZSxcbiAgICB9O1xuICAgIGFkZE5ld1Njb3JlKHNjb3JlT2JqZWN0KTtcbiAgICBWYXJpYWJsZS5mb3JtU3VibWl0LnJlc2V0KCk7XG4gIH0pO1xufTtcblxuY29uc3QgaW5pdGlhbGl6ZVNjb3JlUmVhZGVyID0gYXN5bmMgKCkgPT4ge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHJlYWRTY29yZXMpO1xufTtcblxuY29uc3QgcmVmcmVzQWxsTGlzdGVuZXIgPSAoKSA9PiB7XG4gIFZhcmlhYmxlLmJ0blJlZnJlcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlYWRTY29yZXMpO1xufTtcblxuZXhwb3J0IHtcbiAgaW5pdGlhbGl6ZVNjb3JlT3BlcmF0aW9uc0xpc3RlbmVyLCByZWFkU2NvcmVzLCBpbml0aWFsaXplU2NvcmVSZWFkZXIsIHJlZnJlc0FsbExpc3RlbmVyLFxufTtcbiIsImltcG9ydCAqIGFzIFZhcmlhYmxlIGZyb20gJy4vZ2xvYmFsdmFyLmpzJztcblxuY29uc3QgdGhlbWVGdW5jdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgdGhlbWUgPSBbJ3VybCguLi9zcmMvcGljdHVyZXMvb2JpdG8uanBnKScsICd1cmwoLi4vc3JjL3BpY3R1cmVzL21hZGFyYS5qcGcpJ107XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnTmFydXRvVGhlbWUnKSA9PT0gdGhlbWVbMF0pIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTmFydXRvVGhlbWUnLCB0aGVtZVsxXSk7XG4gIH0gZWxzZSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ05hcnV0b1RoZW1lJywgdGhlbWVbMF0pO1xuICB9XG59O1xuXG5jb25zdCBkZWZhdWx0QmFja2dyb3VuZCA9ICgpID0+IHtcbiAgY29uc3QgdGhlbWUgPSBbJ3VybCguLi9zcmMvcGljdHVyZXMvb2JpdG8uanBnKScsICd1cmwoLi4vc3JjL3BpY3R1cmVzL21hZGFyYS5qcGcpJ107XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnTmFydXRvVGhlbWUnKSA9PT0gbnVsbCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdOYXJ1dG9UaGVtZScsIHRoZW1lWzBdKTtcbiAgfVxufTtcblxuY29uc3QgaW5pdGlhbGl6ZUJhY2tncm91bmQgPSAoKSA9PiB7XG4gIGRlZmF1bHRCYWNrZ3JvdW5kKCk7XG4gIGNvbnN0IHRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ05hcnV0b1RoZW1lJyk7XG4gIFZhcmlhYmxlLmJvZHlDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gdGhlbWU7XG4gIFZhcmlhYmxlLmJvZHlDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnMTAwJSc7XG59O1xuXG5jb25zdCB0aGVtZUZ1bmN0aW9uTGlzdGVuZXIgPSAoKSA9PiB7XG4gIFZhcmlhYmxlLmJ0blRoZW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRoZW1lRnVuY3Rpb24oVmFyaWFibGUuYm9keUNvbnRhaW5lcik7XG4gICAgaW5pdGlhbGl6ZUJhY2tncm91bmQoKTtcbiAgfSk7XG5cbiAgVmFyaWFibGUuZGVza3RvcFRoZW1hLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRoZW1lRnVuY3Rpb24oKTtcbiAgICBpbml0aWFsaXplQmFja2dyb3VuZCgpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGluaXRpYWxpemVCYWNrZ3JvdW5kLCB0aGVtZUZ1bmN0aW9uTGlzdGVuZXIgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
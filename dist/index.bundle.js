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
/* harmony import */ var _modules_apiControler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/apiControler.js */ "./src/modules/apiControler.js");
/* harmony import */ var _modules_scoreOperations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scoreOperations.js */ "./src/modules/scoreOperations.js");
/* harmony import */ var _modules_theme_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/theme.js */ "./src/modules/theme.js");
/* harmony import */ var _modules_metaData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/metaData.js */ "./src/modules/metaData.js");







(0,_modules_metaData_js__WEBPACK_IMPORTED_MODULE_5__.metaHeaders)();
(0,_modules_metaData_js__WEBPACK_IMPORTED_MODULE_5__.setLogo)();
(0,_modules_apiControler_js__WEBPACK_IMPORTED_MODULE_2__.createNewGame)('Naruto_Heroes_Fight');
(0,_modules_scoreOperations_js__WEBPACK_IMPORTED_MODULE_3__.initializeScoreReader)();
(0,_modules_scoreOperations_js__WEBPACK_IMPORTED_MODULE_3__.initializeScoreOperationsListener)();
(0,_modules_scoreOperations_js__WEBPACK_IMPORTED_MODULE_3__.refresAllListener)();
(0,_modules_theme_js__WEBPACK_IMPORTED_MODULE_4__.themeFunctionListener)();
(0,_modules_theme_js__WEBPACK_IMPORTED_MODULE_4__.initializeBackground)();


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
/* harmony export */   listContainer: () => (/* binding */ listContainer),
/* harmony export */   logoContainer: () => (/* binding */ logoContainer)
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
const logoContainer = document.querySelector('.logoLink');



/***/ }),

/***/ "./src/modules/metaData.js":
/*!*********************************!*\
  !*** ./src/modules/metaData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   metaHeaders: () => (/* binding */ metaHeaders),
/* harmony export */   setLogo: () => (/* binding */ setLogo)
/* harmony export */ });
/* harmony import */ var _globalvar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalvar.js */ "./src/modules/globalvar.js");
/* harmony import */ var _pictures_icon_ico__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pictures/icon.ico */ "./src/pictures/icon.ico");
/* harmony import */ var _pictures_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pictures/logo.png */ "./src/pictures/logo.png");




const metaHeaders = () => {
   const iconLink = document.createElement('link');
   iconLink.href = _pictures_icon_ico__WEBPACK_IMPORTED_MODULE_1__;
   iconLink.type = 'image/x-icon';
   iconLink.rel = 'shortcut icon';
  document.head.append(iconLink);
};

const setLogo = () => {
  const myLogo = new Image();
  myLogo.src = _pictures_logo_png__WEBPACK_IMPORTED_MODULE_2__;
  myLogo.classList.add('logo');
  _globalvar_js__WEBPACK_IMPORTED_MODULE_0__.logoContainer.append(myLogo);
};




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RkFBcUM7QUFDL0YsMkhBQTJIO0FBQzNILHVIQUF1SDtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVks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Q0E7QUFDQSwrQkFBK0IsK0RBQTZCO0FBQzVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFzQjtBQUM5QixRQUFRO0FBQ1IsUUFBUSx3REFBc0I7QUFDOUI7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLGNBQWMsK0RBQTZCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QyxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUscURBQW1CO0FBQ3JCO0FBQ0E7QUFDQSxZQUFZLG9EQUFrQjtBQUM5QixhQUFhLHFEQUFtQjtBQUNoQztBQUNBO0FBQ0EsSUFBSSxxREFBbUI7QUFDdkIsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsb0RBQWtCO0FBQ3BCOztBQUlFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFeUM7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3REFBc0I7QUFDeEIsRUFBRSx3REFBc0I7QUFDeEI7O0FBRUE7QUFDQSxFQUFFLG1EQUFpQjtBQUNuQixrQkFBa0Isd0RBQXNCO0FBQ3hDO0FBQ0EsR0FBRzs7QUFFSCxFQUFFLHVEQUFxQjtBQUN2QjtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd29ya2Zsb3dzLy4vc3JjL2Rlc2t0b3AuY3NzIiwid2VicGFjazovL3dvcmtmbG93cy8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd29ya2Zsb3dzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93b3JrZmxvd3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dvcmtmbG93cy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dvcmtmbG93cy8uL3NyYy9kZXNrdG9wLmNzcz85MzAwIiwid2VicGFjazovL3dvcmtmbG93cy8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly93b3JrZmxvd3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3dzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93b3JrZmxvd3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3dzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dvcmtmbG93cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dvcmtmbG93cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dvcmtmbG93cy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93b3JrZmxvd3MvLi9zcmMvbW9kdWxlcy9hcGlDb250cm9sZXIuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3dzLy4vc3JjL21vZHVsZXMvZ2xvYmFsdmFyLmpzIiwid2VicGFjazovL3dvcmtmbG93cy8uL3NyYy9tb2R1bGVzL21ldGFEYXRhLmpzIiwid2VicGFjazovL3dvcmtmbG93cy8uL3NyYy9tb2R1bGVzL3Njb3JlT3BlcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly93b3JrZmxvd3MvLi9zcmMvbW9kdWxlcy90aGVtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9waWN0dXJlcy92YWxleW9mZW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIG5hdiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG5cclxuICBuYXYgdWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgfVxyXG5cclxuICBuYXYgdWwgbGkge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgbmF2IHVsIGxpIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcblxyXG4gIC5tYWluVGl0bGUge1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4gIC5tYWluIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5sZWFkZXJCb2FyZENvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1cHggODBmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgY29sdW1uLWdhcDogNCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuXHJcbiAgLmxlYWRCb2FyZEhlYWRlcixcclxuICAubGVhZGVyQm9hcmRCb2R5IHtcclxuICAgIGNvbHVtbi1nYXA6IDglO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmciAxZnI7XHJcbiAgfVxyXG5cclxuICAubGVhZEJvYXJkSGVhZGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0JTtcclxuICB9XHJcblxyXG4gICNidG5SZWZyZXMge1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICB9XHJcblxyXG4gIC5sZWFkZXJCb2FyZEJvZHkge1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgLmRpc3BsYXlTZWN0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnJlZnJlc2hCdXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAubGlzdFNjb3JlQ29udGFpbmVyIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICB9XHJcblxyXG4gIC5saXN0IC5pdGVtIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDElO1xyXG4gIH1cclxuXHJcbiAgLmZvcm1TZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiA0JTtcclxuICB9XHJcblxyXG4gIC5mb3JtSXRlbSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgfVxyXG5cclxuICAuZm9ybUl0ZW0gZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDglO1xyXG4gIH1cclxuXHJcbiAgLmZvcm1JdGVtIGRpdiBpbnB1dCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxLjUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMS41JTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDAgMCByZ2IoMjQ5LCAyNDAsIDI0MCk7XHJcbiAgfVxyXG5cclxuICAjYnRuVGhlbWUsXHJcbiAgI3JlY2VudGVTY29yZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnNjb3JlSGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjVwdDtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNlY29uZGFyeSk7XHJcbiAgICB0ZXh0LXNoYWRvdzogNHB4IDRweCA0cHggYmxhY2s7XHJcbiAgfVxyXG5cclxuICAjc3VibWl0RmlnaHQge1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zZWNvbmRhcnkpO1xyXG4gIH1cclxuXHJcbiAgI2xhc3ROYW1lIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGZvbnQtc2l6ZTogMjBwdDtcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZGVza3RvcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1EQUEwQztJQUMxQyx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixVQUFVO0lBQ1YsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxVQUFVO0VBQ1o7O0VBRUE7O0lBRUUsY0FBYztJQUNkLGFBQWE7SUFDYiw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsT0FBTztFQUNUOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSwwQ0FBMEM7RUFDNUM7O0VBRUE7O0lBRUUsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLFdBQVc7SUFDWCxrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9waWN0dXJlcy92YWxleW9mZW5kLmpwZyk7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgbmF2IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbiAgfVxcclxcblxcclxcbiAgbmF2IHVsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxyXFxuICAgIHBhZGRpbmc6IDIlO1xcclxcbiAgfVxcclxcblxcclxcbiAgbmF2IHVsIGxpIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG5hdiB1bCBsaSBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluVGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDYwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxlYWRlckJvYXJkQ29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMyU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjVweCA4MGZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgY29sdW1uLWdhcDogNCU7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGVhZEJvYXJkSGVhZGVyLFxcclxcbiAgLmxlYWRlckJvYXJkQm9keSB7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDglO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnIgMWZyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxlYWRCb2FyZEhlYWRlciB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA0JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNidG5SZWZyZXMge1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxlYWRlckJvYXJkQm9keSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMlO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRpc3BsYXlTZWN0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWZyZXNoQnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpc3RTY29yZUNvbnRhaW5lciB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBoZWlnaHQ6IDkwdmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGlzdCAuaXRlbSB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMSU7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDElO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm1TZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA0JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtSXRlbSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtSXRlbSBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogOCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9ybUl0ZW0gZGl2IGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBidXR0b24ge1xcclxcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNSU7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEuNSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBidXR0b246aG92ZXIge1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDAgMCByZ2IoMjQ5LCAyNDAsIDI0MCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjYnRuVGhlbWUsXFxyXFxuICAjcmVjZW50ZVNjb3JlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zY29yZUhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDI1cHQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNlY29uZGFyeSk7XFxyXFxuICAgIHRleHQtc2hhZG93OiA0cHggNHB4IDRweCBibGFjaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNzdWJtaXRGaWdodCB7XFxyXFxuICAgIHBhZGRpbmc6IDMlO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zZWNvbmRhcnkpO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2xhc3ROYW1lIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICBmb250LXNpemU6IDIwcHQ7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86d2dodEA3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmlnaHRlb3VzJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gIC0tZm9udC1wcmltYXJ5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgLS1mb250LXNlY29uZGFyeTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbiAgLS1vcmFuZ2U6IG9yYW5nZTtcclxufVxyXG5cclxuKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxMnB0O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5uYXYge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5sb2dvQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAtOCU7XHJcbiAgcGFkZGluZy10b3A6IDglO1xyXG59XHJcblxyXG4ubG9nb0xpbmsge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogLTQlO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgNHM7XHJcbn1cclxuXHJcbi5sb2dvOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ubWFpblRpdGxlIHtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDMsIDAuODUyKTtcclxuICBvcGFjaXR5OiA3MCU7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Vjb25kYXJ5KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMnM7XHJcbn1cclxuXHJcbi5tYWluVGl0bGU6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDEwMCU7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDIwcHQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gIHBhZGRpbmctbGVmdDogNCU7XHJcbiAgcGFkZGluZy1yaWdodDogNCU7XHJcbn1cclxuXHJcbi5sZWFkZXJCb2FyZENvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcclxufVxyXG5cclxuLmxlYWRlckJvYXJkQm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbn1cclxuXHJcbi5kaXNwbGF5U2VjdGlvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucmVmcmVzaEJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubGlzdFNjb3JlQ29udGFpbmVyIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwgMTY0LCA4LCAwLjU4NSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiA0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyJTtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4ubGlzdCAuaXRlbSB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbi1ib3R0b206IDElO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zaXplOiAxNHB0O1xyXG59XHJcblxyXG4uZXZlbiB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMjcsIDIyMSwgMjIxLCAwLjk0OCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uZm9ybVNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDQlO1xyXG59XHJcblxyXG4uZm9ybUl0ZW0gZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZy1ib3R0b206IDglO1xyXG59XHJcblxyXG4uZm9ybUl0ZW0gZGl2IGlucHV0IHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAgcmdiKDI0OCwgMTY0LCA4KTtcclxuICBwYWRkaW5nOiAzJTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41MjcpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE1cHQ7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMyU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjQ4LCAxNjQsIDgpO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb246IGFsbCAycztcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiA0cHggNHB4IDRweCA0cHggYmxhY2s7XHJcbn1cclxuXHJcbiNidG5SZWZyZXMge1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uZm9ybUl0ZW0gLnN1Ym1pdENvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZW5kO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI3JlY2VudGVTY29yZSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDI1cHQ7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Vjb25kYXJ5KTtcclxuICB0ZXh0LXNoYWRvdzogNHB4IDRweCA0cHggYmxhY2s7XHJcbn1cclxuXHJcbi5hZGRTY29yZSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDIwcHQ7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Vjb25kYXJ5KTtcclxuICB0ZXh0LXNoYWRvdzogNHB4IDRweCA0cHggYmxhY2s7XHJcbn1cclxuXHJcbi5zY29yZUhlYWRlciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLWJvdHRvbTogMS4zJTtcclxufVxyXG5cclxuI2J0blRoZW1lIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjMxLCA3NCwgNik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDIwcHQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbmZvb3RlciBwIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiAgZm9udC1zaXplOiAyMHB0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAzcztcclxufVxyXG5cclxuZm9vdGVyIHA6aG92ZXIge1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMyU7XHJcbn1cclxuXHJcbi5oZWFydCB7XHJcbiAgY29sb3I6IHJnYigyMjEsIDIwLCAzMCk7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAzcztcclxufVxyXG5cclxuLmhlYXJ0OmhvdmVyIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuI2xhc3ROYW1lIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLGtDQUFrQztFQUNsQyxzQ0FBc0M7RUFDdEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmlnaHRlb3VzJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tZm9udC1wcmltYXJ5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAtLWZvbnQtc2Vjb25kYXJ5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcXHJcXG4gIC0tb3JhbmdlOiBvcmFuZ2U7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTJwdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgcGFkZGluZy10b3A6IDUlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ29Db250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogLTglO1xcclxcbiAgcGFkZGluZy10b3A6IDglO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nb0xpbmsge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IC00JTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIGhlaWdodDogNDAlO1xcclxcbiAgb3BhY2l0eTogMC42O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDRzO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbzpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpblRpdGxlIHtcXHJcXG4gIG1hcmdpbi10b3A6IDUlO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyJTtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAzLCAwLjg1Mik7XFxyXFxuICBvcGFjaXR5OiA3MCU7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zZWNvbmRhcnkpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDJzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpblRpdGxlOmhvdmVyIHtcXHJcXG4gIG9wYWNpdHk6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBwdDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDQlO1xcclxcbiAgcGFkZGluZy1yaWdodDogNCU7XFxyXFxufVxcclxcblxcclxcbi5sZWFkZXJCb2FyZENvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAzJTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XFxyXFxufVxcclxcblxcclxcbi5sZWFkZXJCb2FyZEJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXlTZWN0aW9uIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaEJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdFNjb3JlQ29udGFpbmVyIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNDgsIDE2NCwgOCwgMC41ODUpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxyXFxufVxcclxcblxcclxcbi5saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luOiA0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBwYWRkaW5nLXRvcDogMiU7XFxyXFxuICBoZWlnaHQ6IDgwdmg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5saXN0IC5pdGVtIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDElO1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgZm9udC1zaXplOiAxNHB0O1xcclxcbn1cXHJcXG5cXHJcXG4uZXZlbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIyNywgMjIxLCAyMjEsIDAuOTQ4KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1TZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA0JTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1JdGVtIGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA4JTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1JdGVtIGRpdiBpbnB1dCB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAgcmdiKDI0OCwgMTY0LCA4KTtcXHJcXG4gIHBhZGRpbmc6IDMlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41MjcpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxNXB0O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgcGFkZGluZzogMyU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDI0OCwgMTY0LCA4KTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMnM7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiA0cHggNHB4IDRweCA0cHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNidG5SZWZyZXMge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5mb3JtSXRlbSAuc3VibWl0Q29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVjZW50ZVNjb3JlIHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjVwdDtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNlY29uZGFyeSk7XFxyXFxuICB0ZXh0LXNoYWRvdzogNHB4IDRweCA0cHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5hZGRTY29yZSB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMiU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDIwcHQ7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zZWNvbmRhcnkpO1xcclxcbiAgdGV4dC1zaGFkb3c6IDRweCA0cHggNHB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVIZWFkZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMS4zJTtcXHJcXG59XFxyXFxuXFxyXFxuI2J0blRoZW1lIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigyMzEsIDc0LCA2KTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDIwcHQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zZWNvbmRhcnkpO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgcCB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMiU7XFxyXFxuICBmb250LXNpemU6IDIwcHQ7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgM3M7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBwOmhvdmVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzVweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAzJTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYXJ0IHtcXHJcXG4gIGNvbG9yOiByZ2IoMjIxLCAyMCwgMzApO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDNzO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhcnQ6aG92ZXIge1xcclxcbiAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuI2xhc3ROYW1lIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kZXNrdG9wLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGVza3RvcC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0ICcuL2Rlc2t0b3AuY3NzJztcbmltcG9ydCB7IGNyZWF0ZU5ld0dhbWUgfSBmcm9tICcuL21vZHVsZXMvYXBpQ29udHJvbGVyLmpzJztcbmltcG9ydCB7IGluaXRpYWxpemVTY29yZU9wZXJhdGlvbnNMaXN0ZW5lciwgaW5pdGlhbGl6ZVNjb3JlUmVhZGVyLCByZWZyZXNBbGxMaXN0ZW5lciB9IGZyb20gJy4vbW9kdWxlcy9zY29yZU9wZXJhdGlvbnMuanMnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUJhY2tncm91bmQsIHRoZW1lRnVuY3Rpb25MaXN0ZW5lciB9IGZyb20gJy4vbW9kdWxlcy90aGVtZS5qcyc7XG5pbXBvcnQgeyBtZXRhSGVhZGVycywgc2V0TG9nbyB9IGZyb20gJy4vbW9kdWxlcy9tZXRhRGF0YS5qcyc7XG5cbm1ldGFIZWFkZXJzKCk7XG5zZXRMb2dvKCk7XG5jcmVhdGVOZXdHYW1lKCdOYXJ1dG9fSGVyb2VzX0ZpZ2h0Jyk7XG5pbml0aWFsaXplU2NvcmVSZWFkZXIoKTtcbmluaXRpYWxpemVTY29yZU9wZXJhdGlvbnNMaXN0ZW5lcigpO1xucmVmcmVzQWxsTGlzdGVuZXIoKTtcbnRoZW1lRnVuY3Rpb25MaXN0ZW5lcigpO1xuaW5pdGlhbGl6ZUJhY2tncm91bmQoKTtcbiIsImltcG9ydCB7IE5hcnV0b0hlcm9lc0ZpZ2h0VXJsIH0gZnJvbSAnLi9nbG9iYWx2YXIuanMnO1xuXG5jb25zdCBnYW1lVmFsaWRhdG9yID0gYXN5bmMgKCkgPT4ge1xuICBsZXQgZ2FtZUFscmVhZHlFeGlzdCA9IGZhbHNlO1xuICBhd2FpdCBmZXRjaChOYXJ1dG9IZXJvZXNGaWdodFVybClcbiAgICAudGhlbigocmVzKSA9PiB7IGlmIChyZXMub2spIHsgZ2FtZUFscmVhZHlFeGlzdCA9IHRydWU7IH0gfSk7XG4gIHJldHVybiBnYW1lQWxyZWFkeUV4aXN0O1xufTtcblxuY29uc3QgY3JlYXRlTmV3R2FtZSA9IGFzeW5jIChnYW1lTmFtZSkgPT4ge1xuICBpZiAoIWdhbWVWYWxpZGF0b3IoKSkge1xuICAgIGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9nYW1lcy8nLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZTogZ2FtZU5hbWUgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICB9LFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGNyZWF0ZU5ld0dhbWUsIGdhbWVWYWxpZGF0b3IgfTtcbiIsImNvbnN0IE5hcnV0b0hlcm9lc0ZpZ2h0VXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpL2dhbWVzL01KV1U4SGRDbnhNQ2xXWlJSWnpXL3Njb3Jlcy8nO1xuY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XG5jb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xuY29uc3QgaW5wdXRTY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZScpO1xuY29uc3QgYnRuUmVmcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0blJlZnJlcycpO1xuY29uc3QgYnRuVGhlbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuVGhlbWUnKTtcbmNvbnN0IGZvcm1TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUl0ZW0nKTtcbmNvbnN0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5jb25zdCBkZXNrdG9wVGhlbWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VGhlbWEnKTtcbmNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nb0xpbmsnKTtcblxuZXhwb3J0IHtcbiAgbGlzdENvbnRhaW5lcixcbiAgZm9ybVN1Ym1pdCxcbiAgaW5wdXROYW1lLFxuICBpbnB1dFNjb3JlLFxuICBOYXJ1dG9IZXJvZXNGaWdodFVybCxcbiAgYnRuUmVmcmVzLFxuICBib2R5Q29udGFpbmVyLFxuICBidG5UaGVtZSxcbiAgZGVza3RvcFRoZW1hLFxuICBsb2dvQ29udGFpbmVyLFxufTsiLCJpbXBvcnQgKiBhcyBWYXJpYWJsZSBmcm9tICcuL2dsb2JhbHZhci5qcyc7XG5pbXBvcnQgaWNvbiBmcm9tICcuLi9waWN0dXJlcy9pY29uLmljbyc7XG5pbXBvcnQgbG9nbyBmcm9tICcuLi9waWN0dXJlcy9sb2dvLnBuZyc7XG5cbmNvbnN0IG1ldGFIZWFkZXJzID0gKCkgPT4ge1xuICAgY29uc3QgaWNvbkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICBpY29uTGluay5ocmVmID0gaWNvbjtcbiAgIGljb25MaW5rLnR5cGUgPSAnaW1hZ2UveC1pY29uJztcbiAgIGljb25MaW5rLnJlbCA9ICdzaG9ydGN1dCBpY29uJztcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmQoaWNvbkxpbmspO1xufTtcblxuY29uc3Qgc2V0TG9nbyA9ICgpID0+IHtcbiAgY29uc3QgbXlMb2dvID0gbmV3IEltYWdlKCk7XG4gIG15TG9nby5zcmMgPSBsb2dvO1xuICBteUxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICBWYXJpYWJsZS5sb2dvQ29udGFpbmVyLmFwcGVuZChteUxvZ28pO1xufTtcblxuZXhwb3J0IHsgc2V0TG9nbywgbWV0YUhlYWRlcnMgfTtcbiIsImltcG9ydCAqIGFzIFZhcmlhYmxlIGZyb20gJy4vZ2xvYmFsdmFyLmpzJztcblxuY29uc3QgbGlzdEVsZW1lbnRDb25zdHJ1Y3RvciA9IChzY29yZSwgZXZlbiA9IG51bGwpID0+IHtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaS5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gIGlmIChldmVuICE9PSBudWxsKSB7IGxpLmNsYXNzTGlzdC5hZGQoJ2V2ZW4nKTsgfVxuICBsaS50ZXh0Q29udGVudCA9IGAke3Njb3JlLnVzZXJ9IDogJHtzY29yZS5zY29yZX0gcHRzYDtcbiAgcmV0dXJuIGxpO1xufTtcblxuY29uc3QgY2xlYW5BbGwgPSAoKSA9PiB7XG4gIHdoaWxlIChWYXJpYWJsZS5saXN0Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBWYXJpYWJsZS5saXN0Q29udGFpbmVyLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gIH1cbn07XG5cbmNvbnN0IHJlYWRTY29yZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNsZWFuQWxsKCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVmFyaWFibGUuTmFydXRvSGVyb2VzRmlnaHRVcmwpO1xuICBjb25zdCBuYXJ1dG9IZXJvZXNGaWdodFNjb3JlUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IG5hcnV0b0hlcm9lc0ZpZ2h0U2NvcmUgPSBuYXJ1dG9IZXJvZXNGaWdodFNjb3JlUmVzcG9uc2UucmVzdWx0O1xuICBjb25zdCBzY29yZU9yZ2FuaXplZCA9IG5hcnV0b0hlcm9lc0ZpZ2h0U2NvcmUuc29ydCgoZkEsIGZCKSA9PiAoZkIuc2NvcmUgLSBmQS5zY29yZSkpO1xuXG4gIGlmIChzY29yZU9yZ2FuaXplZCAhPT0gbnVsbCkge1xuICAgIHNjb3JlT3JnYW5pemVkLmZvckVhY2goKHNjb3JlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ICUgMiA9PT0gMCkge1xuICAgICAgICBWYXJpYWJsZS5saXN0Q29udGFpbmVyLmFwcGVuZChsaXN0RWxlbWVudENvbnN0cnVjdG9yKHNjb3JlLCAnZXZlbicpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFZhcmlhYmxlLmxpc3RDb250YWluZXIuYXBwZW5kKGxpc3RFbGVtZW50Q29uc3RydWN0b3Ioc2NvcmUsIG51bGwpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgYWRkTmV3U2NvcmUgPSBhc3luYyAoc2NvcmUpID0+IHtcbiAgYXdhaXQgZmV0Y2goVmFyaWFibGUuTmFydXRvSGVyb2VzRmlnaHRVcmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzY29yZSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgYXdhaXQgcmVhZFNjb3JlcygpO1xufTtcblxuY29uc3QgaW5pdGlhbGl6ZVNjb3JlT3BlcmF0aW9uc0xpc3RlbmVyID0gKCkgPT4ge1xuICBWYXJpYWJsZS5mb3JtU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHNjb3JlT2JqZWN0ID0ge1xuICAgICAgdXNlcjogVmFyaWFibGUuaW5wdXROYW1lLnZhbHVlLFxuICAgICAgc2NvcmU6IFZhcmlhYmxlLmlucHV0U2NvcmUudmFsdWUsXG4gICAgfTtcbiAgICBhZGROZXdTY29yZShzY29yZU9iamVjdCk7XG4gICAgVmFyaWFibGUuZm9ybVN1Ym1pdC5yZXNldCgpO1xuICB9KTtcbn07XG5cbmNvbnN0IGluaXRpYWxpemVTY29yZVJlYWRlciA9IGFzeW5jICgpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCByZWFkU2NvcmVzKTtcbn07XG5cbmNvbnN0IHJlZnJlc0FsbExpc3RlbmVyID0gKCkgPT4ge1xuICBWYXJpYWJsZS5idG5SZWZyZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZWFkU2NvcmVzKTtcbn07XG5cbmV4cG9ydCB7XG4gIGluaXRpYWxpemVTY29yZU9wZXJhdGlvbnNMaXN0ZW5lciwgcmVhZFNjb3JlcywgaW5pdGlhbGl6ZVNjb3JlUmVhZGVyLCByZWZyZXNBbGxMaXN0ZW5lcixcbn07XG4iLCJpbXBvcnQgKiBhcyBWYXJpYWJsZSBmcm9tICcuL2dsb2JhbHZhci5qcyc7XG5cbmNvbnN0IHRoZW1lRnVuY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gWyd1cmwoLi4vc3JjL3BpY3R1cmVzL29iaXRvLmpwZyknLCAndXJsKC4uL3NyYy9waWN0dXJlcy9tYWRhcmEuanBnKSddO1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ05hcnV0b1RoZW1lJykgPT09IHRoZW1lWzBdKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ05hcnV0b1RoZW1lJywgdGhlbWVbMV0pO1xuICB9IGVsc2Uge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdOYXJ1dG9UaGVtZScsIHRoZW1lWzBdKTtcbiAgfVxufTtcblxuY29uc3QgZGVmYXVsdEJhY2tncm91bmQgPSAoKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gWyd1cmwoLi4vc3JjL3BpY3R1cmVzL29iaXRvLmpwZyknLCAndXJsKC4uL3NyYy9waWN0dXJlcy9tYWRhcmEuanBnKSddO1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ05hcnV0b1RoZW1lJykgPT09IG51bGwpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTmFydXRvVGhlbWUnLCB0aGVtZVswXSk7XG4gIH1cbn07XG5cbmNvbnN0IGluaXRpYWxpemVCYWNrZ3JvdW5kID0gKCkgPT4ge1xuICBkZWZhdWx0QmFja2dyb3VuZCgpO1xuICBjb25zdCB0aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdOYXJ1dG9UaGVtZScpO1xuICBWYXJpYWJsZS5ib2R5Q29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IHRoZW1lO1xuICBWYXJpYWJsZS5ib2R5Q29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRTaXplID0gJzEwMCUnO1xufTtcblxuY29uc3QgdGhlbWVGdW5jdGlvbkxpc3RlbmVyID0gKCkgPT4ge1xuICBWYXJpYWJsZS5idG5UaGVtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0aGVtZUZ1bmN0aW9uKFZhcmlhYmxlLmJvZHlDb250YWluZXIpO1xuICAgIGluaXRpYWxpemVCYWNrZ3JvdW5kKCk7XG4gIH0pO1xuXG4gIFZhcmlhYmxlLmRlc2t0b3BUaGVtYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0aGVtZUZ1bmN0aW9uKCk7XG4gICAgaW5pdGlhbGl6ZUJhY2tncm91bmQoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBpbml0aWFsaXplQmFja2dyb3VuZCwgdGhlbWVGdW5jdGlvbkxpc3RlbmVyIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
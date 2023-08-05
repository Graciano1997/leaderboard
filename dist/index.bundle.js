"use strict";
(self["webpackChunkworkflows"] = self["webpackChunkworkflows"] || []).push([["index"],{

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

.logoContainer{
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
  text-shadow: 10px 10px 10px 10px black;
  opacity: 0.7;
  font-family: var(--font-secondary);
  transition: all 2s;
}

.mainTitle:hover {
  opacity: 1;
}


h2 {
  font-size: 20pt;
  font-weight: 700;
}

.main {
  display: flex;
  flex-direction: column-reverse;
  padding-left:4%;
  padding-right:4%;
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
  margin:4px;
  border-radius: 4px;
  padding-top: 2%;
  height: 80vh;
  overflow-y: scroll;
}

.list .item {
  list-style-type: none;
  margin-bottom: 1%;
  padding: 2%;
  font-size: 20pt;
  font-weight: bolder;
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
box-shadow: 4px 4px 4px 4px black ;

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
  font-family:  var(--font-secondary);
  text-shadow: 4px 4px 4px black;
}

.addScore {
  padding-bottom: 2%;
  color: white;
  font-size: 20pt;
  font-family:  var(--font-secondary);
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
  font-family:  var(--font-secondary);

}
footer p {
  padding-bottom: 2%;
  font-size: 20pt;
  text-shadow: 10px black;
  transition: all 3s;
}

footer p:hover {
  font-size: 35px;
  padding-bottom: 3%;
}

footer p span {
  color: pink;
  font-size: 30px;
  transition: all 3s;
}

 footer p span:hover {
  font-size: 40px;
  color: red;
} `, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAGA;EACE,kCAAkC;EAClC,sCAAsC;EACtC,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;AACA,aAAa;AACb,sBAAsB;AACtB,mBAAmB;AACnB,eAAe;AACf,eAAe;AACf;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;AACA,UAAU;AACV;;;AAGA;EACE,cAAc;EACd,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,oBAAoB;EACpB,UAAU;EACV,kBAAkB;EAClB,sCAAsC;EACtC,YAAY;EACZ,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;;AAGA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,oCAAoC;EACpC,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,WAAW;EACX,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,sCAAsC;EACtC,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,OAAO;AACT;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,mCAAmC;EACnC,WAAW;EACX,mBAAmB;EACnB,gCAAgC;EAChC,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,4BAA4B;EAC5B,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;AACA,kCAAkC;;AAElC;;AAEA;AACA,oBAAoB;AACpB;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,mCAAmC;EACnC,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,mCAAmC;EACnC,8BAA8B;AAChC;;AAEA;EACE,aAAa;AACf;;AAEA;AACA,aAAa;AACb,8BAA8B;AAC9B,oBAAoB;AACpB;;AAEA;EACE,2BAA2B;EAC3B,YAAY;EACZ,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,mCAAmC;;AAErC;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;AACpB;;CAEC;EACC,eAAe;EACf,UAAU;AACZ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');\r\n\r\n:root {\r\n  --font-primary: 'Lato', sans-serif;\r\n  --font-secondary: 'Righteous', cursive;\r\n  --orange: orange;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 12pt;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\nheader {\r\n  padding-top: 5%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.logoContainer{\r\ndisplay: flex;\r\nflex-direction: column;\r\nalign-items: center;\r\nmargin-top: -8%;\r\npadding-top: 8%;\r\n}\r\n\r\n.logoLink {\r\n  text-align: center;\r\n  padding-top: -4%;\r\n}\r\n\r\n.logo {\r\n  text-align: center;\r\n  width: 40%;\r\n  height: 40%;\r\n  opacity: 0.6;\r\n  cursor: pointer;\r\n  transition: all 4s;\r\n}\r\n\r\n.logo:hover {\r\nopacity: 1;\r\n}\r\n\r\n\r\n.mainTitle {\r\n  margin-top: 5%;\r\n  padding-left: 2%;\r\n  font-size: 40px;\r\n  font-weight: 400;\r\n  color: var(--orange);\r\n  width: 80%;\r\n  text-align: center;\r\n  text-shadow: 10px 10px 10px 10px black;\r\n  opacity: 0.7;\r\n  font-family: var(--font-secondary);\r\n  transition: all 2s;\r\n}\r\n\r\n.mainTitle:hover {\r\n  opacity: 1;\r\n}\r\n\r\n\r\nh2 {\r\n  font-size: 20pt;\r\n  font-weight: 700;\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  flex-direction: column-reverse;\r\n  padding-left:4%;\r\n  padding-right:4%;\r\n}\r\n\r\n.leaderBoardContainer {\r\n  margin-top: 3%;\r\n  padding-bottom: 10%;\r\n}\r\n\r\n.leaderBoardBody {\r\n  display: flex;\r\n  flex-direction: column-reverse;\r\n}\r\n\r\n.displaySection {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.refreshButton {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n.listScoreContainer {\r\n  border: 2px solid black;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 15px;\r\n  background: rgba(248, 164, 8, 0.585);\r\n  backdrop-filter: blur(5px);\r\n}\r\n\r\n.list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin:4px;\r\n  border-radius: 4px;\r\n  padding-top: 2%;\r\n  height: 80vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.list .item {\r\n  list-style-type: none;\r\n  margin-bottom: 1%;\r\n  padding: 2%;\r\n  font-size: 20pt;\r\n  font-weight: bolder;\r\n}\r\n\r\n.even {\r\n  background: rgba(227, 221, 221, 0.948);\r\n  border-radius: 4px;\r\n}\r\n\r\n.formSection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 4%;\r\n}\r\n\r\n.formItem div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-bottom: 8%;\r\n}\r\n\r\n.formItem div input {\r\n  border: 2px solid  rgb(248, 164, 8);\r\n  padding: 3%;\r\n  border-radius: 10px;\r\n  background: rgba(0, 0, 0, 0.527);\r\n  color: white;\r\n  font-size: 15pt;\r\n}\r\n\r\nbutton {\r\n  padding: 3%;\r\n  border-radius: 10px;\r\n  background: rgb(248, 164, 8);\r\n  color: black;\r\n  border: transparent;\r\n  transition: all 2s;\r\n}\r\n\r\nbutton:hover {\r\nbox-shadow: 4px 4px 4px 4px black ;\r\n\r\n}\r\n\r\n#btnRefres {\r\nalign-self: flex-end;\r\n}\r\n\r\n.formItem .submitContainer {\r\n  display: flex;\r\n  align-items: end;\r\n}\r\n\r\nlabel {\r\n  display: none;\r\n}\r\n\r\n#recenteScore {\r\n  padding-bottom: 2%;\r\n  color: white;\r\n  font-size: 25pt;\r\n  font-family:  var(--font-secondary);\r\n  text-shadow: 4px 4px 4px black;\r\n}\r\n\r\n.addScore {\r\n  padding-bottom: 2%;\r\n  color: white;\r\n  font-size: 20pt;\r\n  font-family:  var(--font-secondary);\r\n  text-shadow: 4px 4px 4px black;\r\n}\r\n\r\n.scoreHeader {\r\n  display: none;\r\n}\r\n\r\n.description {\r\ndisplay: flex;\r\njustify-content: space-between;\r\npadding-bottom: 1.3%;\r\n}\r\n\r\n#btnTheme {\r\n  background: rgb(231, 74, 6);\r\n  color: white;\r\n  font-weight: bold;\r\n  border: 1px solid black;\r\n}\r\n\r\nfooter {\r\n  color: white;\r\n  font-size: 20pt;\r\n  text-align: center;\r\n  font-family:  var(--font-secondary);\r\n\r\n}\r\nfooter p {\r\n  padding-bottom: 2%;\r\n  font-size: 20pt;\r\n  text-shadow: 10px black;\r\n  transition: all 3s;\r\n}\r\n\r\nfooter p:hover {\r\n  font-size: 35px;\r\n  padding-bottom: 3%;\r\n}\r\n\r\nfooter p span {\r\n  color: pink;\r\n  font-size: 30px;\r\n  transition: all 3s;\r\n}\r\n\r\n footer p span:hover {\r\n  font-size: 40px;\r\n  color: red;\r\n} "],"sourceRoot":""}]);
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
/* harmony import */ var _pictures_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pictures/logo.png */ "./src/pictures/logo.png");
/* harmony import */ var _modules_apiControler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/apiControler.js */ "./src/modules/apiControler.js");
/* harmony import */ var _modules_scoreOperations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scoreOperations.js */ "./src/modules/scoreOperations.js");
/* harmony import */ var _modules_theme_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/theme.js */ "./src/modules/theme.js");






(0,_modules_apiControler_js__WEBPACK_IMPORTED_MODULE_2__.createNewGame)('Naruto_Heroes_Fight');
(0,_modules_scoreOperations_js__WEBPACK_IMPORTED_MODULE_3__.initializeScoreReader)();
(0,_modules_scoreOperations_js__WEBPACK_IMPORTED_MODULE_3__.initializeScoreOperationsListener)();
(0,_modules_scoreOperations_js__WEBPACK_IMPORTED_MODULE_3__.refresAllListener)();
(0,_modules_theme_js__WEBPACK_IMPORTED_MODULE_4__.themeFunctionListener)();
(0,_modules_theme_js__WEBPACK_IMPORTED_MODULE_4__.initializeBackground)();
const myLogo = new Image();
myLogo.src = _pictures_logo_png__WEBPACK_IMPORTED_MODULE_1__;
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


const themeFunction = (element) => {
  let theme = ['url(\"../src/pictures/obito.jpg\")', 'url(\"../src/pictures/madara.jpg\")'];
  if (element.style.backgroundImage === theme[0]) {
    localStorage.setItem("NarutoTheme", theme[1]);
  } else {
    localStorage.setItem("NarutoTheme", theme[0]);
  }
}

const defaultBackground = () => {
  let theme = ['url(\"../src/pictures/obito.jpg\")', 'url(\"../src/pictures/madara.jpg\")'];
  if (localStorage.getItem("NarutoTheme") === null) {
    localStorage.setItem("NarutoTheme", theme[0]);
  }
}

const initializeBackground = () => {
  defaultBackground();
  const theme = localStorage.getItem("NarutoTheme");
  _globalvar_js__WEBPACK_IMPORTED_MODULE_0__.bodyContainer.style.backgroundImage = theme;
  _globalvar_js__WEBPACK_IMPORTED_MODULE_0__.bodyContainer.style.backgroundSize = '100%';
}

const themeFunctionListener = () => {
  _globalvar_js__WEBPACK_IMPORTED_MODULE_0__.btnTheme.addEventListener('click', () => {
    themeFunction(_globalvar_js__WEBPACK_IMPORTED_MODULE_0__.bodyContainer);
    initializeBackground();
  });
}



/***/ }),

/***/ "./src/pictures/logo.png":
/*!*******************************!*\
  !*** ./src/pictures/logo.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "adbbff09258a90f6b37b.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwySEFBMkg7QUFDM0gsdUhBQXVIO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUss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QUFDeEM7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3JrZmxvd3MvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3dvcmtmbG93cy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3dzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3dzLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3dvcmtmbG93cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93b3JrZmxvd3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dvcmtmbG93cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93b3JrZmxvd3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3dzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3dzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3dzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dvcmtmbG93cy8uL3NyYy9tb2R1bGVzL2FwaUNvbnRyb2xlci5qcyIsIndlYnBhY2s6Ly93b3JrZmxvd3MvLi9zcmMvbW9kdWxlcy9nbG9iYWx2YXIuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3dzLy4vc3JjL21vZHVsZXMvc2NvcmVPcGVyYXRpb25zLmpzIiwid2VicGFjazovL3dvcmtmbG93cy8uL3NyYy9tb2R1bGVzL3RoZW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzp3Z2h0QDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SaWdodGVvdXMmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgLS1mb250LXByaW1hcnk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICAtLWZvbnQtc2Vjb25kYXJ5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcclxuICAtLW9yYW5nZTogb3JhbmdlO1xyXG59XHJcblxyXG4qIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDEycHQ7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dvQ29udGFpbmVye1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG5tYXJnaW4tdG9wOiAtOCU7XHJcbnBhZGRpbmctdG9wOiA4JTtcclxufVxyXG5cclxuLmxvZ29MaW5rIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IC00JTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogNDAlO1xyXG4gIGhlaWdodDogNDAlO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDRzO1xyXG59XHJcblxyXG4ubG9nbzpob3ZlciB7XHJcbm9wYWNpdHk6IDE7XHJcbn1cclxuXHJcblxyXG4ubWFpblRpdGxlIHtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtc2hhZG93OiAxMHB4IDEwcHggMTBweCAxMHB4IGJsYWNrO1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zZWNvbmRhcnkpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAycztcclxufVxyXG5cclxuLm1haW5UaXRsZTpob3ZlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDIwcHQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gIHBhZGRpbmctbGVmdDo0JTtcclxuICBwYWRkaW5nLXJpZ2h0OjQlO1xyXG59XHJcblxyXG4ubGVhZGVyQm9hcmRDb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbn1cclxuXHJcbi5sZWFkZXJCb2FyZEJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG59XHJcblxyXG4uZGlzcGxheVNlY3Rpb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnJlZnJlc2hCdXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxpc3RTY29yZUNvbnRhaW5lciB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNDgsIDE2NCwgOCwgMC41ODUpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjo0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyJTtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4ubGlzdCAuaXRlbSB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbi1ib3R0b206IDElO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIGZvbnQtc2l6ZTogMjBwdDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4uZXZlbiB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMjcsIDIyMSwgMjIxLCAwLjk0OCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uZm9ybVNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDQlO1xyXG59XHJcblxyXG4uZm9ybUl0ZW0gZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZy1ib3R0b206IDglO1xyXG59XHJcblxyXG4uZm9ybUl0ZW0gZGl2IGlucHV0IHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAgcmdiKDI0OCwgMTY0LCA4KTtcclxuICBwYWRkaW5nOiAzJTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41MjcpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE1cHQ7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMyU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjQ4LCAxNjQsIDgpO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb246IGFsbCAycztcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuYm94LXNoYWRvdzogNHB4IDRweCA0cHggNHB4IGJsYWNrIDtcclxuXHJcbn1cclxuXHJcbiNidG5SZWZyZXMge1xyXG5hbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmZvcm1JdGVtIC5zdWJtaXRDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGVuZDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNyZWNlbnRlU2NvcmUge1xyXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyNXB0O1xyXG4gIGZvbnQtZmFtaWx5OiAgdmFyKC0tZm9udC1zZWNvbmRhcnkpO1xyXG4gIHRleHQtc2hhZG93OiA0cHggNHB4IDRweCBibGFjaztcclxufVxyXG5cclxuLmFkZFNjb3JlIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjBwdDtcclxuICBmb250LWZhbWlseTogIHZhcigtLWZvbnQtc2Vjb25kYXJ5KTtcclxuICB0ZXh0LXNoYWRvdzogNHB4IDRweCA0cHggYmxhY2s7XHJcbn1cclxuXHJcbi5zY29yZUhlYWRlciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5wYWRkaW5nLWJvdHRvbTogMS4zJTtcclxufVxyXG5cclxuI2J0blRoZW1lIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjMxLCA3NCwgNik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDIwcHQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAgdmFyKC0tZm9udC1zZWNvbmRhcnkpO1xyXG5cclxufVxyXG5mb290ZXIgcCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gIGZvbnQtc2l6ZTogMjBwdDtcclxuICB0ZXh0LXNoYWRvdzogMTBweCBibGFjaztcclxuICB0cmFuc2l0aW9uOiBhbGwgM3M7XHJcbn1cclxuXHJcbmZvb3RlciBwOmhvdmVyIHtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMlO1xyXG59XHJcblxyXG5mb290ZXIgcCBzcGFuIHtcclxuICBjb2xvcjogcGluaztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDNzO1xyXG59XHJcblxyXG4gZm9vdGVyIHAgc3Bhbjpob3ZlciB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbn0gYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0Usa0NBQWtDO0VBQ2xDLHNDQUFzQztFQUN0QyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtBQUNBLGFBQWE7QUFDYixzQkFBc0I7QUFDdEIsbUJBQW1CO0FBQ25CLGVBQWU7QUFDZixlQUFlO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7OztBQUdBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0FBQ0Esa0NBQWtDOztBQUVsQzs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixtQ0FBbUM7RUFDbkMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUNBQW1DO0VBQ25DLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtBQUNBLGFBQWE7QUFDYiw4QkFBOEI7QUFDOUIsb0JBQW9CO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUNBQW1DOztBQUVyQztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztDQUVDO0VBQ0MsZUFBZTtFQUNmLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJpZ2h0ZW91cyZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWZvbnQtcHJpbWFyeTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgLS1mb250LXNlY29uZGFyeTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XFxyXFxuICAtLW9yYW5nZTogb3JhbmdlO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXNpemU6IDEycHQ7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmctdG9wOiA1JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ29Db250YWluZXJ7XFxyXFxuZGlzcGxheTogZmxleDtcXHJcXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxubWFyZ2luLXRvcDogLTglO1xcclxcbnBhZGRpbmctdG9wOiA4JTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ29MaW5rIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctdG9wOiAtNCU7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBoZWlnaHQ6IDQwJTtcXHJcXG4gIG9wYWNpdHk6IDAuNjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCA0cztcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ286aG92ZXIge1xcclxcbm9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tYWluVGl0bGUge1xcclxcbiAgbWFyZ2luLXRvcDogNSU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIlO1xcclxcbiAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtc2hhZG93OiAxMHB4IDEwcHggMTBweCAxMHB4IGJsYWNrO1xcclxcbiAgb3BhY2l0eTogMC43O1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Vjb25kYXJ5KTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAycztcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5UaXRsZTpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBmb250LXNpemU6IDIwcHQ7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcclxcbiAgcGFkZGluZy1sZWZ0OjQlO1xcclxcbiAgcGFkZGluZy1yaWdodDo0JTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlYWRlckJvYXJkQ29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDMlO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlYWRlckJvYXJkQm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheVNlY3Rpb24ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5yZWZyZXNoQnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5saXN0U2NvcmVDb250YWluZXIge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwgMTY0LCA4LCAwLjU4NSk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW46NHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgcGFkZGluZy10b3A6IDIlO1xcclxcbiAgaGVpZ2h0OiA4MHZoO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCAuaXRlbSB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxJTtcXHJcXG4gIHBhZGRpbmc6IDIlO1xcclxcbiAgZm9udC1zaXplOiAyMHB0O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmV2ZW4ge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyMjcsIDIyMSwgMjIxLCAwLjk0OCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtU2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNCU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtSXRlbSBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogOCU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtSXRlbSBkaXYgaW5wdXQge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIHJnYigyNDgsIDE2NCwgOCk7XFxyXFxuICBwYWRkaW5nOiAzJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTI3KTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTVwdDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDMlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigyNDgsIDE2NCwgOCk7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDJzO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbmJveC1zaGFkb3c6IDRweCA0cHggNHB4IDRweCBibGFjayA7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNidG5SZWZyZXMge1xcclxcbmFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybUl0ZW0gLnN1Ym1pdENvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxubGFiZWwge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3JlY2VudGVTY29yZSB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMiU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDI1cHQ7XFxyXFxuICBmb250LWZhbWlseTogIHZhcigtLWZvbnQtc2Vjb25kYXJ5KTtcXHJcXG4gIHRleHQtc2hhZG93OiA0cHggNHB4IDRweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFNjb3JlIHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBwdDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAgdmFyKC0tZm9udC1zZWNvbmRhcnkpO1xcclxcbiAgdGV4dC1zaGFkb3c6IDRweCA0cHggNHB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVIZWFkZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG5kaXNwbGF5OiBmbGV4O1xcclxcbmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5wYWRkaW5nLWJvdHRvbTogMS4zJTtcXHJcXG59XFxyXFxuXFxyXFxuI2J0blRoZW1lIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigyMzEsIDc0LCA2KTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDIwcHQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogIHZhcigtLWZvbnQtc2Vjb25kYXJ5KTtcXHJcXG5cXHJcXG59XFxyXFxuZm9vdGVyIHAge1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIlO1xcclxcbiAgZm9udC1zaXplOiAyMHB0O1xcclxcbiAgdGV4dC1zaGFkb3c6IDEwcHggYmxhY2s7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgM3M7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBwOmhvdmVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzVweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAzJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHAgc3BhbiB7XFxyXFxuICBjb2xvcjogcGluaztcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAzcztcXHJcXG59XFxyXFxuXFxyXFxuIGZvb3RlciBwIHNwYW46aG92ZXIge1xcclxcbiAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59IFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCBsb2dvIGZyb20gJy4vcGljdHVyZXMvbG9nby5wbmcnO1xuaW1wb3J0IHsgY3JlYXRlTmV3R2FtZSB9IGZyb20gJy4vbW9kdWxlcy9hcGlDb250cm9sZXIuanMnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZVNjb3JlT3BlcmF0aW9uc0xpc3RlbmVyLCBpbml0aWFsaXplU2NvcmVSZWFkZXIsIHJlZnJlc0FsbExpc3RlbmVyIH0gZnJvbSAnLi9tb2R1bGVzL3Njb3JlT3BlcmF0aW9ucy5qcyc7XG5pbXBvcnQgeyBpbml0aWFsaXplQmFja2dyb3VuZCwgdGhlbWVGdW5jdGlvbkxpc3RlbmVyIH0gZnJvbSAnLi9tb2R1bGVzL3RoZW1lLmpzJztcblxuY3JlYXRlTmV3R2FtZSgnTmFydXRvX0hlcm9lc19GaWdodCcpO1xuaW5pdGlhbGl6ZVNjb3JlUmVhZGVyKCk7XG5pbml0aWFsaXplU2NvcmVPcGVyYXRpb25zTGlzdGVuZXIoKTtcbnJlZnJlc0FsbExpc3RlbmVyKCk7XG50aGVtZUZ1bmN0aW9uTGlzdGVuZXIoKTtcbmluaXRpYWxpemVCYWNrZ3JvdW5kKCk7XG5jb25zdCBteUxvZ28gPSBuZXcgSW1hZ2UoKTtcbm15TG9nby5zcmMgPSBsb2dvO1xubXlMb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvTGluaycpLmFwcGVuZChteUxvZ28pO1xuIiwiaW1wb3J0IHsgTmFydXRvSGVyb2VzRmlnaHRVcmwgfSBmcm9tICcuL2dsb2JhbHZhci5qcyc7XG5cbmNvbnN0IGdhbWVWYWxpZGF0b3IgPSBhc3luYyAoKSA9PiB7XG4gIGxldCBnYW1lQWxyZWFkeUV4aXN0ID0gZmFsc2U7XG4gIGF3YWl0IGZldGNoKE5hcnV0b0hlcm9lc0ZpZ2h0VXJsKVxuICAgIC50aGVuKChyZXMpID0+IHsgaWYgKHJlcy5vaykgeyBnYW1lQWxyZWFkeUV4aXN0ID0gdHJ1ZTsgfSB9KTtcbiAgcmV0dXJuIGdhbWVBbHJlYWR5RXhpc3Q7XG59O1xuXG5jb25zdCBjcmVhdGVOZXdHYW1lID0gYXN5bmMgKGdhbWVOYW1lKSA9PiB7XG4gIGlmICghZ2FtZVZhbGlkYXRvcigpKSB7XG4gICAgYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpL2dhbWVzLycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lOiBnYW1lTmFtZSB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgY3JlYXRlTmV3R2FtZSwgZ2FtZVZhbGlkYXRvciB9O1xuIiwiY29uc3QgTmFydXRvSGVyb2VzRmlnaHRVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvTUpXVThIZENueE1DbFdaUlJaelcvc2NvcmVzLyc7XG5jb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcbmNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG5jb25zdCBpbnB1dFNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3JlJyk7XG5jb25zdCBidG5SZWZyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuUmVmcmVzJyk7XG5jb25zdCBidG5UaGVtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5UaGVtZScpO1xuY29uc3QgZm9ybVN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtSXRlbScpO1xuY29uc3QgYm9keUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcblxuZXhwb3J0IHtcbiAgbGlzdENvbnRhaW5lcixcbiAgZm9ybVN1Ym1pdCxcbiAgaW5wdXROYW1lLFxuICBpbnB1dFNjb3JlLFxuICBOYXJ1dG9IZXJvZXNGaWdodFVybCxcbiAgYnRuUmVmcmVzLFxuICBib2R5Q29udGFpbmVyLFxuICBidG5UaGVtZVxufTsiLCJpbXBvcnQgKiBhcyBWYXJpYWJsZSBmcm9tICcuL2dsb2JhbHZhci5qcyc7XG5cbmNvbnN0IGxpc3RFbGVtZW50Q29uc3RydWN0b3IgPSAoc2NvcmUsIGV2ZW4gPSBudWxsKSA9PiB7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGkuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICBpZiAoZXZlbiAhPT0gbnVsbCkgeyBsaS5jbGFzc0xpc3QuYWRkKCdldmVuJyk7IH1cbiAgbGkudGV4dENvbnRlbnQgPSBgJHtzY29yZS51c2VyfSA6ICR7c2NvcmUuc2NvcmV9IHB0c2A7XG4gIHJldHVybiBsaTtcbn07XG5cbmNvbnN0IGNsZWFuQWxsID0gKCkgPT4ge1xuICB3aGlsZSAoVmFyaWFibGUubGlzdENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgVmFyaWFibGUubGlzdENvbnRhaW5lci5maXJzdENoaWxkLnJlbW92ZSgpO1xuICB9XG59O1xuXG5jb25zdCByZWFkU2NvcmVzID0gYXN5bmMgKCkgPT4ge1xuICBjbGVhbkFsbCgpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFZhcmlhYmxlLk5hcnV0b0hlcm9lc0ZpZ2h0VXJsKTtcbiAgY29uc3QgbmFydXRvSGVyb2VzRmlnaHRTY29yZVJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zdCBuYXJ1dG9IZXJvZXNGaWdodFNjb3JlID0gbmFydXRvSGVyb2VzRmlnaHRTY29yZVJlc3BvbnNlLnJlc3VsdDtcbiAgY29uc3Qgc2NvcmVPcmdhbml6ZWQgPSBuYXJ1dG9IZXJvZXNGaWdodFNjb3JlLnNvcnQoKGZBLCBmQikgPT4gKGZCLnNjb3JlIC0gZkEuc2NvcmUpKTtcblxuICBpZiAoc2NvcmVPcmdhbml6ZWQgIT09IG51bGwpIHtcbiAgICBzY29yZU9yZ2FuaXplZC5mb3JFYWNoKChzY29yZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCAlIDIgPT09IDApIHtcbiAgICAgICAgVmFyaWFibGUubGlzdENvbnRhaW5lci5hcHBlbmQobGlzdEVsZW1lbnRDb25zdHJ1Y3RvcihzY29yZSwgJ2V2ZW4nKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBWYXJpYWJsZS5saXN0Q29udGFpbmVyLmFwcGVuZChsaXN0RWxlbWVudENvbnN0cnVjdG9yKHNjb3JlLCBudWxsKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGFkZE5ld1Njb3JlID0gYXN5bmMgKHNjb3JlKSA9PiB7XG4gIGF3YWl0IGZldGNoKFZhcmlhYmxlLk5hcnV0b0hlcm9lc0ZpZ2h0VXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc2NvcmUpLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIGF3YWl0IHJlYWRTY29yZXMoKTtcbn07XG5cbmNvbnN0IGluaXRpYWxpemVTY29yZU9wZXJhdGlvbnNMaXN0ZW5lciA9ICgpID0+IHtcbiAgVmFyaWFibGUuZm9ybVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzY29yZU9iamVjdCA9IHtcbiAgICAgIHVzZXI6IFZhcmlhYmxlLmlucHV0TmFtZS52YWx1ZSxcbiAgICAgIHNjb3JlOiBWYXJpYWJsZS5pbnB1dFNjb3JlLnZhbHVlLFxuICAgIH07XG4gICAgYWRkTmV3U2NvcmUoc2NvcmVPYmplY3QpO1xuICAgIFZhcmlhYmxlLmZvcm1TdWJtaXQucmVzZXQoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBpbml0aWFsaXplU2NvcmVSZWFkZXIgPSBhc3luYyAoKSA9PiB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgcmVhZFNjb3Jlcyk7XG59O1xuXG5jb25zdCByZWZyZXNBbGxMaXN0ZW5lciA9ICgpID0+IHtcbiAgVmFyaWFibGUuYnRuUmVmcmVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVhZFNjb3Jlcyk7XG59O1xuXG5leHBvcnQge1xuICBpbml0aWFsaXplU2NvcmVPcGVyYXRpb25zTGlzdGVuZXIsIHJlYWRTY29yZXMsIGluaXRpYWxpemVTY29yZVJlYWRlciwgcmVmcmVzQWxsTGlzdGVuZXIsXG59O1xuIiwiaW1wb3J0ICogYXMgVmFyaWFibGUgZnJvbSAnLi9nbG9iYWx2YXIuanMnO1xuXG5jb25zdCB0aGVtZUZ1bmN0aW9uID0gKGVsZW1lbnQpID0+IHtcbiAgbGV0IHRoZW1lID0gWyd1cmwoXFxcIi4uL3NyYy9waWN0dXJlcy9vYml0by5qcGdcXFwiKScsICd1cmwoXFxcIi4uL3NyYy9waWN0dXJlcy9tYWRhcmEuanBnXFxcIiknXTtcbiAgaWYgKGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID09PSB0aGVtZVswXSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiTmFydXRvVGhlbWVcIiwgdGhlbWVbMV0pO1xuICB9IGVsc2Uge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiTmFydXRvVGhlbWVcIiwgdGhlbWVbMF0pO1xuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRCYWNrZ3JvdW5kID0gKCkgPT4ge1xuICBsZXQgdGhlbWUgPSBbJ3VybChcXFwiLi4vc3JjL3BpY3R1cmVzL29iaXRvLmpwZ1xcXCIpJywgJ3VybChcXFwiLi4vc3JjL3BpY3R1cmVzL21hZGFyYS5qcGdcXFwiKSddO1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJOYXJ1dG9UaGVtZVwiKSA9PT0gbnVsbCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiTmFydXRvVGhlbWVcIiwgdGhlbWVbMF0pO1xuICB9XG59XG5cbmNvbnN0IGluaXRpYWxpemVCYWNrZ3JvdW5kID0gKCkgPT4ge1xuICBkZWZhdWx0QmFja2dyb3VuZCgpO1xuICBjb25zdCB0aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiTmFydXRvVGhlbWVcIik7XG4gIFZhcmlhYmxlLmJvZHlDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gdGhlbWU7XG4gIFZhcmlhYmxlLmJvZHlDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnMTAwJSc7XG59XG5cbmNvbnN0IHRoZW1lRnVuY3Rpb25MaXN0ZW5lciA9ICgpID0+IHtcbiAgVmFyaWFibGUuYnRuVGhlbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdGhlbWVGdW5jdGlvbihWYXJpYWJsZS5ib2R5Q29udGFpbmVyKTtcbiAgICBpbml0aWFsaXplQmFja2dyb3VuZCgpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgaW5pdGlhbGl6ZUJhY2tncm91bmQsIHRoZW1lRnVuY3Rpb25MaXN0ZW5lciB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
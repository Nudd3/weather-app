/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/background.jpg */ "./src/assets/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Unbounded:wght@300&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n}\n\nhtml, body {\n  height: 100%;\n}\n\nbody {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-repeat: repeat;\n  background-position: center;\n  color: #f1f5f9;\n  font-family: \"Unbounded\", cursive, sans-serif;\n}\n\n.main-container {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n@media (max-width: 500px) {\n  .main-container {\n    justify-content: center;\n    gap: 2rem;\n  }\n}\n\n.upper-container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3rem;\n}\n@media (max-width: 500px) {\n  .upper-container {\n    padding-top: 2rem;\n    gap: 1rem;\n  }\n}\n\n.info {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n}\n@media (max-width: 500px) {\n  .info {\n    padding-top: 2rem;\n    gap: 1rem;\n  }\n}\n\n.search-section {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n\n#search {\n  appearance: none;\n  border: none;\n  border-radius: 8px;\n  color: #f1f5f9;\n  font-size: 1.5em;\n  text-align: center;\n  padding: 5px;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.466);\n}\n#search:focus {\n  outline: none;\n  background-color: rgba(209, 209, 209, 0.466);\n}\n#search:hover {\n  background-color: rgba(209, 209, 209, 0.466);\n}\n#search::placeholder {\n  color: #f1f5f9;\n}\n\n#searchIcon {\n  cursor: pointer;\n}\n\n#cityName {\n  font-size: 4rem;\n  font-family: \"Unbounded\", cursive, sans-serif;\n}\n@media (max-width: 500px) {\n  #cityName {\n    font-size: 2rem;\n  }\n}\n\n.temp-display {\n  display: flex;\n  font-size: 2.5rem;\n  font-family: \"Unbounded\", cursive, sans-serif;\n  font-weight: 1000;\n}\n.temp-display span {\n  font-weight: 700;\n}\n@media (max-width: 500px) {\n  .temp-display {\n    font-size: 1rem;\n  }\n}\n\n.lower-container {\n  height: 100%;\n  align-self: center;\n  justify-self: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5rem;\n  padding: 0 2rem;\n}\n@media (max-width: 1500px) {\n  .lower-container {\n    width: 80%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 0;\n    justify-items: center;\n    align-content: center;\n  }\n}\n@media (max-width: 756px) {\n  .lower-container {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 0;\n  }\n}\n@media (max-width: 500px) {\n  .lower-container {\n    gap: 0;\n  }\n}\n\n.info-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 300px;\n  height: 250px;\n  gap: 1rem;\n}\n.info-container .info-text {\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n@media (max-width: 500px) {\n  .info-container .info-text {\n    font-size: 1.3rem;\n  }\n}\n@media (max-width: 756px) {\n  .info-container {\n    height: 150px;\n  }\n}\n@media (max-width: 500px) {\n  .info-container {\n    font-size: 0.4rem;\n    height: 75px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAOA;EACE,UAAA;EACA,SAAA;AALF;;AAOA;EACE,YAAA;AAJF;;AAMA;EACE,4HAAA;EAMA,sBAAA;EACA,yBAAA;EACA,2BAAA;EACA,cAvBc;EAwBd,6CAvBW;AAeb;;AAgBA;EACE,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,mBAAA;AAbF;AAkBE;EAVF;IAWI,uBAAA;IACA,SAAA;EAfF;AACF;;AAmBA;EACE,YAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;AAhBF;AAkBE;EARF;IASI,iBAAA;IACA,SAAA;EAfF;AACF;;AAmBA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;AAhBF;AAkBE;EAPF;IAQI,iBAAA;IACA,SAAA;EAfF;AACF;;AAmBA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,QAAA;AAjBF;;AAoBA;EACE,gBAAA;EACA,YAAA;EACA,kBAAA;EACA,cA1Fc;EA2Fd,gBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,4CAAA;AAjBF;AAmBE;EACE,aAAA;EACA,4CAAA;AAjBJ;AAoBE;EACE,4CAAA;AAlBJ;AAqBE;EACE,cA3GY;AAwFhB;;AAuBA;EACE,eAAA;AApBF;;AAuBA;EACE,eAAA;EACA,6CApHW;AAgGb;AAuBE;EALF;IAMI,eAAA;EApBF;AACF;;AAuBA;EACE,aAAA;EACA,iBAAA;EACA,6CA/HW;EAgIX,iBAAA;AApBF;AAsBE;EACE,gBAAA;AApBJ;AAuBE;EAVF;IAWI,eAAA;EApBF;AACF;;AAuBA;EACE,YAAA;EACA,kBAAA;EACA,oBAAA;EACA,aAAA;EAEA,mBAAA;EACA,uBAAA;EACA,SAAA;EACA,eAAA;AArBF;AAuBE;EAXF;IAYI,UAAA;IACA,aAAA;IACA,8BAAA;IACA,2BAAA;IACA,MAAA;IACA,qBAAA;IACA,qBAAA;EApBF;AACF;AAsBE;EArBF;IAsBI,WAAA;IACA,aAAA;IACA,sBAAA;IACA,mBAAA;IACA,uBAAA;IACA,MAAA;EAnBF;AACF;AAqBE;EA9BF;IA+BI,MAAA;EAlBF;AACF;;AAsBA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,SAAA;AAnBF;AAqBE;EACE,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AAnBJ;AAqBI;EAPF;IAQI,iBAAA;EAlBJ;AACF;AAqBE;EApBF;IAqBI,aAAA;EAlBF;AACF;AAoBE;EAxBF;IAyBI,iBAAA;IACA,YAAA;EAjBF;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@300&display=swap');\n$primary-color: #f1f5f9;\n$font-stack: 'Unbounded', cursive, sans-serif;\n$screen-l: 1500px;\n$screen-m: 0;\n$screen-s: 756px;\n$screen-xs: 500px;\n* {\n  padding: 0;\n  margin: 0;\n}\nhtml, body {\n  height: 100%;\n}\nbody {\n  background-image: linear-gradient(\n      to right,\n      rgba(black, 0.4),\n      rgba(black, 0.4)\n    ),\n    url('../assets/background.jpg');\n  background-size: cover;\n  background-repeat: repeat;\n  background-position: center;\n  color: $primary-color;\n  font-family: $font-stack;\n\n  // @media (max-width: 700px) {\n  //   height: auto;\n  // }\n\n}\n\n.main-container {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  // grid-template-rows: 1.5fr 1fr;\n\n  // min-height: 100vh;\n\n  @media (max-width: $screen-xs) {\n    justify-content: center;\n    gap: 2rem;\n  }\n  \n}\n\n.upper-container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3rem;\n\n  @media (max-width: $screen-xs) {\n    padding-top: 2rem;\n    gap: 1rem;\n  }\n\n}\n\n.info {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n\n  @media (max-width: $screen-xs) {\n    padding-top: 2rem;\n    gap: 1rem;\n  }\n  \n}\n\n.search-section {\n  display:flex;\n  align-items: center;\n  justify-content: center;\n  //border-bottom: 2px solid $primary-color;\n  gap: 5px;\n}\n\n#search {\n  appearance: none;\n  border: none;\n  border-radius: 8px;\n  color: $primary-color;\n  font-size: 1.5em;\n  text-align: center;\n  padding: 5px;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.466);\n\n  &:focus {\n    outline: none;\n    background-color: rgba(209, 209, 209, 0.466);\n  }\n\n  &:hover {\n    background-color: rgba(209, 209, 209, 0.466);\n  }\n\n  &::placeholder {\n    color: $primary-color;\n  }\n}\n\n#searchIcon {\n  cursor: pointer;\n}\n\n#cityName {\n  font-size: 4rem;\n  font-family: $font-stack;\n\n\n  @media (max-width: $screen-xs) {\n    font-size: 2rem;\n  }\n}\n\n.temp-display {\n  display: flex;\n  font-size: 2.5rem;\n  font-family: $font-stack;\n  font-weight: 1000;\n\n  span {\n    font-weight: 700;\n  }\n\n  @media (max-width: $screen-xs) {\n    font-size: 1rem;\n  }\n}\n\n.lower-container {\n  height: 100%;\n  align-self: center;\n  justify-self: center;\n  display: flex;\n  \n  align-items: center;\n  justify-content: center;\n  gap: 5rem;\n  padding: 0 2rem;\n\n  @media(max-width: $screen-l) {\n    width: 80%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 0;\n    justify-items: center;\n    align-content: center;\n  }\n\n  @media (max-width: $screen-s) {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 0;\n  }\n\n  @media (max-width: $screen-xs){\n    gap: 0;\n  }\n \n}\n\n.info-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 300px;\n  height: 250px;\n  gap: 1rem;\n\n  .info-text {\n    font-size: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    @media (max-width: $screen-xs) {\n      font-size: 1.3rem;\n    }\n  }\n\n  @media (max-width: $screen-s) {\n    height: 150px;\n  }\n\n  @media (max-width: $screen-xs){\n    font-size: 0.4rem;\n    height: 75px;\n  }\n  \n}\n"],"sourceRoot":""}]);
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/js/api-functions.js":
/*!*********************************!*\
  !*** ./src/js/api-functions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collectDataFromForm": () => (/* binding */ collectDataFromForm),
/* harmony export */   "getCoords": () => (/* binding */ getCoords),
/* harmony export */   "getWeather": () => (/* binding */ getWeather)
/* harmony export */ });
// What needs to be done?
// Call two different apis
// First one to get coordinates to a specific city
// Second one to get the weather from that city
function collectDataFromForm() {
  const inputField = document.getElementById('search');
  const cityName = inputField.value;
  // Clear up input from empty spaces/symbols
  
  return cityName;
}

async function getCoords(city) {
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=41be00f526a0aecf69af7a7fd13a78d9`
  const response = await fetch(url, {mode: 'cors'});
  const data = await response.json();
  //const coord = data[0];
  const coord = {
    lat: data[0].lat,
    lon: data[0].lon
  };
  
  return coord;
}

async function getWeather(lat, lon) {
  const url =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=41be00f526a0aecf69af7a7fd13a78d9`;
  const cityRequest = await fetch(url, {mode: 'cors'});
  const city = await cityRequest.json();

  //return city.main.temp;
  return city;
}




/***/ }),

/***/ "./src/js/dom-functions.js":
/*!*********************************!*\
  !*** ./src/js/dom-functions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearPage": () => (/* binding */ clearPage),
/* harmony export */   "displayCity": () => (/* binding */ displayCity),
/* harmony export */   "displayWeatherInfo": () => (/* binding */ displayWeatherInfo)
/* harmony export */ });
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/utilities */ "./src/js/utilities.js");
//import * as utils from '..js/utilities'


function displayCity(weatherInfo) {
  const cityName = document.getElementById('cityName');
  const searchField = document.getElementById('search')

  const city = weatherInfo.name;
  const country = weatherInfo.sys.country;

  cityName.innerHTML = `${city}, ${country}`;
  searchField.value = null;
  searchField.placeholder = searchField.placeholder;
}

function displayWeatherInfo(weatherInfo) {
  displayTemp(weatherInfo);

  displayMain(weatherInfo);
  displayFeelsLike(weatherInfo);
  displayHumidity(weatherInfo);
  displayWindSpeed(weatherInfo);
  
}

function displayTemp(weatherInfo) {
  const tempSection = document.querySelector('.temp-section');
  
  const temp = document.createElement('div');
  temp.classList.add('temp-display');

  temp.innerHTML = `
  <h1>${weatherInfo.main.temp}</h1>
  <span>&#8451;</span>
  `;

  tempSection.appendChild(temp);
}

/**
 * info-container feels-like
 *  // dom
 *  (icon)
 *  ((text) + (temp))
 * 
 */
function displayFeelsLike(weatherInfo) {
  console.log(weatherInfo);
  const container = document.querySelector('.feels-like');
  const iconContainer = document.createElement('div');
  iconContainer.classList.add('temp-icon');
  iconContainer.innerHTML = _js_utilities__WEBPACK_IMPORTED_MODULE_0__.infoIcons('feels like');


  const infoContainer = document.createElement('div');
  infoContainer.classList.add('info-text');
  const text = document.createElement('div');
  const temp = document.createElement('div');
  text.innerHTML = 'Feels Like';
  temp.innerHTML = `${weatherInfo.main.feels_like} <span>&#8451;</span>`;

  infoContainer.appendChild(text);
  infoContainer.appendChild(temp);


  container.appendChild(iconContainer);
  container.appendChild(infoContainer);

}

function displayMain(weatherInfo) {
  const container = document.querySelector('.main');
  const iconContainer = document.createElement('div');
  iconContainer.innerHTML = _js_utilities__WEBPACK_IMPORTED_MODULE_0__.weatherIcons(weatherInfo.weather[0].main.toLowerCase());


  const infoContainer = document.createElement('div');
  infoContainer.classList.add('info-text');
  const text = document.createElement('div');
  text.innerHTML = weatherInfo.weather[0].main;

  infoContainer.appendChild(text);


  container.appendChild(iconContainer);
  container.appendChild(infoContainer);

}
function displayHumidity(weatherInfo) {
  const container = document.querySelector('.humidity');
  const iconContainer = document.createElement('div');
  iconContainer.innerHTML = _js_utilities__WEBPACK_IMPORTED_MODULE_0__.infoIcons('humidity');


  const infoContainer = document.createElement('div');
  infoContainer.classList.add('info-text');
  const text = document.createElement('div');
  const temp = document.createElement('div');
  text.innerHTML = 'Humidity';
  temp.innerHTML = `${weatherInfo.main.humidity} %`;

  infoContainer.appendChild(text);
  infoContainer.appendChild(temp);


  container.appendChild(iconContainer);
  container.appendChild(infoContainer);
}

function displayWindSpeed(weatherInfo) {
  const container = document.querySelector('.wind-speed');
  const iconContainer = document.createElement('div');
  iconContainer.innerHTML = _js_utilities__WEBPACK_IMPORTED_MODULE_0__.infoIcons('wind speed');


  const infoContainer = document.createElement('div');
  infoContainer.classList.add('info-text');
  const text = document.createElement('div');
  const temp = document.createElement('div');
  text.innerHTML = 'Wind Speed';
  temp.innerHTML = `${weatherInfo.wind.speed} km/h`;

  infoContainer.appendChild(text);
  infoContainer.appendChild(temp);


  container.appendChild(iconContainer);
  container.appendChild(infoContainer);
}

function clearPage() {
  const cityName = document.getElementById('cityName');
  cityName.innerHTML = '';

  const tempSection = document.querySelector('.temp-section');
  tempSection.innerHTML = '';

  const mainContainer = document.querySelector('.main');
  mainContainer.innerHTML = '';

  const feelsLikeContainer = document.querySelector('.feels-like');
  feelsLikeContainer.innerHTML = '';

  const windSpeedContainer = document.querySelector('.wind-speed');
  windSpeedContainer.innerHTML = '';

  const humidityContainer = document.querySelector('.humidity');
  humidityContainer.innerHTML = '';

}



  
  

/***/ }),

/***/ "./src/js/utilities.js":
/*!*****************************!*\
  !*** ./src/js/utilities.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "infoIcons": () => (/* binding */ infoIcons),
/* harmony export */   "weatherIcons": () => (/* binding */ weatherIcons)
/* harmony export */ });
function weatherIcons(weather) {
  switch (weather) {
    case 'clear sky':
      return '<i class="fa-regular fa-sun fa-4x"></i>';
    case 'clouds':
      return '<i class="fa-solid fa-cloud-sun fa-5x"></i>';
    case 'scattered clouds':
      return '<i class="fa-regular fa-cloud fa-5x"></i>';
    case 'broken clouds':
      return '<i class="fa-regular fa-clouds fa-5x"></i>';

    case 'shower rain':
      return '<i class="fa-solid fa-cloud-showers fa-5x"></i>';

    case 'rain':
      return '<i class="fa-solid fa-cloud-rain fa-5x"></i>';

    case 'thunderstorm':
      return '<i class="fa-solid fa-cloud-bolt fa-5x"></i>';

    case 'snow':
      return '<i class="fa-light fa-cloud-snow fa-5x"></i>';

    case 'mist':
      return '<i class="fa-solid fa-bars-staggered fa-5x"></i>';
  }
}

function infoIcons(info) {
  switch (info) {
    case 'feels like':
      return '<i class="fa-solid fa-temperature-quarter fa-5x"></i>';
    case 'humidity':
      return '<i class="fa-solid fa-water fa-5x"></i>';
    case 'wind speed':
      return '<i class="fa-solid fa-wind fa-5x"></i>';
  }
}




/***/ }),

/***/ "./src/assets/background.jpg":
/*!***********************************!*\
  !*** ./src/assets/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be3ac8c92f74564819c8.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _js_api_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/api-functions */ "./src/js/api-functions.js");
/* harmony import */ var _js_dom_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/dom-functions */ "./src/js/dom-functions.js");




const searchIcon = document.getElementById('searchIcon');

searchIcon.addEventListener('click', () => {
  displayInfo();
});

async function displayInfo() {
  _js_dom_functions__WEBPACK_IMPORTED_MODULE_2__.clearPage();
  // Collect Data
  const city = _js_api_functions__WEBPACK_IMPORTED_MODULE_1__.collectDataFromForm();
  const coords = await _js_api_functions__WEBPACK_IMPORTED_MODULE_1__.getCoords(city);
  const weatherInfo = await _js_api_functions__WEBPACK_IMPORTED_MODULE_1__.getWeather(coords.lat, coords.lon);
  
  // Display City Info
  _js_dom_functions__WEBPACK_IMPORTED_MODULE_2__.displayCity(weatherInfo);
  // console.log(weatherInfo);
  
  // Display Weather Info
  _js_dom_functions__WEBPACK_IMPORTED_MODULE_2__.displayWeatherInfo(weatherInfo);

}

// main: feels like/humidity/temp
// weather: main/description


// Initial Loadup -> New York
async function initialLoad() {
  const coords = await _js_api_functions__WEBPACK_IMPORTED_MODULE_1__.getCoords('New York');
  const weatherInfo = await _js_api_functions__WEBPACK_IMPORTED_MODULE_1__.getWeather(coords.lat, coords.lon);
  _js_dom_functions__WEBPACK_IMPORTED_MODULE_2__.displayCity(weatherInfo);
  _js_dom_functions__WEBPACK_IMPORTED_MODULE_2__.displayWeatherInfo(weatherInfo);
}

initialLoad();

})();

/******/ })()
;
//# sourceMappingURL=bundle08a1968faa5b56c20c63.js.map
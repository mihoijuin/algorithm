/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./startbook/src/hash.js":
/*!*******************************!*\
  !*** ./startbook/src/hash.js ***!
  \*******************************/
/*! exports provided: calcHash, createHashTable, hashing, showResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calcHash\", function() { return calcHash; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createHashTable\", function() { return createHashTable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hashing\", function() { return hashing; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showResult\", function() { return showResult; });\nvar createResultElement = function createResultElement(content) {\n  var resultId = 'searchResult';\n  var resultElm = document.getElementById(resultId);\n\n  if (resultElm != null) {\n    resultElm.textContent = content;\n  } else {\n    var div = document.createElement('div');\n    div.setAttribute('id', resultId);\n    div.textContent = content;\n    var element = document.getElementById('hashForm');\n    if (element != null) element.parentNode.insertBefore(div, element.nextSibling);\n  }\n};\n\nvar calcHash = function calcHash(num, divident) {\n  return num % divident;\n};\nvar createHashTable = function createHashTable() {\n  var arrayD = [12, 25, 36, 20, 30, 8, 42];\n  var arrayH = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];\n  var divident = arrayH.length;\n\n  for (var i = 0; i < arrayD.length; i++) {\n    var value = arrayD[i];\n    var k = calcHash(value, divident);\n\n    while (arrayH[k] != 0) {\n      k = calcHash(k + 1, divident);\n    }\n\n    arrayH[k] = value;\n  }\n\n  console.log(arrayH);\n  return arrayH;\n};\nvar hashing = function hashing(inputNum, arrayH) {\n  var divident = arrayH.length;\n  var k = calcHash(inputNum, divident);\n\n  while (arrayH[k] != inputNum) {\n    k = calcHash(k + 1, divident);\n    if (arrayH[k] == 0) return null;\n  }\n\n  return k;\n};\nvar showResult = function showResult() {\n  var inputValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var form = document.forms.hashForm;\n  if (form != null) inputValue = form.inputHash.value;\n\n  if (isNaN(inputValue)) {\n    createResultElement(\"数値を入力してね\");\n    return null;\n  }\n\n  var inputNum = parseInt(inputValue, 10);\n  var arrayH = createHashTable();\n  var result = hashing(inputNum, arrayH);\n\n  if (result == null) {\n    createResultElement(\"入力した数値はデータ内に存在しないよ\");\n  } else {\n    createResultElement(result + \"番目にデータがあるよ\");\n  }\n\n  return result;\n};\nwindow.showResult = showResult;\n\n//# sourceURL=webpack:///./startbook/src/hash.js?");

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./startbook/src/hash.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./startbook/src/hash.js */\"./startbook/src/hash.js\");\n\n\n//# sourceURL=webpack:///multi_./startbook/src/hash.js?");

/***/ })

/******/ });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./css/style.css?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _task1_task1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task1/task1 */ \"./js/task1/task1.js\");\n/* harmony import */ var _task2_task2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task2/task2 */ \"./js/task2/task2.js\");\n/* harmony import */ var _task3_task3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task3/task3 */ \"./js/task3/task3.js\");\n\n\n\n\nObject(_task1_task1__WEBPACK_IMPORTED_MODULE_1__[\"Task1\"])();\nObject(_task2_task2__WEBPACK_IMPORTED_MODULE_2__[\"Task2\"])();\nObject(_task3_task3__WEBPACK_IMPORTED_MODULE_3__[\"Task3\"])();\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/task1/task1.js":
/*!***************************!*\
  !*** ./js/task1/task1.js ***!
  \***************************/
/*! exports provided: Task1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Task1\", function() { return Task1; });\nfunction Task1() {\n  var element = document.querySelector('.wrapper');\n  var fragmant = document.createDocumentFragment();\n  var fields = ['Sum', 'Price'];\n  var heading = document.createElement('h2');\n  heading.textContent = 'Task 1';\n  fragmant.appendChild(heading);\n  fields.forEach(function (field) {\n    var input = document.createElement('input');\n    input.classList.add(field.toLocaleLowerCase());\n    input.setAttribute(\"id\", field.toLocaleLowerCase());\n    input.setAttribute(\"placeholder\", \"\".concat(field, \" entry\"));\n    input.setAttribute(\"type\", 'number');\n    input.setAttribute(\"step\", '0.01');\n    input.setAttribute(\"min\", '0');\n    fragmant.appendChild(input);\n  });\n  var button = document.createElement('button');\n  button.textContent = 'Return the rest';\n  fragmant.appendChild(button);\n  var result = document.createElement('div');\n  result.setAttribute(\"id\", 'result');\n  fragmant.appendChild(result);\n  button.addEventListener(\"click\", calc);\n  element.appendChild(fragmant);\n\n  function calc() {\n    var sum = fragmant.ownerDocument.all.namedItem('sum');\n    var price = fragmant.ownerDocument.all.namedItem('price');\n    var result = fragmant.ownerDocument.all.namedItem('result');\n    var rest = (sum.value - price.value).toFixed(2);\n    var dollars = parseInt(rest) >= 2 ? \"\".concat(parseInt(rest), \" dollars\") : parseInt(rest) == 1 ? \"\".concat(parseInt(rest), \" dollar\") : '';\n    var cents = parseInt(rest.toString().split('.')[1]);\n    var cent = cents >= 2 ? \", \".concat(cents, \" cents\") : cents == 1 ? \", \".concat(cents, \" cent\") : '';\n\n    if (rest >= 0) {\n      result.textContent = \"Your rest is \".concat(dollars && dollars, \" \").concat(cent && cent);\n    } else {\n      alert('You entered an incorrect value');\n      sum.value = 0;\n      price.value = 0;\n    }\n  }\n}\n\n//# sourceURL=webpack:///./js/task1/task1.js?");

/***/ }),

/***/ "./js/task2/base.js":
/*!**************************!*\
  !*** ./js/task2/base.js ***!
  \**************************/
/*! exports provided: $ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$\", function() { return $; });\nvar $ = {};\n\n//# sourceURL=webpack:///./js/task2/base.js?");

/***/ }),

/***/ "./js/task2/modal.js":
/*!***************************!*\
  !*** ./js/task2/modal.js ***!
  \***************************/
/*! exports provided: ModalWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModalWindow\", function() { return ModalWindow; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./js/task2/base.js\");\n\nfunction ModalWindow() {\n  function _createModal(option) {\n    var modal = document.createElement('div');\n    modal.classList.add('modal');\n    modal.insertAdjacentHTML('afterbegin', \" \\n            <div class=\\\"modal-overlay\\\" data-close=\\\"true\\\">\\n              <div class=\\\"modal-window\\\">\\n                <div class=\\\"modal-header\\\">\\n                  <span class=\\\"modal-title\\\">Modal window</span>\\n                  <span class=\\\"modal-close\\\" data-close=\\\"true\\\">&times;</span>\\n                </div>\\n                <div class=\\\"modal-body\\\">\\n                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.\\n                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley\\n                    of type and scrambled it to make a type specimen book.</p>\\n                </div>\\n              </div>\\n            </div>\\n        \");\n    document.body.appendChild(modal);\n    return modal;\n  }\n\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"$\"].modal = function (option) {\n    var ANIMATION_SPEED = 200;\n\n    var $modal = _createModal(option);\n\n    var closing = false;\n    var _destroy = false;\n    var modal = {\n      open: function open() {\n        if (_destroy) {\n          return console.log('Modal is destroyed');\n        }\n\n        !closing && $modal.classList.add('open');\n      },\n      close: function close() {\n        closing = true;\n        $modal.classList.remove('open');\n        $modal.classList.add('hide');\n        setTimeout(function () {\n          $modal.classList.remove('hide');\n          closing = false;\n        }, ANIMATION_SPEED);\n      }\n    };\n\n    var listner = function listner(event) {\n      if (event.target.dataset.close) {\n        modal.close();\n        modal.destroy();\n      }\n    };\n\n    $modal.addEventListener('click', listner);\n    return Object.assign(modal, {\n      destroy: function destroy() {\n        $modal.parentNode.removeChild($modal);\n        $modal.removeEventListener('click', listner);\n        _destroy = true;\n      }\n    });\n  };\n}\n\n//# sourceURL=webpack:///./js/task2/modal.js?");

/***/ }),

/***/ "./js/task2/task2.js":
/*!***************************!*\
  !*** ./js/task2/task2.js ***!
  \***************************/
/*! exports provided: Task2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Task2\", function() { return Task2; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./js/task2/base.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ \"./js/task2/modal.js\");\n\n\nObject(_modal__WEBPACK_IMPORTED_MODULE_1__[\"ModalWindow\"])();\nfunction Task2() {\n  function createModal() {\n    var modal = _base__WEBPACK_IMPORTED_MODULE_0__[\"$\"].modal();\n    modal.open();\n  }\n\n  var element = document.querySelector('.wrapper');\n  var fragmant = document.createDocumentFragment();\n  var heading = document.createElement('h2');\n  heading.textContent = 'Task 2';\n  fragmant.appendChild(heading);\n  var button = document.createElement('button');\n  button.textContent = 'Open Modal Window';\n  button.classList.add('open-modul__btn');\n  fragmant.appendChild(button);\n  element.appendChild(fragmant);\n  button.addEventListener(\"click\", createModal);\n}\n\n//# sourceURL=webpack:///./js/task2/task2.js?");

/***/ }),

/***/ "./js/task3/task3.js":
/*!***************************!*\
  !*** ./js/task3/task3.js ***!
  \***************************/
/*! exports provided: Task3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Task3\", function() { return Task3; });\nfunction Task3() {\n  var element = document.querySelector('.wrapper');\n  var fragmant = document.createDocumentFragment();\n  var heading = document.createElement('h2');\n  heading.textContent = 'Task 3';\n  fragmant.appendChild(heading);\n  var fields = ['Name', 'Surname', 'Email', 'Date'];\n  var form = document.createElement('form');\n  fields.forEach(function (field) {\n    var input = document.createElement('input');\n    input.classList.add(field.toLocaleLowerCase());\n    input.setAttribute(\"id\", field.toLocaleLowerCase());\n    input.required = true;\n    input.setAttribute(\"placeholder\", \"\".concat(field, \" entry\"));\n    input.setAttribute(\"type\", field);\n    form.appendChild(input);\n  });\n  var button = document.createElement('button');\n  button.textContent = 'Add to table';\n  button.setAttribute(\"type\", 'submit');\n  ;\n  form.appendChild(button);\n  fragmant.appendChild(form);\n  var table = document.createElement('div');\n  var hedindT = document.createElement('h3');\n  var row = document.createElement('div');\n  table.classList.add('table');\n  row.classList.add('row');\n  hedindT.textContent = 'Table';\n  table.appendChild(hedindT);\n  table.appendChild(row);\n  fields.forEach(function (field) {\n    var div = document.createElement('div');\n    div.textContent = field;\n    div.classList.add(field.toLocaleLowerCase(), 'table-item');\n    row.appendChild(div);\n  });\n  fragmant.appendChild(table);\n\n  function addToTable(e) {\n    e.preventDefault();\n    var row = document.createElement('div');\n    row.classList.add('row');\n    fields.forEach(function (field) {\n      var div = document.createElement('div');\n      var valueField = field.toLocaleLowerCase() + \"\";\n      div.textContent = fragmant.ownerDocument.all.namedItem(\"\".concat(valueField)).value;\n      div.classList.add(field.toLocaleLowerCase(), 'table-item');\n      row.appendChild(div);\n    });\n    table.appendChild(row);\n  }\n\n  button.addEventListener(\"click\", function (e) {\n    return addToTable(e);\n  });\n  element.appendChild(fragmant);\n}\n\n//# sourceURL=webpack:///./js/task3/task3.js?");

/***/ })

/******/ });
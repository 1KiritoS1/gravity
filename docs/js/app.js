/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./src/js/main.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_js__WEBPACK_IMPORTED_MODULE_1__);\n\n/* Your JS Code goes here */\n\n/* Demo JS */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYXJlYXRobG9uL2Zyb250ZW5kLXdlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvYXBwLmpzPzkwZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zY3NzL2FwcC5zY3NzJztcblxuLyogWW91ciBKUyBDb2RlIGdvZXMgaGVyZSAqL1xuXG4vKiBEZW1vIEpTICovXG5pbXBvcnQgJy4vbWFpbi5qcyc7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("$(function () {\n  $('.works-carousel').owlCarousel({\n    loop: true,\n    margin: 30,\n    nav: true,\n    dots: false,\n    navText: ['<img src=\"images/content/left.svg\">', '<img src=\"images/content/right.svg\">'],\n    startPosition: 1,\n    responsive: {\n      0: {\n        items: 1\n      },\n      600: {\n        items: 1\n      },\n      1000: {\n        items: 1\n      }\n    }\n  });\n  $('.contributor-carousel').owlCarousel({\n    loop: true,\n    margin: 0,\n    nav: true,\n    dots: false,\n    navText: ['<img src=\"images/content/left.svg\">', '<img src=\"images/content/right.svg\">'],\n    //startPosition: 1,\n    responsive: {\n      0: {\n        items: 1\n      },\n      600: {\n        items: 1\n      },\n      1000: {\n        items: 1\n      }\n    }\n  });\n  $('ul.tabs__caption').on('click', 'li:not(.active)', function (e) {\n    e.preventDefault();\n    $(this).addClass('active').siblings().removeClass('active').closest('section.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9tYWluLmpzPzkyOTEiXSwibmFtZXMiOlsiJCIsIm93bENhcm91c2VsIiwibG9vcCIsIm1hcmdpbiIsIm5hdiIsImRvdHMiLCJuYXZUZXh0Iiwic3RhcnRQb3NpdGlvbiIsInJlc3BvbnNpdmUiLCJpdGVtcyIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWRkQ2xhc3MiLCJzaWJsaW5ncyIsInJlbW92ZUNsYXNzIiwiY2xvc2VzdCIsImZpbmQiLCJlcSIsImluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQUEsQ0FBQyxDQUFDLFlBQVc7QUFDWkEsRUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJDLFdBQXJCLENBQWlDO0FBQzdCQyxJQUFBQSxJQUFJLEVBQUMsSUFEd0I7QUFFN0JDLElBQUFBLE1BQU0sRUFBQyxFQUZzQjtBQUc3QkMsSUFBQUEsR0FBRyxFQUFDLElBSHlCO0FBSTdCQyxJQUFBQSxJQUFJLEVBQUMsS0FKd0I7QUFLN0JDLElBQUFBLE9BQU8sRUFBRSxDQUFDLHFDQUFELEVBQXdDLHNDQUF4QyxDQUxvQjtBQU03QkMsSUFBQUEsYUFBYSxFQUFFLENBTmM7QUFPN0JDLElBQUFBLFVBQVUsRUFBQztBQUNQLFNBQUU7QUFDRUMsUUFBQUEsS0FBSyxFQUFDO0FBRFIsT0FESztBQUlQLFdBQUk7QUFDQUEsUUFBQUEsS0FBSyxFQUFDO0FBRE4sT0FKRztBQU9QLFlBQUs7QUFDREEsUUFBQUEsS0FBSyxFQUFDO0FBREw7QUFQRTtBQVBrQixHQUFqQztBQW9CQVQsRUFBQUEsQ0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJDLFdBQTNCLENBQXVDO0FBQ25DQyxJQUFBQSxJQUFJLEVBQUMsSUFEOEI7QUFFbkNDLElBQUFBLE1BQU0sRUFBQyxDQUY0QjtBQUduQ0MsSUFBQUEsR0FBRyxFQUFDLElBSCtCO0FBSW5DQyxJQUFBQSxJQUFJLEVBQUMsS0FKOEI7QUFLbkNDLElBQUFBLE9BQU8sRUFBRSxDQUFDLHFDQUFELEVBQXdDLHNDQUF4QyxDQUwwQjtBQU1uQztBQUNBRSxJQUFBQSxVQUFVLEVBQUM7QUFDUCxTQUFFO0FBQ0VDLFFBQUFBLEtBQUssRUFBQztBQURSLE9BREs7QUFJUCxXQUFJO0FBQ0FBLFFBQUFBLEtBQUssRUFBQztBQUROLE9BSkc7QUFPUCxZQUFLO0FBQ0RBLFFBQUFBLEtBQUssRUFBQztBQURMO0FBUEU7QUFQd0IsR0FBdkM7QUFvQkFULEVBQUFBLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCVSxFQUF0QixDQUF5QixPQUF6QixFQUFrQyxpQkFBbEMsRUFBcUQsVUFBU0MsQ0FBVCxFQUFZO0FBQ2hFQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDRVosSUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUNHYSxRQURILENBQ1ksUUFEWixFQUNzQkMsUUFEdEIsR0FDaUNDLFdBRGpDLENBQzZDLFFBRDdDLEVBRUdDLE9BRkgsQ0FFVyxjQUZYLEVBRTJCQyxJQUYzQixDQUVnQyxtQkFGaEMsRUFFcURGLFdBRnJELENBRWlFLFFBRmpFLEVBRTJFRyxFQUYzRSxDQUU4RWxCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1CLEtBQVIsRUFGOUUsRUFFK0ZOLFFBRi9GLENBRXdHLFFBRnhHO0FBR0QsR0FMRjtBQU9BLENBaERBLENBQUQiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCkge1xuXHQkKCcud29ya3MtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XG5cdCAgICBsb29wOnRydWUsXG5cdCAgICBtYXJnaW46MzAsXG5cdCAgICBuYXY6dHJ1ZSxcblx0ICAgIGRvdHM6ZmFsc2UsXG5cdCAgICBuYXZUZXh0OiBbJzxpbWcgc3JjPVwiaW1hZ2VzL2NvbnRlbnQvbGVmdC5zdmdcIj4nLCAnPGltZyBzcmM9XCJpbWFnZXMvY29udGVudC9yaWdodC5zdmdcIj4nXSxcblx0ICAgIHN0YXJ0UG9zaXRpb246IDEsXG5cdCAgICByZXNwb25zaXZlOntcblx0ICAgICAgICAwOntcblx0ICAgICAgICAgICAgaXRlbXM6MVxuXHQgICAgICAgIH0sXG5cdCAgICAgICAgNjAwOntcblx0ICAgICAgICAgICAgaXRlbXM6MVxuXHQgICAgICAgIH0sXG5cdCAgICAgICAgMTAwMDp7XG5cdCAgICAgICAgICAgIGl0ZW1zOjFcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdH0pO1xuXG5cdCQoJy5jb250cmlidXRvci1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcblx0ICAgIGxvb3A6dHJ1ZSxcblx0ICAgIG1hcmdpbjowLFxuXHQgICAgbmF2OnRydWUsXG5cdCAgICBkb3RzOmZhbHNlLFxuXHQgICAgbmF2VGV4dDogWyc8aW1nIHNyYz1cImltYWdlcy9jb250ZW50L2xlZnQuc3ZnXCI+JywgJzxpbWcgc3JjPVwiaW1hZ2VzL2NvbnRlbnQvcmlnaHQuc3ZnXCI+J10sXG5cdCAgICAvL3N0YXJ0UG9zaXRpb246IDEsXG5cdCAgICByZXNwb25zaXZlOntcblx0ICAgICAgICAwOntcblx0ICAgICAgICAgICAgaXRlbXM6MVxuXHQgICAgICAgIH0sXG5cdCAgICAgICAgNjAwOntcblx0ICAgICAgICAgICAgaXRlbXM6MVxuXHQgICAgICAgIH0sXG5cdCAgICAgICAgMTAwMDp7XG5cdCAgICAgICAgICAgIGl0ZW1zOjFcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdH0pO1xuXG5cdCQoJ3VsLnRhYnNfX2NhcHRpb24nKS5vbignY2xpY2snLCAnbGk6bm90KC5hY3RpdmUpJywgZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKHRoaXMpXG4gICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAuY2xvc2VzdCgnc2VjdGlvbi50YWJzJykuZmluZCgnZGl2LnRhYnNfX2NvbnRlbnQnKS5yZW1vdmVDbGFzcygnYWN0aXZlJykuZXEoJCh0aGlzKS5pbmRleCgpKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gIH0pO1xuXG59KTtcbiJdLCJmaWxlIjoiLi9zcmMvanMvbWFpbi5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9hcHAuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zY3NzL2FwcC5zY3NzPzYyOWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/app.scss\n");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;
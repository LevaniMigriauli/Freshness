/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script.js */ \"./src/js/script.js\");\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_script_js__WEBPACK_IMPORTED_MODULE_1__);\n\n/* Your JS Code goes here */\n\n/* Demo JS */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcz85MGU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3Njc3MvYXBwLnNjc3NcIjtcblxuLyogWW91ciBKUyBDb2RlIGdvZXMgaGVyZSAqL1xuXG4vKiBEZW1vIEpTICovXG5pbXBvcnQgXCIuL3NjcmlwdC5qc1wiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (() => {

eval(" // const { isAbsoluteURL } = require(\"webpack-dev-server\");\n// mobile navigation\n\nconst btnNavEl = document.querySelector(\".button-mobile-nav\");\nconst navigationEl = document.querySelector(\".navigation\");\nbtnNavEl.addEventListener(\"click\", function () {\n  navigationEl.classList.toggle(\"nav-open\");\n}); // Sticky navigation\n\nconst sectionHeroEl = document.querySelector(\".section-hero-slider\");\nconst obs = new IntersectionObserver(function (entries) {\n  const ent = entries[0];\n  console.log(ent);\n\n  if (ent.isIntersecting === false) {\n    document.body.classList.add(\"sticky\");\n  }\n\n  if (ent.isIntersecting === true) {\n    document.body.classList.remove(\"sticky\");\n  }\n}, {\n  // In the viewport\n  root: null,\n  threshold: 0,\n  rootMargin: \"-140px\"\n});\nobs.observe(sectionHeroEl); // Footer set current year\n\nconst yearEl = document.querySelector(\".year\");\nconst currentYear = new Date().getFullYear();\nyearEl.textContent = currentYear; // Slider\n\nconst slider = function () {\n  const slides = document.querySelectorAll(\".slide\");\n  const btnLeft = document.querySelector(\".slider__btn--left\");\n  const btnRight = document.querySelector(\".slider__btn--right\");\n  const dotContainer = document.querySelector(\".dots\");\n  let curSlide = 0;\n  const maxSlide = slides.length; // functions\n\n  const createDots = function () {\n    slides.forEach(function (_, i) {\n      dotContainer.insertAdjacentHTML(\"beforeend\", `<button class =\"dots__dot\" data-slide =\"${i}\"></button>`);\n    });\n  };\n\n  const activateDot = function (slide) {\n    document.querySelectorAll(\".dots__dot\").forEach(dot => dot.classList.remove(\"dots__dot--active\"));\n    document.querySelector(`.dots__dot[data-slide=\"${slide}\"]`).classList.add(\"dots__dot--active\");\n  };\n\n  const goToSlide = function (slide) {\n    slides.forEach((s, i) => s.style.transform = `translateX(${120 * (i - slide)}%)`);\n  }; // Next slide\n\n\n  const nextSlide = function () {\n    if (curSlide === maxSlide - 1) {\n      curSlide = 0;\n    } else {\n      curSlide++;\n    }\n\n    goToSlide(curSlide);\n    activateDot(curSlide);\n  }; // Previous slide\n\n\n  const prevSlide = function () {\n    if (curSlide === 0) {\n      curSlide = maxSlide - 1;\n    } else {\n      curSlide--;\n    }\n\n    goToSlide(curSlide);\n    activateDot(curSlide);\n  };\n\n  const init = function () {\n    goToSlide(0);\n    createDots();\n    activateDot(0);\n  };\n\n  init();\n  btnRight.addEventListener(\"click\", nextSlide);\n  btnLeft.addEventListener(\"click\", prevSlide); // slider on keypress\n\n  document.addEventListener(\"keydown\", function (e) {\n    e.key === \"ArrowLeft\" && prevSlide();\n    e.key === \"ArrowRight\" && nextSlide();\n  });\n  dotContainer.addEventListener(\"click\", function (e) {\n    if (e.target.classList.contains(\"dots__dot\")) {\n      const {\n        slide\n      } = e.target.dataset;\n      goToSlide(slide);\n      activateDot(slide);\n    }\n  });\n};\n\nslider();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBbUV6Qjs7QUFDQWhELEVBQUFBLFFBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBVStDLENBQVYsRUFBYTtBQUNoREEsSUFBQUEsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsV0FBVixJQUF5QkgsU0FBUyxFQUFsQztBQUNBRSxJQUFBQSxDQUFDLENBQUNDLEdBQUYsS0FBVSxZQUFWLElBQTBCSixTQUFTLEVBQW5DO0FBQ0QsR0FIRDtBQUtBaEIsRUFBQUEsWUFBWSxDQUFDNUIsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsVUFBVStDLENBQVYsRUFBYTtBQUNsRCxRQUFJQSxDQUFDLENBQUNFLE1BQUYsQ0FBU2hELFNBQVQsQ0FBbUJpRCxRQUFuQixDQUE0QixXQUE1QixDQUFKLEVBQThDO0FBQzVDLFlBQU07QUFBRVosUUFBQUE7QUFBRixVQUFZUyxDQUFDLENBQUNFLE1BQUYsQ0FBU0UsT0FBM0I7QUFDQVgsTUFBQUEsU0FBUyxDQUFDRixLQUFELENBQVQ7QUFDQUQsTUFBQUEsV0FBVyxDQUFDQyxLQUFELENBQVg7QUFDRDtBQUNGLEdBTkQ7QUFPRCxDQWhGRDs7QUFpRkFmLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc2NyaXB0LmpzPzQ0YWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIGNvbnN0IHsgaXNBYnNvbHV0ZVVSTCB9ID0gcmVxdWlyZShcIndlYnBhY2stZGV2LXNlcnZlclwiKTtcblxuLy8gbW9iaWxlIG5hdmlnYXRpb25cbmNvbnN0IGJ0bk5hdkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tbW9iaWxlLW5hdlwiKTtcbmNvbnN0IG5hdmlnYXRpb25FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvblwiKTtcbmJ0bk5hdkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIG5hdmlnYXRpb25FbC5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LW9wZW5cIik7XG59KTtcblxuLy8gU3RpY2t5IG5hdmlnYXRpb25cblxuY29uc3Qgc2VjdGlvbkhlcm9FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VjdGlvbi1oZXJvLXNsaWRlclwiKTtcblxuY29uc3Qgb2JzID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICBmdW5jdGlvbiAoZW50cmllcykge1xuICAgIGNvbnN0IGVudCA9IGVudHJpZXNbMF07XG4gICAgY29uc29sZS5sb2coZW50KTtcblxuICAgIGlmIChlbnQuaXNJbnRlcnNlY3RpbmcgPT09IGZhbHNlKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJzdGlja3lcIik7XG4gICAgfVxuICAgIGlmIChlbnQuaXNJbnRlcnNlY3RpbmcgPT09IHRydWUpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreVwiKTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICAvLyBJbiB0aGUgdmlld3BvcnRcbiAgICByb290OiBudWxsLFxuICAgIHRocmVzaG9sZDogMCxcbiAgICByb290TWFyZ2luOiBcIi0xNDBweFwiLFxuICB9XG4pO1xub2JzLm9ic2VydmUoc2VjdGlvbkhlcm9FbCk7XG5cbi8vIEZvb3RlciBzZXQgY3VycmVudCB5ZWFyXG5jb25zdCB5ZWFyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnllYXJcIik7XG5jb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbnllYXJFbC50ZXh0Q29udGVudCA9IGN1cnJlbnRZZWFyO1xuXG4vLyBTbGlkZXJcbmNvbnN0IHNsaWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZVwiKTtcbiAgY29uc3QgYnRuTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyX19idG4tLWxlZnRcIik7XG4gIGNvbnN0IGJ0blJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJfX2J0bi0tcmlnaHRcIik7XG4gIGNvbnN0IGRvdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZG90c1wiKTtcblxuICBsZXQgY3VyU2xpZGUgPSAwO1xuICBjb25zdCBtYXhTbGlkZSA9IHNsaWRlcy5sZW5ndGg7XG5cbiAgLy8gZnVuY3Rpb25zXG4gIGNvbnN0IGNyZWF0ZURvdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2xpZGVzLmZvckVhY2goZnVuY3Rpb24gKF8sIGkpIHtcbiAgICAgIGRvdENvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgIFwiYmVmb3JlZW5kXCIsXG4gICAgICAgIGA8YnV0dG9uIGNsYXNzID1cImRvdHNfX2RvdFwiIGRhdGEtc2xpZGUgPVwiJHtpfVwiPjwvYnV0dG9uPmBcbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgYWN0aXZhdGVEb3QgPSBmdW5jdGlvbiAoc2xpZGUpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZG90c19fZG90XCIpXG4gICAgICAuZm9yRWFjaCgoZG90KSA9PiBkb3QuY2xhc3NMaXN0LnJlbW92ZShcImRvdHNfX2RvdC0tYWN0aXZlXCIpKTtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihgLmRvdHNfX2RvdFtkYXRhLXNsaWRlPVwiJHtzbGlkZX1cIl1gKVxuICAgICAgLmNsYXNzTGlzdC5hZGQoXCJkb3RzX19kb3QtLWFjdGl2ZVwiKTtcbiAgfTtcblxuICBjb25zdCBnb1RvU2xpZGUgPSBmdW5jdGlvbiAoc2xpZGUpIHtcbiAgICBzbGlkZXMuZm9yRWFjaChcbiAgICAgIChzLCBpKSA9PiAocy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkezEyMCAqIChpIC0gc2xpZGUpfSUpYClcbiAgICApO1xuICB9O1xuXG4gIC8vIE5leHQgc2xpZGVcbiAgY29uc3QgbmV4dFNsaWRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChjdXJTbGlkZSA9PT0gbWF4U2xpZGUgLSAxKSB7XG4gICAgICBjdXJTbGlkZSA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1clNsaWRlKys7XG4gICAgfVxuICAgIGdvVG9TbGlkZShjdXJTbGlkZSk7XG4gICAgYWN0aXZhdGVEb3QoY3VyU2xpZGUpO1xuICB9O1xuXG4gIC8vIFByZXZpb3VzIHNsaWRlXG4gIGNvbnN0IHByZXZTbGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY3VyU2xpZGUgPT09IDApIHtcbiAgICAgIGN1clNsaWRlID0gbWF4U2xpZGUgLSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJTbGlkZS0tO1xuICAgIH1cbiAgICBnb1RvU2xpZGUoY3VyU2xpZGUpO1xuICAgIGFjdGl2YXRlRG90KGN1clNsaWRlKTtcbiAgfTtcblxuICBjb25zdCBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGdvVG9TbGlkZSgwKTtcbiAgICBjcmVhdGVEb3RzKCk7XG4gICAgYWN0aXZhdGVEb3QoMCk7XG4gIH07XG4gIGluaXQoKTtcblxuICBidG5SaWdodC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV4dFNsaWRlKTtcbiAgYnRuTGVmdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJldlNsaWRlKTtcblxuICAvLyBzbGlkZXIgb24ga2V5cHJlc3NcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBlLmtleSA9PT0gXCJBcnJvd0xlZnRcIiAmJiBwcmV2U2xpZGUoKTtcbiAgICBlLmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIgJiYgbmV4dFNsaWRlKCk7XG4gIH0pO1xuXG4gIGRvdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZG90c19fZG90XCIpKSB7XG4gICAgICBjb25zdCB7IHNsaWRlIH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuICAgICAgZ29Ub1NsaWRlKHNsaWRlKTtcbiAgICAgIGFjdGl2YXRlRG90KHNsaWRlKTtcbiAgICB9XG4gIH0pO1xufTtcbnNsaWRlcigpO1xuIl0sIm5hbWVzIjpbImJ0bk5hdkVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmF2aWdhdGlvbkVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInNlY3Rpb25IZXJvRWwiLCJvYnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnQiLCJjb25zb2xlIiwibG9nIiwiaXNJbnRlcnNlY3RpbmciLCJib2R5IiwiYWRkIiwicmVtb3ZlIiwicm9vdCIsInRocmVzaG9sZCIsInJvb3RNYXJnaW4iLCJvYnNlcnZlIiwieWVhckVsIiwiY3VycmVudFllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJ0ZXh0Q29udGVudCIsInNsaWRlciIsInNsaWRlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidG5MZWZ0IiwiYnRuUmlnaHQiLCJkb3RDb250YWluZXIiLCJjdXJTbGlkZSIsIm1heFNsaWRlIiwibGVuZ3RoIiwiY3JlYXRlRG90cyIsImZvckVhY2giLCJfIiwiaSIsImluc2VydEFkamFjZW50SFRNTCIsImFjdGl2YXRlRG90Iiwic2xpZGUiLCJkb3QiLCJnb1RvU2xpZGUiLCJzIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJuZXh0U2xpZGUiLCJwcmV2U2xpZGUiLCJpbml0IiwiZSIsImtleSIsInRhcmdldCIsImNvbnRhaW5zIiwiZGF0YXNldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/script.js\n");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9hcHAuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9hcHAuc2Nzcz82MjllIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/app.scss\n");

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
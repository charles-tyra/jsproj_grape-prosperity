/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@google/earthengine/build/browser.js":
/*!***********************************************************!*\
  !*** ./node_modules/@google/earthengine/build/browser.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// Require client library and private key.\n// const Auth = require('./scripts/auth.js');\nconst ee = __webpack_require__(/*! ../node_modules/@google/earthengine */ \"./node_modules/@google/earthengine/build/browser.js\");\n\n// ee.data.authenticateViaPrivateKey(privateKey, runAnalysis, function (e) {\n//    console.error('Authentication error: ' + e);\n// });\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log(window.location.href);\n\n  // Initialize client library and run analysis.\n  ee.data.authenticateViaOauth('714908911037-v3hbclsdn48e4dcvkk72jemktuh7q0h9.apps.googleusercontent.com');\n  console.log(ee);\n  ee.initialize();\n\n  // Run an Earth Engine script.\n  var image = new ee.Image('srtm90_v4');\n  image.getMap({\n    min: 0,\n    max: 1000\n  }, function (map) {\n    console.log(map);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBLE1BQU1BLEVBQUUsR0FBR0MsbUJBQU8sQ0FBQyxnR0FBcUMsQ0FBQzs7QUFHekQ7QUFDQTtBQUNBOztBQUVBQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFDakRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDOztFQUdqQztFQUNBUixFQUFFLENBQUNTLElBQUksQ0FBQ0Msb0JBQW9CLENBQUMsMEVBQTBFLENBQUM7RUFFeEdOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxFQUFFLENBQUM7RUFFZkEsRUFBRSxDQUFDVyxVQUFVLEVBQUU7O0VBRWY7RUFDQSxJQUFJQyxLQUFLLEdBQUcsSUFBSVosRUFBRSxDQUFDYSxLQUFLLENBQUMsV0FBVyxDQUFDO0VBQ3JDRCxLQUFLLENBQUNFLE1BQU0sQ0FBQztJQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUFFQyxHQUFHLEVBQUU7RUFBSyxDQUFDLEVBQUUsVUFBVUMsR0FBRyxFQUFFO0lBQ2hEYixPQUFPLENBQUNDLEdBQUcsQ0FBQ1ksR0FBRyxDQUFDO0VBQ25CLENBQUMsQ0FBQztBQUVMLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzcHJval9ncmFwZXByb3NwZXJpdHkvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBSZXF1aXJlIGNsaWVudCBsaWJyYXJ5IGFuZCBwcml2YXRlIGtleS5cbi8vIGNvbnN0IEF1dGggPSByZXF1aXJlKCcuL3NjcmlwdHMvYXV0aC5qcycpO1xuY29uc3QgZWUgPSByZXF1aXJlKCcuLi9ub2RlX21vZHVsZXMvQGdvb2dsZS9lYXJ0aGVuZ2luZScpO1xuXG5cbi8vIGVlLmRhdGEuYXV0aGVudGljYXRlVmlhUHJpdmF0ZUtleShwcml2YXRlS2V5LCBydW5BbmFseXNpcywgZnVuY3Rpb24gKGUpIHtcbi8vICAgIGNvbnNvbGUuZXJyb3IoJ0F1dGhlbnRpY2F0aW9uIGVycm9yOiAnICsgZSk7XG4vLyB9KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgIGNvbnNvbGUubG9nKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuXG4gICAvLyBJbml0aWFsaXplIGNsaWVudCBsaWJyYXJ5IGFuZCBydW4gYW5hbHlzaXMuXG4gICBlZS5kYXRhLmF1dGhlbnRpY2F0ZVZpYU9hdXRoKCc3MTQ5MDg5MTEwMzctdjNoYmNsc2RuNDhlNGRjdmtrNzJqZW1rdHVoN3EwaDkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nKTtcblxuICAgY29uc29sZS5sb2coZWUpO1xuXG4gICBlZS5pbml0aWFsaXplKCk7XG5cbiAgIC8vIFJ1biBhbiBFYXJ0aCBFbmdpbmUgc2NyaXB0LlxuICAgdmFyIGltYWdlID0gbmV3IGVlLkltYWdlKCdzcnRtOTBfdjQnKTtcbiAgIGltYWdlLmdldE1hcCh7IG1pbjogMCwgbWF4OiAxMDAwIH0sIGZ1bmN0aW9uIChtYXApIHtcbiAgICAgIGNvbnNvbGUubG9nKG1hcCk7XG4gICB9KTtcblxufSkiXSwibmFtZXMiOlsiZWUiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImRhdGEiLCJhdXRoZW50aWNhdGVWaWFPYXV0aCIsImluaXRpYWxpemUiLCJpbWFnZSIsIkltYWdlIiwiZ2V0TWFwIiwibWluIiwibWF4IiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2pfZ3JhcGVwcm9zcGVyaXR5Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;
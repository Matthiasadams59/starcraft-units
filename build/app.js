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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _objects_Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects/Unit */ \"./js/objects/Unit.js\");\n/* harmony import */ var _objects_Marine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/Marine */ \"./js/objects/Marine.js\");\n/* harmony import */ var _objects_SiegeTank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects/SiegeTank */ \"./js/objects/SiegeTank.js\");\n/* harmony import */ var _objects_Valkyrie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objects/Valkyrie */ \"./js/objects/Valkyrie.js\");\n\n\n\n\nalert('Good luck, Commander!');\nvar idCounter = 0;\nvar unitForm = document.querySelector(\"#unitForm\");\nvar unitRecap = document.querySelector(\"#unitRecap\");\nvar unitType = document.querySelector(\"#unitTypeField\");\nunitForm.addEventListener(\"submit\", function (event) {\n  event.preventDefault();\n  var data = new FormData(unitForm);\n  var name = document.getElementById(\"unitNameField\").value;\n  var type = unitType.value;\n  var unit = null;\n  var audio = null;\n\n  switch (type) {\n    case \"Marine\":\n      unit = new _objects_Marine__WEBPACK_IMPORTED_MODULE_1__[\"Marine\"](name, idCounter);\n      break;\n\n    case \"Siege Tank\":\n      var siegeMode = document.querySelector('input[name=\"unitSiegeMode\"]:checked').value;\n      unit = new _objects_SiegeTank__WEBPACK_IMPORTED_MODULE_2__[\"SiegeTank\"](name, idCounter, siegeMode);\n      break;\n\n    case \"Valkyrie\":\n      unit = new _objects_Valkyrie__WEBPACK_IMPORTED_MODULE_3__[\"Valkyrie\"](name, idCounter);\n      break;\n  }\n\n  unit.playReadySound();\n  idCounter++;\n  displayUnit(unit);\n});\nunitType.addEventListener(\"change\", function () {\n  var siegeMode = document.querySelector(\"#siegeTankMode\");\n\n  if (unitType.value === \"Siege Tank\") {\n    siegeMode.removeAttribute(\"hidden\");\n    siegeMode.firstElementChild.required = true;\n  } else {\n    siegeMode.setAttribute(\"hidden\", true);\n    siegeMode.firstElementChild.required = false;\n  }\n});\n\nvar displayUnit = function displayUnit(unit) {\n  document.getElementById(\"unitRecap\").innerHTML += unit.asHTMLRow();\n};\n\nvar removeUnit = function removeUnit(context) {};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcz9lZTFjIl0sIm5hbWVzIjpbImFsZXJ0IiwiaWRDb3VudGVyIiwidW5pdEZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bml0UmVjYXAiLCJ1bml0VHlwZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsIkZvcm1EYXRhIiwibmFtZSIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJ0eXBlIiwidW5pdCIsImF1ZGlvIiwiTWFyaW5lIiwic2llZ2VNb2RlIiwiU2llZ2VUYW5rIiwiVmFsa3lyaWUiLCJwbGF5UmVhZHlTb3VuZCIsImRpc3BsYXlVbml0IiwicmVtb3ZlQXR0cmlidXRlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJyZXF1aXJlZCIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImFzSFRNTFJvdyIsInJlbW92ZVVuaXQiLCJjb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsS0FBSyxDQUFDLHVCQUFELENBQUw7QUFDQSxJQUFJQyxTQUFTLEdBQUcsQ0FBaEI7QUFFQSxJQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixXQUF2QixDQUFqQjtBQUNBLElBQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQWxCO0FBQ0EsSUFBTUUsUUFBUSxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQWpCO0FBRUFGLFFBQVEsQ0FBQ0ssZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0MsVUFBQ0MsS0FBRCxFQUFXO0FBQzlDQSxPQUFLLENBQUNDLGNBQU47QUFDQSxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsUUFBSixDQUFhVCxRQUFiLENBQWI7QUFDQSxNQUFNVSxJQUFJLEdBQUdULFFBQVEsQ0FBQ1UsY0FBVCxDQUF3QixlQUF4QixFQUF5Q0MsS0FBdEQ7QUFDQSxNQUFNQyxJQUFJLEdBQUdULFFBQVEsQ0FBQ1EsS0FBdEI7QUFDQSxNQUFJRSxJQUFJLEdBQUcsSUFBWDtBQUNBLE1BQUlDLEtBQUssR0FBRyxJQUFaOztBQUNBLFVBQVFGLElBQVI7QUFDQyxTQUFLLFFBQUw7QUFDQ0MsVUFBSSxHQUFHLElBQUlFLHNEQUFKLENBQVdOLElBQVgsRUFBaUJYLFNBQWpCLENBQVA7QUFDQTs7QUFDRCxTQUFLLFlBQUw7QUFDQyxVQUFNa0IsU0FBUyxHQUFHaEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLHFDQUF2QixFQUE4RFUsS0FBaEY7QUFDQUUsVUFBSSxHQUFHLElBQUlJLDREQUFKLENBQWNSLElBQWQsRUFBb0JYLFNBQXBCLEVBQStCa0IsU0FBL0IsQ0FBUDtBQUNBOztBQUNELFNBQUssVUFBTDtBQUNDSCxVQUFJLEdBQUcsSUFBSUssMERBQUosQ0FBYVQsSUFBYixFQUFtQlgsU0FBbkIsQ0FBUDtBQUNBO0FBVkY7O0FBWUFlLE1BQUksQ0FBQ00sY0FBTDtBQUNBckIsV0FBUztBQUNUc0IsYUFBVyxDQUFDUCxJQUFELENBQVg7QUFDQSxDQXRCRDtBQXdCQVYsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxZQUFNO0FBQ3pDLE1BQU1ZLFNBQVMsR0FBR2hCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBbEI7O0FBQ0EsTUFBR0UsUUFBUSxDQUFDUSxLQUFULEtBQW1CLFlBQXRCLEVBQW9DO0FBQ25DSyxhQUFTLENBQUNLLGVBQVYsQ0FBMEIsUUFBMUI7QUFDQUwsYUFBUyxDQUFDTSxpQkFBVixDQUE0QkMsUUFBNUIsR0FBdUMsSUFBdkM7QUFDQSxHQUhELE1BR087QUFDTlAsYUFBUyxDQUFDUSxZQUFWLENBQXVCLFFBQXZCLEVBQWlDLElBQWpDO0FBQ0FSLGFBQVMsQ0FBQ00saUJBQVYsQ0FBNEJDLFFBQTVCLEdBQXVDLEtBQXZDO0FBQ0E7QUFDRCxDQVREOztBQVdBLElBQU1ILFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNQLElBQUQsRUFBVTtBQUM3QmIsVUFBUSxDQUFDVSxjQUFULENBQXdCLFdBQXhCLEVBQXFDZSxTQUFyQyxJQUFpRFosSUFBSSxDQUFDYSxTQUFMLEVBQWpEO0FBQ0EsQ0FGRDs7QUFJQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxPQUFELEVBQWEsQ0FFL0IsQ0FGRCIsImZpbGUiOiIuL2pzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtVbml0fSBmcm9tICcuL29iamVjdHMvVW5pdCdcclxuaW1wb3J0IHtNYXJpbmV9IGZyb20gJy4vb2JqZWN0cy9NYXJpbmUnXHJcbmltcG9ydCB7U2llZ2VUYW5rfSBmcm9tICcuL29iamVjdHMvU2llZ2VUYW5rJ1xyXG5pbXBvcnQge1ZhbGt5cmllfSBmcm9tICcuL29iamVjdHMvVmFsa3lyaWUnXHJcblxyXG5hbGVydCgnR29vZCBsdWNrLCBDb21tYW5kZXIhJylcclxubGV0IGlkQ291bnRlciA9IDBcclxuXHJcbmNvbnN0IHVuaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1bml0Rm9ybVwiKVxyXG5jb25zdCB1bml0UmVjYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VuaXRSZWNhcFwiKVxyXG5jb25zdCB1bml0VHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdW5pdFR5cGVGaWVsZFwiKVxyXG5cclxudW5pdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcclxuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblx0Y29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSh1bml0Rm9ybSlcclxuXHRjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1bml0TmFtZUZpZWxkXCIpLnZhbHVlXHJcblx0Y29uc3QgdHlwZSA9IHVuaXRUeXBlLnZhbHVlXHJcblx0bGV0IHVuaXQgPSBudWxsXHJcblx0bGV0IGF1ZGlvID0gbnVsbFxyXG5cdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0Y2FzZSBcIk1hcmluZVwiOlxyXG5cdFx0XHR1bml0ID0gbmV3IE1hcmluZShuYW1lLCBpZENvdW50ZXIpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIFwiU2llZ2UgVGFua1wiOlxyXG5cdFx0XHRjb25zdCBzaWVnZU1vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidW5pdFNpZWdlTW9kZVwiXTpjaGVja2VkJykudmFsdWVcclxuXHRcdFx0dW5pdCA9IG5ldyBTaWVnZVRhbmsobmFtZSwgaWRDb3VudGVyLCBzaWVnZU1vZGUpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIFwiVmFsa3lyaWVcIjpcclxuXHRcdFx0dW5pdCA9IG5ldyBWYWxreXJpZShuYW1lLCBpZENvdW50ZXIpXHJcblx0XHRcdGJyZWFrXHJcblx0fVxyXG5cdHVuaXQucGxheVJlYWR5U291bmQoKVxyXG5cdGlkQ291bnRlcisrXHJcblx0ZGlzcGxheVVuaXQodW5pdClcclxufSlcclxuXHJcbnVuaXRUeXBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG5cdGNvbnN0IHNpZWdlTW9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2llZ2VUYW5rTW9kZVwiKVxyXG5cdGlmKHVuaXRUeXBlLnZhbHVlID09PSBcIlNpZWdlIFRhbmtcIikge1xyXG5cdFx0c2llZ2VNb2RlLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKVxyXG5cdFx0c2llZ2VNb2RlLmZpcnN0RWxlbWVudENoaWxkLnJlcXVpcmVkID0gdHJ1ZVxyXG5cdH0gZWxzZSB7XHJcblx0XHRzaWVnZU1vZGUuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIHRydWUpXHJcblx0XHRzaWVnZU1vZGUuZmlyc3RFbGVtZW50Q2hpbGQucmVxdWlyZWQgPSBmYWxzZVxyXG5cdH1cclxufSlcclxuXHJcbmNvbnN0IGRpc3BsYXlVbml0ID0gKHVuaXQpID0+IHtcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVuaXRSZWNhcFwiKS5pbm5lckhUTUwgKz11bml0LmFzSFRNTFJvdygpXHJcbn1cclxuXHJcbmNvbnN0IHJlbW92ZVVuaXQgPSAoY29udGV4dCkgPT4ge1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/index.js\n");

/***/ }),

/***/ "./js/objects/Marine.js":
/*!******************************!*\
  !*** ./js/objects/Marine.js ***!
  \******************************/
/*! exports provided: Marine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Marine\", function() { return Marine; });\n/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ \"./js/objects/Unit.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar Marine =\n/*#__PURE__*/\nfunction (_Unit) {\n  _inherits(Marine, _Unit);\n\n  function Marine(name, id) {\n    var _this;\n\n    _classCallCheck(this, Marine);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Marine).call(this, name, id));\n    _this.type = \"Marine\";\n    return _this;\n  }\n\n  return Marine;\n}(_Unit__WEBPACK_IMPORTED_MODULE_0__[\"Unit\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9vYmplY3RzL01hcmluZS5qcz9lZjVmIl0sIm5hbWVzIjpbIk1hcmluZSIsIm5hbWUiLCJpZCIsInR5cGUiLCJVbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsTUFBYjtBQUFBO0FBQUE7QUFBQTs7QUFDQyxrQkFBWUMsSUFBWixFQUFrQkMsRUFBbEIsRUFBc0I7QUFBQTs7QUFBQTs7QUFDckIsZ0ZBQU1ELElBQU4sRUFBWUMsRUFBWjtBQUNBLFVBQUtDLElBQUwsR0FBWSxRQUFaO0FBRnFCO0FBR3JCOztBQUpGO0FBQUEsRUFBNEJDLDBDQUE1QiIsImZpbGUiOiIuL2pzL29iamVjdHMvTWFyaW5lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtVbml0fSBmcm9tICcuL1VuaXQnXHJcblxyXG5leHBvcnQgY2xhc3MgTWFyaW5lIGV4dGVuZHMgVW5pdCB7XHJcblx0Y29uc3RydWN0b3IobmFtZSwgaWQpIHtcclxuXHRcdHN1cGVyKG5hbWUsIGlkKVxyXG5cdFx0dGhpcy50eXBlID0gXCJNYXJpbmVcIlxyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/objects/Marine.js\n");

/***/ }),

/***/ "./js/objects/SiegeTank.js":
/*!*********************************!*\
  !*** ./js/objects/SiegeTank.js ***!
  \*********************************/
/*! exports provided: SiegeTank */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SiegeTank\", function() { return SiegeTank; });\n/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ \"./js/objects/Unit.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar SiegeTank =\n/*#__PURE__*/\nfunction (_Unit) {\n  _inherits(SiegeTank, _Unit);\n\n  function SiegeTank(name, id, siegeMode) {\n    var _this;\n\n    _classCallCheck(this, SiegeTank);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(SiegeTank).call(this, name, id));\n    _this.type = \"Siege Tank\";\n    _this.siegeMode = siegeMode;\n    return _this;\n  }\n\n  _createClass(SiegeTank, [{\n    key: \"asHTMLRow\",\n    value: function asHTMLRow() {\n      return \"<div class='row'  data-unitType='\".concat(this.type, \"'>\").concat(this.type, \" #\").concat(this.id, \": \").concat(this.name, \" (\").concat(this.siegeMode, \")</div>\");\n    }\n  }]);\n\n  return SiegeTank;\n}(_Unit__WEBPACK_IMPORTED_MODULE_0__[\"Unit\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9vYmplY3RzL1NpZWdlVGFuay5qcz81ZDVkIl0sIm5hbWVzIjpbIlNpZWdlVGFuayIsIm5hbWUiLCJpZCIsInNpZWdlTW9kZSIsInR5cGUiLCJVbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFNBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQ0MscUJBQVlDLElBQVosRUFBa0JDLEVBQWxCLEVBQXNCQyxTQUF0QixFQUFpQztBQUFBOztBQUFBOztBQUNoQyxtRkFBTUYsSUFBTixFQUFZQyxFQUFaO0FBQ0EsVUFBS0UsSUFBTCxHQUFZLFlBQVo7QUFDQSxVQUFLRCxTQUFMLEdBQWlCQSxTQUFqQjtBQUhnQztBQUloQzs7QUFMRjtBQUFBO0FBQUEsZ0NBT2E7QUFDWCx3REFBMkMsS0FBS0MsSUFBaEQsZUFBeUQsS0FBS0EsSUFBOUQsZUFBdUUsS0FBS0YsRUFBNUUsZUFBbUYsS0FBS0QsSUFBeEYsZUFBaUcsS0FBS0UsU0FBdEc7QUFDQTtBQVRGOztBQUFBO0FBQUEsRUFBK0JFLDBDQUEvQiIsImZpbGUiOiIuL2pzL29iamVjdHMvU2llZ2VUYW5rLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtVbml0fSBmcm9tICcuL1VuaXQnXHJcblxyXG5leHBvcnQgY2xhc3MgU2llZ2VUYW5rIGV4dGVuZHMgVW5pdCB7XHJcblx0Y29uc3RydWN0b3IobmFtZSwgaWQsIHNpZWdlTW9kZSkge1xyXG5cdFx0c3VwZXIobmFtZSwgaWQpXHJcblx0XHR0aGlzLnR5cGUgPSBcIlNpZWdlIFRhbmtcIlxyXG5cdFx0dGhpcy5zaWVnZU1vZGUgPSBzaWVnZU1vZGVcclxuXHR9XHJcblxyXG5cdGFzSFRNTFJvdygpIHtcclxuXHRcdHJldHVybiBgPGRpdiBjbGFzcz0ncm93JyAgZGF0YS11bml0VHlwZT0nJHt0aGlzLnR5cGV9Jz4ke3RoaXMudHlwZX0gIyR7dGhpcy5pZH06ICR7dGhpcy5uYW1lfSAoJHt0aGlzLnNpZWdlTW9kZX0pPC9kaXY+YFxyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/objects/SiegeTank.js\n");

/***/ }),

/***/ "./js/objects/Unit.js":
/*!****************************!*\
  !*** ./js/objects/Unit.js ***!
  \****************************/
/*! exports provided: Unit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Unit\", function() { return Unit; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Unit =\n/*#__PURE__*/\nfunction () {\n  function Unit(name, id) {\n    _classCallCheck(this, Unit);\n\n    this.name = name;\n    this.id = id;\n    this.type = \"\";\n  }\n\n  _createClass(Unit, [{\n    key: \"asHTMLRow\",\n    value: function asHTMLRow() {\n      return \"<div class='row' data-unitType='\".concat(this.type, \"'>\").concat(this.type, \" #\").concat(this.id, \": \").concat(this.name, \"</div>\");\n    }\n  }, {\n    key: \"playReadySound\",\n    value: function playReadySound() {\n      new Audio(\"../../resources/sound/\".concat(this.type, \"Ready.oga\")).play();\n    }\n  }, {\n    key: \"playDeathSound\",\n    value: function playDeathSound() {\n      new Audio(\"../../resources/sound/\".concat(this.type, \"Death.oga\")).play();\n    }\n  }]);\n\n  return Unit;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9vYmplY3RzL1VuaXQuanM/YWU2NiJdLCJuYW1lcyI6WyJVbml0IiwibmFtZSIsImlkIiwidHlwZSIsIkF1ZGlvIiwicGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTyxJQUFNQSxJQUFiO0FBQUE7QUFBQTtBQUNDLGdCQUFZQyxJQUFaLEVBQWtCQyxFQUFsQixFQUFzQjtBQUFBOztBQUNyQixTQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxFQUFMLEdBQVVBLEVBQVY7QUFDQSxTQUFLQyxJQUFMLEdBQVksRUFBWjtBQUNBOztBQUxGO0FBQUE7QUFBQSxnQ0FPYTtBQUNYLHVEQUEwQyxLQUFLQSxJQUEvQyxlQUF3RCxLQUFLQSxJQUE3RCxlQUFzRSxLQUFLRCxFQUEzRSxlQUFrRixLQUFLRCxJQUF2RjtBQUNBO0FBVEY7QUFBQTtBQUFBLHFDQVdrQjtBQUNoQixVQUFJRyxLQUFKLGlDQUFtQyxLQUFLRCxJQUF4QyxnQkFBeURFLElBQXpEO0FBQ0E7QUFiRjtBQUFBO0FBQUEscUNBZWtCO0FBQ2hCLFVBQUlELEtBQUosaUNBQW1DLEtBQUtELElBQXhDLGdCQUF5REUsSUFBekQ7QUFDQTtBQWpCRjs7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vanMvb2JqZWN0cy9Vbml0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFVuaXQge1xyXG5cdGNvbnN0cnVjdG9yKG5hbWUsIGlkKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lXHJcblx0XHR0aGlzLmlkID0gaWRcclxuXHRcdHRoaXMudHlwZSA9IFwiXCJcclxuXHR9XHJcblxyXG5cdGFzSFRNTFJvdygpIHtcclxuXHRcdHJldHVybiBgPGRpdiBjbGFzcz0ncm93JyBkYXRhLXVuaXRUeXBlPScke3RoaXMudHlwZX0nPiR7dGhpcy50eXBlfSAjJHt0aGlzLmlkfTogJHt0aGlzLm5hbWV9PC9kaXY+YFxyXG5cdH1cclxuXHJcblx0cGxheVJlYWR5U291bmQoKSB7XHJcblx0XHRuZXcgQXVkaW8oYC4uLy4uL3Jlc291cmNlcy9zb3VuZC8ke3RoaXMudHlwZX1SZWFkeS5vZ2FgKS5wbGF5KClcclxuXHR9XHJcblxyXG5cdHBsYXlEZWF0aFNvdW5kKCkge1xyXG5cdFx0bmV3IEF1ZGlvKGAuLi8uLi9yZXNvdXJjZXMvc291bmQvJHt0aGlzLnR5cGV9RGVhdGgub2dhYCkucGxheSgpXHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/objects/Unit.js\n");

/***/ }),

/***/ "./js/objects/Valkyrie.js":
/*!********************************!*\
  !*** ./js/objects/Valkyrie.js ***!
  \********************************/
/*! exports provided: Valkyrie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Valkyrie\", function() { return Valkyrie; });\n/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ \"./js/objects/Unit.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar Valkyrie =\n/*#__PURE__*/\nfunction (_Unit) {\n  _inherits(Valkyrie, _Unit);\n\n  function Valkyrie(name, id) {\n    var _this;\n\n    _classCallCheck(this, Valkyrie);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Valkyrie).call(this, name, id));\n    _this.type = \"Valkyrie\";\n    return _this;\n  }\n\n  return Valkyrie;\n}(_Unit__WEBPACK_IMPORTED_MODULE_0__[\"Unit\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9vYmplY3RzL1ZhbGt5cmllLmpzP2ZkNzAiXSwibmFtZXMiOlsiVmFsa3lyaWUiLCJuYW1lIiwiaWQiLCJ0eXBlIiwiVW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFFBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQ0Msb0JBQVlDLElBQVosRUFBa0JDLEVBQWxCLEVBQXNCO0FBQUE7O0FBQUE7O0FBQ3JCLGtGQUFNRCxJQUFOLEVBQVlDLEVBQVo7QUFDQSxVQUFLQyxJQUFMLEdBQVksVUFBWjtBQUZxQjtBQUdyQjs7QUFKRjtBQUFBLEVBQThCQywwQ0FBOUIiLCJmaWxlIjoiLi9qcy9vYmplY3RzL1ZhbGt5cmllLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtVbml0fSBmcm9tICcuL1VuaXQnXHJcblxyXG5leHBvcnQgY2xhc3MgVmFsa3lyaWUgZXh0ZW5kcyBVbml0IHtcclxuXHRjb25zdHJ1Y3RvcihuYW1lLCBpZCkge1xyXG5cdFx0c3VwZXIobmFtZSwgaWQpXHJcblx0XHR0aGlzLnR5cGUgPSBcIlZhbGt5cmllXCJcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/objects/Valkyrie.js\n");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./js/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\William\Work\Technos Web Avancées\Front_Lab2\website/js/index.js */"./js/index.js");


/***/ })

/******/ });
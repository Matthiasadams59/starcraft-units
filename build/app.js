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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _objects_Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects/Unit */ \"./js/objects/Unit.js\");\n/* harmony import */ var _objects_Unit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_objects_Unit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _objects_Marine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/Marine */ \"./js/objects/Marine.js\");\n/* harmony import */ var _objects_Marine__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_objects_Marine__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _objects_SiegeTank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects/SiegeTank */ \"./js/objects/SiegeTank.js\");\n/* harmony import */ var _objects_SiegeTank__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_objects_SiegeTank__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _objects_Valkyrie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objects/Valkyrie */ \"./js/objects/Valkyrie.js\");\n/* harmony import */ var _objects_Valkyrie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_objects_Valkyrie__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nalert('Good luck, Commander!');\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  idCounter = 0;\n});\n\nvar addUnit = function addUnit() {\n  var name = document.getElementById(\"unitNameField\").value;\n  var type = document.getElementById(\"unitTypeField\").value;\n\n  switch (type) {\n    case \"Marine\":\n      new Marine(name, idCounter);\n      idCounter++;\n      break;\n\n    case \"Siege Tank\":\n      var siegeMode = document.getElementById(\"unitSiegeMode\");\n      new SiegeTank(name, idCounter, siegeMode);\n      idCounter++;\n      break;\n\n    case \"Valkyrie\":\n      new Valkyrie(name, idCounter);\n      idCounter++;\n      break;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcz9lZTFjIl0sIm5hbWVzIjpbImFsZXJ0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaWRDb3VudGVyIiwiYWRkVW5pdCIsIm5hbWUiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwidHlwZSIsIk1hcmluZSIsInNpZWdlTW9kZSIsIlNpZWdlVGFuayIsIlZhbGt5cmllIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxLQUFLLENBQUMsdUJBQUQsQ0FBTDtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ25EQyxXQUFTLEdBQUcsQ0FBWjtBQUNBLENBRkQ7O0FBSUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNyQixNQUFJQyxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3QixlQUF4QixFQUF5Q0MsS0FBcEQ7QUFDQSxNQUFJQyxJQUFJLEdBQUdQLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3QixlQUF4QixFQUF5Q0MsS0FBcEQ7O0FBQ0EsVUFBUUMsSUFBUjtBQUNDLFNBQUssUUFBTDtBQUNDLFVBQUlDLE1BQUosQ0FBV0osSUFBWCxFQUFpQkYsU0FBakI7QUFDQUEsZUFBUztBQUNUOztBQUNELFNBQUssWUFBTDtBQUNDLFVBQUlPLFNBQVMsR0FBR1QsUUFBUSxDQUFDSyxjQUFULENBQXdCLGVBQXhCLENBQWhCO0FBQ0EsVUFBSUssU0FBSixDQUFjTixJQUFkLEVBQW9CRixTQUFwQixFQUErQk8sU0FBL0I7QUFDQVAsZUFBUztBQUNUOztBQUNELFNBQUssVUFBTDtBQUNDLFVBQUlTLFFBQUosQ0FBYVAsSUFBYixFQUFtQkYsU0FBbkI7QUFDQUEsZUFBUztBQUNUO0FBYkY7QUFlQSxDQWxCRCIsImZpbGUiOiIuL2pzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL29iamVjdHMvVW5pdCdcbmltcG9ydCAnLi9vYmplY3RzL01hcmluZSdcbmltcG9ydCAnLi9vYmplY3RzL1NpZWdlVGFuaydcbmltcG9ydCAnLi9vYmplY3RzL1ZhbGt5cmllJ1xuXG5hbGVydCgnR29vZCBsdWNrLCBDb21tYW5kZXIhJylcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXHRpZENvdW50ZXIgPSAwXG59KTtcblxuY29uc3QgYWRkVW5pdCA9ICgpID0+IHtcblx0bGV0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVuaXROYW1lRmllbGRcIikudmFsdWVcblx0bGV0IHR5cGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVuaXRUeXBlRmllbGRcIikudmFsdWVcblx0c3dpdGNoICh0eXBlKSB7XG5cdFx0Y2FzZSBcIk1hcmluZVwiOlxuXHRcdFx0bmV3IE1hcmluZShuYW1lLCBpZENvdW50ZXIpXG5cdFx0XHRpZENvdW50ZXIrK1xuXHRcdFx0YnJlYWtcblx0XHRjYXNlIFwiU2llZ2UgVGFua1wiOlxuXHRcdFx0bGV0IHNpZWdlTW9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW5pdFNpZWdlTW9kZVwiKVxuXHRcdFx0bmV3IFNpZWdlVGFuayhuYW1lLCBpZENvdW50ZXIsIHNpZWdlTW9kZSlcblx0XHRcdGlkQ291bnRlcisrXG5cdFx0XHRicmVha1xuXHRcdGNhc2UgXCJWYWxreXJpZVwiOlxuXHRcdFx0bmV3IFZhbGt5cmllKG5hbWUsIGlkQ291bnRlcilcblx0XHRcdGlkQ291bnRlcisrXG5cdFx0XHRicmVha1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/index.js\n");

/***/ }),

/***/ "./js/objects/Marine.js":
/*!******************************!*\
  !*** ./js/objects/Marine.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Marine =\n/*#__PURE__*/\nfunction (_Unit) {\n  _inherits(Marine, _Unit);\n\n  function Marine(name, id) {\n    var _this;\n\n    _classCallCheck(this, Marine);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Marine).call(this));\n    _this.type = \"Marine\";\n    return _this;\n  }\n\n  return Marine;\n}(Unit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9vYmplY3RzL01hcmluZS5qcz9lZjVmIl0sIm5hbWVzIjpbIk1hcmluZSIsIm5hbWUiLCJpZCIsInR5cGUiLCJVbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFNQSxNOzs7OztBQUNMLGtCQUFZQyxJQUFaLEVBQWtCQyxFQUFsQixFQUFzQjtBQUFBOztBQUFBOztBQUNyQjtBQUNBLFVBQUtDLElBQUwsR0FBWSxRQUFaO0FBRnFCO0FBR3JCOzs7RUFKbUJDLEkiLCJmaWxlIjoiLi9qcy9vYmplY3RzL01hcmluZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1hcmluZSBleHRlbmRzIFVuaXQge1xuXHRjb25zdHJ1Y3RvcihuYW1lLCBpZCkge1xuXHRcdHN1cGVyKClcblx0XHR0aGlzLnR5cGUgPSBcIk1hcmluZVwiXG5cdH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/objects/Marine.js\n");

/***/ }),

/***/ "./js/objects/SiegeTank.js":
/*!*********************************!*\
  !*** ./js/objects/SiegeTank.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar SiegeTank =\n/*#__PURE__*/\nfunction (_Unit) {\n  _inherits(SiegeTank, _Unit);\n\n  function SiegeTank(name, id, siegeMode) {\n    var _this;\n\n    _classCallCheck(this, SiegeTank);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(SiegeTank).call(this));\n    _this.type = \"Siege Tank\";\n    _this.siegeMode = siegeMode;\n    return _this;\n  }\n\n  return SiegeTank;\n}(Unit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9vYmplY3RzL1NpZWdlVGFuay5qcz81ZDVkIl0sIm5hbWVzIjpbIlNpZWdlVGFuayIsIm5hbWUiLCJpZCIsInNpZWdlTW9kZSIsInR5cGUiLCJVbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFNQSxTOzs7OztBQUNMLHFCQUFZQyxJQUFaLEVBQWtCQyxFQUFsQixFQUFzQkMsU0FBdEIsRUFBaUM7QUFBQTs7QUFBQTs7QUFDaEM7QUFDQSxVQUFLQyxJQUFMLEdBQVksWUFBWjtBQUNBLFVBQUtELFNBQUwsR0FBaUJBLFNBQWpCO0FBSGdDO0FBSWhDOzs7RUFMc0JFLEkiLCJmaWxlIjoiLi9qcy9vYmplY3RzL1NpZWdlVGFuay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNpZWdlVGFuayBleHRlbmRzIFVuaXQge1xuXHRjb25zdHJ1Y3RvcihuYW1lLCBpZCwgc2llZ2VNb2RlKSB7XG5cdFx0c3VwZXIoKVxuXHRcdHRoaXMudHlwZSA9IFwiU2llZ2UgVGFua1wiXG5cdFx0dGhpcy5zaWVnZU1vZGUgPSBzaWVnZU1vZGVcblx0fVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/objects/SiegeTank.js\n");

/***/ }),

/***/ "./js/objects/Unit.js":
/*!****************************!*\
  !*** ./js/objects/Unit.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Unit = function Unit(name, id) {\n  _classCallCheck(this, Unit);\n\n  this.name = name;\n  this.id = id;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9vYmplY3RzL1VuaXQuanM/YWU2NiJdLCJuYW1lcyI6WyJVbml0IiwibmFtZSIsImlkIl0sIm1hcHBpbmdzIjoiOztJQUFNQSxJLEdBQ0wsY0FBWUMsSUFBWixFQUFrQkMsRUFBbEIsRUFBc0I7QUFBQTs7QUFDckIsT0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsT0FBS0MsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsQyIsImZpbGUiOiIuL2pzL29iamVjdHMvVW5pdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFVuaXQge1xuXHRjb25zdHJ1Y3RvcihuYW1lLCBpZCkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWVcblx0XHR0aGlzLmlkID0gaWRcblx0fVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/objects/Unit.js\n");

/***/ }),

/***/ "./js/objects/Valkyrie.js":
/*!********************************!*\
  !*** ./js/objects/Valkyrie.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Valkyrie =\n/*#__PURE__*/\nfunction (_Unit) {\n  _inherits(Valkyrie, _Unit);\n\n  function Valkyrie(name, id) {\n    var _this;\n\n    _classCallCheck(this, Valkyrie);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Valkyrie).call(this));\n    _this.type = \"Valkyrie\";\n    return _this;\n  }\n\n  return Valkyrie;\n}(Unit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9vYmplY3RzL1ZhbGt5cmllLmpzP2ZkNzAiXSwibmFtZXMiOlsiVmFsa3lyaWUiLCJuYW1lIiwiaWQiLCJ0eXBlIiwiVW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsUTs7Ozs7QUFDTCxvQkFBWUMsSUFBWixFQUFrQkMsRUFBbEIsRUFBc0I7QUFBQTs7QUFBQTs7QUFDckI7QUFDQSxVQUFLQyxJQUFMLEdBQVksVUFBWjtBQUZxQjtBQUdyQjs7O0VBSnFCQyxJIiwiZmlsZSI6Ii4vanMvb2JqZWN0cy9WYWxreXJpZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFZhbGt5cmllIGV4dGVuZHMgVW5pdCB7XG5cdGNvbnN0cnVjdG9yKG5hbWUsIGlkKSB7XG5cdFx0c3VwZXIoKVxuXHRcdHRoaXMudHlwZSA9IFwiVmFsa3lyaWVcIlxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/objects/Valkyrie.js\n");

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
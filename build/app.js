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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _objects_Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects/Unit */ \"./js/objects/Unit.js\");\n/* harmony import */ var _objects_Marine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/Marine */ \"./js/objects/Marine.js\");\n/* harmony import */ var _objects_SiegeTank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects/SiegeTank */ \"./js/objects/SiegeTank.js\");\n/* harmony import */ var _objects_Valkyrie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objects/Valkyrie */ \"./js/objects/Valkyrie.js\");\nfunction _readOnlyError(name) { throw new Error(\"\\\"\" + name + \"\\\" is read-only\"); }\n\n\n\n\n\nalert('Good luck, Commander!');\nvar idCounter = 0;\nvar battlefield = [];\n\nvar addUnit = function addUnit() {\n  var name = document.getElementById(\"unitNameField\").value;\n  var type = document.getElementById(\"unitTypeField\").value;\n  var unit = null;\n\n  switch (type) {\n    case \"Marine\":\n      unit = (_readOnlyError(\"unit\"), new _objects_Marine__WEBPACK_IMPORTED_MODULE_1__[\"Marine\"](name, idCounter));\n      break;\n\n    case \"Siege Tank\":\n      var siegeMode = document.getElementById(\"unitSiegeMode\");\n      unit = (_readOnlyError(\"unit\"), new _objects_SiegeTank__WEBPACK_IMPORTED_MODULE_2__[\"SiegeTank\"](name, idCounter, siegeMode));\n      break;\n\n    case \"Valkyrie\":\n      unit = (_readOnlyError(\"unit\"), new _objects_Valkyrie__WEBPACK_IMPORTED_MODULE_3__[\"Valkyrie\"](name, idCounter));\n      break;\n  }\n\n  battlefield.add(unit);\n  idCounter++;\n  return unit;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcz9lZTFjIl0sIm5hbWVzIjpbImFsZXJ0IiwiaWRDb3VudGVyIiwiYmF0dGxlZmllbGQiLCJhZGRVbml0IiwibmFtZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInR5cGUiLCJ1bml0IiwiTWFyaW5lIiwic2llZ2VNb2RlIiwiU2llZ2VUYW5rIiwiVmFsa3lyaWUiLCJhZGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxLQUFLLENBQUMsdUJBQUQsQ0FBTDtBQUNBLElBQUlDLFNBQVMsR0FBRyxDQUFoQjtBQUNBLElBQUtDLFdBQVcsR0FBRyxFQUFuQjs7QUFHQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ3JCLE1BQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLEVBQXlDQyxLQUF0RDtBQUNBLE1BQU1DLElBQUksR0FBR0gsUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLEVBQXlDQyxLQUF0RDtBQUNBLE1BQU1FLElBQUksR0FBRyxJQUFiOztBQUNBLFVBQVFELElBQVI7QUFDQyxTQUFLLFFBQUw7QUFDQ0MsVUFBSSw0QkFBRyxJQUFJQyxzREFBSixDQUFXTixJQUFYLEVBQWlCSCxTQUFqQixDQUFILENBQUo7QUFDQTs7QUFDRCxTQUFLLFlBQUw7QUFDQyxVQUFNVSxTQUFTLEdBQUdOLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixDQUFsQjtBQUNBRyxVQUFJLDRCQUFHLElBQUlHLDREQUFKLENBQWNSLElBQWQsRUFBb0JILFNBQXBCLEVBQStCVSxTQUEvQixDQUFILENBQUo7QUFDQTs7QUFDRCxTQUFLLFVBQUw7QUFDQ0YsVUFBSSw0QkFBRyxJQUFJSSwwREFBSixDQUFhVCxJQUFiLEVBQW1CSCxTQUFuQixDQUFILENBQUo7QUFDQTtBQVZGOztBQVlBQyxhQUFXLENBQUNZLEdBQVosQ0FBZ0JMLElBQWhCO0FBQ0FSLFdBQVM7QUFDVCxTQUFPUSxJQUFQO0FBQ0EsQ0FuQkQiLCJmaWxlIjoiLi9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VW5pdH0gZnJvbSAnLi9vYmplY3RzL1VuaXQnXHJcbmltcG9ydCB7TWFyaW5lfSBmcm9tICcuL29iamVjdHMvTWFyaW5lJ1xyXG5pbXBvcnQge1NpZWdlVGFua30gZnJvbSAnLi9vYmplY3RzL1NpZWdlVGFuaydcclxuaW1wb3J0IHtWYWxreXJpZX0gZnJvbSAnLi9vYmplY3RzL1ZhbGt5cmllJ1xyXG5cclxuYWxlcnQoJ0dvb2QgbHVjaywgQ29tbWFuZGVyIScpXHJcbmxldCBpZENvdW50ZXIgPSAwXHJcbmxldCAgYmF0dGxlZmllbGQgPSBbXVxyXG5cclxuXHJcbmNvbnN0IGFkZFVuaXQgPSAoKSA9PiB7XHJcblx0Y29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW5pdE5hbWVGaWVsZFwiKS52YWx1ZVxyXG5cdGNvbnN0IHR5cGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVuaXRUeXBlRmllbGRcIikudmFsdWVcclxuXHRjb25zdCB1bml0ID0gbnVsbFxyXG5cdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0Y2FzZSBcIk1hcmluZVwiOlxyXG5cdFx0XHR1bml0ID0gbmV3IE1hcmluZShuYW1lLCBpZENvdW50ZXIpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIFwiU2llZ2UgVGFua1wiOlxyXG5cdFx0XHRjb25zdCBzaWVnZU1vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVuaXRTaWVnZU1vZGVcIilcclxuXHRcdFx0dW5pdCA9IG5ldyBTaWVnZVRhbmsobmFtZSwgaWRDb3VudGVyLCBzaWVnZU1vZGUpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIFwiVmFsa3lyaWVcIjpcclxuXHRcdFx0dW5pdCA9IG5ldyBWYWxreXJpZShuYW1lLCBpZENvdW50ZXIpXHJcblx0XHRcdGJyZWFrXHJcblx0fVxyXG5cdGJhdHRsZWZpZWxkLmFkZCh1bml0KVxyXG5cdGlkQ291bnRlcisrXHJcblx0cmV0dXJuIHVuaXRcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/index.js\n");

/***/ }),

/***/ "./js/objects/Marine.js":
/*!******************************!*\
  !*** ./js/objects/Marine.js ***!
  \******************************/
/*! exports provided: Marine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Marine\", function() { return Marine; });\n/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ \"./js/objects/Unit.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar Marine =\n/*#__PURE__*/\nfunction (_Unit) {\n  _inherits(Marine, _Unit);\n\n  function Marine(name, id) {\n    var _this;\n\n    _classCallCheck(this, Marine);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Marine).call(this));\n    _this.type = \"Marine\";\n    return _this;\n  }\n\n  return Marine;\n}(_Unit__WEBPACK_IMPORTED_MODULE_0__[\"Unit\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9vYmplY3RzL01hcmluZS5qcz9lZjVmIl0sIm5hbWVzIjpbIk1hcmluZSIsIm5hbWUiLCJpZCIsInR5cGUiLCJVbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsTUFBYjtBQUFBO0FBQUE7QUFBQTs7QUFDQyxrQkFBWUMsSUFBWixFQUFrQkMsRUFBbEIsRUFBc0I7QUFBQTs7QUFBQTs7QUFDckI7QUFDQSxVQUFLQyxJQUFMLEdBQVksUUFBWjtBQUZxQjtBQUdyQjs7QUFKRjtBQUFBLEVBQTRCQywwQ0FBNUIiLCJmaWxlIjoiLi9qcy9vYmplY3RzL01hcmluZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VW5pdH0gZnJvbSAnLi9Vbml0J1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hcmluZSBleHRlbmRzIFVuaXQge1xyXG5cdGNvbnN0cnVjdG9yKG5hbWUsIGlkKSB7XHJcblx0XHRzdXBlcigpXHJcblx0XHR0aGlzLnR5cGUgPSBcIk1hcmluZVwiXHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/objects/Marine.js\n");

/***/ }),

/***/ "./js/objects/SiegeTank.js":
/*!*********************************!*\
  !*** ./js/objects/SiegeTank.js ***!
  \*********************************/
/*! exports provided: SiegeTank */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SiegeTank\", function() { return SiegeTank; });\n/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ \"./js/objects/Unit.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar SiegeTank =\n/*#__PURE__*/\nfunction (_Unit) {\n  _inherits(SiegeTank, _Unit);\n\n  function SiegeTank(name, id, siegeMode) {\n    var _this;\n\n    _classCallCheck(this, SiegeTank);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(SiegeTank).call(this));\n    _this.type = \"Siege Tank\";\n    _this.siegeMode = siegeMode;\n    return _this;\n  }\n\n  return SiegeTank;\n}(_Unit__WEBPACK_IMPORTED_MODULE_0__[\"Unit\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9vYmplY3RzL1NpZWdlVGFuay5qcz81ZDVkIl0sIm5hbWVzIjpbIlNpZWdlVGFuayIsIm5hbWUiLCJpZCIsInNpZWdlTW9kZSIsInR5cGUiLCJVbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsU0FBYjtBQUFBO0FBQUE7QUFBQTs7QUFDQyxxQkFBWUMsSUFBWixFQUFrQkMsRUFBbEIsRUFBc0JDLFNBQXRCLEVBQWlDO0FBQUE7O0FBQUE7O0FBQ2hDO0FBQ0EsVUFBS0MsSUFBTCxHQUFZLFlBQVo7QUFDQSxVQUFLRCxTQUFMLEdBQWlCQSxTQUFqQjtBQUhnQztBQUloQzs7QUFMRjtBQUFBLEVBQStCRSwwQ0FBL0IiLCJmaWxlIjoiLi9qcy9vYmplY3RzL1NpZWdlVGFuay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VW5pdH0gZnJvbSAnLi9Vbml0J1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpZWdlVGFuayBleHRlbmRzIFVuaXQge1xyXG5cdGNvbnN0cnVjdG9yKG5hbWUsIGlkLCBzaWVnZU1vZGUpIHtcclxuXHRcdHN1cGVyKClcclxuXHRcdHRoaXMudHlwZSA9IFwiU2llZ2UgVGFua1wiXHJcblx0XHR0aGlzLnNpZWdlTW9kZSA9IHNpZWdlTW9kZVxyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/objects/SiegeTank.js\n");

/***/ }),

/***/ "./js/objects/Unit.js":
/*!****************************!*\
  !*** ./js/objects/Unit.js ***!
  \****************************/
/*! exports provided: Unit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Unit\", function() { return Unit; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Unit = function Unit(name, id) {\n  _classCallCheck(this, Unit);\n\n  this.name = name;\n  this.id = id;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9vYmplY3RzL1VuaXQuanM/YWU2NiJdLCJuYW1lcyI6WyJVbml0IiwibmFtZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7O0FBQU8sSUFBTUEsSUFBYixHQUNDLGNBQVlDLElBQVosRUFBa0JDLEVBQWxCLEVBQXNCO0FBQUE7O0FBQ3JCLE9BQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtDLEVBQUwsR0FBVUEsRUFBVjtBQUNBLENBSkYiLCJmaWxlIjoiLi9qcy9vYmplY3RzL1VuaXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVW5pdCB7XHJcblx0Y29uc3RydWN0b3IobmFtZSwgaWQpIHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWVcclxuXHRcdHRoaXMuaWQgPSBpZFxyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/objects/Unit.js\n");

/***/ }),

/***/ "./js/objects/Valkyrie.js":
/*!********************************!*\
  !*** ./js/objects/Valkyrie.js ***!
  \********************************/
/*! exports provided: Valkyrie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Valkyrie\", function() { return Valkyrie; });\n/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ \"./js/objects/Unit.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar Valkyrie =\n/*#__PURE__*/\nfunction (_Unit) {\n  _inherits(Valkyrie, _Unit);\n\n  function Valkyrie(name, id) {\n    var _this;\n\n    _classCallCheck(this, Valkyrie);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Valkyrie).call(this));\n    _this.type = \"Valkyrie\";\n    return _this;\n  }\n\n  return Valkyrie;\n}(_Unit__WEBPACK_IMPORTED_MODULE_0__[\"Unit\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9vYmplY3RzL1ZhbGt5cmllLmpzP2ZkNzAiXSwibmFtZXMiOlsiVmFsa3lyaWUiLCJuYW1lIiwiaWQiLCJ0eXBlIiwiVW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFFBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQ0Msb0JBQVlDLElBQVosRUFBa0JDLEVBQWxCLEVBQXNCO0FBQUE7O0FBQUE7O0FBQ3JCO0FBQ0EsVUFBS0MsSUFBTCxHQUFZLFVBQVo7QUFGcUI7QUFHckI7O0FBSkY7QUFBQSxFQUE4QkMsMENBQTlCIiwiZmlsZSI6Ii4vanMvb2JqZWN0cy9WYWxreXJpZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VW5pdH0gZnJvbSAnLi9Vbml0J1xyXG5cclxuZXhwb3J0IGNsYXNzIFZhbGt5cmllIGV4dGVuZHMgVW5pdCB7XHJcblx0Y29uc3RydWN0b3IobmFtZSwgaWQpIHtcclxuXHRcdHN1cGVyKClcclxuXHRcdHRoaXMudHlwZSA9IFwiVmFsa3lyaWVcIlxyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/objects/Valkyrie.js\n");

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
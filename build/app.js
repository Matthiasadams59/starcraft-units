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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _objects_Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects/Unit */ \"./js/objects/Unit.js\");\n/* harmony import */ var _objects_Marine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/Marine */ \"./js/objects/Marine.js\");\n/* harmony import */ var _objects_SiegeTank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects/SiegeTank */ \"./js/objects/SiegeTank.js\");\n/* harmony import */ var _objects_Valkyrie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objects/Valkyrie */ \"./js/objects/Valkyrie.js\");\n\n\n\n\nalert('Good luck, Commander!');\nvar idCounter = 0;\nvar battleField = [];\nvar unitForm = document.querySelector(\"#unitForm\");\nvar unitType = document.querySelector(\"#unitTypeField\");\nvar unitRecap = document.querySelector(\"#unitRecap\");\nunitForm.addEventListener(\"submit\", function (event) {\n  event.preventDefault();\n  var name = document.getElementById(\"unitNameField\").value;\n  var type = unitType.value;\n  var unit = null;\n\n  switch (type) {\n    case \"Marine\":\n      unit = new _objects_Marine__WEBPACK_IMPORTED_MODULE_1__[\"Marine\"](name, idCounter);\n      break;\n\n    case \"Siege Tank\":\n      var siegeMode = document.querySelector('input[name=\"unitSiegeMode\"]:checked').value;\n      unit = new _objects_SiegeTank__WEBPACK_IMPORTED_MODULE_2__[\"SiegeTank\"](name, idCounter, siegeMode);\n      break;\n\n    case \"Valkyrie\":\n      unit = new _objects_Valkyrie__WEBPACK_IMPORTED_MODULE_3__[\"Valkyrie\"](name, idCounter);\n      break;\n  }\n\n  unit.constructor.playReadySound();\n  battleField.push(unit);\n  idCounter++;\n  displayUnit(unit);\n});\nunitType.addEventListener(\"change\", function () {\n  var siegeMode = document.querySelector(\"#siegeTankMode\");\n\n  if (unitType.value === \"Siege Tank\") {\n    siegeMode.removeAttribute(\"hidden\");\n    siegeMode.firstElementChild.required = true;\n  } else {\n    siegeMode.setAttribute(\"hidden\", true);\n    siegeMode.firstElementChild.required = false;\n  }\n});\n\nvar displayUnit = function displayUnit(unit) {\n  unitRecap.innerHTML += unit.asHTMLRow();\n  unitRecap.lastElementChild.addEventListener(\"click\", function () {\n    displayRemoveModal(unit);\n  });\n};\n\nvar removeUnit = function removeUnit(id, type) {\n  battleField.splice(id);\n\n  switch (type) {\n    case \"Marine\":\n      _objects_Marine__WEBPACK_IMPORTED_MODULE_1__[\"Marine\"].playDeathSound();\n      break;\n\n    case \"Siege Tank\":\n      _objects_SiegeTank__WEBPACK_IMPORTED_MODULE_2__[\"SiegeTank\"].playDeathSound();\n      break;\n\n    case \"Valkyrie\":\n      _objects_Valkyrie__WEBPACK_IMPORTED_MODULE_3__[\"Valkyrie\"].playDeathSound();\n      break;\n  }\n\n  document.querySelector(\"div[data-unitId='\".concat(id, \"']\")).remove();\n};\n\nvar displayRemoveModal = function displayRemoveModal(unit) {\n  document.querySelector(\"#modal-body-content\").innerHTML = \"Are you sure you want to remove the \".concat(unit.type, \" \").concat(unit.name, \" ?\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcz9lZTFjIl0sIm5hbWVzIjpbImFsZXJ0IiwiaWRDb3VudGVyIiwiYmF0dGxlRmllbGQiLCJ1bml0Rm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInVuaXRUeXBlIiwidW5pdFJlY2FwIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuYW1lIiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInR5cGUiLCJ1bml0IiwiTWFyaW5lIiwic2llZ2VNb2RlIiwiU2llZ2VUYW5rIiwiVmFsa3lyaWUiLCJjb25zdHJ1Y3RvciIsInBsYXlSZWFkeVNvdW5kIiwicHVzaCIsImRpc3BsYXlVbml0IiwicmVtb3ZlQXR0cmlidXRlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJyZXF1aXJlZCIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImFzSFRNTFJvdyIsImxhc3RFbGVtZW50Q2hpbGQiLCJkaXNwbGF5UmVtb3ZlTW9kYWwiLCJyZW1vdmVVbml0IiwiaWQiLCJzcGxpY2UiLCJwbGF5RGVhdGhTb3VuZCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEtBQUssQ0FBQyx1QkFBRCxDQUFMO0FBQ0EsSUFBSUMsU0FBUyxHQUFHLENBQWhCO0FBQ0EsSUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBRUEsSUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBakI7QUFDQSxJQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBakI7QUFDQSxJQUFNRSxTQUFTLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFsQjtBQUVBRixRQUFRLENBQUNLLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLFVBQUNDLEtBQUQsRUFBVztBQUM5Q0EsT0FBSyxDQUFDQyxjQUFOO0FBQ0EsTUFBTUMsSUFBSSxHQUFHUCxRQUFRLENBQUNRLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNDLEtBQXREO0FBQ0EsTUFBTUMsSUFBSSxHQUFHUixRQUFRLENBQUNPLEtBQXRCO0FBQ0EsTUFBSUUsSUFBSSxHQUFHLElBQVg7O0FBQ0EsVUFBUUQsSUFBUjtBQUNDLFNBQUssUUFBTDtBQUNDQyxVQUFJLEdBQUcsSUFBSUMsc0RBQUosQ0FBV0wsSUFBWCxFQUFpQlYsU0FBakIsQ0FBUDtBQUNBOztBQUNELFNBQUssWUFBTDtBQUNDLFVBQU1nQixTQUFTLEdBQUdiLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixxQ0FBdkIsRUFBOERRLEtBQWhGO0FBQ0FFLFVBQUksR0FBRyxJQUFJRyw0REFBSixDQUFjUCxJQUFkLEVBQW9CVixTQUFwQixFQUErQmdCLFNBQS9CLENBQVA7QUFDQTs7QUFDRCxTQUFLLFVBQUw7QUFDQ0YsVUFBSSxHQUFHLElBQUlJLDBEQUFKLENBQWFSLElBQWIsRUFBbUJWLFNBQW5CLENBQVA7QUFDQTtBQVZGOztBQVlBYyxNQUFJLENBQUNLLFdBQUwsQ0FBaUJDLGNBQWpCO0FBQ0FuQixhQUFXLENBQUNvQixJQUFaLENBQWlCUCxJQUFqQjtBQUNBZCxXQUFTO0FBQ1RzQixhQUFXLENBQUNSLElBQUQsQ0FBWDtBQUNBLENBckJEO0FBdUJBVCxRQUFRLENBQUNFLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLFlBQU07QUFDekMsTUFBTVMsU0FBUyxHQUFHYixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQWxCOztBQUNBLE1BQUdDLFFBQVEsQ0FBQ08sS0FBVCxLQUFtQixZQUF0QixFQUFvQztBQUNuQ0ksYUFBUyxDQUFDTyxlQUFWLENBQTBCLFFBQTFCO0FBQ0FQLGFBQVMsQ0FBQ1EsaUJBQVYsQ0FBNEJDLFFBQTVCLEdBQXVDLElBQXZDO0FBQ0EsR0FIRCxNQUdPO0FBQ05ULGFBQVMsQ0FBQ1UsWUFBVixDQUF1QixRQUF2QixFQUFpQyxJQUFqQztBQUNBVixhQUFTLENBQUNRLGlCQUFWLENBQTRCQyxRQUE1QixHQUF1QyxLQUF2QztBQUNBO0FBQ0QsQ0FURDs7QUFXQSxJQUFNSCxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDUixJQUFELEVBQVU7QUFDN0JSLFdBQVMsQ0FBQ3FCLFNBQVYsSUFBc0JiLElBQUksQ0FBQ2MsU0FBTCxFQUF0QjtBQUNBdEIsV0FBUyxDQUFDdUIsZ0JBQVYsQ0FBMkJ0QixnQkFBM0IsQ0FBNEMsT0FBNUMsRUFBcUQsWUFBTTtBQUMxRHVCLHNCQUFrQixDQUFDaEIsSUFBRCxDQUFsQjtBQUNBLEdBRkQ7QUFHQSxDQUxEOztBQU9BLElBQU1pQixVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxFQUFELEVBQUtuQixJQUFMLEVBQWM7QUFDaENaLGFBQVcsQ0FBQ2dDLE1BQVosQ0FBbUJELEVBQW5COztBQUNBLFVBQVFuQixJQUFSO0FBQ0MsU0FBSyxRQUFMO0FBQ0NFLDREQUFNLENBQUNtQixjQUFQO0FBQ0E7O0FBQ0QsU0FBSyxZQUFMO0FBQ0NqQixrRUFBUyxDQUFDaUIsY0FBVjtBQUNBOztBQUNELFNBQUssVUFBTDtBQUNDaEIsZ0VBQVEsQ0FBQ2dCLGNBQVQ7QUFDQTtBQVRGOztBQVdBL0IsVUFBUSxDQUFDQyxhQUFULDRCQUEyQzRCLEVBQTNDLFNBQW1ERyxNQUFuRDtBQUNBLENBZEQ7O0FBZ0JBLElBQU1MLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ2hCLElBQUQsRUFBVTtBQUNwQ1gsVUFBUSxDQUFDQyxhQUFULENBQXVCLHFCQUF2QixFQUE4Q3VCLFNBQTlDLGlEQUFpR2IsSUFBSSxDQUFDRCxJQUF0RyxjQUE4R0MsSUFBSSxDQUFDSixJQUFuSDtBQUNBLENBRkQiLCJmaWxlIjoiLi9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VW5pdH0gZnJvbSAnLi9vYmplY3RzL1VuaXQnXHJcbmltcG9ydCB7TWFyaW5lfSBmcm9tICcuL29iamVjdHMvTWFyaW5lJ1xyXG5pbXBvcnQge1NpZWdlVGFua30gZnJvbSAnLi9vYmplY3RzL1NpZWdlVGFuaydcclxuaW1wb3J0IHtWYWxreXJpZX0gZnJvbSAnLi9vYmplY3RzL1ZhbGt5cmllJ1xyXG5cclxuYWxlcnQoJ0dvb2QgbHVjaywgQ29tbWFuZGVyIScpXHJcbmxldCBpZENvdW50ZXIgPSAwXHJcbmxldCBiYXR0bGVGaWVsZCA9IFtdXHJcblxyXG5jb25zdCB1bml0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdW5pdEZvcm1cIilcclxuY29uc3QgdW5pdFR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VuaXRUeXBlRmllbGRcIilcclxuY29uc3QgdW5pdFJlY2FwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1bml0UmVjYXBcIilcclxuXHJcbnVuaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XHJcblx0ZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG5cdGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVuaXROYW1lRmllbGRcIikudmFsdWVcclxuXHRjb25zdCB0eXBlID0gdW5pdFR5cGUudmFsdWVcclxuXHRsZXQgdW5pdCA9IG51bGxcclxuXHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdGNhc2UgXCJNYXJpbmVcIjpcclxuXHRcdFx0dW5pdCA9IG5ldyBNYXJpbmUobmFtZSwgaWRDb3VudGVyKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBcIlNpZWdlIFRhbmtcIjpcclxuXHRcdFx0Y29uc3Qgc2llZ2VNb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInVuaXRTaWVnZU1vZGVcIl06Y2hlY2tlZCcpLnZhbHVlXHJcblx0XHRcdHVuaXQgPSBuZXcgU2llZ2VUYW5rKG5hbWUsIGlkQ291bnRlciwgc2llZ2VNb2RlKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBcIlZhbGt5cmllXCI6XHJcblx0XHRcdHVuaXQgPSBuZXcgVmFsa3lyaWUobmFtZSwgaWRDb3VudGVyKVxyXG5cdFx0XHRicmVha1xyXG5cdH1cclxuXHR1bml0LmNvbnN0cnVjdG9yLnBsYXlSZWFkeVNvdW5kKClcclxuXHRiYXR0bGVGaWVsZC5wdXNoKHVuaXQpXHJcblx0aWRDb3VudGVyKytcclxuXHRkaXNwbGF5VW5pdCh1bml0KVxyXG59KVxyXG5cclxudW5pdFR5cGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcblx0Y29uc3Qgc2llZ2VNb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWVnZVRhbmtNb2RlXCIpXHJcblx0aWYodW5pdFR5cGUudmFsdWUgPT09IFwiU2llZ2UgVGFua1wiKSB7XHJcblx0XHRzaWVnZU1vZGUucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpXHJcblx0XHRzaWVnZU1vZGUuZmlyc3RFbGVtZW50Q2hpbGQucmVxdWlyZWQgPSB0cnVlXHJcblx0fSBlbHNlIHtcclxuXHRcdHNpZWdlTW9kZS5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgdHJ1ZSlcclxuXHRcdHNpZWdlTW9kZS5maXJzdEVsZW1lbnRDaGlsZC5yZXF1aXJlZCA9IGZhbHNlXHJcblx0fVxyXG59KVxyXG5cclxuY29uc3QgZGlzcGxheVVuaXQgPSAodW5pdCkgPT4ge1xyXG5cdHVuaXRSZWNhcC5pbm5lckhUTUwgKz11bml0LmFzSFRNTFJvdygpXHJcblx0dW5pdFJlY2FwLmxhc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdGRpc3BsYXlSZW1vdmVNb2RhbCh1bml0KVxyXG5cdH0pXHJcbn1cclxuXHJcbmNvbnN0IHJlbW92ZVVuaXQgPSAoaWQsIHR5cGUpID0+IHtcclxuXHRiYXR0bGVGaWVsZC5zcGxpY2UoaWQpXHJcblx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRjYXNlIFwiTWFyaW5lXCI6XHJcblx0XHRcdE1hcmluZS5wbGF5RGVhdGhTb3VuZCgpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIFwiU2llZ2UgVGFua1wiOlxyXG5cdFx0XHRTaWVnZVRhbmsucGxheURlYXRoU291bmQoKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBcIlZhbGt5cmllXCI6XHJcblx0XHRcdFZhbGt5cmllLnBsYXlEZWF0aFNvdW5kKClcclxuXHRcdFx0YnJlYWtcclxuXHR9XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtdW5pdElkPScke2lkfSddYCkucmVtb3ZlKClcclxufVxyXG5cclxuY29uc3QgZGlzcGxheVJlbW92ZU1vZGFsID0gKHVuaXQpID0+IHtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsLWJvZHktY29udGVudFwiKS5pbm5lckhUTUwgPSBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGUgJHt1bml0LnR5cGV9ICR7dW5pdC5uYW1lfSA/YFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/index.js\n");

/***/ }),

/***/ "./js/objects/Marine.js":
/*!******************************!*\
  !*** ./js/objects/Marine.js ***!
  \******************************/
/*! exports provided: Marine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Marine\", function() { return Marine; });\n/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ \"./js/objects/Unit.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar Marine =\n/*#__PURE__*/\nfunction (_Unit) {\n  _inherits(Marine, _Unit);\n\n  function Marine(name, id) {\n    var _this;\n\n    _classCallCheck(this, Marine);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Marine).call(this, name, id));\n    _this.type = \"Marine\";\n    return _this;\n  }\n\n  _createClass(Marine, null, [{\n    key: \"playReadySound\",\n    value: function playReadySound() {\n      new Audio('../../resources/sound/MarineReady.oga').play();\n    }\n  }, {\n    key: \"playDeathSound\",\n    value: function playDeathSound() {\n      new Audio(\"../../resources/sound/MarineDeath.oga\").play();\n    }\n  }]);\n\n  return Marine;\n}(_Unit__WEBPACK_IMPORTED_MODULE_0__[\"Unit\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9vYmplY3RzL01hcmluZS5qcz9lZjVmIl0sIm5hbWVzIjpbIk1hcmluZSIsIm5hbWUiLCJpZCIsInR5cGUiLCJBdWRpbyIsInBsYXkiLCJVbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLE1BQWI7QUFBQTtBQUFBO0FBQUE7O0FBQ0Msa0JBQVlDLElBQVosRUFBa0JDLEVBQWxCLEVBQXNCO0FBQUE7O0FBQUE7O0FBQ3JCLGdGQUFNRCxJQUFOLEVBQVlDLEVBQVo7QUFDQSxVQUFLQyxJQUFMLEdBQVksUUFBWjtBQUZxQjtBQUdyQjs7QUFKRjtBQUFBO0FBQUEscUNBTXlCO0FBQ3ZCLFVBQUlDLEtBQUosQ0FBVSx1Q0FBVixFQUFtREMsSUFBbkQ7QUFDQTtBQVJGO0FBQUE7QUFBQSxxQ0FVeUI7QUFDdkIsVUFBSUQsS0FBSiwwQ0FBbURDLElBQW5EO0FBQ0E7QUFaRjs7QUFBQTtBQUFBLEVBQTRCQywwQ0FBNUIiLCJmaWxlIjoiLi9qcy9vYmplY3RzL01hcmluZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VW5pdH0gZnJvbSAnLi9Vbml0J1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hcmluZSBleHRlbmRzIFVuaXQge1xyXG5cdGNvbnN0cnVjdG9yKG5hbWUsIGlkKSB7XHJcblx0XHRzdXBlcihuYW1lLCBpZClcclxuXHRcdHRoaXMudHlwZSA9IFwiTWFyaW5lXCJcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBwbGF5UmVhZHlTb3VuZCgpIHtcclxuXHRcdG5ldyBBdWRpbygnLi4vLi4vcmVzb3VyY2VzL3NvdW5kL01hcmluZVJlYWR5Lm9nYScpLnBsYXkoKVxyXG5cdH1cclxuXHJcblx0c3RhdGljIHBsYXlEZWF0aFNvdW5kKCkge1xyXG5cdFx0bmV3IEF1ZGlvKGAuLi8uLi9yZXNvdXJjZXMvc291bmQvTWFyaW5lRGVhdGgub2dhYCkucGxheSgpXHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/objects/Marine.js\n");

/***/ }),

/***/ "./js/objects/SiegeTank.js":
/*!*********************************!*\
  !*** ./js/objects/SiegeTank.js ***!
  \*********************************/
/*! exports provided: SiegeTank */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SiegeTank\", function() { return SiegeTank; });\n/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ \"./js/objects/Unit.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar SiegeTank =\n/*#__PURE__*/\nfunction (_Unit) {\n  _inherits(SiegeTank, _Unit);\n\n  function SiegeTank(name, id, siegeMode) {\n    var _this;\n\n    _classCallCheck(this, SiegeTank);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(SiegeTank).call(this, name, id));\n    _this.type = \"Siege Tank\";\n    _this.siegeMode = siegeMode;\n    return _this;\n  }\n\n  _createClass(SiegeTank, [{\n    key: \"asHTMLRow\",\n    value: function asHTMLRow() {\n      return \"<div class='row' data-unitType='\".concat(this.type, \"' data-unitId='\").concat(this.id, \"' data-toggle=\\\"modal\\\" data-target=\\\"#deleteModal\\\">\").concat(this.type, \" #\").concat(this.id, \": \").concat(this.name, \" (\").concat(this.siegeMode, \")</div>\");\n    }\n  }], [{\n    key: \"playReadySound\",\n    value: function playReadySound() {\n      new Audio('../../resources/sound/SiegeTankReady.oga').play();\n    }\n  }, {\n    key: \"playDeathSound\",\n    value: function playDeathSound() {\n      new Audio(\"../../resources/sound/SiegeTankDeath.oga\").play();\n    }\n  }]);\n\n  return SiegeTank;\n}(_Unit__WEBPACK_IMPORTED_MODULE_0__[\"Unit\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9vYmplY3RzL1NpZWdlVGFuay5qcz81ZDVkIl0sIm5hbWVzIjpbIlNpZWdlVGFuayIsIm5hbWUiLCJpZCIsInNpZWdlTW9kZSIsInR5cGUiLCJBdWRpbyIsInBsYXkiLCJVbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFNBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQ0MscUJBQVlDLElBQVosRUFBa0JDLEVBQWxCLEVBQXNCQyxTQUF0QixFQUFpQztBQUFBOztBQUFBOztBQUNoQyxtRkFBTUYsSUFBTixFQUFZQyxFQUFaO0FBQ0EsVUFBS0UsSUFBTCxHQUFZLFlBQVo7QUFDQSxVQUFLRCxTQUFMLEdBQWlCQSxTQUFqQjtBQUhnQztBQUloQzs7QUFMRjtBQUFBO0FBQUEsZ0NBT2E7QUFDWCx1REFBMEMsS0FBS0MsSUFBL0MsNEJBQXFFLEtBQUtGLEVBQTFFLGtFQUFnSSxLQUFLRSxJQUFySSxlQUE4SSxLQUFLRixFQUFuSixlQUEwSixLQUFLRCxJQUEvSixlQUF3SyxLQUFLRSxTQUE3SztBQUNBO0FBVEY7QUFBQTtBQUFBLHFDQVd5QjtBQUN2QixVQUFJRSxLQUFKLENBQVUsMENBQVYsRUFBc0RDLElBQXREO0FBQ0E7QUFiRjtBQUFBO0FBQUEscUNBZXlCO0FBQ3ZCLFVBQUlELEtBQUosNkNBQXNEQyxJQUF0RDtBQUNBO0FBakJGOztBQUFBO0FBQUEsRUFBK0JDLDBDQUEvQiIsImZpbGUiOiIuL2pzL29iamVjdHMvU2llZ2VUYW5rLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtVbml0fSBmcm9tICcuL1VuaXQnXHJcblxyXG5leHBvcnQgY2xhc3MgU2llZ2VUYW5rIGV4dGVuZHMgVW5pdCB7XHJcblx0Y29uc3RydWN0b3IobmFtZSwgaWQsIHNpZWdlTW9kZSkge1xyXG5cdFx0c3VwZXIobmFtZSwgaWQpXHJcblx0XHR0aGlzLnR5cGUgPSBcIlNpZWdlIFRhbmtcIlxyXG5cdFx0dGhpcy5zaWVnZU1vZGUgPSBzaWVnZU1vZGVcclxuXHR9XHJcblxyXG5cdGFzSFRNTFJvdygpIHtcclxuXHRcdHJldHVybiBgPGRpdiBjbGFzcz0ncm93JyBkYXRhLXVuaXRUeXBlPScke3RoaXMudHlwZX0nIGRhdGEtdW5pdElkPScke3RoaXMuaWR9JyBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZGVsZXRlTW9kYWxcIj4ke3RoaXMudHlwZX0gIyR7dGhpcy5pZH06ICR7dGhpcy5uYW1lfSAoJHt0aGlzLnNpZWdlTW9kZX0pPC9kaXY+YFxyXG5cdH1cclxuXHJcblx0c3RhdGljIHBsYXlSZWFkeVNvdW5kKCkge1xyXG5cdFx0bmV3IEF1ZGlvKCcuLi8uLi9yZXNvdXJjZXMvc291bmQvU2llZ2VUYW5rUmVhZHkub2dhJykucGxheSgpXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgcGxheURlYXRoU291bmQoKSB7XHJcblx0XHRuZXcgQXVkaW8oYC4uLy4uL3Jlc291cmNlcy9zb3VuZC9TaWVnZVRhbmtEZWF0aC5vZ2FgKS5wbGF5KClcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/objects/SiegeTank.js\n");

/***/ }),

/***/ "./js/objects/Unit.js":
/*!****************************!*\
  !*** ./js/objects/Unit.js ***!
  \****************************/
/*! exports provided: Unit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Unit\", function() { return Unit; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Unit =\n/*#__PURE__*/\nfunction () {\n  function Unit(name, id) {\n    _classCallCheck(this, Unit);\n\n    this.name = name;\n    this.id = id;\n    this.type = \"\";\n  }\n\n  _createClass(Unit, [{\n    key: \"asHTMLRow\",\n    value: function asHTMLRow() {\n      return \"<div class='row' data-unitType='\".concat(this.type, \"' data-unitId='\").concat(this.id, \"' data-toggle=\\\"modal\\\" data-target=\\\"#deleteModal\\\">\").concat(this.type, \" #\").concat(this.id, \": \").concat(this.name, \"</div>\");\n    }\n  }]);\n\n  return Unit;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9vYmplY3RzL1VuaXQuanM/YWU2NiJdLCJuYW1lcyI6WyJVbml0IiwibmFtZSIsImlkIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTyxJQUFNQSxJQUFiO0FBQUE7QUFBQTtBQUNDLGdCQUFZQyxJQUFaLEVBQWtCQyxFQUFsQixFQUFzQjtBQUFBOztBQUNyQixTQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxFQUFMLEdBQVVBLEVBQVY7QUFDQSxTQUFLQyxJQUFMLEdBQVksRUFBWjtBQUNBOztBQUxGO0FBQUE7QUFBQSxnQ0FPYTtBQUNYLHVEQUEwQyxLQUFLQSxJQUEvQyw0QkFBcUUsS0FBS0QsRUFBMUUsa0VBQWdJLEtBQUtDLElBQXJJLGVBQThJLEtBQUtELEVBQW5KLGVBQTBKLEtBQUtELElBQS9KO0FBQ0E7QUFURjs7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vanMvb2JqZWN0cy9Vbml0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFVuaXQge1xyXG5cdGNvbnN0cnVjdG9yKG5hbWUsIGlkKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lXHJcblx0XHR0aGlzLmlkID0gaWRcclxuXHRcdHRoaXMudHlwZSA9IFwiXCJcclxuXHR9XHJcblxyXG5cdGFzSFRNTFJvdygpIHtcclxuXHRcdHJldHVybiBgPGRpdiBjbGFzcz0ncm93JyBkYXRhLXVuaXRUeXBlPScke3RoaXMudHlwZX0nIGRhdGEtdW5pdElkPScke3RoaXMuaWR9JyBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZGVsZXRlTW9kYWxcIj4ke3RoaXMudHlwZX0gIyR7dGhpcy5pZH06ICR7dGhpcy5uYW1lfTwvZGl2PmBcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/objects/Unit.js\n");

/***/ }),

/***/ "./js/objects/Valkyrie.js":
/*!********************************!*\
  !*** ./js/objects/Valkyrie.js ***!
  \********************************/
/*! exports provided: Valkyrie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Valkyrie\", function() { return Valkyrie; });\n/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ \"./js/objects/Unit.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar Valkyrie =\n/*#__PURE__*/\nfunction (_Unit) {\n  _inherits(Valkyrie, _Unit);\n\n  function Valkyrie(name, id) {\n    var _this;\n\n    _classCallCheck(this, Valkyrie);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Valkyrie).call(this, name, id));\n    _this.type = \"Valkyrie\";\n    return _this;\n  }\n\n  _createClass(Valkyrie, null, [{\n    key: \"playReadySound\",\n    value: function playReadySound() {\n      new Audio('../../resources/sound/ValkyrieReady.oga').play();\n    }\n  }, {\n    key: \"playDeathSound\",\n    value: function playDeathSound() {\n      new Audio(\"../../resources/sound/ValkyrieDeath.oga\").play();\n    }\n  }]);\n\n  return Valkyrie;\n}(_Unit__WEBPACK_IMPORTED_MODULE_0__[\"Unit\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9vYmplY3RzL1ZhbGt5cmllLmpzP2ZkNzAiXSwibmFtZXMiOlsiVmFsa3lyaWUiLCJuYW1lIiwiaWQiLCJ0eXBlIiwiQXVkaW8iLCJwbGF5IiwiVW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxRQUFiO0FBQUE7QUFBQTtBQUFBOztBQUNDLG9CQUFZQyxJQUFaLEVBQWtCQyxFQUFsQixFQUFzQjtBQUFBOztBQUFBOztBQUNyQixrRkFBTUQsSUFBTixFQUFZQyxFQUFaO0FBQ0EsVUFBS0MsSUFBTCxHQUFZLFVBQVo7QUFGcUI7QUFHckI7O0FBSkY7QUFBQTtBQUFBLHFDQU15QjtBQUN2QixVQUFJQyxLQUFKLENBQVUseUNBQVYsRUFBcURDLElBQXJEO0FBQ0E7QUFSRjtBQUFBO0FBQUEscUNBVXlCO0FBQ3ZCLFVBQUlELEtBQUosNENBQXFEQyxJQUFyRDtBQUNBO0FBWkY7O0FBQUE7QUFBQSxFQUE4QkMsMENBQTlCIiwiZmlsZSI6Ii4vanMvb2JqZWN0cy9WYWxreXJpZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VW5pdH0gZnJvbSAnLi9Vbml0J1xyXG5cclxuZXhwb3J0IGNsYXNzIFZhbGt5cmllIGV4dGVuZHMgVW5pdCB7XHJcblx0Y29uc3RydWN0b3IobmFtZSwgaWQpIHtcclxuXHRcdHN1cGVyKG5hbWUsIGlkKVxyXG5cdFx0dGhpcy50eXBlID0gXCJWYWxreXJpZVwiXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgcGxheVJlYWR5U291bmQoKSB7XHJcblx0XHRuZXcgQXVkaW8oJy4uLy4uL3Jlc291cmNlcy9zb3VuZC9WYWxreXJpZVJlYWR5Lm9nYScpLnBsYXkoKVxyXG5cdH1cclxuXHJcblx0c3RhdGljIHBsYXlEZWF0aFNvdW5kKCkge1xyXG5cdFx0bmV3IEF1ZGlvKGAuLi8uLi9yZXNvdXJjZXMvc291bmQvVmFsa3lyaWVEZWF0aC5vZ2FgKS5wbGF5KClcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/objects/Valkyrie.js\n");

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
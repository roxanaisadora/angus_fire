/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/UI.js":
/*!************************!*\
  !*** ./frontend/UI.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _services_SurveyService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/SurveyService.js */ "./frontend/services/SurveyService.js");

const surveyService = new _services_SurveyService_js__WEBPACK_IMPORTED_MODULE_0__.default()

class UI {
    async addNew(formData){
        await surveyService.postSurvey(formData)
        this.clearForm();
    }
    clearForm (){
        document.getElementById('survey-form').reset();
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);

/***/ }),

/***/ "./frontend/index.js":
/*!***************************!*\
  !*** ./frontend/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ "./frontend/UI.js");
__webpack_require__(/*! ./style/index.css */ "./frontend/style/index.css")
__webpack_require__(/*! ./icons/delivery_fast.png */ "./frontend/icons/delivery_fast.png")
__webpack_require__(/*! ./icons/guitarra.png */ "./frontend/icons/guitarra.png")
__webpack_require__(/*! ./icons/logo.png */ "./frontend/icons/logo.png")
__webpack_require__(/*! ./icons/material.png */ "./frontend/icons/material.png")
__webpack_require__(/*! ./icons/quality.png */ "./frontend/icons/quality.png")
;

document.getElementById('survey-form')
    .addEventListener('submit', e => {
          const name = document.getElementById('name').value;
          const age = document.getElementById('number').value;
          const email = document.getElementById('email').value;
          const comments = document.getElementById('comments').value;

          const formData = new FormData();
          formData.append('name',name);
          formData.append('age',age);
          formData.append('email',email);
          formData.append('comments',comments);

          const ui = new _UI_js__WEBPACK_IMPORTED_MODULE_0__.default();
          ui.addNew(formData)

          e.preventDefault();
          
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'submitted form',
            showConfirmButton: false,
            timer: 1500
        })
    })

/***/ }),

/***/ "./frontend/services/SurveyService.js":
/*!********************************************!*\
  !*** ./frontend/services/SurveyService.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
class SurveyService {

    constructor() {
        this.URI = `/api/survey`;
    }

    async postSurvey(survey) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: survey
        });
        const data = await res.json();
        console.log(data);
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SurveyService);

/***/ }),

/***/ "./frontend/icons/delivery_fast.png":
/*!******************************************!*\
  !*** ./frontend/icons/delivery_fast.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("icons/delivery_fast.png");

/***/ }),

/***/ "./frontend/icons/guitarra.png":
/*!*************************************!*\
  !*** ./frontend/icons/guitarra.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("icons/guitarra.png");

/***/ }),

/***/ "./frontend/icons/logo.png":
/*!*********************************!*\
  !*** ./frontend/icons/logo.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("icons/logo.png");

/***/ }),

/***/ "./frontend/icons/material.png":
/*!*************************************!*\
  !*** ./frontend/icons/material.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("icons/material.png");

/***/ }),

/***/ "./frontend/icons/quality.png":
/*!************************************!*\
  !*** ./frontend/icons/quality.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("icons/quality.png");

/***/ }),

/***/ "./frontend/style/index.css":
/*!**********************************!*\
  !*** ./frontend/style/index.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./frontend/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map
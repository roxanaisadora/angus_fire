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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/UI.js":
/*!************************!*\
  !*** ./frontend/UI.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_SurveyService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/SurveyService.js */ "./frontend/services/SurveyService.js");

const surveyService = new _services_SurveyService_js__WEBPACK_IMPORTED_MODULE_0__["default"]()

class UI {
    async addNew(formData){
        await surveyService.postSurvey(formData)
        this.clearForm();
    }
    clearForm (){
        document.getElementById('survey-form').reset();
    }
}

/* harmony default export */ __webpack_exports__["default"] = (UI);

/***/ }),

/***/ "./frontend/icons/delivery_fast.png":
/*!******************************************!*\
  !*** ./frontend/icons/delivery_fast.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("icons/delivery_fast.png");

/***/ }),

/***/ "./frontend/icons/guitarra.png":
/*!*************************************!*\
  !*** ./frontend/icons/guitarra.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("icons/guitarra.png");

/***/ }),

/***/ "./frontend/icons/logo.png":
/*!*********************************!*\
  !*** ./frontend/icons/logo.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("icons/logo.png");

/***/ }),

/***/ "./frontend/icons/material.png":
/*!*************************************!*\
  !*** ./frontend/icons/material.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("icons/material.png");

/***/ }),

/***/ "./frontend/icons/quality.png":
/*!************************************!*\
  !*** ./frontend/icons/quality.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("icons/quality.png");

/***/ }),

/***/ "./frontend/index.js":
/*!***************************!*\
  !*** ./frontend/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ "./frontend/UI.js");
__webpack_require__(/*! ./style/index.css */ "./frontend/style/index.css")
__webpack_require__(/*! ./icons/delivery_fast.png */ "./frontend/icons/delivery_fast.png")
__webpack_require__(/*! ./icons/guitarra.png */ "./frontend/icons/guitarra.png")
__webpack_require__(/*! ./icons/logo.png */ "./frontend/icons/logo.png")
__webpack_require__(/*! ./icons/material.png */ "./frontend/icons/material.png")
__webpack_require__(/*! ./icons/quality.png */ "./frontend/icons/quality.png")


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

          const ui = new _UI_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class SurveyService {
    constructor() {
        this.URI = `/api/survey`;
    }
    
    async getSurveys() {
        const response = await fetch(this.URI);    
        const surveys = await response.json();
        return surveys;
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

/* harmony default export */ __webpack_exports__["default"] = (SurveyService);

/***/ }),

/***/ "./frontend/style/index.css":
/*!**********************************!*\
  !*** ./frontend/style/index.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
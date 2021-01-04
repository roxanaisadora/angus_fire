/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!******************************!*\
  !*** ./frontend/js/index.js ***!
  \******************************/
eval("(async () => {\n        const{value:name} = await Swal.fire({\n        title: 'Bienvenido !!!',\n        input: 'text',\n        inputLabel: 'Your firts name',\n        inputPlaceholder: 'Enter your firts name'\n    });\n    var elem = document.getElementById('secondary').innerHTML = `Welcome, ${name} nice to have you here 😊`;\n})()\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://angus_fire/./frontend/js/index.js?");
/******/ })()
;
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!********************************!*\
  !*** ./frontend/js/confirm.js ***!
  \********************************/
  eval("function confirmar() {\n    Swal.fire({\n    title: 'Are you sure?',\n    text: \"you want to make the purchase!\",\n    icon: 'warning',\n    showCancelButton: true,\n    confirmButtonColor: '#3085d6',\n    cancelButtonColor: '#d33',\n    confirmButtonText: 'Yes!'\n    }).then((result) => {\n    if (result.isConfirmed) {\n        Swal.fire(\n        'Excellent!',\n        'Your purchase has been made.',\n        'success'\n        )\n    }\n    })\n}\n\n//# sourceURL=webpack://angus_fire/./frontend/js/confirm.js?");
  /******/ })()
  ;
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n/* harmony import */ var _tabreg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabreg */ \"./src/js/tabreg.js\");\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info */ \"./src/js/info.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ \"./src/js/todo.js\");\n/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts */ \"./src/js/posts.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst getUsers = async () => {\r\n  const response = await fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.URL}/users`);\r\n  const data = await response.json();\r\n  renderUsers(data);\r\n  usersListener();\r\n  (0,_info__WEBPACK_IMPORTED_MODULE_2__.infoListener)();\r\n};\r\n\r\nconst renderUsers = (users) => {\r\n  users.forEach((user) => {\r\n    document.querySelector(\r\n      \"#users\"\r\n    ).innerHTML += `<div id=\"user_${user.id}\"><h3>${user.name}</h3></div>`;\r\n  });\r\n};\r\n\r\nconst usersListener = () => {\r\n  const list = document.querySelectorAll(\"#users div\");\r\n  for (let item of list) {\r\n    item.addEventListener(\"click\", (event) => {\r\n      event.preventDefault();\r\n      const [, id] = event.currentTarget.id.split(\"_\");\r\n      document.querySelector(\"#tabs\").classList.remove(\"hidden\");\r\n      (0,_info__WEBPACK_IMPORTED_MODULE_2__.getInfo)(id);\r\n      (0,_todo__WEBPACK_IMPORTED_MODULE_3__.getTodos)(id);\r\n      (0,_posts__WEBPACK_IMPORTED_MODULE_4__.getPosts)(id);\r\n      getAlbums(id);\r\n      (0,_tabreg__WEBPACK_IMPORTED_MODULE_1__.tabReg)(_constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_TAB);\r\n    });\r\n  }\r\n};\r\n\r\nconst getAlbums = async (id) => {\r\n  const response = await fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.URL}/albums?userId=${id}`);\r\n  const data = await response.json();\r\n  renderAlbums(data);\r\n  albumsListener();\r\n};\r\n\r\nconst albumsListener = () => {\r\n  document.querySelector(\"#albums\").addEventListener(\"click\", (event) => {\r\n    event.preventDefault();\r\n    document.querySelector(\"#albums_content\").classList.remove(\"hidden\");\r\n    (0,_tabreg__WEBPACK_IMPORTED_MODULE_1__.tabReg)(\"#albums\");\r\n  });\r\n};\r\n\r\nconst renderAlbums = (albums) => {\r\n  document.querySelector(\"#albums_content\").innerHTML = \"\";\r\n  albums.forEach((album) => {\r\n    document.querySelector(\r\n      \"#albums_content\"\r\n    ).innerHTML += `<p>${album.title}</p>`;\r\n  });\r\n};\r\n\r\ngetUsers();\r\n\n\n//# sourceURL=webpack://mini-project-webpack/./src/js/app.js?");

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"URL\": () => (/* binding */ URL),\n/* harmony export */   \"DEFAULT_TAB\": () => (/* binding */ DEFAULT_TAB)\n/* harmony export */ });\nconst URL = \"https://jsonplaceholder.typicode.com\";\r\n\r\nconst DEFAULT_TAB = \"#info\";\r\n\n\n//# sourceURL=webpack://mini-project-webpack/./src/js/constants.js?");

/***/ }),

/***/ "./src/js/info.js":
/*!************************!*\
  !*** ./src/js/info.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"infoListener\": () => (/* binding */ infoListener),\n/* harmony export */   \"getInfo\": () => (/* binding */ getInfo),\n/* harmony export */   \"renderInfo\": () => (/* binding */ renderInfo)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n/* harmony import */ var _tabreg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabreg */ \"./src/js/tabreg.js\");\n\r\n\r\n\r\n\r\nconst infoListener = () => {\r\n  document.querySelector(\"#info\").addEventListener(\"click\", (event) => {\r\n    event.preventDefault();\r\n    document.querySelector(\"#info_content\").classList.remove(\"hidden\");\r\n    (0,_tabreg__WEBPACK_IMPORTED_MODULE_1__.tabReg)(\"#info\");\r\n  });\r\n};\r\n\r\nconst getInfo = async (id) => {\r\n  const response = await fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.URL}/users/${id}`);\r\n  const data = await response.json();\r\n  renderInfo(data);\r\n};\r\n\r\nconst renderInfo = (user) => {\r\n  document.querySelector(\"#info_content\").innerHTML = `\r\n      <h3>${user.name}</h3>\r\n      <p><span>Username: </span>${user.username}</p>\r\n      <p><span>Email: </span>${user.email}</p>\r\n      <p><span>Adress: </span>\r\n      ${user.address.street}, ${user.address.suite}, ${user.address.city}</p>\r\n      <p><span>Phone: </span>${user.phone}</p>\r\n      <p><span>Company: </span>${user.company.name}</p>`;\r\n};\r\n\n\n//# sourceURL=webpack://mini-project-webpack/./src/js/info.js?");

/***/ }),

/***/ "./src/js/posts.js":
/*!*************************!*\
  !*** ./src/js/posts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPosts\": () => (/* binding */ getPosts),\n/* harmony export */   \"postsListener\": () => (/* binding */ postsListener),\n/* harmony export */   \"renderPosts\": () => (/* binding */ renderPosts)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n/* harmony import */ var _tabreg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabreg */ \"./src/js/tabreg.js\");\n\r\n\r\n\r\n\r\nconst getPosts = async (id) => {\r\n  const response = await fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.URL}/posts?userId=${id}`);\r\n  const data = await response.json();\r\n  renderPosts(data);\r\n  postsListener();\r\n};\r\n\r\nconst postsListener = () => {\r\n  document.querySelector(\"#posts\").addEventListener(\"click\", (event) => {\r\n    event.preventDefault();\r\n    document.querySelector(\"#posts_content\").classList.remove(\"hidden\");\r\n    (0,_tabreg__WEBPACK_IMPORTED_MODULE_1__.tabReg)(\"#posts\");\r\n  });\r\n};\r\n\r\nconst renderPosts = (posts) => {\r\n  document.querySelector(\"#posts_content\").innerHTML = \"\";\r\n  posts.forEach((post) => {\r\n    document.querySelector(\r\n      \"#posts_content\"\r\n    ).innerHTML += `<p>${post.title}</p>`;\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://mini-project-webpack/./src/js/posts.js?");

/***/ }),

/***/ "./src/js/tabreg.js":
/*!**************************!*\
  !*** ./src/js/tabreg.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tabReg\": () => (/* binding */ tabReg)\n/* harmony export */ });\n\r\nconst tabReg = (id) => {\r\n  const tabcontent = document.querySelectorAll(\"#content > div\");\r\n  for (let i = 0; i < tabcontent.length; i++) {\r\n    tabcontent[i].classList.add(\"hidden\");\r\n  }\r\n  document.querySelector(id + \"_content\").classList.remove(\"hidden\");\r\n  return id;\r\n};\r\n\n\n//# sourceURL=webpack://mini-project-webpack/./src/js/tabreg.js?");

/***/ }),

/***/ "./src/js/todo.js":
/*!************************!*\
  !*** ./src/js/todo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTodos\": () => (/* binding */ getTodos),\n/* harmony export */   \"todosListener\": () => (/* binding */ todosListener),\n/* harmony export */   \"renderTodos\": () => (/* binding */ renderTodos)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n/* harmony import */ var _tabreg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabreg */ \"./src/js/tabreg.js\");\n\r\n\r\n\r\n\r\nconst getTodos = async (id) => {\r\n  const response = await fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.URL}/todos?userId=${id}`);\r\n  const data = await response.json();\r\n  renderTodos(data);\r\n  todosListener();\r\n};\r\n\r\nconst todosListener = () => {\r\n  document.querySelector(\"#todo\").addEventListener(\"click\", (event) => {\r\n    event.preventDefault();\r\n    document.querySelector(\"#todo_content\").classList.remove(\"hidden\");\r\n    (0,_tabreg__WEBPACK_IMPORTED_MODULE_1__.tabReg)(\"#todo\");\r\n  });\r\n};\r\n\r\nconst renderTodos = (todos) => {\r\n  document.querySelector(\"#todo_content\").innerHTML = \"\";\r\n  todos.forEach((todo) => {\r\n    document.querySelector(\"#todo_content\").innerHTML += `<p>${todo.title}</p>`;\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://mini-project-webpack/./src/js/todo.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;
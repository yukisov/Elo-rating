/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*************************!*\
  !*** ./src/js/entry.js ***!
  \*************************/
/***/ function(module, exports) {

	const FOO = 'hello, foo!';
	
	
	console.log(FOO);
	
	class Cat {
	  constructor(name) {
	    this.name = name;
	  }
	  set name(name) {
	    this._name = name;
	  }
	  get name() {
	    return this._name;
	  }
	  walk() {
	    return this._name + 'が歩いてます';
	  }
	}
	
	/* Catクラスのインスタンス作成 */
	
	var cat1 = new Cat('タマ');
	var cat2 = new Cat('コタロー');
	console.log(cat1.walk()); // タマが歩いています
	console.log(cat2.walk());
	


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map
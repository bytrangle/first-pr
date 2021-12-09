module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(676);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 676:
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

const fs = __webpack_require__(747)
let githubEvent = process.env.EVENT
githubEvent = JSON.parse(githubEvent)
// console.log(process.env)
let token = process.env.INPUT_REPO_TOKEN
if (!token) {
  return
} else {
  const repo = process.env.GITHUB_REPOSITORY
  const rawData = fs.readFileSync(process.env.GITHUB_EVENT_PATH)
  const json = JSON.parse(rawData)
  // console.log(pr)
  const { pull_request: pr } = json
  const author = pr.user.login
  const mergedAt = pr.merged_at
  console.log({ repo })
  console.log({ author })
  console.log({ mergedAt })
}
// const now = new Date()
// const nowIso = now.toISOString()

// const query = '{\
//   search(first: 2, type:ISSUE, query: "") {\
//     issueCount\
//   }\
// }'

/***/ }),

/***/ 747:
/***/ (function(module) {

module.exports = require("fs");

/***/ })

/******/ });
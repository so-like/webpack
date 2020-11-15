/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("// index.js为webpack入口起点文件\r\n// webpack可以处理js和json文件 但他不能处理img和css文件必须借助loader模块\r\n\r\n// 运行指令分为开发环境指令和生产环境指令\r\n// 起点文件路径 打包之后生成文件路径 所使用的环境为开发环境\r\n// 开发环境  webpack ./src/index.js -o ./build/built.js --mode=development\r\n\r\nfunction add(a,b){\r\n    return a+b;\r\n}\r\nconsole.log(add(1,2));\n\n//# sourceURL=webpack://webpack-test/./src/index.js?");
/******/ })()
;
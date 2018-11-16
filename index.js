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
/******/ 	return __webpack_require__(__webpack_require__.s = "./youtube-client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./youtube-client/index.js":
/*!*********************************!*\
  !*** ./youtube-client/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_XMLHttpRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/XMLHttpRequest */ \"./youtube-client/lib/XMLHttpRequest.js\");\n/* harmony import */ var _lib_renderElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/renderElement */ \"./youtube-client/lib/renderElement.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  Object(_lib_renderElement__WEBPACK_IMPORTED_MODULE_1__[\"startPage\"])();\n  const search = document.querySelector('.search');\n  search.addEventListener('change', (e) => {\n    let currentPage = 0;\n    const result = e.target.value;\n    let info = Object(_lib_XMLHttpRequest__WEBPACK_IMPORTED_MODULE_0__[\"videoRequest\"])(result);\n    if (document.querySelector('.visible')) {\n      Object(_lib_renderElement__WEBPACK_IMPORTED_MODULE_1__[\"removePage\"])();\n    }\n    if (document.querySelector('.target')) {\n      const body = document.querySelector('.body');\n      const allbutton = document.querySelectorAll('.target');\n      for (let i = 0; i < allbutton.length; i += 1) {\n        body.removeChild(allbutton[i]);\n      }\n    }\n    Object(_lib_renderElement__WEBPACK_IMPORTED_MODULE_1__[\"renderButton\"])('button1', currentPage);\n    Object(_lib_renderElement__WEBPACK_IMPORTED_MODULE_1__[\"renderButton\"])('button2', currentPage);\n    Object(_lib_renderElement__WEBPACK_IMPORTED_MODULE_1__[\"renderButton\"])('button3', currentPage);\n    Object(_lib_renderElement__WEBPACK_IMPORTED_MODULE_1__[\"renderButton\"])('button4', currentPage);\n    Object(_lib_renderElement__WEBPACK_IMPORTED_MODULE_1__[\"renderPage\"])(info, currentPage);\n    const rightButton = document.querySelectorAll('.right');\n    rightButton.forEach(el => el.addEventListener('click', (event) => {\n      Object(_lib_renderElement__WEBPACK_IMPORTED_MODULE_1__[\"removePage\"])();\n      if (event.target === rightButton[3]) {\n        currentPage += 3;\n      } if (event.target === rightButton[2]) {\n        currentPage += 2;\n      } if (event.target === rightButton[1]) {\n        currentPage += 2;\n      } else {\n        currentPage += 1;\n      }\n      const pageCount1 = document.querySelector('.button1-count');\n      const pageCount2 = document.querySelector('.button2-count');\n      const pageCount3 = document.querySelector('.button3-count');\n      const pageCount4 = document.querySelector('.button4-count');\n      pageCount1.innerHTML = currentPage + 1;\n      pageCount2.innerHTML = Math.ceil((currentPage + 1) / 2);\n      pageCount3.innerHTML = Math.ceil((currentPage + 1) / 3);\n      pageCount4.innerHTML = Math.ceil((currentPage + 1) / 4);\n      if (info.length - currentPage < 6) {\n        const info2 = Object(_lib_XMLHttpRequest__WEBPACK_IMPORTED_MODULE_0__[\"videoRequest2\"])(result, info);\n        info = info.concat(info2);\n      }\n      Object(_lib_renderElement__WEBPACK_IMPORTED_MODULE_1__[\"renderPage\"])(info, currentPage);\n    }));\n    const leftButton = document.querySelectorAll('.left');\n    leftButton.forEach(el => el.addEventListener('click', (event) => {\n      Object(_lib_renderElement__WEBPACK_IMPORTED_MODULE_1__[\"removePage\"])();\n      if (event.target === leftButton[3]) {\n        currentPage -= 3;\n      } if (event.target === leftButton[2]) {\n        currentPage -= 2;\n      } if (event.target === leftButton[1]) {\n        currentPage -= 2;\n      } else {\n        currentPage -= 1;\n      }\n      if (currentPage < 0) {\n        currentPage = 0;\n      }\n      const pageCount1 = document.querySelector('.button1-count');\n      const pageCount2 = document.querySelector('.button2-count');\n      const pageCount3 = document.querySelector('.button3-count');\n      const pageCount4 = document.querySelector('.button4-count');\n      pageCount1.innerHTML = currentPage + 1;\n      pageCount2.innerHTML = Math.ceil((currentPage + 1) / 2);\n      pageCount3.innerHTML = Math.ceil((currentPage + 1) / 3);\n      pageCount4.innerHTML = Math.ceil((currentPage + 1) / 4);\n      Object(_lib_renderElement__WEBPACK_IMPORTED_MODULE_1__[\"renderPage\"])(info, currentPage);\n    }));\n    document.onmouseup = () => {\n      const alltool = document.querySelectorAll('.live');\n      if (alltool.length > 0) {\n        const body = document.querySelector('.body');\n        const tooltip1 = document.querySelector('.tooltip1');\n        const tooltip2 = document.querySelector('.tooltip2');\n        const tooltip3 = document.querySelector('.tooltip3');\n        const tooltip4 = document.querySelector('.tooltip4');\n        body.removeChild(tooltip1);\n        body.removeChild(tooltip2);\n        body.removeChild(tooltip3);\n        body.removeChild(tooltip4);\n      }\n    };\n    const matrix = document.querySelector('.matrix');\n    matrix.onmousedown = (event) => {\n      const down = event.pageX;\n      const top = event.pageY;\n      Object(_lib_renderElement__WEBPACK_IMPORTED_MODULE_1__[\"renderTooltip\"])(currentPage, down, top);\n      document.onmousemove = (ev) => {\n        if (ev.which !== 1) {\n          return;\n        }\n        if (down + 150 < ev.pageX) {\n          const content4 = getComputedStyle(document.querySelector('.content4')).display;\n          const content3 = getComputedStyle(document.querySelector('.content3')).display;\n          const content2 = getComputedStyle(document.querySelector('.content2')).display;\n          document.querySelector('.content1.visible').classList.add('transition');\n          document.querySelector('.content2.visible').classList.add('transition');\n          document.querySelector('.content3.visible').classList.add('transition');\n          document.querySelector('.content4.visible').classList.add('transition');\n          setTimeout(_lib_renderElement__WEBPACK_IMPORTED_MODULE_1__[\"removePage\"], 1000);\n          if (content4 === 'flex') {\n            currentPage += 3;\n          } if (content3 === 'flex') {\n            currentPage += 2;\n          } if (content2 === 'flex') {\n            currentPage += 2;\n          } else {\n            currentPage += 1;\n          }\n          const pageCount1 = document.querySelector('.button1-count');\n          const pageCount2 = document.querySelector('.button2-count');\n          const pageCount3 = document.querySelector('.button3-count');\n          const pageCount4 = document.querySelector('.button4-count');\n          pageCount1.innerHTML = currentPage + 1;\n          pageCount2.innerHTML = Math.ceil((currentPage + 1) / 2);\n          pageCount3.innerHTML = Math.ceil((currentPage + 1) / 3);\n          pageCount4.innerHTML = Math.ceil((currentPage + 1) / 4);\n          if (info.length - currentPage < 6) {\n            const info2 = Object(_lib_XMLHttpRequest__WEBPACK_IMPORTED_MODULE_0__[\"videoRequest2\"])(result, info);\n            info = info.concat(info2);\n          }\n          setTimeout(_lib_renderElement__WEBPACK_IMPORTED_MODULE_1__[\"renderPage\"], 1000, info, currentPage);\n          document.onmousemove = null;\n        }\n        if (down - 150 > ev.pageX) {\n          const content4 = getComputedStyle(document.querySelector('.content4')).display;\n          const content3 = getComputedStyle(document.querySelector('.content3')).display;\n          const content2 = getComputedStyle(document.querySelector('.content2')).display;\n          document.querySelector('.content1.visible').classList.add('transition');\n          document.querySelector('.content2.visible').classList.add('transition');\n          document.querySelector('.content3.visible').classList.add('transition');\n          document.querySelector('.content4.visible').classList.add('transition');\n          setTimeout(_lib_renderElement__WEBPACK_IMPORTED_MODULE_1__[\"removePage\"], 1000);\n          if (content4 === 'flex') {\n            currentPage -= 3;\n          } if (content3 === 'flex') {\n            currentPage -= 2;\n          } if (content2 === 'flex') {\n            currentPage -= 2;\n          } else {\n            currentPage -= 1;\n          }\n          if (currentPage < 1) {\n            currentPage = 0;\n          }\n          const pageCount1 = document.querySelector('.button1-count');\n          const pageCount2 = document.querySelector('.button2-count');\n          const pageCount3 = document.querySelector('.button3-count');\n          const pageCount4 = document.querySelector('.button4-count');\n          pageCount1.innerHTML = currentPage + 1;\n          pageCount2.innerHTML = Math.ceil((currentPage + 1) / 2);\n          pageCount3.innerHTML = Math.ceil((currentPage + 1) / 3);\n          pageCount4.innerHTML = Math.ceil((currentPage + 1) / 4);\n          setTimeout(_lib_renderElement__WEBPACK_IMPORTED_MODULE_1__[\"renderPage\"], 1000, info, currentPage);\n          document.onmousemove = null;\n        }\n      };\n      document.ondragstart = () => false;\n    };\n  });\n});\n\n\n//# sourceURL=webpack:///./youtube-client/index.js?");
  
  /***/ }),
  
  /***/ "./youtube-client/lib/XMLHttpRequest.js":
  /*!**********************************************!*\
    !*** ./youtube-client/lib/XMLHttpRequest.js ***!
    \**********************************************/
  /*! exports provided: videoRequest, videoRequest2 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"videoRequest\", function() { return videoRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"videoRequest2\", function() { return videoRequest2; });\n/* harmony import */ var _renderElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderElement */ \"./youtube-client/lib/renderElement.js\");\n\n\nfunction statisticRequest(video) {\n  const url = 'https://www.googleapis.com/youtube/v3/videos?';\n  const params = {\n    part: 'part=statistics',\n    key: 'key=AIzaSyD3cMxUk1qFHsOty7ISsuUcTkx84yfs4Vs&',\n    id: `id= ${video.map(e => e.id).join(',')} &`,\n  };\n  const videos = video;\n  const xhr = new XMLHttpRequest();\n  xhr.open('GET', url + params.key + params.id + params.part, false);\n  xhr.send();\n  if (xhr.status !== 200) {\n    console.log(xhr);\n  } else {\n    console.log(xhr);\n  }\n  const item = JSON.parse(xhr.response);\n  item.items.forEach((e, i) => { videos[i].viewers = e.statistics.viewCount; });\n}\nfunction addvideo(a) {\n  a.forEach((e) => { e.doomelement = Object(_renderElement__WEBPACK_IMPORTED_MODULE_0__[\"renderVideo\"])(e); });\n}\nfunction videoRequest(searchTerm) {\n  const url = 'https://www.googleapis.com/youtube/v3/search?';\n  const params = {\n    part: 'part=snippet&',\n    key: 'key=AIzaSyD3cMxUk1qFHsOty7ISsuUcTkx84yfs4Vs&',\n    q: `q= ${searchTerm}`,\n    type: 'type=video&',\n    maxResults: 'maxResults=15&',\n  };\n  const xhr = new XMLHttpRequest();\n  xhr.open('GET', url + params.key + params.type + params.part + params.maxResults + params.q, false);\n  xhr.send();\n  if (xhr.status !== 200) {\n    console.log(xhr);\n  } else {\n    console.log(xhr);\n  }\n  const item = JSON.parse(xhr.response);\n  const map = item.items.map((a) => {\n    let time = a.snippet.publishedAt;\n    time = time.split('T');\n    return {\n      id: a.id.videoId,\n      photo: a.snippet.thumbnails.high.url,\n      Name: a.snippet.channelTitle,\n      time: time[0],\n      discription: a.snippet.description,\n      title: a.snippet.title,\n      pageToken: item.nextPageToken,\n    };\n  });\n  statisticRequest(map);\n  addvideo(map);\n  return map;\n}\nfunction videoRequest2(searchTerm, obj) {\n  const url = 'https://www.googleapis.com/youtube/v3/search?';\n  const params = {\n    part: 'part=snippet&',\n    key: 'key=AIzaSyD3cMxUk1qFHsOty7ISsuUcTkx84yfs4Vs&',\n    q: `q= ${searchTerm}`,\n    type: 'type=video&',\n    maxResults: 'maxResults=15&',\n    pageToken: `pageToken= ${obj[obj.length - 1].pageToken}$ &`,\n  };\n  const xhr = new XMLHttpRequest();\n  xhr.open('GET', url + params.pageToken + params.key + params.type + params.part + params.maxResults + params.q, false);\n  xhr.send();\n  if (xhr.status !== 200) {\n    console.log(xhr);\n  } else {\n    console.log(xhr);\n  }\n  const item = JSON.parse(xhr.response);\n  const map2 = item.items.map((a) => {\n    let time = a.snippet.publishedAt;\n    time = time.split('T');\n    return {\n      id: a.id.videoId,\n      photo: a.snippet.thumbnails.medium.url,\n      Name: a.snippet.channelTitle,\n      time: time[0],\n      discription: a.snippet.description,\n      title: a.snippet.title,\n      pageToken: item.nextPageToken,\n    };\n  });\n  statisticRequest(map2);\n  addvideo(map2);\n  return map2;\n}\n\n\n//# sourceURL=webpack:///./youtube-client/lib/XMLHttpRequest.js?");
  
  /***/ }),
  
  /***/ "./youtube-client/lib/renderElement.js":
  /*!*********************************************!*\
    !*** ./youtube-client/lib/renderElement.js ***!
    \*********************************************/
  /*! exports provided: default, renderVideo, removePage, renderButton, renderTooltip, renderPage, startPage */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderVideo\", function() { return renderVideo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removePage\", function() { return removePage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderButton\", function() { return renderButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTooltip\", function() { return renderTooltip; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPage\", function() { return renderPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startPage\", function() { return startPage; });\nfunction renderElement(name, obj) {\n  const a = document.createElement(name);\n  for (const key in obj) {\n    if ({}.hasOwnProperty.call(obj, key)) {\n      a[key] = obj[key];\n    }\n  }\n  return a;\n}\nfunction renderVideo(data) {\n  const div = renderElement('div', { className: 'test' });\n  const img = renderElement('img', { src: data.photo });\n  const name = renderElement('p', { innerHTML: data.Name, className: 'chanel' });\n  const time = renderElement('p', { innerHTML: data.time, className: 'time' });\n  const viewer = renderElement('p', { innerHTML: data.viewers, className: 'count' });\n  const discription = renderElement('div', { innerHTML: data.discription, className: 'discription' });\n  const title = renderElement('div', { className: 'title' });\n  const link = renderElement('a', { innerHTML: data.title, href: `https://www.youtube.com/watch?v= ${data.id}` });\n  div.appendChild(img);\n  div.appendChild(name);\n  div.appendChild(time);\n  div.appendChild(viewer);\n  div.appendChild(discription);\n  div.appendChild(title);\n  title.appendChild(link);\n  return div;\n}\nfunction removePage() {\n  const matrix = document.querySelector('.matrix');\n  const child4 = document.querySelector('.content4');\n  const child3 = document.querySelector('.content3');\n  const child2 = document.querySelector('.content2');\n  const child1 = document.querySelector('.content1');\n  matrix.removeChild(child4);\n  matrix.removeChild(child3);\n  matrix.removeChild(child2);\n  matrix.removeChild(child1);\n}\nfunction renderButton(name, count) {\n  const body = document.querySelector('.body');\n  const butt = renderElement('div', { className: `${name} target` });\n  const left = renderElement('i', { className: 'left fas fa-caret-left' });\n  const right = renderElement('i', { className: 'right fas fa-caret-right' });\n  const pageCount = renderElement('div', { innerHTML: count + 1, className: `${name}-count` });\n  butt.appendChild(left);\n  butt.appendChild(pageCount);\n  butt.appendChild(right);\n  body.appendChild(butt);\n}\nfunction renderTooltip(currentPage, down, top) {\n  const body = document.querySelector('.body');\n  const tooltip1 = renderElement('p', { className: 'tooltip1 live' });\n  const tooltip2 = renderElement('p', { className: 'tooltip2 live' });\n  const tooltip3 = renderElement('p', { className: 'tooltip3 live' });\n  const tooltip4 = renderElement('p', { className: 'tooltip4 live' });\n  tooltip1.innerHTML = currentPage + 1;\n  tooltip2.innerHTML = Math.ceil((currentPage + 1) / 2);\n  tooltip3.innerHTML = Math.ceil((currentPage + 1) / 3);\n  tooltip4.innerHTML = Math.ceil((currentPage + 1) / 4);\n  body.appendChild(tooltip1);\n  body.appendChild(tooltip2);\n  body.appendChild(tooltip3);\n  body.appendChild(tooltip4);\n  tooltip1.style.left = `${down}px`;\n  tooltip1.style.top = `${top - 25}px`;\n  tooltip2.style.left = `${down}px`;\n  tooltip2.style.top = `${top - 25}px`;\n  tooltip3.style.left = `${down}px`;\n  tooltip3.style.top = `${top - 25}px`;\n  tooltip4.style.left = `${down}px`;\n  tooltip4.style.top = `${top - 25}px`;\n}\nfunction renderPage(arr, page) {\n  const content4 = renderElement('div', { className: 'content4 visible' });\n  const matrix = document.querySelector('.matrix');\n  matrix.appendChild(content4);\n  const content3 = renderElement('div', { className: 'content3 visible' });\n  matrix.appendChild(content3);\n  const content2 = renderElement('div', { className: 'content2 visible' });\n  matrix.appendChild(content2);\n  const content1 = renderElement('div', { className: 'content1 visible' });\n  matrix.appendChild(content1);\n  if (page > 3) {\n    for (let i = page; i < page + 4; i += 1) {\n      const element = (arr[i].doomelement).cloneNode(true);\n      content4.appendChild(element);\n    }\n  } else {\n    for (let i = page * 0; i < page * 0 + 4; i += 1) {\n      const element = (arr[i].doomelement).cloneNode(true);\n      content4.appendChild(element);\n    }\n  }\n  if (page > 2) {\n    for (let i = page; i < page + 3; i += 1) {\n      content3.appendChild((arr[i].doomelement).cloneNode(true));\n    }\n  } else {\n    for (let i = page * 0; i < page * 0 + 3; i += 1) {\n      const element = (arr[i].doomelement).cloneNode(true);\n      content3.appendChild(element);\n    }\n  }\n  if (page > 1) {\n    for (let i = page; i < page + 2; i += 1) {\n      content2.appendChild((arr[i].doomelement).cloneNode(true));\n    }\n  } else {\n    for (let i = page * 0; i < page * 0 + 2; i += 1) {\n      const element = (arr[i].doomelement).cloneNode(true);\n      content2.appendChild(element);\n    }\n  }\n  if (page > 0) {\n    for (let i = page; i < page + 1; i += 1) {\n      content1.appendChild((arr[i].doomelement).cloneNode(true));\n    }\n  } else {\n    for (let i = page * 0; i < page * 1 + 1; i += 1) {\n      const element = (arr[i].doomelement).cloneNode(true);\n      content1.appendChild(element);\n    }\n  }\n}\nfunction startPage() {\n  const wrapper = renderElement('div', { className: 'wrapper' });\n  const form = renderElement('form', { className: 'blocks', action: '#', method: 'get' });\n  const p = renderElement('p');\n  const i = renderElement('i', { className: 'fas fa-search' });\n  const input = renderElement('input', { className: 'search', type: 'text' });\n  const matrix = renderElement('div', { className: 'matrix' });\n  const body = document.querySelector('.body');\n  p.appendChild(i);\n  p.appendChild(input);\n  form.appendChild(p);\n  wrapper.appendChild(form);\n  body.appendChild(wrapper);\n  body.appendChild(matrix);\n}\n\n\n//# sourceURL=webpack:///./youtube-client/lib/renderElement.js?");
  
  /***/ })
  
  /******/ });
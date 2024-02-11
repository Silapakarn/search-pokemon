"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/queries */ \"./graphql/queries.tsx\");\nvar _jsxFileName = \"/Users/silapakaneragonhotmail.co.th/Desktop/Code/Next/github/search-pokemon/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(router.query.name || ''),\n      searchQuery = _useState[0],\n      setSearchQuery = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      searchTriggered = _useState2[0],\n      setSearchTriggered = _useState2[1];\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(_graphql_queries__WEBPACK_IMPORTED_MODULE_2__.GET_POKEMON_BY_NAME, {\n    variables: {\n      name: searchQuery\n    },\n    skip: !searchQuery\n  }),\n      data = _useQuery.data,\n      loading = _useQuery.loading,\n      error = _useQuery.error;\n\n  var handleSearch = function handleSearch(event) {\n    var value = event.target.value;\n    setSearchQuery(value);\n  };\n\n  var handleEvolutionClick = function handleEvolutionClick(evolutionName) {\n    setSearchQuery(evolutionName);\n    router.push({\n      pathname: '/',\n      query: {\n        name: evolutionName\n      }\n    }, undefined, {\n      shallow: true\n    });\n  };\n\n  var handleFindPokemon = function handleFindPokemon(value) {\n    console.log(\"🚀 ~ handleFindPokemon ~ value:\", value);\n    setSearchTriggered(true);\n    router.push({\n      pathname: '/',\n      query: {\n        name: searchQuery\n      }\n    }, undefined, {\n      shallow: true\n    });\n  };\n\n  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"loading\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 23\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 48\n    }\n  }, \"Loading...\"));\n  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 21\n    }\n  }, \"Error: \", error.message);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"logo\",\n    src: 'https://cdn.worldvectorlogo.com/logos/pokemon-23.svg',\n    alt: 'Search Pokémon by name',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    value: searchQuery,\n    onChange: handleSearch,\n    placeholder: \"Search Pok\\xE9mon by name\",\n    className: \"search-input\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: handleFindPokemon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 8\n    }\n  }, \"Find Pokemon\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"information\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, data && data.pokemon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    key: data.pokemon.id,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: data.pokemon.image,\n    alt: data.pokemon.name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, data.pokemon.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n    className: \"type \".concat(data.pokemon.types[0].toLowerCase()),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }, \"Type: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 21\n    }\n  }, data.pokemon.types[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 15\n    }\n  }, \"Attacks:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 15\n    }\n  }, data.pokemon.attacks.fast.map(function (attack, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 19\n      }\n    }, attack.name, \" (\", attack.type, \") - Damage: \", attack.damage);\n  }), data.pokemon.attacks.special.map(function (attack, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 19\n      }\n    }, attack.name, \" (\", attack.type, \") - Damage: \", attack.damage);\n  }))), data.pokemon.evolutions && data.pokemon.evolutions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"evolutions_header\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 15\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 17\n    }\n  }, \"Evolutions:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: \"evolutions\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 17\n    }\n  }, data.pokemon.evolutions.map(function (evolution) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      key: evolution.id,\n      onClick: function onClick() {\n        return handleEvolutionClick(evolution.name);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 21\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      src: evolution.image,\n      alt: evolution.name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 23\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 23\n      }\n    }, evolution.name));\n  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"no_found\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 11\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 13\n    }\n  }, \"No found Pok\\xE9mon.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: 'https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg',\n    alt: 'No found Pokémon.',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 13\n    }\n  }))));\n}\n\n_s(Home, \"Z8lMeMotVcmEZaqt2TbAMmejnqc=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG9CQUFvQixDQUFDeUIsU0FBUyxDQUFDdkMsSUFBWCxDQUExQjtNQUFBLENBQWhDO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsZ0JBQ0U7TUFBSyxHQUFHLEVBQUV1QyxTQUFTLENBQUNiLEtBQXBCO01BQTJCLEdBQUcsRUFBRWEsU0FBUyxDQUFDdkMsSUFBMUM7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQURGLGVBRUU7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUFLdUMsU0FBUyxDQUFDdkMsSUFBZixDQUZGLENBRDJCO0VBQUEsQ0FBNUIsQ0FESCxDQUZGLENBeEJKLENBREQsZ0JBdUNDO0lBQUssU0FBUyxFQUFDLFVBQWY7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxnQkFDRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQUksc0JBQUosQ0FERixlQUVFO0lBQUssR0FBRyxFQUFFLG1HQUFWO0lBQStHLEdBQUcsRUFBRSxtQkFBcEg7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUZGLENBeENKLENBWEYsQ0FERjtBQTRERDs7R0ExRlFIO1VBQ1FGLG9EQUtrQkQ7OztLQU4xQkc7QUE0RlQsK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBHRVRfUE9LRU1PTl9CWV9OQU1FIH0gZnJvbSAnLi4vZ3JhcGhxbC9xdWVyaWVzJztcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUocm91dGVyLnF1ZXJ5Lm5hbWUgfHwgJycpO1xuICBjb25zdCBbc2VhcmNoVHJpZ2dlcmVkLCBzZXRTZWFyY2hUcmlnZ2VyZWRdID0gdXNlU3RhdGUoZmFsc2UpOyBcblxuXG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KEdFVF9QT0tFTU9OX0JZX05BTUUsIHtcbiAgICB2YXJpYWJsZXM6IHsgbmFtZTogc2VhcmNoUXVlcnkgfSxcbiAgICBza2lwOiAhc2VhcmNoUXVlcnksXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChldmVudDogYW55KSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIHNldFNlYXJjaFF1ZXJ5KHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVFdm9sdXRpb25DbGljayA9IChldm9sdXRpb25OYW1lOiBhbnkpID0+IHtcbiAgICBzZXRTZWFyY2hRdWVyeShldm9sdXRpb25OYW1lKTtcbiAgICByb3V0ZXIucHVzaCh7IHBhdGhuYW1lOiAnLycsIHF1ZXJ5OiB7IG5hbWU6IGV2b2x1dGlvbk5hbWUgfSB9LCB1bmRlZmluZWQsIHsgc2hhbGxvdzogdHJ1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGaW5kUG9rZW1vbiA9ICh2YWx1ZTogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCLwn5qAIH4gaGFuZGxlRmluZFBva2Vtb24gfiB2YWx1ZTpcIiwgdmFsdWUpXG4gICAgc2V0U2VhcmNoVHJpZ2dlcmVkKHRydWUpOyBcbiAgICByb3V0ZXIucHVzaCh7IHBhdGhuYW1lOiAnLycsIHF1ZXJ5OiB7IG5hbWU6IHNlYXJjaFF1ZXJ5IH0gfSwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSk7XG4gIH07XG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZyc+PGgxPkxvYWRpbmcuLi48L2gxPjwvZGl2PjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPGgxPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2gxPjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aW1nIGNsYXNzTmFtZT0nbG9nbycgc3JjPXsnaHR0cHM6Ly9jZG4ud29ybGR2ZWN0b3Jsb2dvLmNvbS9sb2dvcy9wb2tlbW9uLTIzLnN2Zyd9IGFsdD17J1NlYXJjaCBQb2vDqW1vbiBieSBuYW1lJ30gLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaH1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggUG9rw6ltb24gYnkgbmFtZVwiXG4gICAgICAgIGNsYXNzTmFtZT0nc2VhcmNoLWlucHV0J1xuICAgICAgLz5cbiAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUZpbmRQb2tlbW9ufT5GaW5kIFBva2Vtb248L2J1dHRvbj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2luZm9ybWF0aW9uJz5cbiAgICAgICAge2RhdGEgJiYgZGF0YS5wb2tlbW9uID8gKFxuICAgICAgICAgIDxkaXYga2V5PXtkYXRhLnBva2Vtb24uaWR9PlxuICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEucG9rZW1vbi5pbWFnZX0gYWx0PXtkYXRhLnBva2Vtb24ubmFtZX0gLz5cbiAgICAgICAgICAgIDxoMT57ZGF0YS5wb2tlbW9uLm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e2B0eXBlICR7ZGF0YS5wb2tlbW9uLnR5cGVzWzBdLnRvTG93ZXJDYXNlKCl9YH0+XG4gICAgICAgICAgICAgIFR5cGU6IDxhPntkYXRhLnBva2Vtb24udHlwZXNbMF19PC9hPlxuICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgzPkF0dGFja3M6PC9oMz5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtkYXRhLnBva2Vtb24uYXR0YWNrcy5mYXN0Lm1hcCgoYXR0YWNrOiBhbnksIGluZGV4OiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAge2F0dGFjay5uYW1lfSAoe2F0dGFjay50eXBlfSkgLSBEYW1hZ2U6IHthdHRhY2suZGFtYWdlfVxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICB7ZGF0YS5wb2tlbW9uLmF0dGFja3Muc3BlY2lhbC5tYXAoKGF0dGFjazogYW55LCBpbmRleDogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIHthdHRhY2submFtZX0gKHthdHRhY2sudHlwZX0pIC0gRGFtYWdlOiB7YXR0YWNrLmRhbWFnZX1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2RhdGEucG9rZW1vbi5ldm9sdXRpb25zICYmIGRhdGEucG9rZW1vbi5ldm9sdXRpb25zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZXZvbHV0aW9uc19oZWFkZXInPlxuICAgICAgICAgICAgICAgIDxoMz5Fdm9sdXRpb25zOjwvaDM+XG4gICAgICAgICAgICAgICAgPHVsICBjbGFzc05hbWU9J2V2b2x1dGlvbnMnPlxuICAgICAgICAgICAgICAgICAge2RhdGEucG9rZW1vbi5ldm9sdXRpb25zLm1hcCgoZXZvbHV0aW9uOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17ZXZvbHV0aW9uLmlkfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFdm9sdXRpb25DbGljayhldm9sdXRpb24ubmFtZSl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtldm9sdXRpb24uaW1hZ2V9IGFsdD17ZXZvbHV0aW9uLm5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGgxPntldm9sdXRpb24ubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdub19mb3VuZCc+XG4gICAgICAgICAgICA8aDE+Tm8gZm91bmQgUG9rw6ltb24uPC9oMT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXsnaHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vZnJlZS12ZWN0b3IvNDA0LWVycm9yLXdpdGgtbGFuZHNjYXBlLWNvbmNlcHQtaWxsdXN0cmF0aW9uXzExNDM2MC03ODk4LmpwZyd9IGFsdD17J05vIGZvdW5kIFBva8OpbW9uLid9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUXVlcnkiLCJ1c2VSb3V0ZXIiLCJHRVRfUE9LRU1PTl9CWV9OQU1FIiwiSG9tZSIsInJvdXRlciIsInF1ZXJ5IiwibmFtZSIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJzZWFyY2hUcmlnZ2VyZWQiLCJzZXRTZWFyY2hUcmlnZ2VyZWQiLCJ2YXJpYWJsZXMiLCJza2lwIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsImhhbmRsZVNlYXJjaCIsImV2ZW50IiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVFdm9sdXRpb25DbGljayIsImV2b2x1dGlvbk5hbWUiLCJwdXNoIiwicGF0aG5hbWUiLCJ1bmRlZmluZWQiLCJzaGFsbG93IiwiaGFuZGxlRmluZFBva2Vtb24iLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInBva2Vtb24iLCJpZCIsImltYWdlIiwidHlwZXMiLCJ0b0xvd2VyQ2FzZSIsImF0dGFja3MiLCJmYXN0IiwibWFwIiwiYXR0YWNrIiwiaW5kZXgiLCJ0eXBlIiwiZGFtYWdlIiwic3BlY2lhbCIsImV2b2x1dGlvbnMiLCJsZW5ndGgiLCJldm9sdXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});
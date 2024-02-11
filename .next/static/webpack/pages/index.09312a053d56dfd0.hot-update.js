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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/queries */ \"./graphql/queries.tsx\");\nvar _jsxFileName = \"/Users/silapakaneragonhotmail.co.th/Desktop/Code/Next/github/search-pokemon/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(router.query.name || ''),\n      searchQuery = _useState[0],\n      setSearchQuery = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      searchTriggered = _useState2[0],\n      setSearchTriggered = _useState2[1];\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(_graphql_queries__WEBPACK_IMPORTED_MODULE_2__.GET_POKEMON_BY_NAME, {\n    variables: {\n      name: searchQuery\n    },\n    skip: !searchTriggered\n  }),\n      data = _useQuery.data,\n      loading = _useQuery.loading,\n      error = _useQuery.error;\n\n  var handleSearch = function handleSearch(event) {\n    setSearchQuery(event.target.value);\n  };\n\n  var handleEvolutionClick = function handleEvolutionClick(evolutionName) {\n    setSearchQuery(evolutionName);\n    setSearchTriggered(true);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"logo\",\n    src: 'https://cdn.worldvectorlogo.com/logos/pokemon-23.svg',\n    alt: 'Search Pokémon by name',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    value: searchQuery,\n    onChange: handleSearch,\n    placeholder: \"Search Pok\\xE9mon by name\",\n    className: \"search-input\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"information\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"loading\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 36\n    }\n  }, \"Loading...\")) : error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, \"Error: \", error.message) : data && data.pokemon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    key: data.pokemon.id,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: data.pokemon.image,\n    alt: data.pokemon.name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, data.pokemon.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n    className: \"type \".concat(data.pokemon.types[0].toLowerCase()),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, \"Type: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 21\n    }\n  }, data.pokemon.types[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 15\n    }\n  }, \"Attacks:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 15\n    }\n  }, data.pokemon.attacks.fast.map(function (attack, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 19\n      }\n    }, attack.name, \" (\", attack.type, \") - Damage: \", attack.damage);\n  }), data.pokemon.attacks.special.map(function (attack, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 19\n      }\n    }, attack.name, \" (\", attack.type, \") - Damage: \", attack.damage);\n  }))), data.pokemon.evolutions && data.pokemon.evolutions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"evolutions_header\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 15\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 17\n    }\n  }, \"Evolutions:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: \"evolutions\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 17\n    }\n  }, data.pokemon.evolutions.map(function (evolution, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      key: index,\n      onClick: function onClick() {\n        return handleEvolutionClick(evolution.name);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 21\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      src: evolution.image,\n      alt: evolution.name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 23\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 23\n      }\n    }, evolution.name));\n  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"no_found\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  }, \"No found Pok\\xE9mon.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: 'https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg',\n    alt: 'No found Pokémon.',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }\n  }))));\n}\n\n_s(Home, \"Z8lMeMotVcmEZaqt2TbAMmejnqc=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7S0FMMUJHO0FBb0ZULCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBHRVRfUE9LRU1PTl9CWV9OQU1FIH0gZnJvbSAnLi4vZ3JhcGhxbC9xdWVyaWVzJztcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUocm91dGVyLnF1ZXJ5Lm5hbWUgfHwgJycpO1xuICBjb25zdCBbc2VhcmNoVHJpZ2dlcmVkLCBzZXRTZWFyY2hUcmlnZ2VyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KEdFVF9QT0tFTU9OX0JZX05BTUUsIHtcbiAgICB2YXJpYWJsZXM6IHsgbmFtZTogc2VhcmNoUXVlcnkgfSxcbiAgICBza2lwOiAhc2VhcmNoVHJpZ2dlcmVkLCBcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBzZXRTZWFyY2hRdWVyeShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUV2b2x1dGlvbkNsaWNrID0gKGV2b2x1dGlvbk5hbWU6IGFueSkgPT4ge1xuICAgIHNldFNlYXJjaFF1ZXJ5KGV2b2x1dGlvbk5hbWUpO1xuICAgIHNldFNlYXJjaFRyaWdnZXJlZCh0cnVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aW1nIGNsYXNzTmFtZT0nbG9nbycgc3JjPXsnaHR0cHM6Ly9jZG4ud29ybGR2ZWN0b3Jsb2dvLmNvbS9sb2dvcy9wb2tlbW9uLTIzLnN2Zyd9IGFsdD17J1NlYXJjaCBQb2vDqW1vbiBieSBuYW1lJ30gLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaH1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggUG9rw6ltb24gYnkgbmFtZVwiXG4gICAgICAgIGNsYXNzTmFtZT0nc2VhcmNoLWlucHV0J1xuICAgICAgLz5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2luZm9ybWF0aW9uJz5cbiAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRpbmcnPjxoMT5Mb2FkaW5nLi4uPC9oMT48L2Rpdj5cbiAgICAgICAgKSA6IGVycm9yID8gKFxuICAgICAgICAgIDxoMT5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9oMT5cbiAgICAgICAgKSA6IGRhdGEgJiYgZGF0YS5wb2tlbW9uID8gKFxuICAgICAgICAgIDxkaXYga2V5PXtkYXRhLnBva2Vtb24uaWR9PlxuICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEucG9rZW1vbi5pbWFnZX0gYWx0PXtkYXRhLnBva2Vtb24ubmFtZX0gLz5cbiAgICAgICAgICAgIDxoMT57ZGF0YS5wb2tlbW9uLm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e2B0eXBlICR7ZGF0YS5wb2tlbW9uLnR5cGVzWzBdLnRvTG93ZXJDYXNlKCl9YH0+XG4gICAgICAgICAgICAgIFR5cGU6IDxhPntkYXRhLnBva2Vtb24udHlwZXNbMF19PC9hPlxuICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgzPkF0dGFja3M6PC9oMz5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtkYXRhLnBva2Vtb24uYXR0YWNrcy5mYXN0Lm1hcCgoYXR0YWNrOiBhbnksIGluZGV4OiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAge2F0dGFjay5uYW1lfSAoe2F0dGFjay50eXBlfSkgLSBEYW1hZ2U6IHthdHRhY2suZGFtYWdlfVxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICB7ZGF0YS5wb2tlbW9uLmF0dGFja3Muc3BlY2lhbC5tYXAoKGF0dGFjazogYW55LCBpbmRleDogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIHthdHRhY2submFtZX0gKHthdHRhY2sudHlwZX0pIC0gRGFtYWdlOiB7YXR0YWNrLmRhbWFnZX1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2RhdGEucG9rZW1vbi5ldm9sdXRpb25zICYmIGRhdGEucG9rZW1vbi5ldm9sdXRpb25zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZXZvbHV0aW9uc19oZWFkZXInPlxuICAgICAgICAgICAgICAgIDxoMz5Fdm9sdXRpb25zOjwvaDM+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZXZvbHV0aW9ucyc+XG4gICAgICAgICAgICAgICAgICB7ZGF0YS5wb2tlbW9uLmV2b2x1dGlvbnMubWFwKChldm9sdXRpb246IGFueSwgaW5kZXg6IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gaGFuZGxlRXZvbHV0aW9uQ2xpY2soZXZvbHV0aW9uLm5hbWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZXZvbHV0aW9uLmltYWdlfSBhbHQ9e2V2b2x1dGlvbi5uYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMT57ZXZvbHV0aW9uLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbm9fZm91bmQnPlxuICAgICAgICAgICAgPGgxPk5vIGZvdW5kIFBva8OpbW9uLjwvaDE+XG4gICAgICAgICAgICA8aW1nIHNyYz17J2h0dHBzOi8vaW1nLmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yLzQwNC1lcnJvci13aXRoLWxhbmRzY2FwZS1jb25jZXB0LWlsbHVzdHJhdGlvbl8xMTQzNjAtNzg5OC5qcGcnfSBhbHQ9eydObyBmb3VuZCBQb2vDqW1vbi4nfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVF1ZXJ5IiwidXNlUm91dGVyIiwiR0VUX1BPS0VNT05fQllfTkFNRSIsIkhvbWUiLCJyb3V0ZXIiLCJxdWVyeSIsIm5hbWUiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5Iiwic2VhcmNoVHJpZ2dlcmVkIiwic2V0U2VhcmNoVHJpZ2dlcmVkIiwidmFyaWFibGVzIiwic2tpcCIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJoYW5kbGVTZWFyY2giLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRXZvbHV0aW9uQ2xpY2siLCJldm9sdXRpb25OYW1lIiwibWVzc2FnZSIsInBva2Vtb24iLCJpZCIsImltYWdlIiwidHlwZXMiLCJ0b0xvd2VyQ2FzZSIsImF0dGFja3MiLCJmYXN0IiwibWFwIiwiYXR0YWNrIiwiaW5kZXgiLCJ0eXBlIiwiZGFtYWdlIiwic3BlY2lhbCIsImV2b2x1dGlvbnMiLCJsZW5ndGgiLCJldm9sdXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});
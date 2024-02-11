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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/queries */ \"./graphql/queries.tsx\");\nvar _jsxFileName = \"/Users/silapakaneragonhotmail.co.th/Desktop/Code/Next/github/search-pokemon/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(router.query.name || ''),\n      searchQuery = _useState[0],\n      setSearchQuery = _useState[1];\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(_graphql_queries__WEBPACK_IMPORTED_MODULE_2__.GET_POKEMON_BY_NAME, {\n    variables: {\n      name: searchQuery\n    },\n    skip: !searchQuery\n  }),\n      data = _useQuery.data,\n      loading = _useQuery.loading,\n      error = _useQuery.error;\n\n  var handleSearch = function handleSearch(event) {\n    setSearchQuery(event.target.value);\n  };\n\n  var handleFindPokemon = function handleFindPokemon(event) {\n    console.log(\"🚀 ~ handleFindPokemon ~ event:\", event); // router.push({ pathname: '/', query: { name: event } }, undefined, { shallow: true });\n  };\n\n  var handleEvolutionClick = function handleEvolutionClick(evolutionName) {\n    setSearchQuery(evolutionName);\n  };\n\n  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"loading\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 23\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 48\n    }\n  }, \"Loading...\"));\n  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 21\n    }\n  }, \"Error: \", error.message);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"logo\",\n    src: 'https://cdn.worldvectorlogo.com/logos/pokemon-23.svg',\n    alt: 'Search Pokémon by name',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    value: searchQuery,\n    onChange: handleSearch,\n    placeholder: \"Search Pok\\xE9mon by name\",\n    className: \"search-input\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: function onClick() {\n      return handleFindPokemon(searchQuery);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 8\n    }\n  }, \"Find Pokemon\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"information\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, data && data.pokemon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    key: data.pokemon.id,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: data.pokemon.image,\n    alt: data.pokemon.name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, data.pokemon.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n    className: \"type \".concat(data.pokemon.types[0].toLowerCase()),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, \"Type: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 21\n    }\n  }, data.pokemon.types[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 15\n    }\n  }, \"Attacks:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 15\n    }\n  }, data.pokemon.attacks.fast.map(function (attack, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 19\n      }\n    }, attack.name, \" (\", attack.type, \") - Damage: \", attack.damage);\n  }), data.pokemon.attacks.special.map(function (attack, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 19\n      }\n    }, attack.name, \" (\", attack.type, \") - Damage: \", attack.damage);\n  }))), data.pokemon.evolutions && data.pokemon.evolutions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"evolutions_header\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 15\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 17\n    }\n  }, \"Evolutions:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: \"evolutions\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 17\n    }\n  }, data.pokemon.evolutions.map(function (evolution) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      key: evolution.id,\n      onClick: function onClick() {\n        return handleEvolutionClick(evolution.name);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 21\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      src: evolution.image,\n      alt: evolution.name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 23\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 23\n      }\n    }, evolution.name));\n  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"no_found\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 11\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }, \"No found Pok\\xE9mon.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: 'https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg',\n    alt: 'No found Pokémon.',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }\n  }))));\n}\n\n_s(Home, \"zSrdgnrqA/YeQ/Am0pkwv/dL05Y=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBSSxzQkFBSixDQURGLGVBRUU7SUFBSyxHQUFHLEVBQUUsbUdBQVY7SUFBK0csR0FBRyxFQUFFLG1CQUFwSDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBRkYsQ0F4Q0osQ0FYRixDQURGO0FBNEREOztHQXZGUUg7VUFDUUYsb0RBR2tCRDs7O0tBSjFCRztBQXlGVCwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgR0VUX1BPS0VNT05fQllfTkFNRSB9IGZyb20gJy4uL2dyYXBocWwvcXVlcmllcyc7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKHJvdXRlci5xdWVyeS5uYW1lIHx8ICcnKTtcblxuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeShHRVRfUE9LRU1PTl9CWV9OQU1FLCB7XG4gICAgdmFyaWFibGVzOiB7IG5hbWU6IHNlYXJjaFF1ZXJ5IH0sXG4gICAgc2tpcDogIXNlYXJjaFF1ZXJ5LFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIHNldFNlYXJjaFF1ZXJ5KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRmluZFBva2Vtb24gPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwi8J+agCB+IGhhbmRsZUZpbmRQb2tlbW9uIH4gZXZlbnQ6XCIsIGV2ZW50KVxuICAgIC8vIHJvdXRlci5wdXNoKHsgcGF0aG5hbWU6ICcvJywgcXVlcnk6IHsgbmFtZTogZXZlbnQgfSB9LCB1bmRlZmluZWQsIHsgc2hhbGxvdzogdHJ1ZSB9KTtcbiAgfTtcblxuXG4gIGNvbnN0IGhhbmRsZUV2b2x1dGlvbkNsaWNrID0gKGV2b2x1dGlvbk5hbWU6IGFueSkgPT4ge1xuICAgIHNldFNlYXJjaFF1ZXJ5KGV2b2x1dGlvbk5hbWUpO1xuICB9O1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2xvYWRpbmcnPjxoMT5Mb2FkaW5nLi4uPC9oMT48L2Rpdj47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxoMT5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9oMT47XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aW1nIGNsYXNzTmFtZT0nbG9nbycgc3JjPXsnaHR0cHM6Ly9jZG4ud29ybGR2ZWN0b3Jsb2dvLmNvbS9sb2dvcy9wb2tlbW9uLTIzLnN2Zyd9IGFsdD17J1NlYXJjaCBQb2vDqW1vbiBieSBuYW1lJ30gLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaH1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggUG9rw6ltb24gYnkgbmFtZVwiXG4gICAgICAgIGNsYXNzTmFtZT0nc2VhcmNoLWlucHV0J1xuICAgICAgLz5cbiAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbmRQb2tlbW9uKHNlYXJjaFF1ZXJ5KX0+RmluZCBQb2tlbW9uPC9idXR0b24+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmZvcm1hdGlvbic+XG4gICAgICAgIHtkYXRhICYmIGRhdGEucG9rZW1vbiA/IChcbiAgICAgICAgICA8ZGl2IGtleT17ZGF0YS5wb2tlbW9uLmlkfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLnBva2Vtb24uaW1hZ2V9IGFsdD17ZGF0YS5wb2tlbW9uLm5hbWV9IC8+XG4gICAgICAgICAgICA8aDE+e2RhdGEucG9rZW1vbi5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtgdHlwZSAke2RhdGEucG9rZW1vbi50eXBlc1swXS50b0xvd2VyQ2FzZSgpfWB9PlxuICAgICAgICAgICAgICBUeXBlOiA8YT57ZGF0YS5wb2tlbW9uLnR5cGVzWzBdfTwvYT5cbiAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMz5BdHRhY2tzOjwvaDM+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7ZGF0YS5wb2tlbW9uLmF0dGFja3MuZmFzdC5tYXAoKGF0dGFjazogYW55LCBpbmRleDogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIHthdHRhY2submFtZX0gKHthdHRhY2sudHlwZX0pIC0gRGFtYWdlOiB7YXR0YWNrLmRhbWFnZX1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAge2RhdGEucG9rZW1vbi5hdHRhY2tzLnNwZWNpYWwubWFwKChhdHRhY2s6IGFueSwgaW5kZXg6IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICB7YXR0YWNrLm5hbWV9ICh7YXR0YWNrLnR5cGV9KSAtIERhbWFnZToge2F0dGFjay5kYW1hZ2V9XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtkYXRhLnBva2Vtb24uZXZvbHV0aW9ucyAmJiBkYXRhLnBva2Vtb24uZXZvbHV0aW9ucy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2V2b2x1dGlvbnNfaGVhZGVyJz5cbiAgICAgICAgICAgICAgICA8aDM+RXZvbHV0aW9uczo8L2gzPlxuICAgICAgICAgICAgICAgIDx1bCAgY2xhc3NOYW1lPSdldm9sdXRpb25zJz5cbiAgICAgICAgICAgICAgICAgIHtkYXRhLnBva2Vtb24uZXZvbHV0aW9ucy5tYXAoKGV2b2x1dGlvbjogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2V2b2x1dGlvbi5pZH0gb25DbGljaz17KCkgPT4gaGFuZGxlRXZvbHV0aW9uQ2xpY2soZXZvbHV0aW9uLm5hbWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZXZvbHV0aW9uLmltYWdlfSBhbHQ9e2V2b2x1dGlvbi5uYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMT57ZXZvbHV0aW9uLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbm9fZm91bmQnPlxuICAgICAgICAgICAgPGgxPk5vIGZvdW5kIFBva8OpbW9uLjwvaDE+XG4gICAgICAgICAgICA8aW1nIHNyYz17J2h0dHBzOi8vaW1nLmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yLzQwNC1lcnJvci13aXRoLWxhbmRzY2FwZS1jb25jZXB0LWlsbHVzdHJhdGlvbl8xMTQzNjAtNzg5OC5qcGcnfSBhbHQ9eydObyBmb3VuZCBQb2vDqW1vbi4nfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cblxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVF1ZXJ5IiwidXNlUm91dGVyIiwiR0VUX1BPS0VNT05fQllfTkFNRSIsIkhvbWUiLCJyb3V0ZXIiLCJxdWVyeSIsIm5hbWUiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwidmFyaWFibGVzIiwic2tpcCIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJoYW5kbGVTZWFyY2giLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRmluZFBva2Vtb24iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRXZvbHV0aW9uQ2xpY2siLCJldm9sdXRpb25OYW1lIiwibWVzc2FnZSIsInBva2Vtb24iLCJpZCIsImltYWdlIiwidHlwZXMiLCJ0b0xvd2VyQ2FzZSIsImF0dGFja3MiLCJmYXN0IiwibWFwIiwiYXR0YWNrIiwiaW5kZXgiLCJ0eXBlIiwiZGFtYWdlIiwic3BlY2lhbCIsImV2b2x1dGlvbnMiLCJsZW5ndGgiLCJldm9sdXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});
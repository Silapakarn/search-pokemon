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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/queries */ \"./graphql/queries.tsx\");\nvar _jsxFileName = \"/Users/silapakaneragonhotmail.co.th/Desktop/Code/Next/github/search-pokemon/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(router.query.name || ''),\n      searchQuery = _useState[0],\n      setSearchQuery = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      searchTriggered = _useState2[0],\n      setSearchTriggered = _useState2[1];\n\n  var _data$loading$error = {\n    data: null,\n    loading: false,\n    error: null\n  },\n      data = _data$loading$error.data,\n      loading = _data$loading$error.loading,\n      error = _data$loading$error.error; // Initialize with null values\n\n  if (searchTriggered) {\n    // Execute the query only if search is triggered\n    var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(_graphql_queries__WEBPACK_IMPORTED_MODULE_2__.GET_POKEMON_BY_NAME, {\n      variables: {\n        name: searchQuery\n      }\n    });\n\n    data = _useQuery.data;\n    loading = _useQuery.loading;\n    error = _useQuery.error;\n  }\n\n  var handleSearch = function handleSearch(event) {\n    setSearchQuery(event.target.value);\n  };\n\n  var handleFindPokemon = function handleFindPokemon(event) {\n    setSearchTriggered(true);\n    console.log(\"🚀 ~ handleFindPokemon ~ event:\", event); // router.push({ pathname: '/', query: { name: event } }, undefined, { shallow: true });\n  };\n\n  var handleEvolutionClick = function handleEvolutionClick(evolutionName) {\n    setSearchQuery(evolutionName);\n  }; // if (loading) return <div className='loading'><h1>Loading...</h1></div>;\n  // if (error) return <h1>Error: {error.message}</h1>;\n\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"logo\",\n    src: 'https://cdn.worldvectorlogo.com/logos/pokemon-23.svg',\n    alt: 'Search Pokémon by name',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    value: searchQuery,\n    onChange: handleSearch,\n    placeholder: \"Search Pok\\xE9mon by name\",\n    className: \"search-input\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: handleFindPokemon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 8\n    }\n  }, \"Find Pokemon\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"information\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, data && data.pokemon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    key: data.pokemon.id,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: data.pokemon.image,\n    alt: data.pokemon.name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, data.pokemon.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n    className: \"type \".concat(data.pokemon.types[0].toLowerCase()),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, \"Type: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 21\n    }\n  }, data.pokemon.types[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 15\n    }\n  }, \"Attacks:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 15\n    }\n  }, data.pokemon.attacks.fast.map(function (attack, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 19\n      }\n    }, attack.name, \" (\", attack.type, \") - Damage: \", attack.damage);\n  }), data.pokemon.attacks.special.map(function (attack, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 19\n      }\n    }, attack.name, \" (\", attack.type, \") - Damage: \", attack.damage);\n  }))), data.pokemon.evolutions && data.pokemon.evolutions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"evolutions_header\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 15\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 17\n    }\n  }, \"Evolutions:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: \"evolutions\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 17\n    }\n  }, data.pokemon.evolutions.map(function (evolution) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      key: evolution.id,\n      onClick: function onClick() {\n        return handleEvolutionClick(evolution.name);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 21\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      src: evolution.image,\n      alt: evolution.name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 23\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 23\n      }\n    }, evolution.name));\n  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"no_found\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 11\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 13\n    }\n  }, \"No found Pok\\xE9mon.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: 'https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg',\n    alt: 'No found Pokémon.',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 13\n    }\n  }))));\n}\n\n_s(Home, \"sQYP1X0bN2gw1K2Q57ny46JgJ/U=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUFJLHNCQUFKLENBREYsZUFFRTtJQUFLLEdBQUcsRUFBRSxtR0FBVjtJQUErRyxHQUFHLEVBQUUsbUJBQXBIO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFGRixDQXhDSixDQVhGLENBREY7QUE0REQ7O0dBckdRSDtVQUNRRixvREFVZUQ7OztLQVh2Qkc7QUF1R1QsK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IEdFVF9QT0tFTU9OX0JZX05BTUUgfSBmcm9tICcuLi9ncmFwaHFsL3F1ZXJpZXMnO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZShyb3V0ZXIucXVlcnkubmFtZSB8fCAnJyk7XG4gIGNvbnN0IFtzZWFyY2hUcmlnZ2VyZWQsIHNldFNlYXJjaFRyaWdnZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblxuICBsZXQgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0geyBkYXRhOiBudWxsLCBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IG51bGwgfTsgLy8gSW5pdGlhbGl6ZSB3aXRoIG51bGwgdmFsdWVzXG5cblxuICBpZiAoc2VhcmNoVHJpZ2dlcmVkKSB7XG4gICAgLy8gRXhlY3V0ZSB0aGUgcXVlcnkgb25seSBpZiBzZWFyY2ggaXMgdHJpZ2dlcmVkXG4gICAgKHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KEdFVF9QT0tFTU9OX0JZX05BTUUsIHtcbiAgICAgIHZhcmlhYmxlczogeyBuYW1lOiBzZWFyY2hRdWVyeSB9LFxuICAgIH0pKTtcbiAgfVxuXG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBzZXRTZWFyY2hRdWVyeShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZpbmRQb2tlbW9uID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBzZXRTZWFyY2hUcmlnZ2VyZWQodHJ1ZSlcbiAgICBjb25zb2xlLmxvZyhcIvCfmoAgfiBoYW5kbGVGaW5kUG9rZW1vbiB+IGV2ZW50OlwiLCBldmVudClcbiAgICAvLyByb3V0ZXIucHVzaCh7IHBhdGhuYW1lOiAnLycsIHF1ZXJ5OiB7IG5hbWU6IGV2ZW50IH0gfSwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSk7XG4gIH07XG5cblxuICBjb25zdCBoYW5kbGVFdm9sdXRpb25DbGljayA9IChldm9sdXRpb25OYW1lOiBhbnkpID0+IHtcbiAgICBzZXRTZWFyY2hRdWVyeShldm9sdXRpb25OYW1lKTtcbiAgfTtcblxuXG5cblxuXG4gIC8vIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2xvYWRpbmcnPjxoMT5Mb2FkaW5nLi4uPC9oMT48L2Rpdj47XG4gIC8vIGlmIChlcnJvcikgcmV0dXJuIDxoMT5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9oMT47XG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdsb2dvJyBzcmM9eydodHRwczovL2Nkbi53b3JsZHZlY3RvcmxvZ28uY29tL2xvZ29zL3Bva2Vtb24tMjMuc3ZnJ30gYWx0PXsnU2VhcmNoIFBva8OpbW9uIGJ5IG5hbWUnfSAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNofVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBQb2vDqW1vbiBieSBuYW1lXCJcbiAgICAgICAgY2xhc3NOYW1lPSdzZWFyY2gtaW5wdXQnXG4gICAgICAvPlxuICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRmluZFBva2Vtb259PkZpbmQgUG9rZW1vbjwvYnV0dG9uPlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naW5mb3JtYXRpb24nPlxuICAgICAgICB7ZGF0YSAmJiBkYXRhLnBva2Vtb24gPyAoXG4gICAgICAgICAgPGRpdiBrZXk9e2RhdGEucG9rZW1vbi5pZH0+XG4gICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5wb2tlbW9uLmltYWdlfSBhbHQ9e2RhdGEucG9rZW1vbi5uYW1lfSAvPlxuICAgICAgICAgICAgPGgxPntkYXRhLnBva2Vtb24ubmFtZX08L2gxPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17YHR5cGUgJHtkYXRhLnBva2Vtb24udHlwZXNbMF0udG9Mb3dlckNhc2UoKX1gfT5cbiAgICAgICAgICAgICAgVHlwZTogPGE+e2RhdGEucG9rZW1vbi50eXBlc1swXX08L2E+XG4gICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDM+QXR0YWNrczo8L2gzPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2RhdGEucG9rZW1vbi5hdHRhY2tzLmZhc3QubWFwKChhdHRhY2s6IGFueSwgaW5kZXg6IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICB7YXR0YWNrLm5hbWV9ICh7YXR0YWNrLnR5cGV9KSAtIERhbWFnZToge2F0dGFjay5kYW1hZ2V9XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIHtkYXRhLnBva2Vtb24uYXR0YWNrcy5zcGVjaWFsLm1hcCgoYXR0YWNrOiBhbnksIGluZGV4OiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAge2F0dGFjay5uYW1lfSAoe2F0dGFjay50eXBlfSkgLSBEYW1hZ2U6IHthdHRhY2suZGFtYWdlfVxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7ZGF0YS5wb2tlbW9uLmV2b2x1dGlvbnMgJiYgZGF0YS5wb2tlbW9uLmV2b2x1dGlvbnMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdldm9sdXRpb25zX2hlYWRlcic+XG4gICAgICAgICAgICAgICAgPGgzPkV2b2x1dGlvbnM6PC9oMz5cbiAgICAgICAgICAgICAgICA8dWwgIGNsYXNzTmFtZT0nZXZvbHV0aW9ucyc+XG4gICAgICAgICAgICAgICAgICB7ZGF0YS5wb2tlbW9uLmV2b2x1dGlvbnMubWFwKChldm9sdXRpb246IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtldm9sdXRpb24uaWR9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUV2b2x1dGlvbkNsaWNrKGV2b2x1dGlvbi5uYW1lKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2V2b2x1dGlvbi5pbWFnZX0gYWx0PXtldm9sdXRpb24ubmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8aDE+e2V2b2x1dGlvbi5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25vX2ZvdW5kJz5cbiAgICAgICAgICAgIDxoMT5ObyBmb3VuZCBQb2vDqW1vbi48L2gxPlxuICAgICAgICAgICAgPGltZyBzcmM9eydodHRwczovL2ltZy5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci80MDQtZXJyb3Itd2l0aC1sYW5kc2NhcGUtY29uY2VwdC1pbGx1c3RyYXRpb25fMTE0MzYwLTc4OTguanBnJ30gYWx0PXsnTm8gZm91bmQgUG9rw6ltb24uJ30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VRdWVyeSIsInVzZVJvdXRlciIsIkdFVF9QT0tFTU9OX0JZX05BTUUiLCJIb21lIiwicm91dGVyIiwicXVlcnkiLCJuYW1lIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInNlYXJjaFRyaWdnZXJlZCIsInNldFNlYXJjaFRyaWdnZXJlZCIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJ2YXJpYWJsZXMiLCJoYW5kbGVTZWFyY2giLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRmluZFBva2Vtb24iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRXZvbHV0aW9uQ2xpY2siLCJldm9sdXRpb25OYW1lIiwicG9rZW1vbiIsImlkIiwiaW1hZ2UiLCJ0eXBlcyIsInRvTG93ZXJDYXNlIiwiYXR0YWNrcyIsImZhc3QiLCJtYXAiLCJhdHRhY2siLCJpbmRleCIsInR5cGUiLCJkYW1hZ2UiLCJzcGVjaWFsIiwiZXZvbHV0aW9ucyIsImxlbmd0aCIsImV2b2x1dGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});
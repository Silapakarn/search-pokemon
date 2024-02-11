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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/queries */ \"./graphql/queries.tsx\");\nvar _jsxFileName = \"/Users/silapakaneragonhotmail.co.th/Desktop/Code/Next/github/search-pokemon/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(router.query.name || ''),\n      searchQuery = _useState[0],\n      setSearchQuery = _useState[1];\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(_graphql_queries__WEBPACK_IMPORTED_MODULE_2__.GET_POKEMON_BY_NAME, {\n    variables: {\n      name: searchQuery\n    },\n    skip: !searchQuery\n  }),\n      data = _useQuery.data,\n      loading = _useQuery.loading,\n      error = _useQuery.error;\n\n  var handleSearch = function handleSearch(event) {\n    setSearchQuery(event.target.value);\n  };\n\n  var handleFindPokemon = function handleFindPokemon(event) {\n    console.log(\"🚀 ~ handleFindPokemon ~ event:\", event); // router.push({ pathname: '/', query: { name: event } }, undefined, { shallow: true });\n  };\n\n  var handleEvolutionClick = function handleEvolutionClick(evolutionName) {\n    setSearchQuery(evolutionName);\n  }; // useEffect(() => {\n  //   // Handle navigation when searchQuery changes\n  //   // router.push({ pathname: '/', query: { name: searchQuery } }, undefined, { shallow: true });\n  // }, [searchQuery, router]);\n  // if (loading) return <div className='loading'><h1>Loading...</h1></div>;\n  // if (error) return <h1>Error: {error.message}</h1>;\n\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"logo\",\n    src: 'https://cdn.worldvectorlogo.com/logos/pokemon-23.svg',\n    alt: 'Search Pokémon by name',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    value: searchQuery,\n    onChange: handleSearch,\n    placeholder: \"Search Pok\\xE9mon by name\",\n    className: \"search-input\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: function onClick() {\n      return handleFindPokemon(searchQuery);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 8\n    }\n  }, \"Find Pokemon\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"information\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }, data && data.pokemon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    key: data.pokemon.id,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 11\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: data.pokemon.image,\n    alt: data.pokemon.name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, data.pokemon.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n    className: \"type \".concat(data.pokemon.types[0].toLowerCase()),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  }, \"Type: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 21\n    }\n  }, data.pokemon.types[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 15\n    }\n  }, \"Attacks:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 15\n    }\n  }, data.pokemon.attacks.fast.map(function (attack, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 19\n      }\n    }, attack.name, \" (\", attack.type, \") - Damage: \", attack.damage);\n  }), data.pokemon.attacks.special.map(function (attack, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 19\n      }\n    }, attack.name, \" (\", attack.type, \") - Damage: \", attack.damage);\n  }))), data.pokemon.evolutions && data.pokemon.evolutions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"evolutions_header\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 15\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 17\n    }\n  }, \"Evolutions:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: \"evolutions\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 17\n    }\n  }, data.pokemon.evolutions.map(function (evolution) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      key: evolution.id,\n      onClick: function onClick() {\n        return handleEvolutionClick(evolution.name);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 21\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      src: evolution.image,\n      alt: evolution.name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 23\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 23\n      }\n    }, evolution.name));\n  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"no_found\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 11\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 13\n    }\n  }, \"No found Pok\\xE9mon.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: 'https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg',\n    alt: 'No found Pokémon.',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 13\n    }\n  }))));\n}\n\n_s(Home, \"zSrdgnrqA/YeQ/Am0pkwv/dL05Y=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IEdFVF9QT0tFTU9OX0JZX05BTUUgfSBmcm9tICcuLi9ncmFwaHFsL3F1ZXJpZXMnO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZShyb3V0ZXIucXVlcnkubmFtZSB8fCAnJyk7XG5cbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoR0VUX1BPS0VNT05fQllfTkFNRSwge1xuICAgIHZhcmlhYmxlczogeyBuYW1lOiBzZWFyY2hRdWVyeSB9LFxuICAgIHNraXA6ICFzZWFyY2hRdWVyeSxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBzZXRTZWFyY2hRdWVyeShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZpbmRQb2tlbW9uID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIvCfmoAgfiBoYW5kbGVGaW5kUG9rZW1vbiB+IGV2ZW50OlwiLCBldmVudClcbiAgICAvLyByb3V0ZXIucHVzaCh7IHBhdGhuYW1lOiAnLycsIHF1ZXJ5OiB7IG5hbWU6IGV2ZW50IH0gfSwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSk7XG4gIH07XG5cblxuICBjb25zdCBoYW5kbGVFdm9sdXRpb25DbGljayA9IChldm9sdXRpb25OYW1lOiBhbnkpID0+IHtcbiAgICBzZXRTZWFyY2hRdWVyeShldm9sdXRpb25OYW1lKTtcbiAgfTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIC8vIEhhbmRsZSBuYXZpZ2F0aW9uIHdoZW4gc2VhcmNoUXVlcnkgY2hhbmdlc1xuICAvLyAgIC8vIHJvdXRlci5wdXNoKHsgcGF0aG5hbWU6ICcvJywgcXVlcnk6IHsgbmFtZTogc2VhcmNoUXVlcnkgfSB9LCB1bmRlZmluZWQsIHsgc2hhbGxvdzogdHJ1ZSB9KTtcblxuXG4gIC8vIH0sIFtzZWFyY2hRdWVyeSwgcm91dGVyXSk7XG5cbiAgLy8gaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZyc+PGgxPkxvYWRpbmcuLi48L2gxPjwvZGl2PjtcbiAgLy8gaWYgKGVycm9yKSByZXR1cm4gPGgxPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2gxPjtcblxuXG4gXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aW1nIGNsYXNzTmFtZT0nbG9nbycgc3JjPXsnaHR0cHM6Ly9jZG4ud29ybGR2ZWN0b3Jsb2dvLmNvbS9sb2dvcy9wb2tlbW9uLTIzLnN2Zyd9IGFsdD17J1NlYXJjaCBQb2vDqW1vbiBieSBuYW1lJ30gLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaH1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggUG9rw6ltb24gYnkgbmFtZVwiXG4gICAgICAgIGNsYXNzTmFtZT0nc2VhcmNoLWlucHV0J1xuICAgICAgLz5cbiAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbmRQb2tlbW9uKHNlYXJjaFF1ZXJ5KX0+RmluZCBQb2tlbW9uPC9idXR0b24+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmZvcm1hdGlvbic+XG4gICAgICAgIHtkYXRhICYmIGRhdGEucG9rZW1vbiA/IChcbiAgICAgICAgICA8ZGl2IGtleT17ZGF0YS5wb2tlbW9uLmlkfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLnBva2Vtb24uaW1hZ2V9IGFsdD17ZGF0YS5wb2tlbW9uLm5hbWV9IC8+XG4gICAgICAgICAgICA8aDE+e2RhdGEucG9rZW1vbi5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtgdHlwZSAke2RhdGEucG9rZW1vbi50eXBlc1swXS50b0xvd2VyQ2FzZSgpfWB9PlxuICAgICAgICAgICAgICBUeXBlOiA8YT57ZGF0YS5wb2tlbW9uLnR5cGVzWzBdfTwvYT5cbiAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMz5BdHRhY2tzOjwvaDM+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7ZGF0YS5wb2tlbW9uLmF0dGFja3MuZmFzdC5tYXAoKGF0dGFjazogYW55LCBpbmRleDogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIHthdHRhY2submFtZX0gKHthdHRhY2sudHlwZX0pIC0gRGFtYWdlOiB7YXR0YWNrLmRhbWFnZX1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAge2RhdGEucG9rZW1vbi5hdHRhY2tzLnNwZWNpYWwubWFwKChhdHRhY2s6IGFueSwgaW5kZXg6IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICB7YXR0YWNrLm5hbWV9ICh7YXR0YWNrLnR5cGV9KSAtIERhbWFnZToge2F0dGFjay5kYW1hZ2V9XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtkYXRhLnBva2Vtb24uZXZvbHV0aW9ucyAmJiBkYXRhLnBva2Vtb24uZXZvbHV0aW9ucy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2V2b2x1dGlvbnNfaGVhZGVyJz5cbiAgICAgICAgICAgICAgICA8aDM+RXZvbHV0aW9uczo8L2gzPlxuICAgICAgICAgICAgICAgIDx1bCAgY2xhc3NOYW1lPSdldm9sdXRpb25zJz5cbiAgICAgICAgICAgICAgICAgIHtkYXRhLnBva2Vtb24uZXZvbHV0aW9ucy5tYXAoKGV2b2x1dGlvbjogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2V2b2x1dGlvbi5pZH0gb25DbGljaz17KCkgPT4gaGFuZGxlRXZvbHV0aW9uQ2xpY2soZXZvbHV0aW9uLm5hbWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZXZvbHV0aW9uLmltYWdlfSBhbHQ9e2V2b2x1dGlvbi5uYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMT57ZXZvbHV0aW9uLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbm9fZm91bmQnPlxuICAgICAgICAgICAgPGgxPk5vIGZvdW5kIFBva8OpbW9uLjwvaDE+XG4gICAgICAgICAgICA8aW1nIHNyYz17J2h0dHBzOi8vaW1nLmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yLzQwNC1lcnJvci13aXRoLWxhbmRzY2FwZS1jb25jZXB0LWlsbHVzdHJhdGlvbl8xMTQzNjAtNzg5OC5qcGcnfSBhbHQ9eydObyBmb3VuZCBQb2vDqW1vbi4nfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cblxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVF1ZXJ5IiwidXNlUm91dGVyIiwiR0VUX1BPS0VNT05fQllfTkFNRSIsIkhvbWUiLCJyb3V0ZXIiLCJxdWVyeSIsIm5hbWUiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwidmFyaWFibGVzIiwic2tpcCIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJoYW5kbGVTZWFyY2giLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRmluZFBva2Vtb24iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRXZvbHV0aW9uQ2xpY2siLCJldm9sdXRpb25OYW1lIiwicG9rZW1vbiIsImlkIiwiaW1hZ2UiLCJ0eXBlcyIsInRvTG93ZXJDYXNlIiwiYXR0YWNrcyIsImZhc3QiLCJtYXAiLCJhdHRhY2siLCJpbmRleCIsInR5cGUiLCJkYW1hZ2UiLCJzcGVjaWFsIiwiZXZvbHV0aW9ucyIsImxlbmd0aCIsImV2b2x1dGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./src/pages/profile.jsx":
/*!*******************************!*\
  !*** ./src/pages/profile.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/nextjs-auth0/client */ \"./node_modules/@auth0/nextjs-auth0/dist/client/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Profile() {\n    _s();\n    var user = (0,_auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_2__.useUser)().user;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row my-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: user.picture,\n                                    alt: \"Profile\",\n                                    className: \"rounded-circle img-fluid profile-picture mb-3 mb-md-0\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\smith\\\\source\\\\codeworks\\\\react\\\\meal-master-fullstack\\\\meal-master-fullstack.client\\\\src\\\\pages\\\\profile.jsx\",\n                                    lineNumber: 16,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\smith\\\\source\\\\codeworks\\\\react\\\\meal-master-fullstack\\\\meal-master-fullstack.client\\\\src\\\\pages\\\\profile.jsx\",\n                                lineNumber: 15,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-9\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"mt-4\",\n                                    children: user.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\smith\\\\source\\\\codeworks\\\\react\\\\meal-master-fullstack\\\\meal-master-fullstack.client\\\\src\\\\pages\\\\profile.jsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\smith\\\\source\\\\codeworks\\\\react\\\\meal-master-fullstack\\\\meal-master-fullstack.client\\\\src\\\\pages\\\\profile.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\smith\\\\source\\\\codeworks\\\\react\\\\meal-master-fullstack\\\\meal-master-fullstack.client\\\\src\\\\pages\\\\profile.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-8 m-auto bg-dark text-light p-4 rounded\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: \"ID: \"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\smith\\\\source\\\\codeworks\\\\react\\\\meal-master-fullstack\\\\meal-master-fullstack.client\\\\src\\\\pages\\\\profile.jsx\",\n                                            lineNumber: 28,\n                                            columnNumber: 38\n                                        }, this),\n                                        \"   \",\n                                        user.id\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\smith\\\\source\\\\codeworks\\\\react\\\\meal-master-fullstack\\\\meal-master-fullstack.client\\\\src\\\\pages\\\\profile.jsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: \"NAME: \"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\smith\\\\source\\\\codeworks\\\\react\\\\meal-master-fullstack\\\\meal-master-fullstack.client\\\\src\\\\pages\\\\profile.jsx\",\n                                            lineNumber: 29,\n                                            columnNumber: 38\n                                        }, this),\n                                        \"   \",\n                                        user.name\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\smith\\\\source\\\\codeworks\\\\react\\\\meal-master-fullstack\\\\meal-master-fullstack.client\\\\src\\\\pages\\\\profile.jsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: \"NICKNAME: \"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\smith\\\\source\\\\codeworks\\\\react\\\\meal-master-fullstack\\\\meal-master-fullstack.client\\\\src\\\\pages\\\\profile.jsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 38\n                                        }, this),\n                                        \"   \",\n                                        user.nickname\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\smith\\\\source\\\\codeworks\\\\react\\\\meal-master-fullstack\\\\meal-master-fullstack.client\\\\src\\\\pages\\\\profile.jsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: \"PICTURE: \"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\smith\\\\source\\\\codeworks\\\\react\\\\meal-master-fullstack\\\\meal-master-fullstack.client\\\\src\\\\pages\\\\profile.jsx\",\n                                            lineNumber: 31,\n                                            columnNumber: 38\n                                        }, this),\n                                        \"    \",\n                                        user.picture\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\smith\\\\source\\\\codeworks\\\\react\\\\meal-master-fullstack\\\\meal-master-fullstack.client\\\\src\\\\pages\\\\profile.jsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 33\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\smith\\\\source\\\\codeworks\\\\react\\\\meal-master-fullstack\\\\meal-master-fullstack.client\\\\src\\\\pages\\\\profile.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 29\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\smith\\\\source\\\\codeworks\\\\react\\\\meal-master-fullstack\\\\meal-master-fullstack.client\\\\src\\\\pages\\\\profile.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\smith\\\\source\\\\codeworks\\\\react\\\\meal-master-fullstack\\\\meal-master-fullstack.client\\\\src\\\\pages\\\\profile.jsx\",\n                lineNumber: 13,\n                columnNumber: 21\n            }, this)\n        }, void 0, false)\n    }, void 0, false);\n}\n_s(Profile, \"Q+JCVIy3JH0MXpFK+vm68eAxsAY=\", false, function() {\n    return [\n        _auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_2__.useUser\n    ];\n});\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZmlsZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEI7QUFDWTtBQUNlO0FBR3RDLFNBQVNJOztJQUNwQixJQUFNLE9BQVdELG1FQUFPQSxHQUFoQkU7SUFFUixxQkFDSTtrQkFDS0Esc0JBQ0c7c0JBQ0ksNEVBQUNDO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDWCw0RUFBQ0M7b0NBQ0dDLEtBQUtKLEtBQUtLO29DQUNWQyxLQUFJO29DQUNKSixXQUFVOzs7Ozs7Ozs7OzswQ0FHbEIsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNYLDRFQUFDSztvQ0FBR0wsV0FBVTs4Q0FBUUYsS0FBS1E7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUduQyw4REFBQ1A7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0Q7O3NEQUFJLDhEQUFDUTtzREFBRTs7Ozs7O3dDQUFRO3dDQUFJVCxLQUFLVTs7Ozs7Ozs4Q0FDekIsOERBQUNUOztzREFBSSw4REFBQ1E7c0RBQUU7Ozs7Ozt3Q0FBVTt3Q0FBSVQsS0FBS1E7Ozs7Ozs7OENBQzNCLDhEQUFDUDs7c0RBQUksOERBQUNRO3NEQUFFOzs7Ozs7d0NBQWM7d0NBQUlULEtBQUtXOzs7Ozs7OzhDQUMvQiw4REFBQ1Y7O3NEQUFJLDhEQUFDUTtzREFBRTs7Ozs7O3dDQUFhO3dDQUFLVCxLQUFLSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRL0Q7R0FqQ3dCTjs7UUFDSEQsK0RBQU9BOzs7S0FESkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2ZpbGUuanN4PzIyMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAvY2xpZW50JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKCkge1xyXG4gICAgY29uc3QgeyB1c2VyIH0gPSB1c2VVc2VyKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7dXNlciAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG15LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dXNlci5waWN0dXJlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQcm9maWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1jaXJjbGUgaW1nLWZsdWlkIHByb2ZpbGUtcGljdHVyZSBtYi0zIG1iLW1kLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdtdC00Jz57dXNlci5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04IG0tYXV0byBiZy1kYXJrIHRleHQtbGlnaHQgcC00IHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxiPklEOiA8L2I+ICAge3VzZXIuaWR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48Yj5OQU1FOiA8L2I+ICAge3VzZXIubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxiPk5JQ0tOQU1FOiA8L2I+ICAge3VzZXIubmlja25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48Yj5QSUNUVVJFOiA8L2I+ICAgIHt1c2VyLnBpY3R1cmV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUm93IiwiQ29sIiwidXNlVXNlciIsIlByb2ZpbGUiLCJ1c2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwicGljdHVyZSIsImFsdCIsImgyIiwibmFtZSIsImIiLCJpZCIsIm5pY2tuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/profile.jsx\n"));

/***/ })

});
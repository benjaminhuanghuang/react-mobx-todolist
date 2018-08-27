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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/decorator.js":
/*!**************************!*\
  !*** ./src/decorator.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _desc, _value, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

/*
    https://www.imooc.com/video/17455
*/

// decorator for class
function log(target) {
    // get all properties
    var desc = Object.getOwnPropertyDescriptors(target.prototype);

    var _loop = function _loop(key) {
        if (key === 'constructor') return 'continue';

        var func = desc[key].value;
        if ('function' === typeof func) {
            Object.defineProperty(target.prototype, key, {
                value: function value() {
                    console.log('before ' + key);

                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    var ret = func.apply(this, args);
                    console.log('after ' + key);

                    return ret;
                }
            });
        }
    };

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Object.keys(desc)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            var _ret = _loop(key);

            if (_ret === 'continue') continue;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

// decorator for property
function readonly(target, key, descriptor) {
    descriptor.writable = false;
}

// decorator for unciton
function validate(target, key, descriptor) {
    var func = descriptor.value;
    descriptor.value = function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = args[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var num = _step2.value;

                if ('number' !== typeof num) {
                    throw new Error('"' + num + '" is not a number');
                }
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        return func.apply(this, args);
    };
}

var Numeric = log(_class = (_class2 = function () {
    function Numeric() {
        _classCallCheck(this, Numeric);
    }

    _createClass(Numeric, [{
        key: 'add',
        value: function add() {
            for (var _len3 = arguments.length, nums = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                nums[_key3] = arguments[_key3];
            }

            return nums.reduce(function (sum, n) {
                return sum + n;
            }, 0);
        }
    }]);

    return Numeric;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'add', [validate], Object.getOwnPropertyDescriptor(_class2.prototype, 'add'), _class2.prototype)), _class2)) || _class;

new Numeric().add(1, 2, 3);
new Numeric().PI = 111;
new Numeric().add(1, 2, '3');

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/decorator.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bhuang/ben-github/react-mobx-todolist/src/decorator.js */"./src/decorator.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlY29yYXRvci5qcyJdLCJuYW1lcyI6WyJsb2ciLCJ0YXJnZXQiLCJkZXNjIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsInByb3RvdHlwZSIsImtleSIsImZ1bmMiLCJ2YWx1ZSIsImRlZmluZVByb3BlcnR5IiwiY29uc29sZSIsImFyZ3MiLCJyZXQiLCJhcHBseSIsImtleXMiLCJyZWFkb25seSIsImRlc2NyaXB0b3IiLCJ3cml0YWJsZSIsInZhbGlkYXRlIiwibnVtIiwiRXJyb3IiLCJOdW1lcmljIiwibnVtcyIsInJlZHVjZSIsInN1bSIsIm4iLCJhZGQiLCJQSSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7QUFJQTtBQUNBLFNBQVNBLEdBQVQsQ0FBYUMsTUFBYixFQUFxQjtBQUNqQjtBQUNBLFFBQU1DLE9BQU9DLE9BQU9DLHlCQUFQLENBQWlDSCxPQUFPSSxTQUF4QyxDQUFiOztBQUZpQiwrQkFHTkMsR0FITTtBQUliLFlBQUlBLFFBQVEsYUFBWixFQUNJOztBQUVKLFlBQU1DLE9BQU9MLEtBQUtJLEdBQUwsRUFBVUUsS0FBdkI7QUFDQSxZQUFJLGVBQWUsT0FBT0QsSUFBMUIsRUFBZ0M7QUFDNUJKLG1CQUFPTSxjQUFQLENBQXNCUixPQUFPSSxTQUE3QixFQUF3Q0MsR0FBeEMsRUFBNkM7QUFDekNFLHFCQUR5QyxtQkFDMUI7QUFDWEUsNEJBQVFWLEdBQVIsQ0FBWSxZQUFZTSxHQUF4Qjs7QUFEVyxzREFBTkssSUFBTTtBQUFOQSw0QkFBTTtBQUFBOztBQUVYLHdCQUFNQyxNQUFNTCxLQUFLTSxLQUFMLENBQVcsSUFBWCxFQUFpQkYsSUFBakIsQ0FBWjtBQUNBRCw0QkFBUVYsR0FBUixDQUFZLFdBQVdNLEdBQXZCOztBQUVBLDJCQUFPTSxHQUFQO0FBQ0g7QUFQd0MsYUFBN0M7QUFTSDtBQWxCWTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFHakIsNkJBQWtCVCxPQUFPVyxJQUFQLENBQVlaLElBQVosQ0FBbEIsOEhBQXFDO0FBQUEsZ0JBQTFCSSxHQUEwQjs7QUFBQSw2QkFBMUJBLEdBQTBCOztBQUFBLHFDQUU3QjtBQWNQO0FBbkJnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0JwQjs7QUFFRDtBQUNBLFNBQVNTLFFBQVQsQ0FBa0JkLE1BQWxCLEVBQTBCSyxHQUExQixFQUErQlUsVUFBL0IsRUFBMEM7QUFDdENBLGVBQVdDLFFBQVgsR0FBc0IsS0FBdEI7QUFDSDs7QUFFRDtBQUNBLFNBQVNDLFFBQVQsQ0FBa0JqQixNQUFsQixFQUEwQkssR0FBMUIsRUFBK0JVLFVBQS9CLEVBQ0E7QUFDSSxRQUFNVCxPQUFPUyxXQUFXUixLQUF4QjtBQUNBUSxlQUFXUixLQUFYLEdBQW1CLFlBQWlCO0FBQUEsMkNBQUxHLElBQUs7QUFBTEEsZ0JBQUs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDaEMsa0NBQWVBLElBQWYsbUlBQW9CO0FBQUEsb0JBQVpRLEdBQVk7O0FBQ2hCLG9CQUFHLGFBQVksT0FBT0EsR0FBdEIsRUFDQTtBQUNJLDBCQUFNLElBQUlDLEtBQUosT0FBY0QsR0FBZCx1QkFBTjtBQUNIO0FBQ0o7QUFOK0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPaEMsZUFBT1osS0FBS00sS0FBTCxDQUFXLElBQVgsRUFBaUJGLElBQWpCLENBQVA7QUFDSCxLQVJEO0FBU0g7O0lBR0tVLE8sR0FETHJCLEc7Ozs7Ozs7OEJBTWdCO0FBQUEsK0NBQU5zQixJQUFNO0FBQU5BLG9CQUFNO0FBQUE7O0FBQ1QsbUJBQU9BLEtBQUtDLE1BQUwsQ0FBWSxVQUFDQyxHQUFELEVBQU1DLENBQU47QUFBQSx1QkFBYUQsTUFBTUMsQ0FBbkI7QUFBQSxhQUFaLEVBQW1DLENBQW5DLENBQVA7QUFDSDs7OzsyREFIQVAsUTs7QUFNTCxJQUFJRyxPQUFKLEdBQWNLLEdBQWQsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBeEI7QUFDQSxJQUFJTCxPQUFKLEdBQWNNLEVBQWQsR0FBbUIsR0FBbkI7QUFDQSxJQUFJTixPQUFKLEdBQWNLLEdBQWQsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsR0FBeEIsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKlxuICAgIGh0dHBzOi8vd3d3Lmltb29jLmNvbS92aWRlby8xNzQ1NVxuKi9cblxuLy8gZGVjb3JhdG9yIGZvciBjbGFzc1xuZnVuY3Rpb24gbG9nKHRhcmdldCkge1xuICAgIC8vIGdldCBhbGwgcHJvcGVydGllc1xuICAgIGNvbnN0IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0YXJnZXQucHJvdG90eXBlKTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhkZXNjKSkge1xuICAgICAgICBpZiAoa2V5ID09PSAnY29uc3RydWN0b3InKVxuICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgY29uc3QgZnVuYyA9IGRlc2Nba2V5XS52YWx1ZTtcbiAgICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBmdW5jKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LnByb3RvdHlwZSwga2V5LCB7XG4gICAgICAgICAgICAgICAgdmFsdWUoLi4uYXJncykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYmVmb3JlICcgKyBrZXkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWZ0ZXIgJyArIGtleSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBkZWNvcmF0b3IgZm9yIHByb3BlcnR5XG5mdW5jdGlvbiByZWFkb25seSh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcil7XG4gICAgZGVzY3JpcHRvci53cml0YWJsZSA9IGZhbHNlO1xufVxuXG4vLyBkZWNvcmF0b3IgZm9yIHVuY2l0b25cbmZ1bmN0aW9uIHZhbGlkYXRlKHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKVxue1xuICAgIGNvbnN0IGZ1bmMgPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiguLi5hcmdzKXtcbiAgICAgICAgZm9yKGxldCBudW0gb2YgYXJncyl7XG4gICAgICAgICAgICBpZignbnVtYmVyJyAhPT10eXBlb2YgbnVtKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgXCIke251bX1cIiBpcyBub3QgYSBudW1iZXJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG59XG5cbkBsb2dcbmNsYXNzIE51bWVyaWMge1xuICAgIEByZWFkb25seVxuICAgIFBJID0gMy4xNDE1OTI2O1xuXG4gICAgQHZhbGlkYXRlXG4gICAgYWRkKC4uLm51bXMpIHtcbiAgICAgICAgcmV0dXJuIG51bXMucmVkdWNlKChzdW0sIG4pID0+IChzdW0gKyBuKSwgMCk7XG4gICAgfVxufVxuXG5uZXcgTnVtZXJpYygpLmFkZCgxLCAyLCAzKTtcbm5ldyBOdW1lcmljKCkuUEkgPSAxMTE7XG5uZXcgTnVtZXJpYygpLmFkZCgxLCAyLCAnMycpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rxjs"));
	else if(typeof define === 'function' && define.amd)
		define(["rxjs"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("rxjs")) : factory(root["rxjs"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE__435__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 657:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ___EXPOSE_LOADER_IMPORT___ = __webpack_require__(499);
var ___EXPOSE_LOADER_GET_GLOBAL_THIS___ = __webpack_require__(672);
var ___EXPOSE_LOADER_GLOBAL_THIS___ = ___EXPOSE_LOADER_GET_GLOBAL_THIS___;
if (typeof ___EXPOSE_LOADER_GLOBAL_THIS___["vasat"] === 'undefined') ___EXPOSE_LOADER_GLOBAL_THIS___["vasat"] = ___EXPOSE_LOADER_IMPORT___;
module.exports = ___EXPOSE_LOADER_IMPORT___;


/***/ }),

/***/ 672:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// eslint-disable-next-line func-names
module.exports = function () {
  if (typeof globalThis === "object") {
    return globalThis;
  }

  var g;

  try {
    // This works if eval is allowed (see CSP)
    // eslint-disable-next-line no-new-func
    g = this || new Function("return this")();
  } catch (e) {
    // This works if the window reference is available
    if (typeof window === "object") {
      return window;
    } // This works if the self reference is available


    if (typeof self === "object") {
      return self;
    } // This works if the global reference is available


    if (typeof __webpack_require__.g !== "undefined") {
      return __webpack_require__.g;
    }
  }

  return g;
}();

/***/ }),

/***/ 968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "audit": () => (/* reexport */ audit),
  "auditTime": () => (/* reexport */ auditTime),
  "buffer": () => (/* reexport */ buffer),
  "bufferCount": () => (/* reexport */ bufferCount),
  "bufferTime": () => (/* reexport */ bufferTime),
  "bufferToggle": () => (/* reexport */ bufferToggle),
  "bufferWhen": () => (/* reexport */ bufferWhen),
  "catchError": () => (/* reexport */ catchError),
  "combineAll": () => (/* reexport */ combineAll),
  "combineLatest": () => (/* reexport */ combineLatest_combineLatest),
  "concat": () => (/* reexport */ concat_concat),
  "concatAll": () => (/* reexport */ concatAll),
  "concatMap": () => (/* reexport */ concatMap),
  "concatMapTo": () => (/* reexport */ concatMapTo),
  "count": () => (/* reexport */ count),
  "debounce": () => (/* reexport */ debounce),
  "debounceTime": () => (/* reexport */ debounceTime),
  "defaultIfEmpty": () => (/* reexport */ defaultIfEmpty),
  "delay": () => (/* reexport */ delay),
  "delayWhen": () => (/* reexport */ delayWhen),
  "dematerialize": () => (/* reexport */ dematerialize),
  "distinct": () => (/* reexport */ distinct),
  "distinctUntilChanged": () => (/* reexport */ distinctUntilChanged),
  "distinctUntilKeyChanged": () => (/* reexport */ distinctUntilKeyChanged),
  "elementAt": () => (/* reexport */ elementAt),
  "endWith": () => (/* reexport */ endWith),
  "every": () => (/* reexport */ every),
  "exhaust": () => (/* reexport */ exhaust),
  "exhaustMap": () => (/* reexport */ exhaustMap),
  "expand": () => (/* reexport */ expand),
  "filter": () => (/* reexport */ filter),
  "finalize": () => (/* reexport */ finalize),
  "find": () => (/* reexport */ find),
  "findIndex": () => (/* reexport */ findIndex),
  "first": () => (/* reexport */ first),
  "flatMap": () => (/* reexport */ mergeMap),
  "groupBy": () => (/* reexport */ groupBy),
  "ignoreElements": () => (/* reexport */ ignoreElements),
  "isEmpty": () => (/* reexport */ isEmpty),
  "last": () => (/* reexport */ last),
  "map": () => (/* reexport */ map),
  "mapTo": () => (/* reexport */ mapTo),
  "materialize": () => (/* reexport */ materialize),
  "max": () => (/* reexport */ max),
  "merge": () => (/* reexport */ merge_merge),
  "mergeAll": () => (/* reexport */ mergeAll),
  "mergeMap": () => (/* reexport */ mergeMap),
  "mergeMapTo": () => (/* reexport */ mergeMapTo),
  "mergeScan": () => (/* reexport */ mergeScan),
  "min": () => (/* reexport */ min),
  "multicast": () => (/* reexport */ multicast),
  "observeOn": () => (/* reexport */ observeOn),
  "onErrorResumeNext": () => (/* reexport */ onErrorResumeNext),
  "pairwise": () => (/* reexport */ pairwise),
  "partition": () => (/* reexport */ partition),
  "pluck": () => (/* reexport */ pluck),
  "publish": () => (/* reexport */ publish),
  "publishBehavior": () => (/* reexport */ publishBehavior),
  "publishLast": () => (/* reexport */ publishLast),
  "publishReplay": () => (/* reexport */ publishReplay),
  "race": () => (/* reexport */ race_race),
  "reduce": () => (/* reexport */ reduce),
  "refCount": () => (/* reexport */ refCount),
  "repeat": () => (/* reexport */ repeat),
  "repeatWhen": () => (/* reexport */ repeatWhen),
  "retry": () => (/* reexport */ retry),
  "retryWhen": () => (/* reexport */ retryWhen),
  "sample": () => (/* reexport */ sample),
  "sampleTime": () => (/* reexport */ sampleTime),
  "scan": () => (/* reexport */ scan),
  "sequenceEqual": () => (/* reexport */ sequenceEqual),
  "share": () => (/* reexport */ share),
  "shareReplay": () => (/* reexport */ shareReplay),
  "single": () => (/* reexport */ single),
  "skip": () => (/* reexport */ skip),
  "skipLast": () => (/* reexport */ skipLast),
  "skipUntil": () => (/* reexport */ skipUntil),
  "skipWhile": () => (/* reexport */ skipWhile),
  "startWith": () => (/* reexport */ startWith),
  "subscribeOn": () => (/* reexport */ subscribeOn),
  "switchAll": () => (/* reexport */ switchAll),
  "switchMap": () => (/* reexport */ switchMap),
  "switchMapTo": () => (/* reexport */ switchMapTo),
  "take": () => (/* reexport */ take),
  "takeLast": () => (/* reexport */ takeLast),
  "takeUntil": () => (/* reexport */ takeUntil),
  "takeWhile": () => (/* reexport */ takeWhile),
  "tap": () => (/* reexport */ tap),
  "throttle": () => (/* reexport */ throttle),
  "throttleTime": () => (/* reexport */ throttleTime),
  "throwIfEmpty": () => (/* reexport */ throwIfEmpty),
  "timeInterval": () => (/* reexport */ timeInterval),
  "timeout": () => (/* reexport */ timeout),
  "timeoutWith": () => (/* reexport */ timeoutWith),
  "timestamp": () => (/* reexport */ timestamp),
  "toArray": () => (/* reexport */ toArray),
  "window": () => (/* reexport */ window_window),
  "windowCount": () => (/* reexport */ windowCount),
  "windowTime": () => (/* reexport */ windowTime),
  "windowToggle": () => (/* reexport */ windowToggle),
  "windowWhen": () => (/* reexport */ windowWhen),
  "withLatestFrom": () => (/* reexport */ withLatestFrom),
  "zip": () => (/* reexport */ zip_zip),
  "zipAll": () => (/* reexport */ zipAll)
});

;// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isFunction.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isFunction(x) {
    return typeof x === 'function';
}
//# sourceMappingURL=isFunction.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/config.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = /*@__PURE__*/ new Error();
            /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            /*@__PURE__*/ console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/hostReportError.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
//# sourceMappingURL=hostReportError.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/Observer.js
/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */


var empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isArray.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArray_isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isObject.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isObject(x) {
    return x !== null && typeof x === 'object';
}
//# sourceMappingURL=isObject.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function UnsubscriptionErrorImpl(errors) {
    Error.call(this);
    this.message = errors ?
        errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
    return this;
}
UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
var UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/Subscription.js
/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */




var Subscription = /*@__PURE__*/ (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction(_unsubscribe)) {
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray_isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());

function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var rxSubscriber = typeof Symbol === 'function'
    ? /*@__PURE__*/ Symbol('rxSubscriber')
    : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();
var $$rxSubscriber = (/* unused pure expression or super */ null && (rxSubscriber));
//# sourceMappingURL=rxSubscriber.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/Subscriber.js
/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */







var Subscriber = /*@__PURE__*/ (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription));

var SafeSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== empty) {
                context = Object.create(observerOrNext);
                if (isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));

//# sourceMappingURL=Subscriber.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/OuterSubscriber.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


var OuterSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(OuterSubscriber, _super);
    function OuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}(Subscriber));

//# sourceMappingURL=OuterSubscriber.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/InnerSubscriber.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


var InnerSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        _this.index = 0;
        return _this;
    }
    InnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber;
}(Subscriber));

//# sourceMappingURL=InnerSubscriber.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var subscribeToArray = function (array) {
    return function (subscriber) {
        for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    };
};
//# sourceMappingURL=subscribeToArray.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js
/** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */

var subscribeToPromise = function (promise) {
    return function (subscriber) {
        promise.then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, hostReportError);
        return subscriber;
    };
};
//# sourceMappingURL=subscribeToPromise.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/symbol/iterator.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator_iterator = /*@__PURE__*/ getSymbolIterator();
var $$iterator = (/* unused pure expression or super */ null && (iterator_iterator));
//# sourceMappingURL=iterator.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */

var subscribeToIterable = function (iterable) {
    return function (subscriber) {
        var iterator = iterable[iterator_iterator]();
        do {
            var item = iterator.next();
            if (item.done) {
                subscriber.complete();
                break;
            }
            subscriber.next(item.value);
            if (subscriber.closed) {
                break;
            }
        } while (true);
        if (typeof iterator.return === 'function') {
            subscriber.add(function () {
                if (iterator.return) {
                    iterator.return();
                }
            });
        }
        return subscriber;
    };
};
//# sourceMappingURL=subscribeToIterable.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/symbol/observable.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var observable_observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';
//# sourceMappingURL=observable.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */

var subscribeToObservable = function (obj) {
    return function (subscriber) {
        var obs = obj[observable_observable]();
        if (typeof obs.subscribe !== 'function') {
            throw new TypeError('Provided object does not correctly implement Symbol.observable');
        }
        else {
            return obs.subscribe(subscriber);
        }
    };
};
//# sourceMappingURL=subscribeToObservable.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isArrayLike.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isPromise.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isPromise(value) {
    return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
//# sourceMappingURL=isPromise.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/subscribeTo.js
/** PURE_IMPORTS_START _subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */









var subscribeTo = function (result) {
    if (!!result && typeof result[observable_observable] === 'function') {
        return subscribeToObservable(result);
    }
    else if (isArrayLike(result)) {
        return subscribeToArray(result);
    }
    else if (isPromise(result)) {
        return subscribeToPromise(result);
    }
    else if (!!result && typeof result[iterator_iterator] === 'function') {
        return subscribeToIterable(result);
    }
    else {
        var value = isObject(result) ? 'an invalid object' : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected."
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};
//# sourceMappingURL=subscribeTo.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/canReportError.js
/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */

function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
//# sourceMappingURL=canReportError.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/toSubscriber.js
/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */



function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber]) {
            return nextOrObserver[rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber(empty);
    }
    return new Subscriber(nextOrObserver, error, complete);
}
//# sourceMappingURL=toSubscriber.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/noop.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function noop() { }
//# sourceMappingURL=noop.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/pipe.js
/** PURE_IMPORTS_START _noop PURE_IMPORTS_END */

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (!fns) {
        return noop;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
//# sourceMappingURL=pipe.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/Observable.js
/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */





var Observable = /*@__PURE__*/ (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable_observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());

function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js
/** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo,_Observable PURE_IMPORTS_END */



function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, destination) {
    if (destination === void 0) {
        destination = new InnerSubscriber(outerSubscriber, outerValue, outerIndex);
    }
    if (destination.closed) {
        return undefined;
    }
    if (result instanceof Observable) {
        return result.subscribe(destination);
    }
    return subscribeTo(result)(destination);
}
//# sourceMappingURL=subscribeToResult.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/audit.js
/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */



function audit(durationSelector) {
    return function auditOperatorFunction(source) {
        return source.lift(new AuditOperator(durationSelector));
    };
}
var AuditOperator = /*@__PURE__*/ (function () {
    function AuditOperator(durationSelector) {
        this.durationSelector = durationSelector;
    }
    AuditOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new AuditSubscriber(subscriber, this.durationSelector));
    };
    return AuditOperator;
}());
var AuditSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(AuditSubscriber, _super);
    function AuditSubscriber(destination, durationSelector) {
        var _this = _super.call(this, destination) || this;
        _this.durationSelector = durationSelector;
        _this.hasValue = false;
        return _this;
    }
    AuditSubscriber.prototype._next = function (value) {
        this.value = value;
        this.hasValue = true;
        if (!this.throttled) {
            var duration = void 0;
            try {
                var durationSelector = this.durationSelector;
                duration = durationSelector(value);
            }
            catch (err) {
                return this.destination.error(err);
            }
            var innerSubscription = subscribeToResult(this, duration);
            if (!innerSubscription || innerSubscription.closed) {
                this.clearThrottle();
            }
            else {
                this.add(this.throttled = innerSubscription);
            }
        }
    };
    AuditSubscriber.prototype.clearThrottle = function () {
        var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
        if (throttled) {
            this.remove(throttled);
            this.throttled = null;
            throttled.unsubscribe();
        }
        if (hasValue) {
            this.value = null;
            this.hasValue = false;
            this.destination.next(value);
        }
    };
    AuditSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
        this.clearThrottle();
    };
    AuditSubscriber.prototype.notifyComplete = function () {
        this.clearThrottle();
    };
    return AuditSubscriber;
}(OuterSubscriber));
//# sourceMappingURL=audit.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/scheduler/Action.js
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */


var Action = /*@__PURE__*/ (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return this;
    };
    return Action;
}(Subscription));

//# sourceMappingURL=Action.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js
/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */


var AsyncAction = /*@__PURE__*/ (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(Action));

//# sourceMappingURL=AsyncAction.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/Scheduler.js
var Scheduler = /*@__PURE__*/ (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function () { return Date.now(); };
    return Scheduler;
}());

//# sourceMappingURL=Scheduler.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js
/** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */


var AsyncScheduler = /*@__PURE__*/ (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        var _this = _super.call(this, SchedulerAction, function () {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return _super.prototype.schedule.call(this, work, delay, state);
        }
    };
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler));

//# sourceMappingURL=AsyncScheduler.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/scheduler/async.js
/** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */


var async_async = /*@__PURE__*/ new AsyncScheduler(AsyncAction);
//# sourceMappingURL=async.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isNumeric.js
/** PURE_IMPORTS_START _isArray PURE_IMPORTS_END */

function isNumeric(val) {
    return !isArray_isArray(val) && (val - parseFloat(val) + 1) >= 0;
}
//# sourceMappingURL=isNumeric.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isScheduler.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isScheduler_isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
//# sourceMappingURL=isScheduler.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/timer.js
/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */




function timer(dueTime, periodOrScheduler, scheduler) {
    if (dueTime === void 0) {
        dueTime = 0;
    }
    var period = -1;
    if (isNumeric(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    }
    else if (isScheduler_isScheduler(periodOrScheduler)) {
        scheduler = periodOrScheduler;
    }
    if (!isScheduler_isScheduler(scheduler)) {
        scheduler = async_async;
    }
    return new Observable(function (subscriber) {
        var due = isNumeric(dueTime)
            ? dueTime
            : (+dueTime - scheduler.now());
        return scheduler.schedule(dispatch, due, {
            index: 0, period: period, subscriber: subscriber
        });
    });
}
function dispatch(state) {
    var index = state.index, period = state.period, subscriber = state.subscriber;
    subscriber.next(index);
    if (subscriber.closed) {
        return;
    }
    else if (period === -1) {
        return subscriber.complete();
    }
    state.index = index + 1;
    this.schedule(state, period);
}
//# sourceMappingURL=timer.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/auditTime.js
/** PURE_IMPORTS_START _scheduler_async,_audit,_observable_timer PURE_IMPORTS_END */



function auditTime(duration, scheduler) {
    if (scheduler === void 0) {
        scheduler = async_async;
    }
    return audit(function () { return timer(duration, scheduler); });
}
//# sourceMappingURL=auditTime.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/buffer.js
/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */



function buffer(closingNotifier) {
    return function bufferOperatorFunction(source) {
        return source.lift(new BufferOperator(closingNotifier));
    };
}
var BufferOperator = /*@__PURE__*/ (function () {
    function BufferOperator(closingNotifier) {
        this.closingNotifier = closingNotifier;
    }
    BufferOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
    };
    return BufferOperator;
}());
var BufferSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(BufferSubscriber, _super);
    function BufferSubscriber(destination, closingNotifier) {
        var _this = _super.call(this, destination) || this;
        _this.buffer = [];
        _this.add(subscribeToResult(_this, closingNotifier));
        return _this;
    }
    BufferSubscriber.prototype._next = function (value) {
        this.buffer.push(value);
    };
    BufferSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var buffer = this.buffer;
        this.buffer = [];
        this.destination.next(buffer);
    };
    return BufferSubscriber;
}(OuterSubscriber));
//# sourceMappingURL=buffer.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/bufferCount.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) {
        startBufferEvery = null;
    }
    return function bufferCountOperatorFunction(source) {
        return source.lift(new BufferCountOperator(bufferSize, startBufferEvery));
    };
}
var BufferCountOperator = /*@__PURE__*/ (function () {
    function BufferCountOperator(bufferSize, startBufferEvery) {
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
        if (!startBufferEvery || bufferSize === startBufferEvery) {
            this.subscriberClass = BufferCountSubscriber;
        }
        else {
            this.subscriberClass = BufferSkipCountSubscriber;
        }
    }
    BufferCountOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new this.subscriberClass(subscriber, this.bufferSize, this.startBufferEvery));
    };
    return BufferCountOperator;
}());
var BufferCountSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(BufferCountSubscriber, _super);
    function BufferCountSubscriber(destination, bufferSize) {
        var _this = _super.call(this, destination) || this;
        _this.bufferSize = bufferSize;
        _this.buffer = [];
        return _this;
    }
    BufferCountSubscriber.prototype._next = function (value) {
        var buffer = this.buffer;
        buffer.push(value);
        if (buffer.length == this.bufferSize) {
            this.destination.next(buffer);
            this.buffer = [];
        }
    };
    BufferCountSubscriber.prototype._complete = function () {
        var buffer = this.buffer;
        if (buffer.length > 0) {
            this.destination.next(buffer);
        }
        _super.prototype._complete.call(this);
    };
    return BufferCountSubscriber;
}(Subscriber));
var BufferSkipCountSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(BufferSkipCountSubscriber, _super);
    function BufferSkipCountSubscriber(destination, bufferSize, startBufferEvery) {
        var _this = _super.call(this, destination) || this;
        _this.bufferSize = bufferSize;
        _this.startBufferEvery = startBufferEvery;
        _this.buffers = [];
        _this.count = 0;
        return _this;
    }
    BufferSkipCountSubscriber.prototype._next = function (value) {
        var _a = this, bufferSize = _a.bufferSize, startBufferEvery = _a.startBufferEvery, buffers = _a.buffers, count = _a.count;
        this.count++;
        if (count % startBufferEvery === 0) {
            buffers.push([]);
        }
        for (var i = buffers.length; i--;) {
            var buffer = buffers[i];
            buffer.push(value);
            if (buffer.length === bufferSize) {
                buffers.splice(i, 1);
                this.destination.next(buffer);
            }
        }
    };
    BufferSkipCountSubscriber.prototype._complete = function () {
        var _a = this, buffers = _a.buffers, destination = _a.destination;
        while (buffers.length > 0) {
            var buffer = buffers.shift();
            if (buffer.length > 0) {
                destination.next(buffer);
            }
        }
        _super.prototype._complete.call(this);
    };
    return BufferSkipCountSubscriber;
}(Subscriber));
//# sourceMappingURL=bufferCount.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/bufferTime.js
/** PURE_IMPORTS_START tslib,_scheduler_async,_Subscriber,_util_isScheduler PURE_IMPORTS_END */




function bufferTime(bufferTimeSpan) {
    var length = arguments.length;
    var scheduler = async_async;
    if (isScheduler_isScheduler(arguments[arguments.length - 1])) {
        scheduler = arguments[arguments.length - 1];
        length--;
    }
    var bufferCreationInterval = null;
    if (length >= 2) {
        bufferCreationInterval = arguments[1];
    }
    var maxBufferSize = Number.POSITIVE_INFINITY;
    if (length >= 3) {
        maxBufferSize = arguments[2];
    }
    return function bufferTimeOperatorFunction(source) {
        return source.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler));
    };
}
var BufferTimeOperator = /*@__PURE__*/ (function () {
    function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.maxBufferSize = maxBufferSize;
        this.scheduler = scheduler;
    }
    BufferTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
    };
    return BufferTimeOperator;
}());
var Context = /*@__PURE__*/ (function () {
    function Context() {
        this.buffer = [];
    }
    return Context;
}());
var BufferTimeSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(BufferTimeSubscriber, _super);
    function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.bufferTimeSpan = bufferTimeSpan;
        _this.bufferCreationInterval = bufferCreationInterval;
        _this.maxBufferSize = maxBufferSize;
        _this.scheduler = scheduler;
        _this.contexts = [];
        var context = _this.openContext();
        _this.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;
        if (_this.timespanOnly) {
            var timeSpanOnlyState = { subscriber: _this, context: context, bufferTimeSpan: bufferTimeSpan };
            _this.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
        else {
            var closeState = { subscriber: _this, context: context };
            var creationState = { bufferTimeSpan: bufferTimeSpan, bufferCreationInterval: bufferCreationInterval, subscriber: _this, scheduler: scheduler };
            _this.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
            _this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
        }
        return _this;
    }
    BufferTimeSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        var len = contexts.length;
        var filledBufferContext;
        for (var i = 0; i < len; i++) {
            var context_1 = contexts[i];
            var buffer = context_1.buffer;
            buffer.push(value);
            if (buffer.length == this.maxBufferSize) {
                filledBufferContext = context_1;
            }
        }
        if (filledBufferContext) {
            this.onBufferFull(filledBufferContext);
        }
    };
    BufferTimeSubscriber.prototype._error = function (err) {
        this.contexts.length = 0;
        _super.prototype._error.call(this, err);
    };
    BufferTimeSubscriber.prototype._complete = function () {
        var _a = this, contexts = _a.contexts, destination = _a.destination;
        while (contexts.length > 0) {
            var context_2 = contexts.shift();
            destination.next(context_2.buffer);
        }
        _super.prototype._complete.call(this);
    };
    BufferTimeSubscriber.prototype._unsubscribe = function () {
        this.contexts = null;
    };
    BufferTimeSubscriber.prototype.onBufferFull = function (context) {
        this.closeContext(context);
        var closeAction = context.closeAction;
        closeAction.unsubscribe();
        this.remove(closeAction);
        if (!this.closed && this.timespanOnly) {
            context = this.openContext();
            var bufferTimeSpan = this.bufferTimeSpan;
            var timeSpanOnlyState = { subscriber: this, context: context, bufferTimeSpan: bufferTimeSpan };
            this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
    };
    BufferTimeSubscriber.prototype.openContext = function () {
        var context = new Context();
        this.contexts.push(context);
        return context;
    };
    BufferTimeSubscriber.prototype.closeContext = function (context) {
        this.destination.next(context.buffer);
        var contexts = this.contexts;
        var spliceIndex = contexts ? contexts.indexOf(context) : -1;
        if (spliceIndex >= 0) {
            contexts.splice(contexts.indexOf(context), 1);
        }
    };
    return BufferTimeSubscriber;
}(Subscriber));
function dispatchBufferTimeSpanOnly(state) {
    var subscriber = state.subscriber;
    var prevContext = state.context;
    if (prevContext) {
        subscriber.closeContext(prevContext);
    }
    if (!subscriber.closed) {
        state.context = subscriber.openContext();
        state.context.closeAction = this.schedule(state, state.bufferTimeSpan);
    }
}
function dispatchBufferCreation(state) {
    var bufferCreationInterval = state.bufferCreationInterval, bufferTimeSpan = state.bufferTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler;
    var context = subscriber.openContext();
    var action = this;
    if (!subscriber.closed) {
        subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: subscriber, context: context }));
        action.schedule(state, bufferCreationInterval);
    }
}
function dispatchBufferClose(arg) {
    var subscriber = arg.subscriber, context = arg.context;
    subscriber.closeContext(context);
}
//# sourceMappingURL=bufferTime.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/bufferToggle.js
/** PURE_IMPORTS_START tslib,_Subscription,_util_subscribeToResult,_OuterSubscriber PURE_IMPORTS_END */




function bufferToggle(openings, closingSelector) {
    return function bufferToggleOperatorFunction(source) {
        return source.lift(new BufferToggleOperator(openings, closingSelector));
    };
}
var BufferToggleOperator = /*@__PURE__*/ (function () {
    function BufferToggleOperator(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
    }
    BufferToggleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
    };
    return BufferToggleOperator;
}());
var BufferToggleSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(BufferToggleSubscriber, _super);
    function BufferToggleSubscriber(destination, openings, closingSelector) {
        var _this = _super.call(this, destination) || this;
        _this.openings = openings;
        _this.closingSelector = closingSelector;
        _this.contexts = [];
        _this.add(subscribeToResult(_this, openings));
        return _this;
    }
    BufferToggleSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        var len = contexts.length;
        for (var i = 0; i < len; i++) {
            contexts[i].buffer.push(value);
        }
    };
    BufferToggleSubscriber.prototype._error = function (err) {
        var contexts = this.contexts;
        while (contexts.length > 0) {
            var context_1 = contexts.shift();
            context_1.subscription.unsubscribe();
            context_1.buffer = null;
            context_1.subscription = null;
        }
        this.contexts = null;
        _super.prototype._error.call(this, err);
    };
    BufferToggleSubscriber.prototype._complete = function () {
        var contexts = this.contexts;
        while (contexts.length > 0) {
            var context_2 = contexts.shift();
            this.destination.next(context_2.buffer);
            context_2.subscription.unsubscribe();
            context_2.buffer = null;
            context_2.subscription = null;
        }
        this.contexts = null;
        _super.prototype._complete.call(this);
    };
    BufferToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
    };
    BufferToggleSubscriber.prototype.notifyComplete = function (innerSub) {
        this.closeBuffer(innerSub.context);
    };
    BufferToggleSubscriber.prototype.openBuffer = function (value) {
        try {
            var closingSelector = this.closingSelector;
            var closingNotifier = closingSelector.call(this, value);
            if (closingNotifier) {
                this.trySubscribe(closingNotifier);
            }
        }
        catch (err) {
            this._error(err);
        }
    };
    BufferToggleSubscriber.prototype.closeBuffer = function (context) {
        var contexts = this.contexts;
        if (contexts && context) {
            var buffer = context.buffer, subscription = context.subscription;
            this.destination.next(buffer);
            contexts.splice(contexts.indexOf(context), 1);
            this.remove(subscription);
            subscription.unsubscribe();
        }
    };
    BufferToggleSubscriber.prototype.trySubscribe = function (closingNotifier) {
        var contexts = this.contexts;
        var buffer = [];
        var subscription = new Subscription();
        var context = { buffer: buffer, subscription: subscription };
        contexts.push(context);
        var innerSubscription = subscribeToResult(this, closingNotifier, context);
        if (!innerSubscription || innerSubscription.closed) {
            this.closeBuffer(context);
        }
        else {
            innerSubscription.context = context;
            this.add(innerSubscription);
            subscription.add(innerSubscription);
        }
    };
    return BufferToggleSubscriber;
}(OuterSubscriber));
//# sourceMappingURL=bufferToggle.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/bufferWhen.js
/** PURE_IMPORTS_START tslib,_Subscription,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */




function bufferWhen(closingSelector) {
    return function (source) {
        return source.lift(new BufferWhenOperator(closingSelector));
    };
}
var BufferWhenOperator = /*@__PURE__*/ (function () {
    function BufferWhenOperator(closingSelector) {
        this.closingSelector = closingSelector;
    }
    BufferWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
    };
    return BufferWhenOperator;
}());
var BufferWhenSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(BufferWhenSubscriber, _super);
    function BufferWhenSubscriber(destination, closingSelector) {
        var _this = _super.call(this, destination) || this;
        _this.closingSelector = closingSelector;
        _this.subscribing = false;
        _this.openBuffer();
        return _this;
    }
    BufferWhenSubscriber.prototype._next = function (value) {
        this.buffer.push(value);
    };
    BufferWhenSubscriber.prototype._complete = function () {
        var buffer = this.buffer;
        if (buffer) {
            this.destination.next(buffer);
        }
        _super.prototype._complete.call(this);
    };
    BufferWhenSubscriber.prototype._unsubscribe = function () {
        this.buffer = null;
        this.subscribing = false;
    };
    BufferWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.openBuffer();
    };
    BufferWhenSubscriber.prototype.notifyComplete = function () {
        if (this.subscribing) {
            this.complete();
        }
        else {
            this.openBuffer();
        }
    };
    BufferWhenSubscriber.prototype.openBuffer = function () {
        var closingSubscription = this.closingSubscription;
        if (closingSubscription) {
            this.remove(closingSubscription);
            closingSubscription.unsubscribe();
        }
        var buffer = this.buffer;
        if (this.buffer) {
            this.destination.next(buffer);
        }
        this.buffer = [];
        var closingNotifier;
        try {
            var closingSelector = this.closingSelector;
            closingNotifier = closingSelector();
        }
        catch (err) {
            return this.error(err);
        }
        closingSubscription = new Subscription();
        this.closingSubscription = closingSubscription;
        this.add(closingSubscription);
        this.subscribing = true;
        closingSubscription.add(subscribeToResult(this, closingNotifier));
        this.subscribing = false;
    };
    return BufferWhenSubscriber;
}(OuterSubscriber));
//# sourceMappingURL=bufferWhen.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/catchError.js
/** PURE_IMPORTS_START tslib,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult PURE_IMPORTS_END */




function catchError(selector) {
    return function catchErrorOperatorFunction(source) {
        var operator = new CatchOperator(selector);
        var caught = source.lift(operator);
        return (operator.caught = caught);
    };
}
var CatchOperator = /*@__PURE__*/ (function () {
    function CatchOperator(selector) {
        this.selector = selector;
    }
    CatchOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
    };
    return CatchOperator;
}());
var CatchSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(CatchSubscriber, _super);
    function CatchSubscriber(destination, selector, caught) {
        var _this = _super.call(this, destination) || this;
        _this.selector = selector;
        _this.caught = caught;
        return _this;
    }
    CatchSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var result = void 0;
            try {
                result = this.selector(err, this.caught);
            }
            catch (err2) {
                _super.prototype.error.call(this, err2);
                return;
            }
            this._unsubscribeAndRecycle();
            var innerSubscriber = new InnerSubscriber(this, undefined, undefined);
            this.add(innerSubscriber);
            subscribeToResult(this, result, undefined, undefined, innerSubscriber);
        }
    };
    return CatchSubscriber;
}(OuterSubscriber));
//# sourceMappingURL=catchError.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/combineLatest.js
/** PURE_IMPORTS_START tslib,_util_isScheduler,_util_isArray,_OuterSubscriber,_util_subscribeToResult,_fromArray PURE_IMPORTS_END */






var NONE = {};
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var resultSelector = null;
    var scheduler = null;
    if (isScheduler(observables[observables.length - 1])) {
        scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
        resultSelector = observables.pop();
    }
    if (observables.length === 1 && isArray(observables[0])) {
        observables = observables[0];
    }
    return fromArray(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}
var CombineLatestOperator = /*@__PURE__*/ (function () {
    function CombineLatestOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    CombineLatestOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
    };
    return CombineLatestOperator;
}());

var CombineLatestSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, resultSelector) {
        var _this = _super.call(this, destination) || this;
        _this.resultSelector = resultSelector;
        _this.active = 0;
        _this.values = [];
        _this.observables = [];
        return _this;
    }
    CombineLatestSubscriber.prototype._next = function (observable) {
        this.values.push(NONE);
        this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            this.active = len;
            this.toRespond = len;
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                this.add(subscribeToResult(this, observable, observable, i));
            }
        }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
    };
    CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var values = this.values;
        var oldVal = values[outerIndex];
        var toRespond = !this.toRespond
            ? 0
            : oldVal === NONE ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.resultSelector) {
                this._tryResultSelector(values);
            }
            else {
                this.destination.next(values.slice());
            }
        }
    };
    CombineLatestSubscriber.prototype._tryResultSelector = function (values) {
        var result;
        try {
            result = this.resultSelector.apply(this, values);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return CombineLatestSubscriber;
}(OuterSubscriber));

//# sourceMappingURL=combineLatest.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/combineAll.js
/** PURE_IMPORTS_START _observable_combineLatest PURE_IMPORTS_END */

function combineAll(project) {
    return function (source) { return source.lift(new CombineLatestOperator(project)); };
}
//# sourceMappingURL=combineAll.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/scheduled/scheduleObservable.js
/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable PURE_IMPORTS_END */



function scheduleObservable(input, scheduler) {
    return new Observable(function (subscriber) {
        var sub = new Subscription();
        sub.add(scheduler.schedule(function () {
            var observable = input[observable_observable]();
            sub.add(observable.subscribe({
                next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
                error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
                complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
            }));
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleObservable.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/scheduled/schedulePromise.js
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */


function schedulePromise(input, scheduler) {
    return new Observable(function (subscriber) {
        var sub = new Subscription();
        sub.add(scheduler.schedule(function () {
            return input.then(function (value) {
                sub.add(scheduler.schedule(function () {
                    subscriber.next(value);
                    sub.add(scheduler.schedule(function () { return subscriber.complete(); }));
                }));
            }, function (err) {
                sub.add(scheduler.schedule(function () { return subscriber.error(err); }));
            });
        }));
        return sub;
    });
}
//# sourceMappingURL=schedulePromise.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */


function scheduleArray(input, scheduler) {
    return new Observable(function (subscriber) {
        var sub = new Subscription();
        var i = 0;
        sub.add(scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
                return;
            }
            subscriber.next(input[i++]);
            if (!subscriber.closed) {
                sub.add(this.schedule());
            }
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleArray.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/scheduled/scheduleIterable.js
/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator PURE_IMPORTS_END */



function scheduleIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    return new Observable(function (subscriber) {
        var sub = new Subscription();
        var iterator;
        sub.add(function () {
            if (iterator && typeof iterator.return === 'function') {
                iterator.return();
            }
        });
        sub.add(scheduler.schedule(function () {
            iterator = input[iterator_iterator]();
            sub.add(scheduler.schedule(function () {
                if (subscriber.closed) {
                    return;
                }
                var value;
                var done;
                try {
                    var result = iterator.next();
                    value = result.value;
                    done = result.done;
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                }
                else {
                    subscriber.next(value);
                    this.schedule();
                }
            }));
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleIterable.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isInteropObservable.js
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */

function isInteropObservable(input) {
    return input && typeof input[observable_observable] === 'function';
}
//# sourceMappingURL=isInteropObservable.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isIterable.js
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */

function isIterable(input) {
    return input && typeof input[iterator_iterator] === 'function';
}
//# sourceMappingURL=isIterable.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/scheduled/scheduled.js
/** PURE_IMPORTS_START _scheduleObservable,_schedulePromise,_scheduleArray,_scheduleIterable,_util_isInteropObservable,_util_isPromise,_util_isArrayLike,_util_isIterable PURE_IMPORTS_END */








function scheduled(input, scheduler) {
    if (input != null) {
        if (isInteropObservable(input)) {
            return scheduleObservable(input, scheduler);
        }
        else if (isPromise(input)) {
            return schedulePromise(input, scheduler);
        }
        else if (isArrayLike(input)) {
            return scheduleArray(input, scheduler);
        }
        else if (isIterable(input) || typeof input === 'string') {
            return scheduleIterable(input, scheduler);
        }
    }
    throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}
//# sourceMappingURL=scheduled.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/from.js
/** PURE_IMPORTS_START _Observable,_util_subscribeTo,_scheduled_scheduled PURE_IMPORTS_END */



function from_from(input, scheduler) {
    if (!scheduler) {
        if (input instanceof Observable) {
            return input;
        }
        return new Observable(subscribeTo(input));
    }
    else {
        return scheduled(input, scheduler);
    }
}
//# sourceMappingURL=from.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/combineLatest.js
/** PURE_IMPORTS_START _util_isArray,_observable_combineLatest,_observable_from PURE_IMPORTS_END */



var none = {};
function combineLatest_combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var project = null;
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    if (observables.length === 1 && isArray_isArray(observables[0])) {
        observables = observables[0].slice();
    }
    return function (source) { return source.lift.call(from_from([source].concat(observables)), new CombineLatestOperator(project)); };
}
//# sourceMappingURL=combineLatest.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/fromArray.js
/** PURE_IMPORTS_START _Observable,_util_subscribeToArray,_scheduled_scheduleArray PURE_IMPORTS_END */



function fromArray_fromArray(input, scheduler) {
    if (!scheduler) {
        return new Observable(subscribeToArray(input));
    }
    else {
        return scheduleArray(input, scheduler);
    }
}
//# sourceMappingURL=fromArray.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/of.js
/** PURE_IMPORTS_START _util_isScheduler,_fromArray,_scheduled_scheduleArray PURE_IMPORTS_END */



function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args[args.length - 1];
    if (isScheduler_isScheduler(scheduler)) {
        args.pop();
        return scheduleArray(args, scheduler);
    }
    else {
        return fromArray_fromArray(args);
    }
}
//# sourceMappingURL=of.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/map.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
var MapOperator = /*@__PURE__*/ (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());

var MapSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber));
//# sourceMappingURL=map.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/mergeMap.js
/** PURE_IMPORTS_START tslib,_util_subscribeToResult,_OuterSubscriber,_InnerSubscriber,_map,_observable_from PURE_IMPORTS_END */






function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    if (typeof resultSelector === 'function') {
        return function (source) { return source.pipe(mergeMap(function (a, i) { return from_from(project(a, i)).pipe(map(function (b, ii) { return resultSelector(a, b, i, ii); })); }, concurrent)); };
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return function (source) { return source.lift(new MergeMapOperator(project, concurrent)); };
}
var MergeMapOperator = /*@__PURE__*/ (function () {
    function MergeMapOperator(project, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        this.project = project;
        this.concurrent = concurrent;
    }
    MergeMapOperator.prototype.call = function (observer, source) {
        return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
    };
    return MergeMapOperator;
}());

var MergeMapSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(MergeMapSubscriber, _super);
    function MergeMapSubscriber(destination, project, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.concurrent = concurrent;
        _this.hasCompleted = false;
        _this.buffer = [];
        _this.active = 0;
        _this.index = 0;
        return _this;
    }
    MergeMapSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            this._tryNext(value);
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeMapSubscriber.prototype._tryNext = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.active++;
        this._innerSub(result, value, index);
    };
    MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
        var innerSubscriber = new InnerSubscriber(this, undefined, undefined);
        var destination = this.destination;
        destination.add(innerSubscriber);
        subscribeToResult(this, ish, value, index, innerSubscriber);
    };
    MergeMapSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
        this.unsubscribe();
    };
    MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    };
    return MergeMapSubscriber;
}(OuterSubscriber));

//# sourceMappingURL=mergeMap.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/identity.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function identity(x) {
    return x;
}
//# sourceMappingURL=identity.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/mergeAll.js
/** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */


function mergeAll(concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    return mergeMap(identity, concurrent);
}
//# sourceMappingURL=mergeAll.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/concatAll.js
/** PURE_IMPORTS_START _mergeAll PURE_IMPORTS_END */

function concatAll() {
    return mergeAll(1);
}
//# sourceMappingURL=concatAll.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/concat.js
/** PURE_IMPORTS_START _of,_operators_concatAll PURE_IMPORTS_END */


function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return concatAll()(of.apply(void 0, observables));
}
//# sourceMappingURL=concat.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/concat.js
/** PURE_IMPORTS_START _observable_concat PURE_IMPORTS_END */

function concat_concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return function (source) { return source.lift.call(concat.apply(void 0, [source].concat(observables))); };
}
//# sourceMappingURL=concat.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/concatMap.js
/** PURE_IMPORTS_START _mergeMap PURE_IMPORTS_END */

function concatMap(project, resultSelector) {
    return mergeMap(project, resultSelector, 1);
}
//# sourceMappingURL=concatMap.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/concatMapTo.js
/** PURE_IMPORTS_START _concatMap PURE_IMPORTS_END */

function concatMapTo(innerObservable, resultSelector) {
    return concatMap(function () { return innerObservable; }, resultSelector);
}
//# sourceMappingURL=concatMapTo.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/count.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function count(predicate) {
    return function (source) { return source.lift(new CountOperator(predicate, source)); };
}
var CountOperator = /*@__PURE__*/ (function () {
    function CountOperator(predicate, source) {
        this.predicate = predicate;
        this.source = source;
    }
    CountOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
    };
    return CountOperator;
}());
var CountSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(CountSubscriber, _super);
    function CountSubscriber(destination, predicate, source) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.source = source;
        _this.count = 0;
        _this.index = 0;
        return _this;
    }
    CountSubscriber.prototype._next = function (value) {
        if (this.predicate) {
            this._tryPredicate(value);
        }
        else {
            this.count++;
        }
    };
    CountSubscriber.prototype._tryPredicate = function (value) {
        var result;
        try {
            result = this.predicate(value, this.index++, this.source);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.count++;
        }
    };
    CountSubscriber.prototype._complete = function () {
        this.destination.next(this.count);
        this.destination.complete();
    };
    return CountSubscriber;
}(Subscriber));
//# sourceMappingURL=count.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/debounce.js
/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */



function debounce(durationSelector) {
    return function (source) { return source.lift(new DebounceOperator(durationSelector)); };
}
var DebounceOperator = /*@__PURE__*/ (function () {
    function DebounceOperator(durationSelector) {
        this.durationSelector = durationSelector;
    }
    DebounceOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
    };
    return DebounceOperator;
}());
var DebounceSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(DebounceSubscriber, _super);
    function DebounceSubscriber(destination, durationSelector) {
        var _this = _super.call(this, destination) || this;
        _this.durationSelector = durationSelector;
        _this.hasValue = false;
        _this.durationSubscription = null;
        return _this;
    }
    DebounceSubscriber.prototype._next = function (value) {
        try {
            var result = this.durationSelector.call(this, value);
            if (result) {
                this._tryNext(value, result);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    DebounceSubscriber.prototype._complete = function () {
        this.emitValue();
        this.destination.complete();
    };
    DebounceSubscriber.prototype._tryNext = function (value, duration) {
        var subscription = this.durationSubscription;
        this.value = value;
        this.hasValue = true;
        if (subscription) {
            subscription.unsubscribe();
            this.remove(subscription);
        }
        subscription = subscribeToResult(this, duration);
        if (subscription && !subscription.closed) {
            this.add(this.durationSubscription = subscription);
        }
    };
    DebounceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.emitValue();
    };
    DebounceSubscriber.prototype.notifyComplete = function () {
        this.emitValue();
    };
    DebounceSubscriber.prototype.emitValue = function () {
        if (this.hasValue) {
            var value = this.value;
            var subscription = this.durationSubscription;
            if (subscription) {
                this.durationSubscription = null;
                subscription.unsubscribe();
                this.remove(subscription);
            }
            this.value = null;
            this.hasValue = false;
            _super.prototype._next.call(this, value);
        }
    };
    return DebounceSubscriber;
}(OuterSubscriber));
//# sourceMappingURL=debounce.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/debounceTime.js
/** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async PURE_IMPORTS_END */



function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) {
        scheduler = async_async;
    }
    return function (source) { return source.lift(new DebounceTimeOperator(dueTime, scheduler)); };
}
var DebounceTimeOperator = /*@__PURE__*/ (function () {
    function DebounceTimeOperator(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator;
}());
var DebounceTimeSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.dueTime = dueTime;
        _this.scheduler = scheduler;
        _this.debouncedSubscription = null;
        _this.lastValue = null;
        _this.hasValue = false;
        return _this;
    }
    DebounceTimeSubscriber.prototype._next = function (value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function () {
        this.debouncedNext();
        this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function () {
        this.clearDebounce();
        if (this.hasValue) {
            var lastValue = this.lastValue;
            this.lastValue = null;
            this.hasValue = false;
            this.destination.next(lastValue);
        }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function () {
        var debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    };
    return DebounceTimeSubscriber;
}(Subscriber));
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}
//# sourceMappingURL=debounceTime.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/defaultIfEmpty.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function defaultIfEmpty(defaultValue) {
    if (defaultValue === void 0) {
        defaultValue = null;
    }
    return function (source) { return source.lift(new DefaultIfEmptyOperator(defaultValue)); };
}
var DefaultIfEmptyOperator = /*@__PURE__*/ (function () {
    function DefaultIfEmptyOperator(defaultValue) {
        this.defaultValue = defaultValue;
    }
    DefaultIfEmptyOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
    };
    return DefaultIfEmptyOperator;
}());
var DefaultIfEmptySubscriber = /*@__PURE__*/ (function (_super) {
    __extends(DefaultIfEmptySubscriber, _super);
    function DefaultIfEmptySubscriber(destination, defaultValue) {
        var _this = _super.call(this, destination) || this;
        _this.defaultValue = defaultValue;
        _this.isEmpty = true;
        return _this;
    }
    DefaultIfEmptySubscriber.prototype._next = function (value) {
        this.isEmpty = false;
        this.destination.next(value);
    };
    DefaultIfEmptySubscriber.prototype._complete = function () {
        if (this.isEmpty) {
            this.destination.next(this.defaultValue);
        }
        this.destination.complete();
    };
    return DefaultIfEmptySubscriber;
}(Subscriber));
//# sourceMappingURL=defaultIfEmpty.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isDate.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isDate(value) {
    return value instanceof Date && !isNaN(+value);
}
//# sourceMappingURL=isDate.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/empty.js
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

var EMPTY = /*@__PURE__*/ new Observable(function (subscriber) { return subscriber.complete(); });
function empty_empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}
//# sourceMappingURL=empty.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/throwError.js
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function throwError(error, scheduler) {
    if (!scheduler) {
        return new Observable(function (subscriber) { return subscriber.error(error); });
    }
    else {
        return new Observable(function (subscriber) { return scheduler.schedule(throwError_dispatch, 0, { error: error, subscriber: subscriber }); });
    }
}
function throwError_dispatch(_a) {
    var error = _a.error, subscriber = _a.subscriber;
    subscriber.error(error);
}
//# sourceMappingURL=throwError.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/Notification.js
/** PURE_IMPORTS_START _observable_empty,_observable_of,_observable_throwError PURE_IMPORTS_END */



var NotificationKind;
/*@__PURE__*/ (function (NotificationKind) {
    NotificationKind["NEXT"] = "N";
    NotificationKind["ERROR"] = "E";
    NotificationKind["COMPLETE"] = "C";
})(NotificationKind || (NotificationKind = {}));
var Notification = /*@__PURE__*/ (function () {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    Notification.prototype.observe = function (observer) {
        switch (this.kind) {
            case 'N':
                return observer.next && observer.next(this.value);
            case 'E':
                return observer.error && observer.error(this.error);
            case 'C':
                return observer.complete && observer.complete();
        }
    };
    Notification.prototype.do = function (next, error, complete) {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return next && next(this.value);
            case 'E':
                return error && error(this.error);
            case 'C':
                return complete && complete();
        }
    };
    Notification.prototype.accept = function (nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    };
    Notification.prototype.toObservable = function () {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return of(this.value);
            case 'E':
                return throwError(this.error);
            case 'C':
                return empty_empty();
        }
        throw new Error('unexpected notification kind value');
    };
    Notification.createNext = function (value) {
        if (typeof value !== 'undefined') {
            return new Notification('N', value);
        }
        return Notification.undefinedValueNotification;
    };
    Notification.createError = function (err) {
        return new Notification('E', undefined, err);
    };
    Notification.createComplete = function () {
        return Notification.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    Notification.undefinedValueNotification = new Notification('N', undefined);
    return Notification;
}());

//# sourceMappingURL=Notification.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/delay.js
/** PURE_IMPORTS_START tslib,_scheduler_async,_util_isDate,_Subscriber,_Notification PURE_IMPORTS_END */





function delay(delay, scheduler) {
    if (scheduler === void 0) {
        scheduler = async_async;
    }
    var absoluteDelay = isDate(delay);
    var delayFor = absoluteDelay ? (+delay - scheduler.now()) : Math.abs(delay);
    return function (source) { return source.lift(new DelayOperator(delayFor, scheduler)); };
}
var DelayOperator = /*@__PURE__*/ (function () {
    function DelayOperator(delay, scheduler) {
        this.delay = delay;
        this.scheduler = scheduler;
    }
    DelayOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
    };
    return DelayOperator;
}());
var DelaySubscriber = /*@__PURE__*/ (function (_super) {
    __extends(DelaySubscriber, _super);
    function DelaySubscriber(destination, delay, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.delay = delay;
        _this.scheduler = scheduler;
        _this.queue = [];
        _this.active = false;
        _this.errored = false;
        return _this;
    }
    DelaySubscriber.dispatch = function (state) {
        var source = state.source;
        var queue = source.queue;
        var scheduler = state.scheduler;
        var destination = state.destination;
        while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
            queue.shift().notification.observe(destination);
        }
        if (queue.length > 0) {
            var delay_1 = Math.max(0, queue[0].time - scheduler.now());
            this.schedule(state, delay_1);
        }
        else {
            this.unsubscribe();
            source.active = false;
        }
    };
    DelaySubscriber.prototype._schedule = function (scheduler) {
        this.active = true;
        var destination = this.destination;
        destination.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
            source: this, destination: this.destination, scheduler: scheduler
        }));
    };
    DelaySubscriber.prototype.scheduleNotification = function (notification) {
        if (this.errored === true) {
            return;
        }
        var scheduler = this.scheduler;
        var message = new DelayMessage(scheduler.now() + this.delay, notification);
        this.queue.push(message);
        if (this.active === false) {
            this._schedule(scheduler);
        }
    };
    DelaySubscriber.prototype._next = function (value) {
        this.scheduleNotification(Notification.createNext(value));
    };
    DelaySubscriber.prototype._error = function (err) {
        this.errored = true;
        this.queue = [];
        this.destination.error(err);
        this.unsubscribe();
    };
    DelaySubscriber.prototype._complete = function () {
        this.scheduleNotification(Notification.createComplete());
        this.unsubscribe();
    };
    return DelaySubscriber;
}(Subscriber));
var DelayMessage = /*@__PURE__*/ (function () {
    function DelayMessage(time, notification) {
        this.time = time;
        this.notification = notification;
    }
    return DelayMessage;
}());
//# sourceMappingURL=delay.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/delayWhen.js
/** PURE_IMPORTS_START tslib,_Subscriber,_Observable,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */





function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
        return function (source) {
            return new SubscriptionDelayObservable(source, subscriptionDelay)
                .lift(new DelayWhenOperator(delayDurationSelector));
        };
    }
    return function (source) { return source.lift(new DelayWhenOperator(delayDurationSelector)); };
}
var DelayWhenOperator = /*@__PURE__*/ (function () {
    function DelayWhenOperator(delayDurationSelector) {
        this.delayDurationSelector = delayDurationSelector;
    }
    DelayWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
    };
    return DelayWhenOperator;
}());
var DelayWhenSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(DelayWhenSubscriber, _super);
    function DelayWhenSubscriber(destination, delayDurationSelector) {
        var _this = _super.call(this, destination) || this;
        _this.delayDurationSelector = delayDurationSelector;
        _this.completed = false;
        _this.delayNotifierSubscriptions = [];
        _this.index = 0;
        return _this;
    }
    DelayWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(outerValue);
        this.removeSubscription(innerSub);
        this.tryComplete();
    };
    DelayWhenSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    DelayWhenSubscriber.prototype.notifyComplete = function (innerSub) {
        var value = this.removeSubscription(innerSub);
        if (value) {
            this.destination.next(value);
        }
        this.tryComplete();
    };
    DelayWhenSubscriber.prototype._next = function (value) {
        var index = this.index++;
        try {
            var delayNotifier = this.delayDurationSelector(value, index);
            if (delayNotifier) {
                this.tryDelay(delayNotifier, value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    DelayWhenSubscriber.prototype._complete = function () {
        this.completed = true;
        this.tryComplete();
        this.unsubscribe();
    };
    DelayWhenSubscriber.prototype.removeSubscription = function (subscription) {
        subscription.unsubscribe();
        var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
        if (subscriptionIdx !== -1) {
            this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
        }
        return subscription.outerValue;
    };
    DelayWhenSubscriber.prototype.tryDelay = function (delayNotifier, value) {
        var notifierSubscription = subscribeToResult(this, delayNotifier, value);
        if (notifierSubscription && !notifierSubscription.closed) {
            var destination = this.destination;
            destination.add(notifierSubscription);
            this.delayNotifierSubscriptions.push(notifierSubscription);
        }
    };
    DelayWhenSubscriber.prototype.tryComplete = function () {
        if (this.completed && this.delayNotifierSubscriptions.length === 0) {
            this.destination.complete();
        }
    };
    return DelayWhenSubscriber;
}(OuterSubscriber));
var SubscriptionDelayObservable = /*@__PURE__*/ (function (_super) {
    __extends(SubscriptionDelayObservable, _super);
    function SubscriptionDelayObservable(source, subscriptionDelay) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subscriptionDelay = subscriptionDelay;
        return _this;
    }
    SubscriptionDelayObservable.prototype._subscribe = function (subscriber) {
        this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
    };
    return SubscriptionDelayObservable;
}(Observable));
var SubscriptionDelaySubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SubscriptionDelaySubscriber, _super);
    function SubscriptionDelaySubscriber(parent, source) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.source = source;
        _this.sourceSubscribed = false;
        return _this;
    }
    SubscriptionDelaySubscriber.prototype._next = function (unused) {
        this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype._error = function (err) {
        this.unsubscribe();
        this.parent.error(err);
    };
    SubscriptionDelaySubscriber.prototype._complete = function () {
        this.unsubscribe();
        this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype.subscribeToSource = function () {
        if (!this.sourceSubscribed) {
            this.sourceSubscribed = true;
            this.unsubscribe();
            this.source.subscribe(this.parent);
        }
    };
    return SubscriptionDelaySubscriber;
}(Subscriber));
//# sourceMappingURL=delayWhen.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/dematerialize.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function dematerialize() {
    return function dematerializeOperatorFunction(source) {
        return source.lift(new DeMaterializeOperator());
    };
}
var DeMaterializeOperator = /*@__PURE__*/ (function () {
    function DeMaterializeOperator() {
    }
    DeMaterializeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DeMaterializeSubscriber(subscriber));
    };
    return DeMaterializeOperator;
}());
var DeMaterializeSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(DeMaterializeSubscriber, _super);
    function DeMaterializeSubscriber(destination) {
        return _super.call(this, destination) || this;
    }
    DeMaterializeSubscriber.prototype._next = function (value) {
        value.observe(this.destination);
    };
    return DeMaterializeSubscriber;
}(Subscriber));
//# sourceMappingURL=dematerialize.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/distinct.js
/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */



function distinct(keySelector, flushes) {
    return function (source) { return source.lift(new DistinctOperator(keySelector, flushes)); };
}
var DistinctOperator = /*@__PURE__*/ (function () {
    function DistinctOperator(keySelector, flushes) {
        this.keySelector = keySelector;
        this.flushes = flushes;
    }
    DistinctOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DistinctSubscriber(subscriber, this.keySelector, this.flushes));
    };
    return DistinctOperator;
}());
var DistinctSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(DistinctSubscriber, _super);
    function DistinctSubscriber(destination, keySelector, flushes) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.values = new Set();
        if (flushes) {
            _this.add(subscribeToResult(_this, flushes));
        }
        return _this;
    }
    DistinctSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values.clear();
    };
    DistinctSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    DistinctSubscriber.prototype._next = function (value) {
        if (this.keySelector) {
            this._useKeySelector(value);
        }
        else {
            this._finalizeNext(value, value);
        }
    };
    DistinctSubscriber.prototype._useKeySelector = function (value) {
        var key;
        var destination = this.destination;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        this._finalizeNext(key, value);
    };
    DistinctSubscriber.prototype._finalizeNext = function (key, value) {
        var values = this.values;
        if (!values.has(key)) {
            values.add(key);
            this.destination.next(value);
        }
    };
    return DistinctSubscriber;
}(OuterSubscriber));

//# sourceMappingURL=distinct.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/distinctUntilChanged.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function distinctUntilChanged(compare, keySelector) {
    return function (source) { return source.lift(new DistinctUntilChangedOperator(compare, keySelector)); };
}
var DistinctUntilChangedOperator = /*@__PURE__*/ (function () {
    function DistinctUntilChangedOperator(compare, keySelector) {
        this.compare = compare;
        this.keySelector = keySelector;
    }
    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
    };
    return DistinctUntilChangedOperator;
}());
var DistinctUntilChangedSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(DistinctUntilChangedSubscriber, _super);
    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.hasKey = false;
        if (typeof compare === 'function') {
            _this.compare = compare;
        }
        return _this;
    }
    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
        return x === y;
    };
    DistinctUntilChangedSubscriber.prototype._next = function (value) {
        var key;
        try {
            var keySelector = this.keySelector;
            key = keySelector ? keySelector(value) : value;
        }
        catch (err) {
            return this.destination.error(err);
        }
        var result = false;
        if (this.hasKey) {
            try {
                var compare = this.compare;
                result = compare(this.key, key);
            }
            catch (err) {
                return this.destination.error(err);
            }
        }
        else {
            this.hasKey = true;
        }
        if (!result) {
            this.key = key;
            this.destination.next(value);
        }
    };
    return DistinctUntilChangedSubscriber;
}(Subscriber));
//# sourceMappingURL=distinctUntilChanged.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/distinctUntilKeyChanged.js
/** PURE_IMPORTS_START _distinctUntilChanged PURE_IMPORTS_END */

function distinctUntilKeyChanged(key, compare) {
    return distinctUntilChanged(function (x, y) { return compare ? compare(x[key], y[key]) : x[key] === y[key]; });
}
//# sourceMappingURL=distinctUntilKeyChanged.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function ArgumentOutOfRangeErrorImpl() {
    Error.call(this);
    this.message = 'argument out of range';
    this.name = 'ArgumentOutOfRangeError';
    return this;
}
ArgumentOutOfRangeErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
var ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/filter.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function filter(predicate, thisArg) {
    return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
    };
}
var FilterOperator = /*@__PURE__*/ (function () {
    function FilterOperator(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    FilterOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator;
}());
var FilterSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(FilterSubscriber, _super);
    function FilterSubscriber(destination, predicate, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.count = 0;
        return _this;
    }
    FilterSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.destination.next(value);
        }
    };
    return FilterSubscriber;
}(Subscriber));
//# sourceMappingURL=filter.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/EmptyError.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function EmptyErrorImpl() {
    Error.call(this);
    this.message = 'no elements in sequence';
    this.name = 'EmptyError';
    return this;
}
EmptyErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
var EmptyError = EmptyErrorImpl;
//# sourceMappingURL=EmptyError.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/throwIfEmpty.js
/** PURE_IMPORTS_START tslib,_util_EmptyError,_Subscriber PURE_IMPORTS_END */



function throwIfEmpty(errorFactory) {
    if (errorFactory === void 0) {
        errorFactory = defaultErrorFactory;
    }
    return function (source) {
        return source.lift(new ThrowIfEmptyOperator(errorFactory));
    };
}
var ThrowIfEmptyOperator = /*@__PURE__*/ (function () {
    function ThrowIfEmptyOperator(errorFactory) {
        this.errorFactory = errorFactory;
    }
    ThrowIfEmptyOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ThrowIfEmptySubscriber(subscriber, this.errorFactory));
    };
    return ThrowIfEmptyOperator;
}());
var ThrowIfEmptySubscriber = /*@__PURE__*/ (function (_super) {
    __extends(ThrowIfEmptySubscriber, _super);
    function ThrowIfEmptySubscriber(destination, errorFactory) {
        var _this = _super.call(this, destination) || this;
        _this.errorFactory = errorFactory;
        _this.hasValue = false;
        return _this;
    }
    ThrowIfEmptySubscriber.prototype._next = function (value) {
        this.hasValue = true;
        this.destination.next(value);
    };
    ThrowIfEmptySubscriber.prototype._complete = function () {
        if (!this.hasValue) {
            var err = void 0;
            try {
                err = this.errorFactory();
            }
            catch (e) {
                err = e;
            }
            this.destination.error(err);
        }
        else {
            return this.destination.complete();
        }
    };
    return ThrowIfEmptySubscriber;
}(Subscriber));
function defaultErrorFactory() {
    return new EmptyError();
}
//# sourceMappingURL=throwIfEmpty.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/take.js
/** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError,_observable_empty PURE_IMPORTS_END */




function take(count) {
    return function (source) {
        if (count === 0) {
            return empty_empty();
        }
        else {
            return source.lift(new TakeOperator(count));
        }
    };
}
var TakeOperator = /*@__PURE__*/ (function () {
    function TakeOperator(total) {
        this.total = total;
        if (this.total < 0) {
            throw new ArgumentOutOfRangeError;
        }
    }
    TakeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeSubscriber(subscriber, this.total));
    };
    return TakeOperator;
}());
var TakeSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(TakeSubscriber, _super);
    function TakeSubscriber(destination, total) {
        var _this = _super.call(this, destination) || this;
        _this.total = total;
        _this.count = 0;
        return _this;
    }
    TakeSubscriber.prototype._next = function (value) {
        var total = this.total;
        var count = ++this.count;
        if (count <= total) {
            this.destination.next(value);
            if (count === total) {
                this.destination.complete();
                this.unsubscribe();
            }
        }
    };
    return TakeSubscriber;
}(Subscriber));
//# sourceMappingURL=take.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/elementAt.js
/** PURE_IMPORTS_START _util_ArgumentOutOfRangeError,_filter,_throwIfEmpty,_defaultIfEmpty,_take PURE_IMPORTS_END */





function elementAt(index, defaultValue) {
    if (index < 0) {
        throw new ArgumentOutOfRangeError();
    }
    var hasDefaultValue = arguments.length >= 2;
    return function (source) {
        return source.pipe(filter(function (v, i) { return i === index; }), take(1), hasDefaultValue
            ? defaultIfEmpty(defaultValue)
            : throwIfEmpty(function () { return new ArgumentOutOfRangeError(); }));
    };
}
//# sourceMappingURL=elementAt.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/endWith.js
/** PURE_IMPORTS_START _observable_concat,_observable_of PURE_IMPORTS_END */


function endWith() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    return function (source) { return concat(source, of.apply(void 0, array)); };
}
//# sourceMappingURL=endWith.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/every.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function every(predicate, thisArg) {
    return function (source) { return source.lift(new EveryOperator(predicate, thisArg, source)); };
}
var EveryOperator = /*@__PURE__*/ (function () {
    function EveryOperator(predicate, thisArg, source) {
        this.predicate = predicate;
        this.thisArg = thisArg;
        this.source = source;
    }
    EveryOperator.prototype.call = function (observer, source) {
        return source.subscribe(new EverySubscriber(observer, this.predicate, this.thisArg, this.source));
    };
    return EveryOperator;
}());
var EverySubscriber = /*@__PURE__*/ (function (_super) {
    __extends(EverySubscriber, _super);
    function EverySubscriber(destination, predicate, thisArg, source) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.source = source;
        _this.index = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    EverySubscriber.prototype.notifyComplete = function (everyValueMatch) {
        this.destination.next(everyValueMatch);
        this.destination.complete();
    };
    EverySubscriber.prototype._next = function (value) {
        var result = false;
        try {
            result = this.predicate.call(this.thisArg, value, this.index++, this.source);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (!result) {
            this.notifyComplete(false);
        }
    };
    EverySubscriber.prototype._complete = function () {
        this.notifyComplete(true);
    };
    return EverySubscriber;
}(Subscriber));
//# sourceMappingURL=every.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/exhaust.js
/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */



function exhaust() {
    return function (source) { return source.lift(new SwitchFirstOperator()); };
}
var SwitchFirstOperator = /*@__PURE__*/ (function () {
    function SwitchFirstOperator() {
    }
    SwitchFirstOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchFirstSubscriber(subscriber));
    };
    return SwitchFirstOperator;
}());
var SwitchFirstSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SwitchFirstSubscriber, _super);
    function SwitchFirstSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.hasCompleted = false;
        _this.hasSubscription = false;
        return _this;
    }
    SwitchFirstSubscriber.prototype._next = function (value) {
        if (!this.hasSubscription) {
            this.hasSubscription = true;
            this.add(subscribeToResult(this, value));
        }
    };
    SwitchFirstSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (!this.hasSubscription) {
            this.destination.complete();
        }
    };
    SwitchFirstSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.hasSubscription = false;
        if (this.hasCompleted) {
            this.destination.complete();
        }
    };
    return SwitchFirstSubscriber;
}(OuterSubscriber));
//# sourceMappingURL=exhaust.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/exhaustMap.js
/** PURE_IMPORTS_START tslib,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult,_map,_observable_from PURE_IMPORTS_END */






function exhaustMap(project, resultSelector) {
    if (resultSelector) {
        return function (source) { return source.pipe(exhaustMap(function (a, i) { return from_from(project(a, i)).pipe(map(function (b, ii) { return resultSelector(a, b, i, ii); })); })); };
    }
    return function (source) {
        return source.lift(new ExhaustMapOperator(project));
    };
}
var ExhaustMapOperator = /*@__PURE__*/ (function () {
    function ExhaustMapOperator(project) {
        this.project = project;
    }
    ExhaustMapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ExhaustMapSubscriber(subscriber, this.project));
    };
    return ExhaustMapOperator;
}());
var ExhaustMapSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(ExhaustMapSubscriber, _super);
    function ExhaustMapSubscriber(destination, project) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.hasSubscription = false;
        _this.hasCompleted = false;
        _this.index = 0;
        return _this;
    }
    ExhaustMapSubscriber.prototype._next = function (value) {
        if (!this.hasSubscription) {
            this.tryNext(value);
        }
    };
    ExhaustMapSubscriber.prototype.tryNext = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.hasSubscription = true;
        this._innerSub(result, value, index);
    };
    ExhaustMapSubscriber.prototype._innerSub = function (result, value, index) {
        var innerSubscriber = new InnerSubscriber(this, undefined, undefined);
        var destination = this.destination;
        destination.add(innerSubscriber);
        subscribeToResult(this, result, value, index, innerSubscriber);
    };
    ExhaustMapSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (!this.hasSubscription) {
            this.destination.complete();
        }
        this.unsubscribe();
    };
    ExhaustMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    ExhaustMapSubscriber.prototype.notifyError = function (err) {
        this.destination.error(err);
    };
    ExhaustMapSubscriber.prototype.notifyComplete = function (innerSub) {
        var destination = this.destination;
        destination.remove(innerSub);
        this.hasSubscription = false;
        if (this.hasCompleted) {
            this.destination.complete();
        }
    };
    return ExhaustMapSubscriber;
}(OuterSubscriber));
//# sourceMappingURL=exhaustMap.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/expand.js
/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */



function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    if (scheduler === void 0) {
        scheduler = undefined;
    }
    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
    return function (source) { return source.lift(new ExpandOperator(project, concurrent, scheduler)); };
}
var ExpandOperator = /*@__PURE__*/ (function () {
    function ExpandOperator(project, concurrent, scheduler) {
        this.project = project;
        this.concurrent = concurrent;
        this.scheduler = scheduler;
    }
    ExpandOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler));
    };
    return ExpandOperator;
}());

var ExpandSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(ExpandSubscriber, _super);
    function ExpandSubscriber(destination, project, concurrent, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.concurrent = concurrent;
        _this.scheduler = scheduler;
        _this.index = 0;
        _this.active = 0;
        _this.hasCompleted = false;
        if (concurrent < Number.POSITIVE_INFINITY) {
            _this.buffer = [];
        }
        return _this;
    }
    ExpandSubscriber.dispatch = function (arg) {
        var subscriber = arg.subscriber, result = arg.result, value = arg.value, index = arg.index;
        subscriber.subscribeToProjection(result, value, index);
    };
    ExpandSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        if (destination.closed) {
            this._complete();
            return;
        }
        var index = this.index++;
        if (this.active < this.concurrent) {
            destination.next(value);
            try {
                var project = this.project;
                var result = project(value, index);
                if (!this.scheduler) {
                    this.subscribeToProjection(result, value, index);
                }
                else {
                    var state = { subscriber: this, result: result, value: value, index: index };
                    var destination_1 = this.destination;
                    destination_1.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
                }
            }
            catch (e) {
                destination.error(e);
            }
        }
        else {
            this.buffer.push(value);
        }
    };
    ExpandSubscriber.prototype.subscribeToProjection = function (result, value, index) {
        this.active++;
        var destination = this.destination;
        destination.add(subscribeToResult(this, result, value, index));
    };
    ExpandSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.hasCompleted && this.active === 0) {
            this.destination.complete();
        }
        this.unsubscribe();
    };
    ExpandSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this._next(innerValue);
    };
    ExpandSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        var destination = this.destination;
        destination.remove(innerSub);
        this.active--;
        if (buffer && buffer.length > 0) {
            this._next(buffer.shift());
        }
        if (this.hasCompleted && this.active === 0) {
            this.destination.complete();
        }
    };
    return ExpandSubscriber;
}(OuterSubscriber));

//# sourceMappingURL=expand.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/finalize.js
/** PURE_IMPORTS_START tslib,_Subscriber,_Subscription PURE_IMPORTS_END */



function finalize(callback) {
    return function (source) { return source.lift(new FinallyOperator(callback)); };
}
var FinallyOperator = /*@__PURE__*/ (function () {
    function FinallyOperator(callback) {
        this.callback = callback;
    }
    FinallyOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new FinallySubscriber(subscriber, this.callback));
    };
    return FinallyOperator;
}());
var FinallySubscriber = /*@__PURE__*/ (function (_super) {
    __extends(FinallySubscriber, _super);
    function FinallySubscriber(destination, callback) {
        var _this = _super.call(this, destination) || this;
        _this.add(new Subscription(callback));
        return _this;
    }
    return FinallySubscriber;
}(Subscriber));
//# sourceMappingURL=finalize.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/find.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function find(predicate, thisArg) {
    if (typeof predicate !== 'function') {
        throw new TypeError('predicate is not a function');
    }
    return function (source) { return source.lift(new FindValueOperator(predicate, source, false, thisArg)); };
}
var FindValueOperator = /*@__PURE__*/ (function () {
    function FindValueOperator(predicate, source, yieldIndex, thisArg) {
        this.predicate = predicate;
        this.source = source;
        this.yieldIndex = yieldIndex;
        this.thisArg = thisArg;
    }
    FindValueOperator.prototype.call = function (observer, source) {
        return source.subscribe(new FindValueSubscriber(observer, this.predicate, this.source, this.yieldIndex, this.thisArg));
    };
    return FindValueOperator;
}());

var FindValueSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(FindValueSubscriber, _super);
    function FindValueSubscriber(destination, predicate, source, yieldIndex, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.source = source;
        _this.yieldIndex = yieldIndex;
        _this.thisArg = thisArg;
        _this.index = 0;
        return _this;
    }
    FindValueSubscriber.prototype.notifyComplete = function (value) {
        var destination = this.destination;
        destination.next(value);
        destination.complete();
        this.unsubscribe();
    };
    FindValueSubscriber.prototype._next = function (value) {
        var _a = this, predicate = _a.predicate, thisArg = _a.thisArg;
        var index = this.index++;
        try {
            var result = predicate.call(thisArg || this, value, index, this.source);
            if (result) {
                this.notifyComplete(this.yieldIndex ? index : value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    FindValueSubscriber.prototype._complete = function () {
        this.notifyComplete(this.yieldIndex ? -1 : undefined);
    };
    return FindValueSubscriber;
}(Subscriber));

//# sourceMappingURL=find.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/findIndex.js
/** PURE_IMPORTS_START _operators_find PURE_IMPORTS_END */

function findIndex(predicate, thisArg) {
    return function (source) { return source.lift(new FindValueOperator(predicate, source, true, thisArg)); };
}
//# sourceMappingURL=findIndex.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/first.js
/** PURE_IMPORTS_START _util_EmptyError,_filter,_take,_defaultIfEmpty,_throwIfEmpty,_util_identity PURE_IMPORTS_END */






function first(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function (source) { return source.pipe(predicate ? filter(function (v, i) { return predicate(v, i, source); }) : identity, take(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(function () { return new EmptyError(); })); };
}
//# sourceMappingURL=first.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function ObjectUnsubscribedErrorImpl() {
    Error.call(this);
    this.message = 'object unsubscribed';
    this.name = 'ObjectUnsubscribedError';
    return this;
}
ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
//# sourceMappingURL=ObjectUnsubscribedError.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/SubjectSubscription.js
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */


var SubjectSubscription = /*@__PURE__*/ (function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription));

//# sourceMappingURL=SubjectSubscription.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/Subject.js
/** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */







var SubjectSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(Subscriber));

var Subject = /*@__PURE__*/ (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype[rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable));

var AnonymousSubject = /*@__PURE__*/ (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));

//# sourceMappingURL=Subject.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/groupBy.js
/** PURE_IMPORTS_START tslib,_Subscriber,_Subscription,_Observable,_Subject PURE_IMPORTS_END */





function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return function (source) {
        return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
    };
}
var GroupByOperator = /*@__PURE__*/ (function () {
    function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
    }
    GroupByOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
    };
    return GroupByOperator;
}());
var GroupBySubscriber = /*@__PURE__*/ (function (_super) {
    __extends(GroupBySubscriber, _super);
    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.elementSelector = elementSelector;
        _this.durationSelector = durationSelector;
        _this.subjectSelector = subjectSelector;
        _this.groups = null;
        _this.attemptedToUnsubscribe = false;
        _this.count = 0;
        return _this;
    }
    GroupBySubscriber.prototype._next = function (value) {
        var key;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            this.error(err);
            return;
        }
        this._group(value, key);
    };
    GroupBySubscriber.prototype._group = function (value, key) {
        var groups = this.groups;
        if (!groups) {
            groups = this.groups = new Map();
        }
        var group = groups.get(key);
        var element;
        if (this.elementSelector) {
            try {
                element = this.elementSelector(value);
            }
            catch (err) {
                this.error(err);
            }
        }
        else {
            element = value;
        }
        if (!group) {
            group = (this.subjectSelector ? this.subjectSelector() : new Subject());
            groups.set(key, group);
            var groupedObservable = new GroupedObservable(key, group, this);
            this.destination.next(groupedObservable);
            if (this.durationSelector) {
                var duration = void 0;
                try {
                    duration = this.durationSelector(new GroupedObservable(key, group));
                }
                catch (err) {
                    this.error(err);
                    return;
                }
                this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
            }
        }
        if (!group.closed) {
            group.next(element);
        }
    };
    GroupBySubscriber.prototype._error = function (err) {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.error(err);
            });
            groups.clear();
        }
        this.destination.error(err);
    };
    GroupBySubscriber.prototype._complete = function () {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.complete();
            });
            groups.clear();
        }
        this.destination.complete();
    };
    GroupBySubscriber.prototype.removeGroup = function (key) {
        this.groups.delete(key);
    };
    GroupBySubscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.attemptedToUnsubscribe = true;
            if (this.count === 0) {
                _super.prototype.unsubscribe.call(this);
            }
        }
    };
    return GroupBySubscriber;
}(Subscriber));
var GroupDurationSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(GroupDurationSubscriber, _super);
    function GroupDurationSubscriber(key, group, parent) {
        var _this = _super.call(this, group) || this;
        _this.key = key;
        _this.group = group;
        _this.parent = parent;
        return _this;
    }
    GroupDurationSubscriber.prototype._next = function (value) {
        this.complete();
    };
    GroupDurationSubscriber.prototype._unsubscribe = function () {
        var _a = this, parent = _a.parent, key = _a.key;
        this.key = this.parent = null;
        if (parent) {
            parent.removeGroup(key);
        }
    };
    return GroupDurationSubscriber;
}(Subscriber));
var GroupedObservable = /*@__PURE__*/ (function (_super) {
    __extends(GroupedObservable, _super);
    function GroupedObservable(key, groupSubject, refCountSubscription) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.groupSubject = groupSubject;
        _this.refCountSubscription = refCountSubscription;
        return _this;
    }
    GroupedObservable.prototype._subscribe = function (subscriber) {
        var subscription = new Subscription();
        var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
        if (refCountSubscription && !refCountSubscription.closed) {
            subscription.add(new InnerRefCountSubscription(refCountSubscription));
        }
        subscription.add(groupSubject.subscribe(subscriber));
        return subscription;
    };
    return GroupedObservable;
}(Observable));

var InnerRefCountSubscription = /*@__PURE__*/ (function (_super) {
    __extends(InnerRefCountSubscription, _super);
    function InnerRefCountSubscription(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        parent.count++;
        return _this;
    }
    InnerRefCountSubscription.prototype.unsubscribe = function () {
        var parent = this.parent;
        if (!parent.closed && !this.closed) {
            _super.prototype.unsubscribe.call(this);
            parent.count -= 1;
            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                parent.unsubscribe();
            }
        }
    };
    return InnerRefCountSubscription;
}(Subscription));
//# sourceMappingURL=groupBy.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/ignoreElements.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function ignoreElements() {
    return function ignoreElementsOperatorFunction(source) {
        return source.lift(new IgnoreElementsOperator());
    };
}
var IgnoreElementsOperator = /*@__PURE__*/ (function () {
    function IgnoreElementsOperator() {
    }
    IgnoreElementsOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new IgnoreElementsSubscriber(subscriber));
    };
    return IgnoreElementsOperator;
}());
var IgnoreElementsSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(IgnoreElementsSubscriber, _super);
    function IgnoreElementsSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IgnoreElementsSubscriber.prototype._next = function (unused) {
    };
    return IgnoreElementsSubscriber;
}(Subscriber));
//# sourceMappingURL=ignoreElements.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/isEmpty.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function isEmpty() {
    return function (source) { return source.lift(new IsEmptyOperator()); };
}
var IsEmptyOperator = /*@__PURE__*/ (function () {
    function IsEmptyOperator() {
    }
    IsEmptyOperator.prototype.call = function (observer, source) {
        return source.subscribe(new IsEmptySubscriber(observer));
    };
    return IsEmptyOperator;
}());
var IsEmptySubscriber = /*@__PURE__*/ (function (_super) {
    __extends(IsEmptySubscriber, _super);
    function IsEmptySubscriber(destination) {
        return _super.call(this, destination) || this;
    }
    IsEmptySubscriber.prototype.notifyComplete = function (isEmpty) {
        var destination = this.destination;
        destination.next(isEmpty);
        destination.complete();
    };
    IsEmptySubscriber.prototype._next = function (value) {
        this.notifyComplete(false);
    };
    IsEmptySubscriber.prototype._complete = function () {
        this.notifyComplete(true);
    };
    return IsEmptySubscriber;
}(Subscriber));
//# sourceMappingURL=isEmpty.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/takeLast.js
/** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError,_observable_empty PURE_IMPORTS_END */




function takeLast(count) {
    return function takeLastOperatorFunction(source) {
        if (count === 0) {
            return empty_empty();
        }
        else {
            return source.lift(new TakeLastOperator(count));
        }
    };
}
var TakeLastOperator = /*@__PURE__*/ (function () {
    function TakeLastOperator(total) {
        this.total = total;
        if (this.total < 0) {
            throw new ArgumentOutOfRangeError;
        }
    }
    TakeLastOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeLastSubscriber(subscriber, this.total));
    };
    return TakeLastOperator;
}());
var TakeLastSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(TakeLastSubscriber, _super);
    function TakeLastSubscriber(destination, total) {
        var _this = _super.call(this, destination) || this;
        _this.total = total;
        _this.ring = new Array();
        _this.count = 0;
        return _this;
    }
    TakeLastSubscriber.prototype._next = function (value) {
        var ring = this.ring;
        var total = this.total;
        var count = this.count++;
        if (ring.length < total) {
            ring.push(value);
        }
        else {
            var index = count % total;
            ring[index] = value;
        }
    };
    TakeLastSubscriber.prototype._complete = function () {
        var destination = this.destination;
        var count = this.count;
        if (count > 0) {
            var total = this.count >= this.total ? this.total : this.count;
            var ring = this.ring;
            for (var i = 0; i < total; i++) {
                var idx = (count++) % total;
                destination.next(ring[idx]);
            }
        }
        destination.complete();
    };
    return TakeLastSubscriber;
}(Subscriber));
//# sourceMappingURL=takeLast.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/last.js
/** PURE_IMPORTS_START _util_EmptyError,_filter,_takeLast,_throwIfEmpty,_defaultIfEmpty,_util_identity PURE_IMPORTS_END */






function last(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function (source) { return source.pipe(predicate ? filter(function (v, i) { return predicate(v, i, source); }) : identity, takeLast(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(function () { return new EmptyError(); })); };
}
//# sourceMappingURL=last.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/mapTo.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function mapTo(value) {
    return function (source) { return source.lift(new MapToOperator(value)); };
}
var MapToOperator = /*@__PURE__*/ (function () {
    function MapToOperator(value) {
        this.value = value;
    }
    MapToOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapToSubscriber(subscriber, this.value));
    };
    return MapToOperator;
}());
var MapToSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(MapToSubscriber, _super);
    function MapToSubscriber(destination, value) {
        var _this = _super.call(this, destination) || this;
        _this.value = value;
        return _this;
    }
    MapToSubscriber.prototype._next = function (x) {
        this.destination.next(this.value);
    };
    return MapToSubscriber;
}(Subscriber));
//# sourceMappingURL=mapTo.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/materialize.js
/** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */



function materialize() {
    return function materializeOperatorFunction(source) {
        return source.lift(new MaterializeOperator());
    };
}
var MaterializeOperator = /*@__PURE__*/ (function () {
    function MaterializeOperator() {
    }
    MaterializeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MaterializeSubscriber(subscriber));
    };
    return MaterializeOperator;
}());
var MaterializeSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(MaterializeSubscriber, _super);
    function MaterializeSubscriber(destination) {
        return _super.call(this, destination) || this;
    }
    MaterializeSubscriber.prototype._next = function (value) {
        this.destination.next(Notification.createNext(value));
    };
    MaterializeSubscriber.prototype._error = function (err) {
        var destination = this.destination;
        destination.next(Notification.createError(err));
        destination.complete();
    };
    MaterializeSubscriber.prototype._complete = function () {
        var destination = this.destination;
        destination.next(Notification.createComplete());
        destination.complete();
    };
    return MaterializeSubscriber;
}(Subscriber));
//# sourceMappingURL=materialize.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/scan.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function scan(accumulator, seed) {
    var hasSeed = false;
    if (arguments.length >= 2) {
        hasSeed = true;
    }
    return function scanOperatorFunction(source) {
        return source.lift(new ScanOperator(accumulator, seed, hasSeed));
    };
}
var ScanOperator = /*@__PURE__*/ (function () {
    function ScanOperator(accumulator, seed, hasSeed) {
        if (hasSeed === void 0) {
            hasSeed = false;
        }
        this.accumulator = accumulator;
        this.seed = seed;
        this.hasSeed = hasSeed;
    }
    ScanOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
    };
    return ScanOperator;
}());
var ScanSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(ScanSubscriber, _super);
    function ScanSubscriber(destination, accumulator, _seed, hasSeed) {
        var _this = _super.call(this, destination) || this;
        _this.accumulator = accumulator;
        _this._seed = _seed;
        _this.hasSeed = hasSeed;
        _this.index = 0;
        return _this;
    }
    Object.defineProperty(ScanSubscriber.prototype, "seed", {
        get: function () {
            return this._seed;
        },
        set: function (value) {
            this.hasSeed = true;
            this._seed = value;
        },
        enumerable: true,
        configurable: true
    });
    ScanSubscriber.prototype._next = function (value) {
        if (!this.hasSeed) {
            this.seed = value;
            this.destination.next(value);
        }
        else {
            return this._tryNext(value);
        }
    };
    ScanSubscriber.prototype._tryNext = function (value) {
        var index = this.index++;
        var result;
        try {
            result = this.accumulator(this.seed, value, index);
        }
        catch (err) {
            this.destination.error(err);
        }
        this.seed = result;
        this.destination.next(result);
    };
    return ScanSubscriber;
}(Subscriber));
//# sourceMappingURL=scan.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/reduce.js
/** PURE_IMPORTS_START _scan,_takeLast,_defaultIfEmpty,_util_pipe PURE_IMPORTS_END */




function reduce(accumulator, seed) {
    if (arguments.length >= 2) {
        return function reduceOperatorFunctionWithSeed(source) {
            return pipe(scan(accumulator, seed), takeLast(1), defaultIfEmpty(seed))(source);
        };
    }
    return function reduceOperatorFunction(source) {
        return pipe(scan(function (acc, value, index) { return accumulator(acc, value, index + 1); }), takeLast(1))(source);
    };
}
//# sourceMappingURL=reduce.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/max.js
/** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */

function max(comparer) {
    var max = (typeof comparer === 'function')
        ? function (x, y) { return comparer(x, y) > 0 ? x : y; }
        : function (x, y) { return x > y ? x : y; };
    return reduce(max);
}
//# sourceMappingURL=max.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/merge.js
/** PURE_IMPORTS_START _Observable,_util_isScheduler,_operators_mergeAll,_fromArray PURE_IMPORTS_END */




function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if (isScheduler_isScheduler(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
        }
    }
    else if (typeof last === 'number') {
        concurrent = observables.pop();
    }
    if (scheduler === null && observables.length === 1 && observables[0] instanceof Observable) {
        return observables[0];
    }
    return mergeAll(concurrent)(fromArray_fromArray(observables, scheduler));
}
//# sourceMappingURL=merge.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/merge.js
/** PURE_IMPORTS_START _observable_merge PURE_IMPORTS_END */

function merge_merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return function (source) { return source.lift.call(merge.apply(void 0, [source].concat(observables))); };
}
//# sourceMappingURL=merge.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/mergeMapTo.js
/** PURE_IMPORTS_START _mergeMap PURE_IMPORTS_END */

function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    if (typeof resultSelector === 'function') {
        return mergeMap(function () { return innerObservable; }, resultSelector, concurrent);
    }
    if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return mergeMap(function () { return innerObservable; }, concurrent);
}
//# sourceMappingURL=mergeMapTo.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/mergeScan.js
/** PURE_IMPORTS_START tslib,_util_subscribeToResult,_OuterSubscriber,_InnerSubscriber PURE_IMPORTS_END */




function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    return function (source) { return source.lift(new MergeScanOperator(accumulator, seed, concurrent)); };
}
var MergeScanOperator = /*@__PURE__*/ (function () {
    function MergeScanOperator(accumulator, seed, concurrent) {
        this.accumulator = accumulator;
        this.seed = seed;
        this.concurrent = concurrent;
    }
    MergeScanOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MergeScanSubscriber(subscriber, this.accumulator, this.seed, this.concurrent));
    };
    return MergeScanOperator;
}());

var MergeScanSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(MergeScanSubscriber, _super);
    function MergeScanSubscriber(destination, accumulator, acc, concurrent) {
        var _this = _super.call(this, destination) || this;
        _this.accumulator = accumulator;
        _this.acc = acc;
        _this.concurrent = concurrent;
        _this.hasValue = false;
        _this.hasCompleted = false;
        _this.buffer = [];
        _this.active = 0;
        _this.index = 0;
        return _this;
    }
    MergeScanSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            var index = this.index++;
            var destination = this.destination;
            var ish = void 0;
            try {
                var accumulator = this.accumulator;
                ish = accumulator(this.acc, value, index);
            }
            catch (e) {
                return destination.error(e);
            }
            this.active++;
            this._innerSub(ish, value, index);
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeScanSubscriber.prototype._innerSub = function (ish, value, index) {
        var innerSubscriber = new InnerSubscriber(this, undefined, undefined);
        var destination = this.destination;
        destination.add(innerSubscriber);
        subscribeToResult(this, ish, value, index, innerSubscriber);
    };
    MergeScanSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            if (this.hasValue === false) {
                this.destination.next(this.acc);
            }
            this.destination.complete();
        }
        this.unsubscribe();
    };
    MergeScanSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var destination = this.destination;
        this.acc = innerValue;
        this.hasValue = true;
        destination.next(innerValue);
    };
    MergeScanSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        var destination = this.destination;
        destination.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            if (this.hasValue === false) {
                this.destination.next(this.acc);
            }
            this.destination.complete();
        }
    };
    return MergeScanSubscriber;
}(OuterSubscriber));

//# sourceMappingURL=mergeScan.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/min.js
/** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */

function min(comparer) {
    var min = (typeof comparer === 'function')
        ? function (x, y) { return comparer(x, y) < 0 ? x : y; }
        : function (x, y) { return x < y ? x : y; };
    return reduce(min);
}
//# sourceMappingURL=min.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/refCount.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function refCount() {
    return function refCountOperatorFunction(source) {
        return source.lift(new RefCountOperator(source));
    };
}
var RefCountOperator = /*@__PURE__*/ (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var RefCountSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(Subscriber));
//# sourceMappingURL=refCount.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js
/** PURE_IMPORTS_START tslib,_Subject,_Observable,_Subscriber,_Subscription,_operators_refCount PURE_IMPORTS_END */






var ConnectableObservable = /*@__PURE__*/ (function (_super) {
    __extends(ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._refCount = 0;
        _this._isComplete = false;
        return _this;
    }
    ConnectableObservable.prototype._subscribe = function (subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function () {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    };
    ConnectableObservable.prototype.connect = function () {
        var connection = this._connection;
        if (!connection) {
            this._isComplete = false;
            connection = this._connection = new Subscription();
            connection.add(this.source
                .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
            if (connection.closed) {
                this._connection = null;
                connection = Subscription.EMPTY;
            }
        }
        return connection;
    };
    ConnectableObservable.prototype.refCount = function () {
        return refCount()(this);
    };
    return ConnectableObservable;
}(Observable));

var connectableProto = ConnectableObservable.prototype;
var connectableObservableDescriptor = {
    operator: { value: null },
    _refCount: { value: 0, writable: true },
    _subject: { value: null, writable: true },
    _connection: { value: null, writable: true },
    _subscribe: { value: connectableProto._subscribe },
    _isComplete: { value: connectableProto._isComplete, writable: true },
    getSubject: { value: connectableProto.getSubject },
    connect: { value: connectableProto.connect },
    refCount: { value: connectableProto.refCount }
};
var ConnectableSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(ConnectableSubscriber, _super);
    function ConnectableSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    ConnectableSubscriber.prototype._error = function (err) {
        this._unsubscribe();
        _super.prototype._error.call(this, err);
    };
    ConnectableSubscriber.prototype._complete = function () {
        this.connectable._isComplete = true;
        this._unsubscribe();
        _super.prototype._complete.call(this);
    };
    ConnectableSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (connectable) {
            this.connectable = null;
            var connection = connectable._connection;
            connectable._refCount = 0;
            connectable._subject = null;
            connectable._connection = null;
            if (connection) {
                connection.unsubscribe();
            }
        }
    };
    return ConnectableSubscriber;
}(SubjectSubscriber));
var ConnectableObservable_RefCountOperator = /*@__PURE__*/ ((/* unused pure expression or super */ null && (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new ConnectableObservable_RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}())));
var ConnectableObservable_RefCountSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(Subscriber));
//# sourceMappingURL=ConnectableObservable.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/multicast.js
/** PURE_IMPORTS_START _observable_ConnectableObservable PURE_IMPORTS_END */

function multicast(subjectOrSubjectFactory, selector) {
    return function multicastOperatorFunction(source) {
        var subjectFactory;
        if (typeof subjectOrSubjectFactory === 'function') {
            subjectFactory = subjectOrSubjectFactory;
        }
        else {
            subjectFactory = function subjectFactory() {
                return subjectOrSubjectFactory;
            };
        }
        if (typeof selector === 'function') {
            return source.lift(new MulticastOperator(subjectFactory, selector));
        }
        var connectable = Object.create(source, connectableObservableDescriptor);
        connectable.source = source;
        connectable.subjectFactory = subjectFactory;
        return connectable;
    };
}
var MulticastOperator = /*@__PURE__*/ (function () {
    function MulticastOperator(subjectFactory, selector) {
        this.subjectFactory = subjectFactory;
        this.selector = selector;
    }
    MulticastOperator.prototype.call = function (subscriber, source) {
        var selector = this.selector;
        var subject = this.subjectFactory();
        var subscription = selector(subject).subscribe(subscriber);
        subscription.add(source.subscribe(subject));
        return subscription;
    };
    return MulticastOperator;
}());

//# sourceMappingURL=multicast.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/observeOn.js
/** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */



function observeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return function observeOnOperatorFunction(source) {
        return source.lift(new ObserveOnOperator(scheduler, delay));
    };
}
var ObserveOnOperator = /*@__PURE__*/ (function () {
    function ObserveOnOperator(scheduler, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    };
    return ObserveOnOperator;
}());

var ObserveOnSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(ObserveOnSubscriber, _super);
    function ObserveOnSubscriber(destination, scheduler, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        var _this = _super.call(this, destination) || this;
        _this.scheduler = scheduler;
        _this.delay = delay;
        return _this;
    }
    ObserveOnSubscriber.dispatch = function (arg) {
        var notification = arg.notification, destination = arg.destination;
        notification.observe(destination);
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
        var destination = this.destination;
        destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    };
    ObserveOnSubscriber.prototype._next = function (value) {
        this.scheduleMessage(Notification.createNext(value));
    };
    ObserveOnSubscriber.prototype._error = function (err) {
        this.scheduleMessage(Notification.createError(err));
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype._complete = function () {
        this.scheduleMessage(Notification.createComplete());
        this.unsubscribe();
    };
    return ObserveOnSubscriber;
}(Subscriber));

var ObserveOnMessage = /*@__PURE__*/ (function () {
    function ObserveOnMessage(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
    return ObserveOnMessage;
}());

//# sourceMappingURL=observeOn.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/onErrorResumeNext.js
/** PURE_IMPORTS_START tslib,_observable_from,_util_isArray,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult PURE_IMPORTS_END */






function onErrorResumeNext() {
    var nextSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nextSources[_i] = arguments[_i];
    }
    if (nextSources.length === 1 && isArray_isArray(nextSources[0])) {
        nextSources = nextSources[0];
    }
    return function (source) { return source.lift(new OnErrorResumeNextOperator(nextSources)); };
}
function onErrorResumeNextStatic() {
    var nextSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nextSources[_i] = arguments[_i];
    }
    var source = null;
    if (nextSources.length === 1 && isArray(nextSources[0])) {
        nextSources = nextSources[0];
    }
    source = nextSources.shift();
    return from(source, null).lift(new OnErrorResumeNextOperator(nextSources));
}
var OnErrorResumeNextOperator = /*@__PURE__*/ (function () {
    function OnErrorResumeNextOperator(nextSources) {
        this.nextSources = nextSources;
    }
    OnErrorResumeNextOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new OnErrorResumeNextSubscriber(subscriber, this.nextSources));
    };
    return OnErrorResumeNextOperator;
}());
var OnErrorResumeNextSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(OnErrorResumeNextSubscriber, _super);
    function OnErrorResumeNextSubscriber(destination, nextSources) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.nextSources = nextSources;
        return _this;
    }
    OnErrorResumeNextSubscriber.prototype.notifyError = function (error, innerSub) {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype.notifyComplete = function (innerSub) {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype._error = function (err) {
        this.subscribeToNextSource();
        this.unsubscribe();
    };
    OnErrorResumeNextSubscriber.prototype._complete = function () {
        this.subscribeToNextSource();
        this.unsubscribe();
    };
    OnErrorResumeNextSubscriber.prototype.subscribeToNextSource = function () {
        var next = this.nextSources.shift();
        if (!!next) {
            var innerSubscriber = new InnerSubscriber(this, undefined, undefined);
            var destination = this.destination;
            destination.add(innerSubscriber);
            subscribeToResult(this, next, undefined, undefined, innerSubscriber);
        }
        else {
            this.destination.complete();
        }
    };
    return OnErrorResumeNextSubscriber;
}(OuterSubscriber));
//# sourceMappingURL=onErrorResumeNext.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/pairwise.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function pairwise() {
    return function (source) { return source.lift(new PairwiseOperator()); };
}
var PairwiseOperator = /*@__PURE__*/ (function () {
    function PairwiseOperator() {
    }
    PairwiseOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new PairwiseSubscriber(subscriber));
    };
    return PairwiseOperator;
}());
var PairwiseSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(PairwiseSubscriber, _super);
    function PairwiseSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.hasPrev = false;
        return _this;
    }
    PairwiseSubscriber.prototype._next = function (value) {
        var pair;
        if (this.hasPrev) {
            pair = [this.prev, value];
        }
        else {
            this.hasPrev = true;
        }
        this.prev = value;
        if (pair) {
            this.destination.next(pair);
        }
    };
    return PairwiseSubscriber;
}(Subscriber));
//# sourceMappingURL=pairwise.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/not.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function not(pred, thisArg) {
    function notPred() {
        return !(notPred.pred.apply(notPred.thisArg, arguments));
    }
    notPred.pred = pred;
    notPred.thisArg = thisArg;
    return notPred;
}
//# sourceMappingURL=not.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/partition.js
/** PURE_IMPORTS_START _util_not,_filter PURE_IMPORTS_END */


function partition(predicate, thisArg) {
    return function (source) {
        return [
            filter(predicate, thisArg)(source),
            filter(not(predicate, thisArg))(source)
        ];
    };
}
//# sourceMappingURL=partition.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/pluck.js
/** PURE_IMPORTS_START _map PURE_IMPORTS_END */

function pluck() {
    var properties = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        properties[_i] = arguments[_i];
    }
    var length = properties.length;
    if (length === 0) {
        throw new Error('list of properties cannot be empty.');
    }
    return function (source) { return map(plucker(properties, length))(source); };
}
function plucker(props, length) {
    var mapper = function (x) {
        var currentProp = x;
        for (var i = 0; i < length; i++) {
            var p = currentProp[props[i]];
            if (typeof p !== 'undefined') {
                currentProp = p;
            }
            else {
                return undefined;
            }
        }
        return currentProp;
    };
    return mapper;
}
//# sourceMappingURL=pluck.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/publish.js
/** PURE_IMPORTS_START _Subject,_multicast PURE_IMPORTS_END */


function publish(selector) {
    return selector ?
        multicast(function () { return new Subject(); }, selector) :
        multicast(new Subject());
}
//# sourceMappingURL=publish.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/BehaviorSubject.js
/** PURE_IMPORTS_START tslib,_Subject,_util_ObjectUnsubscribedError PURE_IMPORTS_END */



var BehaviorSubject = /*@__PURE__*/ (function (_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: true,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        if (subscription && !subscription.closed) {
            subscriber.next(this._value);
        }
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        if (this.hasError) {
            throw this.thrownError;
        }
        else if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else {
            return this._value;
        }
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}(Subject));

//# sourceMappingURL=BehaviorSubject.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/publishBehavior.js
/** PURE_IMPORTS_START _BehaviorSubject,_multicast PURE_IMPORTS_END */


function publishBehavior(value) {
    return function (source) { return multicast(new BehaviorSubject(value))(source); };
}
//# sourceMappingURL=publishBehavior.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/AsyncSubject.js
/** PURE_IMPORTS_START tslib,_Subject,_Subscription PURE_IMPORTS_END */



var AsyncSubject = /*@__PURE__*/ (function (_super) {
    __extends(AsyncSubject, _super);
    function AsyncSubject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = null;
        _this.hasNext = false;
        _this.hasCompleted = false;
        return _this;
    }
    AsyncSubject.prototype._subscribe = function (subscriber) {
        if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription.EMPTY;
        }
        else if (this.hasCompleted && this.hasNext) {
            subscriber.next(this.value);
            subscriber.complete();
            return Subscription.EMPTY;
        }
        return _super.prototype._subscribe.call(this, subscriber);
    };
    AsyncSubject.prototype.next = function (value) {
        if (!this.hasCompleted) {
            this.value = value;
            this.hasNext = true;
        }
    };
    AsyncSubject.prototype.error = function (error) {
        if (!this.hasCompleted) {
            _super.prototype.error.call(this, error);
        }
    };
    AsyncSubject.prototype.complete = function () {
        this.hasCompleted = true;
        if (this.hasNext) {
            _super.prototype.next.call(this, this.value);
        }
        _super.prototype.complete.call(this);
    };
    return AsyncSubject;
}(Subject));

//# sourceMappingURL=AsyncSubject.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/publishLast.js
/** PURE_IMPORTS_START _AsyncSubject,_multicast PURE_IMPORTS_END */


function publishLast() {
    return function (source) { return multicast(new AsyncSubject())(source); };
}
//# sourceMappingURL=publishLast.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js
/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */


var QueueAction = /*@__PURE__*/ (function (_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        return scheduler.flush(this);
    };
    return QueueAction;
}(AsyncAction));

//# sourceMappingURL=QueueAction.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */


var QueueScheduler = /*@__PURE__*/ (function (_super) {
    __extends(QueueScheduler, _super);
    function QueueScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler;
}(AsyncScheduler));

//# sourceMappingURL=QueueScheduler.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/scheduler/queue.js
/** PURE_IMPORTS_START _QueueAction,_QueueScheduler PURE_IMPORTS_END */


var queue = /*@__PURE__*/ new QueueScheduler(QueueAction);
//# sourceMappingURL=queue.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/ReplaySubject.js
/** PURE_IMPORTS_START tslib,_Subject,_scheduler_queue,_Subscription,_operators_observeOn,_util_ObjectUnsubscribedError,_SubjectSubscription PURE_IMPORTS_END */







var ReplaySubject = /*@__PURE__*/ (function (_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) {
            bufferSize = Number.POSITIVE_INFINITY;
        }
        if (windowTime === void 0) {
            windowTime = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this) || this;
        _this.scheduler = scheduler;
        _this._events = [];
        _this._infiniteTimeWindow = false;
        _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        _this._windowTime = windowTime < 1 ? 1 : windowTime;
        if (windowTime === Number.POSITIVE_INFINITY) {
            _this._infiniteTimeWindow = true;
            _this.next = _this.nextInfiniteTimeWindow;
        }
        else {
            _this.next = _this.nextTimeWindow;
        }
        return _this;
    }
    ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {
        var _events = this._events;
        _events.push(value);
        if (_events.length > this._bufferSize) {
            _events.shift();
        }
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype.nextTimeWindow = function (value) {
        this._events.push(new ReplayEvent(this._getNow(), value));
        this._trimBufferThenGetEvents();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        var _infiniteTimeWindow = this._infiniteTimeWindow;
        var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        var len = _events.length;
        var subscription;
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else if (this.isStopped || this.hasError) {
            subscription = Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            subscription = new SubjectSubscription(this, subscriber);
        }
        if (scheduler) {
            subscriber.add(subscriber = new ObserveOnSubscriber(subscriber, scheduler));
        }
        if (_infiniteTimeWindow) {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i]);
            }
        }
        else {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i].value);
            }
        }
        if (this.hasError) {
            subscriber.error(this.thrownError);
        }
        else if (this.isStopped) {
            subscriber.complete();
        }
        return subscription;
    };
    ReplaySubject.prototype._getNow = function () {
        return (this.scheduler || queue).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    };
    return ReplaySubject;
}(Subject));

var ReplayEvent = /*@__PURE__*/ (function () {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}());
//# sourceMappingURL=ReplaySubject.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/publishReplay.js
/** PURE_IMPORTS_START _ReplaySubject,_multicast PURE_IMPORTS_END */


function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
    if (selectorOrScheduler && typeof selectorOrScheduler !== 'function') {
        scheduler = selectorOrScheduler;
    }
    var selector = typeof selectorOrScheduler === 'function' ? selectorOrScheduler : undefined;
    var subject = new ReplaySubject(bufferSize, windowTime, scheduler);
    return function (source) { return multicast(function () { return subject; }, selector)(source); };
}
//# sourceMappingURL=publishReplay.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/race.js
/** PURE_IMPORTS_START tslib,_util_isArray,_fromArray,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */





function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    if (observables.length === 1) {
        if (isArray_isArray(observables[0])) {
            observables = observables[0];
        }
        else {
            return observables[0];
        }
    }
    return fromArray_fromArray(observables, undefined).lift(new RaceOperator());
}
var RaceOperator = /*@__PURE__*/ (function () {
    function RaceOperator() {
    }
    RaceOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RaceSubscriber(subscriber));
    };
    return RaceOperator;
}());

var RaceSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(RaceSubscriber, _super);
    function RaceSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.hasFirst = false;
        _this.observables = [];
        _this.subscriptions = [];
        return _this;
    }
    RaceSubscriber.prototype._next = function (observable) {
        this.observables.push(observable);
    };
    RaceSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            for (var i = 0; i < len && !this.hasFirst; i++) {
                var observable = observables[i];
                var subscription = subscribeToResult(this, observable, observable, i);
                if (this.subscriptions) {
                    this.subscriptions.push(subscription);
                }
                this.add(subscription);
            }
            this.observables = null;
        }
    };
    RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (!this.hasFirst) {
            this.hasFirst = true;
            for (var i = 0; i < this.subscriptions.length; i++) {
                if (i !== outerIndex) {
                    var subscription = this.subscriptions[i];
                    subscription.unsubscribe();
                    this.remove(subscription);
                }
            }
            this.subscriptions = null;
        }
        this.destination.next(innerValue);
    };
    return RaceSubscriber;
}(OuterSubscriber));

//# sourceMappingURL=race.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/race.js
/** PURE_IMPORTS_START _util_isArray,_observable_race PURE_IMPORTS_END */


function race_race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return function raceOperatorFunction(source) {
        if (observables.length === 1 && isArray_isArray(observables[0])) {
            observables = observables[0];
        }
        return source.lift.call(race.apply(void 0, [source].concat(observables)));
    };
}
//# sourceMappingURL=race.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/repeat.js
/** PURE_IMPORTS_START tslib,_Subscriber,_observable_empty PURE_IMPORTS_END */



function repeat(count) {
    if (count === void 0) {
        count = -1;
    }
    return function (source) {
        if (count === 0) {
            return empty_empty();
        }
        else if (count < 0) {
            return source.lift(new RepeatOperator(-1, source));
        }
        else {
            return source.lift(new RepeatOperator(count - 1, source));
        }
    };
}
var RepeatOperator = /*@__PURE__*/ (function () {
    function RepeatOperator(count, source) {
        this.count = count;
        this.source = source;
    }
    RepeatOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
    };
    return RepeatOperator;
}());
var RepeatSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(RepeatSubscriber, _super);
    function RepeatSubscriber(destination, count, source) {
        var _this = _super.call(this, destination) || this;
        _this.count = count;
        _this.source = source;
        return _this;
    }
    RepeatSubscriber.prototype.complete = function () {
        if (!this.isStopped) {
            var _a = this, source = _a.source, count = _a.count;
            if (count === 0) {
                return _super.prototype.complete.call(this);
            }
            else if (count > -1) {
                this.count = count - 1;
            }
            source.subscribe(this._unsubscribeAndRecycle());
        }
    };
    return RepeatSubscriber;
}(Subscriber));
//# sourceMappingURL=repeat.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/repeatWhen.js
/** PURE_IMPORTS_START tslib,_Subject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */




function repeatWhen(notifier) {
    return function (source) { return source.lift(new RepeatWhenOperator(notifier)); };
}
var RepeatWhenOperator = /*@__PURE__*/ (function () {
    function RepeatWhenOperator(notifier) {
        this.notifier = notifier;
    }
    RepeatWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RepeatWhenSubscriber(subscriber, this.notifier, source));
    };
    return RepeatWhenOperator;
}());
var RepeatWhenSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(RepeatWhenSubscriber, _super);
    function RepeatWhenSubscriber(destination, notifier, source) {
        var _this = _super.call(this, destination) || this;
        _this.notifier = notifier;
        _this.source = source;
        _this.sourceIsBeingSubscribedTo = true;
        return _this;
    }
    RepeatWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.sourceIsBeingSubscribedTo = true;
        this.source.subscribe(this);
    };
    RepeatWhenSubscriber.prototype.notifyComplete = function (innerSub) {
        if (this.sourceIsBeingSubscribedTo === false) {
            return _super.prototype.complete.call(this);
        }
    };
    RepeatWhenSubscriber.prototype.complete = function () {
        this.sourceIsBeingSubscribedTo = false;
        if (!this.isStopped) {
            if (!this.retries) {
                this.subscribeToRetries();
            }
            if (!this.retriesSubscription || this.retriesSubscription.closed) {
                return _super.prototype.complete.call(this);
            }
            this._unsubscribeAndRecycle();
            this.notifications.next();
        }
    };
    RepeatWhenSubscriber.prototype._unsubscribe = function () {
        var _a = this, notifications = _a.notifications, retriesSubscription = _a.retriesSubscription;
        if (notifications) {
            notifications.unsubscribe();
            this.notifications = null;
        }
        if (retriesSubscription) {
            retriesSubscription.unsubscribe();
            this.retriesSubscription = null;
        }
        this.retries = null;
    };
    RepeatWhenSubscriber.prototype._unsubscribeAndRecycle = function () {
        var _unsubscribe = this._unsubscribe;
        this._unsubscribe = null;
        _super.prototype._unsubscribeAndRecycle.call(this);
        this._unsubscribe = _unsubscribe;
        return this;
    };
    RepeatWhenSubscriber.prototype.subscribeToRetries = function () {
        this.notifications = new Subject();
        var retries;
        try {
            var notifier = this.notifier;
            retries = notifier(this.notifications);
        }
        catch (e) {
            return _super.prototype.complete.call(this);
        }
        this.retries = retries;
        this.retriesSubscription = subscribeToResult(this, retries);
    };
    return RepeatWhenSubscriber;
}(OuterSubscriber));
//# sourceMappingURL=repeatWhen.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/retry.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function retry(count) {
    if (count === void 0) {
        count = -1;
    }
    return function (source) { return source.lift(new RetryOperator(count, source)); };
}
var RetryOperator = /*@__PURE__*/ (function () {
    function RetryOperator(count, source) {
        this.count = count;
        this.source = source;
    }
    RetryOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RetrySubscriber(subscriber, this.count, this.source));
    };
    return RetryOperator;
}());
var RetrySubscriber = /*@__PURE__*/ (function (_super) {
    __extends(RetrySubscriber, _super);
    function RetrySubscriber(destination, count, source) {
        var _this = _super.call(this, destination) || this;
        _this.count = count;
        _this.source = source;
        return _this;
    }
    RetrySubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _a = this, source = _a.source, count = _a.count;
            if (count === 0) {
                return _super.prototype.error.call(this, err);
            }
            else if (count > -1) {
                this.count = count - 1;
            }
            source.subscribe(this._unsubscribeAndRecycle());
        }
    };
    return RetrySubscriber;
}(Subscriber));
//# sourceMappingURL=retry.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/retryWhen.js
/** PURE_IMPORTS_START tslib,_Subject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */




function retryWhen(notifier) {
    return function (source) { return source.lift(new RetryWhenOperator(notifier, source)); };
}
var RetryWhenOperator = /*@__PURE__*/ (function () {
    function RetryWhenOperator(notifier, source) {
        this.notifier = notifier;
        this.source = source;
    }
    RetryWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
    };
    return RetryWhenOperator;
}());
var RetryWhenSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(RetryWhenSubscriber, _super);
    function RetryWhenSubscriber(destination, notifier, source) {
        var _this = _super.call(this, destination) || this;
        _this.notifier = notifier;
        _this.source = source;
        return _this;
    }
    RetryWhenSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var errors = this.errors;
            var retries = this.retries;
            var retriesSubscription = this.retriesSubscription;
            if (!retries) {
                errors = new Subject();
                try {
                    var notifier = this.notifier;
                    retries = notifier(errors);
                }
                catch (e) {
                    return _super.prototype.error.call(this, e);
                }
                retriesSubscription = subscribeToResult(this, retries);
            }
            else {
                this.errors = null;
                this.retriesSubscription = null;
            }
            this._unsubscribeAndRecycle();
            this.errors = errors;
            this.retries = retries;
            this.retriesSubscription = retriesSubscription;
            errors.next(err);
        }
    };
    RetryWhenSubscriber.prototype._unsubscribe = function () {
        var _a = this, errors = _a.errors, retriesSubscription = _a.retriesSubscription;
        if (errors) {
            errors.unsubscribe();
            this.errors = null;
        }
        if (retriesSubscription) {
            retriesSubscription.unsubscribe();
            this.retriesSubscription = null;
        }
        this.retries = null;
    };
    RetryWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _unsubscribe = this._unsubscribe;
        this._unsubscribe = null;
        this._unsubscribeAndRecycle();
        this._unsubscribe = _unsubscribe;
        this.source.subscribe(this);
    };
    return RetryWhenSubscriber;
}(OuterSubscriber));
//# sourceMappingURL=retryWhen.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/sample.js
/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */



function sample(notifier) {
    return function (source) { return source.lift(new SampleOperator(notifier)); };
}
var SampleOperator = /*@__PURE__*/ (function () {
    function SampleOperator(notifier) {
        this.notifier = notifier;
    }
    SampleOperator.prototype.call = function (subscriber, source) {
        var sampleSubscriber = new SampleSubscriber(subscriber);
        var subscription = source.subscribe(sampleSubscriber);
        subscription.add(subscribeToResult(sampleSubscriber, this.notifier));
        return subscription;
    };
    return SampleOperator;
}());
var SampleSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SampleSubscriber, _super);
    function SampleSubscriber() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasValue = false;
        return _this;
    }
    SampleSubscriber.prototype._next = function (value) {
        this.value = value;
        this.hasValue = true;
    };
    SampleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.emitValue();
    };
    SampleSubscriber.prototype.notifyComplete = function () {
        this.emitValue();
    };
    SampleSubscriber.prototype.emitValue = function () {
        if (this.hasValue) {
            this.hasValue = false;
            this.destination.next(this.value);
        }
    };
    return SampleSubscriber;
}(OuterSubscriber));
//# sourceMappingURL=sample.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/sampleTime.js
/** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async PURE_IMPORTS_END */



function sampleTime(period, scheduler) {
    if (scheduler === void 0) {
        scheduler = async_async;
    }
    return function (source) { return source.lift(new SampleTimeOperator(period, scheduler)); };
}
var SampleTimeOperator = /*@__PURE__*/ (function () {
    function SampleTimeOperator(period, scheduler) {
        this.period = period;
        this.scheduler = scheduler;
    }
    SampleTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SampleTimeSubscriber(subscriber, this.period, this.scheduler));
    };
    return SampleTimeOperator;
}());
var SampleTimeSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SampleTimeSubscriber, _super);
    function SampleTimeSubscriber(destination, period, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.period = period;
        _this.scheduler = scheduler;
        _this.hasValue = false;
        _this.add(scheduler.schedule(dispatchNotification, period, { subscriber: _this, period: period }));
        return _this;
    }
    SampleTimeSubscriber.prototype._next = function (value) {
        this.lastValue = value;
        this.hasValue = true;
    };
    SampleTimeSubscriber.prototype.notifyNext = function () {
        if (this.hasValue) {
            this.hasValue = false;
            this.destination.next(this.lastValue);
        }
    };
    return SampleTimeSubscriber;
}(Subscriber));
function dispatchNotification(state) {
    var subscriber = state.subscriber, period = state.period;
    subscriber.notifyNext();
    this.schedule(state, period);
}
//# sourceMappingURL=sampleTime.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/sequenceEqual.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function sequenceEqual(compareTo, comparator) {
    return function (source) { return source.lift(new SequenceEqualOperator(compareTo, comparator)); };
}
var SequenceEqualOperator = /*@__PURE__*/ (function () {
    function SequenceEqualOperator(compareTo, comparator) {
        this.compareTo = compareTo;
        this.comparator = comparator;
    }
    SequenceEqualOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SequenceEqualSubscriber(subscriber, this.compareTo, this.comparator));
    };
    return SequenceEqualOperator;
}());

var SequenceEqualSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SequenceEqualSubscriber, _super);
    function SequenceEqualSubscriber(destination, compareTo, comparator) {
        var _this = _super.call(this, destination) || this;
        _this.compareTo = compareTo;
        _this.comparator = comparator;
        _this._a = [];
        _this._b = [];
        _this._oneComplete = false;
        _this.destination.add(compareTo.subscribe(new SequenceEqualCompareToSubscriber(destination, _this)));
        return _this;
    }
    SequenceEqualSubscriber.prototype._next = function (value) {
        if (this._oneComplete && this._b.length === 0) {
            this.emit(false);
        }
        else {
            this._a.push(value);
            this.checkValues();
        }
    };
    SequenceEqualSubscriber.prototype._complete = function () {
        if (this._oneComplete) {
            this.emit(this._a.length === 0 && this._b.length === 0);
        }
        else {
            this._oneComplete = true;
        }
        this.unsubscribe();
    };
    SequenceEqualSubscriber.prototype.checkValues = function () {
        var _c = this, _a = _c._a, _b = _c._b, comparator = _c.comparator;
        while (_a.length > 0 && _b.length > 0) {
            var a = _a.shift();
            var b = _b.shift();
            var areEqual = false;
            try {
                areEqual = comparator ? comparator(a, b) : a === b;
            }
            catch (e) {
                this.destination.error(e);
            }
            if (!areEqual) {
                this.emit(false);
            }
        }
    };
    SequenceEqualSubscriber.prototype.emit = function (value) {
        var destination = this.destination;
        destination.next(value);
        destination.complete();
    };
    SequenceEqualSubscriber.prototype.nextB = function (value) {
        if (this._oneComplete && this._a.length === 0) {
            this.emit(false);
        }
        else {
            this._b.push(value);
            this.checkValues();
        }
    };
    SequenceEqualSubscriber.prototype.completeB = function () {
        if (this._oneComplete) {
            this.emit(this._a.length === 0 && this._b.length === 0);
        }
        else {
            this._oneComplete = true;
        }
    };
    return SequenceEqualSubscriber;
}(Subscriber));

var SequenceEqualCompareToSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SequenceEqualCompareToSubscriber, _super);
    function SequenceEqualCompareToSubscriber(destination, parent) {
        var _this = _super.call(this, destination) || this;
        _this.parent = parent;
        return _this;
    }
    SequenceEqualCompareToSubscriber.prototype._next = function (value) {
        this.parent.nextB(value);
    };
    SequenceEqualCompareToSubscriber.prototype._error = function (err) {
        this.parent.error(err);
        this.unsubscribe();
    };
    SequenceEqualCompareToSubscriber.prototype._complete = function () {
        this.parent.completeB();
        this.unsubscribe();
    };
    return SequenceEqualCompareToSubscriber;
}(Subscriber));
//# sourceMappingURL=sequenceEqual.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/share.js
/** PURE_IMPORTS_START _multicast,_refCount,_Subject PURE_IMPORTS_END */



function shareSubjectFactory() {
    return new Subject();
}
function share() {
    return function (source) { return refCount()(multicast(shareSubjectFactory)(source)); };
}
//# sourceMappingURL=share.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/shareReplay.js
/** PURE_IMPORTS_START _ReplaySubject PURE_IMPORTS_END */

function shareReplay(configOrBufferSize, windowTime, scheduler) {
    var config;
    if (configOrBufferSize && typeof configOrBufferSize === 'object') {
        config = configOrBufferSize;
    }
    else {
        config = {
            bufferSize: configOrBufferSize,
            windowTime: windowTime,
            refCount: false,
            scheduler: scheduler
        };
    }
    return function (source) { return source.lift(shareReplayOperator(config)); };
}
function shareReplayOperator(_a) {
    var _b = _a.bufferSize, bufferSize = _b === void 0 ? Number.POSITIVE_INFINITY : _b, _c = _a.windowTime, windowTime = _c === void 0 ? Number.POSITIVE_INFINITY : _c, useRefCount = _a.refCount, scheduler = _a.scheduler;
    var subject;
    var refCount = 0;
    var subscription;
    var hasError = false;
    var isComplete = false;
    return function shareReplayOperation(source) {
        refCount++;
        if (!subject || hasError) {
            hasError = false;
            subject = new ReplaySubject(bufferSize, windowTime, scheduler);
            subscription = source.subscribe({
                next: function (value) { subject.next(value); },
                error: function (err) {
                    hasError = true;
                    subject.error(err);
                },
                complete: function () {
                    isComplete = true;
                    subject.complete();
                },
            });
        }
        var innerSub = subject.subscribe(this);
        this.add(function () {
            refCount--;
            innerSub.unsubscribe();
            if (subscription && !isComplete && useRefCount && refCount === 0) {
                subscription.unsubscribe();
                subscription = undefined;
                subject = undefined;
            }
        });
    };
}
//# sourceMappingURL=shareReplay.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/single.js
/** PURE_IMPORTS_START tslib,_Subscriber,_util_EmptyError PURE_IMPORTS_END */



function single(predicate) {
    return function (source) { return source.lift(new SingleOperator(predicate, source)); };
}
var SingleOperator = /*@__PURE__*/ (function () {
    function SingleOperator(predicate, source) {
        this.predicate = predicate;
        this.source = source;
    }
    SingleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
    };
    return SingleOperator;
}());
var SingleSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SingleSubscriber, _super);
    function SingleSubscriber(destination, predicate, source) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.source = source;
        _this.seenValue = false;
        _this.index = 0;
        return _this;
    }
    SingleSubscriber.prototype.applySingleValue = function (value) {
        if (this.seenValue) {
            this.destination.error('Sequence contains more than one element');
        }
        else {
            this.seenValue = true;
            this.singleValue = value;
        }
    };
    SingleSubscriber.prototype._next = function (value) {
        var index = this.index++;
        if (this.predicate) {
            this.tryNext(value, index);
        }
        else {
            this.applySingleValue(value);
        }
    };
    SingleSubscriber.prototype.tryNext = function (value, index) {
        try {
            if (this.predicate(value, index, this.source)) {
                this.applySingleValue(value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    SingleSubscriber.prototype._complete = function () {
        var destination = this.destination;
        if (this.index > 0) {
            destination.next(this.seenValue ? this.singleValue : undefined);
            destination.complete();
        }
        else {
            destination.error(new EmptyError);
        }
    };
    return SingleSubscriber;
}(Subscriber));
//# sourceMappingURL=single.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/skip.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function skip(count) {
    return function (source) { return source.lift(new SkipOperator(count)); };
}
var SkipOperator = /*@__PURE__*/ (function () {
    function SkipOperator(total) {
        this.total = total;
    }
    SkipOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SkipSubscriber(subscriber, this.total));
    };
    return SkipOperator;
}());
var SkipSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SkipSubscriber, _super);
    function SkipSubscriber(destination, total) {
        var _this = _super.call(this, destination) || this;
        _this.total = total;
        _this.count = 0;
        return _this;
    }
    SkipSubscriber.prototype._next = function (x) {
        if (++this.count > this.total) {
            this.destination.next(x);
        }
    };
    return SkipSubscriber;
}(Subscriber));
//# sourceMappingURL=skip.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/skipLast.js
/** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError PURE_IMPORTS_END */



function skipLast(count) {
    return function (source) { return source.lift(new SkipLastOperator(count)); };
}
var SkipLastOperator = /*@__PURE__*/ (function () {
    function SkipLastOperator(_skipCount) {
        this._skipCount = _skipCount;
        if (this._skipCount < 0) {
            throw new ArgumentOutOfRangeError;
        }
    }
    SkipLastOperator.prototype.call = function (subscriber, source) {
        if (this._skipCount === 0) {
            return source.subscribe(new Subscriber(subscriber));
        }
        else {
            return source.subscribe(new SkipLastSubscriber(subscriber, this._skipCount));
        }
    };
    return SkipLastOperator;
}());
var SkipLastSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SkipLastSubscriber, _super);
    function SkipLastSubscriber(destination, _skipCount) {
        var _this = _super.call(this, destination) || this;
        _this._skipCount = _skipCount;
        _this._count = 0;
        _this._ring = new Array(_skipCount);
        return _this;
    }
    SkipLastSubscriber.prototype._next = function (value) {
        var skipCount = this._skipCount;
        var count = this._count++;
        if (count < skipCount) {
            this._ring[count] = value;
        }
        else {
            var currentIndex = count % skipCount;
            var ring = this._ring;
            var oldValue = ring[currentIndex];
            ring[currentIndex] = value;
            this.destination.next(oldValue);
        }
    };
    return SkipLastSubscriber;
}(Subscriber));
//# sourceMappingURL=skipLast.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/skipUntil.js
/** PURE_IMPORTS_START tslib,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult PURE_IMPORTS_END */




function skipUntil(notifier) {
    return function (source) { return source.lift(new SkipUntilOperator(notifier)); };
}
var SkipUntilOperator = /*@__PURE__*/ (function () {
    function SkipUntilOperator(notifier) {
        this.notifier = notifier;
    }
    SkipUntilOperator.prototype.call = function (destination, source) {
        return source.subscribe(new SkipUntilSubscriber(destination, this.notifier));
    };
    return SkipUntilOperator;
}());
var SkipUntilSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SkipUntilSubscriber, _super);
    function SkipUntilSubscriber(destination, notifier) {
        var _this = _super.call(this, destination) || this;
        _this.hasValue = false;
        var innerSubscriber = new InnerSubscriber(_this, undefined, undefined);
        _this.add(innerSubscriber);
        _this.innerSubscription = innerSubscriber;
        subscribeToResult(_this, notifier, undefined, undefined, innerSubscriber);
        return _this;
    }
    SkipUntilSubscriber.prototype._next = function (value) {
        if (this.hasValue) {
            _super.prototype._next.call(this, value);
        }
    };
    SkipUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.hasValue = true;
        if (this.innerSubscription) {
            this.innerSubscription.unsubscribe();
        }
    };
    SkipUntilSubscriber.prototype.notifyComplete = function () {
    };
    return SkipUntilSubscriber;
}(OuterSubscriber));
//# sourceMappingURL=skipUntil.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/skipWhile.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function skipWhile(predicate) {
    return function (source) { return source.lift(new SkipWhileOperator(predicate)); };
}
var SkipWhileOperator = /*@__PURE__*/ (function () {
    function SkipWhileOperator(predicate) {
        this.predicate = predicate;
    }
    SkipWhileOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
    };
    return SkipWhileOperator;
}());
var SkipWhileSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SkipWhileSubscriber, _super);
    function SkipWhileSubscriber(destination, predicate) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.skipping = true;
        _this.index = 0;
        return _this;
    }
    SkipWhileSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        if (this.skipping) {
            this.tryCallPredicate(value);
        }
        if (!this.skipping) {
            destination.next(value);
        }
    };
    SkipWhileSubscriber.prototype.tryCallPredicate = function (value) {
        try {
            var result = this.predicate(value, this.index++);
            this.skipping = Boolean(result);
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    return SkipWhileSubscriber;
}(Subscriber));
//# sourceMappingURL=skipWhile.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/startWith.js
/** PURE_IMPORTS_START _observable_concat,_util_isScheduler PURE_IMPORTS_END */


function startWith() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    var scheduler = array[array.length - 1];
    if (isScheduler_isScheduler(scheduler)) {
        array.pop();
        return function (source) { return concat(array, source, scheduler); };
    }
    else {
        return function (source) { return concat(array, source); };
    }
}
//# sourceMappingURL=startWith.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/Immediate.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var nextHandle = 1;
var tasksByHandle = {};
function runIfPresent(handle) {
    var cb = tasksByHandle[handle];
    if (cb) {
        cb();
    }
}
var Immediate = {
    setImmediate: function (cb) {
        var handle = nextHandle++;
        tasksByHandle[handle] = cb;
        Promise.resolve().then(function () { return runIfPresent(handle); });
        return handle;
    },
    clearImmediate: function (handle) {
        delete tasksByHandle[handle];
    },
};
//# sourceMappingURL=Immediate.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js
/** PURE_IMPORTS_START tslib,_util_Immediate,_AsyncAction PURE_IMPORTS_END */



var AsapAction = /*@__PURE__*/ (function (_super) {
    __extends(AsapAction, _super);
    function AsapAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
    };
    AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            Immediate.clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AsapAction;
}(AsyncAction));

//# sourceMappingURL=AsapAction.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */


var AsapScheduler = /*@__PURE__*/ (function (_super) {
    __extends(AsapScheduler, _super);
    function AsapScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(AsyncScheduler));

//# sourceMappingURL=AsapScheduler.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/scheduler/asap.js
/** PURE_IMPORTS_START _AsapAction,_AsapScheduler PURE_IMPORTS_END */


var asap = /*@__PURE__*/ new AsapScheduler(AsapAction);
//# sourceMappingURL=asap.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/SubscribeOnObservable.js
/** PURE_IMPORTS_START tslib,_Observable,_scheduler_asap,_util_isNumeric PURE_IMPORTS_END */




var SubscribeOnObservable = /*@__PURE__*/ (function (_super) {
    __extends(SubscribeOnObservable, _super);
    function SubscribeOnObservable(source, delayTime, scheduler) {
        if (delayTime === void 0) {
            delayTime = 0;
        }
        if (scheduler === void 0) {
            scheduler = asap;
        }
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.delayTime = delayTime;
        _this.scheduler = scheduler;
        if (!isNumeric(delayTime) || delayTime < 0) {
            _this.delayTime = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            _this.scheduler = asap;
        }
        return _this;
    }
    SubscribeOnObservable.create = function (source, delay, scheduler) {
        if (delay === void 0) {
            delay = 0;
        }
        if (scheduler === void 0) {
            scheduler = asap;
        }
        return new SubscribeOnObservable(source, delay, scheduler);
    };
    SubscribeOnObservable.dispatch = function (arg) {
        var source = arg.source, subscriber = arg.subscriber;
        return this.add(source.subscribe(subscriber));
    };
    SubscribeOnObservable.prototype._subscribe = function (subscriber) {
        var delay = this.delayTime;
        var source = this.source;
        var scheduler = this.scheduler;
        return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
            source: source, subscriber: subscriber
        });
    };
    return SubscribeOnObservable;
}(Observable));

//# sourceMappingURL=SubscribeOnObservable.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/subscribeOn.js
/** PURE_IMPORTS_START _observable_SubscribeOnObservable PURE_IMPORTS_END */

function subscribeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return function subscribeOnOperatorFunction(source) {
        return source.lift(new SubscribeOnOperator(scheduler, delay));
    };
}
var SubscribeOnOperator = /*@__PURE__*/ (function () {
    function SubscribeOnOperator(scheduler, delay) {
        this.scheduler = scheduler;
        this.delay = delay;
    }
    SubscribeOnOperator.prototype.call = function (subscriber, source) {
        return new SubscribeOnObservable(source, this.delay, this.scheduler).subscribe(subscriber);
    };
    return SubscribeOnOperator;
}());
//# sourceMappingURL=subscribeOn.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/switchMap.js
/** PURE_IMPORTS_START tslib,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult,_map,_observable_from PURE_IMPORTS_END */






function switchMap(project, resultSelector) {
    if (typeof resultSelector === 'function') {
        return function (source) { return source.pipe(switchMap(function (a, i) { return from_from(project(a, i)).pipe(map(function (b, ii) { return resultSelector(a, b, i, ii); })); })); };
    }
    return function (source) { return source.lift(new SwitchMapOperator(project)); };
}
var SwitchMapOperator = /*@__PURE__*/ (function () {
    function SwitchMapOperator(project) {
        this.project = project;
    }
    SwitchMapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchMapSubscriber(subscriber, this.project));
    };
    return SwitchMapOperator;
}());
var SwitchMapSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SwitchMapSubscriber, _super);
    function SwitchMapSubscriber(destination, project) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.index = 0;
        return _this;
    }
    SwitchMapSubscriber.prototype._next = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (error) {
            this.destination.error(error);
            return;
        }
        this._innerSub(result, value, index);
    };
    SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
        var innerSubscription = this.innerSubscription;
        if (innerSubscription) {
            innerSubscription.unsubscribe();
        }
        var innerSubscriber = new InnerSubscriber(this, undefined, undefined);
        var destination = this.destination;
        destination.add(innerSubscriber);
        this.innerSubscription = subscribeToResult(this, result, value, index, innerSubscriber);
    };
    SwitchMapSubscriber.prototype._complete = function () {
        var innerSubscription = this.innerSubscription;
        if (!innerSubscription || innerSubscription.closed) {
            _super.prototype._complete.call(this);
        }
        this.unsubscribe();
    };
    SwitchMapSubscriber.prototype._unsubscribe = function () {
        this.innerSubscription = null;
    };
    SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
        var destination = this.destination;
        destination.remove(innerSub);
        this.innerSubscription = null;
        if (this.isStopped) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    return SwitchMapSubscriber;
}(OuterSubscriber));
//# sourceMappingURL=switchMap.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/switchAll.js
/** PURE_IMPORTS_START _switchMap,_util_identity PURE_IMPORTS_END */


function switchAll() {
    return switchMap(identity);
}
//# sourceMappingURL=switchAll.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/switchMapTo.js
/** PURE_IMPORTS_START _switchMap PURE_IMPORTS_END */

function switchMapTo(innerObservable, resultSelector) {
    return resultSelector ? switchMap(function () { return innerObservable; }, resultSelector) : switchMap(function () { return innerObservable; });
}
//# sourceMappingURL=switchMapTo.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/takeUntil.js
/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */



function takeUntil(notifier) {
    return function (source) { return source.lift(new TakeUntilOperator(notifier)); };
}
var TakeUntilOperator = /*@__PURE__*/ (function () {
    function TakeUntilOperator(notifier) {
        this.notifier = notifier;
    }
    TakeUntilOperator.prototype.call = function (subscriber, source) {
        var takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
        var notifierSubscription = subscribeToResult(takeUntilSubscriber, this.notifier);
        if (notifierSubscription && !takeUntilSubscriber.seenValue) {
            takeUntilSubscriber.add(notifierSubscription);
            return source.subscribe(takeUntilSubscriber);
        }
        return takeUntilSubscriber;
    };
    return TakeUntilOperator;
}());
var TakeUntilSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(TakeUntilSubscriber, _super);
    function TakeUntilSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.seenValue = false;
        return _this;
    }
    TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.seenValue = true;
        this.complete();
    };
    TakeUntilSubscriber.prototype.notifyComplete = function () {
    };
    return TakeUntilSubscriber;
}(OuterSubscriber));
//# sourceMappingURL=takeUntil.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/takeWhile.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function takeWhile(predicate, inclusive) {
    if (inclusive === void 0) {
        inclusive = false;
    }
    return function (source) {
        return source.lift(new TakeWhileOperator(predicate, inclusive));
    };
}
var TakeWhileOperator = /*@__PURE__*/ (function () {
    function TakeWhileOperator(predicate, inclusive) {
        this.predicate = predicate;
        this.inclusive = inclusive;
    }
    TakeWhileOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeWhileSubscriber(subscriber, this.predicate, this.inclusive));
    };
    return TakeWhileOperator;
}());
var TakeWhileSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(TakeWhileSubscriber, _super);
    function TakeWhileSubscriber(destination, predicate, inclusive) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.inclusive = inclusive;
        _this.index = 0;
        return _this;
    }
    TakeWhileSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        var result;
        try {
            result = this.predicate(value, this.index++);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        this.nextOrComplete(value, result);
    };
    TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
        var destination = this.destination;
        if (Boolean(predicateResult)) {
            destination.next(value);
        }
        else {
            if (this.inclusive) {
                destination.next(value);
            }
            destination.complete();
        }
    };
    return TakeWhileSubscriber;
}(Subscriber));
//# sourceMappingURL=takeWhile.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/tap.js
/** PURE_IMPORTS_START tslib,_Subscriber,_util_noop,_util_isFunction PURE_IMPORTS_END */




function tap(nextOrObserver, error, complete) {
    return function tapOperatorFunction(source) {
        return source.lift(new DoOperator(nextOrObserver, error, complete));
    };
}
var DoOperator = /*@__PURE__*/ (function () {
    function DoOperator(nextOrObserver, error, complete) {
        this.nextOrObserver = nextOrObserver;
        this.error = error;
        this.complete = complete;
    }
    DoOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TapSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
    };
    return DoOperator;
}());
var TapSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(TapSubscriber, _super);
    function TapSubscriber(destination, observerOrNext, error, complete) {
        var _this = _super.call(this, destination) || this;
        _this._tapNext = noop;
        _this._tapError = noop;
        _this._tapComplete = noop;
        _this._tapError = error || noop;
        _this._tapComplete = complete || noop;
        if (isFunction(observerOrNext)) {
            _this._context = _this;
            _this._tapNext = observerOrNext;
        }
        else if (observerOrNext) {
            _this._context = observerOrNext;
            _this._tapNext = observerOrNext.next || noop;
            _this._tapError = observerOrNext.error || noop;
            _this._tapComplete = observerOrNext.complete || noop;
        }
        return _this;
    }
    TapSubscriber.prototype._next = function (value) {
        try {
            this._tapNext.call(this._context, value);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(value);
    };
    TapSubscriber.prototype._error = function (err) {
        try {
            this._tapError.call(this._context, err);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.error(err);
    };
    TapSubscriber.prototype._complete = function () {
        try {
            this._tapComplete.call(this._context);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        return this.destination.complete();
    };
    return TapSubscriber;
}(Subscriber));
//# sourceMappingURL=tap.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/throttle.js
/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */



var defaultThrottleConfig = {
    leading: true,
    trailing: false
};
function throttle(durationSelector, config) {
    if (config === void 0) {
        config = defaultThrottleConfig;
    }
    return function (source) { return source.lift(new ThrottleOperator(durationSelector, config.leading, config.trailing)); };
}
var ThrottleOperator = /*@__PURE__*/ (function () {
    function ThrottleOperator(durationSelector, leading, trailing) {
        this.durationSelector = durationSelector;
        this.leading = leading;
        this.trailing = trailing;
    }
    ThrottleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ThrottleSubscriber(subscriber, this.durationSelector, this.leading, this.trailing));
    };
    return ThrottleOperator;
}());
var ThrottleSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(ThrottleSubscriber, _super);
    function ThrottleSubscriber(destination, durationSelector, _leading, _trailing) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.durationSelector = durationSelector;
        _this._leading = _leading;
        _this._trailing = _trailing;
        _this._hasValue = false;
        return _this;
    }
    ThrottleSubscriber.prototype._next = function (value) {
        this._hasValue = true;
        this._sendValue = value;
        if (!this._throttled) {
            if (this._leading) {
                this.send();
            }
            else {
                this.throttle(value);
            }
        }
    };
    ThrottleSubscriber.prototype.send = function () {
        var _a = this, _hasValue = _a._hasValue, _sendValue = _a._sendValue;
        if (_hasValue) {
            this.destination.next(_sendValue);
            this.throttle(_sendValue);
        }
        this._hasValue = false;
        this._sendValue = null;
    };
    ThrottleSubscriber.prototype.throttle = function (value) {
        var duration = this.tryDurationSelector(value);
        if (!!duration) {
            this.add(this._throttled = subscribeToResult(this, duration));
        }
    };
    ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
        try {
            return this.durationSelector(value);
        }
        catch (err) {
            this.destination.error(err);
            return null;
        }
    };
    ThrottleSubscriber.prototype.throttlingDone = function () {
        var _a = this, _throttled = _a._throttled, _trailing = _a._trailing;
        if (_throttled) {
            _throttled.unsubscribe();
        }
        this._throttled = null;
        if (_trailing) {
            this.send();
        }
    };
    ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.throttlingDone();
    };
    ThrottleSubscriber.prototype.notifyComplete = function () {
        this.throttlingDone();
    };
    return ThrottleSubscriber;
}(OuterSubscriber));
//# sourceMappingURL=throttle.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/throttleTime.js
/** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async,_throttle PURE_IMPORTS_END */




function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) {
        scheduler = async_async;
    }
    if (config === void 0) {
        config = defaultThrottleConfig;
    }
    return function (source) { return source.lift(new ThrottleTimeOperator(duration, scheduler, config.leading, config.trailing)); };
}
var ThrottleTimeOperator = /*@__PURE__*/ (function () {
    function ThrottleTimeOperator(duration, scheduler, leading, trailing) {
        this.duration = duration;
        this.scheduler = scheduler;
        this.leading = leading;
        this.trailing = trailing;
    }
    ThrottleTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
    };
    return ThrottleTimeOperator;
}());
var ThrottleTimeSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(ThrottleTimeSubscriber, _super);
    function ThrottleTimeSubscriber(destination, duration, scheduler, leading, trailing) {
        var _this = _super.call(this, destination) || this;
        _this.duration = duration;
        _this.scheduler = scheduler;
        _this.leading = leading;
        _this.trailing = trailing;
        _this._hasTrailingValue = false;
        _this._trailingValue = null;
        return _this;
    }
    ThrottleTimeSubscriber.prototype._next = function (value) {
        if (this.throttled) {
            if (this.trailing) {
                this._trailingValue = value;
                this._hasTrailingValue = true;
            }
        }
        else {
            this.add(this.throttled = this.scheduler.schedule(throttleTime_dispatchNext, this.duration, { subscriber: this }));
            if (this.leading) {
                this.destination.next(value);
            }
            else if (this.trailing) {
                this._trailingValue = value;
                this._hasTrailingValue = true;
            }
        }
    };
    ThrottleTimeSubscriber.prototype._complete = function () {
        if (this._hasTrailingValue) {
            this.destination.next(this._trailingValue);
            this.destination.complete();
        }
        else {
            this.destination.complete();
        }
    };
    ThrottleTimeSubscriber.prototype.clearThrottle = function () {
        var throttled = this.throttled;
        if (throttled) {
            if (this.trailing && this._hasTrailingValue) {
                this.destination.next(this._trailingValue);
                this._trailingValue = null;
                this._hasTrailingValue = false;
            }
            throttled.unsubscribe();
            this.remove(throttled);
            this.throttled = null;
        }
    };
    return ThrottleTimeSubscriber;
}(Subscriber));
function throttleTime_dispatchNext(arg) {
    var subscriber = arg.subscriber;
    subscriber.clearThrottle();
}
//# sourceMappingURL=throttleTime.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/defer.js
/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */



function defer(observableFactory) {
    return new Observable(function (subscriber) {
        var input;
        try {
            input = observableFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = input ? from_from(input) : empty_empty();
        return source.subscribe(subscriber);
    });
}
//# sourceMappingURL=defer.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/timeInterval.js
/** PURE_IMPORTS_START _scheduler_async,_scan,_observable_defer,_map PURE_IMPORTS_END */




function timeInterval(scheduler) {
    if (scheduler === void 0) {
        scheduler = async_async;
    }
    return function (source) {
        return defer(function () {
            return source.pipe(scan(function (_a, value) {
                var current = _a.current;
                return ({ value: value, current: scheduler.now(), last: current });
            }, { current: scheduler.now(), value: undefined, last: undefined }), map(function (_a) {
                var current = _a.current, last = _a.last, value = _a.value;
                return new TimeInterval(value, current - last);
            }));
        });
    };
}
var TimeInterval = /*@__PURE__*/ (function () {
    function TimeInterval(value, interval) {
        this.value = value;
        this.interval = interval;
    }
    return TimeInterval;
}());

//# sourceMappingURL=timeInterval.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/TimeoutError.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function TimeoutErrorImpl() {
    Error.call(this);
    this.message = 'Timeout has occurred';
    this.name = 'TimeoutError';
    return this;
}
TimeoutErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
var TimeoutError = TimeoutErrorImpl;
//# sourceMappingURL=TimeoutError.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/timeoutWith.js
/** PURE_IMPORTS_START tslib,_scheduler_async,_util_isDate,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */





function timeoutWith(due, withObservable, scheduler) {
    if (scheduler === void 0) {
        scheduler = async_async;
    }
    return function (source) {
        var absoluteTimeout = isDate(due);
        var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
        return source.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
    };
}
var TimeoutWithOperator = /*@__PURE__*/ (function () {
    function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
        this.waitFor = waitFor;
        this.absoluteTimeout = absoluteTimeout;
        this.withObservable = withObservable;
        this.scheduler = scheduler;
    }
    TimeoutWithOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
    };
    return TimeoutWithOperator;
}());
var TimeoutWithSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(TimeoutWithSubscriber, _super);
    function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.absoluteTimeout = absoluteTimeout;
        _this.waitFor = waitFor;
        _this.withObservable = withObservable;
        _this.scheduler = scheduler;
        _this.action = null;
        _this.scheduleTimeout();
        return _this;
    }
    TimeoutWithSubscriber.dispatchTimeout = function (subscriber) {
        var withObservable = subscriber.withObservable;
        subscriber._unsubscribeAndRecycle();
        subscriber.add(subscribeToResult(subscriber, withObservable));
    };
    TimeoutWithSubscriber.prototype.scheduleTimeout = function () {
        var action = this.action;
        if (action) {
            this.action = action.schedule(this, this.waitFor);
        }
        else {
            this.add(this.action = this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, this));
        }
    };
    TimeoutWithSubscriber.prototype._next = function (value) {
        if (!this.absoluteTimeout) {
            this.scheduleTimeout();
        }
        _super.prototype._next.call(this, value);
    };
    TimeoutWithSubscriber.prototype._unsubscribe = function () {
        this.action = null;
        this.scheduler = null;
        this.withObservable = null;
    };
    return TimeoutWithSubscriber;
}(OuterSubscriber));
//# sourceMappingURL=timeoutWith.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/timeout.js
/** PURE_IMPORTS_START _scheduler_async,_util_TimeoutError,_timeoutWith,_observable_throwError PURE_IMPORTS_END */




function timeout(due, scheduler) {
    if (scheduler === void 0) {
        scheduler = async_async;
    }
    return timeoutWith(due, throwError(new TimeoutError()), scheduler);
}
//# sourceMappingURL=timeout.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/timestamp.js
/** PURE_IMPORTS_START _scheduler_async,_map PURE_IMPORTS_END */


function timestamp(scheduler) {
    if (scheduler === void 0) {
        scheduler = async_async;
    }
    return map(function (value) { return new Timestamp(value, scheduler.now()); });
}
var Timestamp = /*@__PURE__*/ (function () {
    function Timestamp(value, timestamp) {
        this.value = value;
        this.timestamp = timestamp;
    }
    return Timestamp;
}());

//# sourceMappingURL=timestamp.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/toArray.js
/** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */

function toArrayReducer(arr, item, index) {
    if (index === 0) {
        return [item];
    }
    arr.push(item);
    return arr;
}
function toArray() {
    return reduce(toArrayReducer, []);
}
//# sourceMappingURL=toArray.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/window.js
/** PURE_IMPORTS_START tslib,_Subject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */




function window_window(windowBoundaries) {
    return function windowOperatorFunction(source) {
        return source.lift(new WindowOperator(windowBoundaries));
    };
}
var WindowOperator = /*@__PURE__*/ (function () {
    function WindowOperator(windowBoundaries) {
        this.windowBoundaries = windowBoundaries;
    }
    WindowOperator.prototype.call = function (subscriber, source) {
        var windowSubscriber = new WindowSubscriber(subscriber);
        var sourceSubscription = source.subscribe(windowSubscriber);
        if (!sourceSubscription.closed) {
            windowSubscriber.add(subscribeToResult(windowSubscriber, this.windowBoundaries));
        }
        return sourceSubscription;
    };
    return WindowOperator;
}());
var WindowSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(WindowSubscriber, _super);
    function WindowSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.window = new Subject();
        destination.next(_this.window);
        return _this;
    }
    WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.openWindow();
    };
    WindowSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    WindowSubscriber.prototype.notifyComplete = function (innerSub) {
        this._complete();
    };
    WindowSubscriber.prototype._next = function (value) {
        this.window.next(value);
    };
    WindowSubscriber.prototype._error = function (err) {
        this.window.error(err);
        this.destination.error(err);
    };
    WindowSubscriber.prototype._complete = function () {
        this.window.complete();
        this.destination.complete();
    };
    WindowSubscriber.prototype._unsubscribe = function () {
        this.window = null;
    };
    WindowSubscriber.prototype.openWindow = function () {
        var prevWindow = this.window;
        if (prevWindow) {
            prevWindow.complete();
        }
        var destination = this.destination;
        var newWindow = this.window = new Subject();
        destination.next(newWindow);
    };
    return WindowSubscriber;
}(OuterSubscriber));
//# sourceMappingURL=window.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/windowCount.js
/** PURE_IMPORTS_START tslib,_Subscriber,_Subject PURE_IMPORTS_END */



function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) {
        startWindowEvery = 0;
    }
    return function windowCountOperatorFunction(source) {
        return source.lift(new WindowCountOperator(windowSize, startWindowEvery));
    };
}
var WindowCountOperator = /*@__PURE__*/ (function () {
    function WindowCountOperator(windowSize, startWindowEvery) {
        this.windowSize = windowSize;
        this.startWindowEvery = startWindowEvery;
    }
    WindowCountOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
    };
    return WindowCountOperator;
}());
var WindowCountSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(WindowCountSubscriber, _super);
    function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.windowSize = windowSize;
        _this.startWindowEvery = startWindowEvery;
        _this.windows = [new Subject()];
        _this.count = 0;
        destination.next(_this.windows[0]);
        return _this;
    }
    WindowCountSubscriber.prototype._next = function (value) {
        var startWindowEvery = (this.startWindowEvery > 0) ? this.startWindowEvery : this.windowSize;
        var destination = this.destination;
        var windowSize = this.windowSize;
        var windows = this.windows;
        var len = windows.length;
        for (var i = 0; i < len && !this.closed; i++) {
            windows[i].next(value);
        }
        var c = this.count - windowSize + 1;
        if (c >= 0 && c % startWindowEvery === 0 && !this.closed) {
            windows.shift().complete();
        }
        if (++this.count % startWindowEvery === 0 && !this.closed) {
            var window_1 = new Subject();
            windows.push(window_1);
            destination.next(window_1);
        }
    };
    WindowCountSubscriber.prototype._error = function (err) {
        var windows = this.windows;
        if (windows) {
            while (windows.length > 0 && !this.closed) {
                windows.shift().error(err);
            }
        }
        this.destination.error(err);
    };
    WindowCountSubscriber.prototype._complete = function () {
        var windows = this.windows;
        if (windows) {
            while (windows.length > 0 && !this.closed) {
                windows.shift().complete();
            }
        }
        this.destination.complete();
    };
    WindowCountSubscriber.prototype._unsubscribe = function () {
        this.count = 0;
        this.windows = null;
    };
    return WindowCountSubscriber;
}(Subscriber));
//# sourceMappingURL=windowCount.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/windowTime.js
/** PURE_IMPORTS_START tslib,_Subject,_scheduler_async,_Subscriber,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */






function windowTime(windowTimeSpan) {
    var scheduler = async_async;
    var windowCreationInterval = null;
    var maxWindowSize = Number.POSITIVE_INFINITY;
    if (isScheduler_isScheduler(arguments[3])) {
        scheduler = arguments[3];
    }
    if (isScheduler_isScheduler(arguments[2])) {
        scheduler = arguments[2];
    }
    else if (isNumeric(arguments[2])) {
        maxWindowSize = arguments[2];
    }
    if (isScheduler_isScheduler(arguments[1])) {
        scheduler = arguments[1];
    }
    else if (isNumeric(arguments[1])) {
        windowCreationInterval = arguments[1];
    }
    return function windowTimeOperatorFunction(source) {
        return source.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler));
    };
}
var WindowTimeOperator = /*@__PURE__*/ (function () {
    function WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
        this.windowTimeSpan = windowTimeSpan;
        this.windowCreationInterval = windowCreationInterval;
        this.maxWindowSize = maxWindowSize;
        this.scheduler = scheduler;
    }
    WindowTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler));
    };
    return WindowTimeOperator;
}());
var CountedSubject = /*@__PURE__*/ (function (_super) {
    __extends(CountedSubject, _super);
    function CountedSubject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._numberOfNextedValues = 0;
        return _this;
    }
    CountedSubject.prototype.next = function (value) {
        this._numberOfNextedValues++;
        _super.prototype.next.call(this, value);
    };
    Object.defineProperty(CountedSubject.prototype, "numberOfNextedValues", {
        get: function () {
            return this._numberOfNextedValues;
        },
        enumerable: true,
        configurable: true
    });
    return CountedSubject;
}(Subject));
var WindowTimeSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(WindowTimeSubscriber, _super);
    function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.windowTimeSpan = windowTimeSpan;
        _this.windowCreationInterval = windowCreationInterval;
        _this.maxWindowSize = maxWindowSize;
        _this.scheduler = scheduler;
        _this.windows = [];
        var window = _this.openWindow();
        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
            var closeState = { subscriber: _this, window: window, context: null };
            var creationState = { windowTimeSpan: windowTimeSpan, windowCreationInterval: windowCreationInterval, subscriber: _this, scheduler: scheduler };
            _this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
            _this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
        }
        else {
            var timeSpanOnlyState = { subscriber: _this, window: window, windowTimeSpan: windowTimeSpan };
            _this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
        }
        return _this;
    }
    WindowTimeSubscriber.prototype._next = function (value) {
        var windows = this.windows;
        var len = windows.length;
        for (var i = 0; i < len; i++) {
            var window_1 = windows[i];
            if (!window_1.closed) {
                window_1.next(value);
                if (window_1.numberOfNextedValues >= this.maxWindowSize) {
                    this.closeWindow(window_1);
                }
            }
        }
    };
    WindowTimeSubscriber.prototype._error = function (err) {
        var windows = this.windows;
        while (windows.length > 0) {
            windows.shift().error(err);
        }
        this.destination.error(err);
    };
    WindowTimeSubscriber.prototype._complete = function () {
        var windows = this.windows;
        while (windows.length > 0) {
            var window_2 = windows.shift();
            if (!window_2.closed) {
                window_2.complete();
            }
        }
        this.destination.complete();
    };
    WindowTimeSubscriber.prototype.openWindow = function () {
        var window = new CountedSubject();
        this.windows.push(window);
        var destination = this.destination;
        destination.next(window);
        return window;
    };
    WindowTimeSubscriber.prototype.closeWindow = function (window) {
        window.complete();
        var windows = this.windows;
        windows.splice(windows.indexOf(window), 1);
    };
    return WindowTimeSubscriber;
}(Subscriber));
function dispatchWindowTimeSpanOnly(state) {
    var subscriber = state.subscriber, windowTimeSpan = state.windowTimeSpan, window = state.window;
    if (window) {
        subscriber.closeWindow(window);
    }
    state.window = subscriber.openWindow();
    this.schedule(state, windowTimeSpan);
}
function dispatchWindowCreation(state) {
    var windowTimeSpan = state.windowTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler, windowCreationInterval = state.windowCreationInterval;
    var window = subscriber.openWindow();
    var action = this;
    var context = { action: action, subscription: null };
    var timeSpanState = { subscriber: subscriber, window: window, context: context };
    context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
    action.add(context.subscription);
    action.schedule(state, windowCreationInterval);
}
function dispatchWindowClose(state) {
    var subscriber = state.subscriber, window = state.window, context = state.context;
    if (context && context.action && context.subscription) {
        context.action.remove(context.subscription);
    }
    subscriber.closeWindow(window);
}
//# sourceMappingURL=windowTime.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/windowToggle.js
/** PURE_IMPORTS_START tslib,_Subject,_Subscription,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */





function windowToggle(openings, closingSelector) {
    return function (source) { return source.lift(new WindowToggleOperator(openings, closingSelector)); };
}
var WindowToggleOperator = /*@__PURE__*/ (function () {
    function WindowToggleOperator(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
    }
    WindowToggleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector));
    };
    return WindowToggleOperator;
}());
var WindowToggleSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(WindowToggleSubscriber, _super);
    function WindowToggleSubscriber(destination, openings, closingSelector) {
        var _this = _super.call(this, destination) || this;
        _this.openings = openings;
        _this.closingSelector = closingSelector;
        _this.contexts = [];
        _this.add(_this.openSubscription = subscribeToResult(_this, openings, openings));
        return _this;
    }
    WindowToggleSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        if (contexts) {
            var len = contexts.length;
            for (var i = 0; i < len; i++) {
                contexts[i].window.next(value);
            }
        }
    };
    WindowToggleSubscriber.prototype._error = function (err) {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while (++index < len) {
                var context_1 = contexts[index];
                context_1.window.error(err);
                context_1.subscription.unsubscribe();
            }
        }
        _super.prototype._error.call(this, err);
    };
    WindowToggleSubscriber.prototype._complete = function () {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while (++index < len) {
                var context_2 = contexts[index];
                context_2.window.complete();
                context_2.subscription.unsubscribe();
            }
        }
        _super.prototype._complete.call(this);
    };
    WindowToggleSubscriber.prototype._unsubscribe = function () {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while (++index < len) {
                var context_3 = contexts[index];
                context_3.window.unsubscribe();
                context_3.subscription.unsubscribe();
            }
        }
    };
    WindowToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (outerValue === this.openings) {
            var closingNotifier = void 0;
            try {
                var closingSelector = this.closingSelector;
                closingNotifier = closingSelector(innerValue);
            }
            catch (e) {
                return this.error(e);
            }
            var window_1 = new Subject();
            var subscription = new Subscription();
            var context_4 = { window: window_1, subscription: subscription };
            this.contexts.push(context_4);
            var innerSubscription = subscribeToResult(this, closingNotifier, context_4);
            if (innerSubscription.closed) {
                this.closeWindow(this.contexts.length - 1);
            }
            else {
                innerSubscription.context = context_4;
                subscription.add(innerSubscription);
            }
            this.destination.next(window_1);
        }
        else {
            this.closeWindow(this.contexts.indexOf(outerValue));
        }
    };
    WindowToggleSubscriber.prototype.notifyError = function (err) {
        this.error(err);
    };
    WindowToggleSubscriber.prototype.notifyComplete = function (inner) {
        if (inner !== this.openSubscription) {
            this.closeWindow(this.contexts.indexOf(inner.context));
        }
    };
    WindowToggleSubscriber.prototype.closeWindow = function (index) {
        if (index === -1) {
            return;
        }
        var contexts = this.contexts;
        var context = contexts[index];
        var window = context.window, subscription = context.subscription;
        contexts.splice(index, 1);
        window.complete();
        subscription.unsubscribe();
    };
    return WindowToggleSubscriber;
}(OuterSubscriber));
//# sourceMappingURL=windowToggle.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/windowWhen.js
/** PURE_IMPORTS_START tslib,_Subject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */




function windowWhen(closingSelector) {
    return function windowWhenOperatorFunction(source) {
        return source.lift(new windowWhen_WindowOperator(closingSelector));
    };
}
var windowWhen_WindowOperator = /*@__PURE__*/ (function () {
    function WindowOperator(closingSelector) {
        this.closingSelector = closingSelector;
    }
    WindowOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new windowWhen_WindowSubscriber(subscriber, this.closingSelector));
    };
    return WindowOperator;
}());
var windowWhen_WindowSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(WindowSubscriber, _super);
    function WindowSubscriber(destination, closingSelector) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.closingSelector = closingSelector;
        _this.openWindow();
        return _this;
    }
    WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.openWindow(innerSub);
    };
    WindowSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    WindowSubscriber.prototype.notifyComplete = function (innerSub) {
        this.openWindow(innerSub);
    };
    WindowSubscriber.prototype._next = function (value) {
        this.window.next(value);
    };
    WindowSubscriber.prototype._error = function (err) {
        this.window.error(err);
        this.destination.error(err);
        this.unsubscribeClosingNotification();
    };
    WindowSubscriber.prototype._complete = function () {
        this.window.complete();
        this.destination.complete();
        this.unsubscribeClosingNotification();
    };
    WindowSubscriber.prototype.unsubscribeClosingNotification = function () {
        if (this.closingNotification) {
            this.closingNotification.unsubscribe();
        }
    };
    WindowSubscriber.prototype.openWindow = function (innerSub) {
        if (innerSub === void 0) {
            innerSub = null;
        }
        if (innerSub) {
            this.remove(innerSub);
            innerSub.unsubscribe();
        }
        var prevWindow = this.window;
        if (prevWindow) {
            prevWindow.complete();
        }
        var window = this.window = new Subject();
        this.destination.next(window);
        var closingNotifier;
        try {
            var closingSelector = this.closingSelector;
            closingNotifier = closingSelector();
        }
        catch (e) {
            this.destination.error(e);
            this.window.error(e);
            return;
        }
        this.add(this.closingNotification = subscribeToResult(this, closingNotifier));
    };
    return WindowSubscriber;
}(OuterSubscriber));
//# sourceMappingURL=windowWhen.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/withLatestFrom.js
/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */



function withLatestFrom() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return function (source) {
        var project;
        if (typeof args[args.length - 1] === 'function') {
            project = args.pop();
        }
        var observables = args;
        return source.lift(new WithLatestFromOperator(observables, project));
    };
}
var WithLatestFromOperator = /*@__PURE__*/ (function () {
    function WithLatestFromOperator(observables, project) {
        this.observables = observables;
        this.project = project;
    }
    WithLatestFromOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
    };
    return WithLatestFromOperator;
}());
var WithLatestFromSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(WithLatestFromSubscriber, _super);
    function WithLatestFromSubscriber(destination, observables, project) {
        var _this = _super.call(this, destination) || this;
        _this.observables = observables;
        _this.project = project;
        _this.toRespond = [];
        var len = observables.length;
        _this.values = new Array(len);
        for (var i = 0; i < len; i++) {
            _this.toRespond.push(i);
        }
        for (var i = 0; i < len; i++) {
            var observable = observables[i];
            _this.add(subscribeToResult(_this, observable, observable, i));
        }
        return _this;
    }
    WithLatestFromSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values[outerIndex] = innerValue;
        var toRespond = this.toRespond;
        if (toRespond.length > 0) {
            var found = toRespond.indexOf(outerIndex);
            if (found !== -1) {
                toRespond.splice(found, 1);
            }
        }
    };
    WithLatestFromSubscriber.prototype.notifyComplete = function () {
    };
    WithLatestFromSubscriber.prototype._next = function (value) {
        if (this.toRespond.length === 0) {
            var args = [value].concat(this.values);
            if (this.project) {
                this._tryProject(args);
            }
            else {
                this.destination.next(args);
            }
        }
    };
    WithLatestFromSubscriber.prototype._tryProject = function (args) {
        var result;
        try {
            result = this.project.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return WithLatestFromSubscriber;
}(OuterSubscriber));
//# sourceMappingURL=withLatestFrom.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/zip.js
/** PURE_IMPORTS_START tslib,_fromArray,_util_isArray,_Subscriber,_OuterSubscriber,_util_subscribeToResult,_.._internal_symbol_iterator PURE_IMPORTS_END */







function zip() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var resultSelector = observables[observables.length - 1];
    if (typeof resultSelector === 'function') {
        observables.pop();
    }
    return fromArray_fromArray(observables, undefined).lift(new ZipOperator(resultSelector));
}
var ZipOperator = /*@__PURE__*/ (function () {
    function ZipOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    ZipOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
    };
    return ZipOperator;
}());

var ZipSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(ZipSubscriber, _super);
    function ZipSubscriber(destination, resultSelector, values) {
        if (values === void 0) {
            values = Object.create(null);
        }
        var _this = _super.call(this, destination) || this;
        _this.iterators = [];
        _this.active = 0;
        _this.resultSelector = (typeof resultSelector === 'function') ? resultSelector : null;
        _this.values = values;
        return _this;
    }
    ZipSubscriber.prototype._next = function (value) {
        var iterators = this.iterators;
        if (isArray_isArray(value)) {
            iterators.push(new StaticArrayIterator(value));
        }
        else if (typeof value[iterator_iterator] === 'function') {
            iterators.push(new StaticIterator(value[iterator_iterator]()));
        }
        else {
            iterators.push(new ZipBufferIterator(this.destination, this, value));
        }
    };
    ZipSubscriber.prototype._complete = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        this.unsubscribe();
        if (len === 0) {
            this.destination.complete();
            return;
        }
        this.active = len;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (iterator.stillUnsubscribed) {
                var destination = this.destination;
                destination.add(iterator.subscribe(iterator, i));
            }
            else {
                this.active--;
            }
        }
    };
    ZipSubscriber.prototype.notifyInactive = function () {
        this.active--;
        if (this.active === 0) {
            this.destination.complete();
        }
    };
    ZipSubscriber.prototype.checkIterators = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        var destination = this.destination;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                return;
            }
        }
        var shouldComplete = false;
        var args = [];
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            var result = iterator.next();
            if (iterator.hasCompleted()) {
                shouldComplete = true;
            }
            if (result.done) {
                destination.complete();
                return;
            }
            args.push(result.value);
        }
        if (this.resultSelector) {
            this._tryresultSelector(args);
        }
        else {
            destination.next(args);
        }
        if (shouldComplete) {
            destination.complete();
        }
    };
    ZipSubscriber.prototype._tryresultSelector = function (args) {
        var result;
        try {
            result = this.resultSelector.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return ZipSubscriber;
}(Subscriber));

var StaticIterator = /*@__PURE__*/ (function () {
    function StaticIterator(iterator) {
        this.iterator = iterator;
        this.nextResult = iterator.next();
    }
    StaticIterator.prototype.hasValue = function () {
        return true;
    };
    StaticIterator.prototype.next = function () {
        var result = this.nextResult;
        this.nextResult = this.iterator.next();
        return result;
    };
    StaticIterator.prototype.hasCompleted = function () {
        var nextResult = this.nextResult;
        return nextResult && nextResult.done;
    };
    return StaticIterator;
}());
var StaticArrayIterator = /*@__PURE__*/ (function () {
    function StaticArrayIterator(array) {
        this.array = array;
        this.index = 0;
        this.length = 0;
        this.length = array.length;
    }
    StaticArrayIterator.prototype[iterator_iterator] = function () {
        return this;
    };
    StaticArrayIterator.prototype.next = function (value) {
        var i = this.index++;
        var array = this.array;
        return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
    };
    StaticArrayIterator.prototype.hasValue = function () {
        return this.array.length > this.index;
    };
    StaticArrayIterator.prototype.hasCompleted = function () {
        return this.array.length === this.index;
    };
    return StaticArrayIterator;
}());
var ZipBufferIterator = /*@__PURE__*/ (function (_super) {
    __extends(ZipBufferIterator, _super);
    function ZipBufferIterator(destination, parent, observable) {
        var _this = _super.call(this, destination) || this;
        _this.parent = parent;
        _this.observable = observable;
        _this.stillUnsubscribed = true;
        _this.buffer = [];
        _this.isComplete = false;
        return _this;
    }
    ZipBufferIterator.prototype[iterator_iterator] = function () {
        return this;
    };
    ZipBufferIterator.prototype.next = function () {
        var buffer = this.buffer;
        if (buffer.length === 0 && this.isComplete) {
            return { value: null, done: true };
        }
        else {
            return { value: buffer.shift(), done: false };
        }
    };
    ZipBufferIterator.prototype.hasValue = function () {
        return this.buffer.length > 0;
    };
    ZipBufferIterator.prototype.hasCompleted = function () {
        return this.buffer.length === 0 && this.isComplete;
    };
    ZipBufferIterator.prototype.notifyComplete = function () {
        if (this.buffer.length > 0) {
            this.isComplete = true;
            this.parent.notifyInactive();
        }
        else {
            this.destination.complete();
        }
    };
    ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.buffer.push(innerValue);
        this.parent.checkIterators();
    };
    ZipBufferIterator.prototype.subscribe = function (value, index) {
        return subscribeToResult(this, this.observable, this, index);
    };
    return ZipBufferIterator;
}(OuterSubscriber));
//# sourceMappingURL=zip.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/zip.js
/** PURE_IMPORTS_START _observable_zip PURE_IMPORTS_END */

function zip_zip() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return function zipOperatorFunction(source) {
        return source.lift.call(zip.apply(void 0, [source].concat(observables)));
    };
}
//# sourceMappingURL=zip.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/zipAll.js
/** PURE_IMPORTS_START _observable_zip PURE_IMPORTS_END */

function zipAll(project) {
    return function (source) { return source.lift(new ZipOperator(project)); };
}
//# sourceMappingURL=zipAll.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/operators/index.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */








































































































//# sourceMappingURL=index.js.map


/***/ }),

/***/ 869:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapHelper = exports.Renderer = void 0;
const _4d_objects_1 = __webpack_require__(264);
const rxjs_1 = __webpack_require__(435);
const vasat_1 = __webpack_require__(657);
const operators_1 = __webpack_require__(968);
/**
 * A renderer can be registered to a #MapHelper to determine how a plottable object is to be applied
 */
class Renderer {
    onAdd(obj, args) {
        throw new Error("Not implemented");
    }
    onUpdate(obj, pr, args) {
        return rxjs_1.of(pr);
    }
    onRemove(obj, pr) {
        throw new Error("Not implemented");
    }
    destory() { }
}
exports.Renderer = Renderer;
/**
 * <p>Interface for the helper classes. Currently there are three maps that are supported (<a href="https://cesiumjs.org/tutorials/">Cesium</a>, <a href="https://developers.google.com/maps/documentation/javascript/tutorial">Google</a>, <a href="https://leafletjs.com/">Leaflet</a>).</p>
 */
class MapHelper {
    constructor() {
        this.plotCache = {};
        this.renderers = {};
    }
    /**
     * <p>Removes all models/images from the map.</p>
     */
    clearPlottables() {
        throw new Error("Not Implemented");
    }
    /**
     * <p>Adds specified model/images to the map.</p>
     * <p>See [[Transform]] for details on compatibility.</p>
     * @param t Accepts [[Transform]] and [[Annotation]] objects.
     * @param args
     * @deprecated use setPlottable
     */
    addPlottable(t, args) {
        return this.setPlottable(t, args);
    }
    /**
     * <p>Adds or Updates specified model/images to the map.</p>
     * <p>See [[Transform]] for details on compatibility.</p>
     * @param t Accepts [[Transform]] and [[Annotation]] objects.
     * @param args
     */
    setPlottable(p, args) {
        var key = '_' + p.className() + '_' + p.id;
        var ref = this.plotCache[key];
        var render = this.getRenderer(p);
        if (!ref) {
            return render.onAdd(p, args).pipe(operators_1.tap(r => this.plotCache[key] = r), operators_1.flatMap(rr => render.onUpdate(p, rr, args)));
        }
        else
            return render.onUpdate(p, ref, args);
    }
    /**
     * <p>Removes specified model object from map.</p>
     * @param t The [[PlottableModel]] object to be removed.
     */
    removePlottable(p) {
        var key = '_' + p.className() + '_' + p.id;
        var ref = this.plotCache[key];
        var render = this.getRenderer(p);
        if (ref) {
            delete this.plotCache[key];
            return render.onRemove(p, ref);
        }
    }
    /**
     * <p>Pans the camera to specified model object on the map.</p>
     * @param t The [[PlottableModel]] object that you wish to pan the camera to.
     * @param duration Time taken to pan camera to destination in milliseconds.
     * @param args
     */
    sendCameraTo(t, duration, args) {
        throw new Error("Not Implemented");
    }
    /**
     * <p>Returns the respective Reference object of a given [[PlottableModel]] object that was plotted on the map.</p>
     * @param p [[PlottableModel]] object
     */
    getMapObjectFor(p) {
        return this.plotCache['_' + p.className() + '_' + p.id];
    }
    /**
     * <p>Returns the authenticated url of the image/model of selected [[PlottableModel]].</p>
     * @param p The [[PlottableModel]] object
     * @param file Name of file.
     * @param tier Applicable for Cesium only. See [[FourdCesiumHelper.getAuthenticatedUrl]] for more details.
     */
    getAuthenticatedUrl(p, file, tier) {
        throw new Error("Not Implemented");
    }
    /**
     * Change the transparency for a transform being displayed on this map. Transform must have been added using addPlottable
     * @param t the transform object
     * @param opacity zero - 1 as percent
     */
    changeOpacity(t, opacity) {
        throw new Error("Not Implemented");
    }
    /**
     * use whatever this implementations click event is to resolve the item currently clicked
     */
    resolveItem(clickEvent) {
        throw new Error("Not Implemented");
    }
    registerRenderer(clazz, category, renderer) {
        var cn = this.classNameForType(clazz);
        var cat = category instanceof _4d_objects_1.TransformType ? category.uid : category;
        if (!this.renderers[cn])
            this.renderers[cn] = {};
        this.renderers[cn][cat] = renderer;
    }
    destroy() {
        Object.keys(this.plotCache).forEach(k => this.removePlottable(this.plotCache[k].plottable));
        Object.keys(this.renderers).forEach(k => Object.keys(this.renderers[k])
            .forEach(kk => this.renderers[k][kk].destory()));
    }
    classNameForType(obj) {
        var t = new obj(new vasat_1.Vasat(new vasat_1.VasatConfig("", "", ""), null));
        return t.className();
    }
    getRenderer(p) {
        if (!this.renderers[p.className()])
            throw new Error("No render for class " + p.className());
        var typeKey = "*";
        if (p instanceof _4d_objects_1.Annotation)
            typeKey = p.annotationMode || typeKey;
        else if (p instanceof _4d_objects_1.Transform)
            typeKey = (p.transformType.uid) || typeKey;
        var r = null;
        r = this.renderers[p.className()][typeKey] || this.renderers[p.className()]['*'];
        if (!r)
            throw Error("No renderer for type " + p.transformType.id);
        return r;
    }
}
exports.MapHelper = MapHelper;


/***/ }),

/***/ 182:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseComponent = exports.FourDService = void 0;
const rxjs_1 = __webpack_require__(435);
const operators_1 = __webpack_require__(968);
const vasat_1 = __webpack_require__(657);
const _4d_objects_1 = __webpack_require__(264);
const _4d_processor_service_1 = __webpack_require__(151);
/* TODO: update links to Vasat documentation. (find and replace: linkToVasat ) */
/**
 * <p>Service containing useful methods to communicate with server.</p>
 */
class FourDService {
    constructor(V) {
        this.V = V;
        this.playground = [];
        this.FILTER_PLOTABLE = "plotable";
        this.FILE_UPLOADED = "file_uploaded";
        this.FILE_FAILED = "file_failed";
        this.FILE_CNX = "file_cnx";
        this.FILE_ADDED = "file_added";
        this.FILE_BEFORE_UL = "file_before";
        this.FILE_PROGRESS = "file_prog";
        this.activeWidgets = [];
        this.filters = {};
        this.uploadChunkSize = 5000000;
        this.runningTasks = [];
        this.runningTasksMap = {};
        this.uploadsRunning = [];
        this.uploadsRunningMap = {};
        this.uploadsQueued = [];
        this.uploadsQueuedMap = {};
        this._runningTaskSubject = new rxjs_1.Subject();
        this.runningTasksObservable = this._runningTaskSubject.asObservable();
        this._uploadsRunningSubject = new rxjs_1.Subject();
        this.uploadsRunningObservable = this._uploadsRunningSubject.asObservable();
        this._accountChangeSubject = new rxjs_1.Subject();
        this.accountChangeObservable = this._accountChangeSubject.asObservable();
        this._socketSubject = new rxjs_1.Subject();
        this._socketObservable = this._socketSubject.asObservable().pipe(operators_1.debounceTime(30000));
        this._socketCommands = {};
        // debug
        this._socketObservable.subscribe((item) => console.log(item));
        this.onSocketCommand('welcome').subscribe(s => s.running.forEach(i => {
            if (i.lastProgress) {
                var v = new _4d_processor_service_1.ServerProcess();
                Object.keys(i.lastProgress).forEach(k => v[k] = i.lastProgress[k]);
                this.addTask(v);
            }
        }));
    }
    /**
     * <p>Logout of current user.</p>
     */
    logout() {
        return this.V.logoutObservable().pipe(operators_1.map(s => this.clearStates()));
    }
    /**
     * <p>Removes active team.</p>
     */
    clearStates() {
        this.teams = null;
        this.activeTeam = null;
        this.activeUser = null;
        this._accountsObservale = null;
        this.deinitSocket();
    }
    onV2Init() {
        return this.onReady().pipe(operators_1.flatMap(res => {
            if (!this.datasetTypes) {
                return this.V.searchByObject(_4d_objects_1.TransformType).useCache(true).limit(100).queryObservable()
                    .pipe(operators_1.flatMap((t) => {
                    this.transformTypes = t.items;
                    return this.V.searchByObject(_4d_objects_1.DatasetType).useCache(true).limit(100).queryObservable();
                }), operators_1.flatMap(ds => {
                    this.datasetTypes = ds.items;
                    this.filters[this.FILTER_PLOTABLE] = this.datasetTypes.filter(d => d.canPlot);
                    return rxjs_1.forkJoin(this.V.searchByObject(_4d_objects_1.ProcessorAPI).useCache(true).equals('active', true).queryObservable().pipe(operators_1.map((t) => this.apis = t.items)), this.V.searchByObject(_4d_objects_1.JobType).useCache(true).equals('active', true).queryObservable().pipe(operators_1.map((t) => this.jobTypes = t.items)));
                    // map transforms to the local instance
                    //ds.items.forEach(dsi => {
                    //  dsi.adhocTransforms = dsi.adhocTransforms.map(t => this.transformTypes.find(tt =>  tt.id == t.id))
                    //  dsi.autoApplyTransforms = dsi.autoApplyTransforms.map(t => this.transformTypes.find(tt => tt.id == t.id))
                    //})
                }));
            }
            else {
                rxjs_1.of(res);
            }
        }));
    }
    getQuotas() {
        return this.V.api('/api/Account/' + this.activeTeam.id + '?quota=true');
    }
    /**
     * <p>Returns an observable of an [[Account]] object. If it does not have a team or get sample [[Account]].</p>
     * <footer>Note: throws exception if not logged in.</footer>
     */
    onReady() {
        if (this.teams) {
            return rxjs_1.of(this.teams);
        }
        else if (this._accountsObservale) {
            return this._accountsObservale;
        }
        else {
            return this._accountsObservale = this.V.onReady().pipe(operators_1.flatMap(s => {
                this.activeUser = s ? s.user : null;
                if (!s) {
                    this.clearStates();
                    throw "Not logged in";
                }
                else {
                    if (!this.socket)
                        this.initSocket(s);
                    this.onSocketCommand('update_dataset').subscribe(tc => {
                        var ds = this.V.findCached(_4d_objects_1.Dataset, tc.id);
                        if (ds)
                            ds.set(tc);
                    });
                    this.onSocketCommand('task_update').subscribe(tc => {
                        let task = this.runningTasksMap[tc.dataset.id];
                        var isFinished = tc.status == 'finished' || tc.status == 'error';
                        if (task) {
                            task.update(tc);
                            if (isFinished)
                                this.removeTask(tc, tc.status == 'error');
                            else
                                this._runningTaskSubject.next({
                                    event: 'update',
                                    task: task,
                                    finished: isFinished,
                                    error: tc.status == 'error'
                                });
                        }
                        else if (!isFinished) {
                            let t = new _4d_processor_service_1.ServerProcess();
                            t.update(tc);
                            this.addTask(t);
                        }
                    });
                    return rxjs_1.forkJoin([
                        this.V.searchByObject(_4d_objects_1.AccountPlan).useCache(true).equals('active', true).queryObservable().pipe(operators_1.map((t) => this.plans = t.items)),
                        this.V.searchByObject(vasat_1.Role).useCache(true).equals('active', true).limit(100).queryObservable().pipe(operators_1.map((t) => this.roles = t.items)),
                        this.V.api("/4dinfo").pipe(operators_1.tap(config => this.domainConfig = config)),
                        this.V.searchByObject(_4d_objects_1.Account).useCache(true).limit(100).queryObservable().pipe(operators_1.map(r => {
                            this._accountsObservale = null;
                            this.V.registerCacheClass(_4d_objects_1.Account, r.items);
                            this.V.registerClass(_4d_objects_1.Dataset);
                            this.V.registerClass(_4d_objects_1.JobType);
                            this.V.registerClass(_4d_objects_1.Job);
                            this.V.registerClass(_4d_objects_1.JobBatch);
                            this.V.registerClass(_4d_objects_1.DatasetType);
                            this.V.registerClass(_4d_objects_1.Transform);
                            this.V.registerClass(_4d_objects_1.Project);
                            this.V.registerClass(_4d_objects_1.TransformType);
                            this.V.registerClass(_4d_objects_1.Annotation);
                            //this.V.registerClass(Widget)
                            this.V.registerClass(_4d_objects_1.EPSGCodes);
                            this.domain = r.items.find(a => a.isDomain);
                            this.rootAccounts = r.items.filter(a => !a.parent && a.uid != 'sample');
                            this.sampleAccount = r.items.find(a => a.uid == 'sample' && a.active);
                            return this.teams = r.items.filter(a => a.uid != 'sample');
                        }))
                    ]);
                }
            }), operators_1.share());
        }
    }
    /**
     * <p>If [[ServerProcess]] is not already running, add it. Otherwise update it.</p>
     * @param t The [[ServerProcess]] to add.
     */
    addTask(t) {
        if (this.runningTasksMap[t.dataset.id]) {
            t = this.runningTasksMap[t.dataset.id].update(t);
        }
        else {
            this.runningTasks.push(t);
            this.runningTasksMap[t.dataset.id] = t;
            this._runningTaskSubject.next({
                event: 'add',
                task: t,
                finished: false,
                error: false
            });
        }
    }
    /**
     * Remove the [[ServerProcess]] task.
     * @param task The task to remove.
     * @param err if the task ended in error set to true.
     */
    removeTask(task, err) {
        delete this.runningTasksMap[task.dataset.id];
        this.runningTasks = this.runningTasks.filter(t => t.dataset.id != task.dataset.id);
        this._runningTaskSubject.next({
            event: 'remove',
            task: task,
            finished: true,
            error: !!err
        });
    }
    /**
     * <p>Uploads file using [[ChunkedFileUploader]].</p>
     * @param ds [[Dataset]] to upload associated file.
     * @param f File to be uploaded.
     * @param filename Name of file.
     * @param chunkSize Size of chunks when uploading.
     */
    uploadFile(ds, f, filename = 'data', chunkSize) {
        var c = new _4d_processor_service_1.ChunkedFileUploader(this.V, this.V.config.host + '/api/Dataset/' + ds.id + '.chunked/' + filename, chunkSize || this.uploadChunkSize);
        c.fileRef = f;
        var task = new _4d_processor_service_1.ServerProcess();
        task.dataset = ds;
        task.uid = '' + ds.id;
        task.status = 'uploading';
        task.name = 'UPLOAD';
        task.progress = ds.incomplete ? ds.incomplete_offset / ds.incomplete_total : 0;
        task.uploader = c;
        var sub = c.progressObservable.subscribe(s => task.progress = s);
        this.uploadsQueued.push(task);
        this.uploadsQueuedMap[task.dataset.id] = task;
        setTimeout(() => this._deQueue(), 100);
        return task;
    }
    _deQueue() {
        if (this.uploadsRunning.length < 4 && this.uploadsQueued.length) {
            var next = this.uploadsQueued[0];
            var queue = next.uploader.uploadObservable(next.uploader.fileRef, next.dataset.incomplete ? next.dataset.incomplete_offset : 0, next.dataset.incomplete ? next.dataset.incomplete_seq : 0);
            this.uploadsRunning.push(next);
            this.uploadsRunningMap[next.dataset.id] = next;
            this.uploadsQueued = this.uploadsQueued.filter(q => q != next);
            delete this.uploadsQueuedMap[next.dataset.id];
            this._uploadsRunningSubject.next({
                task: next,
                finished: false,
                event: 'start',
                error: false
            });
            queue.subscribe(s => {
                var me = this.uploadsRunning.find(u => u.uploader == s.chunk);
                this.uploadsRunning = this.uploadsRunning.filter(r => r != me);
                delete this.uploadsRunningMap[me.dataset.id];
                this._uploadsRunningSubject.next({
                    task: me,
                    finished: true,
                    event: 'finished',
                    error: false
                });
                this._deQueue();
            }, e => {
                var me = this.uploadsRunning.find(u => u.uploader == next.uploader);
                this.uploadsRunning = this.uploadsRunning.filter(r => r != me);
                delete this.uploadsRunningMap[me.dataset.id];
                if (me.error && e.error)
                    me.error(e.error);
                this._uploadsRunningSubject.next({
                    task: me,
                    finished: true,
                    event: 'error',
                    error: true
                });
                this._deQueue();
            });
        }
    }
    /**
     * <p>Queries for <a href="https://docs.vasat.io/">Vasat</a> Model class and returns a <a href=" linkToVasat ">VasatSeachQuery</a>.</p>
     * @param objectType The Vasat model you want to query for.
     */
    searchFor(objectType) {
        return this.V.searchByObject(objectType);
    }
    /**
     * <p>Returns observable of [[Account]] if it exists. Else throws exception.</p>
     */
    onActiveAccountReady() {
        if (this._activeAccountObservable)
            return this._activeAccountObservable;
        else if (this.activeTeam) {
            return rxjs_1.of(this.activeTeam);
        }
        else
            return this.accountChangeObservable.pipe(operators_1.take(1));
    }
    /**
     * <p>Note that this is for advanced users with multiple teams. If you are a single user this does not apply.</p>
     * <p>Sets the active team to given accountId, so all subsequent api calls that are made will return things that only this accountId can see.</p>
     * @param accountId
     */
    setActiveTeam(accountId) {
        this.tryingAccount = accountId;
        this.V.registerCacheClass(_4d_objects_1.TransformType, []);
        this.V.registerCacheClass(_4d_objects_1.DatasetType, []);
        if (this.activeTeam && this.activeTeam.uid == accountId) {
            return rxjs_1.of(this.activeTeam);
        }
        else if (!accountId) {
            this.V.pathPrefix = '/api';
            this.activeTeam = null;
            this._activeAccountObservable = null;
            return rxjs_1.of(this.activeTeam);
        }
        else if (this._activeAccountObservable) {
            return this._activeAccountObservable;
        }
        else {
            return this._activeAccountObservable = this.onReady().pipe(operators_1.flatMap(aa => {
                let res = aa.find(a => a.uid == accountId);
                if (res) {
                    this.activeTeam = res;
                    this.V.pathPrefix = '/app/Account/' + accountId + '/api';
                    console.log("Active Account Set Prefix " + this.V.pathPrefix);
                    // load the transform types first then the dataset types
                    return this.V.searchByObject(_4d_objects_1.TransformType).useCache(true).limit(100).queryObservable()
                        .pipe(operators_1.flatMap((t) => {
                        this.transformTypes = t.items;
                        return this.V.searchByObject(_4d_objects_1.DatasetType).useCache(true).limit(100).queryObservable();
                    }), operators_1.map(ds => {
                        this.datasetTypes = ds.items;
                        this.filters[this.FILTER_PLOTABLE] = this.datasetTypes.filter(d => d.canPlot);
                        return ds.items;
                        // map transforms to the local instance
                        //ds.items.forEach(dsi => {
                        //  dsi.adhocTransforms = dsi.adhocTransforms.map(t => this.transformTypes.find(tt =>  tt.id == t.id))
                        //  dsi.autoApplyTransforms = dsi.autoApplyTransforms.map(t => this.transformTypes.find(tt => tt.id == t.id))
                        //})
                    }), operators_1.flatMap(_ => {
                        return this.V.searchByObject(_4d_objects_1.Tag).useCache(true).limit(100).queryObservable().pipe(operators_1.tap(res => this.tags = res.items));
                    }), operators_1.flatMap(_ => {
                        return rxjs_1.forkJoin([
                            this.V.searchByObject(_4d_objects_1.ProcessorAPI).useCache(true).equals('active', true).queryObservable().pipe(operators_1.map((t) => this.apis = t.items)),
                            this.V.searchByObject(_4d_objects_1.JobType).useCache(true).equals('active', true).queryObservable().pipe(operators_1.map((t) => this.jobTypes = t.items)),
                            this.V.searchByObject(_4d_objects_1.Project).useCache(true).equals('active', true).limit(1000).queryObservable().pipe(operators_1.map((t) => this.projects = t.items)),
                            this.activeTeam.plan.availableWidgets.useCache(true).equals('active', true).limit(1000).queryObservable().pipe(operators_1.map((t) => this.activeWidgets = t.items))
                        ]);
                    }), operators_1.map(done => {
                        this._accountChangeSubject.next(res);
                        this._activeAccountObservable = null;
                        return res;
                    }));
                }
                else {
                    this.V.pathPrefix = '/api';
                    throw "Invalid account ID " + accountId;
                }
            }), operators_1.share());
        }
    }
    /**
     * <p>Initialise WebSocket.</p>
     * @param s
     */
    initSocket(s) {
        if (this.socket)
            return;
        try {
            this.runningTasks = [];
            this.runningTasksMap = {};
            this.socket = new WebSocket(this.V.config.host
                .replace('https://', 'wss://')
                .replace('http://', 'ws://') + "/socket?access_token=" + s.access_token);
            this.socket.onopen = (ev) => this.socketUp = true;
            this.socket.onmessage = (ev) => {
                try {
                    let obj = JSON.parse(ev.data);
                    this._socketSubject.next(obj);
                    if (obj.cmd && this._socketCommands[obj.cmd]) {
                        this._socketCommands[obj.cmd].subject.next(obj.payload);
                    }
                    if (this._socketCommands['*']) {
                        this._socketCommands['*'].subject.next(obj.payload);
                    }
                    if (this._socketCommands['*!']) {
                        this._socketCommands['*!'].subject.next(obj);
                    }
                }
                catch (e) {
                    this._socketSubject.error(e);
                }
            };
            this.socket.onerror = (ev) => {
                this.retrySocket(s, ev);
            };
            this.socket.onclose = (ev) => {
                this.retrySocket(s, ev);
            };
        }
        catch (e) {
            this.retrySocket(s, e);
        }
    }
    /**
     * <p>Try to reinitialise WebSocket.</p>
     * @param s An active <a href=" linkToVasat ">Vasat Session</a>.
     * @param e Error or exception.
     */
    retrySocket(s, e) {
        this.socket = null;
        this.socketUp = false;
        this._socketSubject.error(e);
        setTimeout(() => this.initSocket(s), 10000);
    }
    /**
     * <p>Close WebSocket.</p>
     */
    deinitSocket() {
        if (this.socket) {
            this.socket.close();
            this.socket = null;
            this.socketUp = false;
        }
    }
    /**
     * <p>If command does not exist, create one and return.</p>
     * @param cmd Socket command.
     */
    onSocketCommand(cmd) {
        let obj = this._socketCommands[cmd];
        if (!obj) {
            let subj = new rxjs_1.Subject();
            let obs = subj.asObservable(); //.pipe(debounceTime(30000))
            obj = { subject: subj, obs: obs };
            this._socketCommands[cmd] = obj;
        }
        return obj.obs;
    }
    /**
     * <p>Transmist data to server.</p>
     * @param a Data to send.
     */
    sendSocket(a) {
        if (this.socket)
            if (typeof a == "string")
                this.socket.send(a);
            else
                this.socket.send(JSON.stringify(a));
        else
            console.error("Socket closed for sending " + a);
    }
    /**
     * <p>Return [[ProcessorAPI]] of given type.</p>
     * @param apiType The type of transformation from this API.
     */
    getApi(apiType) {
        return this.apis.find(ele => ele.type == apiType);
    }
    /**
     *
     * @param folderId retun the chain of folders going up to the root folder for the specified folder Id
     */
    getFolderChain(folderId, cache = true) {
        return this.V.searchByObject(_4d_objects_1.Folder).equals("chainBy", folderId).useCache(cache).queryObservable().pipe(operators_1.map(s => {
            if (s.items.length) {
                var base = s.items.find(ff => ff.id == folderId);
                var f = base;
                var chain = [base];
                while (f.parent) {
                    f = s.items.find(ff => ff.id == f.parent.id);
                    chain.push(f);
                }
                return chain;
            }
        }));
    }
}
exports.FourDService = FourDService;
/**
 * <p>Base component class to extend that initialises common properties, and calls [[onReady]] when initialising is finished.</p>
 */
class BaseComponent {
    constructor(_4D, _account = null) {
        this._4D = _4D;
        this._account = _account;
        this.loading = false;
    }
    /**
     * <p>Initialises some properties that will be commonly used among your components.</p>
     */
    ngOnInit() {
        this.sub = this._4D.onReady().pipe(operators_1.flatMap(aa => {
            if (this._account)
                return this._4D.setActiveTeam(this._account);
            else if (this._4D.tryingAccount)
                return this._4D.onActiveAccountReady();
            else
                return rxjs_1.of(aa[0]);
        })).subscribe(s => {
            let ls = this._4D.V.localSession();
            this.activeUser = ls ? ls.user : null;
            this.onReady();
        });
    }
    /**
     * <p>This is called when initialisation has finished. Your components should do their initialisation here.</p>
     */
    onReady() {
    }
    /**
     * <p>Unsubscribes from subscription when component destroyed.</p>
     */
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
exports.BaseComponent = BaseComponent;


/***/ }),

/***/ 264:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Message = exports.InviteRequest = exports.Annotation = exports.JobBatch = exports.Job = exports.JobType = exports.TransformGroup = exports.Project = exports.Transform = exports.DatasetGroup = exports.InvoiceItem = exports.Invoice = exports.BillingSetup = exports.Dataset = exports.Folder = exports.DatasetType = exports.PlottableModel = exports.TransformType = exports.ProcessorAPI = exports.Tag = exports.AccountableModel = exports.Account = exports.Client = exports.AccountPlan = exports.Widget = exports.EPSGCodes = void 0;
const rxjs_1 = __webpack_require__(435);
const operators_1 = __webpack_require__(968);
const vasat_1 = __webpack_require__(657);
let EXTENSIONS = {
    "fa-file-code-o": ["html", "xml", "js", "coffee", "scala", "java", "cpp", "cs", "h", "m", "sh", "bat"],
    "fa-file-pdf-o": ["pdf"],
    "fa-file-word-o": ["doc", "docx"],
    "fa-file-audio-o": ["wav", "mp3", "ogg"],
    "fa-file-video-o": ["avi", "mpg", "mkv"],
    "fa-file-image-o": ["png", "gif", "jpg", "jpeg", "tiff"],
    "fa-file-text-o": ["txt"]
};
let ignoreKeys = ['parent', 'account', 'folder', 'transform', 'dataType', 'fid'];
/**
 * <p>Reference to Coordinate Reference System (CRS). More details on EPSG can be found <a href="https://www.puzzlr.org/epsg-codes-explained/">here</a>.</p>
 */
class EPSGCodes extends vasat_1.VasatModel {
    constructor(V, args) {
        super(V, 'EPSGCodes', args);
    }
}
exports.EPSGCodes = EPSGCodes;
class Widget extends vasat_1.VasatModel {
    constructor(V, args) {
        super(V, 'Widget', args);
    }
}
exports.Widget = Widget;
/**
 * <p>Defines the cost and limitations of the [[Account]].</p>
 */
class AccountPlan extends vasat_1.VasatModel {
    constructor(V, args) {
        super(V, 'AccountPlan', args);
    }
}
__decorate([
    vasat_1.AsToManyList(Widget),
    __metadata("design:type", vasat_1.ToManyList)
], AccountPlan.prototype, "availableWidgets", void 0);
exports.AccountPlan = AccountPlan;
/**
 * <p>Client object that is used to get the token</p>
 */
class Client extends vasat_1.VasatModel {
    constructor(V, args) {
        super(V, 'Client', args);
    }
}
exports.Client = Client;
/**
 * <p>Account class that is used for access control.</p>
 */
class Account extends vasat_1.VasatModel {
    constructor(V, args) {
        super(V, 'Account', args);
    }
    GUID() {
        return this.uid;
    }
    GUID_FIELD_NAME() {
        return 'uid';
    }
    /**
     * <p>Updates values of this object with parameter object values.</p>
     * @param a The object that you want to copy values of.
     */
    set(a) {
        if (a && a.permissions) {
            this.canWrite = a.permissions.find(p => p == 'api_update');
        }
        else {
            this.canWrite = false;
        }
        return super.set(a);
    }
    /**
     * <p>Parse this object to JSON format.</p>
     */
    toJSON() {
        let o = super.toJSON();
        // delete o.permissions
        delete o.canWrite;
        return o;
    }
    /**
     * <p>Checks if the account has the passed API type enabled.</p>
     * @param apiType
     */
    hasApiEnabled(apiType) {
        return this[apiType];
    }
    /**
     * <p>Enable/Disable API type</p>
     * @param apiType The API type you want to manipulate
     * @param enable True = Enable, False = Disable
     */
    enableDisableApi(apiType, enable) {
        this[apiType] = enable;
        return this.saveObservable();
    }
    accountPlanDetails(p = this.plan) {
        return this.vasat.api('/api/Account/' + this.id + '.plan?planId=' + p.id).pipe(operators_1.map(r => r));
    }
    previewPlan(sliders, p) {
        return this.vasat.api('/api/Account/' + this.id + '.plan?planId=' + p.id, 'post', sliders).pipe(operators_1.map(r => r));
    }
    updatePlan(sliders, p) {
        return this.vasat.api('/api/Account/' + this.id + '.plan?planId=' + p.id, 'put', sliders)
            .pipe(operators_1.flatMap(_ => this.fetchObservable()));
    }
    buyCredit(amount) {
        return this.vasat.api('/api/Account/' + this.id + '.plan/' + amount, 'post', {}).pipe(operators_1.flatMap(_ => this.fetchObservable()));
    }
}
__decorate([
    vasat_1.AsClass(AccountPlan),
    __metadata("design:type", AccountPlan)
], Account.prototype, "plan", void 0);
__decorate([
    vasat_1.AsClass(Account),
    __metadata("design:type", Account)
], Account.prototype, "parent", void 0);
__decorate([
    vasat_1.AsToManyList(vasat_1.AccessGroup),
    __metadata("design:type", vasat_1.ToManyList)
], Account.prototype, "accountGroups", void 0);
__decorate([
    vasat_1.AsToManyList(vasat_1.User),
    __metadata("design:type", vasat_1.ToManyList)
], Account.prototype, "invitedUsers", void 0);
exports.Account = Account;
/**
 * <p>AccountableModel is a model with an [[Account]], so that they are not accessible to the public.</p>
 */
class AccountableModel extends vasat_1.VasatModel {
    /**
     * <p>Retrieves this object</p>
     */
    fetchObservable() {
        var res = this.vasat.searchByObjectString(this.className()).equals('id', this.id).queryObservable().pipe(operators_1.map(res => this.set(res.items[0].toJSON())));
        return res;
    }
    /**
     * <p>Updates values of this object with parameter object values.</p>
     * @param a The object that you want to copy values of.
     */
    set(a) {
        if (a && a.permissions) {
            this.canWrite = a.permissions.find(p => p == 'api_update');
            this.canDelete = a.permissions.find(p => p == 'api_delete');
        }
        else {
            this.canWrite = false;
            this.canDelete = false;
        }
        return super.set(a);
    }
    /**
     * <p>Parse this object to JSON format.</p>
     */
    toJSON() {
        let o = super.toJSON();
        delete o.permissions;
        return o;
    }
}
__decorate([
    vasat_1.AsClass(Account),
    __metadata("design:type", Account)
], AccountableModel.prototype, "account", void 0);
exports.AccountableModel = AccountableModel;
class Tag extends AccountableModel {
    constructor(V, args) {
        super(V, 'Tag', args);
    }
}
exports.Tag = Tag;
/**
 * <p>ProcessorAPIs are very similar to [[TransformType]]s in that they describe the process that a [[Dataset]] will undergo, however ProcessorAPIs are third party processes that need to be set up.
 * These ProcessorAPIs are linked to the account.</p>
 */
class ProcessorAPI extends AccountableModel {
    constructor(V, args) {
        super(V, 'ProcessorAPI', args);
    }
}
exports.ProcessorAPI = ProcessorAPI;
/**
 * <p>Defines the type of transformation that a [[Dataset]] object will undergo.</p>
 */
class TransformType extends vasat_1.VasatModel {
    constructor(V, args) {
        super(V, 'TransformType', args);
    }
    GUID() {
        return this.uid;
    }
    GUID_FIELD_NAME() {
        return 'uid';
    }
}
__decorate([
    vasat_1.AsToManyList(ProcessorAPI),
    __metadata("design:type", vasat_1.ToManyList)
], TransformType.prototype, "apis", void 0);
__decorate([
    vasat_1.AsClass(TransformType),
    __metadata("design:type", TransformType)
], TransformType.prototype, "isSubTransform", void 0);
exports.TransformType = TransformType;
/**
 * <p>PlottableModel's are models/images that can be added to and displayed on the map.</p>
 */
class PlottableModel extends AccountableModel {
    /**
     * <p>Gets <a href="https://cesiumjs.org/Cesium/Build/Documentation/Rectangle.html">Cesium Rectangle</a> of this PlottableModel object.</p>
     */
    rectangle() {
        var Cesium = window['Cesium'];
        return Cesium.Rectangle.fromDegrees(this.llng, this.llat, this.ulng, this.ulat);
    }
    /**
     * <p>Gets <a href="https://cesiumjs.org/Cesium/Build/Documentation/Cartographic.html">Cesium Cartographic</a> from longitude and latitude specified in degrees</p>
     */
    cartographic() {
        var Cesium = window['Cesium'];
        return Cesium.Cartographic.fromDegrees(this.llng, this.llat, this.lheight ? this.lheight : this.uheight);
    }
    /**
     * <p>Creates a new <a href="https://cesiumjs.org/Cesium/Build/Documentation/Cartesian3.html">Cesium Cartesian3</a> instance from a Cartographic input.</p>
     */
    catresian() {
        var Cesium = window['Cesium'];
        return Cesium.Cartographic.toCartesian(this.cartographic());
    }
}
__decorate([
    vasat_1.AsClass(TransformType),
    __metadata("design:type", TransformType
    /**
     * <p>Gets <a href="https://cesiumjs.org/Cesium/Build/Documentation/Rectangle.html">Cesium Rectangle</a> of this PlottableModel object.</p>
     */
    )
], PlottableModel.prototype, "transformType", void 0);
exports.PlottableModel = PlottableModel;
/**
 * <p>DatasetType is used to associate the [[Dataset]] with the [[TransformType]]. When a file is uploaded, the type of file should be auto-detected to determine the necessary [[TransformType]]s to be added in the appropriate lists ([[adhocTransforms]]/[[autoApplyTransforms]]).</p>
 */
class DatasetType extends AccountableModel {
    constructor(V, args) {
        super(V, 'DatasetType', args);
    }
    set(a) {
        super.set(a);
        if (a._adhocTransforms) {
            this._adhocTransforms = a._adhocTransforms.map(id => this.vasat.findCached(TransformType, id));
        }
        return this;
    }
    /**
     * <p>Parse this object to JSON format.</p>
     */
    toJSON() {
        var v = super.toJSON();
        delete v._adhocTransforms;
        return v;
    }
    GUID() {
        return this.uid;
    }
    GUID_FIELD_NAME() {
        return 'uid';
    }
}
__decorate([
    vasat_1.AsToManyList(TransformType),
    __metadata("design:type", vasat_1.ToManyList)
], DatasetType.prototype, "adhocTransforms", void 0);
__decorate([
    vasat_1.AsToManyList(TransformType),
    __metadata("design:type", vasat_1.ToManyList)
], DatasetType.prototype, "autoApplyTransforms", void 0);
exports.DatasetType = DatasetType;
/**
 * <p>Folders contain the [[Dataset]]s or [[Transform]]s.</p>
 */
class Folder extends AccountableModel {
    constructor(V, args) {
        super(V, 'Folder', args);
        this.linkedFiles = new vasat_1.ToManyList(Dataset, this, 'linkedFiles');
    }
    /**
     * <p>Updates values of this object with parameter object values.</p>
     * @param a The object that you want to copy values of.
     */
    set(a) {
        super.set(a);
        // cant get around declration order for @AsClass so resorting to manual
        if (a.forJobBatch)
            this.forJobBatch = this.vasat.findCached(JobBatch, a.forJobBatch.id) || a.forJobBatch;
        if (a.forScene)
            this.forScene = this.vasat.findCached(TransformGroup, a.forScene.id) || a.forScene;
        if (a.forProject)
            this.forProject = this.vasat.findCached(Project, a.forProject.id) || a.forProject;
        this.fid = "folder_" + this.id;
        return this;
    }
    /**
     * <p>Parse this object to JSON format.</p>
     */
    toJSON() {
        return super.toJSON();
    }
    getMeta() {
        let res = {};
        Object.keys(this).filter(k => !ignoreKeys.find(i => i == k)).forEach(k => res[k] = this[k]);
        return res;
    }
    /**
     * <p>Returns <a href="https://fontawesome.com/">Font Awesome</a> icon string identifier for folder.</p>
     * @param s
     */
    getIcon(s) {
        if (s.activeTeam.id != this.account.id) {
            return 'fa-users';
        }
        else if (!this.parent) {
            return 'fa-briefcase';
        }
        else {
            return 'fa-folder-o';
        }
    }
}
__decorate([
    vasat_1.AsClass(Folder),
    __metadata("design:type", Folder)
], Folder.prototype, "parent", void 0);
__decorate([
    vasat_1.AsClass(TransformType),
    __metadata("design:type", TransformType)
], Folder.prototype, "transform", void 0);
exports.Folder = Folder;
/**
 * <p>A file to be transformed depending on the [[TransformType]].</p>
 */
class Dataset extends AccountableModel {
    constructor(V, args, ncur) {
        super(V, 'Dataset', args);
        this.ncur = ncur;
        this.linkedInFolders = new vasat_1.ToManyList(Dataset, this, 'linkedInFolders');
    }
    /**
     * <p>Begins transform process depending on the [[TransformType]].</p>
     * @param tt [[TransformType]] you want to use
     * @param args
     */
    applyTransform(tt, args = {}, customAPI) {
        var extraURL = customAPI ? ('/' + customAPI.id) : '';
        return this.vasat.api('/api/Dataset/' + this.id + '/process/' + tt.uid + extraURL, 'post', args);
    }
    toJSON() {
        var v = super.toJSON();
        delete v.fails;
        delete v.transformIds;
        delete v.transforms;
        delete v.canPlot;
        return v;
    }
    quoteTransform(tt) {
        return this.vasat.api('/api/Dataset/' + this.id + '/process/' + tt.uid + '.quote');
    }
    uploadString(str, filename = 'data') {
        var url = this.vasat.config.host + '/api/Dataset/' + this.id + '.chunked/' + filename;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url + "?seq=0&offset=0&length=" + str.length + "&chunk=0&last=true");
        xhr.overrideMimeType("application/octet-stream");
        xhr.setRequestHeader('Content-Type', 'application/octet-stream');
        xhr.setRequestHeader('Authorization', 'Bearer ' + this.vasat.token);
        xhr.send(str);
        var sub = new rxjs_1.Subject();
        xhr.onerror = (e) => {
            sub.error(e);
            sub.complete();
        };
        xhr.onreadystatechange = () => {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (!xhr.responseText || xhr.responseText == '') {
                    sub.error(new Error("Bad response"));
                }
                var res = JSON.parse(xhr.responseText);
                if (res.status && res.status < 400) {
                    sub.next(this);
                }
                else {
                    sub.error(new Error(res.message));
                }
                sub.complete();
            }
        };
        return sub.asObservable();
    }
}
__decorate([
    vasat_1.AsClass(Folder),
    __metadata("design:type", Folder)
], Dataset.prototype, "folder", void 0);
__decorate([
    vasat_1.AsClass(DatasetType),
    __metadata("design:type", DatasetType)
], Dataset.prototype, "dataType", void 0);
__decorate([
    vasat_1.AsClass(EPSGCodes),
    __metadata("design:type", EPSGCodes)
], Dataset.prototype, "crs", void 0);
exports.Dataset = Dataset;
/**
 * <p>Stores information related to plan and pay cycle etc.</p>
 */
class BillingSetup extends AccountableModel {
    constructor(V, args) {
        super(V, 'BillingSetup', args);
    }
}
exports.BillingSetup = BillingSetup;
/**
 * <p>Invoice</p>
 */
class Invoice extends AccountableModel {
    constructor(V, args) {
        super(V, 'Invoice', args);
    }
}
exports.Invoice = Invoice;
/**
 * <p>Individual items to be charged on invoices.</p>
 */
class InvoiceItem extends AccountableModel {
    constructor(V, args) {
        super(V, 'InvoiceItem', args);
    }
}
__decorate([
    vasat_1.AsClass(Invoice),
    __metadata("design:type", Invoice)
], InvoiceItem.prototype, "invoice", void 0);
__decorate([
    vasat_1.AsClass(BillingSetup),
    __metadata("design:type", BillingSetup)
], InvoiceItem.prototype, "plan", void 0);
exports.InvoiceItem = InvoiceItem;
/**
 * <p>A group of [[Dataset]]s.</p>
 */
class DatasetGroup extends AccountableModel {
    constructor(V, args) {
        super(V, 'DatasetGroup', args);
    }
    /**
     * <p>Appends the given [[Dataset]]s.</p>
     * @param ds An array of [[Dataset]]
     */
    addChildren(ds) {
        return rxjs_1.forkJoin(ds.map(d => this.children.addObserveable(d)));
    }
    /**
     * <p>Removes the given [[Dataset]].</p>
     * @param ds An array of [[Dataset]]
     */
    delChildren(ds) {
        return rxjs_1.forkJoin(ds.map(d => this.children.removeObservable(d)));
    }
    /**
     * <p>Returns <a href=" link to vasatsearchresults ">Vasat Search Results</a>.</p>
     */
    getChildren() {
        return this.children.queryObservable();
    }
}
__decorate([
    vasat_1.AsToManyList(Dataset),
    __metadata("design:type", vasat_1.ToManyList)
], DatasetGroup.prototype, "children", void 0);
__decorate([
    vasat_1.AsClass(DatasetGroup),
    __metadata("design:type", DatasetGroup)
], DatasetGroup.prototype, "parent", void 0);
exports.DatasetGroup = DatasetGroup;
/**
 * <p>Transform objects are plottable objects. Transforms have several different [[TransformType]]s. The different types of transforms are: kml, laz, photo-dzi, terrain tiles*, three-d-tiles*, tms
 * <footer>Note: The types denoted by an asterix(*) are 3D models that are currently only supported by our Cesium helper class ([[FourdCesiumHelper]]).</footer></p>
 */
class Transform extends PlottableModel {
    constructor(V, args, ncur) {
        super(V, 'Transform', args);
        this.ncur = ncur;
    }
    /**
     * <p>Updates values of this object with parameter object values.</p>
     * @param a The object that you want to copy values of.
     */
    set(a) {
        let v = super.set(a);
        if (!this.ncur && this.outputs) {
            this.outputs = this.outputs.map(c => new Dataset(this.vasat, c, true));
        }
        return v;
    }
    /**
     * <p>Gets the [[Annotation]]s for this Transform object.</p>
     */
    getAnnotations() {
        return this.vasat.searchByObject(Annotation)
            .equals('transform', this.id)
            .sortBy('name')
            .limit(200)
            .queryObservable()
            .pipe(operators_1.map(res => res.items));
    }
    toJSON() {
        var a = super.toJSON();
        delete a.__properties;
        delete a.__detected;
        delete a.issues;
        return a;
    }
}
__decorate([
    vasat_1.AsClass(Dataset),
    __metadata("design:type", Dataset)
], Transform.prototype, "input", void 0);
__decorate([
    vasat_1.AsToManyList(Tag),
    __metadata("design:type", vasat_1.ToManyList)
], Transform.prototype, "tags", void 0);
exports.Transform = Transform;
/**
 * <p>Project is a collection of data, which can be shared with other [[User]]s or [[Client]]s.</p>
 */
class Project extends PlottableModel {
    constructor(V, args) {
        super(V, 'Project', args);
    }
    get projectFolder() {
        return this.vasat.searchByObject(Folder).equals('forProject', this.id).useCache(true).queryObservable().pipe(operators_1.map(r => {
            if (r.items.length != 1)
                throw new Error("Folders for project [" + this.id + '] returned ' + r.items.length);
            return r.items[0];
        }));
    }
    /**
     * <p>Create a new [[Folder]].</p>
     */
    addTransformsFromFolder(f, filterType) {
        var v = new vasat_1.VasatAPICall();
        var typeS = '';
        if (filterType && filterType.length) {
            filterType.forEach(f => typeS += ',' + f.id);
            typeS = typeS.substring(1);
        }
        return v.apiObservable(this.vasat, 'put', '/api/Project/' + this.id + '/addFolder/' + f.id + '/' + (filterType ? typeS : 'all'), {});
    }
    /**
     * <p>Clear all Transforms.</p>
     */
    removeAllTransforms(filterType) {
        var typeS = '';
        if (filterType && filterType.length) {
            filterType.forEach(f => typeS += ',' + f.id);
            typeS = typeS.substring(1);
        }
        var v = new vasat_1.VasatAPICall();
        return v.apiObservable(this.vasat, 'delete', '/api/Project/' + this.id + '/rmAll/' + (filterType ? typeS : 'all'));
    }
    /**
     * <p>Retrieves the list of [[TransformGroup]]s associated with this Project object.</p>
     */
    groupList() {
        var v = new vasat_1.VasatAPICall();
        return v.apiObservable(this.vasat, 'get', '/api/Project/' + this.id + '?groups=true').pipe(operators_1.map(res => {
            var aa = res.grouped;
            return aa.map(a => {
                var tg = (this.vasat.findCached(TransformGroup, a.id) || new TransformGroup(this.vasat));
                var tts = a.transforms;
                tg._cachedTransforms = tts.map(t => (this.vasat.findCached(Transform, t.id) || new Transform(this.vasat)).set(t));
                delete a.transforms;
                tg.set(a);
                return tg;
            });
        }), operators_1.tap(res => this.vasat.registerCacheClass(TransformGroup, res)));
    }
}
__decorate([
    vasat_1.AsToManyList(Transform),
    __metadata("design:type", vasat_1.ToManyList)
], Project.prototype, "transforms", void 0);
__decorate([
    vasat_1.AsToManyList(Transform),
    __metadata("design:type", vasat_1.ToManyList)
], Project.prototype, "photos", void 0);
__decorate([
    vasat_1.AsToManyList(Dataset),
    __metadata("design:type", vasat_1.ToManyList)
], Project.prototype, "datasets", void 0);
__decorate([
    vasat_1.AsToManyList(Folder),
    __metadata("design:type", vasat_1.ToManyList)
], Project.prototype, "folders", void 0);
__decorate([
    vasat_1.AsToManyList(vasat_1.User),
    __metadata("design:type", vasat_1.ToManyList)
], Project.prototype, "shareUsers", void 0);
__decorate([
    vasat_1.AsToManyList(Client),
    __metadata("design:type", vasat_1.ToManyList)
], Project.prototype, "shareClients", void 0);
__decorate([
    vasat_1.AsToManyList(Tag),
    __metadata("design:type", vasat_1.ToManyList)
], Project.prototype, "tags", void 0);
exports.Project = Project;
/**
 * <p>A group of [[Transform]] objects.</p>
 */
class TransformGroup extends AccountableModel {
    constructor(V, args) {
        super(V, 'TransformGroup', args);
        this.layerProps = {};
    }
    get sceneFolder() {
        return this.vasat.searchByObject(Folder).equals('forScene', this.id).useCache(true).queryObservable().pipe(operators_1.map(r => {
            if (r.items.length != 1)
                throw new Error("Folders for scene [" + this.id + '] returned ' + r.items.length);
            return r.items[0];
        }));
    }
    /**
     * <p>Adds all the images from the specified [[Folder]] to this TransformGroup. Action will also add the same photos to the [[Project]]s photos and any Photogrammetry [[Job]].</p>
     */
    addImagesFromFolder(f) {
        var v = new vasat_1.VasatAPICall();
        return v.apiObservable(this.vasat, 'put', '/api/TransformGroup/' + this.id + '/addFolder/' + f.id + '?access_token=' + this.vasat.token);
    }
    /**
     * <p>Remove any images associated with this TransformGroup object.</p>
     */
    removeAllImages() {
        var v = new vasat_1.VasatAPICall();
        return v.apiObservable(this.vasat, 'delete', '/api/TransformGroup/' + this.id + '/rmAllPhotos?access_token=' + this.vasat.token);
    }
    /**
     * <p>Add [[Transform]](s) to this TransformGroup object.</p>
     * @param ds Objects to add
     */
    addChildren(ds) {
        return rxjs_1.forkJoin(ds.map(d => this.children.addObserveable(d)));
    }
    /**
     * <p>Remove [[Transform]](s) to this TransformGroup object.</p>
     * @param ds Objects to remove
     */
    delChildren(ds) {
        return rxjs_1.forkJoin(ds.map(d => this.children.removeObservable(d)));
    }
    addFromFiles(ds) {
        return this.vasat.api('/api/TransformGroup/' + this.id + '/addDatasets', 'put', { "files": ds.map(d => d.id) });
    }
    /**
     * <p>Retrieves the [[Transform]]s associated with this TransformGroup object.</p>
     */
    getChildren() {
        return this.children.queryObservable();
    }
    /**
     * <p>Gets the Shapes at a given point of this TransformGroup object.</p>
     * @param latDeg Latitude in degrees
     * @param lngDeg Longitude in degrees
     * @param height
     */
    queryShapesAtPoint(latDeg, lngDeg, height) {
        return this.vasat.api('/api/TransformGroup/' + this.id + '.shape?lat=' + latDeg + '&lng=' + lngDeg + '&height' + (height || 0));
    }
    /**
     * <p>Parse this object to JSON format.</p>
     */
    toJSON() {
        var a = super.toJSON();
        delete a._cachedTransforms;
        delete a._photo_count;
        return a;
    }
    isShowing(t) {
        return this.layerProps['toggle_' + t.id];
    }
    setShowing(t, showing) {
        this.layerProps['toggle_' + t.id] = showing;
    }
    getAlpha(t) {
        return this.layerProps['alpha_' + t.id];
    }
    setAlpha(t, opacity) {
        this.layerProps['alpha_' + t.id] = opacity;
    }
    getSceneFolder() {
        return this.vasat.searchByObject(Folder)
            .equals('forScene', this.id)
            .useCache(true)
            .queryObservable()
            .pipe(operators_1.map(r => r.items[0]));
    }
}
__decorate([
    vasat_1.AsToManyList(Transform),
    __metadata("design:type", vasat_1.ToManyList)
], TransformGroup.prototype, "children", void 0);
__decorate([
    vasat_1.AsToManyList(Transform),
    __metadata("design:type", vasat_1.ToManyList)
], TransformGroup.prototype, "photos", void 0);
__decorate([
    vasat_1.AsClass(TransformGroup),
    __metadata("design:type", TransformGroup)
], TransformGroup.prototype, "parent", void 0);
__decorate([
    vasat_1.AsClass(Project),
    __metadata("design:type", Project
    /**
     * stop using this
     * @depricated
     */
    )
], TransformGroup.prototype, "project", void 0);
__decorate([
    vasat_1.AsClass(Folder),
    __metadata("design:type", Folder)
], TransformGroup.prototype, "folder", void 0);
__decorate([
    vasat_1.AsToManyList(Tag),
    __metadata("design:type", vasat_1.ToManyList)
], TransformGroup.prototype, "tags", void 0);
exports.TransformGroup = TransformGroup;
/**
 * <p>Describes the different [[TransformType]]s that the [[Job]] will undertake.</p>
 */
class JobType extends vasat_1.VasatModel {
    constructor(V, args) {
        super(V, 'JobType', args);
    }
    GUID() {
        return this.uid;
    }
    GUID_FIELD_NAME() {
        return 'uid';
    }
}
__decorate([
    vasat_1.AsClass(TransformType),
    __metadata("design:type", TransformType)
], JobType.prototype, "baseTransform", void 0);
__decorate([
    vasat_1.AsToManyList(TransformType),
    __metadata("design:type", vasat_1.ToManyList)
], JobType.prototype, "subTransforms", void 0);
exports.JobType = JobType;
/**
 * <p>Job outlines the [[Dataset]](s) that will be transformed depending on the [[JobType]]/[[TransformType]].</p>
 */
class Job extends AccountableModel {
    constructor(V, args) {
        super(V, 'Job', args);
    }
    /**
     * <p>Queries for the associated [[JobBatch]] and reurns a <a href=" linkToVasat ">VasatSearchQuery</a> containging the results.</p>
     */
    batches() {
        return this.vasat.searchByObject(JobBatch).equals('parent', this.id).equals('active', true);
    }
    /**
     * <p>Refresh the status of processing.</p>
     */
    refreshStatus() {
        return this.vasat.api(this.vasat.pathPrefix + '/Job/process/' + this.id, 'get');
    }
    /**
     * <p>Starts the processing.</p>
     * @param t
     * @param args
     */
    startTransform(t, args, customAPI) {
        var extraURL = customAPI ? ('/' + customAPI.id) : '';
        args = args || {};
        return this.vasat.api(this.vasat.pathPrefix + '/Job/process/' + this.id + '/' + t.uid + extraURL, 'post', args);
    }
    /**
     * <p>Retrieve estimated cost of Job.</p>
     */
    getEstimatedPrice(t) {
        var v = new vasat_1.VasatAPICall();
        return v.apiObservable(this.vasat, 'get', '/api/Job/' + this.id + '/checkout?access_token=' + this.vasat.token);
    }
    /**
     * <p>Start checkout process.</p>
     * @param noonce
     */
    makePayment(noonce) {
        var v = new vasat_1.VasatAPICall();
        return v.apiObservable(this.vasat, 'post', '/api/Job/' + this.id + '/checkout?access_token=' + this.vasat.token, { noonce: noonce });
    }
    quoteTransform(tt) {
        return this.vasat.api('/api/Job/' + this.id + '/process/' + tt.uid + '.quote');
    }
}
__decorate([
    vasat_1.AsClass(JobType),
    __metadata("design:type", JobType)
], Job.prototype, "jobType", void 0);
__decorate([
    vasat_1.AsClass(TransformGroup),
    __metadata("design:type", TransformGroup)
], Job.prototype, "scene", void 0);
__decorate([
    vasat_1.AsClass(ProcessorAPI),
    __metadata("design:type", ProcessorAPI)
], Job.prototype, "processorAPI", void 0);
__decorate([
    vasat_1.AsToManyList(Dataset),
    __metadata("design:type", vasat_1.ToManyList)
], Job.prototype, "inputDatasets", void 0);
__decorate([
    vasat_1.AsToManyList(Folder),
    __metadata("design:type", vasat_1.ToManyList)
], Job.prototype, "inputFolders", void 0);
exports.Job = Job;
/**
 * <p>A JobBatch is a child of a [[Job]] that is undergoing a process or has already undergone transformation. A key difference to a [[Job]] is that it only has one [[TransformType]].</p>
 * <footer>Note that you will have to create a new [[Folder]] containing the outputs.</footer>
 */
class JobBatch extends AccountableModel {
    constructor(V, args) {
        super(V, 'JobBatch', args);
    }
    getBatchFolder() {
        return this.vasat.searchByObject(Folder)
            .equals('forJobBatch', this.id)
            .useCache(true)
            .queryObservable()
            .pipe(operators_1.map(r => r.items[0]));
    }
}
__decorate([
    vasat_1.AsClass(Job),
    __metadata("design:type", Job)
], JobBatch.prototype, "parent", void 0);
__decorate([
    vasat_1.AsClass(TransformType),
    __metadata("design:type", TransformType)
], JobBatch.prototype, "transformType", void 0);
__decorate([
    vasat_1.AsToManyList(Dataset),
    __metadata("design:type", vasat_1.ToManyList)
], JobBatch.prototype, "outputs", void 0);
exports.JobBatch = JobBatch;
/**
 * <p>Annotations are plottable objects. Usually pins/markers/measurements.</p>
 */
class Annotation extends PlottableModel {
    constructor(V, args) {
        super(V, 'Annotation', args);
        this.style = {};
    }
}
__decorate([
    vasat_1.AsClass(Transform),
    __metadata("design:type", Transform)
], Annotation.prototype, "transform", void 0);
__decorate([
    vasat_1.AsClass(Project),
    __metadata("design:type", Project)
], Annotation.prototype, "project", void 0);
__decorate([
    vasat_1.AsToManyList(Tag),
    __metadata("design:type", vasat_1.ToManyList)
], Annotation.prototype, "tags", void 0);
exports.Annotation = Annotation;
class InviteRequest extends AccountableModel {
    constructor(V, args) {
        super(V, 'InviteRequest', args);
    }
    GUID() {
        return this.uid;
    }
    GUID_FIELD_NAME() {
        return 'uid';
    }
}
__decorate([
    vasat_1.AsClass(Account),
    __metadata("design:type", Account)
], InviteRequest.prototype, "targetAccount", void 0);
__decorate([
    vasat_1.AsClass(Project),
    __metadata("design:type", Project)
], InviteRequest.prototype, "targetProject", void 0);
__decorate([
    vasat_1.AsClass(vasat_1.User),
    __metadata("design:type", vasat_1.User)
], InviteRequest.prototype, "createdBy", void 0);
__decorate([
    vasat_1.AsClass(vasat_1.User),
    __metadata("design:type", vasat_1.User)
], InviteRequest.prototype, "BindUser", void 0);
exports.InviteRequest = InviteRequest;
class Message extends AccountableModel {
    constructor(V, args) {
        super(V, 'Message', args);
    }
    GUID() {
        return this.uid;
    }
    GUID_FIELD_NAME() {
        return 'uid';
    }
}
__decorate([
    vasat_1.AsClass(Message),
    __metadata("design:type", Message)
], Message.prototype, "thread", void 0);
__decorate([
    vasat_1.AsClass(InviteRequest),
    __metadata("design:type", InviteRequest)
], Message.prototype, "invite", void 0);
__decorate([
    vasat_1.AsClass(JobBatch),
    __metadata("design:type", JobBatch)
], Message.prototype, "jobBatch", void 0);
__decorate([
    vasat_1.AsClass(Transform),
    __metadata("design:type", Transform)
], Message.prototype, "transform", void 0);
__decorate([
    vasat_1.AsClass(vasat_1.User),
    __metadata("design:type", vasat_1.User)
], Message.prototype, "user", void 0);
exports.Message = Message;


/***/ }),

/***/ 151:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChunkedFileUploader = exports.ServerProcess = void 0;
const rxjs_1 = __webpack_require__(435);
/*export class BaseProcessor{

    constructor(private file:File){

    }

    isSupported():boolean {
        return false
    }

    buildDataset():Dataset{
        return null
    }
}

export class BasicProcessor{

    constructor(private file:File){

    }

    isSupported():boolean {
        return true
    }

    buildDataset():Dataset{
        return null
    }
}*/
/**
 * <p>Processing Event. Includes </p>
 */
class ServerProcess {
    update(a) {
        Object.keys(a).forEach(k => this[k] = a[k]);
        return this;
    }
}
exports.ServerProcess = ServerProcess;
/**
 * <p>Breaks files into manageable chunks for upload.</p>
 */
class ChunkedFileUploader {
    constructor(V, url, chunkSize = 1000000) {
        this.V = V;
        this.url = url;
        this.step = 5000000;
        this.progressSubject = new rxjs_1.Subject();
        this.progressObservable = this.progressSubject.asObservable();
        this.retrysB4Fail = 5;
        this.step = chunkSize;
    }
    /**
     * <p>Cancels the current XMLHttpRequest.</p>
     */
    cancel() {
        this.cnx = true;
        this.progressSubject.complete();
        if (this.currentXHR)
            this.currentXHR.abort();
    }
    /**
     * <p>Uploads the a file by fragmenting it to smaller pieces depending on the given parameters.</p>
     * @param file File to upload.
     * @param startOffset Start of offset.
     * @param seqOffset The sequence number, where 0 is first.
     */
    uploadObservable(file, startOffset, seqOffset) {
        this.start = startOffset || 0;
        this.loaded = this.start;
        this.total = file.size;
        this.progress = 0;
        var seq = seqOffset || 0;
        var reader = new FileReader();
        var self = this;
        var finishSubject = new rxjs_1.Subject();
        var obs = finishSubject.asObservable();
        var errorCount = 0;
        var blob = file.slice(self.start, self.loaded + self.step);
        var RETRYS = this.retrysB4Fail;
        reader.onload = function (e) {
            var xhr = new XMLHttpRequest();
            self.currentXHR = xhr;
            var upload = xhr.upload;
            upload.addEventListener("progress", function (evt) {
                if (evt.lengthComputable) {
                    self.progress = ((self.loaded + evt.loaded) / self.total);
                    self.progressSubject.next(self.progress);
                }
            }, false);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    if (self.cnx) {
                        finishSubject.next({ finished: false, error: null, aborted: true, chunk: self });
                        finishSubject.complete();
                        return;
                    }
                    if (!xhr.responseText || xhr.responseText == '') {
                        errorCount++;
                        if (errorCount >= RETRYS) {
                            finishSubject.next({ finished: false, error: { message: xhr.statusText, code: xhr.status }, aborted: false, chunk: self });
                            finishSubject.complete();
                        }
                        else {
                            console.log('Network error, trying again in 2 seconds');
                            setTimeout(() => reader.readAsArrayBuffer(blob), 2000);
                        }
                        return;
                    }
                    var res = JSON.parse(xhr.responseText);
                    if (res.status && res.status < 400) {
                        errorCount = 0;
                        self.loaded += self.step;
                        if (self.loaded <= self.total) {
                            self.progress = (self.loaded / self.total);
                            self.progressSubject.next(self.progress);
                            blob = file.slice(self.loaded, self.loaded + self.step);
                            reader.readAsArrayBuffer(blob);
                        }
                        else {
                            self.progress = 1;
                            self.progressSubject.next(1);
                            self.loaded = self.total;
                            finishSubject.next({ finished: true, error: null, aborted: true, chunk: self, status: res.status });
                            finishSubject.complete();
                        }
                    }
                    else {
                        finishSubject.error({ finished: false, error: res, aborted: false, chunk: self });
                        finishSubject.complete();
                        // TODO Make subject throw error
                        //finishSubject.next({finished:false,error:res,aborted:false,chunk:self})
                    }
                }
            };
            var url = self.url.startsWith(self.V.config.host) ? self.url : self.V.config.host + self.url;
            xhr.open("POST", url + "?seq=" + seq + "&offset=" + self.loaded + "&length=" + self.total + "&chunk=" + self.step + "&last=" + (self.loaded + self.step >= self.total));
            seq++;
            xhr.overrideMimeType("application/octet-stream");
            xhr.setRequestHeader('Content-Type', 'application/octet-stream');
            if (self.V && self.V.token) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + self.V.token);
            }
            xhr.send(e.target.result);
        };
        reader.readAsArrayBuffer(blob);
        return obs;
    }
}
exports.ChunkedFileUploader = ChunkedFileUploader;


/***/ }),

/***/ 874:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FourdCesiumHelper = void 0;
const rxjs_1 = __webpack_require__(435);
const _4d_objects_1 = __webpack_require__(264);
const _4d_helper_1 = __webpack_require__(869);
const cesium_renderers_layer_1 = __webpack_require__(527);
const cesium_renderers_annot_1 = __webpack_require__(122);
var Cesium = window['Cesium'];
/**
 * <p>Helper class for <a href="https://cesiumjs.org/tutorials/">Cesium</a>. Contains methods to zoom to a location and add/remove a model to the map.</p>
 * <p>You can play with a(n) (<a href="https://stackblitz.com/edit/4dmapper-sdk">angular</a> or <a href="https://stackblitz.com/edit/react-demo-cesium">react</a>) demo on stackblitz.</p>
 */
class FourdCesiumHelper extends _4d_helper_1.MapHelper {
    constructor(fourdD, viewer, cesiumObject) {
        super();
        this.fourdD = fourdD;
        this.viewer = viewer;
        if (cesiumObject)
            Cesium = cesiumObject;
        else if (!Cesium)
            Cesium = window['Cesium'];
        //this.annotations = this.viewer.scene.primitives.add(new Cesium.LabelCollection());
        this.dziDatasource = new Cesium.CustomDataSource('dzi');
        this.annotationDataSource = new Cesium.CustomDataSource('annot');
        this.annotationLabels = this.viewer.scene.primitives.add(new Cesium.LabelCollection());
        //this.viewer.dataSources.add(this.dataSource)
        this.viewer.dataSources.add(this.dziDatasource);
        this.viewer.dataSources.add(this.annotationDataSource);
        this._originalTerrainProvider = viewer.scene.terrainProvider;
        this.registerRenderer(_4d_objects_1.Transform, 'terrain', new cesium_renderers_layer_1.TerrainRenderer(this));
        this.registerRenderer(_4d_objects_1.Transform, 'terrain-tiles', new cesium_renderers_layer_1.TerrainRenderer(this));
        this.registerRenderer(_4d_objects_1.Transform, 'kml', new cesium_renderers_layer_1.KMLRenderer(this));
        this.registerRenderer(_4d_objects_1.Transform, 'geo-json', new cesium_renderers_layer_1.KMLRenderer(this));
        this.registerRenderer(_4d_objects_1.Transform, 'tms', new cesium_renderers_layer_1.TMSRenderer(this));
        this.registerRenderer(_4d_objects_1.Transform, 'three-d-tiles', new cesium_renderers_layer_1.ThreeDTileRenderer(this));
        this.registerRenderer(_4d_objects_1.Transform, 'photo-dzi', new cesium_renderers_layer_1.PhotoRenderer(this));
        this.registerRenderer(_4d_objects_1.Transform, 'thumb', new cesium_renderers_layer_1.PhotoRenderer(this));
        this.registerRenderer(_4d_objects_1.Transform, 'laz', new cesium_renderers_layer_1.LASRenderer(this));
        this.registerRenderer(_4d_objects_1.Annotation, '*', new cesium_renderers_annot_1.BlankAnnotationRenderer(this));
    }
    destroy() {
        super.destroy();
        this.viewer.dataSources.remove(this.annotationDataSource);
        this.viewer.dataSources.remove(this.dziDatasource);
    }
    /**
     * <p>Returns the respective CesiumPlottableReference object of a given [[PlottableModel]] object</p>
     * @param p [[PlottableModel]] object
     * @deprecated use #getMapObjectFor instead
     */
    getCesiumObjectFor(p) {
        var plot = this.getMapObjectFor(p);
        if (plot)
            return plot.object;
        else
            return null;
    }
    clearPlottables() {
        Object.keys(this.plotCache).forEach(k => this.removePlottable(this.plotCache[k].plottable));
    }
    sendCameraTo(t, duration = 500, args) {
        var proj = this.plotCache['_' + t.className() + '_' + t.id];
        if (proj && proj.boundingSphere)
            this.viewer.camera.flyToBoundingSphere(proj.boundingSphere);
        else if (proj && proj.position)
            this.viewer.camera.flyTo({
                destination: proj.position,
                duration: duration / 1000
            });
        else if (t instanceof _4d_objects_1.Annotation && t.camera) {
            this.viewer.camera.flyTo({
                destination: Cesium.Cartographic.toCartesian(Cesium.Cartographic.fromDegrees(t.camera.position.lng, t.camera.position.lat, t.camera.position.height)),
                duration: duration / 1000,
                orientation: {
                    heading: Cesium.Math.toRadians(t.camera.direction.heading),
                    pitch: Cesium.Math.toRadians(t.camera.direction.pitch),
                    roll: Cesium.Math.toRadians(t.camera.direction.roll)
                }
            });
        }
        else if (t instanceof _4d_objects_1.Transform && t.transformType && (t.transformType.uid == 'photo-dzi' || t.transformType.uid == 'thumb')) {
            var dest = null;
            if (args && args.vertical_invert) {
                var v = t.cartographic();
                v.height = args.vertical_invert - v.height;
                dest = Cesium.Cartographic.toCartesian(v);
            }
            else {
                dest = t.catresian();
            }
            var ori = t.heading != undefined && t.pitch != undefined && t.roll != undefined && (args && !args.ignoreOrientation) ?
                {
                    heading: Cesium.Math.toRadians(t.heading),
                    pitch: Cesium.Math.toRadians(t.pitch),
                    roll: Cesium.Math.toRadians(t.roll)
                } :
                { heading: Cesium.Math.toRadians(0),
                    pitch: Cesium.Math.toRadians(-90),
                    roll: Cesium.Math.toRadians(0)
                };
            this.viewer.camera.flyTo({
                destination: dest,
                orientation: ori
            });
        }
        else if (t instanceof _4d_objects_1.Annotation) {
            var c = t.cartographic();
            c.height = 1000;
            this.viewer.camera.flyTo({
                destination: Cesium.Cartographic.toCartesian(c),
                duration: duration / 1000
            });
        }
        else {
            this.viewer.camera.flyTo({
                destination: t.rectangle(),
                duration: duration / 1000
            });
        }
        var delaySubject = new rxjs_1.Subject();
        setTimeout(() => delaySubject.next(this.viewer.camera), duration + 100);
        return delaySubject.asObservable();
    }
    /**
     * <p>If the server supports it, get a token suffix that may be a remote storage server (eg S3 or Cloudfront URL)
     * Cesium can query resources directly rather than hit application server</p>
     * @param p [[PlottableModel]] Object
     * @param file Name of file
     * @param tier Applicable when Cloudfront is set up. Cesium allows request from one url at a time, so by providing a 'tier' which represents a different url, we can better conduct traffic. 0: default/Terrain Tiles, 1: Tile Map Service (tms), 2: 3D Tiles
     */
    getAuthenticatedUrl(p, file, tier = 0) {
        return fetch(p.file('DIRECT_TOKEN_URL') + '&tier=' + tier)
            .then(r => r.json())
            .then(r => {
            var url = p.file(file);
            if (r.status == 200 && r.payload.url && r.payload.prefix) {
                var array = r.payload.url.split('?');
                if (array.length == 2) {
                    url = array[0] + r.payload.prefix.replace(/\*/g, '') + file + '?' + array[1];
                }
            }
            return url;
        });
    }
    changeOpacity(t, opacity) {
        // opacity doesnt work for terrain and laz
        if (t.ds_type_uid !== 'laslaz' && t.ds_type_uid !== 'terrain-tiles') {
            var obj = this.getCesiumObjectFor(t);
            if (!obj)
                throw new Error("Plotted object not found for " + t.id);
            if (t.ds_type_uid === 'geo-json' || t.ds_type_uid === 'kml' || t.ds_type_uid === 'shape-zip' && obj._entityCollection) {
                obj._entityCollection.values.forEach(e => {
                    if (e.polyline && e.polyline.material && e.polyline.material.color) {
                        var color = new Cesium.Color(e.polyline.material.color._value.red, e.polyline.material.color._value.green, e.polyline.material.color._value.blue, opacity);
                        e.polyline.material.color = color;
                    }
                    else if (e.polygon && e.polygon.material && e.polygon.material.color) {
                        var color = new Cesium.Color(e.polygon.material.color._value.red, e.polygon.material.color._value.green, e.polygon.material.color._value.blue, opacity);
                        e.polygon.material.color = color;
                        if (opacity == 1) {
                            e.polygon.outline = true;
                        }
                        else {
                            e.polygon.outline = false;
                        }
                    }
                });
            }
            obj.alpha = opacity;
            obj.style = new Cesium.Cesium3DTileStyle({
                color: 'rgba(255, 255, 255,' + obj.alpha + ')'
            });
        }
    }
    resolveItem(movement) {
        var feature = this.viewer.scene.pick(movement.position);
        var def = Cesium.defined(feature);
        if (def && feature.id && feature.id.transform_id) {
            return this.plotCache['_Transform_' + feature.id.transform_id].plottable;
        }
        if (def && feature.id && feature.id.entityCollection && feature.id.entityCollection.transform_id) {
            return this.plotCache['_Transform_' + feature.id.entityCollection.transform_id].plottable;
        }
        if (def && feature.primitive && feature.primitive.transform_id) {
            return this.plotCache['_Transform_' + feature.primitive.transform_id].plottable;
        }
        if (def && !feature.content && feature.id && feature.id.fourd_ref) {
            return this.plotCache['_Annotation_' + feature.id.fourd_ref].plottable;
        }
        if (def && !feature.content && feature.primitive) {
            var f = null;
            Object.keys(this.plotCache).find(k => {
                if (this.plotCache[k].object == feature.primitive) {
                    f = this.plotCache[k].plottable;
                    return true;
                }
            });
            return f;
        }
    }
}
exports.FourdCesiumHelper = FourdCesiumHelper;


/***/ }),

/***/ 122:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LegacyAnnotationRenderer = exports.BlankAnnotationRenderer = void 0;
const rxjs_1 = __webpack_require__(435);
const _4d_helper_1 = __webpack_require__(869);
var Cesium = window['Cesium'];
class BlankAnnotationRenderer extends _4d_helper_1.Renderer {
    constructor(cesium) {
        super();
        this.cesium = cesium;
        if (!Cesium)
            Cesium = window['Cesium'];
    }
    onAdd(p, args) {
        var caption = {
            showBackground: true,
            fourd_ref: p.id,
            font: '14px monospace',
            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            //heightReference:p.lheight?Cesium.HeightReference.NONE:Cesium.HeightReference.CLAMP_TO_GROUND
        };
        caption = this.cesium.annotationLabels.add(caption);
        var ref = {
            object: caption,
            plottable: p
        };
        return rxjs_1.of(ref);
    }
    onUpdate(p, pr, args) {
        pr.object.position = p.catresian();
        pr.object.name = p.name;
        pr.object.text = p.name;
        if (args) {
            Object.keys(args).forEach(k => pr.object[k] = args[k]);
        }
        return rxjs_1.of(pr);
    }
    onRemove(obj, pr) {
        if (pr.object.label)
            this.cesium.annotationLabels.remove(pr.object.label);
        return rxjs_1.of(null);
    }
}
exports.BlankAnnotationRenderer = BlankAnnotationRenderer;
class LegacyAnnotationRenderer extends _4d_helper_1.Renderer {
    constructor(cesium) {
        super();
        this.cesium = cesium;
        if (!Cesium)
            Cesium = window['Cesium'];
    }
    onAdd(p, args) {
        var pin = {
            position: p.catresian(),
            name: p.name,
            text: p.name,
            fourd_ref: p.id,
            font: '14px monospace',
            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
            verticalOrigin: Cesium.VerticalOrigin.TOP,
            disableDepthTestDistance: 20,
            billboard: {
                heightReference: p.lheight ? Cesium.HeightReference.NONE : Cesium.HeightReference.CLAMP_TO_GROUND,
                image: null,
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM
            }
        };
        var caption = {
            position: p.catresian(),
            name: p.name,
            text: p.name,
            showBackground: true,
            fourd_ref: p.id,
            font: '14px monospace',
            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
            verticalOrigin: Cesium.VerticalOrigin.TOP,
            disableDepthTestDistance: 20
        };
        if (!p.style || !p.style.hidePin)
            pin = this.cesium.annotationDataSource.entities.add(pin);
        if (p.style && p.style.caption)
            caption = this.cesium.annotationLabels.add(caption);
        var ref = {
            object: {
                pin: !p.style || !p.style.hidePin ? pin : null,
                label: p.style && p.style.caption ? caption : null
            },
            plottable: p
        };
        // if theres a byo style function
        if (args && args.styleFunction)
            args.styleFunction(ref);
        return rxjs_1.of(ref);
    }
    onRemove(obj, pr) {
        if (pr.object.pin)
            this.cesium.annotationDataSource.entities.remove(pr.object.pin);
        if (pr.object.label)
            this.cesium.annotationLabels.remove(pr.object.label);
        return rxjs_1.of(null);
    }
}
exports.LegacyAnnotationRenderer = LegacyAnnotationRenderer;


/***/ }),

/***/ 527:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TerrainRenderer = exports.PhotoRenderer = exports.KMLRenderer = exports.ThreeDTileRenderer = exports.LASRenderer = exports.TMSRenderer = void 0;
const rxjs_1 = __webpack_require__(435);
const _4d_helper_1 = __webpack_require__(869);
var Cesium = window['Cesium'];
class TMSRenderer extends _4d_helper_1.Renderer {
    constructor(cesium) {
        super();
        this.cesium = cesium;
        if (!Cesium)
            Cesium = window['Cesium'];
    }
    onAdd(p, args) {
        var sub = new rxjs_1.Subject();
        this.cesium.getAuthenticatedUrl(p, '', 1).then(url => {
            var v = new Cesium.TileMapServiceImageryProvider({
                url: url
            });
            var layer = this.cesium.viewer.scene.imageryLayers.addImageryProvider(v);
            layer.transform_type = 'transform';
            layer.transform_id = p.id;
            v.readyPromise.then(() => {
                var plt = {
                    object: layer,
                    plottable: p
                };
                if (!p.llng || p.llng == -180) {
                    p.llng = Cesium.Math.toDegrees(v.rectangle.west);
                    p.ulng = Cesium.Math.toDegrees(v.rectangle.east);
                    p.llat = Cesium.Math.toDegrees(v.rectangle.south);
                    p.ulat = Cesium.Math.toDegrees(v.rectangle.north);
                    p.saveObservable().subscribe(_ => {
                        sub.next(plt);
                        sub.complete();
                    });
                }
                else {
                    sub.next(plt);
                    sub.complete();
                }
            });
        });
        return sub.asObservable();
    }
    onRemove(obj, pr) {
        this.cesium.viewer.scene.imageryLayers.remove(pr.object);
        return rxjs_1.of(null);
    }
}
exports.TMSRenderer = TMSRenderer;
class LASRenderer extends _4d_helper_1.Renderer {
    constructor(cesium) {
        super();
        this.cesium = cesium;
        if (!Cesium)
            Cesium = window['Cesium'];
    }
    onAdd(p, args) {
        var c = new Cesium.Cesium3DTileset({
            url: p['input'].file('data'),
            maximumScreenSpaceError: args && args.maximumScreenSpaceError ? args.maximumScreenSpaceError : (p['maximumScreenSpaceError'] || 2),
            maximumNumberOfLoadedTiles: 1000
        });
        this.cesium.viewer.scene.primitives.add(c);
        var sub = new rxjs_1.Subject();
        c.readyPromise.then(() => {
            var plt = {
                plottable: p,
                object: c,
                boundingSphere: c.boundingSphere
            };
            sub.next(plt);
            sub.complete();
        });
        return sub.asObservable();
    }
    onRemove(obj, pr) {
        this.cesium.viewer.scene.primitives.remove(pr.object);
        return rxjs_1.of(null);
    }
}
exports.LASRenderer = LASRenderer;
class ThreeDTileRenderer extends _4d_helper_1.Renderer {
    constructor(cesium) {
        super();
        this.cesium = cesium;
        if (!Cesium)
            Cesium = window['Cesium'];
    }
    onAdd(p, args) {
        var sub = new rxjs_1.Subject();
        this.cesium.getAuthenticatedUrl(p, '3Dtiles_root.json', 2).then(url => {
            var c = new Cesium.Cesium3DTileset({
                url: url,
                maximumScreenSpaceError: args && args.maximumScreenSpaceError ? args.maximumScreenSpaceError : (p['maximumScreenSpaceError'] || 2),
                maximumNumberOfLoadedTiles: 1000
            });
            c.id = p.vertical_offset;
            this.cesium.viewer.scene.primitives.add(c);
            c.transform_type = 'transform';
            c.transform_id = p.id;
            c.readyPromise.then(() => {
                var cartographic = null;
                if (c.pointCloudShading && p['pointCloudShading']) {
                    Object.keys(p['pointCloudShading']).forEach(k => c.pointCloudShading[k] = p['pointCloudShading'][k] || c.pointCloudShading[k]);
                }
                if (p['shading']) {
                    c.normalShading = false;
                    c.style = new Cesium.Cesium3DTileStyle({
                        color: 'color("lightgray")'
                    });
                }
                if (p.matrix && p.matrix.length == 16) {
                    c.modelMatrix = Cesium.Matrix4.fromArray(p.matrix);
                    cartographic = Cesium.Cartographic.fromCartesian(c.boundingSphere.center);
                    var surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0);
                    var offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, p.vertical_offset || 0);
                    var translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
                    c.modelMatrix = Cesium.Matrix4.multiplyByTranslation(c.modelMatrix, translation, {});
                }
                else {
                    cartographic = Cesium.Cartographic.fromCartesian(c.boundingSphere.center);
                    var surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0);
                    var offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, p.vertical_offset || 0);
                    var translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
                    c.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
                }
                // update the meta data of the dataset
                var plt = {
                    plottable: p,
                    object: c,
                    boundingSphere: c.boundingSphere
                };
                if (!p.llng || p.llng == -180) {
                    p.llng = Cesium.Math.toDegrees(cartographic.longitude) - 0.001;
                    p.llat = Cesium.Math.toDegrees(cartographic.latitude) - 0.001;
                    p.ulng = Cesium.Math.toDegrees(cartographic.longitude) + 0.001;
                    p.ulat = Cesium.Math.toDegrees(cartographic.latitude) + 0.001;
                    p.saveObservable().subscribe(_ => {
                        sub.next(plt);
                        sub.complete();
                    });
                }
                else {
                    sub.next(plt);
                    sub.complete();
                }
            });
        });
        return sub.asObservable();
    }
    onRemove(obj, pr) {
        this.cesium.viewer.scene.primitives.remove(pr.object);
        return rxjs_1.of(null);
    }
}
exports.ThreeDTileRenderer = ThreeDTileRenderer;
class KMLRenderer extends _4d_helper_1.Renderer {
    constructor(cesium) {
        super();
        this.cesium = cesium;
        if (!Cesium)
            Cesium = window['Cesium'];
    }
    onAdd(p, args) {
        var tt = p.transformType.uid;
        var c = tt == 'kml' ?
            Cesium.KmlDataSource.load(p.file('data'), {
                canvas: this.cesium.viewer.scene.canvas,
                transform_id: p.id,
                transform_type: 'transform'
                // clampToGround:true
            }) : Cesium.GeoJsonDataSource.load(p.file('data'), {
            stroke: p['customColor'] ? Cesium.Color.fromCssColorString(p['customColor']) : Cesium.Color.RED.withAlpha(0.5),
            fill: p['customColor'] ? Cesium.Color.fromCssColorString(p['customColor']) : Cesium.Color.RED.withAlpha(0.5),
            strokeWidth: 3,
            markerSymbol: '?',
            transform_id: p.id,
            transform_type: 'transform'
            // clampToGround:true
        });
        var obj = this.cesium.viewer.dataSources.add(c);
        var sub = new rxjs_1.Subject();
        obj.then((dataSource) => {
            var entities = dataSource.entities.values;
            dataSource.entities.transform_id = p.id;
            dataSource.entities.transform_type = 'transform';
            var colorHash = {};
            var pints = [];
            for (var i = 0; i < entities.length; i++) {
                //For each entity, create a random color based on the state name.
                //Some states have multiple entities, so we store the color in a
                //hash so that we use the same color for the entire state.
                var entity = entities[i];
                if (entity.position)
                    pints.push(entity.position.getValue());
                else if (entity.polygon)
                    entity.polygon.hierarchy.getValue().positions.forEach(p => pints.push(p));
                else if (entity.polyline)
                    entity.polyline.positions.getValue().forEach(p => pints.push(p));
            }
            var res = {
                plottable: p,
                object: dataSource
            };
            if (pints.length > 1)
                res.boundingSphere = Cesium.BoundingSphere.fromPoints(pints);
            else if (pints.length)
                res.position = pints[0];
            sub.next(res);
            sub.complete();
        });
        return sub.asObservable();
    }
    onRemove(obj, pr) {
        this.cesium.viewer.dataSources.remove(pr.object);
        //var i =this.viewer.dataSources._dataSources.findIndex( e => e._entityCollection.id === obj.object['_entityCollection'].id);
        //this.viewer.dataSources.remove(this.viewer.dataSources._dataSources[i]);
        return rxjs_1.of(null);
    }
}
exports.KMLRenderer = KMLRenderer;
class PhotoRenderer extends _4d_helper_1.Renderer {
    constructor(cesium) {
        super();
        this.cesium = cesium;
        if (!Cesium)
            Cesium = window['Cesium'];
    }
    onAdd(p, args) {
        var height = args && args.vertical_invert ? args.vertical_invert - p.uheight : p.uheight;
        var carto = Cesium.Cartographic.fromDegrees(p.llng, p.llat, height);
        var pos = Cesium.Cartographic.toCartesian(carto);
        var plotable = {
            position: pos,
            name: p.name,
            transform_id: p.id,
            transform_type: 'transform'
        };
        var color = (p['accent'] && Cesium.Color[p['accent']]) ? Cesium.Color[p['accent']].withAlpha(p['alpha'] || 0.5) : Cesium.Color.RED.withAlpha(0.5);
        // Sphere
        var defaultEntity = {
            point: {
                pixelSize: 10,
                color: color
            }
        };
        if (p.heading != undefined && p.pitch != undefined && p.roll != undefined && args && args.showOrientation) {
            plotable.orientation = Cesium.Transforms.headingPitchRollQuaternion(pos, new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(p.heading - 90), Cesium.Math.toRadians(p.pitch), Cesium.Math.toRadians(p.roll)));
            // camera icon
            defaultEntity = { model: {
                    uri: '/assets/images/camera.glb',
                    minimumPixelSize: 18,
                    maximumScale: 100,
                    scale: 0.005,
                    color: color
                }
            };
        }
        Object.assign(plotable, (args && args.entity) ? args.entity : defaultEntity);
        var obj = this.cesium.dziDatasource.entities.add(plotable);
        return rxjs_1.of({
            plottable: p,
            object: obj
        });
    }
    onRemove(obj, pr) {
        this.cesium.dziDatasource.entities.remove(pr.object);
        return rxjs_1.of(null);
    }
}
exports.PhotoRenderer = PhotoRenderer;
class TerrainRenderer extends _4d_helper_1.Renderer {
    constructor(cesium) {
        super();
        this.cesium = cesium;
        if (!Cesium)
            Cesium = window['Cesium'];
    }
    onAdd(p, args) {
        var res = rxjs_1.from(this.cesium.getAuthenticatedUrl(p, '', 0).then(url => {
            this.cesium.viewer.scene.terrainProvider = new Cesium.CesiumTerrainProvider({
                url: url,
                requestVertexNormals: true
            });
            this.cesium.viewer.scene.terrainProvider.transform_type = 'transform';
            this.cesium.viewer.scene.terrainProvider.transform_id = p.id;
            return {
                plottable: p,
                object: this.cesium.viewer.scene.terrainProvider
            };
        }));
        return res;
    }
    onRemove(obj, pr) {
        this.cesium.viewer.terrainProvider = new Cesium.EllipsoidTerrainProvider();
        return rxjs_1.of(null);
    }
}
exports.TerrainRenderer = TerrainRenderer;
/*

class TerrainTileRenderer extends Renderer<Transform>{
    constructor(private cesium:FourdCesiumHelper){
        super()
    }
    onAdd(p: Transform,args?:any): Observable<PlottableReference> {
        var res = from(this.cesium.getAuthenticatedUrl(p,'',0).then(url => {
            const tilingScheme = new Cesium.WebMercatorTilingScheme()

            this.cesium.viewer.terrainProvider =  new Cesium.CesiumTerrainProvider({
                url : url,
                requestVertexNormals: true
            });
            
            return {
                     plottable:p,
                     object:this.cesium.viewer.terrainProvider
                 }
             }))
        return res
    }
    onRemove(obj: Transform, pr: PlottableReference): Observable<PlottableReference> {
        this.cesium.viewer.terrainProvider = new Cesium.EllipsoidTerrainProvider()
        return of(null)
    }


}*/ 


/***/ }),

/***/ 570:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogleHelper = void 0;
const _4d_helper_1 = __webpack_require__(869);
const rxjs_1 = __webpack_require__(435);
/**
 * <p>Helper class for <a href="https://developers.google.com/maps/documentation/javascript/tutorial">Google Maps</a>. Contains methods to zoom to a location and add/remove a model to the map.</p>
 * <p>You can play with a(n) (<a href="https://stackblitz.com/edit/angular-demo-google">angular</a> or <a href="https://stackblitz.com/edit/react-demo-google">react</a>) demo on stackblitz.</p>
 */
class GoogleHelper extends _4d_helper_1.MapHelper {
    constructor(map, mapRef) {
        super();
        this.map = map;
        this.mapRef = mapRef;
    }
    /**
     * <p>Retrieves the url for tiles.</p>
     */
    getAuthenticatedUrl(p, file, tier = 0) {
        return fetch(p.file('DIRECT_TOKEN_URL') + '&tier=' + tier)
            .then(r => r.json())
            .then(r => {
            if (r.status == 200 && r.payload.url && r.payload.prefix) {
                var array = r.payload.url.split('?');
                array[0] += r.payload.prefix.substring(0, r.payload.prefix.length - 2) + '/' + file;
                return array;
            }
            return p.file(file).split('?');
        });
    }
    /**
     * <p>Create a map type that gets custom tiles and overlay over the google map (<a href="https://developers.google.com/maps/documentation/javascript/maptypes#OverlayMapTypes">docs</a>).</p>
     */
    setPlottable(p, args) {
        return rxjs_1.from(this.getAuthenticatedUrl(p, '').then(url => {
            var mapTypeID = p.id;
            // Create custom map type that retrieves tiles from server
            var imageMapType = new google.maps.ImageMapType({
                getTileUrl: (coord, zoom) => {
                    // Get NormalizedCoord
                    var normalizedCoord = this.getNormalizedCoord(coord, zoom);
                    if (!normalizedCoord) {
                        return null;
                    }
                    var bound = Math.pow(2, zoom);
                    return `${url[0] + zoom}/${normalizedCoord.x}/${(bound - normalizedCoord.y - 1)}.png?${url[1]}`;
                },
                tileSize: { height: 256, width: 256 },
                radius: 1738000,
                isPng: true,
                maxZoom: 20,
                name: mapTypeID
            });
            // Overlay custom map
            this.map.overlayMapTypes.insertAt(0, imageMapType);
            this.map.mapTypes.set(mapTypeID, imageMapType);
            this.map.setOptions({
                mapTypeControlOptions: {
                    mapTypeIds: [
                        mapTypeID, 'terrain'
                    ],
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
                }
            });
            return { plottable: p, object: imageMapType };
        }));
    }
    clearPlottables() {
        this.map.overlayMapTypes.clear();
    }
    getMapObjectFor(p) {
        return this.map.mapTypes[p.id];
    }
    /**
     * <p>Get the bounds from SW and NE lat and long given [[PlottableModel]] object.</p>
     */
    getBounds(p) {
        return new google.maps.LatLngBounds(new google.maps.LatLng(p.llat, p.llng), new google.maps.LatLng(p.ulat, p.ulng));
    }
    /**
     * <p>Pan the camera to specified bounds.</p>
     */
    sendCameraTo(t, duration, args) {
        var bounds = this.getBounds(t);
        this.map.fitBounds(bounds);
        this.map.panToBounds(bounds);
        var delaySubject = new rxjs_1.Subject();
        setTimeout(() => delaySubject.next(this.map), duration + 100);
        return delaySubject.asObservable();
    }
    /**
     * <p>Normalizes the coords that tiles repeat across the x axis (horizontally) (taken from <a href="https://developers.google.com/maps/documentation/javascript/maptypes#ImageMapTypes">GoogleMaps</a>).</p>
     */
    getNormalizedCoord(coord, zoom) {
        var y = coord.y;
        var x = coord.x;
        // tile range in one direction range is dependent on zoom level
        // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
        var tileRange = 1 << zoom;
        // don't repeat across y-axis (vertically)
        if (y < 0 || y >= tileRange) {
            return null;
        }
        // repeat across x-axis
        if (x < 0 || x >= tileRange) {
            x = (x % tileRange + tileRange) % tileRange;
        }
        return { x: x, y: y };
    }
    changeOpacity(t, opacity) {
        throw new Error("Not yet supported");
    }
    resolveItem(movement) {
        throw new Error("Not yet supported");
    }
}
exports.GoogleHelper = GoogleHelper;


/***/ }),

/***/ 662:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LeafletHelper = void 0;
const _4d_helper_1 = __webpack_require__(869);
const rxjs_1 = __webpack_require__(435);
/**
 * <p>Helper class for <a href="https://leafletjs.com/">Leaflet</a>. Contains methods to zoom to a location and add/remove a model to the map.</p>
 * <p>You can play with a(n) (<a href="https://stackblitz.com/edit/angular-demo-leaflet">angular</a> or <a href="https://stackblitz.com/edit/react-demo-leaflet">react</a>) demo on stackblitz.</p>
 */
class LeafletHelper extends _4d_helper_1.MapHelper {
    constructor(map, L) {
        super();
        this.L = L;
        this._objectCache = {};
        this.map = map;
    }
    getAuthenticatedUrl(p, file, tier = 0) {
        return fetch(p.file('DIRECT_TOKEN_URL') + '&tier=' + tier)
            .then(r => r.json())
            .then(r => {
            console.log('\n\n\nr: ', r, '\np: ', p.file('DIRECT_TOKEN_URL'));
            if (r.status == 200 && r.payload.url && r.payload.prefix) {
                var array = r.payload.url.split('?');
                array[0] += r.payload.prefix.substring(0, r.payload.prefix.length - 2) + '/' + file;
                return array;
            }
            return p.file(file).split('?');
        });
    }
    setPlottable(p, args) {
        var opts = {};
        if (p.transformType.uid == 'tms') {
            opts = { tms: true };
        }
        return rxjs_1.from(this.getAuthenticatedUrl(p, '{z}/{x}/{y}.png').then(url => {
            var layer = this.L.tileLayer(url[0] + '?' + url[1], opts);
            layer.addTo(this.map);
            this._objectCache[this.keyFor(p)] = layer;
            return { plottable: p, object: layer };
        }));
    }
    clearPlottables() {
        Object.keys(this._objectCache).forEach(k => this._objectCache[k].remove());
    }
    sendCameraTo(p, duration, args) {
        var zoom = 18;
        var imageBounds = [[p.llat, p.llng], [p.ulat, p.ulng]];
        this.map.flyToBounds(imageBounds, zoom);
        var delaySubject = new rxjs_1.Subject();
        setTimeout(() => delaySubject.next(this.map), duration + 100);
        return delaySubject.asObservable();
    }
    getMapObjectFor(p) {
        return this._objectCache[this.keyFor(p)];
    }
    changeOpacity(t, opacity) {
        throw new Error("Not yet supported");
    }
    resolveItem(movement) {
        throw new Error("Not yet supported");
    }
    /**
     * <p>Generate unique string key for [[PlottableModel]].</p>
     * @param p Uses the [[PlottableModel]]'s classname and id to generate key
     */
    keyFor(p) {
        return '_' + p.className() + '_' + p.id;
    }
}
exports.LeafletHelper = LeafletHelper;


/***/ }),

/***/ 499:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_models_1 = __webpack_require__(529);
exports.VasatModel = base_models_1.VasatModel;
exports.VasatAPICall = base_models_1.VasatAPICall;
exports.ToManyList = base_models_1.ToManyList;
exports.VasatSearchQuery = base_models_1.VasatSearchQuery;
exports.SearchResults = base_models_1.SearchResults;
var types_1 = __webpack_require__(994);
exports.VasatConfig = types_1.VasatConfig;
exports.VasatStorage = types_1.VasatStorage;
exports.VasatError = types_1.VasatError;
var acl_1 = __webpack_require__(542);
exports.Role = acl_1.Role;
exports.Permission = acl_1.Permission;
exports.AccessGroup = acl_1.AccessGroup;
exports.ACLModel = acl_1.ACLModel;
exports.Account = acl_1.Account;
var objectmeta_1 = __webpack_require__(447);
exports.ObjectMeta = objectmeta_1.ObjectMeta;
var user_1 = __webpack_require__(842);
exports.User = user_1.User;
exports.MeUser = user_1.MeUser;
var device_1 = __webpack_require__(651);
exports.Device = device_1.Device;
var decorators_1 = __webpack_require__(252);
exports.AsClass = decorators_1.AsClass;
exports.AsToManyList = decorators_1.AsToManyList;
var service_1 = __webpack_require__(169);
exports.Vasat = service_1.Vasat;
var veflux_1 = __webpack_require__(656);
exports.Store = veflux_1.Store;
exports.ArrayStore = veflux_1.ArrayStore;
exports.BaseEvent = veflux_1.BaseEvent;
exports.BaseSimpleEvent = veflux_1.BaseSimpleEvent;


/***/ }),

/***/ 252:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_models_1 = __webpack_require__(529);
function AsClass(_target) {
    const f = function (proto, fieldName, descriptor) {
        var target = proto.constructor;
        if (!target.__postCast) {
            // create list of fields to cast
            target.__postCast = {};
            // preserve the methods actual setter
            target.__actualSet = proto.set;
            // give class new setter that casts
            proto.set = function (a) {
                // do old setting
                var v = target.__actualSet.bind(this)(a);
                // then go through registered castTypes
                Object.keys(target.__postCast).filter(i => a[i]).forEach(i => {
                    let suppliedObj = a[i];
                    let clazz = target.__postCast[i];
                    let className = this.vasat.classNameForType(clazz);
                    if (suppliedObj instanceof clazz) {
                        this[i] = suppliedObj;
                    }
                    else {
                        this[i] = this.vasat.findCached(className, suppliedObj.id) || new clazz(this.vasat).set(suppliedObj);
                    }
                });
                return v;
            };
        }
        // add this type to cast list
        target.__postCast[fieldName] = _target;
        return descriptor;
    };
    return f;
}
exports.AsClass = AsClass;
function AsToManyList(_target) {
    const f = function (proto, fieldName, descriptor) {
        if (!proto.__manyToManys) {
            // create list of fields to cast
            proto.__manyToManys = {};
            // preserve the methods actual setter
            proto.__actualInit = proto.setVals;
            proto.setVals = function (a) {
                var v = this.__actualInit.bind(this)(a);
                Object.keys(this.__manyToManys).forEach(m => this[m] = new base_models_1.ToManyList(proto.__manyToManys[m], this, m));
            };
        }
        proto.__manyToManys[fieldName] = _target;
    };
    return f;
}
exports.AsToManyList = AsToManyList;


/***/ }),

/***/ 542:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_models_1 = __webpack_require__(529);
const decorators_1 = __webpack_require__(252);
const user_1 = __webpack_require__(842);
class ACLModel extends base_models_1.VasatModel {
    set(a) {
        super.set(a);
        if (this.permissions) {
            this.canRead = !!this.permissions.find(p => p == 'api_read');
            this.canWrite = !!this.permissions.find(p => p == 'api_update');
            this.canDelete = !!this.permissions.find(p => p == 'api_delete');
        }
        return this;
    }
    toJSON() {
        let o = super.toJSON();
        let res = {};
        Object.keys(o).filter(k => k != 'canRead' && k != 'canWrite').forEach(k => res[k] = o[k]);
        delete o.permissions;
        delete o.canDelete;
        delete o.canRead;
        delete o.canWrite;
        return res;
    }
}
exports.ACLModel = ACLModel;
class AccessGroup extends base_models_1.VasatModel {
    constructor(V) {
        super(V, 'AccessGroup');
    }
}
__decorate([
    decorators_1.AsToManyList(user_1.User),
    __metadata("design:type", base_models_1.ToManyList)
], AccessGroup.prototype, "users", void 0);
exports.AccessGroup = AccessGroup;
class Permission extends base_models_1.VasatModel {
    constructor(V) {
        super(V, 'Permission');
    }
}
exports.Permission = Permission;
class Role extends base_models_1.VasatModel {
    constructor(V) {
        super(V, 'Role');
    }
}
__decorate([
    decorators_1.AsToManyList(Permission),
    __metadata("design:type", base_models_1.ToManyList)
], Role.prototype, "permissions", void 0);
exports.Role = Role;
class Account extends ACLModel {
    constructor(vasat, r) {
        super(vasat, 'Account', r);
    }
    set(a) {
        super.set(a);
        return this;
    }
}
__decorate([
    decorators_1.AsToManyList(AccessGroup),
    __metadata("design:type", base_models_1.ToManyList)
], Account.prototype, "accountGroups", void 0);
exports.Account = Account;


/***/ }),

/***/ 529:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const rxjs_1 = __webpack_require__(435);
const operators_1 = __webpack_require__(968);
const types_1 = __webpack_require__(994);
class VasatAPICall {
    apiObservable(vasat, meth, url, obj, args) {
        this._loading = true;
        let o = vasat._http(meth, url, obj).pipe(operators_1.flatMap(r => {
            var resp = r;
            return this.processResp(vasat, meth, url, resp, obj, args);
        }), operators_1.catchError((e) => {
            let ve = e['status'] && e['message'] && e['version'] ? new types_1.VasatError(e, null) : new types_1.VasatError({ status: 100001, message: 'Netwok connection issue', version: "", time: new Date().getTime() }, e);
            if (e instanceof types_1.VasatError)
                ve = e;
            if (args && args['pass_error'])
                return rxjs_1.of(ve);
            else
                throw ve;
        }));
        return o;
    }
    processResp(vasat, meth, url, resp, obj, args) {
        this._loading = false;
        if (!resp.status || resp.status >= 400) {
            this._error = resp;
            if (resp.status == 405) {
                if (vasat.localSession()) {
                    vasat.invalidateSession();
                }
            }
            //console.log("Enter API error: " + JSON.stringify(resp))
            if (args && args['pass_error'])
                return rxjs_1.of(new types_1.VasatError(resp, null));
            else
                throw new types_1.VasatError(resp, null);
        }
        else {
            this._error = null;
            return this.postProcess(meth, url, resp, obj, args);
        }
    }
    postProcess(meth, url, resp, obj, args) {
        return rxjs_1.of(resp.payload);
    }
}
exports.VasatAPICall = VasatAPICall;
class VasatModel extends VasatAPICall {
    constructor(vasat, _objType, vars) {
        super();
        this.vasat = vasat;
        this._objType = _objType;
        this.props = {}; // Default empty prompts rather than null
        this.setVals(vars);
    }
    setVals(vars) {
        if (vars) {
            var t = typeof vars;
            if (t == 'object') {
                this.set(vars);
            }
            else {
                this.id = vars;
            }
        }
    }
    onReady() {
        //console.log('onReady ' + this.loading)
        if (!this.loading)
            return rxjs_1.of(this);
        else
            return this.loading;
    }
    set(args) {
        Object.keys(args).forEach((k) => {
            // dont override toManyLists
            if (!(this[k] instanceof ToManyList))
                this[k] = args[k];
        });
        return this;
    }
    urlRoot() {
        return this.vasat.pathPrefix + '/' + this._objType;
    }
    urlPath() {
        if (this.id && this['GUID']) {
            return this.urlRoot() + "/" + this['GUID']();
        }
        else if (this.id) {
            return this.urlRoot() + "/" + this.id;
        }
        else
            return this.urlRoot();
    }
    fetchObservable() {
        if (!this.id) {
            return rxjs_1.of(this);
        }
        else {
            this.loading = this.apiObservable(this.vasat, 'get', this.urlPath(), null, { pass_error: false }).pipe(operators_1.map(o => {
                return o;
            }), operators_1.share());
            return this.loading;
        }
    }
    saveObservable() {
        let json = this.toJSON();
        this.loading = this.apiObservable(this.vasat, (this.id ? 'put' : 'post'), this.urlPath(), json, { pass_error: false }).pipe(operators_1.map(o => {
            return o;
        }), operators_1.share());
        return this.loading;
    }
    destroyObservable(params) {
        if (!this.id) {
            return rxjs_1.of(this);
        }
        else if (!this.loading) {
            this.loading = this.apiObservable(this.vasat, 'delete', this.urlPath() + ((params) ? '?' + params : ''), null, { pass_error: false }).pipe(operators_1.share());
        }
        return this.loading;
    }
    processResp(vasat, meth, url, resp, obj, args) {
        return super.processResp(vasat, meth, url, resp, obj, args).pipe(operators_1.flatMap(s => {
            this.loading = null;
            if (s instanceof types_1.VasatError) {
                args.pass_error = false;
                //console.log('throwing!' + s)
                throw s;
            }
            if (meth == 'delete') {
                this._deleted = true;
                return rxjs_1.of(null);
            }
            else if (resp.payload && meth != 'put') {
                this.set(resp.payload);
                return this.postSet(resp.payload);
            }
            else {
                return rxjs_1.of(this);
            }
        }));
    }
    postSet(objs, scope) {
        return rxjs_1.of(this);
    }
    toJSON(shallow) {
        var refed = [];
        return this._toJSON(this, 0, refed);
    }
    _toJSON(the_obj, depth, refMap) {
        if (the_obj == null) {
            return null;
        }
        else if (Array.isArray(the_obj)) {
            let a = the_obj;
            return the_obj.map((a) => this._toJSON(a, depth + 1, refMap));
        }
        else if (the_obj instanceof Date) {
            return the_obj.getTime();
        }
        else if (typeof the_obj == 'object') {
            // if this object has already been serialized, you cant serialize it again
            if (refMap.find((r) => r == the_obj) && depth) {
                if (the_obj instanceof VasatModel) {
                    var objTemp = { id: the_obj['id'], type: the_obj['_objType'] };
                    if (the_obj['GUID'] && the_obj['GUID_FIELD_NAME']) {
                        objTemp[the_obj['GUID_FIELD_NAME']()] = the_obj['GUID']();
                    }
                    return objTemp;
                }
                else {
                    console.warn("Warning recursive object in JSON ");
                    console.log(the_obj);
                    return null;
                }
            }
            refMap.push(the_obj);
            var json = {};
            Object.keys(the_obj).filter((k) => k != 'loading' && k != '_listenTos' && k != 'V' && k != '_eventBus' && k != '_error' && k != '_loading' && k != '_deleted' && k != '_objType' && k != 'vasat').forEach((k) => {
                if (!(the_obj[k] instanceof ToManyList)) {
                    json[k] = this._toJSON(the_obj[k], depth + 1, refMap);
                }
            });
            if (the_obj instanceof VasatModel && !the_obj['type']) {
                let vm = the_obj;
                json['type'] = vm._objType;
            }
            return json;
        }
        else {
            return the_obj;
        }
    }
    file(fn, cache = true) {
        return this.rootPath() + '/' + fn +
            (!this.vasat.config.useCookies || !cache ? '?' : '') +
            (this.vasat.config.useCookies ? '' : 'access_token=' + this.vasat.token) +
            (!this.vasat.config.useCookies ? '&' : '') +
            (cache ? '' : '__rand=' + Math.random());
    }
    rootPath() {
        return this.vasat.config.host + this.urlPath();
    }
    findFile(fn) {
        if (!this.files)
            return null;
        if (Array.isArray(this.files)) {
            return this.files.find(f => f.name == fn);
        }
        else if (typeof this.files == 'object') {
            return this.files[fn];
        }
    }
    className() {
        return this._objType;
    }
}
exports.VasatModel = VasatModel;
class VasatSearchQuery extends VasatAPICall {
    constructor(clazz, vasat, searchUrl) {
        super();
        this.clazz = clazz;
        this.vasat = vasat;
        this.searchUrl = searchUrl;
        this.queryParams = { limit: 25 };
        this._resSubject = new rxjs_1.Subject();
        this.items = this._resSubject.asObservable();
        this.resultCache = [];
    }
    _castToString(v) {
        if (v == null) {
            return "null";
        }
        else if (v instanceof VasatModel) {
            return "" + v.id;
        }
        else if (v instanceof Date) {
            return "" + v.getTime();
        }
        else {
            return "" + v;
        }
    }
    isNull(column) {
        this.queryParams[column] = "null";
        return this;
    }
    isNotNull(column) {
        this.queryParams[column] = "!null";
        return this;
    }
    complexQuery(value) {
        this.queryParams['query'] = JSON.stringify(value);
        return this;
    }
    equals(column, value) {
        this.queryParams[column] = this._castToString(value);
        return this;
    }
    equalsAny(column, value) {
        let s = "";
        value.forEach(v => s += this._castToString(value) + "|");
        if (s.length)
            s = s.substring(0, s.length - 1);
        this.equals(column, s);
        return this;
    }
    contains(column, value) {
        this.queryParams[column] = "~" + this._castToString(value);
        return this;
    }
    greaterThan(column, value) {
        this.queryParams[column] = ">" + this._castToString(value);
        return this;
    }
    lessThan(column, value) {
        this.queryParams[column] = "<" + this._castToString(value);
        return this;
    }
    notEquals(column, value) {
        this.queryParams[column] = "!" + this._castToString(value);
        return this;
    }
    notContains(column, value) {
        this.queryParams[column] = "!~" + this._castToString(value);
        return this;
    }
    notGreaterThan(column, value) {
        this.queryParams[column] = "!>" + this._castToString(value);
        return this;
    }
    notLessThan(column, value) {
        this.queryParams[column] = "!<" + this._castToString(value);
        return this;
    }
    sortBy(column, descend) {
        this.queryParams['sortby'] = column;
        this.queryParams['sortbyorder'] = descend ? 'down' : 'up';
        return this;
    }
    limit(limit) {
        this.queryParams['limit'] = limit;
        return this;
    }
    offset(offset) {
        this.queryParams['offset'] = offset;
        return this;
    }
    query() {
        return this._query(false);
    }
    queryObservable() {
        return this._query(true);
    }
    queryObservableBYO(searchRes) {
        return this._query(true, searchRes);
    }
    remove(obj) {
        this.removeObservable(obj).subscribe();
    }
    removeObservable(obj) {
        return this.vasat.api(this.vasat.pathPrefix + '/' + this.searchUrl + '/' + obj.id, 'delete').pipe(operators_1.map(r => {
            if (this.resultCache.find(a => a == obj)) {
                this.resultCache = this.resultCache.filter(a => a != obj);
                this._resSubject.next(this.resultCache);
            }
            return r;
        }));
    }
    useCache(cache) {
        this._useCache = cache;
        return this;
    }
    _query(ob, searchRes) {
        var fn = this.clazz;
        var bm = new fn(this.vasat);
        var serialize = function (obj) {
            var str = [];
            for (var p in obj)
                if (obj.hasOwnProperty(p)) {
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
            return str.join("&");
        };
        var enc = serialize(this.queryParams);
        var hasQ = enc.length;
        let url = this.searchUrl ? this.vasat.pathPrefix + '/' + this.searchUrl : bm.urlRoot();
        if (ob)
            return this.apiObservable(this.vasat, 'get', url + (hasQ ? ("?" + enc) : ''), null, { res: searchRes }).pipe(operators_1.map(r => {
                this._resSubject.next(r.items);
                this.resultCache = r.items;
                return r;
            }));
        else
            return this.apiObservable(this.vasat, 'get', url + (hasQ ? ("?" + enc) : ''), null, { res: searchRes }).subscribe();
    }
    postProcess(meth, url, resp, postObj, args) {
        // cast items into the object type
        var items = resp.payload.map((cur) => {
            if (this._useCache) {
                let cached = this.vasat.findCached(this.clazz, cur.id);
                cached = (cached || new this.clazz(this.vasat, ''));
                return cached.set(cur);
            }
            else {
                return new this.clazz(this.vasat, '').set(cur);
            }
        });
        if (this._useCache) {
            this.vasat.registerCacheClass(this.clazz, items);
        }
        let scope = {};
        return (items.length ? rxjs_1.forkJoin(items.map(i => i.postSet(i, scope))) : rxjs_1.of(items)).pipe(operators_1.map(_ => {
            // if there was a BYO search results update it
            if (args && args['res']) {
                var sr = args['res'];
                sr.items = items;
                sr.setFromResponse(resp, this.queryParams.limit);
                return sr;
            }
            else
                return new SearchResults(this.clazz, resp, this.queryParams, this, this.queryParams.limit, items, this.vasat);
        }));
    }
}
exports.VasatSearchQuery = VasatSearchQuery;
class SearchResults {
    constructor(clazz, resp, query, queryObj, limit, items, vasat) {
        this.clazz = clazz;
        this.resp = resp;
        this.query = query;
        this.queryObj = queryObj;
        this.items = items;
        this.vasat = vasat;
        this.setFromResponse(resp, limit);
        this.pageUpdate = new rxjs_1.Subject();
        this.pageUpdate
            .asObservable().pipe(operators_1.debounceTime(300), operators_1.distinctUntilChanged())
            .subscribe((n) => this.currentPage = n);
    }
    setFromResponse(resp, limit) {
        this._currentPage = Math.floor(resp.offset / limit);
        this.pages = Math.ceil(resp.total / limit);
        this.total = resp.total;
        this.offset = resp.offset;
    }
    get limit() {
        return this.query['limit'];
    }
    get sortBy() {
        return this.query['sortby'];
    }
    get sortDown() {
        return this.query['sortbyorder'] == 'down';
    }
    get currentPageP1() {
        return this._currentPage + 1;
    }
    set currentPageP1(p) {
        this.pageUpdate.next(!p ? 0 : p - 1);
    }
    get currentPage() {
        return this._currentPage;
    }
    set sortBy(s) {
        if (s != this.sortBy) {
            this.queryObj
                .sortBy(s, this.sortDown)
                .queryObservableBYO(this).subscribe(r => {
            });
        }
    }
    set limit(s) {
        if (s != this.limit) {
            this.queryObj
                .limit(s)
                .queryObservableBYO(this).subscribe(r => {
            });
        }
    }
    set sortDown(s) {
        if (this.sortDown != s) {
            this.queryObj
                .sortBy(this.sortBy, s)
                .queryObservableBYO(this).subscribe(r => {
            });
        }
    }
    set currentPage(p) {
        if (p != this._currentPage) {
            this.queryObj
                .offset(p * this.limit)
                .queryObservableBYO(this).subscribe(r => {
            });
        }
        this._currentPage = p;
    }
    refresh() {
        this.queryObj
            .queryObservableBYO(this).subscribe(r => {
        });
    }
}
exports.SearchResults = SearchResults;
class ToManyList extends VasatSearchQuery {
    constructor(clazz, parent, name) {
        super(clazz, parent.vasat, parent.urlRoot());
        this.parent = parent;
        this.name = name;
    }
    _updateURL() {
        this.searchUrl = this.parent._objType + '/' + this.parent.id + '.' + this.name;
    }
    _query(ob, sr) {
        this._updateURL();
        return super._query(ob, sr);
    }
    add(obj) {
        this.addObserveable(obj).subscribe();
    }
    addObserveable(obj) {
        this._updateURL();
        return this.vasat.api(this.vasat.pathPrefix + '/' + this.searchUrl + '/' + obj.id, 'post', { id: obj.id }).pipe(operators_1.map(r => {
            if (!this.resultCache.find(a => a == obj)) {
                this.resultCache.push(obj);
                this._resSubject.next(this.resultCache);
            }
            return r;
        }));
    }
    remove(obj) {
        this.removeObservable(obj).subscribe();
    }
    removeObservable(obj) {
        this._updateURL();
        return this.vasat.api(this.vasat.pathPrefix + '/' + this.searchUrl + '/' + obj.id, 'delete').pipe(operators_1.map(r => {
            if (this.resultCache.find(a => a == obj)) {
                this.resultCache = this.resultCache.filter(a => a != obj);
                this._resSubject.next(this.resultCache);
            }
            return r;
        }));
    }
}
exports.ToManyList = ToManyList;


/***/ }),

/***/ 651:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_models_1 = __webpack_require__(529);
class Device extends base_models_1.VasatModel {
    constructor(vasat, id) {
        super(vasat, 'Device', id);
    }
    toJSON() {
        var dm = this.vasat.deviceMeta();
        var vars = {
            id: this.id || null,
            pushRegId: this.pushRegId,
            allowPush: this.allowPush,
            pushRegIdSent: this.pushRegIdSent,
        };
        Object.keys(vars).forEach(k => dm[k] = vars[k]);
        return dm;
    }
}
exports.Device = Device;
class BrowserDeviceMeta {
    guid() {
        var nav = window.navigator;
        var screen = window.screen;
        var guid = '' + nav.mimeTypes.length;
        guid += nav.userAgent.replace(/\D+/g, '');
        guid += nav.plugins.length;
        guid += ('' + screen.height) || '';
        guid += ('' + screen.width) || '';
        guid += ('' + screen.pixelDepth) || '';
        guid += ('' + Math.random());
        return guid;
    }
    browserV() {
        var nVer = navigator.appVersion;
        var nAgt = navigator.userAgent;
        var browserName = navigator.appName;
        var fullVersion = '' + parseFloat(navigator.appVersion);
        var majorVersion = parseInt(navigator.appVersion, 10);
        var nameOffset, verOffset, ix;
        // In Opera, the true version is after "Opera" or after "Version"
        if ((verOffset = nAgt.indexOf("Opera")) != -1) {
            browserName = "Opera";
            fullVersion = nAgt.substring(verOffset + 6);
            if ((verOffset = nAgt.indexOf("Version")) != -1)
                fullVersion = nAgt.substring(verOffset + 8);
        }
        // In MSIE, the true version is after "MSIE" in userAgent
        else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
            browserName = "Microsoft Internet Explorer";
            fullVersion = nAgt.substring(verOffset + 5);
        }
        // In Chrome, the true version is after "Chrome" 
        else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
            browserName = "Chrome";
            fullVersion = nAgt.substring(verOffset + 7);
        }
        // In Safari, the true version is after "Safari" or after "Version" 
        else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
            browserName = "Safari";
            fullVersion = nAgt.substring(verOffset + 7);
            if ((verOffset = nAgt.indexOf("Version")) != -1)
                fullVersion = nAgt.substring(verOffset + 8);
        }
        // In Firefox, the true version is after "Firefox" 
        else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
            browserName = "Firefox";
            fullVersion = nAgt.substring(verOffset + 8);
        }
        // In most other browsers, "name/version" is at the end of userAgent 
        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
            browserName = nAgt.substring(nameOffset, verOffset);
            fullVersion = nAgt.substring(verOffset + 1);
            if (browserName.toLowerCase() == browserName.toUpperCase()) {
                browserName = navigator.appName;
            }
        }
        // trim the fullVersion string at semicolon/space if present
        if ((ix = fullVersion.indexOf(";")) != -1)
            fullVersion = fullVersion.substring(0, ix);
        if ((ix = fullVersion.indexOf(" ")) != -1)
            fullVersion = fullVersion.substring(0, ix);
        majorVersion = parseInt('' + fullVersion, 10);
        if (isNaN(majorVersion)) {
            fullVersion = '' + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }
        return {
            browserName: browserName,
            fullVersion: fullVersion,
            majorVersion: majorVersion
        };
    }
    getMeta() {
        var bo = this.browserV();
        var n = navigator;
        return {
            name: bo.browserName + " - " + bo.fullVersion,
            remoteID: this.guid(),
            deviceType: {
                deviceModel: bo.browserName + ' ' + bo.majorVersion,
                deviceMake: 'Browser',
                deviceOSName: navigator.platform,
                deviceOSVersion: n['oscpu'] || '?'
            }
        };
    }
}
exports.BrowserDeviceMeta = BrowserDeviceMeta;


/***/ }),

/***/ 447:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const acl_1 = __webpack_require__(542);
const base_models_1 = __webpack_require__(529);
class ObjectMeta extends acl_1.ACLModel {
    constructor(vasat, r) {
        super(vasat, 'ObjectMeta', r);
        this.account_acl = {};
        this.acl = [];
    }
    set(a) {
        super.set(a);
        var self = this;
        var reg = this.vasat.registeredClassForString(self.uid);
        if (!reg) {
            var self = this;
            reg = class StubImpl extends base_models_1.VasatModel {
                constructor() {
                    super(self.vasat, self.uid);
                }
                className() {
                    return self.uid;
                }
            };
            this.vasat.registerClass(reg);
        }
        this.stubClazz = reg;
        return this;
    }
    toJSON() {
        let o = super.toJSON();
        delete o.account_acl;
        delete o.acl_createSqns;
        delete o.acl_searchSqns;
        delete o.acl;
        delete o.selected;
        delete o.canDelete;
        delete o.permissions;
        delete o.type;
        return o;
    }
    canWriteAcl(accounts) {
        var res;
        res = (this.account_acl ?
            Object.keys(this.account_acl).filter(k => this.account_acl[k].find(s => s == 'asset_create') && accounts.find(a => a.uid == k)).length > 0
            :
                false) || (this.acl.find(s => s == 'api_create') ? true : false);
        return res;
    }
}
exports.ObjectMeta = ObjectMeta;


/***/ }),

/***/ 994:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
class VasatError {
    constructor(resp, e) {
        this.status = resp.status;
        this.message = resp.message;
        this.payload = resp.payload;
        this.error = e;
    }
}
exports.VasatError = VasatError;
class VasatStorage {
    constructor() {
        this.ls = window['localStorage'];
    }
    set(key, v) {
        this.ls[key] = JSON.stringify(v);
    }
    get(key) {
        return this.ls[key] ? JSON.parse(this.ls[key]) : null;
    }
    getWindow() {
        return window;
    }
    del(key) {
        delete this.ls[key];
    }
}
exports.VasatStorage = VasatStorage;
class VasatConfig {
    constructor(host, clientId, clientSecret, useCookies, debug) {
        this.host = host;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.useCookies = useCookies;
        this.debug = debug;
    }
}
exports.VasatConfig = VasatConfig;


/***/ }),

/***/ 842:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_models_1 = __webpack_require__(529);
class User extends base_models_1.VasatModel {
    constructor(vasat, id) {
        super(vasat, 'User', id);
        this.json = {}; // Default emtpy json field for user.
    }
    setPassword(old, newPass) {
        return this.vasat.api(this.urlPath(), 'put', { oldp: old, newp: newPass, newp2: newPass });
    }
    changePassword(old, newPass, confirmNewPass) {
        return this.vasat.api(this.urlPath(), 'put', { oldp: old, newp: newPass, newp2: confirmNewPass });
    }
}
exports.User = User;
class MeUser extends User {
    urlPath() {
        return '/api/me';
    }
    constructor(vasat, id) {
        super(vasat, id);
    }
}
exports.MeUser = MeUser;


/***/ }),

/***/ 169:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const rxjs_1 = __webpack_require__(435);
const operators_1 = __webpack_require__(968);
const types_1 = __webpack_require__(994);
const base_models_1 = __webpack_require__(529);
const user_1 = __webpack_require__(842);
const device_1 = __webpack_require__(651);
class Vasat {
    constructor(config, storage) {
        this.config = config;
        this.storage = storage;
        this.pathPrefix = "/api";
        // Events
        this._logoutEvent = new rxjs_1.Subject();
        this.onLogout = this._logoutEvent.asObservable().pipe(operators_1.share());
        this._errorEvent = new rxjs_1.Subject();
        this.onErrorEvent = this._errorEvent.asObservable().pipe(operators_1.share());
        this._modelCache = {};
        this._cacheClass = {};
        this._modelCacheHash = {};
        this.services = [];
        this.servicesLoading = null;
        this._defaultDeviceMeta = new device_1.BrowserDeviceMeta();
        // check if storage is null or is not injected so we use the default one
        if (!this.storage) {
            this.storage = new types_1.VasatStorage();
        }
        this._sessionSubject = new rxjs_1.Subject();
        this._sessionObservable = this._sessionSubject.asObservable().pipe(operators_1.map((a) => {
            if (a instanceof types_1.VasatError) {
                throw a;
            }
            return a;
        }));
        let s = this.localSession();
        if (config.debug) {
            let session = "\n\nsession\t\t= Nil\n";
            if (s) {
                let expr = "Nil";
                let exp = s.expires_by;
                if (exp) {
                    exp = (s.expires_by - new Date().getTime()) / 6000;
                    let unit = 'mins';
                    if (exp > 100) {
                        exp = exp / 60;
                        unit = 'hrs';
                    }
                }
                session = '\n\nsession \t= ' + s.access_token +
                    '\nexpires \t= ' + expr +
                    '\nuser \t\t= ' + (s.user ? s.user.name + ' [' + s.user.id + ']' : 'Nil') + '\n';
            }
            console.log('#### Vasat Instance ####\n' +
                '\nhost \t\t= ' + this.config.host +
                '\nclient \t\t= ' + this.config.clientId + session);
        }
    }
    clientKey() {
        return 'v_' + this.config.clientId + "_" + this.config.host.replace(/[\/\:\.\-]+/g, '_');
    }
    registerCacheClass(obj, items, overrideExisting) {
        let key = null;
        if ((typeof obj) == 'string')
            key = obj;
        else {
            key = this.classNameForType(obj);
        }
        if (!this._cacheClass[key] && (typeof obj) != 'string')
            this.registerClass(obj);
        if (!this._modelCache[key] || overrideExisting) {
            this._modelCache[key] = [];
            this._modelCacheHash[key] = {};
        }
        let curCache = this._modelCache[key];
        let curCacheHash = this._modelCacheHash[key];
        items.forEach(i => {
            // just blindly push
            if (overrideExisting) {
                curCache.push(i);
                if (i.id)
                    curCacheHash['_' + i.id] = i;
            }
            else {
                if (i.id && curCacheHash['_' + i.id])
                    curCacheHash['_' + i.id].set(i.toJSON());
                else {
                    curCache.push(i);
                    if (i.id)
                        curCacheHash['_' + i.id] = i;
                }
            }
        });
    }
    classNameForType(obj) {
        var t = new obj(this);
        return t.className();
    }
    registerClass(obj) {
        let key = this.classNameForType(obj);
        if (!this._cacheClass[key])
            this._cacheClass[key] = obj;
    }
    findCached(obj, id) {
        let key = (typeof obj) == 'string' ? obj : this.classNameForType(obj);
        if (this._modelCache[key] && typeof id == 'number')
            return this._modelCacheHash[key]['_' + id];
        else if (this._modelCache[key] && typeof id == 'function')
            return this._modelCache[key].find(o => id(o));
        return null;
    }
    getCached(obj) {
        let key = (typeof obj) == 'string' ? obj : this.classNameForType(obj);
        return this._modelCache[key];
    }
    filterCached(obj, id) {
        let key = (typeof obj) == 'string' ? obj : this.classNameForType(obj);
        if (this._modelCache[key] && typeof id == 'number')
            if (this._modelCacheHash[key]['_' + id])
                return [this._modelCacheHash[key]['_' + id]];
            else
                return [];
        else if (this._modelCache[key] && typeof id == 'function')
            return this._modelCache[key].filter(o => id(o));
        return null;
    }
    registeredClassForString(key) {
        return this._cacheClass[key];
    }
    sessionObservable(fire = false) {
        if (fire) {
            setTimeout(() => this._sessionSubject.next(this.localSession()), 10);
        }
        return this._sessionObservable;
    }
    onReady() {
        let ls = this.localSession();
        if (ls) {
            console.log('existsing');
            return rxjs_1.of(ls);
        }
        else if (this._loadingSession) {
            console.log('waitload');
            return this._loadingSession;
        }
        else {
            console.log('startload');
            return this.loginWithClientCredentialsObservable();
        }
    }
    localSession() {
        let key = this.clientKey();
        let sess = this.storage.get(key);
        if (!sess || (sess['expires_by'] && sess['expires_by'] < new Date().getTime())) {
            this.token = null;
            this.storage.del(key);
            return null;
        }
        else {
            this.token = sess['access_token'];
        }
        //console.log(sess)
        if (sess['user'])
            sess['user'] = new user_1.User(this, sess['user']);
        if (sess['device'])
            sess['device'] = new device_1.Device(this, sess['device']);
        return sess;
    }
    invalidateSession() {
        let key = this.clientKey();
        this._sessionSubject.next(null);
        this.storage.del(key);
        this.invalidateCache();
    }
    invalidateCache() {
        this._modelCache = {};
        this._cacheClass = {};
        this._modelCacheHash = {};
    }
    authToken() {
        let key = this.clientKey();
        let sess = this.storage.get(key);
        if (!sess || (sess['expires_by'] && sess['expires_by'] < new Date().getTime())) {
            return null;
        }
        else {
            return sess['access_token'];
        }
    }
    saveLocalSession(obj) {
        this.token = obj['access_token'];
        var ut = typeof obj['user'];
        var dt = typeof obj['device'];
        if (ut == 'User')
            obj['user'] = obj['user'].toJSON();
        if (dt == 'Device')
            obj['device'] = obj['device'].toJSON();
        this.storage.set(this.clientKey(), obj);
        this.localSession();
    }
    hasSession() {
        return !!this.localSession();
    }
    signupWithObservable(user, pass, other) {
        let obj = {
            client_id: this.config.clientId,
            grant_type: 'password',
            username: user,
            password: pass
        };
        if (other)
            Object.keys(other).forEach((k) => obj[k] = other[k]);
        return this.post('/access/signup', obj, { withCredentials: true }).pipe(operators_1.map((r) => {
            let j = r;
            this.processResp(j);
        }), operators_1.flatMap((res) => new device_1.Device(this, {}).saveObservable()), operators_1.map((dev) => {
            var ls = this.localSession();
            ls.device = dev;
            this.saveLocalSession(ls);
            return dev;
        }), operators_1.flatMap((res) => new user_1.MeUser(this, { id: 'me' }).fetchObservable()), operators_1.map((user) => {
            var ls = this.localSession();
            ls.user = user;
            this.saveLocalSession(ls);
            this._sessionSubject.next(ls);
            return user;
        }));
    }
    loginWithUsernameObservable(user, pass) {
        return this._loadingSession = this.post(this.config.useCookies ? '/access/login' : '/access/token', { client_id: this.config.clientId, grant_type: 'password', username: user, password: pass }, { withCredentials: true }).pipe(operators_1.map((r) => {
            this.processResp(r);
        }), operators_1.flatMap((res) => new device_1.Device(this, {}).saveObservable()), operators_1.map((dev) => {
            var ls = this.localSession();
            ls.device = dev;
            this.saveLocalSession(ls);
            return dev;
        }), operators_1.flatMap((res) => new user_1.MeUser(this, { id: 'me' }).fetchObservable()), operators_1.map((user) => {
            var ls = this.localSession();
            ls.user = user;
            this.saveLocalSession(ls);
            this._sessionSubject.next(ls);
            this._loadingSession = null;
            return user;
        }), operators_1.share());
    }
    loginWithClientCredentialsObservable() {
        let curSess = this.localSession();
        if (curSess) {
            return rxjs_1.of(curSess).pipe(operators_1.map((o) => {
                this._sessionSubject.next(o);
                return o;
            }));
        }
        if (!this._loadingSession) {
            this._loadingSession = this.post(this.config.useCookies ? '/access/login' : '/access/token', { client_id: this.config.clientId, grant_type: 'client_credentials', client_secret: this.config.clientSecret || '' }).pipe(operators_1.map((r) => this.processResp(r)), operators_1.flatMap((res) => new device_1.Device(this, {}).saveObservable()), operators_1.map((dev) => {
                var ls = this.localSession();
                ls.device = dev;
                this.saveLocalSession(ls);
                this._sessionSubject.next(ls);
                this._loadingSession = null;
                return ls;
            }), operators_1.share());
        }
        return this._loadingSession;
    }
    loginWithTokenResponse(resp) {
        this.processResp(resp);
        return this._loadingSession = new device_1.Device(this, {}).saveObservable().pipe(operators_1.map((dev) => {
            var ls = this.localSession();
            ls.device = dev;
            this.saveLocalSession(ls);
            return dev;
        }), operators_1.flatMap((res) => new user_1.MeUser(this, { id: 'me' }).fetchObservable()), operators_1.map((user) => {
            var ls = this.localSession();
            ls.user = user;
            this.saveLocalSession(ls);
            this._sessionSubject.next(ls);
            this._loadingSession = null;
            return user;
        }), operators_1.share());
    }
    /**
     * Login using remote FacebookOauth
     * @param remoteClientId Facebook App ID
     * @param remoteClientToken Facebook access token given by the Facebook SDK.
     */
    loginWithClientFacebook(remoteClientId, remoteClientToken) {
        return this._loadingSession = this.post('/access/token', { client_id: this.config.clientId, grant_type: 'remote_client', remote_client_id: remoteClientId, remote_token: remoteClientToken }, { withCredentials: true }).pipe(operators_1.map((r) => {
            this.processResp(r);
        }), operators_1.flatMap((res) => new device_1.Device(this, {}).saveObservable()), operators_1.map((dev) => {
            var ls = this.localSession();
            ls.device = dev;
            this.saveLocalSession(ls);
            return dev;
        }), operators_1.flatMap((res) => new user_1.MeUser(this, { id: 'me' }).fetchObservable()), operators_1.map((user) => {
            var ls = this.localSession();
            ls.user = user;
            this.saveLocalSession(ls);
            this._sessionSubject.next(ls);
            this._loadingSession = null;
            return user;
        }), operators_1.share());
    }
    loginWithClientTwitter(remoteClientId, remoteUserId, remoteToken, remoteSecret) {
        return this._loadingSession = this.post('/access/token', { client_id: this.config.clientId, grant_type: 'remote_client', remote_client_id: remoteClientId, remote_token: remoteUserId + "&" + remoteToken + "&" + remoteSecret }, { withCredentials: true }).pipe(operators_1.map((r) => {
            this.processResp(r);
        }), operators_1.flatMap((res) => new device_1.Device(this, {}).saveObservable()), operators_1.map((dev) => {
            var ls = this.localSession();
            ls.device = dev;
            this.saveLocalSession(ls);
            return dev;
        }), operators_1.flatMap((res) => new user_1.MeUser(this, { id: 'me' }).fetchObservable()), operators_1.map((user) => {
            var ls = this.localSession();
            ls.user = user;
            this.saveLocalSession(ls);
            this._sessionSubject.next(ls);
            this._loadingSession = null;
            return user;
        }), operators_1.share());
    }
    registerPushRegId(regId) {
        var ls = this.localSession();
        //console.log("pushRegIdSent: " + ls.device.pushRegIdSent)
        // Only register push reg Id with server if we have a session with a device
        if (ls && ls.device && !ls.device.pushRegIdSent) {
            //console.log("Sending push reg id to server")
            ls.device.pushRegId = regId;
            ls.device.allowPush = true;
            return ls.device.saveObservable().pipe(operators_1.map(res => {
                //console.log(res)
                ls.device.pushRegIdSent = true;
                this.saveLocalSession(ls);
            }));
        }
        else {
            //console.log("Device not found or Push reg Id already sent")
            return rxjs_1.empty();
        }
    }
    forgetPasswordObservable(email) {
        return this.post('/access/forget', { email: email }).pipe(operators_1.map((r) => {
            this.processResp(r);
        }));
    }
    logoutObservable() {
        return this.get('/access/logout').pipe(operators_1.map((r) => {
            let key = this.clientKey();
            this.token = null;
            this.invalidateSession();
            this.storage.del(key);
            this._logoutEvent.next("");
        }));
    }
    refreshMeUser() {
        return new user_1.MeUser(this, { id: 'me' })
            .fetchObservable()
            .pipe(operators_1.map((user) => {
            var ls = this.localSession();
            ls.user = user;
            this.saveLocalSession(ls);
            return user;
        }));
    }
    processResp(resp) {
        if (!this.config.useCookies && !resp.status) {
            resp = {
                status: resp['error'] ? 409 : 200,
                message: resp['error'] || 'ok',
                payload: resp
            };
        }
        if (resp.payload && resp.payload.access_token) {
            let obj = {
                access_token: resp.payload.access_token
            };
            if (resp.payload.expires_in && parseInt(resp.payload.expires_in)) {
                obj['expires_by'] = new Date(new Date().getTime() + 1000 * resp.payload.expires_in).getTime();
            }
            this.saveLocalSession(obj);
            this.localSession();
        }
        else if (resp.status < 400) {
            return resp;
        }
        else {
            this._sessionSubject.next(new types_1.VasatError(resp, null));
            throw resp;
        }
    }
    api(url, meth, args) {
        var a = new base_models_1.VasatAPICall();
        return a.apiObservable(this, meth || 'get', url, args);
    }
    get(url, args) {
        return this._http('get', url, null, args);
    }
    delete(url, args) {
        return this._http('delete', url, null, args);
    }
    put(url, obj, args) {
        return this._http('put', url, obj, args);
    }
    post(url, obj, args) {
        return this._http('post', url, obj, args);
    }
    _http(meth, url, obj, args) {
        let a = args || {};
        let reqOpt = {
            method: meth,
        };
        let headers = {};
        if (this.token)
            headers["Authorization"] = 'bearer ' + this.token;
        if (obj) {
            reqOpt.body = JSON.stringify(obj);
            headers["Content-Type"] = 'application/json';
        }
        reqOpt.headers = headers;
        return rxjs_1.from(fetch(this.config.host + url, reqOpt)).pipe(operators_1.flatMap(res => {
            // Check for 400 and 500 server errors and throw exception accordingly
            if (res.status >= 400) {
                return rxjs_1.from(res.clone().json()).pipe(operators_1.map(response => {
                    // Trigger _errorEvent in case client app wants to do something special with errors. Specially with not Logged in responses
                    var error = new types_1.VasatError(response, "Error");
                    this._errorEvent.next(error);
                    throw error;
                }));
            }
            else {
                // fetch request return custom response so we need to parse it to return vasat response
                return rxjs_1.from(res.clone().json());
            }
        }));
    }
    file(url, meth, payload) {
        let reqOpt = {
            method: meth ? meth : "get",
        };
        let headers = {};
        if (this.token)
            headers["Authorization"] = 'bearer ' + this.token;
        if (payload) {
            reqOpt.body = JSON.stringify(payload);
            headers["Content-Type"] = 'application/json';
        }
        reqOpt.headers = headers;
        return rxjs_1.from(fetch(this.config.host + url, reqOpt)).pipe(operators_1.flatMap(res => res.clone().blob()));
    }
    searchByObject(v, overloadUrl) {
        return new base_models_1.VasatSearchQuery(v, this, overloadUrl);
    }
    searchByObjectString(obj, overloadUrl) {
        class VasatObj extends base_models_1.VasatModel {
            constructor(V) {
                super(V, obj, overloadUrl);
            }
        }
        return this.searchByObject(VasatObj, overloadUrl);
    }
    /**
     * Generate a url to send the browser to so it can authenticate.
     * @client is the remote client uid
     * @redirectUrl is the url on your server to be sent to once the user has logged in (or not)
     *
     * returns observale of the url to be sent to
     */
    loginViaOAuthUrl(client, redirectUrl, state) {
        let post = {
            client_id: this.config.clientId,
            remote_client_id: client,
            target_url: redirectUrl
        };
        return this.api('/access/remote' + (state ? '?state=' + state : ''), 'post', post).pipe(operators_1.map(r => r.url));
    }
    /**
     * When an oauth site returns you back to this site
     * @client is the remote client uid
     * @redirectUrl is the url on your server to be sent to once the user has logged in (or not)
     * @code is the code returned by the oauth server
     * returns observale of the url to be sent to
     */
    verifyOAuthUrl(client, code, redirectUrl, state) {
        let post = {
            client_id: this.config.clientId,
            remote_client_id: client,
            target_url: redirectUrl,
            code: code
        };
        if (state)
            post['state'] = state;
        return this.post('/access/remoteAuth', post).pipe(operators_1.map(r => this.processResp(r)), operators_1.flatMap((res) => new device_1.Device(this, {}).saveObservable()), operators_1.map((dev) => {
            var ls = this.localSession();
            ls.device = dev;
            this.saveLocalSession(ls);
            return dev;
        }), operators_1.flatMap((res) => new user_1.MeUser(this, { id: 'me' }).fetchObservable()), operators_1.map((user) => {
            var ls = this.localSession();
            ls.user = user;
            this.saveLocalSession(ls);
            this._sessionSubject.next(ls);
            this._loadingSession = null;
            return user;
        }));
    }
    activeHostServices() {
        if (this.services.length)
            return rxjs_1.of(this.services);
        if (!this.servicesLoading) {
            var toLoad = [];
            var isAdmin = null;
            var isDB = null;
            this.servicesLoading = this.api("/vasat").pipe(operators_1.map((res) => {
                this.services = res.services;
                if (this.services.find((c) => c.path == 'uppr'))
                    this.services.push({
                        name: "Clients",
                        path: "clients",
                        icon: null,
                        hidden: false,
                        submenu: [],
                        meta: null
                    });
                this.services = this.services.sort((a, b) => {
                    if (a.name < b.name)
                        return -1;
                    else if (a.name > b.name)
                        return 1;
                    else
                        return 0;
                });
                this.services.map((c) => {
                    c.submenu = [];
                    c.meta = {};
                    if (!c.icon) {
                        if (c.path == 'uppr') {
                            c.name = 'Manage Data';
                            c.icon = 'database';
                            toLoad.push(this.api('/vasat/uppr').pipe(operators_1.map((res) => {
                                isAdmin = res;
                                c.meta = res;
                                return this.services;
                            })));
                        }
                        else if (c.path == 'clients') {
                            c.icon = "plug";
                            toLoad.push(this.searchByObjectString("Client").queryObservable().pipe(operators_1.flatMap((res) => {
                                c.meta = res.items;
                                c.submenu = res.items.map((i) => {
                                    return {
                                        path: "" + i.id,
                                        name: i.name
                                    };
                                });
                                return this.searchByObjectString("ClientRemoteServer").queryObservable();
                            }), operators_1.map((rc) => {
                                c.remotes = rc.items;
                                c.submenu2 = rc.items.map((i) => {
                                    return {
                                        path: "" + i.id,
                                        name: i.name
                                    };
                                });
                                return this.services;
                            })));
                        }
                        else if (c.path == 'push') {
                            c.name = 'Push Messages';
                            c.icon = 'comment';
                        }
                        else if (c.path == 'dba') {
                            c.icon = 'database';
                            c.hidden = true;
                            toLoad.push(this.api('/vasat/dba/initDB').pipe(operators_1.map((res) => {
                                isDB = res;
                                c.meta = res;
                                return this.services;
                            })));
                        }
                        else if (c.path == 'user') {
                            c.hidden = true;
                        }
                        else if (c.path == 'gbbo') {
                            c.icon = 'birthday-cake';
                            c.submenu = [{
                                    path: "entry",
                                    name: "Join Entries"
                                }];
                        }
                        else {
                            c.icon = 'question-circle';
                        }
                    }
                });
                if (isAdmin) {
                    this.services.push({
                        name: 'Configure Clients',
                        path: 'clients',
                        icon: 'plug',
                        hidden: false,
                        submenu: [],
                        meta: {}
                    });
                }
                this.services.unshift({
                    name: 'Home',
                    path: 'home',
                    icon: 'home',
                    hidden: false,
                    submenu: [],
                    meta: {}
                });
                return toLoad;
            }), operators_1.flatMap((r) => {
                if (r.length) {
                    return rxjs_1.forkJoin(r);
                }
                else {
                    return rxjs_1.of([this.services]);
                }
            }), operators_1.map((r) => {
                if (isAdmin) {
                    const upprItem = this.services.find((c) => c.path == 'uppr');
                    const dbI = this.services.find((c) => c.path == 'dba');
                    upprItem.submenu = isAdmin.map((ccc) => {
                        var i = {
                            name: ccc.id,
                            path: ccc.id
                        };
                        if (isDB) {
                            i.meta = dbI.meta.find((d) => d.name == ccc.id);
                        }
                        return i;
                    }).sort((a, b) => {
                        if (a.name < b.name)
                            return -1;
                        else if (a.name > b.name)
                            return 1;
                        else
                            return 0;
                    });
                }
                return r[0];
            }));
        }
        return this.servicesLoading;
    }
    setDeviceMeta(dm) {
        this._defaultDeviceMeta = dm;
    }
    deviceMeta() {
        return this._defaultDeviceMeta.getMeta();
    }
}
exports.Vasat = Vasat;


/***/ }),

/***/ 656:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const rxjs_1 = __webpack_require__(435);
class BaseEvent {
    constructor(item, event, args) {
        this.item = item;
        this.event = event;
        this.args = args;
    }
}
exports.BaseEvent = BaseEvent;
class BaseSimpleEvent extends BaseEvent {
}
exports.BaseSimpleEvent = BaseSimpleEvent;
class ArrayStore {
    constructor(eventClazz, initalVal, dependsOn) {
        this.eventClazz = eventClazz;
        this.dependsOn = dependsOn;
        this._equalOperator = (a, b) => a == b;
        this._state = new rxjs_1.BehaviorSubject([]);
        this._subject = new rxjs_1.Subject();
        this._observable = this._subject.asObservable();
        if (dependsOn) {
            // if theres a dependence (ie this is a subset of another collection)
            dependsOn.events.subscribe(ev => {
                if (ev.event == 'REMOVE') {
                    this.remove(ev.item);
                }
                else if (ev.event == 'UPDATE') {
                    var f = this._state.getValue().find(s => s == ev.item);
                    if (f) {
                        this.emmit(f, 'UPDATE');
                    }
                }
            });
        }
    }
    set values(newVals) {
        var curState = this._state.getValue().slice();
        this._state.next(newVals.slice());
        var toDel = curState.filter(p => !newVals.find(pp => this._equalOperator(pp, p)));
        toDel.forEach(p => this._subject.next(new this.eventClazz(p, 'REMOVE')));
        var toAdd = newVals.filter(p => !curState.find(pp => this._equalOperator(pp, p)));
        toAdd.forEach(p => this._subject.next(new this.eventClazz(p, 'ADD')));
    }
    get values() {
        return this._state.getValue().slice();
    }
    /*
        get subscribe():((next?: (response:C) => void, error?: (error: any) => void, complete?: () => void) => Subscription){
            var v = this.observable
            return v.subscribe.bind(v)
        }*/
    get events() {
        var preFire = this._state.getValue().map(f => new this.eventClazz(f, 'ADD'));
        if (preFire.length)
            return rxjs_1.concat(preFire, this._observable);
        else
            return this._observable;
    }
    get state() {
        return this._state;
    }
    setEqualOperator(op) {
        this._equalOperator = op;
        return this;
    }
    add(o) {
        this.set(o);
    }
    addAll(a) {
        this.setAll(a);
        return this;
    }
    set(o) {
        if (!this.values.find(pp => this._equalOperator(pp, o))) {
            var newA = this.values;
            newA.push(o);
            this.values = newA;
        }
        else
            this.emmit(o, 'UPDATE');
    }
    setAll(a) {
        if (a)
            a.forEach(aa => this.set(aa));
        return this;
    }
    contains(d) {
        return !!this.values.find(f => this._equalOperator(f, d));
    }
    remove(o) {
        //  if(this._state.find(pp => pp == o)){
        //if(!quietly) this.emmit(o,this.removeEvent)
        this.values = this.values.filter(pp => !this._equalOperator(pp, o));
        // }
    }
    emmit(o, event, args) {
        this._subject.next(new this.eventClazz(o, event, args));
    }
    /*
    bindArray(a:OBJ[], fn?:((C) => any)):Subscription{
        return this.events.subscribe(ev => {
            if(ev.event == 'ADD'){
                a.push(ev.item)
                if(fn)
                    fn(ev)
            }
            else if(ev.event == 'REMOVE'){
                a.splice(a.indexOf(ev.item),1)
                if(fn)
                    fn(ev)

            }
        })
    }*/
    close() {
        this._subject.complete();
    }
}
exports.ArrayStore = ArrayStore;
class Store {
    constructor(eventClazz, inital) {
        this.eventClazz = eventClazz;
        this._state = new rxjs_1.BehaviorSubject(null);
        this._subject = new rxjs_1.Subject();
        this._observable = this._subject.asObservable();
        if (inital)
            this.value = inital;
    }
    set value(newVal) {
        var isSame = this.value == newVal;
        if (isSame)
            return;
        // if preivous state, clear
        if (this._state.getValue())
            this.emmit('REMOVE');
        this._state.next(newVal);
        // if new state not null emmit
        if (this._state.value)
            this.emmit('ADD', this._args);
    }
    get value() {
        return this._state.getValue();
    }
    get state() {
        return this._state;
    }
    /*
    get subscribe():((next?: (response:C) => void, error?: (error: any) => void, complete?: () => void) => Subscription){
        var v = this.observable
        return v.subscribe.bind(v)
    }*/
    get events() {
        if (this.value)
            return rxjs_1.concat([new this.eventClazz(this._state.getValue(), 'ADD', this._args)], this._observable);
        else
            return this._observable;
    }
    setWithArgs(o, args) {
        this._args = args;
        this.value = o;
    }
    emmit(event, args, o) {
        if (!(o || this._state))
            throw new Error('cant emmit with no object');
        this._subject.next(new this.eventClazz(o || this._state.getValue(), event, args));
    }
    close() {
        this._subject.complete();
    }
    exists(fn) {
        if (this.value)
            return fn(this.value);
        else
            return false;
    }
}
exports.Store = Store;


/***/ }),

/***/ 435:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__435__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Renderer = exports.MapHelper = exports.GoogleHelper = exports.LeafletHelper = exports.FourdCesiumHelper = exports.ServerProcess = exports.ChunkedFileUploader = exports.BaseComponent = exports.FourDService = exports.Message = exports.InviteRequest = exports.Widget = exports.Tag = exports.PlottableModel = exports.InvoiceItem = exports.Invoice = exports.JobType = exports.JobBatch = exports.Job = exports.BillingSetup = exports.AccountPlan = exports.EPSGCodes = exports.ProcessorAPI = exports.Client = exports.Project = exports.Folder = exports.Annotation = exports.Account = exports.TransformType = exports.DatasetType = exports.TransformGroup = exports.DatasetGroup = exports.Dataset = exports.Transform = void 0;
var _4d_objects_1 = __webpack_require__(264);
Object.defineProperty(exports, "Transform", ({ enumerable: true, get: function () { return _4d_objects_1.Transform; } }));
Object.defineProperty(exports, "Dataset", ({ enumerable: true, get: function () { return _4d_objects_1.Dataset; } }));
Object.defineProperty(exports, "DatasetGroup", ({ enumerable: true, get: function () { return _4d_objects_1.DatasetGroup; } }));
Object.defineProperty(exports, "TransformGroup", ({ enumerable: true, get: function () { return _4d_objects_1.TransformGroup; } }));
Object.defineProperty(exports, "DatasetType", ({ enumerable: true, get: function () { return _4d_objects_1.DatasetType; } }));
Object.defineProperty(exports, "TransformType", ({ enumerable: true, get: function () { return _4d_objects_1.TransformType; } }));
Object.defineProperty(exports, "Account", ({ enumerable: true, get: function () { return _4d_objects_1.Account; } }));
Object.defineProperty(exports, "Annotation", ({ enumerable: true, get: function () { return _4d_objects_1.Annotation; } }));
Object.defineProperty(exports, "Folder", ({ enumerable: true, get: function () { return _4d_objects_1.Folder; } }));
Object.defineProperty(exports, "Project", ({ enumerable: true, get: function () { return _4d_objects_1.Project; } }));
Object.defineProperty(exports, "Client", ({ enumerable: true, get: function () { return _4d_objects_1.Client; } }));
Object.defineProperty(exports, "ProcessorAPI", ({ enumerable: true, get: function () { return _4d_objects_1.ProcessorAPI; } }));
Object.defineProperty(exports, "EPSGCodes", ({ enumerable: true, get: function () { return _4d_objects_1.EPSGCodes; } }));
Object.defineProperty(exports, "AccountPlan", ({ enumerable: true, get: function () { return _4d_objects_1.AccountPlan; } }));
Object.defineProperty(exports, "BillingSetup", ({ enumerable: true, get: function () { return _4d_objects_1.BillingSetup; } }));
Object.defineProperty(exports, "Job", ({ enumerable: true, get: function () { return _4d_objects_1.Job; } }));
Object.defineProperty(exports, "JobBatch", ({ enumerable: true, get: function () { return _4d_objects_1.JobBatch; } }));
Object.defineProperty(exports, "JobType", ({ enumerable: true, get: function () { return _4d_objects_1.JobType; } }));
Object.defineProperty(exports, "Invoice", ({ enumerable: true, get: function () { return _4d_objects_1.Invoice; } }));
Object.defineProperty(exports, "InvoiceItem", ({ enumerable: true, get: function () { return _4d_objects_1.InvoiceItem; } }));
Object.defineProperty(exports, "PlottableModel", ({ enumerable: true, get: function () { return _4d_objects_1.PlottableModel; } }));
Object.defineProperty(exports, "Tag", ({ enumerable: true, get: function () { return _4d_objects_1.Tag; } }));
Object.defineProperty(exports, "Widget", ({ enumerable: true, get: function () { return _4d_objects_1.Widget; } }));
Object.defineProperty(exports, "InviteRequest", ({ enumerable: true, get: function () { return _4d_objects_1.InviteRequest; } }));
Object.defineProperty(exports, "Message", ({ enumerable: true, get: function () { return _4d_objects_1.Message; } }));
var _4d_mapper_service_1 = __webpack_require__(182);
Object.defineProperty(exports, "FourDService", ({ enumerable: true, get: function () { return _4d_mapper_service_1.FourDService; } }));
Object.defineProperty(exports, "BaseComponent", ({ enumerable: true, get: function () { return _4d_mapper_service_1.BaseComponent; } }));
var _4d_processor_service_1 = __webpack_require__(151);
Object.defineProperty(exports, "ChunkedFileUploader", ({ enumerable: true, get: function () { return _4d_processor_service_1.ChunkedFileUploader; } }));
Object.defineProperty(exports, "ServerProcess", ({ enumerable: true, get: function () { return _4d_processor_service_1.ServerProcess; } }));
var cesium_helpers_1 = __webpack_require__(874);
Object.defineProperty(exports, "FourdCesiumHelper", ({ enumerable: true, get: function () { return cesium_helpers_1.FourdCesiumHelper; } }));
var leaflet_helper_1 = __webpack_require__(662);
Object.defineProperty(exports, "LeafletHelper", ({ enumerable: true, get: function () { return leaflet_helper_1.LeafletHelper; } }));
var google_helper_1 = __webpack_require__(570);
Object.defineProperty(exports, "GoogleHelper", ({ enumerable: true, get: function () { return google_helper_1.GoogleHelper; } }));
var _4d_helper_1 = __webpack_require__(869);
Object.defineProperty(exports, "MapHelper", ({ enumerable: true, get: function () { return _4d_helper_1.MapHelper; } }));
Object.defineProperty(exports, "Renderer", ({ enumerable: true, get: function () { return _4d_helper_1.Renderer; } }));

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
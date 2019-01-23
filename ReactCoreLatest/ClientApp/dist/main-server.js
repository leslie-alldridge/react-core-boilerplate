(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ClientApp/boot-server.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ClientApp/Globals.ts":
/*!******************************!*\
  !*** ./ClientApp/Globals.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nserializejson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nserializejson */ "./node_modules/nserializejson/dist/cjs/index.js");
/* harmony import */ var nserializejson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nserializejson__WEBPACK_IMPORTED_MODULE_0__);
var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};/**
 * Contains global isomorphic session.
 */var Globals=/** @class */function(){function Globals(){}Globals.reset=function(){this.isInitialized=false;this.data={};};Globals.init=function(data){if(this.isInitialized){throw Error("Globals is already initialized.");}this.data=data||{public:{},private:{}};this.isInitialized=true;// Use dot notation in name of the form inputs.
nserializejson__WEBPACK_IMPORTED_MODULE_0__["NSerializeJson"].options.useDotSeparatorInPath=true;};Globals.throwIfNotInitialized=function(){if(!this.isInitialized)throw Error("Globals is not initialized. You have to call Session.init before.");};Globals.getData=function(){this.throwIfNotInitialized();return this.data;};Globals.setData=function(data){this.throwIfNotInitialized();var oldData=this.data;this.data=__assign({},oldData,data);};Object.defineProperty(Globals,"serviceUser",{get:function(){return this.getData().public.serviceUser;},set:function(serviceUser){this.setData({public:{serviceUser:serviceUser}});},enumerable:true,configurable:true});Object.defineProperty(Globals,"isAuthenticated",{get:function(){return this.serviceUser!=null;},enumerable:true,configurable:true});Globals.isInitialized=false;Globals.data={};return Globals;}();/* harmony default export */ __webpack_exports__["default"] = (Globals);

/***/ }),

/***/ "./ClientApp/Ui.ts":
/*!*************************!*\
  !*** ./ClientApp/Ui.ts ***!
  \*************************/
/*! exports provided: Ui */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ui", function() { return Ui; });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/lib/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);
var Ui=/** @class */function(){function Ui(){}Ui.showErrors=function(){var messages=[];for(var _i=0;_i<arguments.length;_i++){messages[_i]=arguments[_i];}messages.forEach(function(x){if(!Array.isArray(x)){react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(x);}else{x.forEach(function(y){return react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(y);});}});};Ui.showInfo=function(message){react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].info(message);};return Ui;}();

/***/ }),

/***/ "./ClientApp/boot-server.tsx":
/*!***********************************!*\
  !*** ./ClientApp/boot-server.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/lib/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! history */ "./node_modules/history/index.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var aspnet_prerendering__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aspnet-prerendering */ "./node_modules/aspnet-prerendering/index.js");
/* harmony import */ var aspnet_prerendering__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aspnet_prerendering__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ "./ClientApp/routes.tsx");
/* harmony import */ var _configureStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./configureStore */ "./ClientApp/configureStore.ts");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Globals */ "./ClientApp/Globals.ts");
/* harmony import */ var domain_wait__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! domain-wait */ "./node_modules/domain-wait/dist/cjs/index.js");
/* harmony import */ var domain_wait__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(domain_wait__WEBPACK_IMPORTED_MODULE_11__);
var renderHelmet=function(){var helmetData=react_helmet__WEBPACK_IMPORTED_MODULE_9__["Helmet"].renderStatic();var helmetStrings="";for(var key in helmetData){if(helmetData.hasOwnProperty(key)){helmetStrings+=helmetData[key].toString();}}return helmetStrings;};var createGlobals=function(nodeSession,initialReduxState,helmetStrings){return{completedTasks:domain_wait__WEBPACK_IMPORTED_MODULE_11__["completedTasks"],nodeSession:nodeSession,initialReduxState:initialReduxState,helmetStrings:helmetStrings};};/* harmony default export */ __webpack_exports__["default"] = (Object(aspnet_prerendering__WEBPACK_IMPORTED_MODULE_6__["createServerRenderer"])(function(params){_Globals__WEBPACK_IMPORTED_MODULE_10__["default"].reset();_Globals__WEBPACK_IMPORTED_MODULE_10__["default"].init(params.data);return new Promise(function(resolve,reject){// Prepare Redux store with in-memory history, and dispatch a navigation event.
// corresponding to the incoming URL.
var basename=params.baseUrl.substring(0,params.baseUrl.length-1);// Remove trailing slash.
var urlAfterBasename=params.url.substring(basename.length);var store=Object(_configureStore__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(history__WEBPACK_IMPORTED_MODULE_5__["createMemoryHistory"])());store.dispatch(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_4__["replace"])(urlAfterBasename));// Prepare an instance of the application and perform an inital render that will
// cause any async tasks (e.g., data access) to begin.
var routerContext={};var app=react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"],{store:store},react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["StaticRouter"],{basename:basename,context:routerContext,location:params.location.path,children:_routes__WEBPACK_IMPORTED_MODULE_7__["routes"]}));var renderApp=function(){return Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__["renderToString"])(app);};renderApp();// If there's a redirection, just send this information back to the host application.
if(routerContext.url){resolve({redirectUrl:routerContext.url,globals:createGlobals(params.data,store.getState(),renderHelmet())});return;}// Once any async tasks are done, we can perform the final render.
// We also send the redux store state, so the client can continue execution where the server left off.
params.domainTasks.then(function(){resolve({html:renderApp(),globals:createGlobals(params.data,store.getState(),renderHelmet())});},reject);// Also propagate any errors back into the host application.
});}));

/***/ }),

/***/ "./ClientApp/components/person/PersonEditor.tsx":
/*!******************************************************!*\
  !*** ./ClientApp/components/person/PersonEditor.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_shared_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/shared/Form */ "./ClientApp/components/shared/Form.tsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;};var PersonEditor=/** @class */function(_super){__extends(PersonEditor,_super);function PersonEditor(props){return _super.call(this,props)||this;}PersonEditor.prototype.emptyForm=function(){if(this.elForm){this.elForm.emptyForm();}};PersonEditor.prototype.componentDidMount=function(){};PersonEditor.prototype.render=function(){var _this=this;return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_3__["Formik"],{enableReinitialize:true,initialValues:{firstName:this.props.data.firstName||'',lastName:this.props.data.lastName||''},onSubmit:function(values,_a){var setSubmitting=_a.setSubmitting;}},function(_a){var values=_a.values,errors=_a.errors,touched=_a.touched,handleChange=_a.handleChange,handleBlur=_a.handleBlur,handleSubmit=_a.handleSubmit,isSubmitting=_a.isSubmitting;return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_shared_Form__WEBPACK_IMPORTED_MODULE_2__["Form"],{className:"form",ref:function(x){return _this.elForm=x;}},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input",{type:"hidden",name:"id",defaultValue:(_this.props.data.id||0).toString()}),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label",{className:"control-label required",htmlFor:"person__firstName"},"First name"),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input",{type:"text",className:"form-control",id:"person__firstName",name:"firstName","data-value-type":"string","data-val-required":"true","data-msg-required":"First name is required.",value:values.firstName,onChange:handleChange,onBlur:handleBlur})),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label",{className:"control-label required",htmlFor:"person__lastName"},"Last name"),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input",{type:"text",className:"form-control",id:"person__lastName",name:"lastName","data-value-type":"string","data-val-required":"true","data-msg-required":"Last name is required.",value:values.lastName,onChange:handleChange,onBlur:handleBlur})));});};__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_1___default.a],PersonEditor.prototype,"emptyForm",null);return PersonEditor;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (PersonEditor);

/***/ }),

/***/ "./ClientApp/components/shared/AppComponent.tsx":
/*!******************************************************!*\
  !*** ./ClientApp/components/shared/AppComponent.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_1__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;};/**
 * This component contains helpful method which
 * allows you to make "force update" of the stuck elements.
 */var AppComponent=/** @class */function(_super){__extends(AppComponent,_super);function AppComponent(props){var _this=_super.call(this,props)||this;/**
         * Place it into the "key" attribute of an element.
         */_this.renderKey=0;return _this;}/**
     * Call this if component state is stuck.
     * But you should set the renderKey to the element's attribute.
     */AppComponent.prototype.forceUpdate=function(){this.renderKey=Math.random();};__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_1___default.a],AppComponent.prototype,"forceUpdate",null);return AppComponent;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (AppComponent);

/***/ }),

/***/ "./ClientApp/components/shared/AppRoute.tsx":
/*!**************************************************!*\
  !*** ./ClientApp/components/shared/AppRoute.tsx ***!
  \**************************************************/
/*! exports provided: AppRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoute", function() { return AppRoute; });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Globals */ "./ClientApp/Globals.ts");
var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};var __rest=undefined&&undefined.__rest||function(s,e){var t={};for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++)if(e.indexOf(p[i])<0)t[p[i]]=s[p[i]];return t;};var AppRoute=function(_a){var Component=_a.component,Layout=_a.layout,Path=_a.path,rest=__rest(_a,["component","layout","path"]);var isLoginPath=Path==="/login";if(!_Globals__WEBPACK_IMPORTED_MODULE_2__["default"].isAuthenticated&&!isLoginPath){return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_0__["Redirect"],{to:"/login"});}if(_Globals__WEBPACK_IMPORTED_MODULE_2__["default"].isAuthenticated&&isLoginPath){return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_0__["Redirect"],{to:"/"});}return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_0__["Route"],__assign({},rest,{render:function(props){return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Layout,null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component,__assign({},props)));}}));};

/***/ }),

/***/ "./ClientApp/components/shared/Footer.tsx":
/*!************************************************!*\
  !*** ./ClientApp/components/shared/Footer.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var Footer=/** @class */function(_super){__extends(Footer,_super);function Footer(props){return _super.call(this,props)||this;}Footer.prototype.render=function(){return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("footer",{className:"footer text-center"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p",null,"View on ",react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a",{href:"https://github.com/NickMaev/react-core-boilerplate"},"GitHub")),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p",null,"Copyright (c) 2018 Nikolay Maev"),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p",null,react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a",{href:"https://en.wikipedia.org/wiki/MIT_License"},"MIT License")));};return Footer;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./ClientApp/components/shared/Form.tsx":
/*!**********************************************!*\
  !*** ./ClientApp/components/shared/Form.tsx ***!
  \**********************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nserializejson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nserializejson */ "./node_modules/nserializejson/dist/cjs/index.js");
/* harmony import */ var nserializejson__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nserializejson__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Utils */ "./ClientApp/utils.ts");
/* harmony import */ var nval_tippy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nval-tippy */ "./node_modules/nval-tippy/dist/cjs/index.js");
/* harmony import */ var nval_tippy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nval_tippy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_4__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;};var Form=/** @class */function(_super){__extends(Form,_super);function Form(props){return _super.call(this,props)||this;}Form.prototype.isValid=function(){return this.validator.isValid();};Form.prototype.emptyForm=function(){Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["emptyForm"])(this.elForm);};Form.prototype.getData=function(){return nserializejson__WEBPACK_IMPORTED_MODULE_1__["NSerializeJson"].serializeForm(this.elForm);};Form.prototype.componentDidMount=function(){this.validator=new nval_tippy__WEBPACK_IMPORTED_MODULE_3__["NValTippy"](this.elForm);};Form.prototype.render=function(){var _this=this;return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form",__assign({},this.props,{ref:function(x){return _this.elForm=x;}}),this.props.children);};__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_4___default.a],Form.prototype,"isValid",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_4___default.a],Form.prototype,"emptyForm",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_4___default.a],Form.prototype,"getData",null);return Form;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "./ClientApp/components/shared/Loader.tsx":
/*!************************************************!*\
  !*** ./ClientApp/components/shared/Loader.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Styles_loader_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Styles/loader.scss */ "./ClientApp/styles/loader.scss");
/* harmony import */ var _Styles_loader_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Styles_loader_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Utils */ "./ClientApp/utils.ts");
/* harmony import */ var _Components_shared_AppComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/shared/AppComponent */ "./ClientApp/components/shared/AppComponent.tsx");
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var Loader=/** @class */function(_super){__extends(Loader,_super);function Loader(props){return _super.call(this,props)||this;}Loader.prototype.render=function(){var css={"display":"none"};if(!Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["isNode"])()){css={"display":this.props.show?"block":"none"};}return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{key:this.renderKey,className:"loader-bg",style:css},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle1 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle2 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle3 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle4 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle5 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle6 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle7 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle8 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle9 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle10 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle11 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle12 sk-child"})));};return Loader;}(_Components_shared_AppComponent__WEBPACK_IMPORTED_MODULE_3__["default"]);/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./ClientApp/components/shared/ModalComponent.tsx":
/*!********************************************************!*\
  !*** ./ClientApp/components/shared/ModalComponent.tsx ***!
  \********************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap3_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap3-native */ "./node_modules/bootstrap3-native/index.js");
/* harmony import */ var bootstrap3_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap3_native__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_2__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;};var ModalComponent=/** @class */function(_super){__extends(ModalComponent,_super);function ModalComponent(props){return _super.call(this,props)||this;}ModalComponent.prototype.show=function(){this.modalPlugin.show();};ModalComponent.prototype.hide=function(){this.modalPlugin.hide();};ModalComponent.prototype.componentDidMount=function(){var _this=this;this.modalPlugin=new bootstrap3_native__WEBPACK_IMPORTED_MODULE_1__["Modal"](this.elModal);if(this.props.onShow){this.elModal.addEventListener("show.bs.modal",function(){return _this.props.onShow();});}if(this.props.onHide){this.elModal.addEventListener("hide.bs.modal",function(){return _this.props.onHide();});}};ModalComponent.prototype.componentWillUnmount=function(){this.modalPlugin.hide();};ModalComponent.prototype.render=function(){var _this=this;return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"modal fade",tabIndex:-1,role:"dialog",ref:function(x){return _this.elModal=x;}},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"modal-dialog",role:"document"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"modal-content"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"modal-header"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span",{"aria-hidden":"true"},"\u00D7")),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4",{className:"modal-title"},this.props.title)),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"modal-body"},this.props.children),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"modal-footer"},this.props.buttons))));};__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_2___default.a],ModalComponent.prototype,"show",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_2___default.a],ModalComponent.prototype,"hide",null);return ModalComponent;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "./ClientApp/components/shared/PagingBar.tsx":
/*!***************************************************!*\
  !*** ./ClientApp/components/shared/PagingBar.tsx ***!
  \***************************************************/
/*! exports provided: PagingBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingBar", function() { return PagingBar; });
/* harmony import */ var react_paginating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-paginating */ "./node_modules/react-paginating/dist/index.js");
/* harmony import */ var react_paginating__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_paginating__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_2__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;};/* Below code of the 'Pagination' component was taken
from the https://github.com/ChoTotOSS/react-paginating
and remaked for the Bootstrap style. */var PagingBar=/** @class */function(_super){__extends(PagingBar,_super);function PagingBar(props){return _super.call(this,props)||this;}PagingBar.prototype.setFirstPage=function(){this.elFirstPageBtn.click();};PagingBar.prototype.setLastPage=function(){this.elLastPageBtn.click();};PagingBar.prototype.render=function(){var _this=this;return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_paginating__WEBPACK_IMPORTED_MODULE_0___default.a,{total:this.props.totalResults,limit:this.props.limitPerPage,currentPage:this.props.currentPage},function(_a){var pages=_a.pages,currentPage=_a.currentPage,hasNextPage=_a.hasNextPage,hasPreviousPage=_a.hasPreviousPage,previousPage=_a.previousPage,nextPage=_a.nextPage,totalPages=_a.totalPages,getPageItemProps=_a.getPageItemProps;return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul",{className:"pagination"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span",__assign({},getPageItemProps({pageValue:1,onPageChange:_this.props.onChangePage}),{ref:function(x){return _this.elFirstPageBtn=x;}}),"first")),hasPreviousPage&&react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span",__assign({},getPageItemProps({pageValue:previousPage,onPageChange:_this.props.onChangePage})),'<')),pages.map(function(page){return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li",{key:page,className:page===currentPage?'active':''},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span",__assign({},getPageItemProps({pageValue:page,onPageChange:_this.props.onChangePage})),page));}),hasNextPage&&react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span",__assign({},getPageItemProps({pageValue:nextPage,onPageChange:_this.props.onChangePage})),'>')),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span",__assign({},getPageItemProps({pageValue:totalPages,onPageChange:_this.props.onChangePage}),{ref:function(x){return _this.elLastPageBtn=x;}}),"last")));});};__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_2___default.a],PagingBar.prototype,"setFirstPage",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_2___default.a],PagingBar.prototype,"setLastPage",null);return PagingBar;}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/***/ }),

/***/ "./ClientApp/components/shared/TopMenu.tsx":
/*!*************************************************!*\
  !*** ./ClientApp/components/shared/TopMenu.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Globals */ "./ClientApp/Globals.ts");
/* harmony import */ var _Services_AccountService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Services/AccountService */ "./ClientApp/services/AccountService.ts");
/* harmony import */ var bootstrap3_native__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap3-native */ "./node_modules/bootstrap3-native/index.js");
/* harmony import */ var bootstrap3_native__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap3_native__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_6__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;};var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};var TopMenu=/** @class */function(_super){__extends(TopMenu,_super);function TopMenu(props){var _this=_super.call(this,props)||this;_this.state={logoutAction:false};return _this;}TopMenu.prototype.onClickSignOut=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:e.preventDefault();return[4/*yield*/,_Services_AccountService__WEBPACK_IMPORTED_MODULE_4__["default"].logout()];case 1:_a.sent();this.setState({logoutAction:true});return[2/*return*/];}});});};TopMenu.prototype.componentDidMount=function(){var dropdown=new bootstrap3_native__WEBPACK_IMPORTED_MODULE_5__["Dropdown"](this.elDropdown);};TopMenu.prototype.componentDidUpdate=function(){};TopMenu.prototype.render=function(){var _this=this;if(this.state.logoutAction)return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"],{to:"/login"});return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"navbar navbar-default"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"container-fluid"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"navbar-header"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span",{className:"sr-only"},"Toggle navigation"),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span",{className:"icon-bar"}),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span",{className:"icon-bar"}),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span",{className:"icon-bar"})),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a",{className:"navbar-brand",href:"#"},"RCB")),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{id:"navbar",className:"navbar-collapse collapse nav navbar-nav navbar-right"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul",{className:"nav navbar-nav"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li",null,react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"],{exact:true,to:'/',activeClassName:"active"},"Home")),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li",null,react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"],{exact:true,to:'/example',activeClassName:"active"},"Example")),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li",{className:"dropdown"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a",{href:"#",ref:function(x){return _this.elDropdown=x;},className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},_Globals__WEBPACK_IMPORTED_MODULE_3__["default"].serviceUser.login,"\u00A0",react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span",{className:"caret"})),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul",{className:"dropdown-menu"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li",null,react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a",{href:"#",onClick:this.onClickSignOut},"Sign out"))))))));};__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_6___default.a],TopMenu.prototype,"onClickSignOut",null);return TopMenu;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(TopMenu));

/***/ }),

/***/ "./ClientApp/configureStore.ts":
/*!*************************************!*\
  !*** ./ClientApp/configureStore.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/lib/redux.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/lib/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/lib/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./ClientApp/store/index.ts");
var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};function configureStore(history,initialState){// Build middleware. These are functions that can process the actions before they reach the store.
var windowIfDefined=typeof window==='undefined'?null:window;// If devTools is installed, connect to it
var devToolsExtension=windowIfDefined&&windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__;var createStoreWithMiddleware=Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a,Object(connected_react_router__WEBPACK_IMPORTED_MODULE_2__["routerMiddleware"])(history)),devToolsExtension?devToolsExtension():function(next){return next;})(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"]);// Combine all reducers and instantiate the app-wide store instance
var allReducers=buildRootReducer(_store__WEBPACK_IMPORTED_MODULE_3__["reducers"],history);var store=createStoreWithMiddleware(allReducers,initialState);// Enable Webpack hot module replacement for reducers
if(false){}return store;}var routerReducer=function(history){var initialState={location:history.location,action:history.action};return function(state,arg){if(state===void 0){state=initialState;}if(arg===void 0){arg={};}if(arg.type===connected_react_router__WEBPACK_IMPORTED_MODULE_2__["LOCATION_CHANGE"]){return __assign({},state,arg.payload);}return state;};};function buildRootReducer(allReducers,history){return Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(__assign({},allReducers,{router:routerReducer(history)}));}

/***/ }),

/***/ "./ClientApp/images/logo.png":
/*!***********************************!*\
  !*** ./ClientApp/images/logo.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "41b61ebfee29e470850ed2d2d889e33f.png";

/***/ }),

/***/ "./ClientApp/layouts/AuthorizedLayout.tsx":
/*!************************************************!*\
  !*** ./ClientApp/layouts/AuthorizedLayout.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_shared_TopMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components/shared/TopMenu */ "./ClientApp/components/shared/TopMenu.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Styles_authorizedLayout_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Styles/authorizedLayout.scss */ "./ClientApp/styles/authorizedLayout.scss");
/* harmony import */ var _Styles_authorizedLayout_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Styles_authorizedLayout_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/lib/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_shared_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/shared/Footer */ "./ClientApp/components/shared/Footer.tsx");
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var AuthorizedLayout=/** @class */function(_super){__extends(AuthorizedLayout,_super);function AuthorizedLayout(){return _super!==null&&_super.apply(this,arguments)||this;}AuthorizedLayout.prototype.render=function(){return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{id:"authorizedLayout",className:"layout"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_TopMenu__WEBPACK_IMPORTED_MODULE_0__["default"],null),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"container container-content"},this.props.children),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_toastify__WEBPACK_IMPORTED_MODULE_3__["ToastContainer"],null),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_Footer__WEBPACK_IMPORTED_MODULE_4__["default"],null));};return AuthorizedLayout;}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (AuthorizedLayout);

/***/ }),

/***/ "./ClientApp/layouts/GuestLayout.tsx":
/*!*******************************************!*\
  !*** ./ClientApp/layouts/GuestLayout.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Styles_guestLayout_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Styles/guestLayout.scss */ "./ClientApp/styles/guestLayout.scss");
/* harmony import */ var _Styles_guestLayout_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Styles_guestLayout_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/lib/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var GuestLayout=/** @class */function(_super){__extends(GuestLayout,_super);function GuestLayout(){return _super!==null&&_super.apply(this,arguments)||this;}GuestLayout.prototype.render=function(){return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{id:"guestLayout",className:"layout"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"container container-content"},this.props.children),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_toastify__WEBPACK_IMPORTED_MODULE_2__["ToastContainer"],null));};return GuestLayout;}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (GuestLayout);

/***/ }),

/***/ "./ClientApp/models/Result.ts":
/*!************************************!*\
  !*** ./ClientApp/models/Result.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Result=/** @class */function(){function Result(value){var errors=[];for(var _i=1;_i<arguments.length;_i++){errors[_i-1]=arguments[_i];}this.value=value;this.errors=errors[0]==undefined||errors[0]==null?[]:errors;}Object.defineProperty(Result.prototype,"hasErrors",{get:function(){return this.errors!=null&&Array.isArray(this.errors)&&this.errors.length>0;},enumerable:true,configurable:true});return Result;}();/* harmony default export */ __webpack_exports__["default"] = (Result);

/***/ }),

/***/ "./ClientApp/pages/ExamplePage.tsx":
/*!*****************************************!*\
  !*** ./ClientApp/pages/ExamplePage.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Styles/main.scss */ "./ClientApp/styles/main.scss");
/* harmony import */ var _Styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Store_PersonStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Store/PersonStore */ "./ClientApp/store/PersonStore.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_shared_PagingBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/shared/PagingBar */ "./ClientApp/components/shared/PagingBar.tsx");
/* harmony import */ var _Components_person_PersonEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/person/PersonEditor */ "./ClientApp/components/person/PersonEditor.tsx");
/* harmony import */ var _Components_shared_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/shared/Loader */ "./ClientApp/components/shared/Loader.tsx");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Components_shared_ModalComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/shared/ModalComponent */ "./ClientApp/components/shared/ModalComponent.tsx");
/* harmony import */ var awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! awesome-debounce-promise */ "./node_modules/awesome-debounce-promise/awesome-debounce-promise.js");
/* harmony import */ var awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_11__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;};var ExamplePage=/** @class */function(_super){__extends(ExamplePage,_super);function ExamplePage(props){var _this=_super.call(this,props)||this;_this.state={searchTerm:"",pageNum:1,limitPerPage:5,rowOffset:0,modelForEdit:{}};_this.debouncedSearch=awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_11___default()(function(term){props.searchRequest(term);},500);return _this;}ExamplePage.prototype.componentWillMount=function(){this.props.searchRequest();};ExamplePage.prototype.componentWillUnmount=function(){if(this.elModalAdd){this.elModalAdd.hide();}if(this.elModalEdit){this.elModalEdit.hide();}if(this.elModalDelete){this.elModalDelete.hide();}};ExamplePage.prototype.onChangePage=function(pageNum){var rowOffset=Math.ceil((pageNum-1)*this.state.limitPerPage);this.setState({pageNum:pageNum,rowOffset:rowOffset});};ExamplePage.prototype.onClickShowAddModal=function(e){this.elModalAdd.show();};ExamplePage.prototype.onClickShowEditModal=function(e,modelForEdit){this.setState({modelForEdit:modelForEdit});this.elModalEdit.show();};ExamplePage.prototype.onClickShowDeleteModal=function(e,modelForEdit){this.setState({modelForEdit:modelForEdit});this.elModalDelete.show();};ExamplePage.prototype.onClickPersonEditorAdd__saveBtn=function(e){e.preventDefault();if(!this.personEditorAdd.elForm.isValid()){return;}this.props.addRequest(this.personEditorAdd.elForm.getData());this.pagingBar.setLastPage();this.elModalAdd.hide();};ExamplePage.prototype.onClickPersonEditorEdit__saveBtn=function(e){if(!this.personEditorEdit.elForm.isValid()){return;}var data=this.personEditorEdit.elForm.getData();this.props.updateRequest(data);this.elModalEdit.hide();};ExamplePage.prototype.onClickPersonEditorDelete__saveBtn=function(e){this.props.deleteRequest(this.state.modelForEdit.id);this.elModalDelete.hide();};ExamplePage.prototype.renderRow=function(person){var _this=this;return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr",{key:person.id},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td",null,person.firstName),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td",null,person.lastName),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{className:"btn btn-info",onClick:function(x){return _this.onClickShowEditModal(x,person);}},"Edit"),"\u00A0",react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{className:"btn btn-danger",onClick:function(x){return _this.onClickShowDeleteModal(x,person);}},"Delete")));};ExamplePage.prototype.renderRows=function(data){var _this=this;return data.slice(this.state.rowOffset,this.state.rowOffset+this.state.limitPerPage).map(function(x){return _this.renderRow(x);});};ExamplePage.prototype.onChangeSearchInput=function(e){var val=e.currentTarget.value;this.debouncedSearch(val);this.pagingBar.setFirstPage();};ExamplePage.prototype.render=function(){var _this=this;return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"],null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("title",null,"Example - RCB")),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_Loader__WEBPACK_IMPORTED_MODULE_8__["default"],{show:this.props.indicators.operationLoading}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"panel panel-default"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"panel-body row"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"col-sm-1"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{className:"btn btn-success",onClick:this.onClickShowAddModal},"Add")),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"col-sm-11"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input",{type:"text",className:"form-control",defaultValue:"",onChange:this.onChangeSearchInput,placeholder:"Search for people..."})))),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table",{className:"table"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th",null,"First name"),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th",null,"Last name"),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th",null))),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody",null,this.renderRows(this.props.people))),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_ModalComponent__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],{ref:function(x){return _this.elModalAdd=x;},buttons:react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{type:"button",className:"btn btn-default","data-dismiss":"modal"},"Close"),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{type:"button",className:"btn btn-primary",onClick:this.onClickPersonEditorAdd__saveBtn},"Save")),title:"Add person",onHide:function(){if(_this.personEditorAdd){_this.personEditorAdd.emptyForm();}}},react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_person_PersonEditor__WEBPACK_IMPORTED_MODULE_7__["default"],{ref:function(x){return _this.personEditorAdd=x;},data:{}})),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_ModalComponent__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],{ref:function(x){return _this.elModalEdit=x;},buttons:react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{type:"button",className:"btn btn-default","data-dismiss":"modal"},"Close"),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{type:"button",className:"btn btn-primary",onClick:this.onClickPersonEditorEdit__saveBtn},"Save")),title:"Edit person: "+this.state.modelForEdit.firstName+" "+this.state.modelForEdit.lastName,onHide:function(){if(_this.personEditorEdit){_this.setState({modelForEdit:{}});}}},react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_person_PersonEditor__WEBPACK_IMPORTED_MODULE_7__["default"],{ref:function(x){return _this.personEditorEdit=x;},data:this.state.modelForEdit})),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_ModalComponent__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],{ref:function(x){return _this.elModalDelete=x;},buttons:react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{type:"button",className:"btn btn-default","data-dismiss":"modal"},"Close"),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{type:"button",className:"btn btn-danger",onClick:this.onClickPersonEditorDelete__saveBtn},"Delete")),title:"Delete person: "+this.state.modelForEdit.firstName+" "+this.state.modelForEdit.lastName},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p",null,"Do you really want to delete this person?")),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_PagingBar__WEBPACK_IMPORTED_MODULE_6__["PagingBar"],{ref:function(x){return _this.pagingBar=x;},totalResults:this.props.people.length,limitPerPage:this.state.limitPerPage,currentPage:this.state.pageNum,onChangePage:this.onChangePage}));};__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],ExamplePage.prototype,"onChangePage",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],ExamplePage.prototype,"onClickShowAddModal",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],ExamplePage.prototype,"onClickShowEditModal",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],ExamplePage.prototype,"onClickShowDeleteModal",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],ExamplePage.prototype,"onClickPersonEditorAdd__saveBtn",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],ExamplePage.prototype,"onClickPersonEditorEdit__saveBtn",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],ExamplePage.prototype,"onClickPersonEditorDelete__saveBtn",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],ExamplePage.prototype,"renderRow",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],ExamplePage.prototype,"renderRows",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],ExamplePage.prototype,"onChangeSearchInput",null);return ExamplePage;}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);var component=Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(function(state){return state.person;},// Selects which state properties are merged into the component's props.
_Store_PersonStore__WEBPACK_IMPORTED_MODULE_4__["PersonStore"].actionCreators// Selects which action creators are merged into the component's props.
)(ExamplePage);/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(component));

/***/ }),

/***/ "./ClientApp/pages/HomePage.tsx":
/*!**************************************!*\
  !*** ./ClientApp/pages/HomePage.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Images_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Images/logo.png */ "./ClientApp/images/logo.png");
/* harmony import */ var _Images_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Images_logo_png__WEBPACK_IMPORTED_MODULE_2__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var HomePage=/** @class */function(_super){__extends(HomePage,_super);function HomePage(props){return _super.call(this,props)||this;}HomePage.prototype.render=function(){return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",null,react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"],null,react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title",null,"Home page - RCB")),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img",{style:{"margin":"0 auto","display":"block","width":"100%"},src:_Images_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a}),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p",{className:"text-center",style:{"fontSize":"52px"}},"Happy coding!"));};return HomePage;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./ClientApp/pages/LoginPage.tsx":
/*!***************************************!*\
  !*** ./ClientApp/pages/LoginPage.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_shared_Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components/shared/Loader */ "./ClientApp/components/shared/Loader.tsx");
/* harmony import */ var _Store_LoginStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Store/LoginStore */ "./ClientApp/store/LoginStore.ts");
/* harmony import */ var _Styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Styles/main.scss */ "./ClientApp/styles/main.scss");
/* harmony import */ var _Styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Components_shared_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/shared/Form */ "./ClientApp/components/shared/Form.tsx");
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;};var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};;var LoginPage=/** @class */function(_super){__extends(LoginPage,_super);function LoginPage(props){return _super.call(this,props)||this;}LoginPage.prototype.componentDidMount=function(){this.props.init();if(this.elLoader){this.elLoader.forceUpdate();}};LoginPage.prototype.onClickSubmitBtn=function(e){return __awaiter(this,void 0,void 0,function(){var data;return __generator(this,function(_a){e.preventDefault();if(this.elForm.isValid()){data=this.elForm.getData();this.props.loginRequest(data);}return[2/*return*/];});});};LoginPage.prototype.render=function(){var _this=this;if(this.props.indicators.loginSuccess){return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_6__["Redirect"],{to:"/"});}return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div",{id:"loginPage"},react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_4__["Helmet"],null,react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("title",null,"Login page - RCB")),react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_Components_shared_Loader__WEBPACK_IMPORTED_MODULE_0__["default"],{ref:function(x){return _this.elLoader=x;},show:this.props.indicators.operationLoading}),react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div",{id:"loginContainer"},react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("p",{className:"text-center"},"Type any login and password to enter."),react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_Components_shared_Form__WEBPACK_IMPORTED_MODULE_8__["Form"],{ref:function(x){return _this.elForm=x;}},react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("label",{htmlFor:"inputLogin"},"Login"),react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("input",{type:"text",name:"login","data-value-type":"string",className:"form-control",id:"inputLogin","data-val-required":"true","data-msg-required":"Login is required."})),react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("label",{htmlFor:"inputLogin"},"Password"),react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("input",{type:"password",name:"password","data-value-type":"string",className:"form-control",id:"inputPassword","data-val-required":"true","data-msg-required":"Password is required."})),react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div",{className:"form-inline"},react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("button",{className:"btn btn-success",onClick:this.onClickSubmitBtn},"Sign in")))));};__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_7___default.a],LoginPage.prototype,"onClickSubmitBtn",null);return LoginPage;}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);var component=Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(function(state){return state.login;},// Selects which state properties are merged into the component's props
_Store_LoginStore__WEBPACK_IMPORTED_MODULE_1__["LoginStore"].actionCreators// Selects which action creators are merged into the component's props
)(LoginPage);/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(component));

/***/ }),

/***/ "./ClientApp/routes.tsx":
/*!******************************!*\
  !*** ./ClientApp/routes.tsx ***!
  \******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _Layouts_AuthorizedLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Layouts/AuthorizedLayout */ "./ClientApp/layouts/AuthorizedLayout.tsx");
/* harmony import */ var _Layouts_GuestLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Layouts/GuestLayout */ "./ClientApp/layouts/GuestLayout.tsx");
/* harmony import */ var _Pages_LoginPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Pages/LoginPage */ "./ClientApp/pages/LoginPage.tsx");
/* harmony import */ var _Components_shared_AppRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/shared/AppRoute */ "./ClientApp/components/shared/AppRoute.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Pages_HomePage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Pages/HomePage */ "./ClientApp/pages/HomePage.tsx");
/* harmony import */ var _Pages_ExamplePage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Pages/ExamplePage */ "./ClientApp/pages/ExamplePage.tsx");
var routes=react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Switch"],null,react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Components_shared_AppRoute__WEBPACK_IMPORTED_MODULE_3__["AppRoute"],{layout:_Layouts_GuestLayout__WEBPACK_IMPORTED_MODULE_1__["default"],exact:true,path:"/login",component:_Pages_LoginPage__WEBPACK_IMPORTED_MODULE_2__["default"]}),react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Components_shared_AppRoute__WEBPACK_IMPORTED_MODULE_3__["AppRoute"],{layout:_Layouts_AuthorizedLayout__WEBPACK_IMPORTED_MODULE_0__["default"],exact:true,path:"/",component:_Pages_HomePage__WEBPACK_IMPORTED_MODULE_6__["default"]}),react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Components_shared_AppRoute__WEBPACK_IMPORTED_MODULE_3__["AppRoute"],{layout:_Layouts_AuthorizedLayout__WEBPACK_IMPORTED_MODULE_0__["default"],exact:true,path:"/example",component:_Pages_ExamplePage__WEBPACK_IMPORTED_MODULE_7__["default"]}));

/***/ }),

/***/ "./ClientApp/services/AccountService.ts":
/*!**********************************************!*\
  !*** ./ClientApp/services/AccountService.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ServiceBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceBase */ "./ClientApp/services/ServiceBase.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Globals */ "./ClientApp/Globals.ts");
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};var AccountService=/** @class */function(_super){__extends(AccountService,_super);function AccountService(){return _super!==null&&_super.apply(this,arguments)||this;}AccountService.login=function(loginModel){return __awaiter(this,void 0,Promise,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,this.requestJson({url:"api/Account/Login",method:"POST",data:loginModel})];case 1:result=_a.sent();if(!result.hasErrors){_Globals__WEBPACK_IMPORTED_MODULE_1__["default"].serviceUser=result.value;}return[2/*return*/,result];}});});};AccountService.logout=function(){return __awaiter(this,void 0,Promise,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,this.requestJson({url:"api/Account/Logout",method:"POST"})];case 1:result=_a.sent();if(!result.hasErrors){_Globals__WEBPACK_IMPORTED_MODULE_1__["default"].serviceUser=null;}return[2/*return*/,result];}});});};return AccountService;}(_ServiceBase__WEBPACK_IMPORTED_MODULE_0__["ServiceBase"]);/* harmony default export */ __webpack_exports__["default"] = (AccountService);

/***/ }),

/***/ "./ClientApp/services/PersonService.ts":
/*!*********************************************!*\
  !*** ./ClientApp/services/PersonService.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Services_ServiceBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Services/ServiceBase */ "./ClientApp/services/ServiceBase.ts");
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};var PersonService=/** @class */function(_super){__extends(PersonService,_super);function PersonService(){return _super!==null&&_super.apply(this,arguments)||this;}PersonService.search=function(term){if(term===void 0){term=null;}return __awaiter(this,void 0,Promise,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:if(term==null){term="";}return[4/*yield*/,this.requestJson({url:"/api/Person/Search?term="+term,method:"GET"})];case 1:result=_a.sent();return[2/*return*/,result];}});});};PersonService.update=function(model){return __awaiter(this,void 0,Promise,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,this.requestJson({url:"/api/Person",method:"PATCH",data:model})];case 1:result=_a.sent();return[2/*return*/,result];}});});};PersonService.delete=function(id){return __awaiter(this,void 0,Promise,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,this.requestJson({url:"/api/Person/"+id,method:"DELETE"})];case 1:result=_a.sent();return[2/*return*/,result];}});});};PersonService.add=function(model){return __awaiter(this,void 0,Promise,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,this.requestJson({url:"/api/Person/Add",method:"POST",data:model})];case 1:result=_a.sent();return[2/*return*/,result];}});});};return PersonService;}(_Services_ServiceBase__WEBPACK_IMPORTED_MODULE_0__["ServiceBase"]);/* harmony default export */ __webpack_exports__["default"] = (PersonService);

/***/ }),

/***/ "./ClientApp/services/ServiceBase.ts":
/*!*******************************************!*\
  !*** ./ClientApp/services/ServiceBase.ts ***!
  \*******************************************/
/*! exports provided: ServiceBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceBase", function() { return ServiceBase; });
/* harmony import */ var _Ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Ui */ "./ClientApp/Ui.ts");
/* harmony import */ var _Models_Result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Models/Result */ "./ClientApp/models/Result.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var domain_wait__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! domain-wait */ "./node_modules/domain-wait/dist/cjs/index.js");
/* harmony import */ var domain_wait__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(domain_wait__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var json_to_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! json-to-url */ "./node_modules/json-to-url/index.js");
/* harmony import */ var json_to_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(json_to_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Utils */ "./ClientApp/utils.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Globals */ "./ClientApp/Globals.ts");
var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};/**
 * Represents base class of the isomorphic service.
 */var ServiceBase=/** @class */function(){function ServiceBase(){}/**
     * Make request with JSON data.
     * @param opts
     */ServiceBase.requestJson=function(opts){return __awaiter(this,void 0,Promise,function(){var axiosResult,result,processQuery,axiosRequestConfig,_a,error_1;return __generator(this,function(_b){switch(_b.label){case 0:axiosResult=null;result=null;opts.url=Object(domain_wait__WEBPACK_IMPORTED_MODULE_3__["transformUrl"])(opts.url);// Allow requests also for Node.
processQuery=function(url,data){if(data){return url+"?"+json_to_url__WEBPACK_IMPORTED_MODULE_4___default()(data);}return url;};if(Object(_Utils__WEBPACK_IMPORTED_MODULE_5__["isNode"])()){// Used for SSR requests from the web server to NodeServices.
axiosRequestConfig={headers:{Cookie:_Globals__WEBPACK_IMPORTED_MODULE_6__["default"].getData().private.cookie}};}_b.label=1;case 1:_b.trys.push([1,13,,14]);_a=opts.method;switch(_a){case"GET":return[3/*break*/,2];case"POST":return[3/*break*/,4];case"PUT":return[3/*break*/,6];case"PATCH":return[3/*break*/,8];case"DELETE":return[3/*break*/,10];}return[3/*break*/,12];case 2:return[4/*yield*/,axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(processQuery(opts.url,opts.data),axiosRequestConfig)];case 3:axiosResult=_b.sent();return[3/*break*/,12];case 4:return[4/*yield*/,axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(opts.url,opts.data,axiosRequestConfig)];case 5:axiosResult=_b.sent();return[3/*break*/,12];case 6:return[4/*yield*/,axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(opts.url,opts.data,axiosRequestConfig)];case 7:axiosResult=_b.sent();return[3/*break*/,12];case 8:return[4/*yield*/,axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch(opts.url,opts.data,axiosRequestConfig)];case 9:axiosResult=_b.sent();return[3/*break*/,12];case 10:return[4/*yield*/,axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(processQuery(opts.url,opts.data),axiosRequestConfig)];case 11:axiosResult=_b.sent();return[3/*break*/,12];case 12:result=new(_Models_Result__WEBPACK_IMPORTED_MODULE_1__["default"].bind.apply(_Models_Result__WEBPACK_IMPORTED_MODULE_1__["default"],[void 0,axiosResult.data.value].concat(axiosResult.data.errors)))();return[3/*break*/,14];case 13:error_1=_b.sent();result=new _Models_Result__WEBPACK_IMPORTED_MODULE_1__["default"](null,error_1.message);return[3/*break*/,14];case 14:if(result.hasErrors){_Ui__WEBPACK_IMPORTED_MODULE_0__["Ui"].showErrors.apply(_Ui__WEBPACK_IMPORTED_MODULE_0__["Ui"],result.errors);}return[2/*return*/,result];}});});};/**
     * Allows you to send files to the server.
     * @param opts
     */ServiceBase.sendFormData=function(opts){return __awaiter(this,void 0,Promise,function(){var axiosResult,result,axiosOpts,_a,error_2;return __generator(this,function(_b){switch(_b.label){case 0:axiosResult=null;result=null;opts.url=Object(domain_wait__WEBPACK_IMPORTED_MODULE_3__["transformUrl"])(opts.url);// Allow requests also for Node.
axiosOpts={headers:{'Content-Type':'multipart/form-data'}};_b.label=1;case 1:_b.trys.push([1,9,,10]);_a=opts.method;switch(_a){case"POST":return[3/*break*/,2];case"PUT":return[3/*break*/,4];case"PATCH":return[3/*break*/,6];}return[3/*break*/,8];case 2:return[4/*yield*/,axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(opts.url,opts.data,axiosOpts)];case 3:axiosResult=_b.sent();return[3/*break*/,8];case 4:return[4/*yield*/,axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(opts.url,opts.data,axiosOpts)];case 5:axiosResult=_b.sent();return[3/*break*/,8];case 6:return[4/*yield*/,axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch(opts.url,opts.data,axiosOpts)];case 7:axiosResult=_b.sent();return[3/*break*/,8];case 8:result=new(_Models_Result__WEBPACK_IMPORTED_MODULE_1__["default"].bind.apply(_Models_Result__WEBPACK_IMPORTED_MODULE_1__["default"],[void 0,axiosResult.data.value].concat(axiosResult.data.errors)))();return[3/*break*/,10];case 9:error_2=_b.sent();result=new _Models_Result__WEBPACK_IMPORTED_MODULE_1__["default"](null,error_2.message);return[3/*break*/,10];case 10:if(result.hasErrors){_Ui__WEBPACK_IMPORTED_MODULE_0__["Ui"].showErrors.apply(_Ui__WEBPACK_IMPORTED_MODULE_0__["Ui"],result.errors);}return[2/*return*/,result];}});});};return ServiceBase;}();

/***/ }),

/***/ "./ClientApp/store/LoginStore.ts":
/*!***************************************!*\
  !*** ./ClientApp/store/LoginStore.ts ***!
  \***************************************/
/*! exports provided: LoginStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginStore", function() { return LoginStore; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Utils */ "./ClientApp/utils.ts");
/* harmony import */ var _Services_AccountService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Services/AccountService */ "./ClientApp/services/AccountService.ts");
var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};var LoginStore;(function(LoginStore){var _this=this;var Actions;(function(Actions){/**
         * You need to have the initial state to
         * reset the indicators (e.g. loginSuccess)
         * that call redirect or any other actions.
         * It must be called in method 'componentDidMount'
         * of a component.
         */Actions["Init"]="LOGIN_INIT";Actions["Request"]="LOGIN_REQUEST";Actions["Success"]="LOGIN_SUCCESS";Actions["Failure"]="LOGIN_FAILURE";})(Actions=LoginStore.Actions||(LoginStore.Actions={}));LoginStore.actionCreators={init:function(){return function(dispatch,getState){return __awaiter(_this,void 0,void 0,function(){return __generator(this,function(_a){dispatch({type:Actions.Init});return[2/*return*/];});});};},loginRequest:function(model){return function(dispatch,getState){return __awaiter(_this,void 0,void 0,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:dispatch({type:Actions.Request});return[4/*yield*/,_Services_AccountService__WEBPACK_IMPORTED_MODULE_1__["default"].login(model)];case 1:result=_a.sent();if(result.hasErrors){dispatch({type:Actions.Failure});return[2/*return*/];}dispatch({type:Actions.Success,payload:result.value});return[2/*return*/];}});});};}};var initialState={indicators:{operationLoading:false,loginSuccess:false}};LoginStore.reducer=function(currentState,incomingAction){var action=incomingAction;var cloneIndicators=function(){return Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["clone"])(currentState.indicators);};switch(action.type){case Actions.Init:return initialState;case Actions.Request:var indicators=cloneIndicators();indicators.operationLoading=true;return __assign({},currentState,{indicators:indicators});case Actions.Success:var indicators=cloneIndicators();indicators.operationLoading=false;indicators.loginSuccess=true;return __assign({},currentState,{indicators:indicators});case Actions.Failure:var indicators=cloneIndicators();indicators.operationLoading=false;return __assign({},currentState,{indicators:indicators});default:// The following line guarantees that every action in the KnownAction union has been covered by a case above
var exhaustiveCheck=action;}return currentState||initialState;};})(LoginStore||(LoginStore={}));

/***/ }),

/***/ "./ClientApp/store/PersonStore.ts":
/*!****************************************!*\
  !*** ./ClientApp/store/PersonStore.ts ***!
  \****************************************/
/*! exports provided: PersonStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonStore", function() { return PersonStore; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Utils */ "./ClientApp/utils.ts");
/* harmony import */ var _Services_PersonService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Services/PersonService */ "./ClientApp/services/PersonService.ts");
/* harmony import */ var domain_wait__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! domain-wait */ "./node_modules/domain-wait/dist/cjs/index.js");
/* harmony import */ var domain_wait__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(domain_wait__WEBPACK_IMPORTED_MODULE_2__);
var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};var PersonStore;(function(PersonStore){var _this=this;var Actions;(function(Actions){Actions["SearchRequest"]="PERSON_SEARCH_REQUEST";Actions["SearchResponse"]="PERSON_SEARCH_RESPONSE";Actions["AddRequest"]="PERSON_ADD_REQUEST";Actions["AddResponse"]="PERSON_ADD_RESPONSE";Actions["UpdateRequest"]="PERSON_UPDATE_REQUEST";Actions["UpdateResponse"]="PERSON_UPDATE_RESPONSE";Actions["DeleteRequest"]="PERSON_DELETE_REQUEST";Actions["DeleteResponse"]="PERSON_DELETE_RESPONSE";})(Actions=PersonStore.Actions||(PersonStore.Actions={}));PersonStore.actionCreators={searchRequest:function(term){return function(dispatch,getState){return __awaiter(_this,void 0,void 0,function(){var _this=this;return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,Object(domain_wait__WEBPACK_IMPORTED_MODULE_2__["wait"])(function(transformUrl){return __awaiter(_this,void 0,void 0,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:// Wait for server prerendering.
dispatch({type:Actions.SearchRequest});return[4/*yield*/,_Services_PersonService__WEBPACK_IMPORTED_MODULE_1__["default"].search(term)];case 1:result=_a.sent();if(!result.hasErrors){dispatch({type:Actions.SearchResponse,payload:result.value});}return[2/*return*/];}});});})];case 1:_a.sent();return[2/*return*/];}});});};},addRequest:function(model){return function(dispatch,getState){return __awaiter(_this,void 0,void 0,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:dispatch({type:Actions.AddRequest});return[4/*yield*/,_Services_PersonService__WEBPACK_IMPORTED_MODULE_1__["default"].add(model)];case 1:result=_a.sent();if(!result.hasErrors){model.id=result.value;dispatch({type:Actions.AddResponse,payload:model});}return[2/*return*/];}});});};},updateRequest:function(model){return function(dispatch,getState){return __awaiter(_this,void 0,void 0,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:dispatch({type:Actions.UpdateRequest});return[4/*yield*/,_Services_PersonService__WEBPACK_IMPORTED_MODULE_1__["default"].update(model)];case 1:result=_a.sent();if(!result.hasErrors){dispatch({type:Actions.UpdateResponse,payload:model});}return[2/*return*/];}});});};},deleteRequest:function(id){return function(dispatch,getState){return __awaiter(_this,void 0,void 0,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:dispatch({type:Actions.DeleteRequest});return[4/*yield*/,_Services_PersonService__WEBPACK_IMPORTED_MODULE_1__["default"].delete(id)];case 1:result=_a.sent();if(!result.hasErrors){dispatch({type:Actions.DeleteResponse,id:id});}return[2/*return*/];}});});};}};var initialState={people:[],indicators:{operationLoading:false}};PersonStore.reducer=function(currentState,incomingAction){var action=incomingAction;var cloneIndicators=function(){return Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["clone"])(currentState.indicators);};switch(action.type){case Actions.SearchRequest:var indicators=cloneIndicators();indicators.operationLoading=true;return __assign({},currentState,{indicators:indicators});case Actions.SearchResponse:var indicators=cloneIndicators();indicators.operationLoading=false;return __assign({},currentState,{indicators:indicators,people:action.payload});case Actions.UpdateRequest:var indicators=cloneIndicators();indicators.operationLoading=true;return __assign({},currentState,{indicators:indicators});case Actions.UpdateResponse:var indicators=cloneIndicators();indicators.operationLoading=false;var data=Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["clone"])(currentState.people);var itemToUpdate=data.filter(function(x){return x.id===action.payload.id;})[0];itemToUpdate.firstName=action.payload.firstName;itemToUpdate.lastName=action.payload.lastName;return __assign({},currentState,{indicators:indicators,people:data});case Actions.AddRequest:var indicators=cloneIndicators();indicators.operationLoading=true;return __assign({},currentState,{indicators:indicators});case Actions.AddResponse:var indicators=cloneIndicators();indicators.operationLoading=false;var data=Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["clone"])(currentState.people);data.push(action.payload);return __assign({},currentState,{indicators:indicators,people:data});case Actions.DeleteRequest:var indicators=cloneIndicators();indicators.operationLoading=true;return __assign({},currentState,{indicators:indicators});case Actions.DeleteResponse:var indicators=cloneIndicators();indicators.operationLoading=false;var data=Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["clone"])(currentState.people).filter(function(x){return x.id!==action.id;});return __assign({},currentState,{indicators:indicators,people:data});default:// The following line guarantees that every action in the KnownAction union has been covered by a case above
var exhaustiveCheck=action;}return currentState||initialState;};})(PersonStore||(PersonStore={}));

/***/ }),

/***/ "./ClientApp/store/index.ts":
/*!**********************************!*\
  !*** ./ClientApp/store/index.ts ***!
  \**********************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _Store_LoginStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Store/LoginStore */ "./ClientApp/store/LoginStore.ts");
/* harmony import */ var _Store_PersonStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Store/PersonStore */ "./ClientApp/store/PersonStore.ts");
// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
var reducers={login:_Store_LoginStore__WEBPACK_IMPORTED_MODULE_0__["LoginStore"].reducer,person:_Store_PersonStore__WEBPACK_IMPORTED_MODULE_1__["PersonStore"].reducer};

/***/ }),

/***/ "./ClientApp/styles/authorizedLayout.scss":
/*!************************************************!*\
  !*** ./ClientApp/styles/authorizedLayout.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./ClientApp/styles/guestLayout.scss":
/*!*******************************************!*\
  !*** ./ClientApp/styles/guestLayout.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./ClientApp/styles/loader.scss":
/*!**************************************!*\
  !*** ./ClientApp/styles/loader.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./ClientApp/styles/main.scss":
/*!************************************!*\
  !*** ./ClientApp/styles/main.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./ClientApp/utils.ts":
/*!****************************!*\
  !*** ./ClientApp/utils.ts ***!
  \****************************/
/*! exports provided: clone, getPromiseFromAction, isNode, isObjectEmpty, emptyForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPromiseFromAction", function() { return getPromiseFromAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNode", function() { return isNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectEmpty", function() { return isObjectEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyForm", function() { return emptyForm; });
function clone(object){return JSON.parse(JSON.stringify(object));}function getPromiseFromAction(asyncActionCreator){return asyncActionCreator;}/**
 * Is server prerendering by Node.js.
 * There can't be any DOM: window, document, etc.
 */function isNode(){return typeof process==='object'&&process.versions&&!!process.versions.node;}function isObjectEmpty(obj){for(var key in obj){if(obj.hasOwnProperty(key))return false;}return true;}function emptyForm(form){var inputs=Array.from(form.querySelectorAll("input, select, textarea"));inputs.forEach(function(x){var inputType=x.getAttribute("type");if(inputType==="checkbox"||inputType==="radio"){x.checked=false;}else{x.value="";}});}

/***/ }),

/***/ "./node_modules/aspnet-prerendering/index.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/aspnet-prerendering/index.js from dll-reference ./vendor ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/aspnet-prerendering/index.js");

/***/ }),

/***/ "./node_modules/awesome-debounce-promise/awesome-debounce-promise.js":
/*!***************************************************************************!*\
  !*** ./node_modules/awesome-debounce-promise/awesome-debounce-promise.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DebounceCache = exports.onlyResolvesLast = exports.debounce = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _debouncePromise = __webpack_require__(/*! debounce-promise */ "./node_modules/debounce-promise/dist/index.js");

var _debouncePromise2 = _interopRequireDefault(_debouncePromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// We use DebouncePromise as a dependency as it does a great low-level job
// The behavior of the lib is to return the same promise for all function calls
var debounce = exports.debounce = function debounce(func, wait, options) {
  return (0, _debouncePromise2.default)(func, wait, options);
};

// Given a function returning promises, wrap it so that only the promise returned from last call will actually resolve
// This is useful to ignore former async results and handle concurrency issues
var onlyResolvesLast = exports.onlyResolvesLast = function onlyResolvesLast(asyncFunction) {
  // Inspired from https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
  var makeCancelable = function makeCancelable(promise) {
    var hasCanceled_ = false;
    var wrappedPromise = new Promise(function (resolve, reject) {
      promise.then(function (val) {
        return hasCanceled_ ? undefined : resolve(val);
      }, function (error) {
        return hasCanceled_ ? undefined : reject(error);
      });
    });
    return {
      promise: wrappedPromise,
      cancel: function cancel() {
        hasCanceled_ = true;
      }
    };
  };

  var cancelPrevious = void 0;
  return function () {
    cancelPrevious && cancelPrevious();

    var _makeCancelable = makeCancelable(asyncFunction.apply(undefined, arguments)),
        promise = _makeCancelable.promise,
        cancel = _makeCancelable.cancel;

    cancelPrevious = cancel;
    return promise;
  };
};

// We create a debouncing function cache, because when wrapping the original function,
// we may actually want to route the function call to different debounced functions depending function paameters

var DebounceCache = exports.DebounceCache = function DebounceCache() {
  var _this = this;

  _classCallCheck(this, DebounceCache);

  this.getDebouncedFunction = function (func, wait, options, args) {
    var keyOptions = options.key,
        onlyResolvesLastOption = options.onlyResolvesLast,
        otherOptions = _objectWithoutProperties(options, ['key', 'onlyResolvesLast']);

    var key = keyOptions.apply(undefined, _toConsumableArray(args));
    // If the debounced function does not exist for this key, we create one on the fly and return it
    if (!_this.debounceCache[key]) {
      var debouncedFunc = debounce(func, wait, otherOptions);
      if (onlyResolvesLastOption) {
        debouncedFunc = onlyResolvesLast(debouncedFunc);
      }
      _this.debounceCache[key] = debouncedFunc;
    }
    return _this.debounceCache[key];
  };

  this.debounceCache = {};
};

var DefaultOptions = {
  // By default, the key is null, which means that all the function calls
  // will share the same debounced function
  // Providing a key function permit to use the call arguments
  // and route to a distinct debounced function
  key: function key() {
    return null;
  },

  // By default, a debounced function will only resolve
  // the last promise it returned
  // Former calls will stay unresolved, so that you don't have
  // to handle concurrency issues in your code
  onlyResolvesLast: true
};

function AwesomeDebouncePromise(func, wait, options) {
  var finalOptions = _extends({}, DefaultOptions, options);
  var debounceCache = new DebounceCache();
  return function AwesomeDebouncePromiseWrapper() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var debouncedFn = debounceCache.getDebouncedFunction(func, wait, finalOptions, args);
    return debouncedFn.apply(undefined, args);
  };
}

exports.default = AwesomeDebouncePromise;


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!***************************************************************************!*\
  !*** delegated ./node_modules/axios/index.js from dll-reference ./vendor ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/axios/index.js");

/***/ }),

/***/ "./node_modules/bind-decorator/index.js":
/*!**********************************************!*\
  !*** ./node_modules/bind-decorator/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants;
(function (constants) {
    constants.typeOfFunction = 'function';
    constants.boolTrue = true;
})(constants || (constants = {}));
function bind(target, propertyKey, descriptor) {
    if (!descriptor || (typeof descriptor.value !== constants.typeOfFunction)) {
        throw new TypeError("Only methods can be decorated with @bind. <" + propertyKey + "> is not a method!");
    }
    return {
        configurable: constants.boolTrue,
        get: function () {
            var bound = descriptor.value.bind(this);
            // Credits to https://github.com/andreypopp/autobind-decorator for memoizing the result of bind against a symbol on the instance.
            Object.defineProperty(this, propertyKey, {
                value: bound,
                configurable: constants.boolTrue,
                writable: constants.boolTrue
            });
            return bound;
        }
    };
}
exports.bind = bind;
exports.default = bind;


/***/ }),

/***/ "./node_modules/bootstrap3-native/index.js":
/*!***************************************************************************************!*\
  !*** delegated ./node_modules/bootstrap3-native/index.js from dll-reference ./vendor ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/bootstrap3-native/index.js");

/***/ }),

/***/ "./node_modules/connected-react-router/lib/index.js":
/*!************************************************************************************************!*\
  !*** delegated ./node_modules/connected-react-router/lib/index.js from dll-reference ./vendor ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/connected-react-router/lib/index.js");

/***/ }),

/***/ "./node_modules/create-react-context/lib/implementation.js":
/*!*****************************************************************!*\
  !*** ./node_modules/create-react-context/lib/implementation.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gud = __webpack_require__(/*! gud */ "./node_modules/gud/index.js");

var _gud2 = _interopRequireDefault(_gud);

var _warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (true) {
            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(_react.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(_react.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/create-react-context/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/create-react-context/lib/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _implementation = __webpack_require__(/*! ./implementation */ "./node_modules/create-react-context/lib/implementation.js");

var _implementation2 = _interopRequireDefault(_implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/debounce-promise/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/debounce-promise/dist/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* global setTimeout, clearTimeout */

module.exports = function debounce(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var lastCallAt = void 0;
  var deferred = void 0;
  var timer = void 0;
  var pendingArgs = [];
  return function debounced() {
    var currentWait = getWait(wait);
    var currentTime = new Date().getTime();

    var isCold = !lastCallAt || currentTime - lastCallAt > currentWait;

    lastCallAt = currentTime;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (isCold && options.leading) {
      return options.accumulate ? Promise.resolve(fn.call(this, [args])).then(function (result) {
        return result[0];
      }) : Promise.resolve(fn.call.apply(fn, [this].concat(args)));
    }

    if (deferred) {
      clearTimeout(timer);
    } else {
      deferred = defer();
    }

    pendingArgs.push(args);
    timer = setTimeout(flush.bind(this), currentWait);

    if (options.accumulate) {
      var _ret = function () {
        var argsIndex = pendingArgs.length - 1;
        return {
          v: deferred.promise.then(function (results) {
            return results[argsIndex];
          })
        };
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }

    return deferred.promise;
  };

  function flush() {
    var thisDeferred = deferred;
    clearTimeout(timer);

    Promise.resolve(options.accumulate ? fn.call(this, pendingArgs) : fn.apply(this, pendingArgs[pendingArgs.length - 1])).then(thisDeferred.resolve, thisDeferred.reject);

    pendingArgs = [];
    deferred = null;
  }
};

function getWait(wait) {
  return typeof wait === 'function' ? wait() : wait;
}

function defer() {
  var deferred = {};
  deferred.promise = new Promise(function (resolve, reject) {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  return deferred;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/deepmerge/dist/umd.js":
/*!********************************************!*\
  !*** ./node_modules/deepmerge/dist/umd.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		Object.keys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	Object.keys(source).forEach(function(key) {
		if (!options.isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		} else {
			destination[key] = deepmerge(target[key], source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

return deepmerge_1;

})));


/***/ }),

/***/ "./node_modules/domain-wait/dist/cjs/index.js":
/*!******************************************************************************************!*\
  !*** delegated ./node_modules/domain-wait/dist/cjs/index.js from dll-reference ./vendor ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/domain-wait/dist/cjs/index.js");

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/fbjs/lib/warning.js":
/*!******************************************!*\
  !*** ./node_modules/fbjs/lib/warning.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(/*! ./emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "./node_modules/formik/dist/formik.cjs.development.js":
/*!************************************************************!*\
  !*** ./node_modules/formik/dist/formik.cjs.development.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var hoistNonReactStatics = _interopDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/formik/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));
var createContext = _interopDefault(__webpack_require__(/*! create-react-context */ "./node_modules/create-react-context/lib/index.js"));
var cloneDeep = _interopDefault(__webpack_require__(/*! lodash.clonedeep */ "./node_modules/lodash.clonedeep/index.js"));
var toPath = _interopDefault(__webpack_require__(/*! lodash.topath */ "./node_modules/lodash.topath/index.js"));
var isEqual = _interopDefault(__webpack_require__(/*! react-fast-compare */ "./node_modules/react-fast-compare/index.js"));
var warning = _interopDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));
var deepmerge = _interopDefault(__webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/umd.js"));

var _a;
var FormikProvider = (_a = createContext({}), _a.Provider), FormikConsumer = _a.Consumer;
function connect(Comp) {
    var C = function (props) { return (React.createElement(FormikConsumer, null, function (formik) { return React.createElement(Comp, tslib_1.__assign({}, props, { formik: formik })); })); };
    C.WrappedComponent = Comp;
    return hoistNonReactStatics(C, Comp);
}

function getIn(obj, key, def, p) {
    if (p === void 0) { p = 0; }
    var path = toPath(key);
    while (obj && p < path.length) {
        obj = obj[path[p++]];
    }
    return obj === undefined ? def : obj;
}
function setIn(obj, path, value) {
    var res = {};
    var resVal = res;
    var i = 0;
    var pathArray = toPath(path);
    for (; i < pathArray.length - 1; i++) {
        var currentPath = pathArray[i];
        var currentObj = getIn(obj, pathArray.slice(0, i + 1));
        if (resVal[currentPath]) {
            resVal = resVal[currentPath];
        }
        else if (currentObj) {
            resVal = resVal[currentPath] = cloneDeep(currentObj);
        }
        else {
            var nextPath = pathArray[i + 1];
            resVal = resVal[currentPath] =
                isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
        }
    }
    if ((i === 0 ? obj : resVal)[pathArray[i]] === value) {
        return obj;
    }
    if (value === undefined) {
        delete resVal[pathArray[i]];
    }
    else {
        resVal[pathArray[i]] = value;
    }
    var result = tslib_1.__assign({}, obj, res);
    if (i === 0 && value === undefined) {
        delete result[pathArray[i]];
    }
    return result;
}
function setNestedObjectValues(object, value, visited, response) {
    if (visited === void 0) { visited = new WeakMap(); }
    if (response === void 0) { response = {}; }
    for (var _i = 0, _a = Object.keys(object); _i < _a.length; _i++) {
        var k = _a[_i];
        var val = object[k];
        if (isObject(val)) {
            if (!visited.get(val)) {
                visited.set(val, true);
                response[k] = Array.isArray(val) ? [] : {};
                setNestedObjectValues(val, value, visited, response[k]);
            }
        }
        else {
            response[k] = value;
        }
    }
    return response;
}
var isFunction = function (obj) {
    return typeof obj === 'function';
};
var isObject = function (obj) {
    return obj !== null && typeof obj === 'object';
};
var isInteger = function (obj) {
    return String(Math.floor(Number(obj))) === obj;
};
var isString = function (obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
};
var isNaN = function (obj) { return obj !== obj; };
var isEmptyChildren = function (children) {
    return React.Children.count(children) === 0;
};
var isPromise = function (value) {
    return isObject(value) && isFunction(value.then);
};
function getActiveElement(doc) {
    doc = doc || (typeof document !== 'undefined' ? document : undefined);
    if (typeof doc === 'undefined') {
        return null;
    }
    try {
        return doc.activeElement || doc.body;
    }
    catch (e) {
        return doc.body;
    }
}

var Formik = (function (_super) {
    tslib_1.__extends(Formik, _super);
    function Formik(props) {
        var _this = _super.call(this, props) || this;
        _this.hcCache = {};
        _this.hbCache = {};
        _this.registerField = function (name, Comp) {
            _this.fields[name] = Comp;
        };
        _this.unregisterField = function (name) {
            delete _this.fields[name];
        };
        _this.setErrors = function (errors) {
            _this.setState({ errors: errors });
        };
        _this.setTouched = function (touched) {
            _this.setState({ touched: touched }, function () {
                if (_this.props.validateOnBlur) {
                    _this.runValidations(_this.state.values);
                }
            });
        };
        _this.setValues = function (values) {
            _this.setState({ values: values }, function () {
                if (_this.props.validateOnChange) {
                    _this.runValidations(values);
                }
            });
        };
        _this.setStatus = function (status) {
            _this.setState({ status: status });
        };
        _this.setError = function (error) {
            {
                console.warn("Warning: Formik's setError(error) is deprecated and may be removed in future releases. Please use Formik's setStatus(status) instead. It works identically. For more info see https://github.com/jaredpalmer/formik#setstatus-status-any--void");
            }
            _this.setState({ error: error });
        };
        _this.setSubmitting = function (isSubmitting) {
            if (_this.didMount) {
                _this.setState({ isSubmitting: isSubmitting });
            }
        };
        _this.validateField = function (field) {
            _this.setState({ isValidating: true });
            _this.runSingleFieldLevelValidation(field, getIn(_this.state.values, field)).then(function (error) {
                if (_this.didMount) {
                    _this.setState({
                        errors: setIn(_this.state.errors, field, error),
                        isValidating: false,
                    });
                }
            });
        };
        _this.runSingleFieldLevelValidation = function (field, value) {
            return new Promise(function (resolve) {
                return resolve(_this.fields[field].props.validate(value));
            }).then(function (x) { return x; }, function (e) { return e; });
        };
        _this.runValidationSchema = function (values) {
            return new Promise(function (resolve) {
                var validationSchema = _this.props.validationSchema;
                var schema = isFunction(validationSchema)
                    ? validationSchema()
                    : validationSchema;
                validateYupSchema(values, schema).then(function () {
                    resolve({});
                }, function (err) {
                    resolve(yupToFormErrors(err));
                });
            });
        };
        _this.runValidations = function (values) {
            if (values === void 0) { values = _this.state.values; }
            _this.setState({ isValidating: true });
            return Promise.all([
                _this.runFieldLevelValidations(values),
                _this.props.validationSchema ? _this.runValidationSchema(values) : {},
                _this.props.validate ? _this.runValidateHandler(values) : {},
            ]).then(function (_a) {
                var fieldErrors = _a[0], schemaErrors = _a[1], handlerErrors = _a[2];
                var combinedErrors = deepmerge.all([fieldErrors, schemaErrors, handlerErrors], { arrayMerge: arrayMerge });
                if (_this.didMount) {
                    _this.setState({ isValidating: false, errors: combinedErrors });
                }
                return combinedErrors;
            });
        };
        _this.handleChange = function (eventOrPath) {
            var executeChange = function (eventOrTextValue, maybePath) {
                var field = maybePath;
                var val = eventOrTextValue;
                var parsed;
                if (!isString(eventOrTextValue)) {
                    if (eventOrTextValue.persist) {
                        eventOrTextValue.persist();
                    }
                    var _a = eventOrTextValue.target, type = _a.type, name_1 = _a.name, id = _a.id, value = _a.value, checked = _a.checked, outerHTML = _a.outerHTML;
                    field = maybePath ? maybePath : name_1 ? name_1 : id;
                    if (!field && "development" !== 'production') {
                        warnAboutMissingIdentifier({
                            htmlContent: outerHTML,
                            documentationAnchorLink: 'handlechange-e-reactchangeeventany--void',
                            handlerName: 'handleChange',
                        });
                    }
                    val = /number|range/.test(type)
                        ? ((parsed = parseFloat(value)), isNaN(parsed) ? '' : parsed)
                        : /checkbox/.test(type) ? checked : value;
                }
                if (field) {
                    _this.setState(function (prevState) { return (tslib_1.__assign({}, prevState, { values: setIn(prevState.values, field, val) })); }, function () {
                        if (_this.props.validateOnChange) {
                            _this.runValidations(setIn(_this.state.values, field, val));
                        }
                    });
                }
            };
            if (isString(eventOrPath)) {
                return isFunction(_this.hcCache[eventOrPath])
                    ? _this.hcCache[eventOrPath]
                    : (_this.hcCache[eventOrPath] = function (event) {
                        return executeChange(event, eventOrPath);
                    });
            }
            else {
                executeChange(eventOrPath);
            }
        };
        _this.setFieldValue = function (field, value, shouldValidate) {
            if (shouldValidate === void 0) { shouldValidate = true; }
            if (_this.didMount) {
                _this.setState(function (prevState) { return (tslib_1.__assign({}, prevState, { values: setIn(prevState.values, field, value) })); }, function () {
                    if (_this.props.validateOnChange && shouldValidate) {
                        _this.runValidations(_this.state.values);
                    }
                });
            }
        };
        _this.handleSubmit = function (e) {
            if (e && e.preventDefault) {
                e.preventDefault();
            }
            if (typeof document !== 'undefined') {
                var activeElement = getActiveElement();
                if (activeElement !== null &&
                    activeElement instanceof HTMLButtonElement) {
                    warning(!!(activeElement.attributes &&
                        activeElement.attributes.getNamedItem('type')), 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.');
                }
            }
            _this.submitForm();
        };
        _this.submitForm = function () {
            _this.setState(function (prevState) { return ({
                touched: setNestedObjectValues(prevState.values, true),
                isSubmitting: true,
                submitCount: prevState.submitCount + 1,
            }); });
            return _this.runValidations().then(function (combinedErrors) {
                var isValid = Object.keys(combinedErrors).length === 0;
                if (isValid) {
                    _this.executeSubmit();
                }
                else if (_this.didMount) {
                    _this.setState({ isSubmitting: false });
                }
            });
        };
        _this.executeSubmit = function () {
            _this.props.onSubmit(_this.state.values, _this.getFormikActions());
        };
        _this.handleBlur = function (eventOrString) {
            var executeBlur = function (e, path) {
                if (e.persist) {
                    e.persist();
                }
                var _a = e.target, name = _a.name, id = _a.id, outerHTML = _a.outerHTML;
                var field = path ? path : name ? name : id;
                if (!field && "development" !== 'production') {
                    warnAboutMissingIdentifier({
                        htmlContent: outerHTML,
                        documentationAnchorLink: 'handleblur-e-any--void',
                        handlerName: 'handleBlur',
                    });
                }
                _this.setState(function (prevState) { return ({
                    touched: setIn(prevState.touched, field, true),
                }); });
                if (_this.props.validateOnBlur) {
                    _this.runValidations(_this.state.values);
                }
            };
            if (isString(eventOrString)) {
                return isFunction(_this.hbCache[eventOrString])
                    ? _this.hbCache[eventOrString]
                    : (_this.hbCache[eventOrString] = function (event) {
                        return executeBlur(event, eventOrString);
                    });
            }
            else {
                executeBlur(eventOrString);
            }
        };
        _this.setFieldTouched = function (field, touched, shouldValidate) {
            if (touched === void 0) { touched = true; }
            if (shouldValidate === void 0) { shouldValidate = true; }
            _this.setState(function (prevState) { return (tslib_1.__assign({}, prevState, { touched: setIn(prevState.touched, field, touched) })); }, function () {
                if (_this.props.validateOnBlur && shouldValidate) {
                    _this.runValidations(_this.state.values);
                }
            });
        };
        _this.setFieldError = function (field, message) {
            _this.setState(function (prevState) { return (tslib_1.__assign({}, prevState, { errors: setIn(prevState.errors, field, message) })); });
        };
        _this.resetForm = function (nextValues) {
            var values = nextValues ? nextValues : _this.props.initialValues;
            _this.initialValues = values;
            _this.setState({
                isSubmitting: false,
                isValidating: false,
                errors: {},
                touched: {},
                error: undefined,
                status: undefined,
                values: values,
                submitCount: 0,
            });
        };
        _this.handleReset = function () {
            if (_this.props.onReset) {
                var maybePromisedOnReset = _this.props.onReset(_this.state.values, _this.getFormikActions());
                if (isPromise(maybePromisedOnReset)) {
                    maybePromisedOnReset.then(_this.resetForm);
                }
                else {
                    _this.resetForm();
                }
            }
            else {
                _this.resetForm();
            }
        };
        _this.setFormikState = function (s, callback) {
            return _this.setState(s, callback);
        };
        _this.getFormikActions = function () {
            return {
                resetForm: _this.resetForm,
                submitForm: _this.submitForm,
                validateForm: _this.runValidations,
                validateField: _this.validateField,
                setError: _this.setError,
                setErrors: _this.setErrors,
                setFieldError: _this.setFieldError,
                setFieldTouched: _this.setFieldTouched,
                setFieldValue: _this.setFieldValue,
                setStatus: _this.setStatus,
                setSubmitting: _this.setSubmitting,
                setTouched: _this.setTouched,
                setValues: _this.setValues,
                setFormikState: _this.setFormikState,
            };
        };
        _this.getFormikComputedProps = function () {
            var isInitialValid = _this.props.isInitialValid;
            var dirty = !isEqual(_this.initialValues, _this.state.values);
            return {
                dirty: dirty,
                isValid: dirty
                    ? _this.state.errors && Object.keys(_this.state.errors).length === 0
                    : isInitialValid !== false && isFunction(isInitialValid)
                        ? isInitialValid(_this.props)
                        : isInitialValid,
                initialValues: _this.initialValues,
            };
        };
        _this.getFormikBag = function () {
            return tslib_1.__assign({}, _this.state, _this.getFormikActions(), _this.getFormikComputedProps(), { registerField: _this.registerField, unregisterField: _this.unregisterField, handleBlur: _this.handleBlur, handleChange: _this.handleChange, handleReset: _this.handleReset, handleSubmit: _this.handleSubmit, validateOnChange: _this.props.validateOnChange, validateOnBlur: _this.props.validateOnBlur });
        };
        _this.getFormikContext = function () {
            return tslib_1.__assign({}, _this.getFormikBag(), { validationSchema: _this.props.validationSchema, validate: _this.props.validate, initialValues: _this.initialValues });
        };
        _this.state = {
            values: props.initialValues || {},
            errors: {},
            touched: {},
            isSubmitting: false,
            isValidating: false,
            submitCount: 0,
        };
        _this.didMount = false;
        _this.fields = {};
        _this.initialValues = props.initialValues || {};
        warning(!(props.component && props.render), 'You should not use <Formik component> and <Formik render> in the same <Formik> component; <Formik render> will be ignored');
        warning(!(props.component && props.children && !isEmptyChildren(props.children)), 'You should not use <Formik component> and <Formik children> in the same <Formik> component; <Formik children> will be ignored');
        warning(!(props.render && props.children && !isEmptyChildren(props.children)), 'You should not use <Formik render> and <Formik children> in the same <Formik> component; <Formik children> will be ignored');
        return _this;
    }
    Formik.prototype.componentDidMount = function () {
        this.didMount = true;
    };
    Formik.prototype.componentWillUnmount = function () {
        this.didMount = false;
    };
    Formik.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.enableReinitialize &&
            !isEqual(prevProps.initialValues, this.props.initialValues)) {
            this.initialValues = this.props.initialValues;
            this.resetForm(this.props.initialValues);
        }
    };
    Formik.prototype.runFieldLevelValidations = function (values) {
        var _this = this;
        var fieldKeysWithValidation = Object.keys(this.fields).filter(function (f) {
            return _this.fields &&
                _this.fields[f] &&
                _this.fields[f].props.validate &&
                isFunction(_this.fields[f].props.validate);
        });
        var fieldValidations = fieldKeysWithValidation.length > 0
            ? fieldKeysWithValidation.map(function (f) {
                return _this.runSingleFieldLevelValidation(f, getIn(values, f));
            })
            : [Promise.resolve('DO_NOT_DELETE_YOU_WILL_BE_FIRED')];
        return Promise.all(fieldValidations).then(function (fieldErrorsList) {
            return fieldErrorsList.reduce(function (prev, curr, index) {
                if (curr === 'DO_NOT_DELETE_YOU_WILL_BE_FIRED') {
                    return prev;
                }
                if (!!curr) {
                    prev = setIn(prev, fieldKeysWithValidation[index], curr);
                }
                return prev;
            }, {});
        });
    };
    Formik.prototype.runValidateHandler = function (values) {
        var _this = this;
        return new Promise(function (resolve) {
            var maybePromisedErrors = _this.props.validate(values);
            if (maybePromisedErrors === undefined) {
                resolve({});
            }
            else if (isPromise(maybePromisedErrors)) {
                maybePromisedErrors.then(function () {
                    resolve({});
                }, function (errors) {
                    resolve(errors);
                });
            }
            else {
                resolve(maybePromisedErrors);
            }
        });
    };
    Formik.prototype.render = function () {
        var _a = this.props, component = _a.component, render = _a.render, children = _a.children;
        var props = this.getFormikBag();
        var ctx = this.getFormikContext();
        return (React.createElement(FormikProvider, { value: ctx }, component
            ? React.createElement(component, props)
            : render
                ? render(props)
                : children
                    ? isFunction(children)
                        ? children(props)
                        : !isEmptyChildren(children)
                            ? React.Children.only(children)
                            : null
                    : null));
    };
    Formik.defaultProps = {
        validateOnChange: true,
        validateOnBlur: true,
        isInitialValid: false,
        enableReinitialize: false,
    };
    return Formik;
}(React.Component));
function warnAboutMissingIdentifier(_a) {
    var htmlContent = _a.htmlContent, documentationAnchorLink = _a.documentationAnchorLink, handlerName = _a.handlerName;
    console.error("Warning: Formik called `" + handlerName + "`, but you forgot to pass an `id` or `name` attribute to your input:\n\n    " + htmlContent + "\n\n    Formik cannot determine which value to update. For more info see https://github.com/jaredpalmer/formik#" + documentationAnchorLink + "\n  ");
}
function yupToFormErrors(yupError) {
    var errors = {};
    if (yupError.inner.length === 0) {
        return setIn(errors, yupError.path, yupError.message);
    }
    for (var _i = 0, _a = yupError.inner; _i < _a.length; _i++) {
        var err = _a[_i];
        if (!errors[err.path]) {
            errors = setIn(errors, err.path, err.message);
        }
    }
    return errors;
}
function validateYupSchema(values, schema, sync, context) {
    if (sync === void 0) { sync = false; }
    if (context === void 0) { context = {}; }
    var validateData = {};
    for (var k in values) {
        if (values.hasOwnProperty(k)) {
            var key = String(k);
            validateData[key] = values[key] !== '' ? values[key] : undefined;
        }
    }
    return schema[sync ? 'validateSync' : 'validate'](validateData, {
        abortEarly: false,
        context: context,
    });
}
function arrayMerge(target, source, options) {
    var destination = target.slice();
    source.forEach(function (e, i) {
        if (typeof destination[i] === 'undefined') {
            var cloneRequested = options.clone !== false;
            var shouldClone = cloneRequested && options.isMergeableObject(e);
            destination[i] = shouldClone
                ? deepmerge(Array.isArray(e) ? [] : {}, e, options)
                : e;
        }
        else if (options.isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, options);
        }
        else if (target.indexOf(e) === -1) {
            destination.push(e);
        }
    });
    return destination;
}

var FieldInner = (function (_super) {
    tslib_1.__extends(FieldInner, _super);
    function FieldInner(props) {
        var _this = _super.call(this, props) || this;
        var render = props.render, children = props.children, component = props.component;
        warning(!(component && render), 'You should not use <Field component> and <Field render> in the same <Field> component; <Field component> will be ignored');
        warning(!(component && children && isFunction(children)), 'You should not use <Field component> and <Field children> as a function in the same <Field> component; <Field component> will be ignored.');
        warning(!(render && children && !isEmptyChildren(children)), 'You should not use <Field render> and <Field children> in the same <Field> component; <Field children> will be ignored');
        return _this;
    }
    FieldInner.prototype.componentDidMount = function () {
        this.props.formik.registerField(this.props.name, this);
    };
    FieldInner.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.name !== prevProps.name) {
            this.props.formik.unregisterField(prevProps.name);
            this.props.formik.registerField(this.props.name, this);
        }
        if (this.props.validate !== prevProps.validate) {
            this.props.formik.registerField(this.props.name, this);
        }
    };
    FieldInner.prototype.componentWillUnmount = function () {
        this.props.formik.unregisterField(this.props.name);
    };
    FieldInner.prototype.render = function () {
        var _a = this.props, validate = _a.validate, name = _a.name, render = _a.render, children = _a.children, _b = _a.component, component = _b === void 0 ? 'input' : _b, formik = _a.formik, props = tslib_1.__rest(_a, ["validate", "name", "render", "children", "component", "formik"]);
        var _validate = formik.validate, _validationSchema = formik.validationSchema, restOfFormik = tslib_1.__rest(formik, ["validate", "validationSchema"]);
        var field = {
            value: props.type === 'radio' || props.type === 'checkbox'
                ? props.value
                : getIn(formik.values, name),
            name: name,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
        };
        var bag = { field: field, form: restOfFormik };
        if (render) {
            return render(bag);
        }
        if (isFunction(children)) {
            return children(bag);
        }
        if (typeof component === 'string') {
            var innerRef = props.innerRef, rest = tslib_1.__rest(props, ["innerRef"]);
            return React.createElement(component, tslib_1.__assign({ ref: innerRef }, field, rest, { children: children }));
        }
        return React.createElement(component, tslib_1.__assign({}, bag, props, { children: children }));
    };
    return FieldInner;
}(React.Component));
var Field = connect(FieldInner);

var Form = connect(function (_a) {
    var _b = _a.formik, handleReset = _b.handleReset, handleSubmit = _b.handleSubmit, props = tslib_1.__rest(_a, ["formik"]);
    return (React.createElement("form", tslib_1.__assign({ onReset: handleReset, onSubmit: handleSubmit }, props)));
});
Form.displayName = 'Form';

function withFormik(_a) {
    var _b = _a.mapPropsToValues, mapPropsToValues = _b === void 0 ? function (vanillaProps) {
        var val = {};
        for (var k in vanillaProps) {
            if (vanillaProps.hasOwnProperty(k) &&
                typeof vanillaProps[k] !== 'function') {
                val[k] = vanillaProps[k];
            }
        }
        return val;
    } : _b, config = tslib_1.__rest(_a, ["mapPropsToValues"]);
    return function createFormik(Component) {
        var componentDisplayName = Component.displayName ||
            Component.name ||
            (Component.constructor && Component.constructor.name) ||
            'Component';
        var C = (function (_super) {
            tslib_1.__extends(C, _super);
            function C() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.validate = function (values) {
                    return config.validate(values, _this.props);
                };
                _this.validationSchema = function () {
                    return isFunction(config.validationSchema)
                        ? config.validationSchema(_this.props)
                        : config.validationSchema;
                };
                _this.handleSubmit = function (values, actions) {
                    return config.handleSubmit(values, tslib_1.__assign({}, actions, { props: _this.props }));
                };
                _this.renderFormComponent = function (formikProps) {
                    return React.createElement(Component, tslib_1.__assign({}, _this.props, formikProps));
                };
                return _this;
            }
            C.prototype.render = function () {
                var _a = this.props, children = _a.children, props = tslib_1.__rest(_a, ["children"]);
                return (React.createElement(Formik, tslib_1.__assign({}, props, config, { validate: config.validate && this.validate, validationSchema: config.validationSchema && this.validationSchema, initialValues: mapPropsToValues(this.props), onSubmit: this.handleSubmit, render: this.renderFormComponent })));
            };
            C.displayName = "WithFormik(" + componentDisplayName + ")";
            return C;
        }(React.Component));
        return hoistNonReactStatics(C, Component);
    };
}

var move = function (array, from, to) {
    var copy = (array || []).slice();
    var value = copy[from];
    copy.splice(from, 1);
    copy.splice(to, 0, value);
    return copy;
};
var swap = function (array, indexA, indexB) {
    var copy = (array || []).slice();
    var a = copy[indexA];
    copy[indexA] = copy[indexB];
    copy[indexB] = a;
    return copy;
};
var insert = function (array, index, value) {
    var copy = (array || []).slice();
    copy.splice(index, 0, value);
    return copy;
};
var replace = function (array, index, value) {
    var copy = (array || []).slice();
    copy[index] = value;
    return copy;
};
var FieldArrayInner = (function (_super) {
    tslib_1.__extends(FieldArrayInner, _super);
    function FieldArrayInner(props) {
        var _this = _super.call(this, props) || this;
        _this.updateArrayField = function (fn, alterTouched, alterErrors) {
            var _a = _this.props, name = _a.name, validateOnChange = _a.validateOnChange, _b = _a.formik, setFormikState = _b.setFormikState, validateForm = _b.validateForm, values = _b.values, touched = _b.touched, errors = _b.errors;
            setFormikState(function (prevState) { return (tslib_1.__assign({}, prevState, { values: setIn(prevState.values, name, fn(getIn(values, name))), errors: alterErrors
                    ? setIn(prevState.errors, name, fn(getIn(errors, name)))
                    : prevState.errors, touched: alterTouched
                    ? setIn(prevState.touched, name, fn(getIn(touched, name)))
                    : prevState.touched })); }, function () {
                if (validateOnChange) {
                    validateForm();
                }
            });
        };
        _this.push = function (value) {
            return _this.updateArrayField(function (array) { return (array || []).concat([cloneDeep(value)]); }, false, false);
        };
        _this.handlePush = function (value) { return function () { return _this.push(value); }; };
        _this.swap = function (indexA, indexB) {
            return _this.updateArrayField(function (array) { return swap(array, indexA, indexB); }, true, true);
        };
        _this.handleSwap = function (indexA, indexB) { return function () {
            return _this.swap(indexA, indexB);
        }; };
        _this.move = function (from, to) {
            return _this.updateArrayField(function (array) { return move(array, from, to); }, true, true);
        };
        _this.handleMove = function (from, to) { return function () { return _this.move(from, to); }; };
        _this.insert = function (index, value) {
            return _this.updateArrayField(function (array) { return insert(array, index, value); }, true, true);
        };
        _this.handleInsert = function (index, value) { return function () { return _this.insert(index, value); }; };
        _this.replace = function (index, value) {
            return _this.updateArrayField(function (array) { return replace(array, index, value); }, false, false);
        };
        _this.handleReplace = function (index, value) { return function () {
            return _this.replace(index, value);
        }; };
        _this.unshift = function (value) {
            var length = -1;
            _this.updateArrayField(function (array) {
                var arr = array ? [value].concat(array) : [value];
                if (length < 0)
                    length = arr.length;
                return arr;
            }, true, true);
            return length;
        };
        _this.handleUnshift = function (value) { return function () { return _this.unshift(value); }; };
        _this.handleRemove = function (index) { return function () { return _this.remove(index); }; };
        _this.handlePop = function () { return function () { return _this.pop(); }; };
        _this.remove = _this.remove.bind(_this);
        _this.pop = _this.pop.bind(_this);
        return _this;
    }
    FieldArrayInner.prototype.remove = function (index) {
        var result;
        this.updateArrayField(function (array) {
            var copy = array ? array.slice() : [];
            if (!result) {
                result = copy[index];
            }
            if (isFunction(copy.splice)) {
                copy.splice(index, 1);
            }
            return copy;
        }, true, true);
        return result;
    };
    FieldArrayInner.prototype.pop = function () {
        var result;
        this.updateArrayField(function (array) {
            var tmp = array;
            if (!result) {
                result = tmp && tmp.pop && tmp.pop();
            }
            return tmp;
        }, true, true);
        return result;
    };
    FieldArrayInner.prototype.render = function () {
        var arrayHelpers = {
            push: this.push,
            pop: this.pop,
            swap: this.swap,
            move: this.move,
            insert: this.insert,
            replace: this.replace,
            unshift: this.unshift,
            remove: this.remove,
            handlePush: this.handlePush,
            handlePop: this.handlePop,
            handleSwap: this.handleSwap,
            handleMove: this.handleMove,
            handleInsert: this.handleInsert,
            handleReplace: this.handleReplace,
            handleUnshift: this.handleUnshift,
            handleRemove: this.handleRemove,
        };
        var _a = this.props, component = _a.component, render = _a.render, children = _a.children, name = _a.name, _b = _a.formik, _validate = _b.validate, _validationSchema = _b.validationSchema, restOfFormik = tslib_1.__rest(_b, ["validate", "validationSchema"]);
        var props = tslib_1.__assign({}, arrayHelpers, { form: restOfFormik, name: name });
        return component
            ? React.createElement(component, props)
            : render
                ? render(props)
                : children
                    ? typeof children === 'function'
                        ? children(props)
                        : !isEmptyChildren(children) ? React.Children.only(children) : null
                    : null;
    };
    FieldArrayInner.defaultProps = {
        validateOnChange: true,
    };
    return FieldArrayInner;
}(React.Component));
var FieldArray = connect(FieldArrayInner);

var FastFieldInner = (function (_super) {
    tslib_1.__extends(FastFieldInner, _super);
    function FastFieldInner(props) {
        var _this = _super.call(this, props) || this;
        var render = props.render, children = props.children, component = props.component;
        warning(!(component && render), 'You should not use <FastField component> and <FastField render> in the same <FastField> component; <FastField component> will be ignored');
        warning(!(component && children && isFunction(children)), 'You should not use <FastField component> and <FastField children> as a function in the same <FastField> component; <FastField component> will be ignored.');
        warning(!(render && children && !isEmptyChildren(children)), 'You should not use <FastField render> and <FastField children> in the same <FastField> component; <FastField children> will be ignored');
        return _this;
    }
    FastFieldInner.prototype.shouldComponentUpdate = function (props) {
        if (this.props.shouldUpdate) {
            return this.props.shouldUpdate(props, this.props);
        }
        else if (getIn(this.props.formik.values, this.props.name) !==
            getIn(props.formik.values, this.props.name) ||
            getIn(this.props.formik.errors, this.props.name) !==
                getIn(props.formik.errors, this.props.name) ||
            getIn(this.props.formik.touched, this.props.name) !==
                getIn(props.formik.touched, this.props.name) ||
            Object.keys(this.props).length !== Object.keys(props).length ||
            this.props.formik.isSubmitting !== props.formik.isSubmitting) {
            return true;
        }
        else {
            return false;
        }
    };
    FastFieldInner.prototype.componentDidMount = function () {
        this.props.formik.registerField(this.props.name, this);
    };
    FastFieldInner.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.name !== prevProps.name) {
            this.props.formik.unregisterField(prevProps.name);
            this.props.formik.registerField(this.props.name, this);
        }
        if (this.props.validate !== prevProps.validate) {
            this.props.formik.registerField(this.props.name, this);
        }
    };
    FastFieldInner.prototype.componentWillUnmount = function () {
        this.props.formik.unregisterField(this.props.name);
    };
    FastFieldInner.prototype.render = function () {
        var _a = this.props, validate = _a.validate, name = _a.name, render = _a.render, children = _a.children, _b = _a.component, component = _b === void 0 ? 'input' : _b, formik = _a.formik, props = tslib_1.__rest(_a, ["validate", "name", "render", "children", "component", "formik"]);
        var _validate = formik.validate, _validationSchema = formik.validationSchema, restOfFormik = tslib_1.__rest(formik, ["validate", "validationSchema"]);
        var field = {
            value: props.type === 'radio' || props.type === 'checkbox'
                ? props.value
                : getIn(formik.values, name),
            name: name,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
        };
        var bag = { field: field, form: restOfFormik };
        if (render) {
            return render(bag);
        }
        if (isFunction(children)) {
            return children(bag);
        }
        if (typeof component === 'string') {
            var innerRef = props.innerRef, rest = tslib_1.__rest(props, ["innerRef"]);
            return React.createElement(component, tslib_1.__assign({ ref: innerRef }, field, rest, { children: children }));
        }
        return React.createElement(component, tslib_1.__assign({}, bag, props, { children: children }));
    };
    return FastFieldInner;
}(React.Component));
var FastField = connect(FastFieldInner);

var ErrorMessageImpl = (function (_super) {
    tslib_1.__extends(ErrorMessageImpl, _super);
    function ErrorMessageImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorMessageImpl.prototype.shouldComponentUpdate = function (props) {
        if (getIn(this.props.formik.errors, this.props.name) !==
            getIn(props.formik.errors, this.props.name) ||
            getIn(this.props.formik.touched, this.props.name) !==
                getIn(props.formik.touched, this.props.name) ||
            Object.keys(this.props).length !== Object.keys(props).length) {
            return true;
        }
        else {
            return false;
        }
    };
    ErrorMessageImpl.prototype.render = function () {
        var _a = this.props, component = _a.component, formik = _a.formik, render = _a.render, children = _a.children, name = _a.name, rest = tslib_1.__rest(_a, ["component", "formik", "render", "children", "name"]);
        var touch = getIn(formik.touched, name);
        var error = getIn(formik.errors, name);
        return !!touch && !!error
            ? render
                ? isFunction(render) ? render(error) : null
                : children
                    ? isFunction(children) ? children(error) : null
                    : component
                        ? React.createElement(component, rest, error)
                        : error
            : null;
    };
    return ErrorMessageImpl;
}(React.Component));
var ErrorMessage = connect(ErrorMessageImpl);

exports.Formik = Formik;
exports.yupToFormErrors = yupToFormErrors;
exports.validateYupSchema = validateYupSchema;
exports.Field = Field;
exports.Form = Form;
exports.withFormik = withFormik;
exports.move = move;
exports.swap = swap;
exports.insert = insert;
exports.replace = replace;
exports.FieldArray = FieldArray;
exports.getIn = getIn;
exports.setIn = setIn;
exports.setNestedObjectValues = setNestedObjectValues;
exports.isFunction = isFunction;
exports.isObject = isObject;
exports.isInteger = isInteger;
exports.isString = isString;
exports.isNaN = isNaN;
exports.isEmptyChildren = isEmptyChildren;
exports.isPromise = isPromise;
exports.getActiveElement = getActiveElement;
exports.FastField = FastField;
exports.FormikProvider = FormikProvider;
exports.FormikConsumer = FormikConsumer;
exports.connect = connect;
exports.ErrorMessage = ErrorMessage;
//# sourceMappingURL=formik.cjs.development.js.map


/***/ }),

/***/ "./node_modules/formik/dist/index.js":
/*!*******************************************!*\
  !*** ./node_modules/formik/dist/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./formik.cjs.development.js */ "./node_modules/formik/dist/formik.cjs.development.js");
}

/***/ }),

/***/ "./node_modules/formik/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/formik/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/gud/index.js":
/*!***********************************!*\
  !*** ./node_modules/gud/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// @flow


var key = '__global_unique_id__';

module.exports = function() {
  return global[key] = (global[key] || 0) + 1;
};


/***/ }),

/***/ "./node_modules/history/index.js":
/*!*****************************************************************************!*\
  !*** delegated ./node_modules/history/index.js from dll-reference ./vendor ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/history/index.js");

/***/ }),

/***/ "./node_modules/invariant/invariant.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/invariant/invariant.js from dll-reference ./vendor ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/invariant/invariant.js");

/***/ }),

/***/ "./node_modules/json-to-url/index.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/json-to-url/index.js from dll-reference ./vendor ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/json-to-url/index.js");

/***/ }),

/***/ "./node_modules/lodash.clonedeep/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash.clonedeep/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash.topath/index.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash.topath/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Converts `value` to a property path array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert.
 * @returns {Array} Returns the new property path array.
 * @example
 *
 * _.toPath('a.b.c');
 * // => ['a', 'b', 'c']
 *
 * _.toPath('a[0].b.c');
 * // => ['a', '0', 'b', 'c']
 */
function toPath(value) {
  if (isArray(value)) {
    return arrayMap(value, toKey);
  }
  return isSymbol(value) ? [value] : copyArray(stringToPath(value));
}

module.exports = toPath;


/***/ }),

/***/ "./node_modules/nserializejson/dist/cjs/index.js":
/*!*********************************************************************************************!*\
  !*** delegated ./node_modules/nserializejson/dist/cjs/index.js from dll-reference ./vendor ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/nserializejson/dist/cjs/index.js");

/***/ }),

/***/ "./node_modules/nval-tippy/dist/cjs/index.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/nval-tippy/dist/cjs/index.js from dll-reference ./vendor ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/nval-tippy/dist/cjs/index.js");

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/prop-types/index.js from dll-reference ./vendor ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/prop-types/index.js");

/***/ }),

/***/ "./node_modules/react-dom/server.js":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/react-dom/server.js from dll-reference ./vendor ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-dom/server.js");

/***/ }),

/***/ "./node_modules/react-fast-compare/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-fast-compare/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

function equal(a, b) {
  if (a === b) return true;

  var arrA = isArray(a)
    , arrB = isArray(b)
    , i
    , length
    , key;

  if (arrA && arrB) {
    length = a.length;
    if (length != b.length) return false;
    for (i = 0; i < length; i++)
      if (!equal(a[i], b[i])) return false;
    return true;
  }

  if (arrA != arrB) return false;

  var dateA = a instanceof Date
    , dateB = b instanceof Date;
  if (dateA != dateB) return false;
  if (dateA && dateB) return a.getTime() == b.getTime();

  var regexpA = a instanceof RegExp
    , regexpB = b instanceof RegExp;
  if (regexpA != regexpB) return false;
  if (regexpA && regexpB) return a.toString() == b.toString();

  if (a instanceof Object && b instanceof Object) {
    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = 0; i < length; i++)
      if (!hasProp.call(b, keys[i])) return false;

    for (i = 0; i < length; i++) {
      key = keys[i];
      if (key === '_owner' && a.$$typeof && a._store) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    }

    return true;
  }

  return false;
}

module.exports = function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (error.message && error.message.match(/stack|recursion/i)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/react-helmet/lib/Helmet.js":
/*!***************************************************************************************!*\
  !*** delegated ./node_modules/react-helmet/lib/Helmet.js from dll-reference ./vendor ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-helmet/lib/Helmet.js");

/***/ }),

/***/ "./node_modules/react-paginating/dist/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react-paginating/dist/index.js from dll-reference ./vendor ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-paginating/dist/index.js");

/***/ }),

/***/ "./node_modules/react-redux/lib/index.js":
/*!*************************************************************************************!*\
  !*** delegated ./node_modules/react-redux/lib/index.js from dll-reference ./vendor ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-redux/lib/index.js");

/***/ }),

/***/ "./node_modules/react-router-dom/BrowserRouter.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router-dom/BrowserRouter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router-dom/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _history = __webpack_require__(/*! history */ "./node_modules/react-router-dom/node_modules/history/index.js");

var _Router = __webpack_require__(/*! ./Router */ "./node_modules/react-router-dom/Router.js");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for a <Router> that uses HTML5 history.
 */
var BrowserRouter = function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _history.createBrowserHistory)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
    (0, _warning2.default)(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.");
  };

  BrowserRouter.prototype.render = function render() {
    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(_react2.default.Component);

BrowserRouter.propTypes = {
  basename: _propTypes2.default.string,
  forceRefresh: _propTypes2.default.bool,
  getUserConfirmation: _propTypes2.default.func,
  keyLength: _propTypes2.default.number,
  children: _propTypes2.default.node
};
exports.default = BrowserRouter;

/***/ }),

/***/ "./node_modules/react-router-dom/HashRouter.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-router-dom/HashRouter.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router-dom/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _history = __webpack_require__(/*! history */ "./node_modules/react-router-dom/node_modules/history/index.js");

var _Router = __webpack_require__(/*! ./Router */ "./node_modules/react-router-dom/Router.js");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for a <Router> that uses window.location.hash.
 */
var HashRouter = function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _history.createHashHistory)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    (0, _warning2.default)(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.");
  };

  HashRouter.prototype.render = function render() {
    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(_react2.default.Component);

HashRouter.propTypes = {
  basename: _propTypes2.default.string,
  getUserConfirmation: _propTypes2.default.func,
  hashType: _propTypes2.default.oneOf(["hashbang", "noslash", "slash"]),
  children: _propTypes2.default.node
};
exports.default = HashRouter;

/***/ }),

/***/ "./node_modules/react-router-dom/Link.js":
/*!***********************************************!*\
  !*** ./node_modules/react-router-dom/Link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _history = __webpack_require__(/*! history */ "./node_modules/react-router-dom/node_modules/history/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;


          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties(_props, ["replace", "to", "innerRef"]); // eslint-disable-line no-unused-vars

    (0, _invariant2.default)(this.context.router, "You should not use <Link> outside a <Router>");

    (0, _invariant2.default)(to !== undefined, 'You must specify the "to" property');

    var history = this.context.router.history;

    var location = typeof to === "string" ? (0, _history.createLocation)(to, null, null, history.location) : to;

    var href = history.createHref(location);
    return _react2.default.createElement("a", _extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
  };

  return Link;
}(_react2.default.Component);

Link.propTypes = {
  onClick: _propTypes2.default.func,
  target: _propTypes2.default.string,
  replace: _propTypes2.default.bool,
  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
  innerRef: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.shape({
      push: _propTypes2.default.func.isRequired,
      replace: _propTypes2.default.func.isRequired,
      createHref: _propTypes2.default.func.isRequired
    }).isRequired
  }).isRequired
};
exports.default = Link;

/***/ }),

/***/ "./node_modules/react-router-dom/MemoryRouter.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router-dom/MemoryRouter.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _MemoryRouter = __webpack_require__(/*! react-router/MemoryRouter */ "./node_modules/react-router/MemoryRouter.js");

var _MemoryRouter2 = _interopRequireDefault(_MemoryRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _MemoryRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/NavLink.js":
/*!**************************************************!*\
  !*** ./node_modules/react-router-dom/NavLink.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Route = __webpack_require__(/*! ./Route */ "./node_modules/react-router-dom/Route.js");

var _Route2 = _interopRequireDefault(_Route);

var _Link = __webpack_require__(/*! ./Link */ "./node_modules/react-router-dom/Link.js");

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      ariaCurrent = _ref["aria-current"],
      rest = _objectWithoutProperties(_ref, ["to", "exact", "strict", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "aria-current"]);

  var path = (typeof to === "undefined" ? "undefined" : _typeof(to)) === "object" ? to.pathname : to;

  // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
  var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");

  return _react2.default.createElement(_Route2.default, {
    path: escapedPath,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return _react2.default.createElement(_Link2.default, _extends({
        to: to,
        className: isActive ? [className, activeClassName].filter(function (i) {
          return i;
        }).join(" ") : className,
        style: isActive ? _extends({}, style, activeStyle) : style,
        "aria-current": isActive && ariaCurrent || null
      }, rest));
    }
  });
};

NavLink.propTypes = {
  to: _Link2.default.propTypes.to,
  exact: _propTypes2.default.bool,
  strict: _propTypes2.default.bool,
  location: _propTypes2.default.object,
  activeClassName: _propTypes2.default.string,
  className: _propTypes2.default.string,
  activeStyle: _propTypes2.default.object,
  style: _propTypes2.default.object,
  isActive: _propTypes2.default.func,
  "aria-current": _propTypes2.default.oneOf(["page", "step", "location", "date", "time", "true"])
};

NavLink.defaultProps = {
  activeClassName: "active",
  "aria-current": "page"
};

exports.default = NavLink;

/***/ }),

/***/ "./node_modules/react-router-dom/Prompt.js":
/*!*************************************************!*\
  !*** ./node_modules/react-router-dom/Prompt.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Prompt = __webpack_require__(/*! react-router/Prompt */ "./node_modules/react-router/Prompt.js");

var _Prompt2 = _interopRequireDefault(_Prompt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Prompt2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/Redirect.js":
/*!***************************************************!*\
  !*** ./node_modules/react-router-dom/Redirect.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Redirect = __webpack_require__(/*! react-router/Redirect */ "./node_modules/react-router/Redirect.js");

var _Redirect2 = _interopRequireDefault(_Redirect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Redirect2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/Route.js":
/*!************************************************!*\
  !*** ./node_modules/react-router-dom/Route.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Route = __webpack_require__(/*! react-router/Route */ "./node_modules/react-router/Route.js");

var _Route2 = _interopRequireDefault(_Route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Route2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/Router.js":
/*!*************************************************!*\
  !*** ./node_modules/react-router-dom/Router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Router = __webpack_require__(/*! react-router/Router */ "./node_modules/react-router/Router.js");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Router2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/StaticRouter.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router-dom/StaticRouter.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _StaticRouter = __webpack_require__(/*! react-router/StaticRouter */ "./node_modules/react-router/StaticRouter.js");

var _StaticRouter2 = _interopRequireDefault(_StaticRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _StaticRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/Switch.js":
/*!*************************************************!*\
  !*** ./node_modules/react-router-dom/Switch.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Switch = __webpack_require__(/*! react-router/Switch */ "./node_modules/react-router/Switch.js");

var _Switch2 = _interopRequireDefault(_Switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Switch2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/generatePath.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router-dom/generatePath.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _generatePath = __webpack_require__(/*! react-router/generatePath */ "./node_modules/react-router/generatePath.js");

var _generatePath2 = _interopRequireDefault(_generatePath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _generatePath2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-router-dom/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.withRouter = exports.matchPath = exports.generatePath = exports.Switch = exports.StaticRouter = exports.Router = exports.Route = exports.Redirect = exports.Prompt = exports.NavLink = exports.MemoryRouter = exports.Link = exports.HashRouter = exports.BrowserRouter = undefined;

var _BrowserRouter2 = __webpack_require__(/*! ./BrowserRouter */ "./node_modules/react-router-dom/BrowserRouter.js");

var _BrowserRouter3 = _interopRequireDefault(_BrowserRouter2);

var _HashRouter2 = __webpack_require__(/*! ./HashRouter */ "./node_modules/react-router-dom/HashRouter.js");

var _HashRouter3 = _interopRequireDefault(_HashRouter2);

var _Link2 = __webpack_require__(/*! ./Link */ "./node_modules/react-router-dom/Link.js");

var _Link3 = _interopRequireDefault(_Link2);

var _MemoryRouter2 = __webpack_require__(/*! ./MemoryRouter */ "./node_modules/react-router-dom/MemoryRouter.js");

var _MemoryRouter3 = _interopRequireDefault(_MemoryRouter2);

var _NavLink2 = __webpack_require__(/*! ./NavLink */ "./node_modules/react-router-dom/NavLink.js");

var _NavLink3 = _interopRequireDefault(_NavLink2);

var _Prompt2 = __webpack_require__(/*! ./Prompt */ "./node_modules/react-router-dom/Prompt.js");

var _Prompt3 = _interopRequireDefault(_Prompt2);

var _Redirect2 = __webpack_require__(/*! ./Redirect */ "./node_modules/react-router-dom/Redirect.js");

var _Redirect3 = _interopRequireDefault(_Redirect2);

var _Route2 = __webpack_require__(/*! ./Route */ "./node_modules/react-router-dom/Route.js");

var _Route3 = _interopRequireDefault(_Route2);

var _Router2 = __webpack_require__(/*! ./Router */ "./node_modules/react-router-dom/Router.js");

var _Router3 = _interopRequireDefault(_Router2);

var _StaticRouter2 = __webpack_require__(/*! ./StaticRouter */ "./node_modules/react-router-dom/StaticRouter.js");

var _StaticRouter3 = _interopRequireDefault(_StaticRouter2);

var _Switch2 = __webpack_require__(/*! ./Switch */ "./node_modules/react-router-dom/Switch.js");

var _Switch3 = _interopRequireDefault(_Switch2);

var _generatePath2 = __webpack_require__(/*! ./generatePath */ "./node_modules/react-router-dom/generatePath.js");

var _generatePath3 = _interopRequireDefault(_generatePath2);

var _matchPath2 = __webpack_require__(/*! ./matchPath */ "./node_modules/react-router-dom/matchPath.js");

var _matchPath3 = _interopRequireDefault(_matchPath2);

var _withRouter2 = __webpack_require__(/*! ./withRouter */ "./node_modules/react-router-dom/withRouter.js");

var _withRouter3 = _interopRequireDefault(_withRouter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BrowserRouter = _BrowserRouter3.default;
exports.HashRouter = _HashRouter3.default;
exports.Link = _Link3.default;
exports.MemoryRouter = _MemoryRouter3.default;
exports.NavLink = _NavLink3.default;
exports.Prompt = _Prompt3.default;
exports.Redirect = _Redirect3.default;
exports.Route = _Route3.default;
exports.Router = _Router3.default;
exports.StaticRouter = _StaticRouter3.default;
exports.Switch = _Switch3.default;
exports.generatePath = _generatePath3.default;
exports.matchPath = _matchPath3.default;
exports.withRouter = _withRouter3.default;

/***/ }),

/***/ "./node_modules/react-router-dom/matchPath.js":
/*!****************************************************!*\
  !*** ./node_modules/react-router-dom/matchPath.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _matchPath = __webpack_require__(/*! react-router/matchPath */ "./node_modules/react-router/matchPath.js");

var _matchPath2 = _interopRequireDefault(_matchPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _matchPath2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/history/DOMUtils.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/history/DOMUtils.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/history/LocationUtils.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/history/LocationUtils.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.locationsAreEqual = exports.createLocation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _resolvePathname = __webpack_require__(/*! resolve-pathname */ "./node_modules/resolve-pathname/cjs/index.js");

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _valueEqual = __webpack_require__(/*! value-equal */ "./node_modules/value-equal/cjs/index.js");

var _valueEqual2 = _interopRequireDefault(_valueEqual);

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/react-router-dom/node_modules/history/PathUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = (0, _PathUtils.parsePath)(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
};

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/history/PathUtils.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/history/PathUtils.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/history/createBrowserHistory.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/history/createBrowserHistory.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router-dom/node_modules/history/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/react-router-dom/node_modules/history/LocationUtils.js");

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/react-router-dom/node_modules/history/PathUtils.js");

var _createTransitionManager = __webpack_require__(/*! ./createTransitionManager */ "./node_modules/react-router-dom/node_modules/history/createTransitionManager.js");

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(/*! ./DOMUtils */ "./node_modules/react-router-dom/node_modules/history/DOMUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = (0, _DOMUtils.supportsHistory)();
  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + (0, _PathUtils.createPath)(location);
  };

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createBrowserHistory;

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/history/createHashHistory.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/history/createHashHistory.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router-dom/node_modules/history/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/react-router-dom/node_modules/history/LocationUtils.js");

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/react-router-dom/node_modules/history/PathUtils.js");

var _createTransitionManager = __webpack_require__(/*! ./createTransitionManager */ "./node_modules/react-router-dom/node_modules/history/createTransitionManager.js");

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(/*! ./DOMUtils */ "./node_modules/react-router-dom/node_modules/history/DOMUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: _PathUtils.stripLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  },
  slash: {
    encodePath: _PathUtils.addLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === (0, _PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [(0, _PathUtils.createPath)(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + (0, _PathUtils.createPath)(location));
  };

  var push = function push(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createHashHistory;

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/history/createMemoryHistory.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/history/createMemoryHistory.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router-dom/node_modules/history/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/react-router-dom/node_modules/history/PathUtils.js");

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/react-router-dom/node_modules/history/LocationUtils.js");

var _createTransitionManager = __webpack_require__(/*! ./createTransitionManager */ "./node_modules/react-router-dom/node_modules/history/createTransitionManager.js");

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? (0, _LocationUtils.createLocation)(entry, undefined, createKey()) : (0, _LocationUtils.createLocation)(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = _PathUtils.createPath;

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createMemoryHistory;

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/history/createTransitionManager.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/history/createTransitionManager.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router-dom/node_modules/history/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

exports.default = createTransitionManager;

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/history/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/history/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createPath = exports.parsePath = exports.locationsAreEqual = exports.createLocation = exports.createMemoryHistory = exports.createHashHistory = exports.createBrowserHistory = undefined;

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/react-router-dom/node_modules/history/LocationUtils.js");

Object.defineProperty(exports, 'createLocation', {
  enumerable: true,
  get: function get() {
    return _LocationUtils.createLocation;
  }
});
Object.defineProperty(exports, 'locationsAreEqual', {
  enumerable: true,
  get: function get() {
    return _LocationUtils.locationsAreEqual;
  }
});

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/react-router-dom/node_modules/history/PathUtils.js");

Object.defineProperty(exports, 'parsePath', {
  enumerable: true,
  get: function get() {
    return _PathUtils.parsePath;
  }
});
Object.defineProperty(exports, 'createPath', {
  enumerable: true,
  get: function get() {
    return _PathUtils.createPath;
  }
});

var _createBrowserHistory2 = __webpack_require__(/*! ./createBrowserHistory */ "./node_modules/react-router-dom/node_modules/history/createBrowserHistory.js");

var _createBrowserHistory3 = _interopRequireDefault(_createBrowserHistory2);

var _createHashHistory2 = __webpack_require__(/*! ./createHashHistory */ "./node_modules/react-router-dom/node_modules/history/createHashHistory.js");

var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);

var _createMemoryHistory2 = __webpack_require__(/*! ./createMemoryHistory */ "./node_modules/react-router-dom/node_modules/history/createMemoryHistory.js");

var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createBrowserHistory = _createBrowserHistory3.default;
exports.createHashHistory = _createHashHistory3.default;
exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/history/node_modules/warning/warning.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/history/node_modules/warning/warning.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/warning/warning.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/warning/warning.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/react-router-dom/withRouter.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-router-dom/withRouter.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _withRouter = __webpack_require__(/*! react-router/withRouter */ "./node_modules/react-router/withRouter.js");

var _withRouter2 = _interopRequireDefault(_withRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _withRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router/MemoryRouter.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/react-router/MemoryRouter.js from dll-reference ./vendor ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/MemoryRouter.js");

/***/ }),

/***/ "./node_modules/react-router/Prompt.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/react-router/Prompt.js from dll-reference ./vendor ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/Prompt.js");

/***/ }),

/***/ "./node_modules/react-router/Redirect.js":
/*!*************************************************************************************!*\
  !*** delegated ./node_modules/react-router/Redirect.js from dll-reference ./vendor ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/Redirect.js");

/***/ }),

/***/ "./node_modules/react-router/Route.js":
/*!**********************************************************************************!*\
  !*** delegated ./node_modules/react-router/Route.js from dll-reference ./vendor ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/Route.js");

/***/ }),

/***/ "./node_modules/react-router/Router.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/react-router/Router.js from dll-reference ./vendor ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/Router.js");

/***/ }),

/***/ "./node_modules/react-router/StaticRouter.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/react-router/StaticRouter.js from dll-reference ./vendor ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/StaticRouter.js");

/***/ }),

/***/ "./node_modules/react-router/Switch.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/react-router/Switch.js from dll-reference ./vendor ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/Switch.js");

/***/ }),

/***/ "./node_modules/react-router/generatePath.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/react-router/generatePath.js from dll-reference ./vendor ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/generatePath.js");

/***/ }),

/***/ "./node_modules/react-router/index.js":
/*!**********************************************************************************!*\
  !*** delegated ./node_modules/react-router/index.js from dll-reference ./vendor ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/index.js");

/***/ }),

/***/ "./node_modules/react-router/matchPath.js":
/*!**************************************************************************************!*\
  !*** delegated ./node_modules/react-router/matchPath.js from dll-reference ./vendor ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/matchPath.js");

/***/ }),

/***/ "./node_modules/react-router/withRouter.js":
/*!***************************************************************************************!*\
  !*** delegated ./node_modules/react-router/withRouter.js from dll-reference ./vendor ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/withRouter.js");

/***/ }),

/***/ "./node_modules/react-toastify/lib/index.js":
/*!****************************************************************************************!*\
  !*** delegated ./node_modules/react-toastify/lib/index.js from dll-reference ./vendor ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-toastify/lib/index.js");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!***************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference ./vendor ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/redux-thunk/lib/index.js":
/*!*************************************************************************************!*\
  !*** delegated ./node_modules/redux-thunk/lib/index.js from dll-reference ./vendor ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/redux-thunk/lib/index.js");

/***/ }),

/***/ "./node_modules/redux/lib/redux.js":
/*!*******************************************************************************!*\
  !*** delegated ./node_modules/redux/lib/redux.js from dll-reference ./vendor ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/redux/lib/redux.js");

/***/ }),

/***/ "./node_modules/resolve-pathname/cjs/index.js":
/*!******************************************************************************************!*\
  !*** delegated ./node_modules/resolve-pathname/cjs/index.js from dll-reference ./vendor ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/resolve-pathname/cjs/index.js");

/***/ }),

/***/ "./node_modules/tslib/tslib.js":
/*!*************************************!*\
  !*** ./node_modules/tslib/tslib.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! *****************************************************************************
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
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) { factory(createExporter(root, createExporter(exports))); }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    else {}
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    __extends = function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
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
    };

    __exportStar = function (m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    };

    __values = function (o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    };

    __read = function (o, n) {
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
    };

    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result["default"] = mod;
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
});


/***/ }),

/***/ "./node_modules/value-equal/cjs/index.js":
/*!*************************************************************************************!*\
  !*** delegated ./node_modules/value-equal/cjs/index.js from dll-reference ./vendor ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/value-equal/cjs/index.js");

/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*******************************************************************************!*\
  !*** delegated ./node_modules/warning/warning.js from dll-reference ./vendor ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/warning/warning.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!**************************************************************************************!*\
  !*** delegated ./node_modules/webpack/buildin/module.js from dll-reference ./vendor ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/webpack/buildin/module.js");

/***/ }),

/***/ "dll-reference ./vendor":
/*!***************************!*\
  !*** external "./vendor" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("./vendor");

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL0dsb2JhbHMudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL1VpLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9ib290LXNlcnZlci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvcGVyc29uL1BlcnNvbkVkaXRvci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvc2hhcmVkL0FwcENvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvc2hhcmVkL0FwcFJvdXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9zaGFyZWQvRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9zaGFyZWQvRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvc2hhcmVkL0xvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvc2hhcmVkL01vZGFsQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9zaGFyZWQvUGFnaW5nQmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9zaGFyZWQvVG9wTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9pbWFnZXMvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvQXV0aG9yaXplZExheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvR3Vlc3RMYXlvdXQudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9tb2RlbHMvUmVzdWx0LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9wYWdlcy9FeGFtcGxlUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3BhZ2VzL0hvbWVQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvcGFnZXMvTG9naW5QYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvcm91dGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc2VydmljZXMvQWNjb3VudFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3NlcnZpY2VzL1BlcnNvblNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3NlcnZpY2VzL1NlcnZpY2VCYXNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdG9yZS9Mb2dpblN0b3JlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdG9yZS9QZXJzb25TdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3V0aWxzLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F3ZXNvbWUtZGVib3VuY2UtcHJvbWlzZS9hd2Vzb21lLWRlYm91bmNlLXByb21pc2UuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JpbmQtZGVjb3JhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwMy1uYXRpdmUvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29ubmVjdGVkLXJlYWN0LXJvdXRlci9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmVhdGUtcmVhY3QtY29udGV4dC9saWIvaW1wbGVtZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWF0ZS1yZWFjdC1jb250ZXh0L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVib3VuY2UtcHJvbWlzZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kZWVwbWVyZ2UvZGlzdC91bWQuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9kb21haW4td2FpdC9kaXN0L2Nqcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zvcm1pay9kaXN0L2Zvcm1pay5janMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zvcm1pay9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mb3JtaWsvbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Rpc3QvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MuY2pzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ndWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2ludmFyaWFudC9pbnZhcmlhbnQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvanNvbi10by11cmwvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2guY2xvbmVkZWVwL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gudG9wYXRoL2luZGV4LmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbnNlcmlhbGl6ZWpzb24vZGlzdC9janMvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbnZhbC10aXBweS9kaXN0L2Nqcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9zZXJ2ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1mYXN0LWNvbXBhcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1oZWxtZXQvbGliL0hlbG1ldC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1wYWdpbmF0aW5nL2Rpc3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9Ccm93c2VyUm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL0hhc2hSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vTGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9NZW1vcnlSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vTmF2TGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9Qcm9tcHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vUmVkaXJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vUm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vUm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL1N0YXRpY1JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9Td2l0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vZ2VuZXJhdGVQYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL21hdGNoUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9ub2RlX21vZHVsZXMvaGlzdG9yeS9ET01VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9ub2RlX21vZHVsZXMvaGlzdG9yeS9Mb2NhdGlvblV0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL25vZGVfbW9kdWxlcy9oaXN0b3J5L1BhdGhVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVCcm93c2VySGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVIYXNoSGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVNZW1vcnlIaXN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL25vZGVfbW9kdWxlcy9oaXN0b3J5L2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL25vZGVfbW9kdWxlcy9oaXN0b3J5L25vZGVfbW9kdWxlcy93YXJuaW5nL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vbm9kZV9tb2R1bGVzL3dhcm5pbmcvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS93aXRoUm91dGVyLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL01lbW9yeVJvdXRlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvUHJvbXB0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9SZWRpcmVjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvUm91dGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL1JvdXRlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvU3RhdGljUm91dGVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9Td2l0Y2guanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2dlbmVyYXRlUGF0aC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL21hdGNoUGF0aC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvd2l0aFJvdXRlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC10b2FzdGlmeS9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9yZWR1eC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXBhdGhuYW1lL2Nqcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvdmFsdWUtZXF1YWwvY2pzL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3dhcm5pbmcvd2FybmluZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vbW9kdWxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIuL3ZlbmRvclwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFB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Q0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCLGFBQWEsWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTyxXQUFXO0FBQzdCLFdBQVcsU0FBUztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBLHdCQUF3Qjs7QUFFeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU8sV0FBVztBQUM3QixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTLEdBQUcsU0FBUztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0JBQWtCLEVBQUU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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d0JBQXdCO0FBQ3hELCtCQUErQix5REFBeUQ7QUFDeEY7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiw0Q0FBNEMsU0FBUyxFQUFFLHFEQUFxRCxhQUFhLEVBQUU7QUFDaEosNkJBQTZCLDZCQUE2QixvQkFBb0IsZ0RBQWdELGdCQUFnQixFQUFFLEtBQUs7QUFDcko7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0dBQStHLHNGQUFzRixhQUFhLEVBQUU7QUFDcE4sMEJBQTBCLDhCQUE4QixnREFBZ0QsdURBQXVELEVBQUUsRUFBRSxHQUFHO0FBQ3RLLGdEQUFnRCxzQ0FBc0MsVUFBVSxvQkFBb0IsRUFBRSxFQUFFLFVBQVU7QUFDbEk7O0FBRUE7QUFDQSxvQ0FBb0MsdUNBQXVDLGFBQWEsRUFBRSxFQUFFLE9BQU8sa0JBQWtCO0FBQ3JIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNsUEQsMEk7Ozs7Ozs7Ozs7O0FDQUEsb0k7Ozs7Ozs7Ozs7O0FDQUEsMkk7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImRpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzeFwiKTtcbiIsImltcG9ydCB7IElTZXJ2aWNlVXNlciB9IGZyb20gXCJATW9kZWxzL0lTZXJ2aWNlVXNlclwiO1xyXG5pbXBvcnQgeyBOU2VyaWFsaXplSnNvbiB9IGZyb20gXCJuc2VyaWFsaXplanNvblwiO1xyXG5pbXBvcnQgeyBJTm9kZVNlc3Npb24gfSBmcm9tIFwiQE1vZGVscy9JTm9kZVNlc3Npb25cIjtcclxuXHJcbi8qKlxyXG4gKiBDb250YWlucyBnbG9iYWwgaXNvbW9ycGhpYyBzZXNzaW9uLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xvYmFscyB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaXNJbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGRhdGE6IElOb2RlU2Vzc2lvbiA9IHt9O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVzZXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kYXRhID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbml0KGRhdGE6IElOb2RlU2Vzc2lvbik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmlzSW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJHbG9iYWxzIGlzIGFscmVhZHkgaW5pdGlhbGl6ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGEgPSAoZGF0YSB8fCB7XHJcbiAgICAgICAgICAgIHB1YmxpYzoge30sIHByaXZhdGU6IHt9XHJcbiAgICAgICAgfSkgYXMgSU5vZGVTZXNzaW9uO1xyXG4gICAgICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIFVzZSBkb3Qgbm90YXRpb24gaW4gbmFtZSBvZiB0aGUgZm9ybSBpbnB1dHMuXHJcbiAgICAgICAgTlNlcmlhbGl6ZUpzb24ub3B0aW9ucy51c2VEb3RTZXBhcmF0b3JJblBhdGggPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHRocm93SWZOb3RJbml0aWFsaXplZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXplZClcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJHbG9iYWxzIGlzIG5vdCBpbml0aWFsaXplZC4gWW91IGhhdmUgdG8gY2FsbCBTZXNzaW9uLmluaXQgYmVmb3JlLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldERhdGEoKTogSU5vZGVTZXNzaW9uIHtcclxuICAgICAgICB0aGlzLnRocm93SWZOb3RJbml0aWFsaXplZCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXREYXRhKGRhdGE6IElOb2RlU2Vzc2lvbikge1xyXG4gICAgICAgIHRoaXMudGhyb3dJZk5vdEluaXRpYWxpemVkKCk7XHJcbiAgICAgICAgdmFyIG9sZERhdGEgPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgdGhpcy5kYXRhID0geyAuLi5vbGREYXRhLCAuLi5kYXRhIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc2VydmljZVVzZXIoKTogSVNlcnZpY2VVc2VyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhKCkucHVibGljLnNlcnZpY2VVc2VyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHNlcnZpY2VVc2VyKHNlcnZpY2VVc2VyOiBJU2VydmljZVVzZXIpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoeyBwdWJsaWM6IHsgc2VydmljZVVzZXIgfSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZVVzZXIgIT0gbnVsbDtcclxuICAgIH1cclxufSIsImltcG9ydCB7dG9hc3R9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVpIHtcclxuICAgIFxyXG4gICAgc3RhdGljIHNob3dFcnJvcnMoLi4ubWVzc2FnZXM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWVzc2FnZXMuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHgpKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcih4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICh4IGFzIGFueSkuZm9yRWFjaCgoeTogc3RyaW5nKSA9PiB0b2FzdC5lcnJvcih5KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2hvd0luZm8obWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdG9hc3QuaW5mbyhtZXNzYWdlKTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XHJcbmltcG9ydCB7IFN0YXRpY1JvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyByZXBsYWNlIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XHJcbmltcG9ydCB7IGNyZWF0ZU1lbW9yeUhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcclxuaW1wb3J0IHsgY3JlYXRlU2VydmVyUmVuZGVyZXIsIFJlbmRlclJlc3VsdCB9IGZyb20gJ2FzcG5ldC1wcmVyZW5kZXJpbmcnO1xyXG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL3JvdXRlcyc7XHJcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcclxuaW1wb3J0IEdsb2JhbHMgZnJvbSBcIkBHbG9iYWxzXCI7XHJcbmltcG9ydCB7IElOb2RlU2Vzc2lvbiB9IGZyb20gXCJATW9kZWxzL0lOb2RlU2Vzc2lvblwiO1xyXG5pbXBvcnQgeyBjb21wbGV0ZWRUYXNrcyB9IGZyb20gXCJkb21haW4td2FpdFwiO1xyXG5cclxudmFyIHJlbmRlckhlbG1ldCA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgdmFyIGhlbG1ldERhdGEgPSBIZWxtZXQucmVuZGVyU3RhdGljKCk7XHJcbiAgICB2YXIgaGVsbWV0U3RyaW5ncyA9IFwiXCI7XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gaGVsbWV0RGF0YSkge1xyXG4gICAgICAgIGlmIChoZWxtZXREYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgaGVsbWV0U3RyaW5ncyArPSBoZWxtZXREYXRhW2tleV0udG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGVsbWV0U3RyaW5ncztcclxufTtcclxuXHJcbnZhciBjcmVhdGVHbG9iYWxzID0gKG5vZGVTZXNzaW9uLCBpbml0aWFsUmVkdXhTdGF0ZSwgaGVsbWV0U3RyaW5ncykgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb21wbGV0ZWRUYXNrcyxcclxuICAgICAgICBub2RlU2Vzc2lvbixcclxuICAgICAgICBpbml0aWFsUmVkdXhTdGF0ZSxcclxuICAgICAgICBoZWxtZXRTdHJpbmdzXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VydmVyUmVuZGVyZXIoKHBhcmFtcykgPT4ge1xyXG5cclxuICAgIEdsb2JhbHMucmVzZXQoKTtcclxuICAgIEdsb2JhbHMuaW5pdChwYXJhbXMuZGF0YSBhcyBJTm9kZVNlc3Npb24pO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZW5kZXJSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgICAgLy8gUHJlcGFyZSBSZWR1eCBzdG9yZSB3aXRoIGluLW1lbW9yeSBoaXN0b3J5LCBhbmQgZGlzcGF0Y2ggYSBuYXZpZ2F0aW9uIGV2ZW50LlxyXG4gICAgICAgIC8vIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGluY29taW5nIFVSTC5cclxuICAgICAgICBjb25zdCBiYXNlbmFtZSA9IHBhcmFtcy5iYXNlVXJsLnN1YnN0cmluZygwLCBwYXJhbXMuYmFzZVVybC5sZW5ndGggLSAxKTsgLy8gUmVtb3ZlIHRyYWlsaW5nIHNsYXNoLlxyXG4gICAgICAgIGNvbnN0IHVybEFmdGVyQmFzZW5hbWUgPSBwYXJhbXMudXJsLnN1YnN0cmluZyhiYXNlbmFtZS5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoY3JlYXRlTWVtb3J5SGlzdG9yeSgpKTtcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChyZXBsYWNlKHVybEFmdGVyQmFzZW5hbWUpKTtcclxuXHJcbiAgICAgICAgLy8gUHJlcGFyZSBhbiBpbnN0YW5jZSBvZiB0aGUgYXBwbGljYXRpb24gYW5kIHBlcmZvcm0gYW4gaW5pdGFsIHJlbmRlciB0aGF0IHdpbGxcclxuICAgICAgICAvLyBjYXVzZSBhbnkgYXN5bmMgdGFza3MgKGUuZy4sIGRhdGEgYWNjZXNzKSB0byBiZWdpbi5cclxuICAgICAgICBjb25zdCByb3V0ZXJDb250ZXh0OiBhbnkgPSB7fTtcclxuICAgICAgICBjb25zdCBhcHAgPSAoXHJcbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICAgICAgPFN0YXRpY1JvdXRlciBiYXNlbmFtZT17YmFzZW5hbWV9IGNvbnRleHQ9e3JvdXRlckNvbnRleHR9IGxvY2F0aW9uPXtwYXJhbXMubG9jYXRpb24ucGF0aH0gY2hpbGRyZW49e3JvdXRlc30gLz5cclxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJBcHAgPSAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlbmRlclRvU3RyaW5nKGFwcCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmVuZGVyQXBwKCk7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlJ3MgYSByZWRpcmVjdGlvbiwganVzdCBzZW5kIHRoaXMgaW5mb3JtYXRpb24gYmFjayB0byB0aGUgaG9zdCBhcHBsaWNhdGlvbi5cclxuICAgICAgICBpZiAocm91dGVyQ29udGV4dC51cmwpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdFVybDogcm91dGVyQ29udGV4dC51cmwsXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxzOiBjcmVhdGVHbG9iYWxzKHBhcmFtcy5kYXRhLCBzdG9yZS5nZXRTdGF0ZSgpLCByZW5kZXJIZWxtZXQoKSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE9uY2UgYW55IGFzeW5jIHRhc2tzIGFyZSBkb25lLCB3ZSBjYW4gcGVyZm9ybSB0aGUgZmluYWwgcmVuZGVyLlxyXG4gICAgICAgIC8vIFdlIGFsc28gc2VuZCB0aGUgcmVkdXggc3RvcmUgc3RhdGUsIHNvIHRoZSBjbGllbnQgY2FuIGNvbnRpbnVlIGV4ZWN1dGlvbiB3aGVyZSB0aGUgc2VydmVyIGxlZnQgb2ZmLlxyXG4gICAgICAgIHBhcmFtcy5kb21haW5UYXNrcy50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgaHRtbDogcmVuZGVyQXBwKCksXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxzOiBjcmVhdGVHbG9iYWxzKHBhcmFtcy5kYXRhLCBzdG9yZS5nZXRTdGF0ZSgpLCByZW5kZXJIZWxtZXQoKSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0sIHJlamVjdCk7IC8vIEFsc28gcHJvcGFnYXRlIGFueSBlcnJvcnMgYmFjayBpbnRvIHRoZSBob3N0IGFwcGxpY2F0aW9uLlxyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBJUGVyc29uTW9kZWwgfSBmcm9tIFwiQE1vZGVscy9JUGVyc29uTW9kZWxcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBiaW5kIGZyb20gJ2JpbmQtZGVjb3JhdG9yJztcclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJAQ29tcG9uZW50cy9zaGFyZWQvRm9ybVwiO1xyXG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xyXG4gICAgZGF0YTogSVBlcnNvbk1vZGVsO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzb25FZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCB7fT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVsRm9ybTogRm9ybTtcclxuXHJcbiAgICBAYmluZFxyXG4gICAgcHVibGljIGVtcHR5Rm9ybSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5lbEZvcm0pIHtcclxuICAgICAgICAgICAgdGhpcy5lbEZvcm0uZW1wdHlGb3JtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxGb3JtaWtcclxuICAgICAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplPXt0cnVlfVxyXG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IHRoaXMucHJvcHMuZGF0YS5maXJzdE5hbWUgfHwgJycsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogdGhpcy5wcm9wcy5kYXRhLmxhc3ROYW1lIHx8ICcnXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uU3VibWl0PXsodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcgfSkgPT4ge1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQmx1cixcclxuICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgICAgICAgICAgICAgIGlzU3VibWl0dGluZyxcclxuICAgICAgICAgICAgICAgIC8qIGFuZCBvdGhlciBnb29kaWVzICovXHJcbiAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmb3JtXCIgcmVmPXt4ID0+IHRoaXMuZWxGb3JtID0geH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImlkXCIgZGVmYXVsdFZhbHVlPXsodGhpcy5wcm9wcy5kYXRhLmlkIHx8IDApLnRvU3RyaW5nKCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgcmVxdWlyZWRcIiBodG1sRm9yPVwicGVyc29uX19maXJzdE5hbWVcIj5GaXJzdCBuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGVyc29uX19maXJzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiZmlyc3ROYW1lXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12YWx1ZS10eXBlPVwic3RyaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZhbC1yZXF1aXJlZD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbXNnLXJlcXVpcmVkPVwiRmlyc3QgbmFtZSBpcyByZXF1aXJlZC5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZmlyc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgcmVxdWlyZWRcIiBodG1sRm9yPVwicGVyc29uX19sYXN0TmFtZVwiPkxhc3QgbmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBlcnNvbl9fbGFzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wibGFzdE5hbWVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZhbHVlLXR5cGU9XCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdmFsLXJlcXVpcmVkPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1tc2ctcmVxdWlyZWQ9XCJMYXN0IG5hbWUgaXMgcmVxdWlyZWQuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmxhc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPil9XHJcbiAgICAgICAgPC9Gb3JtaWs+O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBiaW5kIGZyb20gJ2JpbmQtZGVjb3JhdG9yJztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNvbXBvbmVudCBjb250YWlucyBoZWxwZnVsIG1ldGhvZCB3aGljaFxyXG4gKiBhbGxvd3MgeW91IHRvIG1ha2UgXCJmb3JjZSB1cGRhdGVcIiBvZiB0aGUgc3R1Y2sgZWxlbWVudHMuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBcHBDb21wb25lbnQ8VFByb3BzID0ge30sIFRTdGF0ZSA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxUUHJvcHMsIFRTdGF0ZT4ge1xyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIFBsYWNlIGl0IGludG8gdGhlIFwia2V5XCIgYXR0cmlidXRlIG9mIGFuIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCByZW5kZXJLZXkgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbCB0aGlzIGlmIGNvbXBvbmVudCBzdGF0ZSBpcyBzdHVjay5cclxuICAgICAqIEJ1dCB5b3Ugc2hvdWxkIHNldCB0aGUgcmVuZGVyS2V5IHRvIHRoZSBlbGVtZW50J3MgYXR0cmlidXRlLlxyXG4gICAgICovXHJcbiAgICBAYmluZFxyXG4gICAgcHVibGljIGZvcmNlVXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyS2V5ID0gTWF0aC5yYW5kb20oKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFJvdXRlLCBSb3V0ZVByb3BzLCBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHbG9iYWxzIGZyb20gXCJAR2xvYmFsc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBSb3V0ZVByb3BzIHtcclxuICAgIGxheW91dDogUmVhY3QuQ29tcG9uZW50Q2xhc3M8YW55PjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFwcFJvdXRlID0gKHsgY29tcG9uZW50OiBDb21wb25lbnQsIGxheW91dDogTGF5b3V0LCBwYXRoOiBQYXRoLCAuLi5yZXN0IH06IElQcm9wcykgPT4ge1xyXG5cclxuICAgIHZhciBpc0xvZ2luUGF0aCA9IFBhdGggPT09IFwiL2xvZ2luXCI7XHJcbiAgICBpZiAoIUdsb2JhbHMuaXNBdXRoZW50aWNhdGVkICYmICFpc0xvZ2luUGF0aCkge1xyXG4gICAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvbG9naW5cIiAvPjtcclxuICAgIH1cclxuICAgIGlmIChHbG9iYWxzLmlzQXV0aGVudGljYXRlZCAmJiBpc0xvZ2luUGF0aCkge1xyXG4gICAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvXCIgLz47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxSb3V0ZSB7Li4ucmVzdH0gcmVuZGVyPXtwcm9wcyA9PiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApfSAvPjtcclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxwPlZpZXcgb24gPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9OaWNrTWFldi9yZWFjdC1jb3JlLWJvaWxlcnBsYXRlXCI+R2l0SHViPC9hPjwvcD5cclxuICAgICAgICAgICAgPHA+Q29weXJpZ2h0IChjKSAyMDE4IE5pa29sYXkgTWFldjwvcD5cclxuICAgICAgICAgICAgPHA+PGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL01JVF9MaWNlbnNlXCI+TUlUIExpY2Vuc2U8L2E+PC9wPlxyXG4gICAgICAgIDwvZm9vdGVyPjtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOU2VyaWFsaXplSnNvbiB9IGZyb20gXCJuc2VyaWFsaXplanNvblwiO1xyXG5pbXBvcnQgeyBlbXB0eUZvcm0gfSBmcm9tIFwiQFV0aWxzXCI7XHJcbmltcG9ydCB7IE5WYWxUaXBweSB9IGZyb20gXCJudmFsLXRpcHB5XCI7XHJcbmltcG9ydCBiaW5kIGZyb20gJ2JpbmQtZGVjb3JhdG9yJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgUmVhY3QuRGV0YWlsZWRIVE1MUHJvcHM8UmVhY3QuRm9ybUhUTUxBdHRyaWJ1dGVzPEhUTUxGb3JtRWxlbWVudD4sIEhUTUxGb3JtRWxlbWVudD4ge1xyXG4gICAgY2hpbGRyZW46IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCB7fT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRvcjogTlZhbFRpcHB5O1xyXG4gICAgcHJvdGVjdGVkIGVsRm9ybTogSFRNTEZvcm1FbGVtZW50O1xyXG5cclxuICAgIEBiaW5kXHJcbiAgICBwdWJsaWMgaXNWYWxpZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IuaXNWYWxpZCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAYmluZFxyXG4gICAgcHVibGljIGVtcHR5Rm9ybSgpOiB2b2lkIHtcclxuICAgICAgICBlbXB0eUZvcm0odGhpcy5lbEZvcm0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAYmluZFxyXG4gICAgcHVibGljIGdldERhdGE8VD4oKTogVCB7XHJcbiAgICAgICAgcmV0dXJuIE5TZXJpYWxpemVKc29uLnNlcmlhbGl6ZUZvcm0odGhpcy5lbEZvcm0pIGFzIGFueSBhcyBUO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gbmV3IE5WYWxUaXBweSh0aGlzLmVsRm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8Zm9ybSB7Li4udGhpcy5wcm9wc30gcmVmPXt4ID0+IHRoaXMuZWxGb3JtID0geH0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9mb3JtPjtcclxuICAgIH1cclxufSIsImltcG9ydCBcIkBTdHlsZXMvbG9hZGVyLnNjc3NcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGlzTm9kZSB9IGZyb20gXCJAVXRpbHNcIjtcclxuaW1wb3J0IEFwcENvbXBvbmVudCBmcm9tIFwiQENvbXBvbmVudHMvc2hhcmVkL0FwcENvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xyXG4gICAgc2hvdzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGVyIGV4dGVuZHMgQXBwQ29tcG9uZW50PElQcm9wcywge30+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHZhciBjc3MgPSB7XCJkaXNwbGF5XCI6IFwibm9uZVwifTtcclxuXHJcbiAgICAgICAgaWYgKCFpc05vZGUoKSkge1xyXG4gICAgICAgICAgICBjc3MgPSB7IFwiZGlzcGxheVwiOiAodGhpcy5wcm9wcy5zaG93ID8gXCJibG9ja1wiIDogXCJub25lXCIpIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2IGtleT17dGhpcy5yZW5kZXJLZXl9IGNsYXNzTmFtZT1cImxvYWRlci1iZ1wiIHN0eWxlPXtjc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jaXJjbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTEgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTIgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTMgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTQgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTUgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTYgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTcgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTggc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTkgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTEwIHNrLWNoaWxkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jaXJjbGUxMSBzay1jaGlsZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY2lyY2xlMTIgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiYm9vdHN0cmFwMy1uYXRpdmVcIjtcclxuaW1wb3J0IGJpbmQgZnJvbSAnYmluZC1kZWNvcmF0b3InO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xyXG4gICAgdGl0bGU6IEpTWC5FbGVtZW50IHwgSlNYLkVsZW1lbnRbXSB8IGFueTtcclxuICAgIGJ1dHRvbnM/OiBhbnk7XHJcbiAgICBjaGlsZHJlbj86IEpTWC5FbGVtZW50IHwgSlNYLkVsZW1lbnRbXSB8IGFueTtcclxuICAgIG9uU2hvdz86ICgpID0+IHZvaWQ7XHJcbiAgICBvbkhpZGU/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCB7fT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBtb2RhbFBsdWdpbjogTW9kYWw7XHJcbiAgICBwcm90ZWN0ZWQgZWxNb2RhbDogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgQGJpbmRcclxuICAgIHB1YmxpYyBzaG93KCkge1xyXG4gICAgICAgIHRoaXMubW9kYWxQbHVnaW4uc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBiaW5kXHJcbiAgICBwdWJsaWMgaGlkZSgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsUGx1Z2luLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsUGx1Z2luID0gbmV3IE1vZGFsKHRoaXMuZWxNb2RhbCk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25TaG93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwic2hvdy5icy5tb2RhbFwiIGFzIGFueSwgKCkgPT4gdGhpcy5wcm9wcy5vblNob3coKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uSGlkZSkge1xyXG4gICAgICAgICAgICB0aGlzLmVsTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImhpZGUuYnMubW9kYWxcIiBhcyBhbnksICgpID0+IHRoaXMucHJvcHMub25IaWRlKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsUGx1Z2luLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIHRhYkluZGV4PXstMX0gcm9sZT1cImRpYWxvZ1wiIHJlZj17eCA9PiB0aGlzLmVsTW9kYWwgPSB4fT5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPnt0aGlzLnByb3BzLnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmJ1dHRvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufSIsImltcG9ydCBQYWdpbmF0aW9uLCB7IFBhZ2luYXRpb25Qcm9wcyB9IGZyb20gXCJyZWFjdC1wYWdpbmF0aW5nXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYmluZCBmcm9tICdiaW5kLWRlY29yYXRvcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICB0b3RhbFJlc3VsdHM6IG51bWJlcjtcclxuICAgIGxpbWl0UGVyUGFnZTogbnVtYmVyO1xyXG4gICAgY3VycmVudFBhZ2U6IG51bWJlcjtcclxuICAgIG9uQ2hhbmdlUGFnZTogKHBhZ2VOdW06IG51bWJlcikgPT4gdm9pZDtcclxufVxyXG5cclxuLyogQmVsb3cgY29kZSBvZiB0aGUgJ1BhZ2luYXRpb24nIGNvbXBvbmVudCB3YXMgdGFrZW4gXHJcbmZyb20gdGhlIGh0dHBzOi8vZ2l0aHViLmNvbS9DaG9Ub3RPU1MvcmVhY3QtcGFnaW5hdGluZyBcclxuYW5kIHJlbWFrZWQgZm9yIHRoZSBCb290c3RyYXAgc3R5bGUuICovXHJcblxyXG5leHBvcnQgY2xhc3MgUGFnaW5nQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywge30+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZWxGaXJzdFBhZ2VCdG46IEhUTUxFbGVtZW50O1xyXG4gICAgcHJvdGVjdGVkIGVsTGFzdFBhZ2VCdG46IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIEBiaW5kXHJcbiAgICBwdWJsaWMgc2V0Rmlyc3RQYWdlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWxGaXJzdFBhZ2VCdG4uY2xpY2soKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQGJpbmRcclxuICAgIHB1YmxpYyBzZXRMYXN0UGFnZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVsTGFzdFBhZ2VCdG4uY2xpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgIHRvdGFsPXt0aGlzLnByb3BzLnRvdGFsUmVzdWx0c31cclxuICAgICAgICAgICAgbGltaXQ9e3RoaXMucHJvcHMubGltaXRQZXJQYWdlfVxyXG4gICAgICAgICAgICBjdXJyZW50UGFnZT17dGhpcy5wcm9wcy5jdXJyZW50UGFnZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgICAgcGFnZXMsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZSxcclxuICAgICAgICAgICAgICAgIGhhc05leHRQYWdlLFxyXG4gICAgICAgICAgICAgICAgaGFzUHJldmlvdXNQYWdlLFxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNQYWdlLFxyXG4gICAgICAgICAgICAgICAgbmV4dFBhZ2UsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFBhZ2VzLFxyXG4gICAgICAgICAgICAgICAgZ2V0UGFnZUl0ZW1Qcm9wc1xyXG4gICAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldFBhZ2VJdGVtUHJvcHMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlVmFsdWU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZTogdGhpcy5wcm9wcy5vbkNoYW5nZVBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3ggPT4gdGhpcy5lbEZpcnN0UGFnZUJ0biA9IHh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNQcmV2aW91c1BhZ2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0UGFnZUl0ZW1Qcm9wcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlVmFsdWU6IHByZXZpb3VzUGFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZTogdGhpcy5wcm9wcy5vbkNoYW5nZVBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JzwnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFnZXMubWFwKHBhZ2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwYWdlfSBjbGFzc05hbWU9e3BhZ2UgPT09IGN1cnJlbnRQYWdlID8gJ2FjdGl2ZScgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0UGFnZUl0ZW1Qcm9wcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVZhbHVlOiBwYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZTogdGhpcy5wcm9wcy5vbkNoYW5nZVBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNOZXh0UGFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldFBhZ2VJdGVtUHJvcHMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVZhbHVlOiBuZXh0UGFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZTogdGhpcy5wcm9wcy5vbkNoYW5nZVBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Jz4nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRQYWdlSXRlbVByb3BzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVZhbHVlOiB0b3RhbFBhZ2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U6IHRoaXMucHJvcHMub25DaGFuZ2VQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt4ID0+IHRoaXMuZWxMYXN0UGFnZUJ0biA9IHh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9QYWdpbmF0aW9uPlxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdkxpbmssIFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEdsb2JhbHMgZnJvbSBcIkBHbG9iYWxzXCI7XHJcbmltcG9ydCBBY2NvdW50U2VydmljZSBmcm9tIFwiQFNlcnZpY2VzL0FjY291bnRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSBcImJvb3RzdHJhcDMtbmF0aXZlXCI7XHJcbmltcG9ydCBiaW5kIGZyb20gJ2JpbmQtZGVjb3JhdG9yJztcclxuXHJcbmNsYXNzIFRvcE1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIHsgbG9nb3V0QWN0aW9uOiBib29sZWFuIH0+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0geyBsb2dvdXRBY3Rpb246IGZhbHNlIH07XHJcbiAgICB9XHJcblxyXG4gICAgQGJpbmRcclxuICAgIGFzeW5jIG9uQ2xpY2tTaWduT3V0KGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEFuY2hvckVsZW1lbnQ+KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBhd2FpdCBBY2NvdW50U2VydmljZS5sb2dvdXQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9nb3V0QWN0aW9uOiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZWxEcm9wZG93bjogSFRNTEFuY2hvckVsZW1lbnQ7XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdmFyIGRyb3Bkb3duID0gbmV3IERyb3Bkb3duKHRoaXMuZWxEcm9wZG93bik7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sb2dvdXRBY3Rpb24pXHJcbiAgICAgICAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvbG9naW5cIiAvPjtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1kZWZhdWx0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlIGNvbGxhcHNlZFwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPlJDQjwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm5hdmJhclwiIGNsYXNzTmFtZT1cIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSBuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIGV4YWN0IHRvPXsnLyd9IGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPkhvbWU8L05hdkxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIGV4YWN0IHRvPXsnL2V4YW1wbGUnfSBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5FeGFtcGxlPC9OYXZMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiByZWY9e3ggPT4gdGhpcy5lbERyb3Bkb3duID0geH0gY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtHbG9iYWxzLnNlcnZpY2VVc2VyLmxvZ2lufSZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmV0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tTaWduT3V0fT5TaWduIG91dDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihUb3BNZW51IGFzIGFueSk7IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY29tYmluZVJlZHVjZXJzLCBTdG9yZUVuaGFuY2VyLCBTdG9yZSwgU3RvcmVFbmhhbmNlclN0b3JlQ3JlYXRvciwgUmVkdWNlcnNNYXBPYmplY3QgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCB7IHJvdXRlck1pZGRsZXdhcmUsIExPQ0FUSU9OX0NIQU5HRSB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInO1xyXG4vL3ZhciByb3V0ZXJSZWR1Y2VyID0gcmVxdWlyZShcImNvbm5lY3RlZC1yZWFjdC1yb3V0ZXIvbGliL3JlZHVjZXJcIik7XHJcbi8vaW1wb3J0IHtyb3V0ZXJSZWR1Y2VyfSBmcm9tIFwicmVhY3Qtcm91dGVyLXJlZHV4XCI7XHJcbmltcG9ydCAqIGFzIFN0b3JlTW9kdWxlIGZyb20gJy4vc3RvcmUnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlLCByZWR1Y2VycyB9IGZyb20gJy4vc3RvcmUnO1xyXG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShoaXN0b3J5OiBIaXN0b3J5LCBpbml0aWFsU3RhdGU/OiBBcHBsaWNhdGlvblN0YXRlKSB7XHJcbiAgICAvLyBCdWlsZCBtaWRkbGV3YXJlLiBUaGVzZSBhcmUgZnVuY3Rpb25zIHRoYXQgY2FuIHByb2Nlc3MgdGhlIGFjdGlvbnMgYmVmb3JlIHRoZXkgcmVhY2ggdGhlIHN0b3JlLlxyXG4gICAgY29uc3Qgd2luZG93SWZEZWZpbmVkID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogd2luZG93IGFzIGFueTtcclxuICAgIC8vIElmIGRldlRvb2xzIGlzIGluc3RhbGxlZCwgY29ubmVjdCB0byBpdFxyXG4gICAgY29uc3QgZGV2VG9vbHNFeHRlbnNpb24gPSB3aW5kb3dJZkRlZmluZWQgJiYgd2luZG93SWZEZWZpbmVkLl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gYXMgKCkgPT4gU3RvcmVFbmhhbmNlcjtcclxuICAgIGNvbnN0IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUgPSBjb21wb3NlKFxyXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuaywgcm91dGVyTWlkZGxld2FyZShoaXN0b3J5KSksXHJcbiAgICAgICAgZGV2VG9vbHNFeHRlbnNpb24gPyBkZXZUb29sc0V4dGVuc2lvbigpIDogPFM+KG5leHQ6IFN0b3JlRW5oYW5jZXJTdG9yZUNyZWF0b3I8Uz4pID0+IG5leHRcclxuICAgICkoY3JlYXRlU3RvcmUpO1xyXG5cclxuICAgIC8vIENvbWJpbmUgYWxsIHJlZHVjZXJzIGFuZCBpbnN0YW50aWF0ZSB0aGUgYXBwLXdpZGUgc3RvcmUgaW5zdGFuY2VcclxuICAgIGNvbnN0IGFsbFJlZHVjZXJzID0gYnVpbGRSb290UmVkdWNlcihyZWR1Y2VycywgaGlzdG9yeSk7XHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUoYWxsUmVkdWNlcnMsIGluaXRpYWxTdGF0ZSBhcyBhbnkpIGFzIFN0b3JlPEFwcGxpY2F0aW9uU3RhdGU+O1xyXG5cclxuICAgIC8vIEVuYWJsZSBXZWJwYWNrIGhvdCBtb2R1bGUgcmVwbGFjZW1lbnQgZm9yIHJlZHVjZXJzXHJcbiAgICBpZiAobW9kdWxlLmhvdCkge1xyXG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuL3N0b3JlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0Um9vdFJlZHVjZXIgPSByZXF1aXJlPHR5cGVvZiBTdG9yZU1vZHVsZT4oJy4vc3RvcmUnKTtcclxuICAgICAgICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIoYnVpbGRSb290UmVkdWNlcihuZXh0Um9vdFJlZHVjZXIucmVkdWNlcnMsIGhpc3RvcnkpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn1cclxuXHJcbmNvbnN0IHJvdXRlclJlZHVjZXIgPSAoaGlzdG9yeSkgPT4ge1xyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uLFxyXG4gICAgICAgIGFjdGlvbjogaGlzdG9yeS5hY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYXJnOiBhbnkgPSB7fSkgPT4ge1xyXG4gICAgICAgIGlmIChhcmcudHlwZSA9PT0gTE9DQVRJT05fQ0hBTkdFKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hcmcucGF5bG9hZCB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBidWlsZFJvb3RSZWR1Y2VyKGFsbFJlZHVjZXJzOiBSZWR1Y2Vyc01hcE9iamVjdCwgaGlzdG9yeSkge1xyXG4gICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyczxBcHBsaWNhdGlvblN0YXRlPih7Li4uYWxsUmVkdWNlcnMsIC4uLnsgcm91dGVyOiByb3V0ZXJSZWR1Y2VyKGhpc3RvcnkpIH19IGFzIGFueSk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDFiNjFlYmZlZTI5ZTQ3MDg1MGVkMmQyZDg4OWUzM2YucG5nXCI7IiwiaW1wb3J0IFRvcE1lbnUgZnJvbSBcIkBDb21wb25lbnRzL3NoYXJlZC9Ub3BNZW51XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCJAU3R5bGVzL2F1dGhvcml6ZWRMYXlvdXQuc2Nzc1wiO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCJAQ29tcG9uZW50cy9zaGFyZWQvRm9vdGVyXCI7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICAgIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xyXG59XHJcblxyXG50eXBlIFByb3BzID0gSVByb3BzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aG9yaXplZExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywge30+IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2IGlkPVwiYXV0aG9yaXplZExheW91dFwiIGNsYXNzTmFtZT1cImxheW91dFwiPlxyXG4gICAgICAgICAgICA8VG9wTWVudSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufSIsImltcG9ydCBcIkBTdHlsZXMvZ3Vlc3RMYXlvdXQuc2Nzc1wiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICAgIGNoaWxkcmVuOiBhbnk7XHJcbn1cclxuXHJcbnR5cGUgUHJvcHMgPSBJUHJvcHMgJiBSb3V0ZUNvbXBvbmVudFByb3BzPGFueT4gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3Vlc3RMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIHt9PiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBpZD1cImd1ZXN0TGF5b3V0XCIgY2xhc3NOYW1lPVwibGF5b3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0PFQ+IHtcclxuICAgIHB1YmxpYyB2YWx1ZTogVDtcclxuICAgIHB1YmxpYyBlcnJvcnM6IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIGdldCBoYXNFcnJvcnMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzICE9IG51bGwgJiYgQXJyYXkuaXNBcnJheSh0aGlzLmVycm9ycykgJiYgdGhpcy5lcnJvcnMubGVuZ3RoID4gMDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogVCwgLi4uZXJyb3JzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9yc1swXSA9PSB1bmRlZmluZWQgfHwgZXJyb3JzWzBdID09IG51bGwgPyBbXSA6IGVycm9ycztcclxuICAgIH1cclxufSIsImltcG9ydCBcIkBTdHlsZXMvbWFpbi5zY3NzXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XHJcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMsIHdpdGhSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCB7IElQZXJzb25Nb2RlbCB9IGZyb20gXCJATW9kZWxzL0lQZXJzb25Nb2RlbFwiO1xyXG5pbXBvcnQgeyBQZXJzb25TdG9yZSB9IGZyb20gXCJAU3RvcmUvUGVyc29uU3RvcmVcIjtcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gXCJAU3RvcmUvaW5kZXhcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBQYWdpbmdCYXIgfSBmcm9tIFwiQENvbXBvbmVudHMvc2hhcmVkL1BhZ2luZ0JhclwiO1xyXG5pbXBvcnQgUGVyc29uRWRpdG9yIGZyb20gXCJAQ29tcG9uZW50cy9wZXJzb24vUGVyc29uRWRpdG9yXCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIkBDb21wb25lbnRzL3NoYXJlZC9Mb2FkZXJcIjtcclxuaW1wb3J0IGJpbmQgZnJvbSAnYmluZC1kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gXCJAQ29tcG9uZW50cy9zaGFyZWQvTW9kYWxDb21wb25lbnRcIjtcclxuaW1wb3J0IEF3ZXNvbWVEZWJvdW5jZVByb21pc2UgZnJvbSBcImF3ZXNvbWUtZGVib3VuY2UtcHJvbWlzZVwiO1xyXG5cclxudHlwZSBQcm9wcyA9IFJvdXRlQ29tcG9uZW50UHJvcHM8e30+ICYgdHlwZW9mIFBlcnNvblN0b3JlLmFjdGlvbkNyZWF0b3JzICYgUGVyc29uU3RvcmUuSVN0YXRlO1xyXG5cclxuaW50ZXJmYWNlIElTdGF0ZSB7XHJcbiAgICBzZWFyY2hUZXJtOiBzdHJpbmc7XHJcbiAgICBwYWdlTnVtOiBudW1iZXI7XHJcbiAgICBsaW1pdFBlclBhZ2U6IG51bWJlcjtcclxuICAgIHJvd09mZnNldDogbnVtYmVyO1xyXG4gICAgbW9kZWxGb3JFZGl0OiBJUGVyc29uTW9kZWw7XHJcbn1cclxuXHJcblxyXG5jbGFzcyBFeGFtcGxlUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgSVN0YXRlPiB7XHJcblxyXG4gICAgcHJpdmF0ZSBwYWdpbmdCYXI6IFBhZ2luZ0JhcjtcclxuXHJcbiAgICBwcml2YXRlIGVsTW9kYWxBZGQ6IE1vZGFsQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBlbE1vZGFsRWRpdDogTW9kYWxDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIGVsTW9kYWxEZWxldGU6IE1vZGFsQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgcGVyc29uRWRpdG9yQWRkOiBQZXJzb25FZGl0b3I7XHJcbiAgICBwcml2YXRlIHBlcnNvbkVkaXRvckVkaXQ6IFBlcnNvbkVkaXRvcjtcclxuXHJcbiAgICBwcml2YXRlIGRlYm91bmNlZFNlYXJjaDogKHRlcm06IHN0cmluZykgPT4gdm9pZDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNlYXJjaFRlcm06IFwiXCIsXHJcbiAgICAgICAgICAgIHBhZ2VOdW06IDEsXHJcbiAgICAgICAgICAgIGxpbWl0UGVyUGFnZTogNSxcclxuICAgICAgICAgICAgcm93T2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICBtb2RlbEZvckVkaXQ6IHt9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5kZWJvdW5jZWRTZWFyY2ggPSBBd2Vzb21lRGVib3VuY2VQcm9taXNlKCh0ZXJtOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgcHJvcHMuc2VhcmNoUmVxdWVzdCh0ZXJtKTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnByb3BzLnNlYXJjaFJlcXVlc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5lbE1vZGFsQWRkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxNb2RhbEFkZC5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmVsTW9kYWxFZGl0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxNb2RhbEVkaXQuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5lbE1vZGFsRGVsZXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxNb2RhbERlbGV0ZS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBiaW5kXHJcbiAgICBvbkNoYW5nZVBhZ2UocGFnZU51bTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHJvd09mZnNldCA9IE1hdGguY2VpbCgocGFnZU51bSAtIDEpICogdGhpcy5zdGF0ZS5saW1pdFBlclBhZ2UpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlTnVtLCByb3dPZmZzZXQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgQGJpbmRcclxuICAgIG9uQ2xpY2tTaG93QWRkTW9kYWwoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pIHtcclxuICAgICAgICB0aGlzLmVsTW9kYWxBZGQuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBiaW5kXHJcbiAgICBvbkNsaWNrU2hvd0VkaXRNb2RhbChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PiwgbW9kZWxGb3JFZGl0OiBJUGVyc29uTW9kZWwpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW9kZWxGb3JFZGl0IH0pO1xyXG4gICAgICAgIHRoaXMuZWxNb2RhbEVkaXQuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBiaW5kXHJcbiAgICBvbkNsaWNrU2hvd0RlbGV0ZU1vZGFsKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+LCBtb2RlbEZvckVkaXQ6IElQZXJzb25Nb2RlbCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RlbEZvckVkaXQgfSk7XHJcbiAgICAgICAgdGhpcy5lbE1vZGFsRGVsZXRlLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBAYmluZFxyXG4gICAgb25DbGlja1BlcnNvbkVkaXRvckFkZF9fc2F2ZUJ0bihlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pik6IHZvaWQge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoIXRoaXMucGVyc29uRWRpdG9yQWRkLmVsRm9ybS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb3BzLmFkZFJlcXVlc3QodGhpcy5wZXJzb25FZGl0b3JBZGQuZWxGb3JtLmdldERhdGEoKSk7XHJcbiAgICAgICAgdGhpcy5wYWdpbmdCYXIuc2V0TGFzdFBhZ2UoKTtcclxuICAgICAgICB0aGlzLmVsTW9kYWxBZGQuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBiaW5kXHJcbiAgICBvbkNsaWNrUGVyc29uRWRpdG9yRWRpdF9fc2F2ZUJ0bihlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pik6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5wZXJzb25FZGl0b3JFZGl0LmVsRm9ybS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZGF0YSA9IHRoaXMucGVyc29uRWRpdG9yRWRpdC5lbEZvcm0uZ2V0RGF0YSgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlUmVxdWVzdChkYXRhKTtcclxuICAgICAgICB0aGlzLmVsTW9kYWxFZGl0LmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBAYmluZFxyXG4gICAgb25DbGlja1BlcnNvbkVkaXRvckRlbGV0ZV9fc2F2ZUJ0bihlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZGVsZXRlUmVxdWVzdCh0aGlzLnN0YXRlLm1vZGVsRm9yRWRpdC5pZCk7XHJcbiAgICAgICAgdGhpcy5lbE1vZGFsRGVsZXRlLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBAYmluZFxyXG4gICAgcmVuZGVyUm93KHBlcnNvbjogSVBlcnNvbk1vZGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIDx0ciBrZXk9e3BlcnNvbi5pZH0+XHJcbiAgICAgICAgICAgIDx0ZD57cGVyc29uLmZpcnN0TmFtZX08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e3BlcnNvbi5sYXN0TmFtZX08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIG9uQ2xpY2s9e3ggPT4gdGhpcy5vbkNsaWNrU2hvd0VkaXRNb2RhbCh4LCBwZXJzb24pfT5FZGl0PC9idXR0b24+Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17eCA9PiB0aGlzLm9uQ2xpY2tTaG93RGVsZXRlTW9kYWwoeCwgcGVyc29uKX0+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj47XHJcbiAgICB9XHJcblxyXG4gICAgQGJpbmRcclxuICAgIHJlbmRlclJvd3MoZGF0YTogSVBlcnNvbk1vZGVsW10pIHtcclxuICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgICAgICAgICAuc2xpY2UodGhpcy5zdGF0ZS5yb3dPZmZzZXQsIHRoaXMuc3RhdGUucm93T2Zmc2V0ICsgdGhpcy5zdGF0ZS5saW1pdFBlclBhZ2UpXHJcbiAgICAgICAgICAgIC5tYXAoeCA9PiB0aGlzLnJlbmRlclJvdyh4KSk7XHJcbiAgICB9XHJcblxyXG4gICAgQGJpbmRcclxuICAgIG9uQ2hhbmdlU2VhcmNoSW5wdXQoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcclxuICAgICAgICB2YXIgdmFsID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuZGVib3VuY2VkU2VhcmNoKHZhbCk7XHJcbiAgICAgICAgdGhpcy5wYWdpbmdCYXIuc2V0Rmlyc3RQYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPEhlbG1ldD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5FeGFtcGxlIC0gUkNCPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWxtZXQ+XHJcblxyXG4gICAgICAgICAgICA8TG9hZGVyIHNob3c9e3RoaXMucHJvcHMuaW5kaWNhdG9ycy5vcGVyYXRpb25Mb2FkaW5nfSAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHkgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9e3RoaXMub25DbGlja1Nob3dBZGRNb2RhbH0+QWRkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VTZWFyY2hJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIlNlYXJjaCBmb3IgcGVvcGxlLi4uXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5GaXJzdCBuYW1lPC90aD48dGg+TGFzdCBuYW1lPC90aD48dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJSb3dzKHRoaXMucHJvcHMucGVvcGxlKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgICAgICAgICB7LyogQWRkIG1vZGFsICovfVxyXG4gICAgICAgICAgICA8TW9kYWxDb21wb25lbnRcclxuICAgICAgICAgICAgICAgIHJlZj17eCA9PiB0aGlzLmVsTW9kYWxBZGQgPSB4fVxyXG4gICAgICAgICAgICAgICAgYnV0dG9ucz17PGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5vbkNsaWNrUGVyc29uRWRpdG9yQWRkX19zYXZlQnRufT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkFkZCBwZXJzb25cIlxyXG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGVyc29uRWRpdG9yQWRkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyc29uRWRpdG9yQWRkLmVtcHR5Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPFBlcnNvbkVkaXRvciByZWY9e3ggPT4gdGhpcy5wZXJzb25FZGl0b3JBZGQgPSB4fSBkYXRhPXt7fX0gLz5cclxuICAgICAgICAgICAgPC9Nb2RhbENvbXBvbmVudD5cclxuXHJcbiAgICAgICAgICAgIHsvKiBFZGl0IG1vZGFsICovfVxyXG4gICAgICAgICAgICA8TW9kYWxDb21wb25lbnRcclxuICAgICAgICAgICAgICAgIHJlZj17eCA9PiB0aGlzLmVsTW9kYWxFZGl0ID0geH1cclxuICAgICAgICAgICAgICAgIGJ1dHRvbnM9ezxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMub25DbGlja1BlcnNvbkVkaXRvckVkaXRfX3NhdmVCdG59PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtgRWRpdCBwZXJzb246ICR7dGhpcy5zdGF0ZS5tb2RlbEZvckVkaXQuZmlyc3ROYW1lfSAke3RoaXMuc3RhdGUubW9kZWxGb3JFZGl0Lmxhc3ROYW1lfWB9XHJcbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wZXJzb25FZGl0b3JFZGl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RlbEZvckVkaXQ6IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPFBlcnNvbkVkaXRvciByZWY9e3ggPT4gdGhpcy5wZXJzb25FZGl0b3JFZGl0ID0geH0gZGF0YT17dGhpcy5zdGF0ZS5tb2RlbEZvckVkaXR9IC8+XHJcbiAgICAgICAgICAgIDwvTW9kYWxDb21wb25lbnQ+XHJcblxyXG4gICAgICAgICAgICB7LyogRGVsZXRlIG1vZGFsICovfVxyXG4gICAgICAgICAgICA8TW9kYWxDb21wb25lbnRcclxuICAgICAgICAgICAgICAgIHJlZj17eCA9PiB0aGlzLmVsTW9kYWxEZWxldGUgPSB4fVxyXG4gICAgICAgICAgICAgICAgYnV0dG9ucz17PGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tQZXJzb25FZGl0b3JEZWxldGVfX3NhdmVCdG59PkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2BEZWxldGUgcGVyc29uOiAke3RoaXMuc3RhdGUubW9kZWxGb3JFZGl0LmZpcnN0TmFtZX0gJHt0aGlzLnN0YXRlLm1vZGVsRm9yRWRpdC5sYXN0TmFtZX1gfT5cclxuICAgICAgICAgICAgICAgIDxwPkRvIHlvdSByZWFsbHkgd2FudCB0byBkZWxldGUgdGhpcyBwZXJzb24/PC9wPlxyXG4gICAgICAgICAgICA8L01vZGFsQ29tcG9uZW50PlxyXG5cclxuICAgICAgICAgICAgPFBhZ2luZ0JhclxyXG4gICAgICAgICAgICAgICAgcmVmPXt4ID0+IHRoaXMucGFnaW5nQmFyID0geH1cclxuICAgICAgICAgICAgICAgIHRvdGFsUmVzdWx0cz17dGhpcy5wcm9wcy5wZW9wbGUubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgbGltaXRQZXJQYWdlPXt0aGlzLnN0YXRlLmxpbWl0UGVyUGFnZX1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlPXt0aGlzLnN0YXRlLnBhZ2VOdW19XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZVBhZ2U9e3RoaXMub25DaGFuZ2VQYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxudmFyIGNvbXBvbmVudCA9IGNvbm5lY3QoXHJcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLnBlcnNvbiwgLy8gU2VsZWN0cyB3aGljaCBzdGF0ZSBwcm9wZXJ0aWVzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHMuXHJcbiAgICBQZXJzb25TdG9yZS5hY3Rpb25DcmVhdG9ycyAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzLlxyXG4pKEV4YW1wbGVQYWdlIGFzIGFueSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAod2l0aFJvdXRlcihjb21wb25lbnQgYXMgYW55KSBhcyBhbnkgYXMgdHlwZW9mIEV4YW1wbGVQYWdlKSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XHJcbmltcG9ydCBsb2dvIGZyb20gXCJASW1hZ2VzL2xvZ28ucG5nXCI7XHJcblxyXG50eXBlIFByb3BzID0gUm91dGVDb21wb25lbnRQcm9wczx7fT47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywge30+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPEhlbG1ldD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Ib21lIHBhZ2UgLSBSQ0I8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlbG1ldD5cclxuICAgICAgICAgICAgPGltZyBzdHlsZT17e1wibWFyZ2luXCI6IFwiMCBhdXRvXCIsIFwiZGlzcGxheVwiOiBcImJsb2NrXCIsIFwid2lkdGhcIjogXCIxMDAlXCJ9fSBzcmM9e2xvZ299IC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7XCJmb250U2l6ZVwiOiBcIjUycHhcIn19PkhhcHB5IGNvZGluZyE8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElMb2dpbk1vZGVsIH0gZnJvbSBcIkBNb2RlbHMvSUxvZ2luTW9kZWxcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiQENvbXBvbmVudHMvc2hhcmVkL0xvYWRlclwiO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSBcIkBTdG9yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBMb2dpblN0b3JlIH0gZnJvbSBcIkBTdG9yZS9Mb2dpblN0b3JlXCI7XHJcbmltcG9ydCBcIkBTdHlsZXMvbWFpbi5zY3NzXCI7O1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSBcInJlYWN0LWhlbG1ldFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJlZGlyZWN0LCBSb3V0ZUNvbXBvbmVudFByb3BzLCB3aXRoUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5pbXBvcnQgYmluZCBmcm9tICdiaW5kLWRlY29yYXRvcic7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiQENvbXBvbmVudHMvc2hhcmVkL0Zvcm1cIjtcclxuXHJcbnR5cGUgUHJvcHMgPSBSb3V0ZUNvbXBvbmVudFByb3BzPHt9PiAmIHR5cGVvZiBMb2dpblN0b3JlLmFjdGlvbkNyZWF0b3JzICYgTG9naW5TdG9yZS5JU3RhdGU7XHJcblxyXG5jbGFzcyBMb2dpblBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIHt9PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsTG9hZGVyOiBMb2FkZXI7XHJcbiAgICBlbEZvcm06IEZvcm07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5wcm9wcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuZWxMb2FkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5lbExvYWRlci5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAYmluZFxyXG4gICAgcHJpdmF0ZSBhc3luYyBvbkNsaWNrU3VibWl0QnRuKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmVsRm9ybS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmVsRm9ybS5nZXREYXRhPElMb2dpbk1vZGVsPigpO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmxvZ2luUmVxdWVzdChkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pbmRpY2F0b3JzLmxvZ2luU3VjY2Vzcykge1xyXG4gICAgICAgICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPVwiL1wiLz47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBpZD1cImxvZ2luUGFnZVwiPlxyXG5cclxuICAgICAgICAgICAgPEhlbG1ldD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Mb2dpbiBwYWdlIC0gUkNCPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWxtZXQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8TG9hZGVyIHJlZj17eCA9PiB0aGlzLmVsTG9hZGVyID0geH0gc2hvdz17dGhpcy5wcm9wcy5pbmRpY2F0b3JzLm9wZXJhdGlvbkxvYWRpbmd9IC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibG9naW5Db250YWluZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlR5cGUgYW55IGxvZ2luIGFuZCBwYXNzd29yZCB0byBlbnRlci48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm0gcmVmPXt4ID0+IHRoaXMuZWxGb3JtID0geH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXRMb2dpblwiPkxvZ2luPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17XCJsb2dpblwifSBkYXRhLXZhbHVlLXR5cGU9XCJzdHJpbmdcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImlucHV0TG9naW5cIiBkYXRhLXZhbC1yZXF1aXJlZD1cInRydWVcIiBkYXRhLW1zZy1yZXF1aXJlZD1cIkxvZ2luIGlzIHJlcXVpcmVkLlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXRMb2dpblwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9e1wicGFzc3dvcmRcIn0gZGF0YS12YWx1ZS10eXBlPVwic3RyaW5nXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJpbnB1dFBhc3N3b3JkXCIgZGF0YS12YWwtcmVxdWlyZWQ9XCJ0cnVlXCIgZGF0YS1tc2ctcmVxdWlyZWQ9XCJQYXNzd29yZCBpcyByZXF1aXJlZC5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tTdWJtaXRCdG59PlNpZ24gaW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxudmFyIGNvbXBvbmVudCA9IGNvbm5lY3QoXHJcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLmxvZ2luLCAvLyBTZWxlY3RzIHdoaWNoIHN0YXRlIHByb3BlcnRpZXMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xyXG4gICAgTG9naW5TdG9yZS5hY3Rpb25DcmVhdG9ycyAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbikoTG9naW5QYWdlIGFzIGFueSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAod2l0aFJvdXRlcihjb21wb25lbnQgYXMgYW55KSBhcyBhbnkgYXMgdHlwZW9mIExvZ2luUGFnZSkiLCJpbXBvcnQgQXV0aG9yaXplZExheW91dCBmcm9tICdATGF5b3V0cy9BdXRob3JpemVkTGF5b3V0JztcclxuaW1wb3J0IEd1ZXN0TGF5b3V0IGZyb20gXCJATGF5b3V0cy9HdWVzdExheW91dFwiO1xyXG5pbXBvcnQgTG9naW5QYWdlIGZyb20gJ0BQYWdlcy9Mb2dpblBhZ2UnO1xyXG5pbXBvcnQgeyBBcHBSb3V0ZSB9IGZyb20gXCJAQ29tcG9uZW50cy9zaGFyZWQvQXBwUm91dGVcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEhvbWVQYWdlIGZyb20gJ0BQYWdlcy9Ib21lUGFnZSc7XHJcbmltcG9ydCBFeGFtcGxlUGFnZSBmcm9tICdAUGFnZXMvRXhhbXBsZVBhZ2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IDxTd2l0Y2g+XHJcbiAgICA8QXBwUm91dGUgbGF5b3V0PXtHdWVzdExheW91dH0gZXhhY3QgcGF0aD1cIi9sb2dpblwiIGNvbXBvbmVudD17TG9naW5QYWdlfSAvPlxyXG4gICAgPEFwcFJvdXRlIGxheW91dD17QXV0aG9yaXplZExheW91dH0gZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0hvbWVQYWdlfSAvPlxyXG4gICAgPEFwcFJvdXRlIGxheW91dD17QXV0aG9yaXplZExheW91dH0gZXhhY3QgcGF0aD1cIi9leGFtcGxlXCIgY29tcG9uZW50PXtFeGFtcGxlUGFnZX0gLz5cclxuPC9Td2l0Y2g+OyIsImltcG9ydCB7IElMb2dpbk1vZGVsIH0gZnJvbSBcIkBNb2RlbHMvSUxvZ2luTW9kZWxcIjtcclxuaW1wb3J0IHsgSVNlcnZpY2VVc2VyIH0gZnJvbSBcIkBNb2RlbHMvSVNlcnZpY2VVc2VyXCI7XHJcbmltcG9ydCBSZXN1bHQgZnJvbSBcIkBNb2RlbHMvUmVzdWx0XCI7XHJcbmltcG9ydCB7IFNlcnZpY2VCYXNlIH0gZnJvbSBcIi4vU2VydmljZUJhc2VcIjtcclxuaW1wb3J0IEdsb2JhbHMgZnJvbSBcIkBHbG9iYWxzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50U2VydmljZSBleHRlbmRzIFNlcnZpY2VCYXNlIHtcclxuICAgIFxyXG4gICAgc3RhdGljIGFzeW5jIGxvZ2luKGxvZ2luTW9kZWw6IElMb2dpbk1vZGVsKSA6IFByb21pc2U8UmVzdWx0PElTZXJ2aWNlVXNlcj4+IHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0SnNvbjxJU2VydmljZVVzZXI+KHtcclxuICAgICAgICAgICAgdXJsOiBcImFwaS9BY2NvdW50L0xvZ2luXCIsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IGxvZ2luTW9kZWxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXN1bHQuaGFzRXJyb3JzKSB7XHJcbiAgICAgICAgICAgIEdsb2JhbHMuc2VydmljZVVzZXIgPSByZXN1bHQudmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBsb2dvdXQoKTogUHJvbWlzZTxSZXN1bHQ8e30+PiB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdEpzb248SVNlcnZpY2VVc2VyPih7XHJcbiAgICAgICAgICAgIHVybDogXCJhcGkvQWNjb3VudC9Mb2dvdXRcIixcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIXJlc3VsdC5oYXNFcnJvcnMpIHtcclxuICAgICAgICAgICAgR2xvYmFscy5zZXJ2aWNlVXNlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2VydmljZUJhc2UgfSBmcm9tIFwiQFNlcnZpY2VzL1NlcnZpY2VCYXNlXCI7XHJcbmltcG9ydCBSZXN1bHQgZnJvbSBcIkBNb2RlbHMvUmVzdWx0XCI7XHJcbmltcG9ydCB7IElQZXJzb25Nb2RlbCB9IGZyb20gXCJATW9kZWxzL0lQZXJzb25Nb2RlbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVyc29uU2VydmljZSBleHRlbmRzIFNlcnZpY2VCYXNlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc2VhcmNoKHRlcm06IHN0cmluZyA9IG51bGwpOiBQcm9taXNlPFJlc3VsdDxJUGVyc29uTW9kZWxbXT4+IHtcclxuICAgICAgICBpZiAodGVybSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRlcm0gPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0SnNvbjxJUGVyc29uTW9kZWxbXT4oe1xyXG4gICAgICAgICAgICB1cmw6IGAvYXBpL1BlcnNvbi9TZWFyY2g/dGVybT0ke3Rlcm19YCxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgdXBkYXRlKG1vZGVsOiBJUGVyc29uTW9kZWwpOiBQcm9taXNlPFJlc3VsdDx7fT4+IHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0SnNvbih7XHJcbiAgICAgICAgICAgIHVybDogXCIvYXBpL1BlcnNvblwiLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgICAgICAgZGF0YTogbW9kZWxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxldGUoaWQ6IG51bWJlcik6IFByb21pc2U8UmVzdWx0PHt9Pj4ge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3RKc29uKHtcclxuICAgICAgICAgICAgdXJsOiBgL2FwaS9QZXJzb24vJHtpZH1gLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBhZGQobW9kZWw6IElQZXJzb25Nb2RlbCk6IFByb21pc2U8UmVzdWx0PG51bWJlcj4+IHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0SnNvbjxudW1iZXI+KHtcclxuICAgICAgICAgICAgdXJsOiBcIi9hcGkvUGVyc29uL0FkZFwiLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBtb2RlbFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBVaSB9IGZyb20gXCJAVWlcIjtcclxuaW1wb3J0IFJlc3VsdCBmcm9tIFwiQE1vZGVscy9SZXN1bHRcIjtcclxuaW1wb3J0IEF4aW9zLCB7IEF4aW9zUmVxdWVzdENvbmZpZyB9IGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm1VcmwgfSBmcm9tIFwiZG9tYWluLXdhaXRcIjtcclxuaW1wb3J0IGpzb25Ub1VybCBmcm9tIFwianNvbi10by11cmxcIjtcclxuaW1wb3J0IHsgaXNOb2RlIH0gZnJvbSBcIkBVdGlsc1wiO1xyXG5pbXBvcnQgR2xvYmFscyBmcm9tIFwiQEdsb2JhbHNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJlcXVlc3RPcHRpb25zIHtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgZGF0YT86IGFueTtcclxuICAgIG1ldGhvZDogXCJHRVRcIiB8IFwiUE9TVFwiIHwgXCJQVVRcIiB8IFwiUEFUQ0hcIiB8IFwiREVMRVRFXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNlbmRGb3JtRGF0YU9wdGlvbnMge1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBkYXRhOiBGb3JtRGF0YTtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIgfCBcIlBVVFwiIHwgXCJQQVRDSFwiO1xyXG59XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBiYXNlIGNsYXNzIG9mIHRoZSBpc29tb3JwaGljIHNlcnZpY2UuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2VydmljZUJhc2Uge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFrZSByZXF1ZXN0IHdpdGggSlNPTiBkYXRhLlxyXG4gICAgICogQHBhcmFtIG9wdHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyByZXF1ZXN0SnNvbjxUPihvcHRzOiBJUmVxdWVzdE9wdGlvbnMpOiBQcm9taXNlPFJlc3VsdDxUPj4ge1xyXG5cclxuICAgICAgICB2YXIgYXhpb3NSZXN1bHQgPSBudWxsO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xyXG5cclxuICAgICAgICBvcHRzLnVybCA9IHRyYW5zZm9ybVVybChvcHRzLnVybCk7IC8vIEFsbG93IHJlcXVlc3RzIGFsc28gZm9yIE5vZGUuXHJcblxyXG4gICAgICAgIHZhciBwcm9jZXNzUXVlcnkgPSAodXJsOiBzdHJpbmcsIGRhdGE6IGFueSk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7dXJsfT8ke2pzb25Ub1VybChkYXRhKX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB1cmw7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGF4aW9zUmVxdWVzdENvbmZpZyA6IEF4aW9zUmVxdWVzdENvbmZpZztcclxuXHJcbiAgICAgICAgaWYgKGlzTm9kZSgpKSB7XHJcbiAgICAgICAgICAgIC8vIFVzZWQgZm9yIFNTUiByZXF1ZXN0cyBmcm9tIHRoZSB3ZWIgc2VydmVyIHRvIE5vZGVTZXJ2aWNlcy5cclxuICAgICAgICAgICAgYXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIENvb2tpZTogR2xvYmFscy5nZXREYXRhKCkucHJpdmF0ZS5jb29raWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc3dpdGNoIChvcHRzLm1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkdFVFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zUmVzdWx0ID0gYXdhaXQgQXhpb3MuZ2V0KHByb2Nlc3NRdWVyeShvcHRzLnVybCwgb3B0cy5kYXRhKSwgYXhpb3NSZXF1ZXN0Q29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJQT1NUXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3NSZXN1bHQgPSBhd2FpdCBBeGlvcy5wb3N0KG9wdHMudXJsLCBvcHRzLmRhdGEsIGF4aW9zUmVxdWVzdENvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiUFVUXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3NSZXN1bHQgPSBhd2FpdCBBeGlvcy5wdXQob3B0cy51cmwsIG9wdHMuZGF0YSwgYXhpb3NSZXF1ZXN0Q29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJQQVRDSFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zUmVzdWx0ID0gYXdhaXQgQXhpb3MucGF0Y2gob3B0cy51cmwsIG9wdHMuZGF0YSwgYXhpb3NSZXF1ZXN0Q29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJERUxFVEVcIjpcclxuICAgICAgICAgICAgICAgICAgICBheGlvc1Jlc3VsdCA9IGF3YWl0IEF4aW9zLmRlbGV0ZShwcm9jZXNzUXVlcnkob3B0cy51cmwsIG9wdHMuZGF0YSksIGF4aW9zUmVxdWVzdENvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IFJlc3VsdChheGlvc1Jlc3VsdC5kYXRhLnZhbHVlLCAuLi5heGlvc1Jlc3VsdC5kYXRhLmVycm9ycyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IFJlc3VsdChudWxsLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQuaGFzRXJyb3JzKSB7XHJcbiAgICAgICAgICAgIFVpLnNob3dFcnJvcnMoLi4ucmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxsb3dzIHlvdSB0byBzZW5kIGZpbGVzIHRvIHRoZSBzZXJ2ZXIuXHJcbiAgICAgKiBAcGFyYW0gb3B0c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHNlbmRGb3JtRGF0YTxUPihvcHRzOiBJU2VuZEZvcm1EYXRhT3B0aW9ucyk6IFByb21pc2U8UmVzdWx0PFQ+PiB7XHJcbiAgICAgICAgdmFyIGF4aW9zUmVzdWx0ID0gbnVsbDtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgb3B0cy51cmwgPSB0cmFuc2Zvcm1Vcmwob3B0cy51cmwpOyAvLyBBbGxvdyByZXF1ZXN0cyBhbHNvIGZvciBOb2RlLlxyXG5cclxuICAgICAgICB2YXIgYXhpb3NPcHRzID0ge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wdHMubWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiUE9TVFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zUmVzdWx0ID0gYXdhaXQgQXhpb3MucG9zdChvcHRzLnVybCwgb3B0cy5kYXRhLCBheGlvc09wdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlBVVFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zUmVzdWx0ID0gYXdhaXQgQXhpb3MucHV0KG9wdHMudXJsLCBvcHRzLmRhdGEsIGF4aW9zT3B0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiUEFUQ0hcIjpcclxuICAgICAgICAgICAgICAgICAgICBheGlvc1Jlc3VsdCA9IGF3YWl0IEF4aW9zLnBhdGNoKG9wdHMudXJsLCBvcHRzLmRhdGEsIGF4aW9zT3B0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IFJlc3VsdChheGlvc1Jlc3VsdC5kYXRhLnZhbHVlLCAuLi5heGlvc1Jlc3VsdC5kYXRhLmVycm9ycyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IFJlc3VsdChudWxsLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQuaGFzRXJyb3JzKSB7XHJcbiAgICAgICAgICAgIFVpLnNob3dFcnJvcnMoLi4ucmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSUxvZ2luTW9kZWwgfSBmcm9tIFwiQE1vZGVscy9JTG9naW5Nb2RlbFwiO1xyXG5pbXBvcnQgeyBJU2VydmljZVVzZXIgfSBmcm9tIFwiQE1vZGVscy9JU2VydmljZVVzZXJcIjtcclxuaW1wb3J0IHsgY2xvbmUgfSBmcm9tIFwiQFV0aWxzXCI7XHJcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgQWNjb3VudFNlcnZpY2UgZnJvbSBcIkBTZXJ2aWNlcy9BY2NvdW50U2VydmljZVwiO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5leHBvcnQgbW9kdWxlIExvZ2luU3RvcmUge1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcclxuICAgICAgICBpbmRpY2F0b3JzOiB7XHJcbiAgICAgICAgICAgIG9wZXJhdGlvbkxvYWRpbmc6IGJvb2xlYW47XHJcbiAgICAgICAgICAgIGxvZ2luU3VjY2VzczogYm9vbGVhbjtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBlbnVtIEFjdGlvbnMge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFlvdSBuZWVkIHRvIGhhdmUgdGhlIGluaXRpYWwgc3RhdGUgdG9cclxuICAgICAgICAgKiByZXNldCB0aGUgaW5kaWNhdG9ycyAoZS5nLiBsb2dpblN1Y2Nlc3MpXHJcbiAgICAgICAgICogdGhhdCBjYWxsIHJlZGlyZWN0IG9yIGFueSBvdGhlciBhY3Rpb25zLlxyXG4gICAgICAgICAqIEl0IG11c3QgYmUgY2FsbGVkIGluIG1ldGhvZCAnY29tcG9uZW50RGlkTW91bnQnXHJcbiAgICAgICAgICogb2YgYSBjb21wb25lbnQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgSW5pdCA9IFwiTE9HSU5fSU5JVFwiLFxyXG4gICAgICAgIFJlcXVlc3QgPSBcIkxPR0lOX1JFUVVFU1RcIixcclxuICAgICAgICBTdWNjZXNzID0gXCJMT0dJTl9TVUNDRVNTXCIsXHJcbiAgICAgICAgRmFpbHVyZSA9IFwiTE9HSU5fRkFJTFVSRVwiXHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJmYWNlIElJbml0IHtcclxuICAgICAgICB0eXBlOiBBY3Rpb25zLkluaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJmYWNlIElSZXF1ZXN0IHtcclxuICAgICAgICB0eXBlOiBBY3Rpb25zLlJlcXVlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJmYWNlIElTdWNjZXNzIHtcclxuICAgICAgICB0eXBlOiBBY3Rpb25zLlN1Y2Nlc3M7XHJcbiAgICAgICAgcGF5bG9hZDogSVNlcnZpY2VVc2VyO1xyXG4gICAgfVxyXG5cclxuICAgIGludGVyZmFjZSBJRmFpbHVyZSB7XHJcbiAgICAgICAgdHlwZTogQWN0aW9ucy5GYWlsdXJlO1xyXG4gICAgfVxyXG5cclxuICAgIHR5cGUgS25vd25BY3Rpb24gPSBJSW5pdCB8IElSZXF1ZXN0IHwgSVN1Y2Nlc3MgfCBJRmFpbHVyZTtcclxuXHJcbiAgICBleHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICAgICAgaW5pdDogKCk6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9ucy5Jbml0IH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2dpblJlcXVlc3Q6IChtb2RlbDogSUxvZ2luTW9kZWwpOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25zLlJlcXVlc3QgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgQWNjb3VudFNlcnZpY2UubG9naW4obW9kZWwpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0Lmhhc0Vycm9ycykge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25zLkZhaWx1cmUgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9ucy5TdWNjZXNzLCBwYXlsb2FkOiByZXN1bHQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlOiBJU3RhdGUgPSB7XHJcbiAgICAgICAgaW5kaWNhdG9yczoge1xyXG4gICAgICAgICAgICBvcGVyYXRpb25Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9naW5TdWNjZXNzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8SVN0YXRlPiA9IChjdXJyZW50U3RhdGU6IElTdGF0ZSwgaW5jb21pbmdBY3Rpb246IEFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGluY29taW5nQWN0aW9uIGFzIEtub3duQWN0aW9uO1xyXG5cclxuICAgICAgICB2YXIgY2xvbmVJbmRpY2F0b3JzID0gKCkgPT4gY2xvbmUoY3VycmVudFN0YXRlLmluZGljYXRvcnMpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQWN0aW9ucy5Jbml0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuICAgICAgICAgICAgY2FzZSBBY3Rpb25zLlJlcXVlc3Q6XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kaWNhdG9ycyA9IGNsb25lSW5kaWNhdG9ycygpO1xyXG4gICAgICAgICAgICAgICAgaW5kaWNhdG9ycy5vcGVyYXRpb25Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmN1cnJlbnRTdGF0ZSwgaW5kaWNhdG9ycyB9O1xyXG4gICAgICAgICAgICBjYXNlIEFjdGlvbnMuU3VjY2VzczpcclxuICAgICAgICAgICAgICAgIHZhciBpbmRpY2F0b3JzID0gY2xvbmVJbmRpY2F0b3JzKCk7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3JzLm9wZXJhdGlvbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGluZGljYXRvcnMubG9naW5TdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmN1cnJlbnRTdGF0ZSwgaW5kaWNhdG9ycyB9O1xyXG4gICAgICAgICAgICBjYXNlIEFjdGlvbnMuRmFpbHVyZTpcclxuICAgICAgICAgICAgICAgIHZhciBpbmRpY2F0b3JzID0gY2xvbmVJbmRpY2F0b3JzKCk7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3JzLm9wZXJhdGlvbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmN1cnJlbnRTdGF0ZSwgaW5kaWNhdG9ycyB9O1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBsaW5lIGd1YXJhbnRlZXMgdGhhdCBldmVyeSBhY3Rpb24gaW4gdGhlIEtub3duQWN0aW9uIHVuaW9uIGhhcyBiZWVuIGNvdmVyZWQgYnkgYSBjYXNlIGFib3ZlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRTdGF0ZSB8fCBpbml0aWFsU3RhdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBjbG9uZSB9IGZyb20gXCJAVXRpbHNcIjtcclxuaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IFBlcnNvblNlcnZpY2UgZnJvbSBcIkBTZXJ2aWNlcy9QZXJzb25TZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElQZXJzb25Nb2RlbCB9IGZyb20gXCJATW9kZWxzL0lQZXJzb25Nb2RlbFwiO1xyXG5pbXBvcnQgeyB3YWl0IH0gZnJvbSBcImRvbWFpbi13YWl0XCI7XHJcblxyXG5leHBvcnQgbW9kdWxlIFBlcnNvblN0b3JlIHtcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XHJcbiAgICAgICAgcGVvcGxlOiBJUGVyc29uTW9kZWxbXSxcclxuICAgICAgICBpbmRpY2F0b3JzOiB7XHJcbiAgICAgICAgICAgIG9wZXJhdGlvbkxvYWRpbmc6IGJvb2xlYW47XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZW51bSBBY3Rpb25zIHtcclxuICAgICAgICBTZWFyY2hSZXF1ZXN0ID0gXCJQRVJTT05fU0VBUkNIX1JFUVVFU1RcIixcclxuICAgICAgICBTZWFyY2hSZXNwb25zZSA9IFwiUEVSU09OX1NFQVJDSF9SRVNQT05TRVwiLFxyXG4gICAgICAgIEFkZFJlcXVlc3QgPSBcIlBFUlNPTl9BRERfUkVRVUVTVFwiLFxyXG4gICAgICAgIEFkZFJlc3BvbnNlID0gXCJQRVJTT05fQUREX1JFU1BPTlNFXCIsXHJcbiAgICAgICAgVXBkYXRlUmVxdWVzdCA9IFwiUEVSU09OX1VQREFURV9SRVFVRVNUXCIsXHJcbiAgICAgICAgVXBkYXRlUmVzcG9uc2UgPSBcIlBFUlNPTl9VUERBVEVfUkVTUE9OU0VcIixcclxuICAgICAgICBEZWxldGVSZXF1ZXN0ID0gXCJQRVJTT05fREVMRVRFX1JFUVVFU1RcIixcclxuICAgICAgICBEZWxldGVSZXNwb25zZSA9IFwiUEVSU09OX0RFTEVURV9SRVNQT05TRVwiXHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJmYWNlIElHZXRBbGxSZXF1ZXN0IHtcclxuICAgICAgICB0eXBlOiBBY3Rpb25zLlNlYXJjaFJlcXVlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJmYWNlIElHZXRBbGxSZXNwb25zZSB7XHJcbiAgICAgICAgdHlwZTogQWN0aW9ucy5TZWFyY2hSZXNwb25zZTtcclxuICAgICAgICBwYXlsb2FkOiBJUGVyc29uTW9kZWxbXTtcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmZhY2UgSUFkZFJlcXVlc3Qge1xyXG4gICAgICAgIHR5cGU6IEFjdGlvbnMuQWRkUmVxdWVzdDtcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmZhY2UgSUFkZFJlc3BvbnNlIHtcclxuICAgICAgICB0eXBlOiBBY3Rpb25zLkFkZFJlc3BvbnNlO1xyXG4gICAgICAgIHBheWxvYWQ6IElQZXJzb25Nb2RlbDtcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmZhY2UgSVVwZGF0ZVJlcXVlc3Qge1xyXG4gICAgICAgIHR5cGU6IEFjdGlvbnMuVXBkYXRlUmVxdWVzdDtcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmZhY2UgSVVwZGF0ZVJlc3BvbnNlIHtcclxuICAgICAgICB0eXBlOiBBY3Rpb25zLlVwZGF0ZVJlc3BvbnNlO1xyXG4gICAgICAgIHBheWxvYWQ6IElQZXJzb25Nb2RlbDtcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmZhY2UgSURlbGV0ZVJlcXVlc3Qge1xyXG4gICAgICAgIHR5cGU6IEFjdGlvbnMuRGVsZXRlUmVxdWVzdDtcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmZhY2UgSURlbGV0ZVJlc3BvbnNlIHtcclxuICAgICAgICB0eXBlOiBBY3Rpb25zLkRlbGV0ZVJlc3BvbnNlO1xyXG4gICAgICAgIGlkOiBudW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgdHlwZSBLbm93bkFjdGlvbiA9XHJcbiAgICAgICAgSUdldEFsbFJlcXVlc3QgfCBJR2V0QWxsUmVzcG9uc2UgfFxyXG4gICAgICAgIElBZGRSZXF1ZXN0IHwgSUFkZFJlc3BvbnNlIHxcclxuICAgICAgICBJVXBkYXRlUmVxdWVzdCB8IElVcGRhdGVSZXNwb25zZSB8XHJcbiAgICAgICAgSURlbGV0ZVJlcXVlc3QgfCBJRGVsZXRlUmVzcG9uc2U7XHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG4gICAgICAgIHNlYXJjaFJlcXVlc3Q6ICh0ZXJtPzogc3RyaW5nKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGF3YWl0IHdhaXQoYXN5bmMgKHRyYW5zZm9ybVVybCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBXYWl0IGZvciBzZXJ2ZXIgcHJlcmVuZGVyaW5nLlxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25zLlNlYXJjaFJlcXVlc3QgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IFBlcnNvblNlcnZpY2Uuc2VhcmNoKHRlcm0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuaGFzRXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25zLlNlYXJjaFJlc3BvbnNlLCBwYXlsb2FkOiByZXN1bHQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWRkUmVxdWVzdDogKG1vZGVsOiBJUGVyc29uTW9kZWwpOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25zLkFkZFJlcXVlc3QgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgUGVyc29uU2VydmljZS5hZGQobW9kZWwpO1xyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5oYXNFcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIG1vZGVsLmlkID0gcmVzdWx0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25zLkFkZFJlc3BvbnNlLCBwYXlsb2FkOiBtb2RlbCB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlUmVxdWVzdDogKG1vZGVsOiBJUGVyc29uTW9kZWwpOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25zLlVwZGF0ZVJlcXVlc3QgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgUGVyc29uU2VydmljZS51cGRhdGUobW9kZWwpO1xyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5oYXNFcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9ucy5VcGRhdGVSZXNwb25zZSwgcGF5bG9hZDogbW9kZWwgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlbGV0ZVJlcXVlc3Q6IChpZDogbnVtYmVyKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9ucy5EZWxldGVSZXF1ZXN0IH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IFBlcnNvblNlcnZpY2UuZGVsZXRlKGlkKTtcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuaGFzRXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvbnMuRGVsZXRlUmVzcG9uc2UsIGlkIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZTogSVN0YXRlID0ge1xyXG4gICAgICAgIHBlb3BsZTogW10sXHJcbiAgICAgICAgaW5kaWNhdG9yczoge1xyXG4gICAgICAgICAgICBvcGVyYXRpb25Mb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8SVN0YXRlPiA9IChjdXJyZW50U3RhdGU6IElTdGF0ZSwgaW5jb21pbmdBY3Rpb246IEFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGluY29taW5nQWN0aW9uIGFzIEtub3duQWN0aW9uO1xyXG5cclxuICAgICAgICB2YXIgY2xvbmVJbmRpY2F0b3JzID0gKCkgPT4gY2xvbmUoY3VycmVudFN0YXRlLmluZGljYXRvcnMpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQWN0aW9ucy5TZWFyY2hSZXF1ZXN0OlxyXG4gICAgICAgICAgICAgICAgdmFyIGluZGljYXRvcnMgPSBjbG9uZUluZGljYXRvcnMoKTtcclxuICAgICAgICAgICAgICAgIGluZGljYXRvcnMub3BlcmF0aW9uTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5jdXJyZW50U3RhdGUsIGluZGljYXRvcnMgfTtcclxuICAgICAgICAgICAgY2FzZSBBY3Rpb25zLlNlYXJjaFJlc3BvbnNlOlxyXG4gICAgICAgICAgICAgICAgdmFyIGluZGljYXRvcnMgPSBjbG9uZUluZGljYXRvcnMoKTtcclxuICAgICAgICAgICAgICAgIGluZGljYXRvcnMub3BlcmF0aW9uTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uY3VycmVudFN0YXRlLCBpbmRpY2F0b3JzLCBwZW9wbGU6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgICAgICAgIGNhc2UgQWN0aW9ucy5VcGRhdGVSZXF1ZXN0OlxyXG4gICAgICAgICAgICAgICAgdmFyIGluZGljYXRvcnMgPSBjbG9uZUluZGljYXRvcnMoKTtcclxuICAgICAgICAgICAgICAgIGluZGljYXRvcnMub3BlcmF0aW9uTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5jdXJyZW50U3RhdGUsIGluZGljYXRvcnMgfTtcclxuICAgICAgICAgICAgY2FzZSBBY3Rpb25zLlVwZGF0ZVJlc3BvbnNlOlxyXG4gICAgICAgICAgICAgICAgdmFyIGluZGljYXRvcnMgPSBjbG9uZUluZGljYXRvcnMoKTtcclxuICAgICAgICAgICAgICAgIGluZGljYXRvcnMub3BlcmF0aW9uTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBjbG9uZShjdXJyZW50U3RhdGUucGVvcGxlKTtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtVG9VcGRhdGUgPSBkYXRhLmZpbHRlcih4ID0+IHguaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKVswXTtcclxuICAgICAgICAgICAgICAgIGl0ZW1Ub1VwZGF0ZS5maXJzdE5hbWUgPSBhY3Rpb24ucGF5bG9hZC5maXJzdE5hbWU7XHJcbiAgICAgICAgICAgICAgICBpdGVtVG9VcGRhdGUubGFzdE5hbWUgPSBhY3Rpb24ucGF5bG9hZC5sYXN0TmFtZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmN1cnJlbnRTdGF0ZSwgaW5kaWNhdG9ycywgcGVvcGxlOiBkYXRhIH07XHJcbiAgICAgICAgICAgIGNhc2UgQWN0aW9ucy5BZGRSZXF1ZXN0OlxyXG4gICAgICAgICAgICAgICAgdmFyIGluZGljYXRvcnMgPSBjbG9uZUluZGljYXRvcnMoKTtcclxuICAgICAgICAgICAgICAgIGluZGljYXRvcnMub3BlcmF0aW9uTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5jdXJyZW50U3RhdGUsIGluZGljYXRvcnMgfTtcclxuICAgICAgICAgICAgY2FzZSBBY3Rpb25zLkFkZFJlc3BvbnNlOlxyXG4gICAgICAgICAgICAgICAgdmFyIGluZGljYXRvcnMgPSBjbG9uZUluZGljYXRvcnMoKTtcclxuICAgICAgICAgICAgICAgIGluZGljYXRvcnMub3BlcmF0aW9uTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBjbG9uZShjdXJyZW50U3RhdGUucGVvcGxlKTtcclxuICAgICAgICAgICAgICAgIGRhdGEucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5jdXJyZW50U3RhdGUsIGluZGljYXRvcnMsIHBlb3BsZTogZGF0YSB9O1xyXG4gICAgICAgICAgICBjYXNlIEFjdGlvbnMuRGVsZXRlUmVxdWVzdDpcclxuICAgICAgICAgICAgICAgIHZhciBpbmRpY2F0b3JzID0gY2xvbmVJbmRpY2F0b3JzKCk7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3JzLm9wZXJhdGlvbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uY3VycmVudFN0YXRlLCBpbmRpY2F0b3JzIH07XHJcbiAgICAgICAgICAgIGNhc2UgQWN0aW9ucy5EZWxldGVSZXNwb25zZTpcclxuICAgICAgICAgICAgICAgIHZhciBpbmRpY2F0b3JzID0gY2xvbmVJbmRpY2F0b3JzKCk7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3JzLm9wZXJhdGlvbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gY2xvbmUoY3VycmVudFN0YXRlLnBlb3BsZSkuZmlsdGVyKHggPT4geC5pZCAhPT0gYWN0aW9uLmlkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmN1cnJlbnRTdGF0ZSwgaW5kaWNhdG9ycywgcGVvcGxlOiBkYXRhIH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgZ3VhcmFudGVlcyB0aGF0IGV2ZXJ5IGFjdGlvbiBpbiB0aGUgS25vd25BY3Rpb24gdW5pb24gaGFzIGJlZW4gY292ZXJlZCBieSBhIGNhc2UgYWJvdmVcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4aGF1c3RpdmVDaGVjazogbmV2ZXIgPSBhY3Rpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY3VycmVudFN0YXRlIHx8IGluaXRpYWxTdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IExvZ2luU3RvcmUgfSBmcm9tIFwiQFN0b3JlL0xvZ2luU3RvcmVcIjtcclxuaW1wb3J0IHsgUGVyc29uU3RvcmUgfSBmcm9tIFwiQFN0b3JlL1BlcnNvblN0b3JlXCI7XHJcblxyXG4vLyBUaGUgdG9wLWxldmVsIHN0YXRlIG9iamVjdFxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gICAgbG9naW46IExvZ2luU3RvcmUuSVN0YXRlO1xyXG4gICAgcGVyc29uOiBQZXJzb25TdG9yZS5JU3RhdGU7XHJcbn1cclxuXHJcbi8vIFdoZW5ldmVyIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLCBSZWR1eCB3aWxsIHVwZGF0ZSBlYWNoIHRvcC1sZXZlbCBhcHBsaWNhdGlvbiBzdGF0ZSBwcm9wZXJ0eSB1c2luZ1xyXG4vLyB0aGUgcmVkdWNlciB3aXRoIHRoZSBtYXRjaGluZyBuYW1lLiBJdCdzIGltcG9ydGFudCB0aGF0IHRoZSBuYW1lcyBtYXRjaCBleGFjdGx5LCBhbmQgdGhhdCB0aGUgcmVkdWNlclxyXG4vLyBhY3RzIG9uIHRoZSBjb3JyZXNwb25kaW5nIEFwcGxpY2F0aW9uU3RhdGUgcHJvcGVydHkgdHlwZS5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXJzID0ge1xyXG4gICAgbG9naW46IExvZ2luU3RvcmUucmVkdWNlcixcclxuICAgIHBlcnNvbjogUGVyc29uU3RvcmUucmVkdWNlclxyXG59O1xyXG5cclxuLy8gVGhpcyB0eXBlIGNhbiBiZSB1c2VkIGFzIGEgaGludCBvbiBhY3Rpb24gY3JlYXRvcnMgc28gdGhhdCBpdHMgJ2Rpc3BhdGNoJyBhbmQgJ2dldFN0YXRlJyBwYXJhbXMgYXJlXHJcbi8vIGNvcnJlY3RseSB0eXBlZCB0byBtYXRjaCB5b3VyIHN0b3JlLlxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFRodW5rQWN0aW9uPFRBY3Rpb24+IHtcclxuICAgIChkaXNwYXRjaDogKGFjdGlvbjogVEFjdGlvbikgPT4gdm9pZCwgZ2V0U3RhdGU6ICgpID0+IEFwcGxpY2F0aW9uU3RhdGUpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFRodW5rQWN0aW9uQXN5bmM8VEFjdGlvbiwgVFJlc3VsdD4ge1xyXG4gICAgKGRpc3BhdGNoOiAoYWN0aW9uOiBUQWN0aW9uKSA9PiB2b2lkLCBnZXRTdGF0ZTogKCkgPT4gQXBwbGljYXRpb25TdGF0ZSkgOiBQcm9taXNlPFRSZXN1bHQ+XHJcbn0iLCJpbXBvcnQgeyBBcHBUaHVua0FjdGlvbkFzeW5jIH0gZnJvbSBcIkBTdG9yZS9pbmRleFwiO1xyXG5cclxuZGVjbGFyZSB2YXIgcHJvY2VzczogYW55O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lPFQ+KG9iamVjdDogVCk6IFQge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9taXNlRnJvbUFjdGlvbjxULCBWPihhc3luY0FjdGlvbkNyZWF0b3I6IEFwcFRodW5rQWN0aW9uQXN5bmM8VCwgVj4pOiBQcm9taXNlPFY+IHtcclxuICAgIHJldHVybiAoYXN5bmNBY3Rpb25DcmVhdG9yIGFzIGFueSkgYXMgUHJvbWlzZTxWPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIElzIHNlcnZlciBwcmVyZW5kZXJpbmcgYnkgTm9kZS5qcy5cclxuICogVGhlcmUgY2FuJ3QgYmUgYW55IERPTTogd2luZG93LCBkb2N1bWVudCwgZXRjLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiYgcHJvY2Vzcy52ZXJzaW9ucyAmJiAhIXByb2Nlc3MudmVyc2lvbnMubm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0RW1wdHkob2JqKTogYm9vbGVhbiB7XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVtcHR5Rm9ybShmb3JtOiBIVE1MRm9ybUVsZW1lbnQpOiB2b2lkIHtcclxuICAgIHZhciBpbnB1dHMgPSBBcnJheS5mcm9tKGZvcm0ucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpKTtcclxuICAgIGlucHV0cy5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgIHZhciBpbnB1dFR5cGUgPSB4LmdldEF0dHJpYnV0ZShcInR5cGVcIik7XHJcbiAgICAgICAgaWYgKGlucHV0VHlwZSA9PT0gXCJjaGVja2JveFwiIHx8IGlucHV0VHlwZSA9PT0gXCJyYWRpb1wiKSB7XHJcbiAgICAgICAgICAgICh4IGFzIGFueSkuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICh4IGFzIGFueSkudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qc1wiKTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkRlYm91bmNlQ2FjaGUgPSBleHBvcnRzLm9ubHlSZXNvbHZlc0xhc3QgPSBleHBvcnRzLmRlYm91bmNlID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2RlYm91bmNlUHJvbWlzZSA9IHJlcXVpcmUoJ2RlYm91bmNlLXByb21pc2UnKTtcblxudmFyIF9kZWJvdW5jZVByb21pc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVib3VuY2VQcm9taXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLy8gV2UgdXNlIERlYm91bmNlUHJvbWlzZSBhcyBhIGRlcGVuZGVuY3kgYXMgaXQgZG9lcyBhIGdyZWF0IGxvdy1sZXZlbCBqb2Jcbi8vIFRoZSBiZWhhdmlvciBvZiB0aGUgbGliIGlzIHRvIHJldHVybiB0aGUgc2FtZSBwcm9taXNlIGZvciBhbGwgZnVuY3Rpb24gY2FsbHNcbnZhciBkZWJvdW5jZSA9IGV4cG9ydHMuZGVib3VuY2UgPSBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHJldHVybiAoMCwgX2RlYm91bmNlUHJvbWlzZTIuZGVmYXVsdCkoZnVuYywgd2FpdCwgb3B0aW9ucyk7XG59O1xuXG4vLyBHaXZlbiBhIGZ1bmN0aW9uIHJldHVybmluZyBwcm9taXNlcywgd3JhcCBpdCBzbyB0aGF0IG9ubHkgdGhlIHByb21pc2UgcmV0dXJuZWQgZnJvbSBsYXN0IGNhbGwgd2lsbCBhY3R1YWxseSByZXNvbHZlXG4vLyBUaGlzIGlzIHVzZWZ1bCB0byBpZ25vcmUgZm9ybWVyIGFzeW5jIHJlc3VsdHMgYW5kIGhhbmRsZSBjb25jdXJyZW5jeSBpc3N1ZXNcbnZhciBvbmx5UmVzb2x2ZXNMYXN0ID0gZXhwb3J0cy5vbmx5UmVzb2x2ZXNMYXN0ID0gZnVuY3Rpb24gb25seVJlc29sdmVzTGFzdChhc3luY0Z1bmN0aW9uKSB7XG4gIC8vIEluc3BpcmVkIGZyb20gaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTUvMTIvMTYvaXNtb3VudGVkLWFudGlwYXR0ZXJuLmh0bWxcbiAgdmFyIG1ha2VDYW5jZWxhYmxlID0gZnVuY3Rpb24gbWFrZUNhbmNlbGFibGUocHJvbWlzZSkge1xuICAgIHZhciBoYXNDYW5jZWxlZF8gPSBmYWxzZTtcbiAgICB2YXIgd3JhcHBlZFByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICByZXR1cm4gaGFzQ2FuY2VsZWRfID8gdW5kZWZpbmVkIDogcmVzb2x2ZSh2YWwpO1xuICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBoYXNDYW5jZWxlZF8gPyB1bmRlZmluZWQgOiByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb21pc2U6IHdyYXBwZWRQcm9taXNlLFxuICAgICAgY2FuY2VsOiBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgICAgIGhhc0NhbmNlbGVkXyA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgY2FuY2VsUHJldmlvdXMgPSB2b2lkIDA7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgY2FuY2VsUHJldmlvdXMgJiYgY2FuY2VsUHJldmlvdXMoKTtcblxuICAgIHZhciBfbWFrZUNhbmNlbGFibGUgPSBtYWtlQ2FuY2VsYWJsZShhc3luY0Z1bmN0aW9uLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKSksXG4gICAgICAgIHByb21pc2UgPSBfbWFrZUNhbmNlbGFibGUucHJvbWlzZSxcbiAgICAgICAgY2FuY2VsID0gX21ha2VDYW5jZWxhYmxlLmNhbmNlbDtcblxuICAgIGNhbmNlbFByZXZpb3VzID0gY2FuY2VsO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xufTtcblxuLy8gV2UgY3JlYXRlIGEgZGVib3VuY2luZyBmdW5jdGlvbiBjYWNoZSwgYmVjYXVzZSB3aGVuIHdyYXBwaW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbixcbi8vIHdlIG1heSBhY3R1YWxseSB3YW50IHRvIHJvdXRlIHRoZSBmdW5jdGlvbiBjYWxsIHRvIGRpZmZlcmVudCBkZWJvdW5jZWQgZnVuY3Rpb25zIGRlcGVuZGluZyBmdW5jdGlvbiBwYWFtZXRlcnNcblxudmFyIERlYm91bmNlQ2FjaGUgPSBleHBvcnRzLkRlYm91bmNlQ2FjaGUgPSBmdW5jdGlvbiBEZWJvdW5jZUNhY2hlKCkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEZWJvdW5jZUNhY2hlKTtcblxuICB0aGlzLmdldERlYm91bmNlZEZ1bmN0aW9uID0gZnVuY3Rpb24gKGZ1bmMsIHdhaXQsIG9wdGlvbnMsIGFyZ3MpIHtcbiAgICB2YXIga2V5T3B0aW9ucyA9IG9wdGlvbnMua2V5LFxuICAgICAgICBvbmx5UmVzb2x2ZXNMYXN0T3B0aW9uID0gb3B0aW9ucy5vbmx5UmVzb2x2ZXNMYXN0LFxuICAgICAgICBvdGhlck9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob3B0aW9ucywgWydrZXknLCAnb25seVJlc29sdmVzTGFzdCddKTtcblxuICAgIHZhciBrZXkgPSBrZXlPcHRpb25zLmFwcGx5KHVuZGVmaW5lZCwgX3RvQ29uc3VtYWJsZUFycmF5KGFyZ3MpKTtcbiAgICAvLyBJZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIGRvZXMgbm90IGV4aXN0IGZvciB0aGlzIGtleSwgd2UgY3JlYXRlIG9uZSBvbiB0aGUgZmx5IGFuZCByZXR1cm4gaXRcbiAgICBpZiAoIV90aGlzLmRlYm91bmNlQ2FjaGVba2V5XSkge1xuICAgICAgdmFyIGRlYm91bmNlZEZ1bmMgPSBkZWJvdW5jZShmdW5jLCB3YWl0LCBvdGhlck9wdGlvbnMpO1xuICAgICAgaWYgKG9ubHlSZXNvbHZlc0xhc3RPcHRpb24pIHtcbiAgICAgICAgZGVib3VuY2VkRnVuYyA9IG9ubHlSZXNvbHZlc0xhc3QoZGVib3VuY2VkRnVuYyk7XG4gICAgICB9XG4gICAgICBfdGhpcy5kZWJvdW5jZUNhY2hlW2tleV0gPSBkZWJvdW5jZWRGdW5jO1xuICAgIH1cbiAgICByZXR1cm4gX3RoaXMuZGVib3VuY2VDYWNoZVtrZXldO1xuICB9O1xuXG4gIHRoaXMuZGVib3VuY2VDYWNoZSA9IHt9O1xufTtcblxudmFyIERlZmF1bHRPcHRpb25zID0ge1xuICAvLyBCeSBkZWZhdWx0LCB0aGUga2V5IGlzIG51bGwsIHdoaWNoIG1lYW5zIHRoYXQgYWxsIHRoZSBmdW5jdGlvbiBjYWxsc1xuICAvLyB3aWxsIHNoYXJlIHRoZSBzYW1lIGRlYm91bmNlZCBmdW5jdGlvblxuICAvLyBQcm92aWRpbmcgYSBrZXkgZnVuY3Rpb24gcGVybWl0IHRvIHVzZSB0aGUgY2FsbCBhcmd1bWVudHNcbiAgLy8gYW5kIHJvdXRlIHRvIGEgZGlzdGluY3QgZGVib3VuY2VkIGZ1bmN0aW9uXG4gIGtleTogZnVuY3Rpb24ga2V5KCkge1xuICAgIHJldHVybiBudWxsO1xuICB9LFxuXG4gIC8vIEJ5IGRlZmF1bHQsIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHdpbGwgb25seSByZXNvbHZlXG4gIC8vIHRoZSBsYXN0IHByb21pc2UgaXQgcmV0dXJuZWRcbiAgLy8gRm9ybWVyIGNhbGxzIHdpbGwgc3RheSB1bnJlc29sdmVkLCBzbyB0aGF0IHlvdSBkb24ndCBoYXZlXG4gIC8vIHRvIGhhbmRsZSBjb25jdXJyZW5jeSBpc3N1ZXMgaW4geW91ciBjb2RlXG4gIG9ubHlSZXNvbHZlc0xhc3Q6IHRydWVcbn07XG5cbmZ1bmN0aW9uIEF3ZXNvbWVEZWJvdW5jZVByb21pc2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgZmluYWxPcHRpb25zID0gX2V4dGVuZHMoe30sIERlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgdmFyIGRlYm91bmNlQ2FjaGUgPSBuZXcgRGVib3VuY2VDYWNoZSgpO1xuICByZXR1cm4gZnVuY3Rpb24gQXdlc29tZURlYm91bmNlUHJvbWlzZVdyYXBwZXIoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGRlYm91bmNlZEZuID0gZGVib3VuY2VDYWNoZS5nZXREZWJvdW5jZWRGdW5jdGlvbihmdW5jLCB3YWl0LCBmaW5hbE9wdGlvbnMsIGFyZ3MpO1xuICAgIHJldHVybiBkZWJvdW5jZWRGbi5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICB9O1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBBd2Vzb21lRGVib3VuY2VQcm9taXNlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanNcIik7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29uc3RhbnRzO1xuKGZ1bmN0aW9uIChjb25zdGFudHMpIHtcbiAgICBjb25zdGFudHMudHlwZU9mRnVuY3Rpb24gPSAnZnVuY3Rpb24nO1xuICAgIGNvbnN0YW50cy5ib29sVHJ1ZSA9IHRydWU7XG59KShjb25zdGFudHMgfHwgKGNvbnN0YW50cyA9IHt9KSk7XG5mdW5jdGlvbiBiaW5kKHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpIHtcbiAgICBpZiAoIWRlc2NyaXB0b3IgfHwgKHR5cGVvZiBkZXNjcmlwdG9yLnZhbHVlICE9PSBjb25zdGFudHMudHlwZU9mRnVuY3Rpb24pKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPbmx5IG1ldGhvZHMgY2FuIGJlIGRlY29yYXRlZCB3aXRoIEBiaW5kLiA8XCIgKyBwcm9wZXJ0eUtleSArIFwiPiBpcyBub3QgYSBtZXRob2QhXCIpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBjb25maWd1cmFibGU6IGNvbnN0YW50cy5ib29sVHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYm91bmQgPSBkZXNjcmlwdG9yLnZhbHVlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAvLyBDcmVkaXRzIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmRyZXlwb3BwL2F1dG9iaW5kLWRlY29yYXRvciBmb3IgbWVtb2l6aW5nIHRoZSByZXN1bHQgb2YgYmluZCBhZ2FpbnN0IGEgc3ltYm9sIG9uIHRoZSBpbnN0YW5jZS5cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwcm9wZXJ0eUtleSwge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBib3VuZCxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGNvbnN0YW50cy5ib29sVHJ1ZSxcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogY29uc3RhbnRzLmJvb2xUcnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBib3VuZDtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnRzLmJpbmQgPSBiaW5kO1xuZXhwb3J0cy5kZWZhdWx0ID0gYmluZDtcbiIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcDMtbmF0aXZlL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXIvbGliL2luZGV4LmpzXCIpOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9ndWQgPSByZXF1aXJlKCdndWQnKTtcblxudmFyIF9ndWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ3VkKTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIE1BWF9TSUdORURfMzFfQklUX0lOVCA9IDEwNzM3NDE4MjM7XG5cbi8vIElubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG5mdW5jdGlvbiBvYmplY3RJcyh4LCB5KSB7XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRFbWl0dGVyKHZhbHVlKSB7XG4gIHZhciBoYW5kbGVycyA9IFtdO1xuICByZXR1cm4ge1xuICAgIG9uOiBmdW5jdGlvbiBvbihoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH0sXG4gICAgb2ZmOiBmdW5jdGlvbiBvZmYoaGFuZGxlcikge1xuICAgICAgaGFuZGxlcnMgPSBoYW5kbGVycy5maWx0ZXIoZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgcmV0dXJuIGggIT09IGhhbmRsZXI7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQobmV3VmFsdWUsIGNoYW5nZWRCaXRzKSB7XG4gICAgICB2YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gaGFuZGxlcih2YWx1ZSwgY2hhbmdlZEJpdHMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW5bMF0gOiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVhY3RDb250ZXh0KGRlZmF1bHRWYWx1ZSwgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIHtcbiAgdmFyIF9Qcm92aWRlciRjaGlsZENvbnRleCwgX0NvbnN1bWVyJGNvbnRleHRUeXBlO1xuXG4gIHZhciBjb250ZXh0UHJvcCA9ICdfX2NyZWF0ZS1yZWFjdC1jb250ZXh0LScgKyAoMCwgX2d1ZDIuZGVmYXVsdCkoKSArICdfXyc7XG5cbiAgdmFyIFByb3ZpZGVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoUHJvdmlkZXIsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gUHJvdmlkZXIoKSB7XG4gICAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvdmlkZXIpO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuZW1pdHRlciA9IGNyZWF0ZUV2ZW50RW1pdHRlcihfdGhpcy5wcm9wcy52YWx1ZSksIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICAgIH1cblxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICB2YXIgX3JlZjtcblxuICAgICAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZltjb250ZXh0UHJvcF0gPSB0aGlzLmVtaXR0ZXIsIF9yZWY7XG4gICAgfTtcblxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnZhbHVlICE9PSBuZXh0UHJvcHMudmFsdWUpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gbmV4dFByb3BzLnZhbHVlO1xuICAgICAgICB2YXIgY2hhbmdlZEJpdHMgPSB2b2lkIDA7XG5cbiAgICAgICAgaWYgKG9iamVjdElzKG9sZFZhbHVlLCBuZXdWYWx1ZSkpIHtcbiAgICAgICAgICBjaGFuZ2VkQml0cyA9IDA7IC8vIE5vIGNoYW5nZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoYW5nZWRCaXRzID0gdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSAnZnVuY3Rpb24nID8gY2FsY3VsYXRlQ2hhbmdlZEJpdHMob2xkVmFsdWUsIG5ld1ZhbHVlKSA6IE1BWF9TSUdORURfMzFfQklUX0lOVDtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSgoY2hhbmdlZEJpdHMgJiBNQVhfU0lHTkVEXzMxX0JJVF9JTlQpID09PSBjaGFuZ2VkQml0cywgJ2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBFeHBlY3RlZCB0aGUgcmV0dXJuIHZhbHVlIHRvIGJlIGEgJyArICczMS1iaXQgaW50ZWdlci4gSW5zdGVhZCByZWNlaXZlZDogJXMnLCBjaGFuZ2VkQml0cyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hhbmdlZEJpdHMgfD0gMDtcblxuICAgICAgICAgIGlmIChjaGFuZ2VkQml0cyAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0dGVyLnNldChuZXh0UHJvcHMudmFsdWUsIGNoYW5nZWRCaXRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH07XG5cbiAgICByZXR1cm4gUHJvdmlkZXI7XG4gIH0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbiAgUHJvdmlkZXIuY2hpbGRDb250ZXh0VHlwZXMgPSAoX1Byb3ZpZGVyJGNoaWxkQ29udGV4ID0ge30sIF9Qcm92aWRlciRjaGlsZENvbnRleFtjb250ZXh0UHJvcF0gPSBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkLCBfUHJvdmlkZXIkY2hpbGRDb250ZXgpO1xuXG4gIHZhciBDb25zdW1lciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50Mikge1xuICAgIF9pbmhlcml0cyhDb25zdW1lciwgX0NvbXBvbmVudDIpO1xuXG4gICAgZnVuY3Rpb24gQ29uc3VtZXIoKSB7XG4gICAgICB2YXIgX3RlbXAyLCBfdGhpczIsIF9yZXQyO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29uc3VtZXIpO1xuXG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmV0MiA9IChfdGVtcDIgPSAoX3RoaXMyID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudDIuY2FsbC5hcHBseShfQ29tcG9uZW50MiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpczIpLCBfdGhpczIuc3RhdGUgPSB7XG4gICAgICAgIHZhbHVlOiBfdGhpczIuZ2V0VmFsdWUoKVxuICAgICAgfSwgX3RoaXMyLm9uVXBkYXRlID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBjaGFuZ2VkQml0cykge1xuICAgICAgICB2YXIgb2JzZXJ2ZWRCaXRzID0gX3RoaXMyLm9ic2VydmVkQml0cyB8IDA7XG4gICAgICAgIGlmICgob2JzZXJ2ZWRCaXRzICYgY2hhbmdlZEJpdHMpICE9PSAwKSB7XG4gICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgdmFsdWU6IF90aGlzMi5nZXRWYWx1ZSgpIH0pO1xuICAgICAgICB9XG4gICAgICB9LCBfdGVtcDIpLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpczIsIF9yZXQyKTtcbiAgICB9XG5cbiAgICBDb25zdW1lci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB2YXIgb2JzZXJ2ZWRCaXRzID0gbmV4dFByb3BzLm9ic2VydmVkQml0cztcblxuICAgICAgdGhpcy5vYnNlcnZlZEJpdHMgPSBvYnNlcnZlZEJpdHMgPT09IHVuZGVmaW5lZCB8fCBvYnNlcnZlZEJpdHMgPT09IG51bGwgPyBNQVhfU0lHTkVEXzMxX0JJVF9JTlQgLy8gU3Vic2NyaWJlIHRvIGFsbCBjaGFuZ2VzIGJ5IGRlZmF1bHRcbiAgICAgIDogb2JzZXJ2ZWRCaXRzO1xuICAgIH07XG5cbiAgICBDb25zdW1lci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRleHRbY29udGV4dFByb3BdKSB7XG4gICAgICAgIHRoaXMuY29udGV4dFtjb250ZXh0UHJvcF0ub24odGhpcy5vblVwZGF0ZSk7XG4gICAgICB9XG4gICAgICB2YXIgb2JzZXJ2ZWRCaXRzID0gdGhpcy5wcm9wcy5vYnNlcnZlZEJpdHM7XG5cbiAgICAgIHRoaXMub2JzZXJ2ZWRCaXRzID0gb2JzZXJ2ZWRCaXRzID09PSB1bmRlZmluZWQgfHwgb2JzZXJ2ZWRCaXRzID09PSBudWxsID8gTUFYX1NJR05FRF8zMV9CSVRfSU5UIC8vIFN1YnNjcmliZSB0byBhbGwgY2hhbmdlcyBieSBkZWZhdWx0XG4gICAgICA6IG9ic2VydmVkQml0cztcbiAgICB9O1xuXG4gICAgQ29uc3VtZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5jb250ZXh0W2NvbnRleHRQcm9wXSkge1xuICAgICAgICB0aGlzLmNvbnRleHRbY29udGV4dFByb3BdLm9mZih0aGlzLm9uVXBkYXRlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ29uc3VtZXIucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICBpZiAodGhpcy5jb250ZXh0W2NvbnRleHRQcm9wXSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0W2NvbnRleHRQcm9wXS5nZXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIENvbnN1bWVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gb25seUNoaWxkKHRoaXMucHJvcHMuY2hpbGRyZW4pKHRoaXMuc3RhdGUudmFsdWUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQ29uc3VtZXI7XG4gIH0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbiAgQ29uc3VtZXIuY29udGV4dFR5cGVzID0gKF9Db25zdW1lciRjb250ZXh0VHlwZSA9IHt9LCBfQ29uc3VtZXIkY29udGV4dFR5cGVbY29udGV4dFByb3BdID0gX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsIF9Db25zdW1lciRjb250ZXh0VHlwZSk7XG5cblxuICByZXR1cm4ge1xuICAgIFByb3ZpZGVyOiBQcm92aWRlcixcbiAgICBDb25zdW1lcjogQ29uc3VtZXJcbiAgfTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlUmVhY3RDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbnZhciBfaW1wbGVtZW50YXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW1wbGVtZW50YXRpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlQ29udGV4dCB8fCBfaW1wbGVtZW50YXRpb24yLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuLyogZ2xvYmFsIHNldFRpbWVvdXQsIGNsZWFyVGltZW91dCAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlYm91bmNlKGZuKSB7XG4gIHZhciB3YWl0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgdmFyIGxhc3RDYWxsQXQgPSB2b2lkIDA7XG4gIHZhciBkZWZlcnJlZCA9IHZvaWQgMDtcbiAgdmFyIHRpbWVyID0gdm9pZCAwO1xuICB2YXIgcGVuZGluZ0FyZ3MgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgY3VycmVudFdhaXQgPSBnZXRXYWl0KHdhaXQpO1xuICAgIHZhciBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgdmFyIGlzQ29sZCA9ICFsYXN0Q2FsbEF0IHx8IGN1cnJlbnRUaW1lIC0gbGFzdENhbGxBdCA+IGN1cnJlbnRXYWl0O1xuXG4gICAgbGFzdENhbGxBdCA9IGN1cnJlbnRUaW1lO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKGlzQ29sZCAmJiBvcHRpb25zLmxlYWRpbmcpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmFjY3VtdWxhdGUgPyBQcm9taXNlLnJlc29sdmUoZm4uY2FsbCh0aGlzLCBbYXJnc10pKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFswXTtcbiAgICAgIH0pIDogUHJvbWlzZS5yZXNvbHZlKGZuLmNhbGwuYXBwbHkoZm4sIFt0aGlzXS5jb25jYXQoYXJncykpKTtcbiAgICB9XG5cbiAgICBpZiAoZGVmZXJyZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICB9XG5cbiAgICBwZW5kaW5nQXJncy5wdXNoKGFyZ3MpO1xuICAgIHRpbWVyID0gc2V0VGltZW91dChmbHVzaC5iaW5kKHRoaXMpLCBjdXJyZW50V2FpdCk7XG5cbiAgICBpZiAob3B0aW9ucy5hY2N1bXVsYXRlKSB7XG4gICAgICB2YXIgX3JldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3NJbmRleCA9IHBlbmRpbmdBcmdzLmxlbmd0aCAtIDE7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdjogZGVmZXJyZWQucHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0c1thcmdzSW5kZXhdO1xuICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICB9KCk7XG5cbiAgICAgIGlmICgodHlwZW9mIF9yZXQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKF9yZXQpKSA9PT0gXCJvYmplY3RcIikgcmV0dXJuIF9yZXQudjtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgfTtcblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICB2YXIgdGhpc0RlZmVycmVkID0gZGVmZXJyZWQ7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcblxuICAgIFByb21pc2UucmVzb2x2ZShvcHRpb25zLmFjY3VtdWxhdGUgPyBmbi5jYWxsKHRoaXMsIHBlbmRpbmdBcmdzKSA6IGZuLmFwcGx5KHRoaXMsIHBlbmRpbmdBcmdzW3BlbmRpbmdBcmdzLmxlbmd0aCAtIDFdKSkudGhlbih0aGlzRGVmZXJyZWQucmVzb2x2ZSwgdGhpc0RlZmVycmVkLnJlamVjdCk7XG5cbiAgICBwZW5kaW5nQXJncyA9IFtdO1xuICAgIGRlZmVycmVkID0gbnVsbDtcbiAgfVxufTtcblxuZnVuY3Rpb24gZ2V0V2FpdCh3YWl0KSB7XG4gIHJldHVybiB0eXBlb2Ygd2FpdCA9PT0gJ2Z1bmN0aW9uJyA/IHdhaXQoKSA6IHdhaXQ7XG59XG5cbmZ1bmN0aW9uIGRlZmVyKCkge1xuICB2YXIgZGVmZXJyZWQgPSB7fTtcbiAgZGVmZXJyZWQucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBkZWZlcnJlZC5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICBkZWZlcnJlZC5yZWplY3QgPSByZWplY3Q7XG4gIH0pO1xuICByZXR1cm4gZGVmZXJyZWQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwuZGVlcG1lcmdlID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNNZXJnZWFibGVPYmplY3QgPSBmdW5jdGlvbiBpc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkge1xuXHRyZXR1cm4gaXNOb25OdWxsT2JqZWN0KHZhbHVlKVxuXHRcdCYmICFpc1NwZWNpYWwodmFsdWUpXG59O1xuXG5mdW5jdGlvbiBpc05vbk51bGxPYmplY3QodmFsdWUpIHtcblx0cmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG5mdW5jdGlvbiBpc1NwZWNpYWwodmFsdWUpIHtcblx0dmFyIHN0cmluZ1ZhbHVlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcblxuXHRyZXR1cm4gc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IFJlZ0V4cF0nXG5cdFx0fHwgc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IERhdGVdJ1xuXHRcdHx8IGlzUmVhY3RFbGVtZW50KHZhbHVlKVxufVxuXG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvYjVhYzk2M2ZiNzkxZDEyOThlN2YzOTYyMzYzODNiYzk1NWY5MTZjMS9zcmMvaXNvbW9ycGhpYy9jbGFzc2ljL2VsZW1lbnQvUmVhY3RFbGVtZW50LmpzI0wyMS1MMjVcbnZhciBjYW5Vc2VTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gY2FuVXNlU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xuXG5mdW5jdGlvbiBpc1JlYWN0RWxlbWVudCh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRVxufVxuXG5mdW5jdGlvbiBlbXB0eVRhcmdldCh2YWwpIHtcblx0cmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSA/IFtdIDoge31cbn1cblxuZnVuY3Rpb24gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQodmFsdWUsIG9wdGlvbnMpIHtcblx0cmV0dXJuIChvcHRpb25zLmNsb25lICE9PSBmYWxzZSAmJiBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSlcblx0XHQ/IGRlZXBtZXJnZShlbXB0eVRhcmdldCh2YWx1ZSksIHZhbHVlLCBvcHRpb25zKVxuXHRcdDogdmFsdWVcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblx0cmV0dXJuIHRhcmdldC5jb25jYXQoc291cmNlKS5tYXAoZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdHJldHVybiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChlbGVtZW50LCBvcHRpb25zKVxuXHR9KVxufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuXHR2YXIgZGVzdGluYXRpb24gPSB7fTtcblx0aWYgKG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QodGFyZ2V0KSkge1xuXHRcdE9iamVjdC5rZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcblx0XHRcdGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCh0YXJnZXRba2V5XSwgb3B0aW9ucyk7XG5cdFx0fSk7XG5cdH1cblx0T2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuXHRcdGlmICghb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdChzb3VyY2Vba2V5XSkgfHwgIXRhcmdldFtrZXldKSB7XG5cdFx0XHRkZXN0aW5hdGlvbltrZXldID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoc291cmNlW2tleV0sIG9wdGlvbnMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZXN0aW5hdGlvbltrZXldID0gZGVlcG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgb3B0aW9ucyk7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIGRlc3RpbmF0aW9uXG59XG5cbmZ1bmN0aW9uIGRlZXBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0b3B0aW9ucy5hcnJheU1lcmdlID0gb3B0aW9ucy5hcnJheU1lcmdlIHx8IGRlZmF1bHRBcnJheU1lcmdlO1xuXHRvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0ID0gb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCB8fCBpc01lcmdlYWJsZU9iamVjdDtcblxuXHR2YXIgc291cmNlSXNBcnJheSA9IEFycmF5LmlzQXJyYXkoc291cmNlKTtcblx0dmFyIHRhcmdldElzQXJyYXkgPSBBcnJheS5pc0FycmF5KHRhcmdldCk7XG5cdHZhciBzb3VyY2VBbmRUYXJnZXRUeXBlc01hdGNoID0gc291cmNlSXNBcnJheSA9PT0gdGFyZ2V0SXNBcnJheTtcblxuXHRpZiAoIXNvdXJjZUFuZFRhcmdldFR5cGVzTWF0Y2gpIHtcblx0XHRyZXR1cm4gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoc291cmNlLCBvcHRpb25zKVxuXHR9IGVsc2UgaWYgKHNvdXJjZUlzQXJyYXkpIHtcblx0XHRyZXR1cm4gb3B0aW9ucy5hcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucylcblx0fVxufVxuXG5kZWVwbWVyZ2UuYWxsID0gZnVuY3Rpb24gZGVlcG1lcmdlQWxsKGFycmF5LCBvcHRpb25zKSB7XG5cdGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ZpcnN0IGFyZ3VtZW50IHNob3VsZCBiZSBhbiBhcnJheScpXG5cdH1cblxuXHRyZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uKHByZXYsIG5leHQpIHtcblx0XHRyZXR1cm4gZGVlcG1lcmdlKHByZXYsIG5leHQsIG9wdGlvbnMpXG5cdH0sIHt9KVxufTtcblxudmFyIGRlZXBtZXJnZV8xID0gZGVlcG1lcmdlO1xuXG5yZXR1cm4gZGVlcG1lcmdlXzE7XG5cbn0pKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy9kb21haW4td2FpdC9kaXN0L2Nqcy9pbmRleC5qc1wiKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xudmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9lbXB0eUZ1bmN0aW9uJyk7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZW1wdHlGdW5jdGlvbjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIHdhcm5pbmcgPSBmdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQuaW5kZXhPZignRmFpbGVkIENvbXBvc2l0ZSBwcm9wVHlwZTogJykgPT09IDApIHtcbiAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0IChleCkgeyByZXR1cm4gKGV4ICYmICh0eXBlb2YgZXggPT09ICdvYmplY3QnKSAmJiAnZGVmYXVsdCcgaW4gZXgpID8gZXhbJ2RlZmF1bHQnXSA6IGV4OyB9XG5cbnZhciB0c2xpYl8xID0gcmVxdWlyZSgndHNsaWInKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgaG9pc3ROb25SZWFjdFN0YXRpY3MgPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnKSk7XG52YXIgY3JlYXRlQ29udGV4dCA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCdjcmVhdGUtcmVhY3QtY29udGV4dCcpKTtcbnZhciBjbG9uZURlZXAgPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgnbG9kYXNoLmNsb25lZGVlcCcpKTtcbnZhciB0b1BhdGggPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgnbG9kYXNoLnRvcGF0aCcpKTtcbnZhciBpc0VxdWFsID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ3JlYWN0LWZhc3QtY29tcGFyZScpKTtcbnZhciB3YXJuaW5nID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ3dhcm5pbmcnKSk7XG52YXIgZGVlcG1lcmdlID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ2RlZXBtZXJnZScpKTtcblxudmFyIF9hO1xudmFyIEZvcm1pa1Byb3ZpZGVyID0gKF9hID0gY3JlYXRlQ29udGV4dCh7fSksIF9hLlByb3ZpZGVyKSwgRm9ybWlrQ29uc3VtZXIgPSBfYS5Db25zdW1lcjtcbmZ1bmN0aW9uIGNvbm5lY3QoQ29tcCkge1xuICAgIHZhciBDID0gZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtaWtDb25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGZvcm1paykgeyByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBwcm9wcywgeyBmb3JtaWs6IGZvcm1payB9KSk7IH0pKTsgfTtcbiAgICBDLldyYXBwZWRDb21wb25lbnQgPSBDb21wO1xuICAgIHJldHVybiBob2lzdE5vblJlYWN0U3RhdGljcyhDLCBDb21wKTtcbn1cblxuZnVuY3Rpb24gZ2V0SW4ob2JqLCBrZXksIGRlZiwgcCkge1xuICAgIGlmIChwID09PSB2b2lkIDApIHsgcCA9IDA7IH1cbiAgICB2YXIgcGF0aCA9IHRvUGF0aChrZXkpO1xuICAgIHdoaWxlIChvYmogJiYgcCA8IHBhdGgubGVuZ3RoKSB7XG4gICAgICAgIG9iaiA9IG9ialtwYXRoW3ArK11dO1xuICAgIH1cbiAgICByZXR1cm4gb2JqID09PSB1bmRlZmluZWQgPyBkZWYgOiBvYmo7XG59XG5mdW5jdGlvbiBzZXRJbihvYmosIHBhdGgsIHZhbHVlKSB7XG4gICAgdmFyIHJlcyA9IHt9O1xuICAgIHZhciByZXNWYWwgPSByZXM7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoQXJyYXkgPSB0b1BhdGgocGF0aCk7XG4gICAgZm9yICg7IGkgPCBwYXRoQXJyYXkubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIHZhciBjdXJyZW50UGF0aCA9IHBhdGhBcnJheVtpXTtcbiAgICAgICAgdmFyIGN1cnJlbnRPYmogPSBnZXRJbihvYmosIHBhdGhBcnJheS5zbGljZSgwLCBpICsgMSkpO1xuICAgICAgICBpZiAocmVzVmFsW2N1cnJlbnRQYXRoXSkge1xuICAgICAgICAgICAgcmVzVmFsID0gcmVzVmFsW2N1cnJlbnRQYXRoXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjdXJyZW50T2JqKSB7XG4gICAgICAgICAgICByZXNWYWwgPSByZXNWYWxbY3VycmVudFBhdGhdID0gY2xvbmVEZWVwKGN1cnJlbnRPYmopO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIG5leHRQYXRoID0gcGF0aEFycmF5W2kgKyAxXTtcbiAgICAgICAgICAgIHJlc1ZhbCA9IHJlc1ZhbFtjdXJyZW50UGF0aF0gPVxuICAgICAgICAgICAgICAgIGlzSW50ZWdlcihuZXh0UGF0aCkgJiYgTnVtYmVyKG5leHRQYXRoKSA+PSAwID8gW10gOiB7fTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoKGkgPT09IDAgPyBvYmogOiByZXNWYWwpW3BhdGhBcnJheVtpXV0gPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRlbGV0ZSByZXNWYWxbcGF0aEFycmF5W2ldXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJlc1ZhbFtwYXRoQXJyYXlbaV1dID0gdmFsdWU7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSB0c2xpYl8xLl9fYXNzaWduKHt9LCBvYmosIHJlcyk7XG4gICAgaWYgKGkgPT09IDAgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWxldGUgcmVzdWx0W3BhdGhBcnJheVtpXV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBzZXROZXN0ZWRPYmplY3RWYWx1ZXMob2JqZWN0LCB2YWx1ZSwgdmlzaXRlZCwgcmVzcG9uc2UpIHtcbiAgICBpZiAodmlzaXRlZCA9PT0gdm9pZCAwKSB7IHZpc2l0ZWQgPSBuZXcgV2Vha01hcCgpOyB9XG4gICAgaWYgKHJlc3BvbnNlID09PSB2b2lkIDApIHsgcmVzcG9uc2UgPSB7fTsgfVxuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgayA9IF9hW19pXTtcbiAgICAgICAgdmFyIHZhbCA9IG9iamVjdFtrXTtcbiAgICAgICAgaWYgKGlzT2JqZWN0KHZhbCkpIHtcbiAgICAgICAgICAgIGlmICghdmlzaXRlZC5nZXQodmFsKSkge1xuICAgICAgICAgICAgICAgIHZpc2l0ZWQuc2V0KHZhbCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2Vba10gPSBBcnJheS5pc0FycmF5KHZhbCkgPyBbXSA6IHt9O1xuICAgICAgICAgICAgICAgIHNldE5lc3RlZE9iamVjdFZhbHVlcyh2YWwsIHZhbHVlLCB2aXNpdGVkLCByZXNwb25zZVtrXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXNwb25zZVtrXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbn1cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nO1xufTtcbnZhciBpc09iamVjdCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufTtcbnZhciBpc0ludGVnZXIgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIFN0cmluZyhNYXRoLmZsb29yKE51bWJlcihvYmopKSkgPT09IG9iajtcbn07XG52YXIgaXNTdHJpbmcgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBTdHJpbmddJztcbn07XG52YXIgaXNOYU4gPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogIT09IG9iajsgfTtcbnZhciBpc0VtcHR5Q2hpbGRyZW4gPSBmdW5jdGlvbiAoY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pID09PSAwO1xufTtcbnZhciBpc1Byb21pc2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodmFsdWUpICYmIGlzRnVuY3Rpb24odmFsdWUudGhlbik7XG59O1xuZnVuY3Rpb24gZ2V0QWN0aXZlRWxlbWVudChkb2MpIHtcbiAgICBkb2MgPSBkb2MgfHwgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IHVuZGVmaW5lZCk7XG4gICAgaWYgKHR5cGVvZiBkb2MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZG9jLmFjdGl2ZUVsZW1lbnQgfHwgZG9jLmJvZHk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBkb2MuYm9keTtcbiAgICB9XG59XG5cbnZhciBGb3JtaWsgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEZvcm1paywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGb3JtaWsocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmhjQ2FjaGUgPSB7fTtcbiAgICAgICAgX3RoaXMuaGJDYWNoZSA9IHt9O1xuICAgICAgICBfdGhpcy5yZWdpc3RlckZpZWxkID0gZnVuY3Rpb24gKG5hbWUsIENvbXApIHtcbiAgICAgICAgICAgIF90aGlzLmZpZWxkc1tuYW1lXSA9IENvbXA7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnVucmVnaXN0ZXJGaWVsZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICBkZWxldGUgX3RoaXMuZmllbGRzW25hbWVdO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zZXRFcnJvcnMgPSBmdW5jdGlvbiAoZXJyb3JzKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGVycm9yczogZXJyb3JzIH0pO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zZXRUb3VjaGVkID0gZnVuY3Rpb24gKHRvdWNoZWQpIHtcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgdG91Y2hlZDogdG91Y2hlZCB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLnZhbGlkYXRlT25CbHVyKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJ1blZhbGlkYXRpb25zKF90aGlzLnN0YXRlLnZhbHVlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnNldFZhbHVlcyA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgdmFsdWVzOiB2YWx1ZXMgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy52YWxpZGF0ZU9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJ1blZhbGlkYXRpb25zKHZhbHVlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnNldFN0YXR1cyA9IGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBzdGF0dXMgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnNldEVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiV2FybmluZzogRm9ybWlrJ3Mgc2V0RXJyb3IoZXJyb3IpIGlzIGRlcHJlY2F0ZWQgYW5kIG1heSBiZSByZW1vdmVkIGluIGZ1dHVyZSByZWxlYXNlcy4gUGxlYXNlIHVzZSBGb3JtaWsncyBzZXRTdGF0dXMoc3RhdHVzKSBpbnN0ZWFkLiBJdCB3b3JrcyBpZGVudGljYWxseS4gRm9yIG1vcmUgaW5mbyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2phcmVkcGFsbWVyL2Zvcm1payNzZXRzdGF0dXMtc3RhdHVzLWFueS0tdm9pZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgZXJyb3I6IGVycm9yIH0pO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zZXRTdWJtaXR0aW5nID0gZnVuY3Rpb24gKGlzU3VibWl0dGluZykge1xuICAgICAgICAgICAgaWYgKF90aGlzLmRpZE1vdW50KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBpc1N1Ym1pdHRpbmc6IGlzU3VibWl0dGluZyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMudmFsaWRhdGVGaWVsZCA9IGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBpc1ZhbGlkYXRpbmc6IHRydWUgfSk7XG4gICAgICAgICAgICBfdGhpcy5ydW5TaW5nbGVGaWVsZExldmVsVmFsaWRhdGlvbihmaWVsZCwgZ2V0SW4oX3RoaXMuc3RhdGUudmFsdWVzLCBmaWVsZCkpLnRoZW4oZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmRpZE1vdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yczogc2V0SW4oX3RoaXMuc3RhdGUuZXJyb3JzLCBmaWVsZCwgZXJyb3IpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnJ1blNpbmdsZUZpZWxkTGV2ZWxWYWxpZGF0aW9uID0gZnVuY3Rpb24gKGZpZWxkLCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoX3RoaXMuZmllbGRzW2ZpZWxkXS5wcm9wcy52YWxpZGF0ZSh2YWx1ZSkpO1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSwgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGU7IH0pO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5ydW5WYWxpZGF0aW9uU2NoZW1hID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkYXRpb25TY2hlbWEgPSBfdGhpcy5wcm9wcy52YWxpZGF0aW9uU2NoZW1hO1xuICAgICAgICAgICAgICAgIHZhciBzY2hlbWEgPSBpc0Z1bmN0aW9uKHZhbGlkYXRpb25TY2hlbWEpXG4gICAgICAgICAgICAgICAgICAgID8gdmFsaWRhdGlvblNjaGVtYSgpXG4gICAgICAgICAgICAgICAgICAgIDogdmFsaWRhdGlvblNjaGVtYTtcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZVl1cFNjaGVtYSh2YWx1ZXMsIHNjaGVtYSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe30pO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh5dXBUb0Zvcm1FcnJvcnMoZXJyKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucnVuVmFsaWRhdGlvbnMgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzID09PSB2b2lkIDApIHsgdmFsdWVzID0gX3RoaXMuc3RhdGUudmFsdWVzOyB9XG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGlzVmFsaWRhdGluZzogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgX3RoaXMucnVuRmllbGRMZXZlbFZhbGlkYXRpb25zKHZhbHVlcyksXG4gICAgICAgICAgICAgICAgX3RoaXMucHJvcHMudmFsaWRhdGlvblNjaGVtYSA/IF90aGlzLnJ1blZhbGlkYXRpb25TY2hlbWEodmFsdWVzKSA6IHt9LFxuICAgICAgICAgICAgICAgIF90aGlzLnByb3BzLnZhbGlkYXRlID8gX3RoaXMucnVuVmFsaWRhdGVIYW5kbGVyKHZhbHVlcykgOiB7fSxcbiAgICAgICAgICAgIF0pLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkRXJyb3JzID0gX2FbMF0sIHNjaGVtYUVycm9ycyA9IF9hWzFdLCBoYW5kbGVyRXJyb3JzID0gX2FbMl07XG4gICAgICAgICAgICAgICAgdmFyIGNvbWJpbmVkRXJyb3JzID0gZGVlcG1lcmdlLmFsbChbZmllbGRFcnJvcnMsIHNjaGVtYUVycm9ycywgaGFuZGxlckVycm9yc10sIHsgYXJyYXlNZXJnZTogYXJyYXlNZXJnZSB9KTtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuZGlkTW91bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBpc1ZhbGlkYXRpbmc6IGZhbHNlLCBlcnJvcnM6IGNvbWJpbmVkRXJyb3JzIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY29tYmluZWRFcnJvcnM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50T3JQYXRoKSB7XG4gICAgICAgICAgICB2YXIgZXhlY3V0ZUNoYW5nZSA9IGZ1bmN0aW9uIChldmVudE9yVGV4dFZhbHVlLCBtYXliZVBhdGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmllbGQgPSBtYXliZVBhdGg7XG4gICAgICAgICAgICAgICAgdmFyIHZhbCA9IGV2ZW50T3JUZXh0VmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIHBhcnNlZDtcbiAgICAgICAgICAgICAgICBpZiAoIWlzU3RyaW5nKGV2ZW50T3JUZXh0VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudE9yVGV4dFZhbHVlLnBlcnNpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50T3JUZXh0VmFsdWUucGVyc2lzdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSA9IGV2ZW50T3JUZXh0VmFsdWUudGFyZ2V0LCB0eXBlID0gX2EudHlwZSwgbmFtZV8xID0gX2EubmFtZSwgaWQgPSBfYS5pZCwgdmFsdWUgPSBfYS52YWx1ZSwgY2hlY2tlZCA9IF9hLmNoZWNrZWQsIG91dGVySFRNTCA9IF9hLm91dGVySFRNTDtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQgPSBtYXliZVBhdGggPyBtYXliZVBhdGggOiBuYW1lXzEgPyBuYW1lXzEgOiBpZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWVsZCAmJiBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2FybkFib3V0TWlzc2luZ0lkZW50aWZpZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxDb250ZW50OiBvdXRlckhUTUwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRhdGlvbkFuY2hvckxpbms6ICdoYW5kbGVjaGFuZ2UtZS1yZWFjdGNoYW5nZWV2ZW50YW55LS12b2lkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyTmFtZTogJ2hhbmRsZUNoYW5nZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YWwgPSAvbnVtYmVyfHJhbmdlLy50ZXN0KHR5cGUpXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICgocGFyc2VkID0gcGFyc2VGbG9hdCh2YWx1ZSkpLCBpc05hTihwYXJzZWQpID8gJycgOiBwYXJzZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IC9jaGVja2JveC8udGVzdCh0eXBlKSA/IGNoZWNrZWQgOiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHsgcmV0dXJuICh0c2xpYl8xLl9fYXNzaWduKHt9LCBwcmV2U3RhdGUsIHsgdmFsdWVzOiBzZXRJbihwcmV2U3RhdGUudmFsdWVzLCBmaWVsZCwgdmFsKSB9KSk7IH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy52YWxpZGF0ZU9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucnVuVmFsaWRhdGlvbnMoc2V0SW4oX3RoaXMuc3RhdGUudmFsdWVzLCBmaWVsZCwgdmFsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcoZXZlbnRPclBhdGgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzRnVuY3Rpb24oX3RoaXMuaGNDYWNoZVtldmVudE9yUGF0aF0pXG4gICAgICAgICAgICAgICAgICAgID8gX3RoaXMuaGNDYWNoZVtldmVudE9yUGF0aF1cbiAgICAgICAgICAgICAgICAgICAgOiAoX3RoaXMuaGNDYWNoZVtldmVudE9yUGF0aF0gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBleGVjdXRlQ2hhbmdlKGV2ZW50LCBldmVudE9yUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhlY3V0ZUNoYW5nZShldmVudE9yUGF0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnNldEZpZWxkVmFsdWUgPSBmdW5jdGlvbiAoZmllbGQsIHZhbHVlLCBzaG91bGRWYWxpZGF0ZSkge1xuICAgICAgICAgICAgaWYgKHNob3VsZFZhbGlkYXRlID09PSB2b2lkIDApIHsgc2hvdWxkVmFsaWRhdGUgPSB0cnVlOyB9XG4gICAgICAgICAgICBpZiAoX3RoaXMuZGlkTW91bnQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7IHJldHVybiAodHNsaWJfMS5fX2Fzc2lnbih7fSwgcHJldlN0YXRlLCB7IHZhbHVlczogc2V0SW4ocHJldlN0YXRlLnZhbHVlcywgZmllbGQsIHZhbHVlKSB9KSk7IH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLnZhbGlkYXRlT25DaGFuZ2UgJiYgc2hvdWxkVmFsaWRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJ1blZhbGlkYXRpb25zKF90aGlzLnN0YXRlLnZhbHVlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuaGFuZGxlU3VibWl0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChlICYmIGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZ2V0QWN0aXZlRWxlbWVudCgpO1xuICAgICAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50ICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB3YXJuaW5nKCEhKGFjdGl2ZUVsZW1lbnQuYXR0cmlidXRlcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudC5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbSgndHlwZScpKSwgJ1lvdSBzdWJtaXR0ZWQgYSBGb3JtaWsgZm9ybSB1c2luZyBhIGJ1dHRvbiB3aXRoIGFuIHVuc3BlY2lmaWVkIGB0eXBlYCBhdHRyaWJ1dGUuICBNb3N0IGJyb3dzZXJzIGRlZmF1bHQgYnV0dG9uIGVsZW1lbnRzIHRvIGB0eXBlPVwic3VibWl0XCJgLiBJZiB0aGlzIGlzIG5vdCBhIHN1Ym1pdCBidXR0b24sIHBsZWFzZSBhZGQgYHR5cGU9XCJidXR0b25cImAuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuc3VibWl0Rm9ybSgpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zdWJtaXRGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkgeyByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICB0b3VjaGVkOiBzZXROZXN0ZWRPYmplY3RWYWx1ZXMocHJldlN0YXRlLnZhbHVlcywgdHJ1ZSksXG4gICAgICAgICAgICAgICAgaXNTdWJtaXR0aW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN1Ym1pdENvdW50OiBwcmV2U3RhdGUuc3VibWl0Q291bnQgKyAxLFxuICAgICAgICAgICAgfSk7IH0pO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJ1blZhbGlkYXRpb25zKCkudGhlbihmdW5jdGlvbiAoY29tYmluZWRFcnJvcnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXNWYWxpZCA9IE9iamVjdC5rZXlzKGNvbWJpbmVkRXJyb3JzKS5sZW5ndGggPT09IDA7XG4gICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZXhlY3V0ZVN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChfdGhpcy5kaWRNb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGlzU3VibWl0dGluZzogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmV4ZWN1dGVTdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5wcm9wcy5vblN1Ym1pdChfdGhpcy5zdGF0ZS52YWx1ZXMsIF90aGlzLmdldEZvcm1pa0FjdGlvbnMoKSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZUJsdXIgPSBmdW5jdGlvbiAoZXZlbnRPclN0cmluZykge1xuICAgICAgICAgICAgdmFyIGV4ZWN1dGVCbHVyID0gZnVuY3Rpb24gKGUsIHBhdGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5wZXJzaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGUucGVyc2lzdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgX2EgPSBlLnRhcmdldCwgbmFtZSA9IF9hLm5hbWUsIGlkID0gX2EuaWQsIG91dGVySFRNTCA9IF9hLm91dGVySFRNTDtcbiAgICAgICAgICAgICAgICB2YXIgZmllbGQgPSBwYXRoID8gcGF0aCA6IG5hbWUgPyBuYW1lIDogaWQ7XG4gICAgICAgICAgICAgICAgaWYgKCFmaWVsZCAmJiBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB3YXJuQWJvdXRNaXNzaW5nSWRlbnRpZmllcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sQ29udGVudDogb3V0ZXJIVE1MLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRhdGlvbkFuY2hvckxpbms6ICdoYW5kbGVibHVyLWUtYW55LS12b2lkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXJOYW1lOiAnaGFuZGxlQmx1cicsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7IHJldHVybiAoe1xuICAgICAgICAgICAgICAgICAgICB0b3VjaGVkOiBzZXRJbihwcmV2U3RhdGUudG91Y2hlZCwgZmllbGQsIHRydWUpLFxuICAgICAgICAgICAgICAgIH0pOyB9KTtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMudmFsaWRhdGVPbkJsdXIpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucnVuVmFsaWRhdGlvbnMoX3RoaXMuc3RhdGUudmFsdWVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGlzU3RyaW5nKGV2ZW50T3JTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzRnVuY3Rpb24oX3RoaXMuaGJDYWNoZVtldmVudE9yU3RyaW5nXSlcbiAgICAgICAgICAgICAgICAgICAgPyBfdGhpcy5oYkNhY2hlW2V2ZW50T3JTdHJpbmddXG4gICAgICAgICAgICAgICAgICAgIDogKF90aGlzLmhiQ2FjaGVbZXZlbnRPclN0cmluZ10gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBleGVjdXRlQmx1cihldmVudCwgZXZlbnRPclN0cmluZyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhlY3V0ZUJsdXIoZXZlbnRPclN0cmluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnNldEZpZWxkVG91Y2hlZCA9IGZ1bmN0aW9uIChmaWVsZCwgdG91Y2hlZCwgc2hvdWxkVmFsaWRhdGUpIHtcbiAgICAgICAgICAgIGlmICh0b3VjaGVkID09PSB2b2lkIDApIHsgdG91Y2hlZCA9IHRydWU7IH1cbiAgICAgICAgICAgIGlmIChzaG91bGRWYWxpZGF0ZSA9PT0gdm9pZCAwKSB7IHNob3VsZFZhbGlkYXRlID0gdHJ1ZTsgfVxuICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkgeyByZXR1cm4gKHRzbGliXzEuX19hc3NpZ24oe30sIHByZXZTdGF0ZSwgeyB0b3VjaGVkOiBzZXRJbihwcmV2U3RhdGUudG91Y2hlZCwgZmllbGQsIHRvdWNoZWQpIH0pKTsgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy52YWxpZGF0ZU9uQmx1ciAmJiBzaG91bGRWYWxpZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5ydW5WYWxpZGF0aW9ucyhfdGhpcy5zdGF0ZS52YWx1ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zZXRGaWVsZEVycm9yID0gZnVuY3Rpb24gKGZpZWxkLCBtZXNzYWdlKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7IHJldHVybiAodHNsaWJfMS5fX2Fzc2lnbih7fSwgcHJldlN0YXRlLCB7IGVycm9yczogc2V0SW4ocHJldlN0YXRlLmVycm9ycywgZmllbGQsIG1lc3NhZ2UpIH0pKTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnJlc2V0Rm9ybSA9IGZ1bmN0aW9uIChuZXh0VmFsdWVzKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gbmV4dFZhbHVlcyA/IG5leHRWYWx1ZXMgOiBfdGhpcy5wcm9wcy5pbml0aWFsVmFsdWVzO1xuICAgICAgICAgICAgX3RoaXMuaW5pdGlhbFZhbHVlcyA9IHZhbHVlcztcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc1N1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGlzVmFsaWRhdGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXJyb3JzOiB7fSxcbiAgICAgICAgICAgICAgICB0b3VjaGVkOiB7fSxcbiAgICAgICAgICAgICAgICBlcnJvcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHN0YXR1czogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgICAgICAgICAgIHN1Ym1pdENvdW50OiAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZVJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uUmVzZXQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF5YmVQcm9taXNlZE9uUmVzZXQgPSBfdGhpcy5wcm9wcy5vblJlc2V0KF90aGlzLnN0YXRlLnZhbHVlcywgX3RoaXMuZ2V0Rm9ybWlrQWN0aW9ucygpKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNQcm9taXNlKG1heWJlUHJvbWlzZWRPblJlc2V0KSkge1xuICAgICAgICAgICAgICAgICAgICBtYXliZVByb21pc2VkT25SZXNldC50aGVuKF90aGlzLnJlc2V0Rm9ybSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXNldEZvcm0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXNldEZvcm0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc2V0Rm9ybWlrU3RhdGUgPSBmdW5jdGlvbiAocywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5zZXRTdGF0ZShzLCBjYWxsYmFjayk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmdldEZvcm1pa0FjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJlc2V0Rm9ybTogX3RoaXMucmVzZXRGb3JtLFxuICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm06IF90aGlzLnN1Ym1pdEZvcm0sXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVGb3JtOiBfdGhpcy5ydW5WYWxpZGF0aW9ucyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUZpZWxkOiBfdGhpcy52YWxpZGF0ZUZpZWxkLFxuICAgICAgICAgICAgICAgIHNldEVycm9yOiBfdGhpcy5zZXRFcnJvcixcbiAgICAgICAgICAgICAgICBzZXRFcnJvcnM6IF90aGlzLnNldEVycm9ycyxcbiAgICAgICAgICAgICAgICBzZXRGaWVsZEVycm9yOiBfdGhpcy5zZXRGaWVsZEVycm9yLFxuICAgICAgICAgICAgICAgIHNldEZpZWxkVG91Y2hlZDogX3RoaXMuc2V0RmllbGRUb3VjaGVkLFxuICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWU6IF90aGlzLnNldEZpZWxkVmFsdWUsXG4gICAgICAgICAgICAgICAgc2V0U3RhdHVzOiBfdGhpcy5zZXRTdGF0dXMsXG4gICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZzogX3RoaXMuc2V0U3VibWl0dGluZyxcbiAgICAgICAgICAgICAgICBzZXRUb3VjaGVkOiBfdGhpcy5zZXRUb3VjaGVkLFxuICAgICAgICAgICAgICAgIHNldFZhbHVlczogX3RoaXMuc2V0VmFsdWVzLFxuICAgICAgICAgICAgICAgIHNldEZvcm1pa1N0YXRlOiBfdGhpcy5zZXRGb3JtaWtTdGF0ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmdldEZvcm1pa0NvbXB1dGVkUHJvcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaXNJbml0aWFsVmFsaWQgPSBfdGhpcy5wcm9wcy5pc0luaXRpYWxWYWxpZDtcbiAgICAgICAgICAgIHZhciBkaXJ0eSA9ICFpc0VxdWFsKF90aGlzLmluaXRpYWxWYWx1ZXMsIF90aGlzLnN0YXRlLnZhbHVlcyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRpcnR5OiBkaXJ0eSxcbiAgICAgICAgICAgICAgICBpc1ZhbGlkOiBkaXJ0eVxuICAgICAgICAgICAgICAgICAgICA/IF90aGlzLnN0YXRlLmVycm9ycyAmJiBPYmplY3Qua2V5cyhfdGhpcy5zdGF0ZS5lcnJvcnMpLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICAgICA6IGlzSW5pdGlhbFZhbGlkICE9PSBmYWxzZSAmJiBpc0Z1bmN0aW9uKGlzSW5pdGlhbFZhbGlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBpc0luaXRpYWxWYWxpZChfdGhpcy5wcm9wcylcbiAgICAgICAgICAgICAgICAgICAgICAgIDogaXNJbml0aWFsVmFsaWQsXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlczogX3RoaXMuaW5pdGlhbFZhbHVlcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmdldEZvcm1pa0JhZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXNzaWduKHt9LCBfdGhpcy5zdGF0ZSwgX3RoaXMuZ2V0Rm9ybWlrQWN0aW9ucygpLCBfdGhpcy5nZXRGb3JtaWtDb21wdXRlZFByb3BzKCksIHsgcmVnaXN0ZXJGaWVsZDogX3RoaXMucmVnaXN0ZXJGaWVsZCwgdW5yZWdpc3RlckZpZWxkOiBfdGhpcy51bnJlZ2lzdGVyRmllbGQsIGhhbmRsZUJsdXI6IF90aGlzLmhhbmRsZUJsdXIsIGhhbmRsZUNoYW5nZTogX3RoaXMuaGFuZGxlQ2hhbmdlLCBoYW5kbGVSZXNldDogX3RoaXMuaGFuZGxlUmVzZXQsIGhhbmRsZVN1Ym1pdDogX3RoaXMuaGFuZGxlU3VibWl0LCB2YWxpZGF0ZU9uQ2hhbmdlOiBfdGhpcy5wcm9wcy52YWxpZGF0ZU9uQ2hhbmdlLCB2YWxpZGF0ZU9uQmx1cjogX3RoaXMucHJvcHMudmFsaWRhdGVPbkJsdXIgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmdldEZvcm1pa0NvbnRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2Fzc2lnbih7fSwgX3RoaXMuZ2V0Rm9ybWlrQmFnKCksIHsgdmFsaWRhdGlvblNjaGVtYTogX3RoaXMucHJvcHMudmFsaWRhdGlvblNjaGVtYSwgdmFsaWRhdGU6IF90aGlzLnByb3BzLnZhbGlkYXRlLCBpbml0aWFsVmFsdWVzOiBfdGhpcy5pbml0aWFsVmFsdWVzIH0pO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZhbHVlczogcHJvcHMuaW5pdGlhbFZhbHVlcyB8fCB7fSxcbiAgICAgICAgICAgIGVycm9yczoge30sXG4gICAgICAgICAgICB0b3VjaGVkOiB7fSxcbiAgICAgICAgICAgIGlzU3VibWl0dGluZzogZmFsc2UsXG4gICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc3VibWl0Q291bnQ6IDAsXG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmRpZE1vdW50ID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmZpZWxkcyA9IHt9O1xuICAgICAgICBfdGhpcy5pbml0aWFsVmFsdWVzID0gcHJvcHMuaW5pdGlhbFZhbHVlcyB8fCB7fTtcbiAgICAgICAgd2FybmluZyghKHByb3BzLmNvbXBvbmVudCAmJiBwcm9wcy5yZW5kZXIpLCAnWW91IHNob3VsZCBub3QgdXNlIDxGb3JtaWsgY29tcG9uZW50PiBhbmQgPEZvcm1payByZW5kZXI+IGluIHRoZSBzYW1lIDxGb3JtaWs+IGNvbXBvbmVudDsgPEZvcm1payByZW5kZXI+IHdpbGwgYmUgaWdub3JlZCcpO1xuICAgICAgICB3YXJuaW5nKCEocHJvcHMuY29tcG9uZW50ICYmIHByb3BzLmNoaWxkcmVuICYmICFpc0VtcHR5Q2hpbGRyZW4ocHJvcHMuY2hpbGRyZW4pKSwgJ1lvdSBzaG91bGQgbm90IHVzZSA8Rm9ybWlrIGNvbXBvbmVudD4gYW5kIDxGb3JtaWsgY2hpbGRyZW4+IGluIHRoZSBzYW1lIDxGb3JtaWs+IGNvbXBvbmVudDsgPEZvcm1payBjaGlsZHJlbj4gd2lsbCBiZSBpZ25vcmVkJyk7XG4gICAgICAgIHdhcm5pbmcoIShwcm9wcy5yZW5kZXIgJiYgcHJvcHMuY2hpbGRyZW4gJiYgIWlzRW1wdHlDaGlsZHJlbihwcm9wcy5jaGlsZHJlbikpLCAnWW91IHNob3VsZCBub3QgdXNlIDxGb3JtaWsgcmVuZGVyPiBhbmQgPEZvcm1payBjaGlsZHJlbj4gaW4gdGhlIHNhbWUgPEZvcm1paz4gY29tcG9uZW50OyA8Rm9ybWlrIGNoaWxkcmVuPiB3aWxsIGJlIGlnbm9yZWQnKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBGb3JtaWsucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRpZE1vdW50ID0gdHJ1ZTtcbiAgICB9O1xuICAgIEZvcm1pay5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGlkTW91bnQgPSBmYWxzZTtcbiAgICB9O1xuICAgIEZvcm1pay5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gKHByZXZQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5lbmFibGVSZWluaXRpYWxpemUgJiZcbiAgICAgICAgICAgICFpc0VxdWFsKHByZXZQcm9wcy5pbml0aWFsVmFsdWVzLCB0aGlzLnByb3BzLmluaXRpYWxWYWx1ZXMpKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxWYWx1ZXMgPSB0aGlzLnByb3BzLmluaXRpYWxWYWx1ZXM7XG4gICAgICAgICAgICB0aGlzLnJlc2V0Rm9ybSh0aGlzLnByb3BzLmluaXRpYWxWYWx1ZXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBGb3JtaWsucHJvdG90eXBlLnJ1bkZpZWxkTGV2ZWxWYWxpZGF0aW9ucyA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGZpZWxkS2V5c1dpdGhWYWxpZGF0aW9uID0gT2JqZWN0LmtleXModGhpcy5maWVsZHMpLmZpbHRlcihmdW5jdGlvbiAoZikge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmZpZWxkcyAmJlxuICAgICAgICAgICAgICAgIF90aGlzLmZpZWxkc1tmXSAmJlxuICAgICAgICAgICAgICAgIF90aGlzLmZpZWxkc1tmXS5wcm9wcy52YWxpZGF0ZSAmJlxuICAgICAgICAgICAgICAgIGlzRnVuY3Rpb24oX3RoaXMuZmllbGRzW2ZdLnByb3BzLnZhbGlkYXRlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBmaWVsZFZhbGlkYXRpb25zID0gZmllbGRLZXlzV2l0aFZhbGlkYXRpb24ubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBmaWVsZEtleXNXaXRoVmFsaWRhdGlvbi5tYXAoZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucnVuU2luZ2xlRmllbGRMZXZlbFZhbGlkYXRpb24oZiwgZ2V0SW4odmFsdWVzLCBmKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBbUHJvbWlzZS5yZXNvbHZlKCdET19OT1RfREVMRVRFX1lPVV9XSUxMX0JFX0ZJUkVEJyldO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoZmllbGRWYWxpZGF0aW9ucykudGhlbihmdW5jdGlvbiAoZmllbGRFcnJvcnNMaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmllbGRFcnJvcnNMaXN0LnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3VyciwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VyciA9PT0gJ0RPX05PVF9ERUxFVEVfWU9VX1dJTExfQkVfRklSRUQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoISFjdXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXYgPSBzZXRJbihwcmV2LCBmaWVsZEtleXNXaXRoVmFsaWRhdGlvbltpbmRleF0sIGN1cnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBGb3JtaWsucHJvdG90eXBlLnJ1blZhbGlkYXRlSGFuZGxlciA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICB2YXIgbWF5YmVQcm9taXNlZEVycm9ycyA9IF90aGlzLnByb3BzLnZhbGlkYXRlKHZhbHVlcyk7XG4gICAgICAgICAgICBpZiAobWF5YmVQcm9taXNlZEVycm9ycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc1Byb21pc2UobWF5YmVQcm9taXNlZEVycm9ycykpIHtcbiAgICAgICAgICAgICAgICBtYXliZVByb21pc2VkRXJyb3JzLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHt9KTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZXJyb3JzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUobWF5YmVQcm9taXNlZEVycm9ycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRm9ybWlrLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIGNvbXBvbmVudCA9IF9hLmNvbXBvbmVudCwgcmVuZGVyID0gX2EucmVuZGVyLCBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuO1xuICAgICAgICB2YXIgcHJvcHMgPSB0aGlzLmdldEZvcm1pa0JhZygpO1xuICAgICAgICB2YXIgY3R4ID0gdGhpcy5nZXRGb3JtaWtDb250ZXh0KCk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtaWtQcm92aWRlciwgeyB2YWx1ZTogY3R4IH0sIGNvbXBvbmVudFxuICAgICAgICAgICAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMpXG4gICAgICAgICAgICA6IHJlbmRlclxuICAgICAgICAgICAgICAgID8gcmVuZGVyKHByb3BzKVxuICAgICAgICAgICAgICAgIDogY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgPyBpc0Z1bmN0aW9uKGNoaWxkcmVuKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjaGlsZHJlbihwcm9wcylcbiAgICAgICAgICAgICAgICAgICAgICAgIDogIWlzRW1wdHlDaGlsZHJlbihjaGlsZHJlbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCkpO1xuICAgIH07XG4gICAgRm9ybWlrLmRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgdmFsaWRhdGVPbkNoYW5nZTogdHJ1ZSxcbiAgICAgICAgdmFsaWRhdGVPbkJsdXI6IHRydWUsXG4gICAgICAgIGlzSW5pdGlhbFZhbGlkOiBmYWxzZSxcbiAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplOiBmYWxzZSxcbiAgICB9O1xuICAgIHJldHVybiBGb3JtaWs7XG59KFJlYWN0LkNvbXBvbmVudCkpO1xuZnVuY3Rpb24gd2FybkFib3V0TWlzc2luZ0lkZW50aWZpZXIoX2EpIHtcbiAgICB2YXIgaHRtbENvbnRlbnQgPSBfYS5odG1sQ29udGVudCwgZG9jdW1lbnRhdGlvbkFuY2hvckxpbmsgPSBfYS5kb2N1bWVudGF0aW9uQW5jaG9yTGluaywgaGFuZGxlck5hbWUgPSBfYS5oYW5kbGVyTmFtZTtcbiAgICBjb25zb2xlLmVycm9yKFwiV2FybmluZzogRm9ybWlrIGNhbGxlZCBgXCIgKyBoYW5kbGVyTmFtZSArIFwiYCwgYnV0IHlvdSBmb3Jnb3QgdG8gcGFzcyBhbiBgaWRgIG9yIGBuYW1lYCBhdHRyaWJ1dGUgdG8geW91ciBpbnB1dDpcXG5cXG4gICAgXCIgKyBodG1sQ29udGVudCArIFwiXFxuXFxuICAgIEZvcm1payBjYW5ub3QgZGV0ZXJtaW5lIHdoaWNoIHZhbHVlIHRvIHVwZGF0ZS4gRm9yIG1vcmUgaW5mbyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2phcmVkcGFsbWVyL2Zvcm1payNcIiArIGRvY3VtZW50YXRpb25BbmNob3JMaW5rICsgXCJcXG4gIFwiKTtcbn1cbmZ1bmN0aW9uIHl1cFRvRm9ybUVycm9ycyh5dXBFcnJvcikge1xuICAgIHZhciBlcnJvcnMgPSB7fTtcbiAgICBpZiAoeXVwRXJyb3IuaW5uZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBzZXRJbihlcnJvcnMsIHl1cEVycm9yLnBhdGgsIHl1cEVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0geXVwRXJyb3IuaW5uZXI7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBlcnIgPSBfYVtfaV07XG4gICAgICAgIGlmICghZXJyb3JzW2Vyci5wYXRoXSkge1xuICAgICAgICAgICAgZXJyb3JzID0gc2V0SW4oZXJyb3JzLCBlcnIucGF0aCwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlcnJvcnM7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVl1cFNjaGVtYSh2YWx1ZXMsIHNjaGVtYSwgc3luYywgY29udGV4dCkge1xuICAgIGlmIChzeW5jID09PSB2b2lkIDApIHsgc3luYyA9IGZhbHNlOyB9XG4gICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgeyBjb250ZXh0ID0ge307IH1cbiAgICB2YXIgdmFsaWRhdGVEYXRhID0ge307XG4gICAgZm9yICh2YXIgayBpbiB2YWx1ZXMpIHtcbiAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IFN0cmluZyhrKTtcbiAgICAgICAgICAgIHZhbGlkYXRlRGF0YVtrZXldID0gdmFsdWVzW2tleV0gIT09ICcnID8gdmFsdWVzW2tleV0gOiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNjaGVtYVtzeW5jID8gJ3ZhbGlkYXRlU3luYycgOiAndmFsaWRhdGUnXSh2YWxpZGF0ZURhdGEsIHtcbiAgICAgICAgYWJvcnRFYXJseTogZmFsc2UsXG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgfSk7XG59XG5mdW5jdGlvbiBhcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0gdGFyZ2V0LnNsaWNlKCk7XG4gICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24gKGUsIGkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbltpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHZhciBjbG9uZVJlcXVlc3RlZCA9IG9wdGlvbnMuY2xvbmUgIT09IGZhbHNlO1xuICAgICAgICAgICAgdmFyIHNob3VsZENsb25lID0gY2xvbmVSZXF1ZXN0ZWQgJiYgb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdChlKTtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2ldID0gc2hvdWxkQ2xvbmVcbiAgICAgICAgICAgICAgICA/IGRlZXBtZXJnZShBcnJheS5pc0FycmF5KGUpID8gW10gOiB7fSwgZSwgb3B0aW9ucylcbiAgICAgICAgICAgICAgICA6IGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdChlKSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25baV0gPSBkZWVwbWVyZ2UodGFyZ2V0W2ldLCBlLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0YXJnZXQuaW5kZXhPZihlKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLnB1c2goZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGVzdGluYXRpb247XG59XG5cbnZhciBGaWVsZElubmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhGaWVsZElubmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZpZWxkSW5uZXIocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIHZhciByZW5kZXIgPSBwcm9wcy5yZW5kZXIsIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sIGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudDtcbiAgICAgICAgd2FybmluZyghKGNvbXBvbmVudCAmJiByZW5kZXIpLCAnWW91IHNob3VsZCBub3QgdXNlIDxGaWVsZCBjb21wb25lbnQ+IGFuZCA8RmllbGQgcmVuZGVyPiBpbiB0aGUgc2FtZSA8RmllbGQ+IGNvbXBvbmVudDsgPEZpZWxkIGNvbXBvbmVudD4gd2lsbCBiZSBpZ25vcmVkJyk7XG4gICAgICAgIHdhcm5pbmcoIShjb21wb25lbnQgJiYgY2hpbGRyZW4gJiYgaXNGdW5jdGlvbihjaGlsZHJlbikpLCAnWW91IHNob3VsZCBub3QgdXNlIDxGaWVsZCBjb21wb25lbnQ+IGFuZCA8RmllbGQgY2hpbGRyZW4+IGFzIGEgZnVuY3Rpb24gaW4gdGhlIHNhbWUgPEZpZWxkPiBjb21wb25lbnQ7IDxGaWVsZCBjb21wb25lbnQ+IHdpbGwgYmUgaWdub3JlZC4nKTtcbiAgICAgICAgd2FybmluZyghKHJlbmRlciAmJiBjaGlsZHJlbiAmJiAhaXNFbXB0eUNoaWxkcmVuKGNoaWxkcmVuKSksICdZb3Ugc2hvdWxkIG5vdCB1c2UgPEZpZWxkIHJlbmRlcj4gYW5kIDxGaWVsZCBjaGlsZHJlbj4gaW4gdGhlIHNhbWUgPEZpZWxkPiBjb21wb25lbnQ7IDxGaWVsZCBjaGlsZHJlbj4gd2lsbCBiZSBpZ25vcmVkJyk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgRmllbGRJbm5lci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZm9ybWlrLnJlZ2lzdGVyRmllbGQodGhpcy5wcm9wcy5uYW1lLCB0aGlzKTtcbiAgICB9O1xuICAgIEZpZWxkSW5uZXIucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIChwcmV2UHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubmFtZSAhPT0gcHJldlByb3BzLm5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZm9ybWlrLnVucmVnaXN0ZXJGaWVsZChwcmV2UHJvcHMubmFtZSk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZvcm1pay5yZWdpc3RlckZpZWxkKHRoaXMucHJvcHMubmFtZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMudmFsaWRhdGUgIT09IHByZXZQcm9wcy52YWxpZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5mb3JtaWsucmVnaXN0ZXJGaWVsZCh0aGlzLnByb3BzLm5hbWUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBGaWVsZElubmVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5mb3JtaWsudW5yZWdpc3RlckZpZWxkKHRoaXMucHJvcHMubmFtZSk7XG4gICAgfTtcbiAgICBGaWVsZElubmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIHZhbGlkYXRlID0gX2EudmFsaWRhdGUsIG5hbWUgPSBfYS5uYW1lLCByZW5kZXIgPSBfYS5yZW5kZXIsIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sIF9iID0gX2EuY29tcG9uZW50LCBjb21wb25lbnQgPSBfYiA9PT0gdm9pZCAwID8gJ2lucHV0JyA6IF9iLCBmb3JtaWsgPSBfYS5mb3JtaWssIHByb3BzID0gdHNsaWJfMS5fX3Jlc3QoX2EsIFtcInZhbGlkYXRlXCIsIFwibmFtZVwiLCBcInJlbmRlclwiLCBcImNoaWxkcmVuXCIsIFwiY29tcG9uZW50XCIsIFwiZm9ybWlrXCJdKTtcbiAgICAgICAgdmFyIF92YWxpZGF0ZSA9IGZvcm1pay52YWxpZGF0ZSwgX3ZhbGlkYXRpb25TY2hlbWEgPSBmb3JtaWsudmFsaWRhdGlvblNjaGVtYSwgcmVzdE9mRm9ybWlrID0gdHNsaWJfMS5fX3Jlc3QoZm9ybWlrLCBbXCJ2YWxpZGF0ZVwiLCBcInZhbGlkYXRpb25TY2hlbWFcIl0pO1xuICAgICAgICB2YXIgZmllbGQgPSB7XG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMudHlwZSA9PT0gJ3JhZGlvJyB8fCBwcm9wcy50eXBlID09PSAnY2hlY2tib3gnXG4gICAgICAgICAgICAgICAgPyBwcm9wcy52YWx1ZVxuICAgICAgICAgICAgICAgIDogZ2V0SW4oZm9ybWlrLnZhbHVlcywgbmFtZSksXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgb25DaGFuZ2U6IGZvcm1pay5oYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICBvbkJsdXI6IGZvcm1pay5oYW5kbGVCbHVyLFxuICAgICAgICB9O1xuICAgICAgICB2YXIgYmFnID0geyBmaWVsZDogZmllbGQsIGZvcm06IHJlc3RPZkZvcm1payB9O1xuICAgICAgICBpZiAocmVuZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyKGJhZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRnVuY3Rpb24oY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW4oYmFnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhciBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLCByZXN0ID0gdHNsaWJfMS5fX3Jlc3QocHJvcHMsIFtcImlubmVyUmVmXCJdKTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgdHNsaWJfMS5fX2Fzc2lnbih7IHJlZjogaW5uZXJSZWYgfSwgZmllbGQsIHJlc3QsIHsgY2hpbGRyZW46IGNoaWxkcmVuIH0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHRzbGliXzEuX19hc3NpZ24oe30sIGJhZywgcHJvcHMsIHsgY2hpbGRyZW46IGNoaWxkcmVuIH0pKTtcbiAgICB9O1xuICAgIHJldHVybiBGaWVsZElubmVyO1xufShSZWFjdC5Db21wb25lbnQpKTtcbnZhciBGaWVsZCA9IGNvbm5lY3QoRmllbGRJbm5lcik7XG5cbnZhciBGb3JtID0gY29ubmVjdChmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgX2IgPSBfYS5mb3JtaWssIGhhbmRsZVJlc2V0ID0gX2IuaGFuZGxlUmVzZXQsIGhhbmRsZVN1Ym1pdCA9IF9iLmhhbmRsZVN1Ym1pdCwgcHJvcHMgPSB0c2xpYl8xLl9fcmVzdChfYSwgW1wiZm9ybWlrXCJdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHRzbGliXzEuX19hc3NpZ24oeyBvblJlc2V0OiBoYW5kbGVSZXNldCwgb25TdWJtaXQ6IGhhbmRsZVN1Ym1pdCB9LCBwcm9wcykpKTtcbn0pO1xuRm9ybS5kaXNwbGF5TmFtZSA9ICdGb3JtJztcblxuZnVuY3Rpb24gd2l0aEZvcm1payhfYSkge1xuICAgIHZhciBfYiA9IF9hLm1hcFByb3BzVG9WYWx1ZXMsIG1hcFByb3BzVG9WYWx1ZXMgPSBfYiA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHZhbmlsbGFQcm9wcykge1xuICAgICAgICB2YXIgdmFsID0ge307XG4gICAgICAgIGZvciAodmFyIGsgaW4gdmFuaWxsYVByb3BzKSB7XG4gICAgICAgICAgICBpZiAodmFuaWxsYVByb3BzLmhhc093blByb3BlcnR5KGspICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIHZhbmlsbGFQcm9wc1trXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHZhbFtrXSA9IHZhbmlsbGFQcm9wc1trXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH0gOiBfYiwgY29uZmlnID0gdHNsaWJfMS5fX3Jlc3QoX2EsIFtcIm1hcFByb3BzVG9WYWx1ZXNcIl0pO1xuICAgIHJldHVybiBmdW5jdGlvbiBjcmVhdGVGb3JtaWsoQ29tcG9uZW50KSB7XG4gICAgICAgIHZhciBjb21wb25lbnREaXNwbGF5TmFtZSA9IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fFxuICAgICAgICAgICAgQ29tcG9uZW50Lm5hbWUgfHxcbiAgICAgICAgICAgIChDb21wb25lbnQuY29uc3RydWN0b3IgJiYgQ29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUpIHx8XG4gICAgICAgICAgICAnQ29tcG9uZW50JztcbiAgICAgICAgdmFyIEMgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICAgICAgdHNsaWJfMS5fX2V4dGVuZHMoQywgX3N1cGVyKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIEMoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgICAgICAgICAgX3RoaXMudmFsaWRhdGUgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25maWcudmFsaWRhdGUodmFsdWVzLCBfdGhpcy5wcm9wcyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBfdGhpcy52YWxpZGF0aW9uU2NoZW1hID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNGdW5jdGlvbihjb25maWcudmFsaWRhdGlvblNjaGVtYSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY29uZmlnLnZhbGlkYXRpb25TY2hlbWEoX3RoaXMucHJvcHMpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZy52YWxpZGF0aW9uU2NoZW1hO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlU3VibWl0ID0gZnVuY3Rpb24gKHZhbHVlcywgYWN0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlnLmhhbmRsZVN1Ym1pdCh2YWx1ZXMsIHRzbGliXzEuX19hc3NpZ24oe30sIGFjdGlvbnMsIHsgcHJvcHM6IF90aGlzLnByb3BzIH0pKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIF90aGlzLnJlbmRlckZvcm1Db21wb25lbnQgPSBmdW5jdGlvbiAoZm9ybWlrUHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCB0c2xpYl8xLl9fYXNzaWduKHt9LCBfdGhpcy5wcm9wcywgZm9ybWlrUHJvcHMpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEMucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLCBwcm9wcyA9IHRzbGliXzEuX19yZXN0KF9hLCBbXCJjaGlsZHJlblwiXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1paywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgcHJvcHMsIGNvbmZpZywgeyB2YWxpZGF0ZTogY29uZmlnLnZhbGlkYXRlICYmIHRoaXMudmFsaWRhdGUsIHZhbGlkYXRpb25TY2hlbWE6IGNvbmZpZy52YWxpZGF0aW9uU2NoZW1hICYmIHRoaXMudmFsaWRhdGlvblNjaGVtYSwgaW5pdGlhbFZhbHVlczogbWFwUHJvcHNUb1ZhbHVlcyh0aGlzLnByb3BzKSwgb25TdWJtaXQ6IHRoaXMuaGFuZGxlU3VibWl0LCByZW5kZXI6IHRoaXMucmVuZGVyRm9ybUNvbXBvbmVudCB9KSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIEMuZGlzcGxheU5hbWUgPSBcIldpdGhGb3JtaWsoXCIgKyBjb21wb25lbnREaXNwbGF5TmFtZSArIFwiKVwiO1xuICAgICAgICAgICAgcmV0dXJuIEM7XG4gICAgICAgIH0oUmVhY3QuQ29tcG9uZW50KSk7XG4gICAgICAgIHJldHVybiBob2lzdE5vblJlYWN0U3RhdGljcyhDLCBDb21wb25lbnQpO1xuICAgIH07XG59XG5cbnZhciBtb3ZlID0gZnVuY3Rpb24gKGFycmF5LCBmcm9tLCB0bykge1xuICAgIHZhciBjb3B5ID0gKGFycmF5IHx8IFtdKS5zbGljZSgpO1xuICAgIHZhciB2YWx1ZSA9IGNvcHlbZnJvbV07XG4gICAgY29weS5zcGxpY2UoZnJvbSwgMSk7XG4gICAgY29weS5zcGxpY2UodG8sIDAsIHZhbHVlKTtcbiAgICByZXR1cm4gY29weTtcbn07XG52YXIgc3dhcCA9IGZ1bmN0aW9uIChhcnJheSwgaW5kZXhBLCBpbmRleEIpIHtcbiAgICB2YXIgY29weSA9IChhcnJheSB8fCBbXSkuc2xpY2UoKTtcbiAgICB2YXIgYSA9IGNvcHlbaW5kZXhBXTtcbiAgICBjb3B5W2luZGV4QV0gPSBjb3B5W2luZGV4Ql07XG4gICAgY29weVtpbmRleEJdID0gYTtcbiAgICByZXR1cm4gY29weTtcbn07XG52YXIgaW5zZXJ0ID0gZnVuY3Rpb24gKGFycmF5LCBpbmRleCwgdmFsdWUpIHtcbiAgICB2YXIgY29weSA9IChhcnJheSB8fCBbXSkuc2xpY2UoKTtcbiAgICBjb3B5LnNwbGljZShpbmRleCwgMCwgdmFsdWUpO1xuICAgIHJldHVybiBjb3B5O1xufTtcbnZhciByZXBsYWNlID0gZnVuY3Rpb24gKGFycmF5LCBpbmRleCwgdmFsdWUpIHtcbiAgICB2YXIgY29weSA9IChhcnJheSB8fCBbXSkuc2xpY2UoKTtcbiAgICBjb3B5W2luZGV4XSA9IHZhbHVlO1xuICAgIHJldHVybiBjb3B5O1xufTtcbnZhciBGaWVsZEFycmF5SW5uZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEZpZWxkQXJyYXlJbm5lciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGaWVsZEFycmF5SW5uZXIocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnVwZGF0ZUFycmF5RmllbGQgPSBmdW5jdGlvbiAoZm4sIGFsdGVyVG91Y2hlZCwgYWx0ZXJFcnJvcnMpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLCBuYW1lID0gX2EubmFtZSwgdmFsaWRhdGVPbkNoYW5nZSA9IF9hLnZhbGlkYXRlT25DaGFuZ2UsIF9iID0gX2EuZm9ybWlrLCBzZXRGb3JtaWtTdGF0ZSA9IF9iLnNldEZvcm1pa1N0YXRlLCB2YWxpZGF0ZUZvcm0gPSBfYi52YWxpZGF0ZUZvcm0sIHZhbHVlcyA9IF9iLnZhbHVlcywgdG91Y2hlZCA9IF9iLnRvdWNoZWQsIGVycm9ycyA9IF9iLmVycm9ycztcbiAgICAgICAgICAgIHNldEZvcm1pa1N0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHsgcmV0dXJuICh0c2xpYl8xLl9fYXNzaWduKHt9LCBwcmV2U3RhdGUsIHsgdmFsdWVzOiBzZXRJbihwcmV2U3RhdGUudmFsdWVzLCBuYW1lLCBmbihnZXRJbih2YWx1ZXMsIG5hbWUpKSksIGVycm9yczogYWx0ZXJFcnJvcnNcbiAgICAgICAgICAgICAgICAgICAgPyBzZXRJbihwcmV2U3RhdGUuZXJyb3JzLCBuYW1lLCBmbihnZXRJbihlcnJvcnMsIG5hbWUpKSlcbiAgICAgICAgICAgICAgICAgICAgOiBwcmV2U3RhdGUuZXJyb3JzLCB0b3VjaGVkOiBhbHRlclRvdWNoZWRcbiAgICAgICAgICAgICAgICAgICAgPyBzZXRJbihwcmV2U3RhdGUudG91Y2hlZCwgbmFtZSwgZm4oZ2V0SW4odG91Y2hlZCwgbmFtZSkpKVxuICAgICAgICAgICAgICAgICAgICA6IHByZXZTdGF0ZS50b3VjaGVkIH0pKTsgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZU9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlRm9ybSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5wdXNoID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMudXBkYXRlQXJyYXlGaWVsZChmdW5jdGlvbiAoYXJyYXkpIHsgcmV0dXJuIChhcnJheSB8fCBbXSkuY29uY2F0KFtjbG9uZURlZXAodmFsdWUpXSk7IH0sIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZVB1c2ggPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnB1c2godmFsdWUpOyB9OyB9O1xuICAgICAgICBfdGhpcy5zd2FwID0gZnVuY3Rpb24gKGluZGV4QSwgaW5kZXhCKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMudXBkYXRlQXJyYXlGaWVsZChmdW5jdGlvbiAoYXJyYXkpIHsgcmV0dXJuIHN3YXAoYXJyYXksIGluZGV4QSwgaW5kZXhCKTsgfSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZVN3YXAgPSBmdW5jdGlvbiAoaW5kZXhBLCBpbmRleEIpIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5zd2FwKGluZGV4QSwgaW5kZXhCKTtcbiAgICAgICAgfTsgfTtcbiAgICAgICAgX3RoaXMubW92ZSA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnVwZGF0ZUFycmF5RmllbGQoZnVuY3Rpb24gKGFycmF5KSB7IHJldHVybiBtb3ZlKGFycmF5LCBmcm9tLCB0byk7IH0sIHRydWUsIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5oYW5kbGVNb3ZlID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5tb3ZlKGZyb20sIHRvKTsgfTsgfTtcbiAgICAgICAgX3RoaXMuaW5zZXJ0ID0gZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnVwZGF0ZUFycmF5RmllbGQoZnVuY3Rpb24gKGFycmF5KSB7IHJldHVybiBpbnNlcnQoYXJyYXksIGluZGV4LCB2YWx1ZSk7IH0sIHRydWUsIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5oYW5kbGVJbnNlcnQgPSBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5pbnNlcnQoaW5kZXgsIHZhbHVlKTsgfTsgfTtcbiAgICAgICAgX3RoaXMucmVwbGFjZSA9IGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy51cGRhdGVBcnJheUZpZWxkKGZ1bmN0aW9uIChhcnJheSkgeyByZXR1cm4gcmVwbGFjZShhcnJheSwgaW5kZXgsIHZhbHVlKTsgfSwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuaGFuZGxlUmVwbGFjZSA9IGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZXBsYWNlKGluZGV4LCB2YWx1ZSk7XG4gICAgICAgIH07IH07XG4gICAgICAgIF90aGlzLnVuc2hpZnQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSAtMTtcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZUFycmF5RmllbGQoZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyciA9IGFycmF5ID8gW3ZhbHVlXS5jb25jYXQoYXJyYXkpIDogW3ZhbHVlXTtcbiAgICAgICAgICAgICAgICBpZiAobGVuZ3RoIDwgMClcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gYXJyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyO1xuICAgICAgICAgICAgfSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5oYW5kbGVVbnNoaWZ0ID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy51bnNoaWZ0KHZhbHVlKTsgfTsgfTtcbiAgICAgICAgX3RoaXMuaGFuZGxlUmVtb3ZlID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5yZW1vdmUoaW5kZXgpOyB9OyB9O1xuICAgICAgICBfdGhpcy5oYW5kbGVQb3AgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5wb3AoKTsgfTsgfTtcbiAgICAgICAgX3RoaXMucmVtb3ZlID0gX3RoaXMucmVtb3ZlLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5wb3AgPSBfdGhpcy5wb3AuYmluZChfdGhpcyk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgRmllbGRBcnJheUlubmVyLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdGhpcy51cGRhdGVBcnJheUZpZWxkKGZ1bmN0aW9uIChhcnJheSkge1xuICAgICAgICAgICAgdmFyIGNvcHkgPSBhcnJheSA/IGFycmF5LnNsaWNlKCkgOiBbXTtcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29weVtpbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihjb3B5LnNwbGljZSkpIHtcbiAgICAgICAgICAgICAgICBjb3B5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgfSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBGaWVsZEFycmF5SW5uZXIucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdGhpcy51cGRhdGVBcnJheUZpZWxkKGZ1bmN0aW9uIChhcnJheSkge1xuICAgICAgICAgICAgdmFyIHRtcCA9IGFycmF5O1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0bXAgJiYgdG1wLnBvcCAmJiB0bXAucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG1wO1xuICAgICAgICB9LCB0cnVlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIEZpZWxkQXJyYXlJbm5lci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJyYXlIZWxwZXJzID0ge1xuICAgICAgICAgICAgcHVzaDogdGhpcy5wdXNoLFxuICAgICAgICAgICAgcG9wOiB0aGlzLnBvcCxcbiAgICAgICAgICAgIHN3YXA6IHRoaXMuc3dhcCxcbiAgICAgICAgICAgIG1vdmU6IHRoaXMubW92ZSxcbiAgICAgICAgICAgIGluc2VydDogdGhpcy5pbnNlcnQsXG4gICAgICAgICAgICByZXBsYWNlOiB0aGlzLnJlcGxhY2UsXG4gICAgICAgICAgICB1bnNoaWZ0OiB0aGlzLnVuc2hpZnQsXG4gICAgICAgICAgICByZW1vdmU6IHRoaXMucmVtb3ZlLFxuICAgICAgICAgICAgaGFuZGxlUHVzaDogdGhpcy5oYW5kbGVQdXNoLFxuICAgICAgICAgICAgaGFuZGxlUG9wOiB0aGlzLmhhbmRsZVBvcCxcbiAgICAgICAgICAgIGhhbmRsZVN3YXA6IHRoaXMuaGFuZGxlU3dhcCxcbiAgICAgICAgICAgIGhhbmRsZU1vdmU6IHRoaXMuaGFuZGxlTW92ZSxcbiAgICAgICAgICAgIGhhbmRsZUluc2VydDogdGhpcy5oYW5kbGVJbnNlcnQsXG4gICAgICAgICAgICBoYW5kbGVSZXBsYWNlOiB0aGlzLmhhbmRsZVJlcGxhY2UsXG4gICAgICAgICAgICBoYW5kbGVVbnNoaWZ0OiB0aGlzLmhhbmRsZVVuc2hpZnQsXG4gICAgICAgICAgICBoYW5kbGVSZW1vdmU6IHRoaXMuaGFuZGxlUmVtb3ZlLFxuICAgICAgICB9O1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBjb21wb25lbnQgPSBfYS5jb21wb25lbnQsIHJlbmRlciA9IF9hLnJlbmRlciwgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbiwgbmFtZSA9IF9hLm5hbWUsIF9iID0gX2EuZm9ybWlrLCBfdmFsaWRhdGUgPSBfYi52YWxpZGF0ZSwgX3ZhbGlkYXRpb25TY2hlbWEgPSBfYi52YWxpZGF0aW9uU2NoZW1hLCByZXN0T2ZGb3JtaWsgPSB0c2xpYl8xLl9fcmVzdChfYiwgW1widmFsaWRhdGVcIiwgXCJ2YWxpZGF0aW9uU2NoZW1hXCJdKTtcbiAgICAgICAgdmFyIHByb3BzID0gdHNsaWJfMS5fX2Fzc2lnbih7fSwgYXJyYXlIZWxwZXJzLCB7IGZvcm06IHJlc3RPZkZvcm1paywgbmFtZTogbmFtZSB9KTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFxuICAgICAgICAgICAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMpXG4gICAgICAgICAgICA6IHJlbmRlclxuICAgICAgICAgICAgICAgID8gcmVuZGVyKHByb3BzKVxuICAgICAgICAgICAgICAgIDogY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgPyB0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY2hpbGRyZW4ocHJvcHMpXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICFpc0VtcHR5Q2hpbGRyZW4oY2hpbGRyZW4pID8gUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbikgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICB9O1xuICAgIEZpZWxkQXJyYXlJbm5lci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHZhbGlkYXRlT25DaGFuZ2U6IHRydWUsXG4gICAgfTtcbiAgICByZXR1cm4gRmllbGRBcnJheUlubmVyO1xufShSZWFjdC5Db21wb25lbnQpKTtcbnZhciBGaWVsZEFycmF5ID0gY29ubmVjdChGaWVsZEFycmF5SW5uZXIpO1xuXG52YXIgRmFzdEZpZWxkSW5uZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEZhc3RGaWVsZElubmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZhc3RGaWVsZElubmVyKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICB2YXIgcmVuZGVyID0gcHJvcHMucmVuZGVyLCBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLCBjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQ7XG4gICAgICAgIHdhcm5pbmcoIShjb21wb25lbnQgJiYgcmVuZGVyKSwgJ1lvdSBzaG91bGQgbm90IHVzZSA8RmFzdEZpZWxkIGNvbXBvbmVudD4gYW5kIDxGYXN0RmllbGQgcmVuZGVyPiBpbiB0aGUgc2FtZSA8RmFzdEZpZWxkPiBjb21wb25lbnQ7IDxGYXN0RmllbGQgY29tcG9uZW50PiB3aWxsIGJlIGlnbm9yZWQnKTtcbiAgICAgICAgd2FybmluZyghKGNvbXBvbmVudCAmJiBjaGlsZHJlbiAmJiBpc0Z1bmN0aW9uKGNoaWxkcmVuKSksICdZb3Ugc2hvdWxkIG5vdCB1c2UgPEZhc3RGaWVsZCBjb21wb25lbnQ+IGFuZCA8RmFzdEZpZWxkIGNoaWxkcmVuPiBhcyBhIGZ1bmN0aW9uIGluIHRoZSBzYW1lIDxGYXN0RmllbGQ+IGNvbXBvbmVudDsgPEZhc3RGaWVsZCBjb21wb25lbnQ+IHdpbGwgYmUgaWdub3JlZC4nKTtcbiAgICAgICAgd2FybmluZyghKHJlbmRlciAmJiBjaGlsZHJlbiAmJiAhaXNFbXB0eUNoaWxkcmVuKGNoaWxkcmVuKSksICdZb3Ugc2hvdWxkIG5vdCB1c2UgPEZhc3RGaWVsZCByZW5kZXI+IGFuZCA8RmFzdEZpZWxkIGNoaWxkcmVuPiBpbiB0aGUgc2FtZSA8RmFzdEZpZWxkPiBjb21wb25lbnQ7IDxGYXN0RmllbGQgY2hpbGRyZW4+IHdpbGwgYmUgaWdub3JlZCcpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEZhc3RGaWVsZElubmVyLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdWxkVXBkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zaG91bGRVcGRhdGUocHJvcHMsIHRoaXMucHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGdldEluKHRoaXMucHJvcHMuZm9ybWlrLnZhbHVlcywgdGhpcy5wcm9wcy5uYW1lKSAhPT1cbiAgICAgICAgICAgIGdldEluKHByb3BzLmZvcm1pay52YWx1ZXMsIHRoaXMucHJvcHMubmFtZSkgfHxcbiAgICAgICAgICAgIGdldEluKHRoaXMucHJvcHMuZm9ybWlrLmVycm9ycywgdGhpcy5wcm9wcy5uYW1lKSAhPT1cbiAgICAgICAgICAgICAgICBnZXRJbihwcm9wcy5mb3JtaWsuZXJyb3JzLCB0aGlzLnByb3BzLm5hbWUpIHx8XG4gICAgICAgICAgICBnZXRJbih0aGlzLnByb3BzLmZvcm1pay50b3VjaGVkLCB0aGlzLnByb3BzLm5hbWUpICE9PVxuICAgICAgICAgICAgICAgIGdldEluKHByb3BzLmZvcm1pay50b3VjaGVkLCB0aGlzLnByb3BzLm5hbWUpIHx8XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnByb3BzKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggfHxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZm9ybWlrLmlzU3VibWl0dGluZyAhPT0gcHJvcHMuZm9ybWlrLmlzU3VibWl0dGluZykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEZhc3RGaWVsZElubmVyLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5mb3JtaWsucmVnaXN0ZXJGaWVsZCh0aGlzLnByb3BzLm5hbWUsIHRoaXMpO1xuICAgIH07XG4gICAgRmFzdEZpZWxkSW5uZXIucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIChwcmV2UHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubmFtZSAhPT0gcHJldlByb3BzLm5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZm9ybWlrLnVucmVnaXN0ZXJGaWVsZChwcmV2UHJvcHMubmFtZSk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZvcm1pay5yZWdpc3RlckZpZWxkKHRoaXMucHJvcHMubmFtZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMudmFsaWRhdGUgIT09IHByZXZQcm9wcy52YWxpZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5mb3JtaWsucmVnaXN0ZXJGaWVsZCh0aGlzLnByb3BzLm5hbWUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBGYXN0RmllbGRJbm5lci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZm9ybWlrLnVucmVnaXN0ZXJGaWVsZCh0aGlzLnByb3BzLm5hbWUpO1xuICAgIH07XG4gICAgRmFzdEZpZWxkSW5uZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgdmFsaWRhdGUgPSBfYS52YWxpZGF0ZSwgbmFtZSA9IF9hLm5hbWUsIHJlbmRlciA9IF9hLnJlbmRlciwgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbiwgX2IgPSBfYS5jb21wb25lbnQsIGNvbXBvbmVudCA9IF9iID09PSB2b2lkIDAgPyAnaW5wdXQnIDogX2IsIGZvcm1payA9IF9hLmZvcm1paywgcHJvcHMgPSB0c2xpYl8xLl9fcmVzdChfYSwgW1widmFsaWRhdGVcIiwgXCJuYW1lXCIsIFwicmVuZGVyXCIsIFwiY2hpbGRyZW5cIiwgXCJjb21wb25lbnRcIiwgXCJmb3JtaWtcIl0pO1xuICAgICAgICB2YXIgX3ZhbGlkYXRlID0gZm9ybWlrLnZhbGlkYXRlLCBfdmFsaWRhdGlvblNjaGVtYSA9IGZvcm1pay52YWxpZGF0aW9uU2NoZW1hLCByZXN0T2ZGb3JtaWsgPSB0c2xpYl8xLl9fcmVzdChmb3JtaWssIFtcInZhbGlkYXRlXCIsIFwidmFsaWRhdGlvblNjaGVtYVwiXSk7XG4gICAgICAgIHZhciBmaWVsZCA9IHtcbiAgICAgICAgICAgIHZhbHVlOiBwcm9wcy50eXBlID09PSAncmFkaW8nIHx8IHByb3BzLnR5cGUgPT09ICdjaGVja2JveCdcbiAgICAgICAgICAgICAgICA/IHByb3BzLnZhbHVlXG4gICAgICAgICAgICAgICAgOiBnZXRJbihmb3JtaWsudmFsdWVzLCBuYW1lKSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBvbkNoYW5nZTogZm9ybWlrLmhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgIG9uQmx1cjogZm9ybWlrLmhhbmRsZUJsdXIsXG4gICAgICAgIH07XG4gICAgICAgIHZhciBiYWcgPSB7IGZpZWxkOiBmaWVsZCwgZm9ybTogcmVzdE9mRm9ybWlrIH07XG4gICAgICAgIGlmIChyZW5kZXIpIHtcbiAgICAgICAgICAgIHJldHVybiByZW5kZXIoYmFnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNGdW5jdGlvbihjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbihiYWcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFyIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsIHJlc3QgPSB0c2xpYl8xLl9fcmVzdChwcm9wcywgW1wiaW5uZXJSZWZcIl0pO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCB0c2xpYl8xLl9fYXNzaWduKHsgcmVmOiBpbm5lclJlZiB9LCBmaWVsZCwgcmVzdCwgeyBjaGlsZHJlbjogY2hpbGRyZW4gfSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgdHNsaWJfMS5fX2Fzc2lnbih7fSwgYmFnLCBwcm9wcywgeyBjaGlsZHJlbjogY2hpbGRyZW4gfSkpO1xuICAgIH07XG4gICAgcmV0dXJuIEZhc3RGaWVsZElubmVyO1xufShSZWFjdC5Db21wb25lbnQpKTtcbnZhciBGYXN0RmllbGQgPSBjb25uZWN0KEZhc3RGaWVsZElubmVyKTtcblxudmFyIEVycm9yTWVzc2FnZUltcGwgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEVycm9yTWVzc2FnZUltcGwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRXJyb3JNZXNzYWdlSW1wbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBFcnJvck1lc3NhZ2VJbXBsLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgaWYgKGdldEluKHRoaXMucHJvcHMuZm9ybWlrLmVycm9ycywgdGhpcy5wcm9wcy5uYW1lKSAhPT1cbiAgICAgICAgICAgIGdldEluKHByb3BzLmZvcm1pay5lcnJvcnMsIHRoaXMucHJvcHMubmFtZSkgfHxcbiAgICAgICAgICAgIGdldEluKHRoaXMucHJvcHMuZm9ybWlrLnRvdWNoZWQsIHRoaXMucHJvcHMubmFtZSkgIT09XG4gICAgICAgICAgICAgICAgZ2V0SW4ocHJvcHMuZm9ybWlrLnRvdWNoZWQsIHRoaXMucHJvcHMubmFtZSkgfHxcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEVycm9yTWVzc2FnZUltcGwucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgY29tcG9uZW50ID0gX2EuY29tcG9uZW50LCBmb3JtaWsgPSBfYS5mb3JtaWssIHJlbmRlciA9IF9hLnJlbmRlciwgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbiwgbmFtZSA9IF9hLm5hbWUsIHJlc3QgPSB0c2xpYl8xLl9fcmVzdChfYSwgW1wiY29tcG9uZW50XCIsIFwiZm9ybWlrXCIsIFwicmVuZGVyXCIsIFwiY2hpbGRyZW5cIiwgXCJuYW1lXCJdKTtcbiAgICAgICAgdmFyIHRvdWNoID0gZ2V0SW4oZm9ybWlrLnRvdWNoZWQsIG5hbWUpO1xuICAgICAgICB2YXIgZXJyb3IgPSBnZXRJbihmb3JtaWsuZXJyb3JzLCBuYW1lKTtcbiAgICAgICAgcmV0dXJuICEhdG91Y2ggJiYgISFlcnJvclxuICAgICAgICAgICAgPyByZW5kZXJcbiAgICAgICAgICAgICAgICA/IGlzRnVuY3Rpb24ocmVuZGVyKSA/IHJlbmRlcihlcnJvcikgOiBudWxsXG4gICAgICAgICAgICAgICAgOiBjaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICA/IGlzRnVuY3Rpb24oY2hpbGRyZW4pID8gY2hpbGRyZW4oZXJyb3IpIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICA6IGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcmVzdCwgZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGVycm9yXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gRXJyb3JNZXNzYWdlSW1wbDtcbn0oUmVhY3QuQ29tcG9uZW50KSk7XG52YXIgRXJyb3JNZXNzYWdlID0gY29ubmVjdChFcnJvck1lc3NhZ2VJbXBsKTtcblxuZXhwb3J0cy5Gb3JtaWsgPSBGb3JtaWs7XG5leHBvcnRzLnl1cFRvRm9ybUVycm9ycyA9IHl1cFRvRm9ybUVycm9ycztcbmV4cG9ydHMudmFsaWRhdGVZdXBTY2hlbWEgPSB2YWxpZGF0ZVl1cFNjaGVtYTtcbmV4cG9ydHMuRmllbGQgPSBGaWVsZDtcbmV4cG9ydHMuRm9ybSA9IEZvcm07XG5leHBvcnRzLndpdGhGb3JtaWsgPSB3aXRoRm9ybWlrO1xuZXhwb3J0cy5tb3ZlID0gbW92ZTtcbmV4cG9ydHMuc3dhcCA9IHN3YXA7XG5leHBvcnRzLmluc2VydCA9IGluc2VydDtcbmV4cG9ydHMucmVwbGFjZSA9IHJlcGxhY2U7XG5leHBvcnRzLkZpZWxkQXJyYXkgPSBGaWVsZEFycmF5O1xuZXhwb3J0cy5nZXRJbiA9IGdldEluO1xuZXhwb3J0cy5zZXRJbiA9IHNldEluO1xuZXhwb3J0cy5zZXROZXN0ZWRPYmplY3RWYWx1ZXMgPSBzZXROZXN0ZWRPYmplY3RWYWx1ZXM7XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuZXhwb3J0cy5pc0ludGVnZXIgPSBpc0ludGVnZXI7XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5leHBvcnRzLmlzTmFOID0gaXNOYU47XG5leHBvcnRzLmlzRW1wdHlDaGlsZHJlbiA9IGlzRW1wdHlDaGlsZHJlbjtcbmV4cG9ydHMuaXNQcm9taXNlID0gaXNQcm9taXNlO1xuZXhwb3J0cy5nZXRBY3RpdmVFbGVtZW50ID0gZ2V0QWN0aXZlRWxlbWVudDtcbmV4cG9ydHMuRmFzdEZpZWxkID0gRmFzdEZpZWxkO1xuZXhwb3J0cy5Gb3JtaWtQcm92aWRlciA9IEZvcm1pa1Byb3ZpZGVyO1xuZXhwb3J0cy5Gb3JtaWtDb25zdW1lciA9IEZvcm1pa0NvbnN1bWVyO1xuZXhwb3J0cy5jb25uZWN0ID0gY29ubmVjdDtcbmV4cG9ydHMuRXJyb3JNZXNzYWdlID0gRXJyb3JNZXNzYWdlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWlrLmNqcy5kZXZlbG9wbWVudC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0J1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZm9ybWlrLmNqcy5wcm9kdWN0aW9uLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZm9ybWlrLmNqcy5kZXZlbG9wbWVudC5qcycpO1xufSIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gICAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gICAgY29udGV4dFR5cGVzOiB0cnVlLFxuICAgIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICAgIG1peGluczogdHJ1ZSxcbiAgICBwcm9wVHlwZXM6IHRydWUsXG4gICAgdHlwZTogdHJ1ZVxufTtcblxudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gICAgbmFtZTogdHJ1ZSxcbiAgICBsZW5ndGg6IHRydWUsXG4gICAgcHJvdG90eXBlOiB0cnVlLFxuICAgIGNhbGxlcjogdHJ1ZSxcbiAgICBjYWxsZWU6IHRydWUsXG4gICAgYXJndW1lbnRzOiB0cnVlLFxuICAgIGFyaXR5OiB0cnVlXG59O1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZiAmJiBnZXRQcm90b3R5cGVPZihPYmplY3QpO1xuXG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gICAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7IC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG5cbiAgICAgICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG4gICAgICAgICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgICAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgIGlmICghUkVBQ1RfU1RBVElDU1trZXldICYmICFLTk9XTl9TVEFUSUNTW2tleV0gJiYgKCFibGFja2xpc3QgfHwgIWJsYWNrbGlzdFtrZXldKSkge1xuICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcbiAgICAgICAgICAgICAgICB0cnkgeyAvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwiLy8gQGZsb3dcbid1c2Ugc3RyaWN0JztcblxudmFyIGtleSA9ICdfX2dsb2JhbF91bmlxdWVfaWRfXyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBnbG9iYWxba2V5XSA9IChnbG9iYWxba2V5XSB8fCAwKSArIDE7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvaW52YXJpYW50LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL2pzb24tdG8tdXJsL2luZGV4LmpzXCIpOyIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGAgZmxhZ3MgZnJvbSB0aGVpciBjb2VyY2VkIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVGbGFncyA9IC9cXHcqJC87XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBzdXBwb3J0ZWQgYnkgYF8uY2xvbmVgLiAqL1xudmFyIGNsb25lYWJsZVRhZ3MgPSB7fTtcbmNsb25lYWJsZVRhZ3NbYXJnc1RhZ10gPSBjbG9uZWFibGVUYWdzW2FycmF5VGFnXSA9XG5jbG9uZWFibGVUYWdzW2FycmF5QnVmZmVyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0YVZpZXdUYWddID1cbmNsb25lYWJsZVRhZ3NbYm9vbFRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGVUYWddID1cbmNsb25lYWJsZVRhZ3NbZmxvYXQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW2Zsb2F0NjRUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW2ludDE2VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbbWFwVGFnXSA9XG5jbG9uZWFibGVUYWdzW251bWJlclRhZ10gPSBjbG9uZWFibGVUYWdzW29iamVjdFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tyZWdleHBUYWddID0gY2xvbmVhYmxlVGFnc1tzZXRUYWddID1cbmNsb25lYWJsZVRhZ3Nbc3RyaW5nVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc3ltYm9sVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQxNlRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xuY2xvbmVhYmxlVGFnc1tlcnJvclRhZ10gPSBjbG9uZWFibGVUYWdzW2Z1bmNUYWddID1cbmNsb25lYWJsZVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKlxuICogQWRkcyB0aGUga2V5LXZhbHVlIGBwYWlyYCB0byBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHBhaXIgVGhlIGtleS12YWx1ZSBwYWlyIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG1hcGAuXG4gKi9cbmZ1bmN0aW9uIGFkZE1hcEVudHJ5KG1hcCwgcGFpcikge1xuICAvLyBEb24ndCByZXR1cm4gYG1hcC5zZXRgIGJlY2F1c2UgaXQncyBub3QgY2hhaW5hYmxlIGluIElFIDExLlxuICBtYXAuc2V0KHBhaXJbMF0sIHBhaXJbMV0pO1xuICByZXR1cm4gbWFwO1xufVxuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byBgc2V0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYHNldGAuXG4gKi9cbmZ1bmN0aW9uIGFkZFNldEVudHJ5KHNldCwgdmFsdWUpIHtcbiAgLy8gRG9uJ3QgcmV0dXJuIGBzZXQuYWRkYCBiZWNhdXNlIGl0J3Mgbm90IGNoYWluYWJsZSBpbiBJRSAxMS5cbiAgc2V0LmFkZCh2YWx1ZSk7XG4gIHJldHVybiBzZXQ7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ucmVkdWNlYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbml0QWNjdW1dIFNwZWNpZnkgdXNpbmcgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YCBhc1xuICogIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBhcnJheVJlZHVjZShhcnJheSwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0pIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG5cbiAgaWYgKGluaXRBY2N1bSAmJiBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGFycmF5WysraW5kZXhdO1xuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCBpbiBJRSA8IDkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0hvc3RPYmplY3QodmFsdWUpIHtcbiAgLy8gTWFueSBob3N0IG9iamVjdHMgYXJlIGBPYmplY3RgIG9iamVjdHMgdGhhdCBjYW4gY29lcmNlIHRvIHN0cmluZ3NcbiAgLy8gZGVzcGl0ZSBoYXZpbmcgaW1wcm9wZXJseSBkZWZpbmVkIGB0b1N0cmluZ2AgbWV0aG9kcy5cbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSAhISh2YWx1ZSArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSxcbiAgICBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgU3ltYm9sID0gcm9vdC5TeW1ib2wsXG4gICAgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheSxcbiAgICBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KSxcbiAgICBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlLFxuICAgIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gICAgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgICBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpLFxuICAgIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyksXG4gICAgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpLFxuICAgIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0JyksXG4gICAgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX19bJ2RlbGV0ZSddKGtleSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgY2FjaGUgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoY2FjaGUgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBjYWNoZS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY2FjaGUgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBjYWNoZS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIC8vIFNhZmFyaSA5IG1ha2VzIGBhcmd1bWVudHMubGVuZ3RoYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICB2YXIgcmVzdWx0ID0gKGlzQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSlcbiAgICA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZylcbiAgICA6IFtdO1xuXG4gIHZhciBsZW5ndGggPSByZXN1bHQubGVuZ3RoLFxuICAgICAgc2tpcEluZGV4ZXMgPSAhIWxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChrZXkgPT0gJ2xlbmd0aCcgfHwgaXNJbmRleChrZXksIGxlbmd0aCkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xvbmVgIGFuZCBgXy5jbG9uZURlZXBgIHdoaWNoIHRyYWNrc1xuICogdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRnVsbF0gU3BlY2lmeSBhIGNsb25lIGluY2x1ZGluZyBzeW1ib2xzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY2xvbmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBba2V5XSBUaGUga2V5IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIHBhcmVudCBvYmplY3Qgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBhbmQgdGhlaXIgY2xvbmUgY291bnRlcnBhcnRzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGNsb25lZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUNsb25lKHZhbHVlLCBpc0RlZXAsIGlzRnVsbCwgY3VzdG9taXplciwga2V5LCBvYmplY3QsIHN0YWNrKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChjdXN0b21pemVyKSB7XG4gICAgcmVzdWx0ID0gb2JqZWN0ID8gY3VzdG9taXplcih2YWx1ZSwga2V5LCBvYmplY3QsIHN0YWNrKSA6IGN1c3RvbWl6ZXIodmFsdWUpO1xuICB9XG4gIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSk7XG4gIGlmIChpc0Fycikge1xuICAgIHJlc3VsdCA9IGluaXRDbG9uZUFycmF5KHZhbHVlKTtcbiAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgcmV0dXJuIGNvcHlBcnJheSh2YWx1ZSwgcmVzdWx0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhZyA9IGdldFRhZyh2YWx1ZSksXG4gICAgICAgIGlzRnVuYyA9IHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG5cbiAgICBpZiAoaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY2xvbmVCdWZmZXIodmFsdWUsIGlzRGVlcCk7XG4gICAgfVxuICAgIGlmICh0YWcgPT0gb2JqZWN0VGFnIHx8IHRhZyA9PSBhcmdzVGFnIHx8IChpc0Z1bmMgJiYgIW9iamVjdCkpIHtcbiAgICAgIGlmIChpc0hvc3RPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lT2JqZWN0KGlzRnVuYyA/IHt9IDogdmFsdWUpO1xuICAgICAgaWYgKCFpc0RlZXApIHtcbiAgICAgICAgcmV0dXJuIGNvcHlTeW1ib2xzKHZhbHVlLCBiYXNlQXNzaWduKHJlc3VsdCwgdmFsdWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjbG9uZWFibGVUYWdzW3RhZ10pIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdCA/IHZhbHVlIDoge307XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBpbml0Q2xvbmVCeVRhZyh2YWx1ZSwgdGFnLCBiYXNlQ2xvbmUsIGlzRGVlcCk7XG4gICAgfVxuICB9XG4gIC8vIENoZWNrIGZvciBjaXJjdWxhciByZWZlcmVuY2VzIGFuZCByZXR1cm4gaXRzIGNvcnJlc3BvbmRpbmcgY2xvbmUuXG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KHZhbHVlKTtcbiAgaWYgKHN0YWNrZWQpIHtcbiAgICByZXR1cm4gc3RhY2tlZDtcbiAgfVxuICBzdGFjay5zZXQodmFsdWUsIHJlc3VsdCk7XG5cbiAgaWYgKCFpc0Fycikge1xuICAgIHZhciBwcm9wcyA9IGlzRnVsbCA/IGdldEFsbEtleXModmFsdWUpIDoga2V5cyh2YWx1ZSk7XG4gIH1cbiAgYXJyYXlFYWNoKHByb3BzIHx8IHZhbHVlLCBmdW5jdGlvbihzdWJWYWx1ZSwga2V5KSB7XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICBrZXkgPSBzdWJWYWx1ZTtcbiAgICAgIHN1YlZhbHVlID0gdmFsdWVba2V5XTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgcG9wdWxhdGUgY2xvbmUgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBhc3NpZ25WYWx1ZShyZXN1bHQsIGtleSwgYmFzZUNsb25lKHN1YlZhbHVlLCBpc0RlZXAsIGlzRnVsbCwgY3VzdG9taXplciwga2V5LCB2YWx1ZSwgc3RhY2spKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY3JlYXRlYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFzc2lnbmluZ1xuICogcHJvcGVydGllcyB0byB0aGUgY3JlYXRlZCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90b3R5cGUgVGhlIG9iamVjdCB0byBpbmhlcml0IGZyb20uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBiYXNlQ3JlYXRlKHByb3RvKSB7XG4gIHJldHVybiBpc09iamVjdChwcm90bykgPyBvYmplY3RDcmVhdGUocHJvdG8pIDoge307XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIHJldHVybiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gKGlzRnVuY3Rpb24odmFsdWUpIHx8IGlzSG9zdE9iamVjdCh2YWx1ZSkpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mICBgYnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQnVmZmVyKGJ1ZmZlciwgaXNEZWVwKSB7XG4gIGlmIChpc0RlZXApIHtcbiAgICByZXR1cm4gYnVmZmVyLnNsaWNlKCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IG5ldyBidWZmZXIuY29uc3RydWN0b3IoYnVmZmVyLmxlbmd0aCk7XG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGRhdGFWaWV3YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFWaWV3IFRoZSBkYXRhIHZpZXcgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIGRhdGEgdmlldy5cbiAqL1xuZnVuY3Rpb24gY2xvbmVEYXRhVmlldyhkYXRhVmlldywgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKGRhdGFWaWV3LmJ1ZmZlcikgOiBkYXRhVmlldy5idWZmZXI7XG4gIHJldHVybiBuZXcgZGF0YVZpZXcuY29uc3RydWN0b3IoYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0LCBkYXRhVmlldy5ieXRlTGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBtYXAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lTWFwKG1hcCwgaXNEZWVwLCBjbG9uZUZ1bmMpIHtcbiAgdmFyIGFycmF5ID0gaXNEZWVwID8gY2xvbmVGdW5jKG1hcFRvQXJyYXkobWFwKSwgdHJ1ZSkgOiBtYXBUb0FycmF5KG1hcCk7XG4gIHJldHVybiBhcnJheVJlZHVjZShhcnJheSwgYWRkTWFwRW50cnksIG5ldyBtYXAuY29uc3RydWN0b3IpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgcmVnZXhwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHJlZ2V4cCBUaGUgcmVnZXhwIHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVSZWdFeHAocmVnZXhwKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgcmVnZXhwLmNvbnN0cnVjdG9yKHJlZ2V4cC5zb3VyY2UsIHJlRmxhZ3MuZXhlYyhyZWdleHApKTtcbiAgcmVzdWx0Lmxhc3RJbmRleCA9IHJlZ2V4cC5sYXN0SW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBzZXRgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc2V0LlxuICovXG5mdW5jdGlvbiBjbG9uZVNldChzZXQsIGlzRGVlcCwgY2xvbmVGdW5jKSB7XG4gIHZhciBhcnJheSA9IGlzRGVlcCA/IGNsb25lRnVuYyhzZXRUb0FycmF5KHNldCksIHRydWUpIDogc2V0VG9BcnJheShzZXQpO1xuICByZXR1cm4gYXJyYXlSZWR1Y2UoYXJyYXksIGFkZFNldEVudHJ5LCBuZXcgc2V0LmNvbnN0cnVjdG9yKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhlIGBzeW1ib2xgIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHN5bWJvbCBUaGUgc3ltYm9sIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBzeW1ib2wgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjbG9uZVN5bWJvbChzeW1ib2wpIHtcbiAgcmV0dXJuIHN5bWJvbFZhbHVlT2YgPyBPYmplY3Qoc3ltYm9sVmFsdWVPZi5jYWxsKHN5bWJvbCkpIDoge307XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGB0eXBlZEFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHR5cGVkQXJyYXkgVGhlIHR5cGVkIGFycmF5IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgb2YgYHNvdXJjZWAgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5PVtdXSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgdG8uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gY29weUFycmF5KHNvdXJjZSwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoO1xuXG4gIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W2luZGV4XSA9IHNvdXJjZVtpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG5cbiAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUgPT09IHVuZGVmaW5lZCA/IHNvdXJjZVtrZXldIDogbmV3VmFsdWUpO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbi8qKlxuICogQ29waWVzIG93biBzeW1ib2wgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHMoc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2wgcHJvcGVydGllcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9IG5hdGl2ZUdldFN5bWJvbHMgPyBvdmVyQXJnKG5hdGl2ZUdldFN5bWJvbHMsIE9iamVjdCkgOiBzdHViQXJyYXk7XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSxcbi8vIGZvciBkYXRhIHZpZXdzIGluIEVkZ2UgPCAxNCwgYW5kIHByb21pc2VzIGluIE5vZGUuanMuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBhcnJheSBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQXJyYXkoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFycmF5LmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgLy8gQWRkIHByb3BlcnRpZXMgYXNzaWduZWQgYnkgYFJlZ0V4cCNleGVjYC5cbiAgaWYgKGxlbmd0aCAmJiB0eXBlb2YgYXJyYXlbMF0gPT0gJ3N0cmluZycgJiYgaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgJ2luZGV4JykpIHtcbiAgICByZXN1bHQuaW5kZXggPSBhcnJheS5pbmRleDtcbiAgICByZXN1bHQuaW5wdXQgPSBhcnJheS5pbnB1dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlKG9iamVjdCkpXG4gICAgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKVxuICAgIDoge307XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lIGJhc2VkIG9uIGl0cyBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY2xvbmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUJ5VGFnKG9iamVjdCwgdGFnLCBjbG9uZUZ1bmMsIGlzRGVlcCkge1xuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lQXJyYXlCdWZmZXIob2JqZWN0KTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3IoK29iamVjdCk7XG5cbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgcmV0dXJuIGNsb25lRGF0YVZpZXcob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBmbG9hdDMyVGFnOiBjYXNlIGZsb2F0NjRUYWc6XG4gICAgY2FzZSBpbnQ4VGFnOiBjYXNlIGludDE2VGFnOiBjYXNlIGludDMyVGFnOlxuICAgIGNhc2UgdWludDhUYWc6IGNhc2UgdWludDhDbGFtcGVkVGFnOiBjYXNlIHVpbnQxNlRhZzogY2FzZSB1aW50MzJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVUeXBlZEFycmF5KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lTWFwKG9iamVjdCwgaXNEZWVwLCBjbG9uZUZ1bmMpO1xuXG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3Iob2JqZWN0KTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lUmVnRXhwKG9iamVjdCk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVNldChvYmplY3QsIGlzRGVlcCwgY2xvbmVGdW5jKTtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgcmV0dXJuIGNsb25lU3ltYm9sKG9iamVjdCk7XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5jbG9uZWAgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgY2xvbmVzIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJlY3Vyc2l2ZWx5IGNsb25lLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGRlZXAgY2xvbmVkIHZhbHVlLlxuICogQHNlZSBfLmNsb25lXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ2EnOiAxIH0sIHsgJ2InOiAyIH1dO1xuICpcbiAqIHZhciBkZWVwID0gXy5jbG9uZURlZXAob2JqZWN0cyk7XG4gKiBjb25zb2xlLmxvZyhkZWVwWzBdID09PSBvYmplY3RzWzBdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGVlcCh2YWx1ZSkge1xuICByZXR1cm4gYmFzZUNsb25lKHZhbHVlLCB0cnVlLCB0cnVlKTtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIHJldHVybiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgKCFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgfHwgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJnc1RhZyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOC05IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURlZXA7XG4iLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUxlYWRpbmdEb3QgPSAvXlxcLi8sXG4gICAgcmVQcm9wTmFtZSA9IC9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwkKSkvZztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDAsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0IGluIElFIDwgOS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSG9zdE9iamVjdCh2YWx1ZSkge1xuICAvLyBNYW55IGhvc3Qgb2JqZWN0cyBhcmUgYE9iamVjdGAgb2JqZWN0cyB0aGF0IGNhbiBjb2VyY2UgdG8gc3RyaW5nc1xuICAvLyBkZXNwaXRlIGhhdmluZyBpbXByb3Blcmx5IGRlZmluZWQgYHRvU3RyaW5nYCBtZXRob2RzLlxuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9ICEhKHZhbHVlICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsXG4gICAgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2wsXG4gICAgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSAoaXNGdW5jdGlvbih2YWx1ZSkgfHwgaXNIb3N0T2JqZWN0KHZhbHVlKSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udG9TdHJpbmdgIHdoaWNoIGRvZXNuJ3QgY29udmVydCBudWxsaXNoXG4gKiB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5ncy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBzeW1ib2xUb1N0cmluZyA/IHN5bWJvbFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG4vKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGEgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBtZW1vaXplKGZ1bmN0aW9uKHN0cmluZykge1xuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuXG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKHJlTGVhZGluZ0RvdC50ZXN0KHN0cmluZykpIHtcbiAgICByZXN1bHQucHVzaCgnJyk7XG4gIH1cbiAgc3RyaW5nLnJlcGxhY2UocmVQcm9wTmFtZSwgZnVuY3Rpb24obWF0Y2gsIG51bWJlciwgcXVvdGUsIHN0cmluZykge1xuICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59KTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGtleSBpZiBpdCdzIG5vdCBhIHN0cmluZyBvciBzeW1ib2wuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7c3RyaW5nfHN5bWJvbH0gUmV0dXJucyB0aGUga2V5LlxuICovXG5mdW5jdGlvbiB0b0tleSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBtZW1vaXplcyB0aGUgcmVzdWx0IG9mIGBmdW5jYC4gSWYgYHJlc29sdmVyYCBpc1xuICogcHJvdmlkZWQsIGl0IGRldGVybWluZXMgdGhlIGNhY2hlIGtleSBmb3Igc3RvcmluZyB0aGUgcmVzdWx0IGJhc2VkIG9uIHRoZVxuICogYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbi4gQnkgZGVmYXVsdCwgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKiBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24gaXMgdXNlZCBhcyB0aGUgbWFwIGNhY2hlIGtleS4gVGhlIGBmdW5jYFxuICogaXMgaW52b2tlZCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKlxuICogKipOb3RlOioqIFRoZSBjYWNoZSBpcyBleHBvc2VkIGFzIHRoZSBgY2FjaGVgIHByb3BlcnR5IG9uIHRoZSBtZW1vaXplZFxuICogZnVuY3Rpb24uIEl0cyBjcmVhdGlvbiBtYXkgYmUgY3VzdG9taXplZCBieSByZXBsYWNpbmcgdGhlIGBfLm1lbW9pemUuQ2FjaGVgXG4gKiBjb25zdHJ1Y3RvciB3aXRoIG9uZSB3aG9zZSBpbnN0YW5jZXMgaW1wbGVtZW50IHRoZVxuICogW2BNYXBgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1tYXAtcHJvdG90eXBlLW9iamVjdClcbiAqIG1ldGhvZCBpbnRlcmZhY2Ugb2YgYGRlbGV0ZWAsIGBnZXRgLCBgaGFzYCwgYW5kIGBzZXRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Jlc29sdmVyXSBUaGUgZnVuY3Rpb24gdG8gcmVzb2x2ZSB0aGUgY2FjaGUga2V5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSwgJ2InOiAyIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdjJzogMywgJ2QnOiA0IH07XG4gKlxuICogdmFyIHZhbHVlcyA9IF8ubWVtb2l6ZShfLnZhbHVlcyk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIHZhbHVlcyhvdGhlcik7XG4gKiAvLyA9PiBbMywgNF1cbiAqXG4gKiBvYmplY3QuYSA9IDI7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIC8vIE1vZGlmeSB0aGUgcmVzdWx0IGNhY2hlLlxuICogdmFsdWVzLmNhY2hlLnNldChvYmplY3QsIFsnYScsICdiJ10pO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddXG4gKlxuICogLy8gUmVwbGFjZSBgXy5tZW1vaXplLkNhY2hlYC5cbiAqIF8ubWVtb2l6ZS5DYWNoZSA9IFdlYWtNYXA7XG4gKi9cbmZ1bmN0aW9uIG1lbW9pemUoZnVuYywgcmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicgfHwgKHJlc29sdmVyICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IChtZW1vaXplLkNhY2hlIHx8IE1hcENhY2hlKTtcbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vLyBBc3NpZ24gY2FjaGUgdG8gYF8ubWVtb2l6ZWAuXG5tZW1vaXplLkNhY2hlID0gTWFwQ2FjaGU7XG5cbi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA4LTkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGlzT2JqZWN0KHZhbHVlKSA/IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvU3RyaW5nKG51bGwpO1xuICogLy8gPT4gJydcbiAqXG4gKiBfLnRvU3RyaW5nKC0wKTtcbiAqIC8vID0+ICctMCdcbiAqXG4gKiBfLnRvU3RyaW5nKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAnMSwyLDMnXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1BhdGgoJ2EuYi5jJyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ11cbiAqXG4gKiBfLnRvUGF0aCgnYVswXS5iLmMnKTtcbiAqIC8vID0+IFsnYScsICcwJywgJ2InLCAnYyddXG4gKi9cbmZ1bmN0aW9uIHRvUGF0aCh2YWx1ZSkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gYXJyYXlNYXAodmFsdWUsIHRvS2V5KTtcbiAgfVxuICByZXR1cm4gaXNTeW1ib2wodmFsdWUpID8gW3ZhbHVlXSA6IGNvcHlBcnJheShzdHJpbmdUb1BhdGgodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1BhdGg7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy9uc2VyaWFsaXplanNvbi9kaXN0L2Nqcy9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy9udmFsLXRpcHB5L2Rpc3QvY2pzL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL3NlcnZlci5qc1wiKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbnZhciBrZXlMaXN0ID0gT2JqZWN0LmtleXM7XG52YXIgaGFzUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGVxdWFsKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuXG4gIHZhciBhcnJBID0gaXNBcnJheShhKVxuICAgICwgYXJyQiA9IGlzQXJyYXkoYilcbiAgICAsIGlcbiAgICAsIGxlbmd0aFxuICAgICwga2V5O1xuXG4gIGlmIChhcnJBICYmIGFyckIpIHtcbiAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICE9IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgaWYgKCFlcXVhbChhW2ldLCBiW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGFyckEgIT0gYXJyQikgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBkYXRlQSA9IGEgaW5zdGFuY2VvZiBEYXRlXG4gICAgLCBkYXRlQiA9IGIgaW5zdGFuY2VvZiBEYXRlO1xuICBpZiAoZGF0ZUEgIT0gZGF0ZUIpIHJldHVybiBmYWxzZTtcbiAgaWYgKGRhdGVBICYmIGRhdGVCKSByZXR1cm4gYS5nZXRUaW1lKCkgPT0gYi5nZXRUaW1lKCk7XG5cbiAgdmFyIHJlZ2V4cEEgPSBhIGluc3RhbmNlb2YgUmVnRXhwXG4gICAgLCByZWdleHBCID0gYiBpbnN0YW5jZW9mIFJlZ0V4cDtcbiAgaWYgKHJlZ2V4cEEgIT0gcmVnZXhwQikgcmV0dXJuIGZhbHNlO1xuICBpZiAocmVnZXhwQSAmJiByZWdleHBCKSByZXR1cm4gYS50b1N0cmluZygpID09IGIudG9TdHJpbmcoKTtcblxuICBpZiAoYSBpbnN0YW5jZW9mIE9iamVjdCAmJiBiIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBrZXlMaXN0KGEpO1xuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuXG4gICAgaWYgKGxlbmd0aCAhPT0ga2V5TGlzdChiKS5sZW5ndGgpXG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICBpZiAoIWhhc1Byb3AuY2FsbChiLCBrZXlzW2ldKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKGtleSA9PT0gJ19vd25lcicgJiYgYS4kJHR5cGVvZiAmJiBhLl9zdG9yZSkge1xuICAgICAgICAvLyBSZWFjdC1zcGVjaWZpYzogYXZvaWQgdHJhdmVyc2luZyBSZWFjdCBlbGVtZW50cycgX293bmVyLlxuICAgICAgICAvLyAgX293bmVyIGNvbnRhaW5zIGNpcmN1bGFyIHJlZmVyZW5jZXNcbiAgICAgICAgLy8gYW5kIGlzIG5vdCBuZWVkZWQgd2hlbiBjb21wYXJpbmcgdGhlIGFjdHVhbCBlbGVtZW50cyAoYW5kIG5vdCB0aGVpciBvd25lcnMpXG4gICAgICAgIC8vIC4kJHR5cGVvZiBhbmQgLl9zdG9yZSBvbiBqdXN0IHJlYXNvbmFibGUgbWFya2VycyBvZiBhIHJlYWN0IGVsZW1lbnRcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBhbGwgb3RoZXIgcHJvcGVydGllcyBzaG91bGQgYmUgdHJhdmVyc2VkIGFzIHVzdWFsXG4gICAgICAgIGlmICghZXF1YWwoYVtrZXldLCBiW2tleV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXhwb3J0ZWRFcXVhbChhLCBiKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVxdWFsKGEsIGIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvci5tZXNzYWdlICYmIGVycm9yLm1lc3NhZ2UubWF0Y2goL3N0YWNrfHJlY3Vyc2lvbi9pKSkge1xuICAgICAgLy8gd2FybiBvbiBjaXJjdWxhciByZWZlcmVuY2VzLCBkb24ndCBjcmFzaFxuICAgICAgLy8gYnJvd3NlcnMgZ2l2ZSB0aGlzIGRpZmZlcmVudCBlcnJvcnMgbmFtZSBhbmQgbWVzc2FnZXM6XG4gICAgICAvLyBjaHJvbWUvc2FmYXJpOiBcIlJhbmdlRXJyb3JcIiwgXCJNYXhpbXVtIGNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiXG4gICAgICAvLyBmaXJlZm94OiBcIkludGVybmFsRXJyb3JcIiwgdG9vIG11Y2ggcmVjdXJzaW9uXCJcbiAgICAgIC8vIGVkZ2U6IFwiRXJyb3JcIiwgXCJPdXQgb2Ygc3RhY2sgc3BhY2VcIlxuICAgICAgY29uc29sZS53YXJuKCdXYXJuaW5nOiByZWFjdC1mYXN0LWNvbXBhcmUgZG9lcyBub3QgaGFuZGxlIGNpcmN1bGFyIHJlZmVyZW5jZXMuJywgZXJyb3IubmFtZSwgZXJyb3IubWVzc2FnZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIHNvbWUgb3RoZXIgZXJyb3IuIHdlIHNob3VsZCBkZWZpbml0ZWx5IGtub3cgYWJvdXQgdGhlc2VcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LWhlbG1ldC9saWIvSGVsbWV0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LXBhZ2luYXRpbmcvZGlzdC9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9saWIvaW5kZXguanNcIik7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoXCJ3YXJuaW5nXCIpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2hpc3RvcnkgPSByZXF1aXJlKFwiaGlzdG9yeVwiKTtcblxudmFyIF9Sb3V0ZXIgPSByZXF1aXJlKFwiLi9Sb3V0ZXJcIik7XG5cbnZhciBfUm91dGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgYSA8Um91dGVyPiB0aGF0IHVzZXMgSFRNTDUgaGlzdG9yeS5cbiAqL1xudmFyIEJyb3dzZXJSb3V0ZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQnJvd3NlclJvdXRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQnJvd3NlclJvdXRlcigpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJyb3dzZXJSb3V0ZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmhpc3RvcnkgPSAoMCwgX2hpc3RvcnkuY3JlYXRlQnJvd3Nlckhpc3RvcnkpKF90aGlzLnByb3BzKSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBCcm93c2VyUm91dGVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghdGhpcy5wcm9wcy5oaXN0b3J5LCBcIjxCcm93c2VyUm91dGVyPiBpZ25vcmVzIHRoZSBoaXN0b3J5IHByb3AuIFRvIHVzZSBhIGN1c3RvbSBoaXN0b3J5LCBcIiArIFwidXNlIGBpbXBvcnQgeyBSb3V0ZXIgfWAgaW5zdGVhZCBvZiBgaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfWAuXCIpO1xuICB9O1xuXG4gIEJyb3dzZXJSb3V0ZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1JvdXRlcjIuZGVmYXVsdCwgeyBoaXN0b3J5OiB0aGlzLmhpc3RvcnksIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNoaWxkcmVuIH0pO1xuICB9O1xuXG4gIHJldHVybiBCcm93c2VyUm91dGVyO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuQnJvd3NlclJvdXRlci5wcm9wVHlwZXMgPSB7XG4gIGJhc2VuYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgZm9yY2VSZWZyZXNoOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGdldFVzZXJDb25maXJtYXRpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAga2V5TGVuZ3RoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEJyb3dzZXJSb3V0ZXI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoXCJ3YXJuaW5nXCIpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2hpc3RvcnkgPSByZXF1aXJlKFwiaGlzdG9yeVwiKTtcblxudmFyIF9Sb3V0ZXIgPSByZXF1aXJlKFwiLi9Sb3V0ZXJcIik7XG5cbnZhciBfUm91dGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgYSA8Um91dGVyPiB0aGF0IHVzZXMgd2luZG93LmxvY2F0aW9uLmhhc2guXG4gKi9cbnZhciBIYXNoUm91dGVyID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEhhc2hSb3V0ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEhhc2hSb3V0ZXIoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIYXNoUm91dGVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5oaXN0b3J5ID0gKDAsIF9oaXN0b3J5LmNyZWF0ZUhhc2hIaXN0b3J5KShfdGhpcy5wcm9wcyksIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgSGFzaFJvdXRlci5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoIXRoaXMucHJvcHMuaGlzdG9yeSwgXCI8SGFzaFJvdXRlcj4gaWdub3JlcyB0aGUgaGlzdG9yeSBwcm9wLiBUbyB1c2UgYSBjdXN0b20gaGlzdG9yeSwgXCIgKyBcInVzZSBgaW1wb3J0IHsgUm91dGVyIH1gIGluc3RlYWQgb2YgYGltcG9ydCB7IEhhc2hSb3V0ZXIgYXMgUm91dGVyIH1gLlwiKTtcbiAgfTtcblxuICBIYXNoUm91dGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Sb3V0ZXIyLmRlZmF1bHQsIHsgaGlzdG9yeTogdGhpcy5oaXN0b3J5LCBjaGlsZHJlbjogdGhpcy5wcm9wcy5jaGlsZHJlbiB9KTtcbiAgfTtcblxuICByZXR1cm4gSGFzaFJvdXRlcjtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbkhhc2hSb3V0ZXIucHJvcFR5cGVzID0ge1xuICBiYXNlbmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGdldFVzZXJDb25maXJtYXRpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgaGFzaFR5cGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoW1wiaGFzaGJhbmdcIiwgXCJub3NsYXNoXCIsIFwic2xhc2hcIl0pLFxuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gSGFzaFJvdXRlcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZShcImludmFyaWFudFwiKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9oaXN0b3J5ID0gcmVxdWlyZShcImhpc3RvcnlcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgaXNNb2RpZmllZEV2ZW50ID0gZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiAhIShldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcbn07XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHJlbmRlcmluZyBhIGhpc3RvcnktYXdhcmUgPGE+LlxuICovXG5cbnZhciBMaW5rID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKExpbmssIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIExpbmsoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaW5rKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5oYW5kbGVDbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2xpY2spIF90aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuXG4gICAgICBpZiAoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgJiYgLy8gb25DbGljayBwcmV2ZW50ZWQgZGVmYXVsdFxuICAgICAgZXZlbnQuYnV0dG9uID09PSAwICYmIC8vIGlnbm9yZSBldmVyeXRoaW5nIGJ1dCBsZWZ0IGNsaWNrc1xuICAgICAgIV90aGlzLnByb3BzLnRhcmdldCAmJiAvLyBsZXQgYnJvd3NlciBoYW5kbGUgXCJ0YXJnZXQ9X2JsYW5rXCIgZXRjLlxuICAgICAgIWlzTW9kaWZpZWRFdmVudChldmVudCkgLy8gaWdub3JlIGNsaWNrcyB3aXRoIG1vZGlmaWVyIGtleXNcbiAgICAgICkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICB2YXIgaGlzdG9yeSA9IF90aGlzLmNvbnRleHQucm91dGVyLmhpc3Rvcnk7XG4gICAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICAgIHJlcGxhY2UgPSBfdGhpcyRwcm9wcy5yZXBsYWNlLFxuICAgICAgICAgICAgICB0byA9IF90aGlzJHByb3BzLnRvO1xuXG5cbiAgICAgICAgICBpZiAocmVwbGFjZSkge1xuICAgICAgICAgICAgaGlzdG9yeS5yZXBsYWNlKHRvKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKHRvKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIExpbmsucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgcmVwbGFjZSA9IF9wcm9wcy5yZXBsYWNlLFxuICAgICAgICB0byA9IF9wcm9wcy50byxcbiAgICAgICAgaW5uZXJSZWYgPSBfcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgW1wicmVwbGFjZVwiLCBcInRvXCIsIFwiaW5uZXJSZWZcIl0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cbiAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodGhpcy5jb250ZXh0LnJvdXRlciwgXCJZb3Ugc2hvdWxkIG5vdCB1c2UgPExpbms+IG91dHNpZGUgYSA8Um91dGVyPlwiKTtcblxuICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0byAhPT0gdW5kZWZpbmVkLCAnWW91IG11c3Qgc3BlY2lmeSB0aGUgXCJ0b1wiIHByb3BlcnR5Jyk7XG5cbiAgICB2YXIgaGlzdG9yeSA9IHRoaXMuY29udGV4dC5yb3V0ZXIuaGlzdG9yeTtcblxuICAgIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/ICgwLCBfaGlzdG9yeS5jcmVhdGVMb2NhdGlvbikodG8sIG51bGwsIG51bGwsIGhpc3RvcnkubG9jYXRpb24pIDogdG87XG5cbiAgICB2YXIgaHJlZiA9IGhpc3RvcnkuY3JlYXRlSHJlZihsb2NhdGlvbik7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgb25DbGljazogdGhpcy5oYW5kbGVDbGljaywgaHJlZjogaHJlZiwgcmVmOiBpbm5lclJlZiB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIExpbms7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5MaW5rLnByb3BUeXBlcyA9IHtcbiAgb25DbGljazogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICB0YXJnZXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICByZXBsYWNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHRvOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgaW5uZXJSZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXSlcbn07XG5MaW5rLmRlZmF1bHRQcm9wcyA9IHtcbiAgcmVwbGFjZTogZmFsc2Vcbn07XG5MaW5rLmNvbnRleHRUeXBlcyA9IHtcbiAgcm91dGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICBoaXN0b3J5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICAgIHB1c2g6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgcmVwbGFjZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBjcmVhdGVIcmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZFxuICAgIH0pLmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IExpbms7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfTWVtb3J5Um91dGVyID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci9NZW1vcnlSb3V0ZXJcIik7XG5cbnZhciBfTWVtb3J5Um91dGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01lbW9yeVJvdXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9NZW1vcnlSb3V0ZXIyLmRlZmF1bHQ7IC8vIFdyaXR0ZW4gaW4gdGhpcyByb3VuZCBhYm91dCB3YXkgZm9yIGJhYmVsLXRyYW5zZm9ybS1pbXBvcnRzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfUm91dGUgPSByZXF1aXJlKFwiLi9Sb3V0ZVwiKTtcblxudmFyIF9Sb3V0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZSk7XG5cbnZhciBfTGluayA9IHJlcXVpcmUoXCIuL0xpbmtcIik7XG5cbnZhciBfTGluazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaW5rKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG4vKipcbiAqIEEgPExpbms+IHdyYXBwZXIgdGhhdCBrbm93cyBpZiBpdCdzIFwiYWN0aXZlXCIgb3Igbm90LlxuICovXG52YXIgTmF2TGluayA9IGZ1bmN0aW9uIE5hdkxpbmsoX3JlZikge1xuICB2YXIgdG8gPSBfcmVmLnRvLFxuICAgICAgZXhhY3QgPSBfcmVmLmV4YWN0LFxuICAgICAgc3RyaWN0ID0gX3JlZi5zdHJpY3QsXG4gICAgICBsb2NhdGlvbiA9IF9yZWYubG9jYXRpb24sXG4gICAgICBhY3RpdmVDbGFzc05hbWUgPSBfcmVmLmFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgYWN0aXZlU3R5bGUgPSBfcmVmLmFjdGl2ZVN0eWxlLFxuICAgICAgc3R5bGUgPSBfcmVmLnN0eWxlLFxuICAgICAgZ2V0SXNBY3RpdmUgPSBfcmVmLmlzQWN0aXZlLFxuICAgICAgYXJpYUN1cnJlbnQgPSBfcmVmW1wiYXJpYS1jdXJyZW50XCJdLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJ0b1wiLCBcImV4YWN0XCIsIFwic3RyaWN0XCIsIFwibG9jYXRpb25cIiwgXCJhY3RpdmVDbGFzc05hbWVcIiwgXCJjbGFzc05hbWVcIiwgXCJhY3RpdmVTdHlsZVwiLCBcInN0eWxlXCIsIFwiaXNBY3RpdmVcIiwgXCJhcmlhLWN1cnJlbnRcIl0pO1xuXG4gIHZhciBwYXRoID0gKHR5cGVvZiB0byA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHRvKSkgPT09IFwib2JqZWN0XCIgPyB0by5wYXRobmFtZSA6IHRvO1xuXG4gIC8vIFJlZ2V4IHRha2VuIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9waWxsYXJqcy9wYXRoLXRvLXJlZ2V4cC9ibG9iL21hc3Rlci9pbmRleC5qcyNMMjAyXG4gIHZhciBlc2NhcGVkUGF0aCA9IHBhdGggJiYgcGF0aC5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Sb3V0ZTIuZGVmYXVsdCwge1xuICAgIHBhdGg6IGVzY2FwZWRQYXRoLFxuICAgIGV4YWN0OiBleGFjdCxcbiAgICBzdHJpY3Q6IHN0cmljdCxcbiAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgY2hpbGRyZW46IGZ1bmN0aW9uIGNoaWxkcmVuKF9yZWYyKSB7XG4gICAgICB2YXIgbG9jYXRpb24gPSBfcmVmMi5sb2NhdGlvbixcbiAgICAgICAgICBtYXRjaCA9IF9yZWYyLm1hdGNoO1xuXG4gICAgICB2YXIgaXNBY3RpdmUgPSAhIShnZXRJc0FjdGl2ZSA/IGdldElzQWN0aXZlKG1hdGNoLCBsb2NhdGlvbikgOiBtYXRjaCk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfTGluazIuZGVmYXVsdCwgX2V4dGVuZHMoe1xuICAgICAgICB0bzogdG8sXG4gICAgICAgIGNsYXNzTmFtZTogaXNBY3RpdmUgPyBbY2xhc3NOYW1lLCBhY3RpdmVDbGFzc05hbWVdLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9KS5qb2luKFwiIFwiKSA6IGNsYXNzTmFtZSxcbiAgICAgICAgc3R5bGU6IGlzQWN0aXZlID8gX2V4dGVuZHMoe30sIHN0eWxlLCBhY3RpdmVTdHlsZSkgOiBzdHlsZSxcbiAgICAgICAgXCJhcmlhLWN1cnJlbnRcIjogaXNBY3RpdmUgJiYgYXJpYUN1cnJlbnQgfHwgbnVsbFxuICAgICAgfSwgcmVzdCkpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5OYXZMaW5rLnByb3BUeXBlcyA9IHtcbiAgdG86IF9MaW5rMi5kZWZhdWx0LnByb3BUeXBlcy50byxcbiAgZXhhY3Q6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgc3RyaWN0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGxvY2F0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgYWN0aXZlQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgYWN0aXZlU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGlzQWN0aXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIFwiYXJpYS1jdXJyZW50XCI6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoW1wicGFnZVwiLCBcInN0ZXBcIiwgXCJsb2NhdGlvblwiLCBcImRhdGVcIiwgXCJ0aW1lXCIsIFwidHJ1ZVwiXSlcbn07XG5cbk5hdkxpbmsuZGVmYXVsdFByb3BzID0ge1xuICBhY3RpdmVDbGFzc05hbWU6IFwiYWN0aXZlXCIsXG4gIFwiYXJpYS1jdXJyZW50XCI6IFwicGFnZVwiXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBOYXZMaW5rOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX1Byb21wdCA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXIvUHJvbXB0XCIpO1xuXG52YXIgX1Byb21wdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qcm9tcHQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfUHJvbXB0Mi5kZWZhdWx0OyAvLyBXcml0dGVuIGluIHRoaXMgcm91bmQgYWJvdXQgd2F5IGZvciBiYWJlbC10cmFuc2Zvcm0taW1wb3J0cyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX1JlZGlyZWN0ID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci9SZWRpcmVjdFwiKTtcblxudmFyIF9SZWRpcmVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZWRpcmVjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9SZWRpcmVjdDIuZGVmYXVsdDsgLy8gV3JpdHRlbiBpbiB0aGlzIHJvdW5kIGFib3V0IHdheSBmb3IgYmFiZWwtdHJhbnNmb3JtLWltcG9ydHMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9Sb3V0ZSA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXIvUm91dGVcIik7XG5cbnZhciBfUm91dGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm91dGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfUm91dGUyLmRlZmF1bHQ7IC8vIFdyaXR0ZW4gaW4gdGhpcyByb3VuZCBhYm91dCB3YXkgZm9yIGJhYmVsLXRyYW5zZm9ybS1pbXBvcnRzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfUm91dGVyID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci9Sb3V0ZXJcIik7XG5cbnZhciBfUm91dGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9Sb3V0ZXIyLmRlZmF1bHQ7IC8vIFdyaXR0ZW4gaW4gdGhpcyByb3VuZCBhYm91dCB3YXkgZm9yIGJhYmVsLXRyYW5zZm9ybS1pbXBvcnRzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfU3RhdGljUm91dGVyID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci9TdGF0aWNSb3V0ZXJcIik7XG5cbnZhciBfU3RhdGljUm91dGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0YXRpY1JvdXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9TdGF0aWNSb3V0ZXIyLmRlZmF1bHQ7IC8vIFdyaXR0ZW4gaW4gdGhpcyByb3VuZCBhYm91dCB3YXkgZm9yIGJhYmVsLXRyYW5zZm9ybS1pbXBvcnRzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfU3dpdGNoID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci9Td2l0Y2hcIik7XG5cbnZhciBfU3dpdGNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N3aXRjaCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9Td2l0Y2gyLmRlZmF1bHQ7IC8vIFdyaXR0ZW4gaW4gdGhpcyByb3VuZCBhYm91dCB3YXkgZm9yIGJhYmVsLXRyYW5zZm9ybS1pbXBvcnRzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZ2VuZXJhdGVQYXRoID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci9nZW5lcmF0ZVBhdGhcIik7XG5cbnZhciBfZ2VuZXJhdGVQYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dlbmVyYXRlUGF0aCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9nZW5lcmF0ZVBhdGgyLmRlZmF1bHQ7IC8vIFdyaXR0ZW4gaW4gdGhpcyByb3VuZCBhYm91dCB3YXkgZm9yIGJhYmVsLXRyYW5zZm9ybS1pbXBvcnRzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLndpdGhSb3V0ZXIgPSBleHBvcnRzLm1hdGNoUGF0aCA9IGV4cG9ydHMuZ2VuZXJhdGVQYXRoID0gZXhwb3J0cy5Td2l0Y2ggPSBleHBvcnRzLlN0YXRpY1JvdXRlciA9IGV4cG9ydHMuUm91dGVyID0gZXhwb3J0cy5Sb3V0ZSA9IGV4cG9ydHMuUmVkaXJlY3QgPSBleHBvcnRzLlByb21wdCA9IGV4cG9ydHMuTmF2TGluayA9IGV4cG9ydHMuTWVtb3J5Um91dGVyID0gZXhwb3J0cy5MaW5rID0gZXhwb3J0cy5IYXNoUm91dGVyID0gZXhwb3J0cy5Ccm93c2VyUm91dGVyID0gdW5kZWZpbmVkO1xuXG52YXIgX0Jyb3dzZXJSb3V0ZXIyID0gcmVxdWlyZShcIi4vQnJvd3NlclJvdXRlclwiKTtcblxudmFyIF9Ccm93c2VyUm91dGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jyb3dzZXJSb3V0ZXIyKTtcblxudmFyIF9IYXNoUm91dGVyMiA9IHJlcXVpcmUoXCIuL0hhc2hSb3V0ZXJcIik7XG5cbnZhciBfSGFzaFJvdXRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9IYXNoUm91dGVyMik7XG5cbnZhciBfTGluazIgPSByZXF1aXJlKFwiLi9MaW5rXCIpO1xuXG52YXIgX0xpbmszID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGluazIpO1xuXG52YXIgX01lbW9yeVJvdXRlcjIgPSByZXF1aXJlKFwiLi9NZW1vcnlSb3V0ZXJcIik7XG5cbnZhciBfTWVtb3J5Um91dGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01lbW9yeVJvdXRlcjIpO1xuXG52YXIgX05hdkxpbmsyID0gcmVxdWlyZShcIi4vTmF2TGlua1wiKTtcblxudmFyIF9OYXZMaW5rMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05hdkxpbmsyKTtcblxudmFyIF9Qcm9tcHQyID0gcmVxdWlyZShcIi4vUHJvbXB0XCIpO1xuXG52YXIgX1Byb21wdDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qcm9tcHQyKTtcblxudmFyIF9SZWRpcmVjdDIgPSByZXF1aXJlKFwiLi9SZWRpcmVjdFwiKTtcblxudmFyIF9SZWRpcmVjdDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZWRpcmVjdDIpO1xuXG52YXIgX1JvdXRlMiA9IHJlcXVpcmUoXCIuL1JvdXRlXCIpO1xuXG52YXIgX1JvdXRlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRlMik7XG5cbnZhciBfUm91dGVyMiA9IHJlcXVpcmUoXCIuL1JvdXRlclwiKTtcblxudmFyIF9Sb3V0ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm91dGVyMik7XG5cbnZhciBfU3RhdGljUm91dGVyMiA9IHJlcXVpcmUoXCIuL1N0YXRpY1JvdXRlclwiKTtcblxudmFyIF9TdGF0aWNSb3V0ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3RhdGljUm91dGVyMik7XG5cbnZhciBfU3dpdGNoMiA9IHJlcXVpcmUoXCIuL1N3aXRjaFwiKTtcblxudmFyIF9Td2l0Y2gzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3dpdGNoMik7XG5cbnZhciBfZ2VuZXJhdGVQYXRoMiA9IHJlcXVpcmUoXCIuL2dlbmVyYXRlUGF0aFwiKTtcblxudmFyIF9nZW5lcmF0ZVBhdGgzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2VuZXJhdGVQYXRoMik7XG5cbnZhciBfbWF0Y2hQYXRoMiA9IHJlcXVpcmUoXCIuL21hdGNoUGF0aFwiKTtcblxudmFyIF9tYXRjaFBhdGgzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWF0Y2hQYXRoMik7XG5cbnZhciBfd2l0aFJvdXRlcjIgPSByZXF1aXJlKFwiLi93aXRoUm91dGVyXCIpO1xuXG52YXIgX3dpdGhSb3V0ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2l0aFJvdXRlcjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLkJyb3dzZXJSb3V0ZXIgPSBfQnJvd3NlclJvdXRlcjMuZGVmYXVsdDtcbmV4cG9ydHMuSGFzaFJvdXRlciA9IF9IYXNoUm91dGVyMy5kZWZhdWx0O1xuZXhwb3J0cy5MaW5rID0gX0xpbmszLmRlZmF1bHQ7XG5leHBvcnRzLk1lbW9yeVJvdXRlciA9IF9NZW1vcnlSb3V0ZXIzLmRlZmF1bHQ7XG5leHBvcnRzLk5hdkxpbmsgPSBfTmF2TGluazMuZGVmYXVsdDtcbmV4cG9ydHMuUHJvbXB0ID0gX1Byb21wdDMuZGVmYXVsdDtcbmV4cG9ydHMuUmVkaXJlY3QgPSBfUmVkaXJlY3QzLmRlZmF1bHQ7XG5leHBvcnRzLlJvdXRlID0gX1JvdXRlMy5kZWZhdWx0O1xuZXhwb3J0cy5Sb3V0ZXIgPSBfUm91dGVyMy5kZWZhdWx0O1xuZXhwb3J0cy5TdGF0aWNSb3V0ZXIgPSBfU3RhdGljUm91dGVyMy5kZWZhdWx0O1xuZXhwb3J0cy5Td2l0Y2ggPSBfU3dpdGNoMy5kZWZhdWx0O1xuZXhwb3J0cy5nZW5lcmF0ZVBhdGggPSBfZ2VuZXJhdGVQYXRoMy5kZWZhdWx0O1xuZXhwb3J0cy5tYXRjaFBhdGggPSBfbWF0Y2hQYXRoMy5kZWZhdWx0O1xuZXhwb3J0cy53aXRoUm91dGVyID0gX3dpdGhSb3V0ZXIzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfbWF0Y2hQYXRoID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci9tYXRjaFBhdGhcIik7XG5cbnZhciBfbWF0Y2hQYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hdGNoUGF0aCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9tYXRjaFBhdGgyLmRlZmF1bHQ7IC8vIFdyaXR0ZW4gaW4gdGhpcyByb3VuZCBhYm91dCB3YXkgZm9yIGJhYmVsLXRyYW5zZm9ybS1pbXBvcnRzIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGNhblVzZURPTSA9IGV4cG9ydHMuY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxudmFyIGFkZEV2ZW50TGlzdGVuZXIgPSBleHBvcnRzLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50LCBsaXN0ZW5lcikge1xuICByZXR1cm4gbm9kZS5hZGRFdmVudExpc3RlbmVyID8gbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgZmFsc2UpIDogbm9kZS5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcbn07XG5cbnZhciByZW1vdmVFdmVudExpc3RlbmVyID0gZXhwb3J0cy5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudCwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA/IG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGZhbHNlKSA6IG5vZGUuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBsaXN0ZW5lcik7XG59O1xuXG52YXIgZ2V0Q29uZmlybWF0aW9uID0gZXhwb3J0cy5nZXRDb25maXJtYXRpb24gPSBmdW5jdGlvbiBnZXRDb25maXJtYXRpb24obWVzc2FnZSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIGNhbGxiYWNrKHdpbmRvdy5jb25maXJtKG1lc3NhZ2UpKTtcbn07IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tYWxlcnRcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIEhUTUw1IGhpc3RvcnkgQVBJIGlzIHN1cHBvcnRlZC4gVGFrZW4gZnJvbSBNb2Rlcm5penIuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvZmVhdHVyZS1kZXRlY3RzL2hpc3RvcnkuanNcbiAqIGNoYW5nZWQgdG8gYXZvaWQgZmFsc2UgbmVnYXRpdmVzIGZvciBXaW5kb3dzIFBob25lczogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3Qtcm91dGVyL2lzc3Vlcy81ODZcbiAqL1xudmFyIHN1cHBvcnRzSGlzdG9yeSA9IGV4cG9ydHMuc3VwcG9ydHNIaXN0b3J5ID0gZnVuY3Rpb24gc3VwcG9ydHNIaXN0b3J5KCkge1xuICB2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuICBpZiAoKHVhLmluZGV4T2YoJ0FuZHJvaWQgMi4nKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignQW5kcm9pZCA0LjAnKSAhPT0gLTEpICYmIHVhLmluZGV4T2YoJ01vYmlsZSBTYWZhcmknKSAhPT0gLTEgJiYgdWEuaW5kZXhPZignQ2hyb21lJykgPT09IC0xICYmIHVhLmluZGV4T2YoJ1dpbmRvd3MgUGhvbmUnKSA9PT0gLTEpIHJldHVybiBmYWxzZTtcblxuICByZXR1cm4gd2luZG93Lmhpc3RvcnkgJiYgJ3B1c2hTdGF0ZScgaW4gd2luZG93Lmhpc3Rvcnk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBicm93c2VyIGZpcmVzIHBvcHN0YXRlIG9uIGhhc2ggY2hhbmdlLlxuICogSUUxMCBhbmQgSUUxMSBkbyBub3QuXG4gKi9cbnZhciBzdXBwb3J0c1BvcFN0YXRlT25IYXNoQ2hhbmdlID0gZXhwb3J0cy5zdXBwb3J0c1BvcFN0YXRlT25IYXNoQ2hhbmdlID0gZnVuY3Rpb24gc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSgpIHtcbiAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQnKSA9PT0gLTE7XG59O1xuXG4vKipcbiAqIFJldHVybnMgZmFsc2UgaWYgdXNpbmcgZ28obikgd2l0aCBoYXNoIGhpc3RvcnkgY2F1c2VzIGEgZnVsbCBwYWdlIHJlbG9hZC5cbiAqL1xudmFyIHN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoID0gZXhwb3J0cy5zdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCA9IGZ1bmN0aW9uIHN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoKCkge1xuICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpID09PSAtMTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGEgZ2l2ZW4gcG9wc3RhdGUgZXZlbnQgaXMgYW4gZXh0cmFuZW91cyBXZWJLaXQgZXZlbnQuXG4gKiBBY2NvdW50cyBmb3IgdGhlIGZhY3QgdGhhdCBDaHJvbWUgb24gaU9TIGZpcmVzIHJlYWwgcG9wc3RhdGUgZXZlbnRzXG4gKiBjb250YWluaW5nIHVuZGVmaW5lZCBzdGF0ZSB3aGVuIHByZXNzaW5nIHRoZSBiYWNrIGJ1dHRvbi5cbiAqL1xudmFyIGlzRXh0cmFuZW91c1BvcHN0YXRlRXZlbnQgPSBleHBvcnRzLmlzRXh0cmFuZW91c1BvcHN0YXRlRXZlbnQgPSBmdW5jdGlvbiBpc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiBldmVudC5zdGF0ZSA9PT0gdW5kZWZpbmVkICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQ3JpT1MnKSA9PT0gLTE7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMubG9jYXRpb25zQXJlRXF1YWwgPSBleHBvcnRzLmNyZWF0ZUxvY2F0aW9uID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3Jlc29sdmVQYXRobmFtZSA9IHJlcXVpcmUoJ3Jlc29sdmUtcGF0aG5hbWUnKTtcblxudmFyIF9yZXNvbHZlUGF0aG5hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVzb2x2ZVBhdGhuYW1lKTtcblxudmFyIF92YWx1ZUVxdWFsID0gcmVxdWlyZSgndmFsdWUtZXF1YWwnKTtcblxudmFyIF92YWx1ZUVxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlRXF1YWwpO1xuXG52YXIgX1BhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjcmVhdGVMb2NhdGlvbiA9IGV4cG9ydHMuY3JlYXRlTG9jYXRpb24gPSBmdW5jdGlvbiBjcmVhdGVMb2NhdGlvbihwYXRoLCBzdGF0ZSwga2V5LCBjdXJyZW50TG9jYXRpb24pIHtcbiAgdmFyIGxvY2F0aW9uID0gdm9pZCAwO1xuICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gVHdvLWFyZyBmb3JtOiBwdXNoKHBhdGgsIHN0YXRlKVxuICAgIGxvY2F0aW9uID0gKDAsIF9QYXRoVXRpbHMucGFyc2VQYXRoKShwYXRoKTtcbiAgICBsb2NhdGlvbi5zdGF0ZSA9IHN0YXRlO1xuICB9IGVsc2Uge1xuICAgIC8vIE9uZS1hcmcgZm9ybTogcHVzaChsb2NhdGlvbilcbiAgICBsb2NhdGlvbiA9IF9leHRlbmRzKHt9LCBwYXRoKTtcblxuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gdW5kZWZpbmVkKSBsb2NhdGlvbi5wYXRobmFtZSA9ICcnO1xuXG4gICAgaWYgKGxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgaWYgKGxvY2F0aW9uLnNlYXJjaC5jaGFyQXQoMCkgIT09ICc/JykgbG9jYXRpb24uc2VhcmNoID0gJz8nICsgbG9jYXRpb24uc2VhcmNoO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbi5zZWFyY2ggPSAnJztcbiAgICB9XG5cbiAgICBpZiAobG9jYXRpb24uaGFzaCkge1xuICAgICAgaWYgKGxvY2F0aW9uLmhhc2guY2hhckF0KDApICE9PSAnIycpIGxvY2F0aW9uLmhhc2ggPSAnIycgKyBsb2NhdGlvbi5oYXNoO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlICE9PSB1bmRlZmluZWQgJiYgbG9jYXRpb24uc3RhdGUgPT09IHVuZGVmaW5lZCkgbG9jYXRpb24uc3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgbG9jYXRpb24ucGF0aG5hbWUgPSBkZWNvZGVVUkkobG9jYXRpb24ucGF0aG5hbWUpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBVUklFcnJvcikge1xuICAgICAgdGhyb3cgbmV3IFVSSUVycm9yKCdQYXRobmFtZSBcIicgKyBsb2NhdGlvbi5wYXRobmFtZSArICdcIiBjb3VsZCBub3QgYmUgZGVjb2RlZC4gJyArICdUaGlzIGlzIGxpa2VseSBjYXVzZWQgYnkgYW4gaW52YWxpZCBwZXJjZW50LWVuY29kaW5nLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChrZXkpIGxvY2F0aW9uLmtleSA9IGtleTtcblxuICBpZiAoY3VycmVudExvY2F0aW9uKSB7XG4gICAgLy8gUmVzb2x2ZSBpbmNvbXBsZXRlL3JlbGF0aXZlIHBhdGhuYW1lIHJlbGF0aXZlIHRvIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgaWYgKCFsb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPSBjdXJyZW50TG9jYXRpb24ucGF0aG5hbWU7XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbi5wYXRobmFtZS5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPSAoMCwgX3Jlc29sdmVQYXRobmFtZTIuZGVmYXVsdCkobG9jYXRpb24ucGF0aG5hbWUsIGN1cnJlbnRMb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIFdoZW4gdGhlcmUgaXMgbm8gcHJpb3IgbG9jYXRpb24gYW5kIHBhdGhuYW1lIGlzIGVtcHR5LCBzZXQgaXQgdG8gL1xuICAgIGlmICghbG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gJy8nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsb2NhdGlvbjtcbn07XG5cbnZhciBsb2NhdGlvbnNBcmVFcXVhbCA9IGV4cG9ydHMubG9jYXRpb25zQXJlRXF1YWwgPSBmdW5jdGlvbiBsb2NhdGlvbnNBcmVFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhLnBhdGhuYW1lID09PSBiLnBhdGhuYW1lICYmIGEuc2VhcmNoID09PSBiLnNlYXJjaCAmJiBhLmhhc2ggPT09IGIuaGFzaCAmJiBhLmtleSA9PT0gYi5rZXkgJiYgKDAsIF92YWx1ZUVxdWFsMi5kZWZhdWx0KShhLnN0YXRlLCBiLnN0YXRlKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGFkZExlYWRpbmdTbGFzaCA9IGV4cG9ydHMuYWRkTGVhZGluZ1NsYXNoID0gZnVuY3Rpb24gYWRkTGVhZGluZ1NsYXNoKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLycgPyBwYXRoIDogJy8nICsgcGF0aDtcbn07XG5cbnZhciBzdHJpcExlYWRpbmdTbGFzaCA9IGV4cG9ydHMuc3RyaXBMZWFkaW5nU2xhc2ggPSBmdW5jdGlvbiBzdHJpcExlYWRpbmdTbGFzaChwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nID8gcGF0aC5zdWJzdHIoMSkgOiBwYXRoO1xufTtcblxudmFyIGhhc0Jhc2VuYW1lID0gZXhwb3J0cy5oYXNCYXNlbmFtZSA9IGZ1bmN0aW9uIGhhc0Jhc2VuYW1lKHBhdGgsIHByZWZpeCkge1xuICByZXR1cm4gbmV3IFJlZ0V4cCgnXicgKyBwcmVmaXggKyAnKFxcXFwvfFxcXFw/fCN8JCknLCAnaScpLnRlc3QocGF0aCk7XG59O1xuXG52YXIgc3RyaXBCYXNlbmFtZSA9IGV4cG9ydHMuc3RyaXBCYXNlbmFtZSA9IGZ1bmN0aW9uIHN0cmlwQmFzZW5hbWUocGF0aCwgcHJlZml4KSB7XG4gIHJldHVybiBoYXNCYXNlbmFtZShwYXRoLCBwcmVmaXgpID8gcGF0aC5zdWJzdHIocHJlZml4Lmxlbmd0aCkgOiBwYXRoO1xufTtcblxudmFyIHN0cmlwVHJhaWxpbmdTbGFzaCA9IGV4cG9ydHMuc3RyaXBUcmFpbGluZ1NsYXNoID0gZnVuY3Rpb24gc3RyaXBUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KHBhdGgubGVuZ3RoIC0gMSkgPT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcbn07XG5cbnZhciBwYXJzZVBhdGggPSBleHBvcnRzLnBhcnNlUGF0aCA9IGZ1bmN0aW9uIHBhcnNlUGF0aChwYXRoKSB7XG4gIHZhciBwYXRobmFtZSA9IHBhdGggfHwgJy8nO1xuICB2YXIgc2VhcmNoID0gJyc7XG4gIHZhciBoYXNoID0gJyc7XG5cbiAgdmFyIGhhc2hJbmRleCA9IHBhdGhuYW1lLmluZGV4T2YoJyMnKTtcbiAgaWYgKGhhc2hJbmRleCAhPT0gLTEpIHtcbiAgICBoYXNoID0gcGF0aG5hbWUuc3Vic3RyKGhhc2hJbmRleCk7XG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5zdWJzdHIoMCwgaGFzaEluZGV4KTtcbiAgfVxuXG4gIHZhciBzZWFyY2hJbmRleCA9IHBhdGhuYW1lLmluZGV4T2YoJz8nKTtcbiAgaWYgKHNlYXJjaEluZGV4ICE9PSAtMSkge1xuICAgIHNlYXJjaCA9IHBhdGhuYW1lLnN1YnN0cihzZWFyY2hJbmRleCk7XG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5zdWJzdHIoMCwgc2VhcmNoSW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZTogcGF0aG5hbWUsXG4gICAgc2VhcmNoOiBzZWFyY2ggPT09ICc/JyA/ICcnIDogc2VhcmNoLFxuICAgIGhhc2g6IGhhc2ggPT09ICcjJyA/ICcnIDogaGFzaFxuICB9O1xufTtcblxudmFyIGNyZWF0ZVBhdGggPSBleHBvcnRzLmNyZWF0ZVBhdGggPSBmdW5jdGlvbiBjcmVhdGVQYXRoKGxvY2F0aW9uKSB7XG4gIHZhciBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgc2VhcmNoID0gbG9jYXRpb24uc2VhcmNoLFxuICAgICAgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XG5cblxuICB2YXIgcGF0aCA9IHBhdGhuYW1lIHx8ICcvJztcblxuICBpZiAoc2VhcmNoICYmIHNlYXJjaCAhPT0gJz8nKSBwYXRoICs9IHNlYXJjaC5jaGFyQXQoMCkgPT09ICc/JyA/IHNlYXJjaCA6ICc/JyArIHNlYXJjaDtcblxuICBpZiAoaGFzaCAmJiBoYXNoICE9PSAnIycpIHBhdGggKz0gaGFzaC5jaGFyQXQoMCkgPT09ICcjJyA/IGhhc2ggOiAnIycgKyBoYXNoO1xuXG4gIHJldHVybiBwYXRoO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfTG9jYXRpb25VdGlscyA9IHJlcXVpcmUoJy4vTG9jYXRpb25VdGlscycpO1xuXG52YXIgX1BhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbnZhciBfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIgPSByZXF1aXJlKCcuL2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyJyk7XG5cbnZhciBfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIpO1xuXG52YXIgX0RPTVV0aWxzID0gcmVxdWlyZSgnLi9ET01VdGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgUG9wU3RhdGVFdmVudCA9ICdwb3BzdGF0ZSc7XG52YXIgSGFzaENoYW5nZUV2ZW50ID0gJ2hhc2hjaGFuZ2UnO1xuXG52YXIgZ2V0SGlzdG9yeVN0YXRlID0gZnVuY3Rpb24gZ2V0SGlzdG9yeVN0YXRlKCkge1xuICB0cnkge1xuICAgIHJldHVybiB3aW5kb3cuaGlzdG9yeS5zdGF0ZSB8fCB7fTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIElFIDExIHNvbWV0aW1lcyB0aHJvd3Mgd2hlbiBhY2Nlc3Npbmcgd2luZG93Lmhpc3Rvcnkuc3RhdGVcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL1JlYWN0VHJhaW5pbmcvaGlzdG9yeS9wdWxsLzI4OVxuICAgIHJldHVybiB7fTtcbiAgfVxufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGlzdG9yeSBvYmplY3QgdGhhdCB1c2VzIHRoZSBIVE1MNSBoaXN0b3J5IEFQSSBpbmNsdWRpbmdcbiAqIHB1c2hTdGF0ZSwgcmVwbGFjZVN0YXRlLCBhbmQgdGhlIHBvcHN0YXRlIGV2ZW50LlxuICovXG52YXIgY3JlYXRlQnJvd3Nlckhpc3RvcnkgPSBmdW5jdGlvbiBjcmVhdGVCcm93c2VySGlzdG9yeSgpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoX0RPTVV0aWxzLmNhblVzZURPTSwgJ0Jyb3dzZXIgaGlzdG9yeSBuZWVkcyBhIERPTScpO1xuXG4gIHZhciBnbG9iYWxIaXN0b3J5ID0gd2luZG93Lmhpc3Rvcnk7XG4gIHZhciBjYW5Vc2VIaXN0b3J5ID0gKDAsIF9ET01VdGlscy5zdXBwb3J0c0hpc3RvcnkpKCk7XG4gIHZhciBuZWVkc0hhc2hDaGFuZ2VMaXN0ZW5lciA9ICEoMCwgX0RPTVV0aWxzLnN1cHBvcnRzUG9wU3RhdGVPbkhhc2hDaGFuZ2UpKCk7XG5cbiAgdmFyIF9wcm9wcyRmb3JjZVJlZnJlc2ggPSBwcm9wcy5mb3JjZVJlZnJlc2gsXG4gICAgICBmb3JjZVJlZnJlc2ggPSBfcHJvcHMkZm9yY2VSZWZyZXNoID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9wcm9wcyRmb3JjZVJlZnJlc2gsXG4gICAgICBfcHJvcHMkZ2V0VXNlckNvbmZpcm0gPSBwcm9wcy5nZXRVc2VyQ29uZmlybWF0aW9uLFxuICAgICAgZ2V0VXNlckNvbmZpcm1hdGlvbiA9IF9wcm9wcyRnZXRVc2VyQ29uZmlybSA9PT0gdW5kZWZpbmVkID8gX0RPTVV0aWxzLmdldENvbmZpcm1hdGlvbiA6IF9wcm9wcyRnZXRVc2VyQ29uZmlybSxcbiAgICAgIF9wcm9wcyRrZXlMZW5ndGggPSBwcm9wcy5rZXlMZW5ndGgsXG4gICAgICBrZXlMZW5ndGggPSBfcHJvcHMka2V5TGVuZ3RoID09PSB1bmRlZmluZWQgPyA2IDogX3Byb3BzJGtleUxlbmd0aDtcblxuICB2YXIgYmFzZW5hbWUgPSBwcm9wcy5iYXNlbmFtZSA/ICgwLCBfUGF0aFV0aWxzLnN0cmlwVHJhaWxpbmdTbGFzaCkoKDAsIF9QYXRoVXRpbHMuYWRkTGVhZGluZ1NsYXNoKShwcm9wcy5iYXNlbmFtZSkpIDogJyc7XG5cbiAgdmFyIGdldERPTUxvY2F0aW9uID0gZnVuY3Rpb24gZ2V0RE9NTG9jYXRpb24oaGlzdG9yeVN0YXRlKSB7XG4gICAgdmFyIF9yZWYgPSBoaXN0b3J5U3RhdGUgfHwge30sXG4gICAgICAgIGtleSA9IF9yZWYua2V5LFxuICAgICAgICBzdGF0ZSA9IF9yZWYuc3RhdGU7XG5cbiAgICB2YXIgX3dpbmRvdyRsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbixcbiAgICAgICAgcGF0aG5hbWUgPSBfd2luZG93JGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICBzZWFyY2ggPSBfd2luZG93JGxvY2F0aW9uLnNlYXJjaCxcbiAgICAgICAgaGFzaCA9IF93aW5kb3ckbG9jYXRpb24uaGFzaDtcblxuXG4gICAgdmFyIHBhdGggPSBwYXRobmFtZSArIHNlYXJjaCArIGhhc2g7XG5cbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCFiYXNlbmFtZSB8fCAoMCwgX1BhdGhVdGlscy5oYXNCYXNlbmFtZSkocGF0aCwgYmFzZW5hbWUpLCAnWW91IGFyZSBhdHRlbXB0aW5nIHRvIHVzZSBhIGJhc2VuYW1lIG9uIGEgcGFnZSB3aG9zZSBVUkwgcGF0aCBkb2VzIG5vdCBiZWdpbiAnICsgJ3dpdGggdGhlIGJhc2VuYW1lLiBFeHBlY3RlZCBwYXRoIFwiJyArIHBhdGggKyAnXCIgdG8gYmVnaW4gd2l0aCBcIicgKyBiYXNlbmFtZSArICdcIi4nKTtcblxuICAgIGlmIChiYXNlbmFtZSkgcGF0aCA9ICgwLCBfUGF0aFV0aWxzLnN0cmlwQmFzZW5hbWUpKHBhdGgsIGJhc2VuYW1lKTtcblxuICAgIHJldHVybiAoMCwgX0xvY2F0aW9uVXRpbHMuY3JlYXRlTG9jYXRpb24pKHBhdGgsIHN0YXRlLCBrZXkpO1xuICB9O1xuXG4gIHZhciBjcmVhdGVLZXkgPSBmdW5jdGlvbiBjcmVhdGVLZXkoKSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCBrZXlMZW5ndGgpO1xuICB9O1xuXG4gIHZhciB0cmFuc2l0aW9uTWFuYWdlciA9ICgwLCBfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIyLmRlZmF1bHQpKCk7XG5cbiAgdmFyIHNldFN0YXRlID0gZnVuY3Rpb24gc2V0U3RhdGUobmV4dFN0YXRlKSB7XG4gICAgX2V4dGVuZHMoaGlzdG9yeSwgbmV4dFN0YXRlKTtcblxuICAgIGhpc3RvcnkubGVuZ3RoID0gZ2xvYmFsSGlzdG9yeS5sZW5ndGg7XG5cbiAgICB0cmFuc2l0aW9uTWFuYWdlci5ub3RpZnlMaXN0ZW5lcnMoaGlzdG9yeS5sb2NhdGlvbiwgaGlzdG9yeS5hY3Rpb24pO1xuICB9O1xuXG4gIHZhciBoYW5kbGVQb3BTdGF0ZSA9IGZ1bmN0aW9uIGhhbmRsZVBvcFN0YXRlKGV2ZW50KSB7XG4gICAgLy8gSWdub3JlIGV4dHJhbmVvdXMgcG9wc3RhdGUgZXZlbnRzIGluIFdlYktpdC5cbiAgICBpZiAoKDAsIF9ET01VdGlscy5pc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50KShldmVudCkpIHJldHVybjtcblxuICAgIGhhbmRsZVBvcChnZXRET01Mb2NhdGlvbihldmVudC5zdGF0ZSkpO1xuICB9O1xuXG4gIHZhciBoYW5kbGVIYXNoQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlSGFzaENoYW5nZSgpIHtcbiAgICBoYW5kbGVQb3AoZ2V0RE9NTG9jYXRpb24oZ2V0SGlzdG9yeVN0YXRlKCkpKTtcbiAgfTtcblxuICB2YXIgZm9yY2VOZXh0UG9wID0gZmFsc2U7XG5cbiAgdmFyIGhhbmRsZVBvcCA9IGZ1bmN0aW9uIGhhbmRsZVBvcChsb2NhdGlvbikge1xuICAgIGlmIChmb3JjZU5leHRQb3ApIHtcbiAgICAgIGZvcmNlTmV4dFBvcCA9IGZhbHNlO1xuICAgICAgc2V0U3RhdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFjdGlvbiA9ICdQT1AnO1xuXG4gICAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgICBpZiAob2spIHtcbiAgICAgICAgICBzZXRTdGF0ZSh7IGFjdGlvbjogYWN0aW9uLCBsb2NhdGlvbjogbG9jYXRpb24gfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV2ZXJ0UG9wKGxvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciByZXZlcnRQb3AgPSBmdW5jdGlvbiByZXZlcnRQb3AoZnJvbUxvY2F0aW9uKSB7XG4gICAgdmFyIHRvTG9jYXRpb24gPSBoaXN0b3J5LmxvY2F0aW9uO1xuXG4gICAgLy8gVE9ETzogV2UgY291bGQgcHJvYmFibHkgbWFrZSB0aGlzIG1vcmUgcmVsaWFibGUgYnlcbiAgICAvLyBrZWVwaW5nIGEgbGlzdCBvZiBrZXlzIHdlJ3ZlIHNlZW4gaW4gc2Vzc2lvblN0b3JhZ2UuXG4gICAgLy8gSW5zdGVhZCwgd2UganVzdCBkZWZhdWx0IHRvIDAgZm9yIGtleXMgd2UgZG9uJ3Qga25vdy5cblxuICAgIHZhciB0b0luZGV4ID0gYWxsS2V5cy5pbmRleE9mKHRvTG9jYXRpb24ua2V5KTtcblxuICAgIGlmICh0b0luZGV4ID09PSAtMSkgdG9JbmRleCA9IDA7XG5cbiAgICB2YXIgZnJvbUluZGV4ID0gYWxsS2V5cy5pbmRleE9mKGZyb21Mb2NhdGlvbi5rZXkpO1xuXG4gICAgaWYgKGZyb21JbmRleCA9PT0gLTEpIGZyb21JbmRleCA9IDA7XG5cbiAgICB2YXIgZGVsdGEgPSB0b0luZGV4IC0gZnJvbUluZGV4O1xuXG4gICAgaWYgKGRlbHRhKSB7XG4gICAgICBmb3JjZU5leHRQb3AgPSB0cnVlO1xuICAgICAgZ28oZGVsdGEpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaW5pdGlhbExvY2F0aW9uID0gZ2V0RE9NTG9jYXRpb24oZ2V0SGlzdG9yeVN0YXRlKCkpO1xuICB2YXIgYWxsS2V5cyA9IFtpbml0aWFsTG9jYXRpb24ua2V5XTtcblxuICAvLyBQdWJsaWMgaW50ZXJmYWNlXG5cbiAgdmFyIGNyZWF0ZUhyZWYgPSBmdW5jdGlvbiBjcmVhdGVIcmVmKGxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIGJhc2VuYW1lICsgKDAsIF9QYXRoVXRpbHMuY3JlYXRlUGF0aCkobG9jYXRpb24pO1xuICB9O1xuXG4gIHZhciBwdXNoID0gZnVuY3Rpb24gcHVzaChwYXRoLCBzdGF0ZSkge1xuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoISgodHlwZW9mIHBhdGggPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHBhdGgpKSA9PT0gJ29iamVjdCcgJiYgcGF0aC5zdGF0ZSAhPT0gdW5kZWZpbmVkICYmIHN0YXRlICE9PSB1bmRlZmluZWQpLCAnWW91IHNob3VsZCBhdm9pZCBwcm92aWRpbmcgYSAybmQgc3RhdGUgYXJndW1lbnQgdG8gcHVzaCB3aGVuIHRoZSAxc3QgJyArICdhcmd1bWVudCBpcyBhIGxvY2F0aW9uLWxpa2Ugb2JqZWN0IHRoYXQgYWxyZWFkeSBoYXMgc3RhdGU7IGl0IGlzIGlnbm9yZWQnKTtcblxuICAgIHZhciBhY3Rpb24gPSAnUFVTSCc7XG4gICAgdmFyIGxvY2F0aW9uID0gKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKShwYXRoLCBzdGF0ZSwgY3JlYXRlS2V5KCksIGhpc3RvcnkubG9jYXRpb24pO1xuXG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcblxuICAgICAgdmFyIGhyZWYgPSBjcmVhdGVIcmVmKGxvY2F0aW9uKTtcbiAgICAgIHZhciBrZXkgPSBsb2NhdGlvbi5rZXksXG4gICAgICAgICAgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZTtcblxuXG4gICAgICBpZiAoY2FuVXNlSGlzdG9yeSkge1xuICAgICAgICBnbG9iYWxIaXN0b3J5LnB1c2hTdGF0ZSh7IGtleToga2V5LCBzdGF0ZTogc3RhdGUgfSwgbnVsbCwgaHJlZik7XG5cbiAgICAgICAgaWYgKGZvcmNlUmVmcmVzaCkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcHJldkluZGV4ID0gYWxsS2V5cy5pbmRleE9mKGhpc3RvcnkubG9jYXRpb24ua2V5KTtcbiAgICAgICAgICB2YXIgbmV4dEtleXMgPSBhbGxLZXlzLnNsaWNlKDAsIHByZXZJbmRleCA9PT0gLTEgPyAwIDogcHJldkluZGV4ICsgMSk7XG5cbiAgICAgICAgICBuZXh0S2V5cy5wdXNoKGxvY2F0aW9uLmtleSk7XG4gICAgICAgICAgYWxsS2V5cyA9IG5leHRLZXlzO1xuXG4gICAgICAgICAgc2V0U3RhdGUoeyBhY3Rpb246IGFjdGlvbiwgbG9jYXRpb246IGxvY2F0aW9uIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKHN0YXRlID09PSB1bmRlZmluZWQsICdCcm93c2VyIGhpc3RvcnkgY2Fubm90IHB1c2ggc3RhdGUgaW4gYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBIVE1MNSBoaXN0b3J5Jyk7XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciByZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZShwYXRoLCBzdGF0ZSkge1xuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoISgodHlwZW9mIHBhdGggPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHBhdGgpKSA9PT0gJ29iamVjdCcgJiYgcGF0aC5zdGF0ZSAhPT0gdW5kZWZpbmVkICYmIHN0YXRlICE9PSB1bmRlZmluZWQpLCAnWW91IHNob3VsZCBhdm9pZCBwcm92aWRpbmcgYSAybmQgc3RhdGUgYXJndW1lbnQgdG8gcmVwbGFjZSB3aGVuIHRoZSAxc3QgJyArICdhcmd1bWVudCBpcyBhIGxvY2F0aW9uLWxpa2Ugb2JqZWN0IHRoYXQgYWxyZWFkeSBoYXMgc3RhdGU7IGl0IGlzIGlnbm9yZWQnKTtcblxuICAgIHZhciBhY3Rpb24gPSAnUkVQTEFDRSc7XG4gICAgdmFyIGxvY2F0aW9uID0gKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKShwYXRoLCBzdGF0ZSwgY3JlYXRlS2V5KCksIGhpc3RvcnkubG9jYXRpb24pO1xuXG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcblxuICAgICAgdmFyIGhyZWYgPSBjcmVhdGVIcmVmKGxvY2F0aW9uKTtcbiAgICAgIHZhciBrZXkgPSBsb2NhdGlvbi5rZXksXG4gICAgICAgICAgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZTtcblxuXG4gICAgICBpZiAoY2FuVXNlSGlzdG9yeSkge1xuICAgICAgICBnbG9iYWxIaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IGtleToga2V5LCBzdGF0ZTogc3RhdGUgfSwgbnVsbCwgaHJlZik7XG5cbiAgICAgICAgaWYgKGZvcmNlUmVmcmVzaCkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGhyZWYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxLZXlzLmluZGV4T2YoaGlzdG9yeS5sb2NhdGlvbi5rZXkpO1xuXG4gICAgICAgICAgaWYgKHByZXZJbmRleCAhPT0gLTEpIGFsbEtleXNbcHJldkluZGV4XSA9IGxvY2F0aW9uLmtleTtcblxuICAgICAgICAgIHNldFN0YXRlKHsgYWN0aW9uOiBhY3Rpb24sIGxvY2F0aW9uOiBsb2NhdGlvbiB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShzdGF0ZSA9PT0gdW5kZWZpbmVkLCAnQnJvd3NlciBoaXN0b3J5IGNhbm5vdCByZXBsYWNlIHN0YXRlIGluIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgSFRNTDUgaGlzdG9yeScpO1xuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGhyZWYpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciBnbyA9IGZ1bmN0aW9uIGdvKG4pIHtcbiAgICBnbG9iYWxIaXN0b3J5LmdvKG4pO1xuICB9O1xuXG4gIHZhciBnb0JhY2sgPSBmdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgcmV0dXJuIGdvKC0xKTtcbiAgfTtcblxuICB2YXIgZ29Gb3J3YXJkID0gZnVuY3Rpb24gZ29Gb3J3YXJkKCkge1xuICAgIHJldHVybiBnbygxKTtcbiAgfTtcblxuICB2YXIgbGlzdGVuZXJDb3VudCA9IDA7XG5cbiAgdmFyIGNoZWNrRE9NTGlzdGVuZXJzID0gZnVuY3Rpb24gY2hlY2tET01MaXN0ZW5lcnMoZGVsdGEpIHtcbiAgICBsaXN0ZW5lckNvdW50ICs9IGRlbHRhO1xuXG4gICAgaWYgKGxpc3RlbmVyQ291bnQgPT09IDEpIHtcbiAgICAgICgwLCBfRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcikod2luZG93LCBQb3BTdGF0ZUV2ZW50LCBoYW5kbGVQb3BTdGF0ZSk7XG5cbiAgICAgIGlmIChuZWVkc0hhc2hDaGFuZ2VMaXN0ZW5lcikgKDAsIF9ET01VdGlscy5hZGRFdmVudExpc3RlbmVyKSh3aW5kb3csIEhhc2hDaGFuZ2VFdmVudCwgaGFuZGxlSGFzaENoYW5nZSk7XG4gICAgfSBlbHNlIGlmIChsaXN0ZW5lckNvdW50ID09PSAwKSB7XG4gICAgICAoMCwgX0RPTVV0aWxzLnJlbW92ZUV2ZW50TGlzdGVuZXIpKHdpbmRvdywgUG9wU3RhdGVFdmVudCwgaGFuZGxlUG9wU3RhdGUpO1xuXG4gICAgICBpZiAobmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIpICgwLCBfRE9NVXRpbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcikod2luZG93LCBIYXNoQ2hhbmdlRXZlbnQsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaXNCbG9ja2VkID0gZmFsc2U7XG5cbiAgdmFyIGJsb2NrID0gZnVuY3Rpb24gYmxvY2soKSB7XG4gICAgdmFyIHByb21wdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgICB2YXIgdW5ibG9jayA9IHRyYW5zaXRpb25NYW5hZ2VyLnNldFByb21wdChwcm9tcHQpO1xuXG4gICAgaWYgKCFpc0Jsb2NrZWQpIHtcbiAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKDEpO1xuICAgICAgaXNCbG9ja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGlzQmxvY2tlZCkge1xuICAgICAgICBpc0Jsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgY2hlY2tET01MaXN0ZW5lcnMoLTEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdW5ibG9jaygpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGxpc3RlbiA9IGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIHZhciB1bmxpc3RlbiA9IHRyYW5zaXRpb25NYW5hZ2VyLmFwcGVuZExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICBjaGVja0RPTUxpc3RlbmVycygxKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGVja0RPTUxpc3RlbmVycygtMSk7XG4gICAgICB1bmxpc3RlbigpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGhpc3RvcnkgPSB7XG4gICAgbGVuZ3RoOiBnbG9iYWxIaXN0b3J5Lmxlbmd0aCxcbiAgICBhY3Rpb246ICdQT1AnLFxuICAgIGxvY2F0aW9uOiBpbml0aWFsTG9jYXRpb24sXG4gICAgY3JlYXRlSHJlZjogY3JlYXRlSHJlZixcbiAgICBwdXNoOiBwdXNoLFxuICAgIHJlcGxhY2U6IHJlcGxhY2UsXG4gICAgZ286IGdvLFxuICAgIGdvQmFjazogZ29CYWNrLFxuICAgIGdvRm9yd2FyZDogZ29Gb3J3YXJkLFxuICAgIGJsb2NrOiBibG9jayxcbiAgICBsaXN0ZW46IGxpc3RlblxuICB9O1xuXG4gIHJldHVybiBoaXN0b3J5O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlQnJvd3Nlckhpc3Rvcnk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9Mb2NhdGlvblV0aWxzID0gcmVxdWlyZSgnLi9Mb2NhdGlvblV0aWxzJyk7XG5cbnZhciBfUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlciA9IHJlcXVpcmUoJy4vY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXInKTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcik7XG5cbnZhciBfRE9NVXRpbHMgPSByZXF1aXJlKCcuL0RPTVV0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBIYXNoQ2hhbmdlRXZlbnQgPSAnaGFzaGNoYW5nZSc7XG5cbnZhciBIYXNoUGF0aENvZGVycyA9IHtcbiAgaGFzaGJhbmc6IHtcbiAgICBlbmNvZGVQYXRoOiBmdW5jdGlvbiBlbmNvZGVQYXRoKHBhdGgpIHtcbiAgICAgIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJyEnID8gcGF0aCA6ICchLycgKyAoMCwgX1BhdGhVdGlscy5zdHJpcExlYWRpbmdTbGFzaCkocGF0aCk7XG4gICAgfSxcbiAgICBkZWNvZGVQYXRoOiBmdW5jdGlvbiBkZWNvZGVQYXRoKHBhdGgpIHtcbiAgICAgIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJyEnID8gcGF0aC5zdWJzdHIoMSkgOiBwYXRoO1xuICAgIH1cbiAgfSxcbiAgbm9zbGFzaDoge1xuICAgIGVuY29kZVBhdGg6IF9QYXRoVXRpbHMuc3RyaXBMZWFkaW5nU2xhc2gsXG4gICAgZGVjb2RlUGF0aDogX1BhdGhVdGlscy5hZGRMZWFkaW5nU2xhc2hcbiAgfSxcbiAgc2xhc2g6IHtcbiAgICBlbmNvZGVQYXRoOiBfUGF0aFV0aWxzLmFkZExlYWRpbmdTbGFzaCxcbiAgICBkZWNvZGVQYXRoOiBfUGF0aFV0aWxzLmFkZExlYWRpbmdTbGFzaFxuICB9XG59O1xuXG52YXIgZ2V0SGFzaFBhdGggPSBmdW5jdGlvbiBnZXRIYXNoUGF0aCgpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHdpbmRvdy5sb2NhdGlvbi5oYXNoIGhlcmUgYmVjYXVzZSBpdCdzIG5vdFxuICAvLyBjb25zaXN0ZW50IGFjcm9zcyBicm93c2VycyAtIEZpcmVmb3ggd2lsbCBwcmUtZGVjb2RlIGl0IVxuICB2YXIgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICB2YXIgaGFzaEluZGV4ID0gaHJlZi5pbmRleE9mKCcjJyk7XG4gIHJldHVybiBoYXNoSW5kZXggPT09IC0xID8gJycgOiBocmVmLnN1YnN0cmluZyhoYXNoSW5kZXggKyAxKTtcbn07XG5cbnZhciBwdXNoSGFzaFBhdGggPSBmdW5jdGlvbiBwdXNoSGFzaFBhdGgocGF0aCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2ggPSBwYXRoO1xufTtcblxudmFyIHJlcGxhY2VIYXNoUGF0aCA9IGZ1bmN0aW9uIHJlcGxhY2VIYXNoUGF0aChwYXRoKSB7XG4gIHZhciBoYXNoSW5kZXggPSB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCcjJyk7XG5cbiAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2Uod2luZG93LmxvY2F0aW9uLmhyZWYuc2xpY2UoMCwgaGFzaEluZGV4ID49IDAgPyBoYXNoSW5kZXggOiAwKSArICcjJyArIHBhdGgpO1xufTtcblxudmFyIGNyZWF0ZUhhc2hIaXN0b3J5ID0gZnVuY3Rpb24gY3JlYXRlSGFzaEhpc3RvcnkoKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKF9ET01VdGlscy5jYW5Vc2VET00sICdIYXNoIGhpc3RvcnkgbmVlZHMgYSBET00nKTtcblxuICB2YXIgZ2xvYmFsSGlzdG9yeSA9IHdpbmRvdy5oaXN0b3J5O1xuICB2YXIgY2FuR29XaXRob3V0UmVsb2FkID0gKDAsIF9ET01VdGlscy5zdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCkoKTtcblxuICB2YXIgX3Byb3BzJGdldFVzZXJDb25maXJtID0gcHJvcHMuZ2V0VXNlckNvbmZpcm1hdGlvbixcbiAgICAgIGdldFVzZXJDb25maXJtYXRpb24gPSBfcHJvcHMkZ2V0VXNlckNvbmZpcm0gPT09IHVuZGVmaW5lZCA/IF9ET01VdGlscy5nZXRDb25maXJtYXRpb24gOiBfcHJvcHMkZ2V0VXNlckNvbmZpcm0sXG4gICAgICBfcHJvcHMkaGFzaFR5cGUgPSBwcm9wcy5oYXNoVHlwZSxcbiAgICAgIGhhc2hUeXBlID0gX3Byb3BzJGhhc2hUeXBlID09PSB1bmRlZmluZWQgPyAnc2xhc2gnIDogX3Byb3BzJGhhc2hUeXBlO1xuXG4gIHZhciBiYXNlbmFtZSA9IHByb3BzLmJhc2VuYW1lID8gKDAsIF9QYXRoVXRpbHMuc3RyaXBUcmFpbGluZ1NsYXNoKSgoMCwgX1BhdGhVdGlscy5hZGRMZWFkaW5nU2xhc2gpKHByb3BzLmJhc2VuYW1lKSkgOiAnJztcblxuICB2YXIgX0hhc2hQYXRoQ29kZXJzJGhhc2hUID0gSGFzaFBhdGhDb2RlcnNbaGFzaFR5cGVdLFxuICAgICAgZW5jb2RlUGF0aCA9IF9IYXNoUGF0aENvZGVycyRoYXNoVC5lbmNvZGVQYXRoLFxuICAgICAgZGVjb2RlUGF0aCA9IF9IYXNoUGF0aENvZGVycyRoYXNoVC5kZWNvZGVQYXRoO1xuXG5cbiAgdmFyIGdldERPTUxvY2F0aW9uID0gZnVuY3Rpb24gZ2V0RE9NTG9jYXRpb24oKSB7XG4gICAgdmFyIHBhdGggPSBkZWNvZGVQYXRoKGdldEhhc2hQYXRoKCkpO1xuXG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghYmFzZW5hbWUgfHwgKDAsIF9QYXRoVXRpbHMuaGFzQmFzZW5hbWUpKHBhdGgsIGJhc2VuYW1lKSwgJ1lvdSBhcmUgYXR0ZW1wdGluZyB0byB1c2UgYSBiYXNlbmFtZSBvbiBhIHBhZ2Ugd2hvc2UgVVJMIHBhdGggZG9lcyBub3QgYmVnaW4gJyArICd3aXRoIHRoZSBiYXNlbmFtZS4gRXhwZWN0ZWQgcGF0aCBcIicgKyBwYXRoICsgJ1wiIHRvIGJlZ2luIHdpdGggXCInICsgYmFzZW5hbWUgKyAnXCIuJyk7XG5cbiAgICBpZiAoYmFzZW5hbWUpIHBhdGggPSAoMCwgX1BhdGhVdGlscy5zdHJpcEJhc2VuYW1lKShwYXRoLCBiYXNlbmFtZSk7XG5cbiAgICByZXR1cm4gKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKShwYXRoKTtcbiAgfTtcblxuICB2YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSAoMCwgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyMi5kZWZhdWx0KSgpO1xuXG4gIHZhciBzZXRTdGF0ZSA9IGZ1bmN0aW9uIHNldFN0YXRlKG5leHRTdGF0ZSkge1xuICAgIF9leHRlbmRzKGhpc3RvcnksIG5leHRTdGF0ZSk7XG5cbiAgICBoaXN0b3J5Lmxlbmd0aCA9IGdsb2JhbEhpc3RvcnkubGVuZ3RoO1xuXG4gICAgdHJhbnNpdGlvbk1hbmFnZXIubm90aWZ5TGlzdGVuZXJzKGhpc3RvcnkubG9jYXRpb24sIGhpc3RvcnkuYWN0aW9uKTtcbiAgfTtcblxuICB2YXIgZm9yY2VOZXh0UG9wID0gZmFsc2U7XG4gIHZhciBpZ25vcmVQYXRoID0gbnVsbDtcblxuICB2YXIgaGFuZGxlSGFzaENoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUhhc2hDaGFuZ2UoKSB7XG4gICAgdmFyIHBhdGggPSBnZXRIYXNoUGF0aCgpO1xuICAgIHZhciBlbmNvZGVkUGF0aCA9IGVuY29kZVBhdGgocGF0aCk7XG5cbiAgICBpZiAocGF0aCAhPT0gZW5jb2RlZFBhdGgpIHtcbiAgICAgIC8vIEVuc3VyZSB3ZSBhbHdheXMgaGF2ZSBhIHByb3Blcmx5LWVuY29kZWQgaGFzaC5cbiAgICAgIHJlcGxhY2VIYXNoUGF0aChlbmNvZGVkUGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBsb2NhdGlvbiA9IGdldERPTUxvY2F0aW9uKCk7XG4gICAgICB2YXIgcHJldkxvY2F0aW9uID0gaGlzdG9yeS5sb2NhdGlvbjtcblxuICAgICAgaWYgKCFmb3JjZU5leHRQb3AgJiYgKDAsIF9Mb2NhdGlvblV0aWxzLmxvY2F0aW9uc0FyZUVxdWFsKShwcmV2TG9jYXRpb24sIGxvY2F0aW9uKSkgcmV0dXJuOyAvLyBBIGhhc2hjaGFuZ2UgZG9lc24ndCBhbHdheXMgPT0gbG9jYXRpb24gY2hhbmdlLlxuXG4gICAgICBpZiAoaWdub3JlUGF0aCA9PT0gKDAsIF9QYXRoVXRpbHMuY3JlYXRlUGF0aCkobG9jYXRpb24pKSByZXR1cm47IC8vIElnbm9yZSB0aGlzIGNoYW5nZTsgd2UgYWxyZWFkeSBzZXRTdGF0ZSBpbiBwdXNoL3JlcGxhY2UuXG5cbiAgICAgIGlnbm9yZVBhdGggPSBudWxsO1xuXG4gICAgICBoYW5kbGVQb3AobG9jYXRpb24pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlUG9wID0gZnVuY3Rpb24gaGFuZGxlUG9wKGxvY2F0aW9uKSB7XG4gICAgaWYgKGZvcmNlTmV4dFBvcCkge1xuICAgICAgZm9yY2VOZXh0UG9wID0gZmFsc2U7XG4gICAgICBzZXRTdGF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYWN0aW9uID0gJ1BPUCc7XG5cbiAgICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICAgIGlmIChvaykge1xuICAgICAgICAgIHNldFN0YXRlKHsgYWN0aW9uOiBhY3Rpb24sIGxvY2F0aW9uOiBsb2NhdGlvbiB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXZlcnRQb3AobG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHJldmVydFBvcCA9IGZ1bmN0aW9uIHJldmVydFBvcChmcm9tTG9jYXRpb24pIHtcbiAgICB2YXIgdG9Mb2NhdGlvbiA9IGhpc3RvcnkubG9jYXRpb247XG5cbiAgICAvLyBUT0RPOiBXZSBjb3VsZCBwcm9iYWJseSBtYWtlIHRoaXMgbW9yZSByZWxpYWJsZSBieVxuICAgIC8vIGtlZXBpbmcgYSBsaXN0IG9mIHBhdGhzIHdlJ3ZlIHNlZW4gaW4gc2Vzc2lvblN0b3JhZ2UuXG4gICAgLy8gSW5zdGVhZCwgd2UganVzdCBkZWZhdWx0IHRvIDAgZm9yIHBhdGhzIHdlIGRvbid0IGtub3cuXG5cbiAgICB2YXIgdG9JbmRleCA9IGFsbFBhdGhzLmxhc3RJbmRleE9mKCgwLCBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgpKHRvTG9jYXRpb24pKTtcblxuICAgIGlmICh0b0luZGV4ID09PSAtMSkgdG9JbmRleCA9IDA7XG5cbiAgICB2YXIgZnJvbUluZGV4ID0gYWxsUGF0aHMubGFzdEluZGV4T2YoKDAsIF9QYXRoVXRpbHMuY3JlYXRlUGF0aCkoZnJvbUxvY2F0aW9uKSk7XG5cbiAgICBpZiAoZnJvbUluZGV4ID09PSAtMSkgZnJvbUluZGV4ID0gMDtcblxuICAgIHZhciBkZWx0YSA9IHRvSW5kZXggLSBmcm9tSW5kZXg7XG5cbiAgICBpZiAoZGVsdGEpIHtcbiAgICAgIGZvcmNlTmV4dFBvcCA9IHRydWU7XG4gICAgICBnbyhkZWx0YSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEVuc3VyZSB0aGUgaGFzaCBpcyBlbmNvZGVkIHByb3Blcmx5IGJlZm9yZSBkb2luZyBhbnl0aGluZyBlbHNlLlxuICB2YXIgcGF0aCA9IGdldEhhc2hQYXRoKCk7XG4gIHZhciBlbmNvZGVkUGF0aCA9IGVuY29kZVBhdGgocGF0aCk7XG5cbiAgaWYgKHBhdGggIT09IGVuY29kZWRQYXRoKSByZXBsYWNlSGFzaFBhdGgoZW5jb2RlZFBhdGgpO1xuXG4gIHZhciBpbml0aWFsTG9jYXRpb24gPSBnZXRET01Mb2NhdGlvbigpO1xuICB2YXIgYWxsUGF0aHMgPSBbKDAsIF9QYXRoVXRpbHMuY3JlYXRlUGF0aCkoaW5pdGlhbExvY2F0aW9uKV07XG5cbiAgLy8gUHVibGljIGludGVyZmFjZVxuXG4gIHZhciBjcmVhdGVIcmVmID0gZnVuY3Rpb24gY3JlYXRlSHJlZihsb2NhdGlvbikge1xuICAgIHJldHVybiAnIycgKyBlbmNvZGVQYXRoKGJhc2VuYW1lICsgKDAsIF9QYXRoVXRpbHMuY3JlYXRlUGF0aCkobG9jYXRpb24pKTtcbiAgfTtcblxuICB2YXIgcHVzaCA9IGZ1bmN0aW9uIHB1c2gocGF0aCwgc3RhdGUpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKHN0YXRlID09PSB1bmRlZmluZWQsICdIYXNoIGhpc3RvcnkgY2Fubm90IHB1c2ggc3RhdGU7IGl0IGlzIGlnbm9yZWQnKTtcblxuICAgIHZhciBhY3Rpb24gPSAnUFVTSCc7XG4gICAgdmFyIGxvY2F0aW9uID0gKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKShwYXRoLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgaGlzdG9yeS5sb2NhdGlvbik7XG5cbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuXG4gICAgICB2YXIgcGF0aCA9ICgwLCBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgpKGxvY2F0aW9uKTtcbiAgICAgIHZhciBlbmNvZGVkUGF0aCA9IGVuY29kZVBhdGgoYmFzZW5hbWUgKyBwYXRoKTtcbiAgICAgIHZhciBoYXNoQ2hhbmdlZCA9IGdldEhhc2hQYXRoKCkgIT09IGVuY29kZWRQYXRoO1xuXG4gICAgICBpZiAoaGFzaENoYW5nZWQpIHtcbiAgICAgICAgLy8gV2UgY2Fubm90IHRlbGwgaWYgYSBoYXNoY2hhbmdlIHdhcyBjYXVzZWQgYnkgYSBQVVNILCBzbyB3ZSdkXG4gICAgICAgIC8vIHJhdGhlciBzZXRTdGF0ZSBoZXJlIGFuZCBpZ25vcmUgdGhlIGhhc2hjaGFuZ2UuIFRoZSBjYXZlYXQgaGVyZVxuICAgICAgICAvLyBpcyB0aGF0IG90aGVyIGhhc2ggaGlzdG9yaWVzIGluIHRoZSBwYWdlIHdpbGwgY29uc2lkZXIgaXQgYSBQT1AuXG4gICAgICAgIGlnbm9yZVBhdGggPSBwYXRoO1xuICAgICAgICBwdXNoSGFzaFBhdGgoZW5jb2RlZFBhdGgpO1xuXG4gICAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxQYXRocy5sYXN0SW5kZXhPZigoMCwgX1BhdGhVdGlscy5jcmVhdGVQYXRoKShoaXN0b3J5LmxvY2F0aW9uKSk7XG4gICAgICAgIHZhciBuZXh0UGF0aHMgPSBhbGxQYXRocy5zbGljZSgwLCBwcmV2SW5kZXggPT09IC0xID8gMCA6IHByZXZJbmRleCArIDEpO1xuXG4gICAgICAgIG5leHRQYXRocy5wdXNoKHBhdGgpO1xuICAgICAgICBhbGxQYXRocyA9IG5leHRQYXRocztcblxuICAgICAgICBzZXRTdGF0ZSh7IGFjdGlvbjogYWN0aW9uLCBsb2NhdGlvbjogbG9jYXRpb24gfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCAnSGFzaCBoaXN0b3J5IGNhbm5vdCBQVVNIIHRoZSBzYW1lIHBhdGg7IGEgbmV3IGVudHJ5IHdpbGwgbm90IGJlIGFkZGVkIHRvIHRoZSBoaXN0b3J5IHN0YWNrJyk7XG5cbiAgICAgICAgc2V0U3RhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgcmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UocGF0aCwgc3RhdGUpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKHN0YXRlID09PSB1bmRlZmluZWQsICdIYXNoIGhpc3RvcnkgY2Fubm90IHJlcGxhY2Ugc3RhdGU7IGl0IGlzIGlnbm9yZWQnKTtcblxuICAgIHZhciBhY3Rpb24gPSAnUkVQTEFDRSc7XG4gICAgdmFyIGxvY2F0aW9uID0gKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKShwYXRoLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgaGlzdG9yeS5sb2NhdGlvbik7XG5cbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuXG4gICAgICB2YXIgcGF0aCA9ICgwLCBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgpKGxvY2F0aW9uKTtcbiAgICAgIHZhciBlbmNvZGVkUGF0aCA9IGVuY29kZVBhdGgoYmFzZW5hbWUgKyBwYXRoKTtcbiAgICAgIHZhciBoYXNoQ2hhbmdlZCA9IGdldEhhc2hQYXRoKCkgIT09IGVuY29kZWRQYXRoO1xuXG4gICAgICBpZiAoaGFzaENoYW5nZWQpIHtcbiAgICAgICAgLy8gV2UgY2Fubm90IHRlbGwgaWYgYSBoYXNoY2hhbmdlIHdhcyBjYXVzZWQgYnkgYSBSRVBMQUNFLCBzbyB3ZSdkXG4gICAgICAgIC8vIHJhdGhlciBzZXRTdGF0ZSBoZXJlIGFuZCBpZ25vcmUgdGhlIGhhc2hjaGFuZ2UuIFRoZSBjYXZlYXQgaGVyZVxuICAgICAgICAvLyBpcyB0aGF0IG90aGVyIGhhc2ggaGlzdG9yaWVzIGluIHRoZSBwYWdlIHdpbGwgY29uc2lkZXIgaXQgYSBQT1AuXG4gICAgICAgIGlnbm9yZVBhdGggPSBwYXRoO1xuICAgICAgICByZXBsYWNlSGFzaFBhdGgoZW5jb2RlZFBhdGgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJldkluZGV4ID0gYWxsUGF0aHMuaW5kZXhPZigoMCwgX1BhdGhVdGlscy5jcmVhdGVQYXRoKShoaXN0b3J5LmxvY2F0aW9uKSk7XG5cbiAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xKSBhbGxQYXRoc1twcmV2SW5kZXhdID0gcGF0aDtcblxuICAgICAgc2V0U3RhdGUoeyBhY3Rpb246IGFjdGlvbiwgbG9jYXRpb246IGxvY2F0aW9uIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBnbyA9IGZ1bmN0aW9uIGdvKG4pIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKGNhbkdvV2l0aG91dFJlbG9hZCwgJ0hhc2ggaGlzdG9yeSBnbyhuKSBjYXVzZXMgYSBmdWxsIHBhZ2UgcmVsb2FkIGluIHRoaXMgYnJvd3NlcicpO1xuXG4gICAgZ2xvYmFsSGlzdG9yeS5nbyhuKTtcbiAgfTtcblxuICB2YXIgZ29CYWNrID0gZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIHJldHVybiBnbygtMSk7XG4gIH07XG5cbiAgdmFyIGdvRm9yd2FyZCA9IGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICByZXR1cm4gZ28oMSk7XG4gIH07XG5cbiAgdmFyIGxpc3RlbmVyQ291bnQgPSAwO1xuXG4gIHZhciBjaGVja0RPTUxpc3RlbmVycyA9IGZ1bmN0aW9uIGNoZWNrRE9NTGlzdGVuZXJzKGRlbHRhKSB7XG4gICAgbGlzdGVuZXJDb3VudCArPSBkZWx0YTtcblxuICAgIGlmIChsaXN0ZW5lckNvdW50ID09PSAxKSB7XG4gICAgICAoMCwgX0RPTVV0aWxzLmFkZEV2ZW50TGlzdGVuZXIpKHdpbmRvdywgSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICB9IGVsc2UgaWYgKGxpc3RlbmVyQ291bnQgPT09IDApIHtcbiAgICAgICgwLCBfRE9NVXRpbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcikod2luZG93LCBIYXNoQ2hhbmdlRXZlbnQsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaXNCbG9ja2VkID0gZmFsc2U7XG5cbiAgdmFyIGJsb2NrID0gZnVuY3Rpb24gYmxvY2soKSB7XG4gICAgdmFyIHByb21wdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgICB2YXIgdW5ibG9jayA9IHRyYW5zaXRpb25NYW5hZ2VyLnNldFByb21wdChwcm9tcHQpO1xuXG4gICAgaWYgKCFpc0Jsb2NrZWQpIHtcbiAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKDEpO1xuICAgICAgaXNCbG9ja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGlzQmxvY2tlZCkge1xuICAgICAgICBpc0Jsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgY2hlY2tET01MaXN0ZW5lcnMoLTEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdW5ibG9jaygpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGxpc3RlbiA9IGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIHZhciB1bmxpc3RlbiA9IHRyYW5zaXRpb25NYW5hZ2VyLmFwcGVuZExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICBjaGVja0RPTUxpc3RlbmVycygxKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGVja0RPTUxpc3RlbmVycygtMSk7XG4gICAgICB1bmxpc3RlbigpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGhpc3RvcnkgPSB7XG4gICAgbGVuZ3RoOiBnbG9iYWxIaXN0b3J5Lmxlbmd0aCxcbiAgICBhY3Rpb246ICdQT1AnLFxuICAgIGxvY2F0aW9uOiBpbml0aWFsTG9jYXRpb24sXG4gICAgY3JlYXRlSHJlZjogY3JlYXRlSHJlZixcbiAgICBwdXNoOiBwdXNoLFxuICAgIHJlcGxhY2U6IHJlcGxhY2UsXG4gICAgZ286IGdvLFxuICAgIGdvQmFjazogZ29CYWNrLFxuICAgIGdvRm9yd2FyZDogZ29Gb3J3YXJkLFxuICAgIGJsb2NrOiBibG9jayxcbiAgICBsaXN0ZW46IGxpc3RlblxuICB9O1xuXG4gIHJldHVybiBoaXN0b3J5O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlSGFzaEhpc3Rvcnk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX1BhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbnZhciBfTG9jYXRpb25VdGlscyA9IHJlcXVpcmUoJy4vTG9jYXRpb25VdGlscycpO1xuXG52YXIgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyID0gcmVxdWlyZSgnLi9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcicpO1xuXG52YXIgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGNsYW1wID0gZnVuY3Rpb24gY2xhbXAobiwgbG93ZXJCb3VuZCwgdXBwZXJCb3VuZCkge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobiwgbG93ZXJCb3VuZCksIHVwcGVyQm91bmQpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGlzdG9yeSBvYmplY3QgdGhhdCBzdG9yZXMgbG9jYXRpb25zIGluIG1lbW9yeS5cbiAqL1xudmFyIGNyZWF0ZU1lbW9yeUhpc3RvcnkgPSBmdW5jdGlvbiBjcmVhdGVNZW1vcnlIaXN0b3J5KCkge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgZ2V0VXNlckNvbmZpcm1hdGlvbiA9IHByb3BzLmdldFVzZXJDb25maXJtYXRpb24sXG4gICAgICBfcHJvcHMkaW5pdGlhbEVudHJpZXMgPSBwcm9wcy5pbml0aWFsRW50cmllcyxcbiAgICAgIGluaXRpYWxFbnRyaWVzID0gX3Byb3BzJGluaXRpYWxFbnRyaWVzID09PSB1bmRlZmluZWQgPyBbJy8nXSA6IF9wcm9wcyRpbml0aWFsRW50cmllcyxcbiAgICAgIF9wcm9wcyRpbml0aWFsSW5kZXggPSBwcm9wcy5pbml0aWFsSW5kZXgsXG4gICAgICBpbml0aWFsSW5kZXggPSBfcHJvcHMkaW5pdGlhbEluZGV4ID09PSB1bmRlZmluZWQgPyAwIDogX3Byb3BzJGluaXRpYWxJbmRleCxcbiAgICAgIF9wcm9wcyRrZXlMZW5ndGggPSBwcm9wcy5rZXlMZW5ndGgsXG4gICAgICBrZXlMZW5ndGggPSBfcHJvcHMka2V5TGVuZ3RoID09PSB1bmRlZmluZWQgPyA2IDogX3Byb3BzJGtleUxlbmd0aDtcblxuXG4gIHZhciB0cmFuc2l0aW9uTWFuYWdlciA9ICgwLCBfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIyLmRlZmF1bHQpKCk7XG5cbiAgdmFyIHNldFN0YXRlID0gZnVuY3Rpb24gc2V0U3RhdGUobmV4dFN0YXRlKSB7XG4gICAgX2V4dGVuZHMoaGlzdG9yeSwgbmV4dFN0YXRlKTtcblxuICAgIGhpc3RvcnkubGVuZ3RoID0gaGlzdG9yeS5lbnRyaWVzLmxlbmd0aDtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLm5vdGlmeUxpc3RlbmVycyhoaXN0b3J5LmxvY2F0aW9uLCBoaXN0b3J5LmFjdGlvbik7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUtleSA9IGZ1bmN0aW9uIGNyZWF0ZUtleSgpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIGtleUxlbmd0aCk7XG4gIH07XG5cbiAgdmFyIGluZGV4ID0gY2xhbXAoaW5pdGlhbEluZGV4LCAwLCBpbml0aWFsRW50cmllcy5sZW5ndGggLSAxKTtcbiAgdmFyIGVudHJpZXMgPSBpbml0aWFsRW50cmllcy5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBlbnRyeSA9PT0gJ3N0cmluZycgPyAoMCwgX0xvY2F0aW9uVXRpbHMuY3JlYXRlTG9jYXRpb24pKGVudHJ5LCB1bmRlZmluZWQsIGNyZWF0ZUtleSgpKSA6ICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikoZW50cnksIHVuZGVmaW5lZCwgZW50cnkua2V5IHx8IGNyZWF0ZUtleSgpKTtcbiAgfSk7XG5cbiAgLy8gUHVibGljIGludGVyZmFjZVxuXG4gIHZhciBjcmVhdGVIcmVmID0gX1BhdGhVdGlscy5jcmVhdGVQYXRoO1xuXG4gIHZhciBwdXNoID0gZnVuY3Rpb24gcHVzaChwYXRoLCBzdGF0ZSkge1xuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoISgodHlwZW9mIHBhdGggPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHBhdGgpKSA9PT0gJ29iamVjdCcgJiYgcGF0aC5zdGF0ZSAhPT0gdW5kZWZpbmVkICYmIHN0YXRlICE9PSB1bmRlZmluZWQpLCAnWW91IHNob3VsZCBhdm9pZCBwcm92aWRpbmcgYSAybmQgc3RhdGUgYXJndW1lbnQgdG8gcHVzaCB3aGVuIHRoZSAxc3QgJyArICdhcmd1bWVudCBpcyBhIGxvY2F0aW9uLWxpa2Ugb2JqZWN0IHRoYXQgYWxyZWFkeSBoYXMgc3RhdGU7IGl0IGlzIGlnbm9yZWQnKTtcblxuICAgIHZhciBhY3Rpb24gPSAnUFVTSCc7XG4gICAgdmFyIGxvY2F0aW9uID0gKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKShwYXRoLCBzdGF0ZSwgY3JlYXRlS2V5KCksIGhpc3RvcnkubG9jYXRpb24pO1xuXG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcblxuICAgICAgdmFyIHByZXZJbmRleCA9IGhpc3RvcnkuaW5kZXg7XG4gICAgICB2YXIgbmV4dEluZGV4ID0gcHJldkluZGV4ICsgMTtcblxuICAgICAgdmFyIG5leHRFbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzLnNsaWNlKDApO1xuICAgICAgaWYgKG5leHRFbnRyaWVzLmxlbmd0aCA+IG5leHRJbmRleCkge1xuICAgICAgICBuZXh0RW50cmllcy5zcGxpY2UobmV4dEluZGV4LCBuZXh0RW50cmllcy5sZW5ndGggLSBuZXh0SW5kZXgsIGxvY2F0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHRFbnRyaWVzLnB1c2gobG9jYXRpb24pO1xuICAgICAgfVxuXG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICAgIGluZGV4OiBuZXh0SW5kZXgsXG4gICAgICAgIGVudHJpZXM6IG5leHRFbnRyaWVzXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgcmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UocGF0aCwgc3RhdGUpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCEoKHR5cGVvZiBwYXRoID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihwYXRoKSkgPT09ICdvYmplY3QnICYmIHBhdGguc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSwgJ1lvdSBzaG91bGQgYXZvaWQgcHJvdmlkaW5nIGEgMm5kIHN0YXRlIGFyZ3VtZW50IHRvIHJlcGxhY2Ugd2hlbiB0aGUgMXN0ICcgKyAnYXJndW1lbnQgaXMgYSBsb2NhdGlvbi1saWtlIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIHN0YXRlOyBpdCBpcyBpZ25vcmVkJyk7XG5cbiAgICB2YXIgYWN0aW9uID0gJ1JFUExBQ0UnO1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG5cbiAgICAgIGhpc3RvcnkuZW50cmllc1toaXN0b3J5LmluZGV4XSA9IGxvY2F0aW9uO1xuXG4gICAgICBzZXRTdGF0ZSh7IGFjdGlvbjogYWN0aW9uLCBsb2NhdGlvbjogbG9jYXRpb24gfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGdvID0gZnVuY3Rpb24gZ28obikge1xuICAgIHZhciBuZXh0SW5kZXggPSBjbGFtcChoaXN0b3J5LmluZGV4ICsgbiwgMCwgaGlzdG9yeS5lbnRyaWVzLmxlbmd0aCAtIDEpO1xuXG4gICAgdmFyIGFjdGlvbiA9ICdQT1AnO1xuICAgIHZhciBsb2NhdGlvbiA9IGhpc3RvcnkuZW50cmllc1tuZXh0SW5kZXhdO1xuXG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmIChvaykge1xuICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgICAgIGluZGV4OiBuZXh0SW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNaW1pYyB0aGUgYmVoYXZpb3Igb2YgRE9NIGhpc3RvcmllcyBieVxuICAgICAgICAvLyBjYXVzaW5nIGEgcmVuZGVyIGFmdGVyIGEgY2FuY2VsbGVkIFBPUC5cbiAgICAgICAgc2V0U3RhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgZ29CYWNrID0gZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIHJldHVybiBnbygtMSk7XG4gIH07XG5cbiAgdmFyIGdvRm9yd2FyZCA9IGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICByZXR1cm4gZ28oMSk7XG4gIH07XG5cbiAgdmFyIGNhbkdvID0gZnVuY3Rpb24gY2FuR28obikge1xuICAgIHZhciBuZXh0SW5kZXggPSBoaXN0b3J5LmluZGV4ICsgbjtcbiAgICByZXR1cm4gbmV4dEluZGV4ID49IDAgJiYgbmV4dEluZGV4IDwgaGlzdG9yeS5lbnRyaWVzLmxlbmd0aDtcbiAgfTtcblxuICB2YXIgYmxvY2sgPSBmdW5jdGlvbiBibG9jaygpIHtcbiAgICB2YXIgcHJvbXB0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcbiAgICByZXR1cm4gdHJhbnNpdGlvbk1hbmFnZXIuc2V0UHJvbXB0KHByb21wdCk7XG4gIH07XG5cbiAgdmFyIGxpc3RlbiA9IGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIHJldHVybiB0cmFuc2l0aW9uTWFuYWdlci5hcHBlbmRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIH07XG5cbiAgdmFyIGhpc3RvcnkgPSB7XG4gICAgbGVuZ3RoOiBlbnRyaWVzLmxlbmd0aCxcbiAgICBhY3Rpb246ICdQT1AnLFxuICAgIGxvY2F0aW9uOiBlbnRyaWVzW2luZGV4XSxcbiAgICBpbmRleDogaW5kZXgsXG4gICAgZW50cmllczogZW50cmllcyxcbiAgICBjcmVhdGVIcmVmOiBjcmVhdGVIcmVmLFxuICAgIHB1c2g6IHB1c2gsXG4gICAgcmVwbGFjZTogcmVwbGFjZSxcbiAgICBnbzogZ28sXG4gICAgZ29CYWNrOiBnb0JhY2ssXG4gICAgZ29Gb3J3YXJkOiBnb0ZvcndhcmQsXG4gICAgY2FuR286IGNhbkdvLFxuICAgIGJsb2NrOiBibG9jayxcbiAgICBsaXN0ZW46IGxpc3RlblxuICB9O1xuXG4gIHJldHVybiBoaXN0b3J5O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlTWVtb3J5SGlzdG9yeTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIgPSBmdW5jdGlvbiBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcigpIHtcbiAgdmFyIHByb21wdCA9IG51bGw7XG5cbiAgdmFyIHNldFByb21wdCA9IGZ1bmN0aW9uIHNldFByb21wdChuZXh0UHJvbXB0KSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShwcm9tcHQgPT0gbnVsbCwgJ0EgaGlzdG9yeSBzdXBwb3J0cyBvbmx5IG9uZSBwcm9tcHQgYXQgYSB0aW1lJyk7XG5cbiAgICBwcm9tcHQgPSBuZXh0UHJvbXB0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChwcm9tcHQgPT09IG5leHRQcm9tcHQpIHByb21wdCA9IG51bGw7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgY29uZmlybVRyYW5zaXRpb25UbyA9IGZ1bmN0aW9uIGNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgY2FsbGJhY2spIHtcbiAgICAvLyBUT0RPOiBJZiBhbm90aGVyIHRyYW5zaXRpb24gc3RhcnRzIHdoaWxlIHdlJ3JlIHN0aWxsIGNvbmZpcm1pbmdcbiAgICAvLyB0aGUgcHJldmlvdXMgb25lLCB3ZSBtYXkgZW5kIHVwIGluIGEgd2VpcmQgc3RhdGUuIEZpZ3VyZSBvdXQgdGhlXG4gICAgLy8gYmVzdCB3YXkgdG8gaGFuZGxlIHRoaXMuXG4gICAgaWYgKHByb21wdCAhPSBudWxsKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdHlwZW9mIHByb21wdCA9PT0gJ2Z1bmN0aW9uJyA/IHByb21wdChsb2NhdGlvbiwgYWN0aW9uKSA6IHByb21wdDtcblxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZ2V0VXNlckNvbmZpcm1hdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGdldFVzZXJDb25maXJtYXRpb24ocmVzdWx0LCBjYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ0EgaGlzdG9yeSBuZWVkcyBhIGdldFVzZXJDb25maXJtYXRpb24gZnVuY3Rpb24gaW4gb3JkZXIgdG8gdXNlIGEgcHJvbXB0IG1lc3NhZ2UnKTtcblxuICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gZmFsc2UgZnJvbSBhIHRyYW5zaXRpb24gaG9vayB0byBjYW5jZWwgdGhlIHRyYW5zaXRpb24uXG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdCAhPT0gZmFsc2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGxpc3RlbmVycyA9IFtdO1xuXG4gIHZhciBhcHBlbmRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFwcGVuZExpc3RlbmVyKGZuKSB7XG4gICAgdmFyIGlzQWN0aXZlID0gdHJ1ZTtcblxuICAgIHZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgICAgaWYgKGlzQWN0aXZlKSBmbi5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSAhPT0gbGlzdGVuZXI7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBub3RpZnlMaXN0ZW5lcnMgPSBmdW5jdGlvbiBub3RpZnlMaXN0ZW5lcnMoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gbGlzdGVuZXIuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNldFByb21wdDogc2V0UHJvbXB0LFxuICAgIGNvbmZpcm1UcmFuc2l0aW9uVG86IGNvbmZpcm1UcmFuc2l0aW9uVG8sXG4gICAgYXBwZW5kTGlzdGVuZXI6IGFwcGVuZExpc3RlbmVyLFxuICAgIG5vdGlmeUxpc3RlbmVyczogbm90aWZ5TGlzdGVuZXJzXG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNyZWF0ZVBhdGggPSBleHBvcnRzLnBhcnNlUGF0aCA9IGV4cG9ydHMubG9jYXRpb25zQXJlRXF1YWwgPSBleHBvcnRzLmNyZWF0ZUxvY2F0aW9uID0gZXhwb3J0cy5jcmVhdGVNZW1vcnlIaXN0b3J5ID0gZXhwb3J0cy5jcmVhdGVIYXNoSGlzdG9yeSA9IGV4cG9ydHMuY3JlYXRlQnJvd3Nlckhpc3RvcnkgPSB1bmRlZmluZWQ7XG5cbnZhciBfTG9jYXRpb25VdGlscyA9IHJlcXVpcmUoJy4vTG9jYXRpb25VdGlscycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX0xvY2F0aW9uVXRpbHMuY3JlYXRlTG9jYXRpb247XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdsb2NhdGlvbnNBcmVFcXVhbCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9Mb2NhdGlvblV0aWxzLmxvY2F0aW9uc0FyZUVxdWFsO1xuICB9XG59KTtcblxudmFyIF9QYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3BhcnNlUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9QYXRoVXRpbHMucGFyc2VQYXRoO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9QYXRoVXRpbHMuY3JlYXRlUGF0aDtcbiAgfVxufSk7XG5cbnZhciBfY3JlYXRlQnJvd3Nlckhpc3RvcnkyID0gcmVxdWlyZSgnLi9jcmVhdGVCcm93c2VySGlzdG9yeScpO1xuXG52YXIgX2NyZWF0ZUJyb3dzZXJIaXN0b3J5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUJyb3dzZXJIaXN0b3J5Mik7XG5cbnZhciBfY3JlYXRlSGFzaEhpc3RvcnkyID0gcmVxdWlyZSgnLi9jcmVhdGVIYXNoSGlzdG9yeScpO1xuXG52YXIgX2NyZWF0ZUhhc2hIaXN0b3J5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUhhc2hIaXN0b3J5Mik7XG5cbnZhciBfY3JlYXRlTWVtb3J5SGlzdG9yeTIgPSByZXF1aXJlKCcuL2NyZWF0ZU1lbW9yeUhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVNZW1vcnlIaXN0b3J5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZU1lbW9yeUhpc3RvcnkyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5jcmVhdGVCcm93c2VySGlzdG9yeSA9IF9jcmVhdGVCcm93c2VySGlzdG9yeTMuZGVmYXVsdDtcbmV4cG9ydHMuY3JlYXRlSGFzaEhpc3RvcnkgPSBfY3JlYXRlSGFzaEhpc3RvcnkzLmRlZmF1bHQ7XG5leHBvcnRzLmNyZWF0ZU1lbW9yeUhpc3RvcnkgPSBfY3JlYXRlTWVtb3J5SGlzdG9yeTMuZGVmYXVsdDsiLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciBfX0RFVl9fID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcblxudmFyIHdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAoX19ERVZfXykge1xuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5sZW5ndGggPCAxMCB8fCAoL15bc1xcV10qJC8pLnRlc3QoZm9ybWF0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIHdhcm5pbmcgZm9ybWF0IHNob3VsZCBiZSBhYmxlIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgJyArXG4gICAgICAgICd3YXJuaW5nLiBQbGVhc2UsIHVzZSBhIG1vcmUgZGVzY3JpcHRpdmUgZm9ybWF0IHRoYW46ICcgKyBmb3JtYXRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCh4KSB7fVxuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciBfX0RFVl9fID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcblxudmFyIHdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAoX19ERVZfXykge1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMiA/IGxlbiAtIDIgOiAwKTtcbiAgICBmb3IgKHZhciBrZXkgPSAyOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDJdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArXG4gICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfVxuXG4gIHdhcm5pbmcgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMiA/IGxlbiAtIDIgOiAwKTtcbiAgICBmb3IgKHZhciBrZXkgPSAyOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDJdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICtcbiAgICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkobnVsbCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3dpdGhSb3V0ZXIgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyL3dpdGhSb3V0ZXJcIik7XG5cbnZhciBfd2l0aFJvdXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93aXRoUm91dGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX3dpdGhSb3V0ZXIyLmRlZmF1bHQ7IC8vIFdyaXR0ZW4gaW4gdGhpcyByb3VuZCBhYm91dCB3YXkgZm9yIGJhYmVsLXRyYW5zZm9ybS1pbXBvcnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL01lbW9yeVJvdXRlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvUHJvbXB0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9SZWRpcmVjdC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvUm91dGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL1JvdXRlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvU3RhdGljUm91dGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9Td2l0Y2guanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2dlbmVyYXRlUGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL21hdGNoUGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvd2l0aFJvdXRlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC10b2FzdGlmeS9saWIvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9yZWR1eC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXBhdGhuYW1lL2Nqcy9pbmRleC5qc1wiKTsiLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgZ2xvYmFsLCBkZWZpbmUsIFN5c3RlbSwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG52YXIgX19leHRlbmRzO1xyXG52YXIgX19hc3NpZ247XHJcbnZhciBfX3Jlc3Q7XHJcbnZhciBfX2RlY29yYXRlO1xyXG52YXIgX19wYXJhbTtcclxudmFyIF9fbWV0YWRhdGE7XHJcbnZhciBfX2F3YWl0ZXI7XHJcbnZhciBfX2dlbmVyYXRvcjtcclxudmFyIF9fZXhwb3J0U3RhcjtcclxudmFyIF9fdmFsdWVzO1xyXG52YXIgX19yZWFkO1xyXG52YXIgX19zcHJlYWQ7XHJcbnZhciBfX2F3YWl0O1xyXG52YXIgX19hc3luY0dlbmVyYXRvcjtcclxudmFyIF9fYXN5bmNEZWxlZ2F0b3I7XHJcbnZhciBfX2FzeW5jVmFsdWVzO1xyXG52YXIgX19tYWtlVGVtcGxhdGVPYmplY3Q7XHJcbnZhciBfX2ltcG9ydFN0YXI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQ7XHJcbihmdW5jdGlvbiAoZmFjdG9yeSkge1xyXG4gICAgdmFyIHJvb3QgPSB0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDogdHlwZW9mIHRoaXMgPT09IFwib2JqZWN0XCIgPyB0aGlzIDoge307XHJcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcclxuICAgICAgICBkZWZpbmUoXCJ0c2xpYlwiLCBbXCJleHBvcnRzXCJdLCBmdW5jdGlvbiAoZXhwb3J0cykgeyBmYWN0b3J5KGNyZWF0ZUV4cG9ydGVyKHJvb3QsIGNyZWF0ZUV4cG9ydGVyKGV4cG9ydHMpKSk7IH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICBmYWN0b3J5KGNyZWF0ZUV4cG9ydGVyKHJvb3QsIGNyZWF0ZUV4cG9ydGVyKG1vZHVsZS5leHBvcnRzKSkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZmFjdG9yeShjcmVhdGVFeHBvcnRlcihyb290KSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVFeHBvcnRlcihleHBvcnRzLCBwcmV2aW91cykge1xyXG4gICAgICAgIGlmIChleHBvcnRzICE9PSByb290KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoaWQsIHYpIHsgcmV0dXJuIGV4cG9ydHNbaWRdID0gcHJldmlvdXMgPyBwcmV2aW91cyhpZCwgdikgOiB2OyB9O1xyXG4gICAgfVxyXG59KVxyXG4oZnVuY3Rpb24gKGV4cG9ydGVyKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuXHJcbiAgICBfX2V4dGVuZHMgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIF9fcmVzdCA9IGZ1bmN0aW9uIChzLCBlKSB7XHJcbiAgICAgICAgdmFyIHQgPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuXHJcbiAgICBfX2RlY29yYXRlID0gZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICAgICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICAgICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxuICAgIH07XHJcblxyXG4gICAgX19wYXJhbSA9IGZ1bmN0aW9uIChwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxuICAgIH07XHJcblxyXG4gICAgX19tZXRhZGF0YSA9IGZ1bmN0aW9uIChtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9fYXdhaXRlciA9IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgICAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBfX2dlbmVyYXRvciA9IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICAgICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgICAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgICAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIF9fZXhwb3J0U3RhciA9IGZ1bmN0aW9uIChtLCBleHBvcnRzKSB7XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG4gICAgfTtcclxuXHJcbiAgICBfX3ZhbHVlcyA9IGZ1bmN0aW9uIChvKSB7XHJcbiAgICAgICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgICAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgX19yZWFkID0gZnVuY3Rpb24gKG8sIG4pIHtcclxuICAgICAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICAgICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgICAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyO1xyXG4gICAgfTtcclxuXHJcbiAgICBfX3NwcmVhZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgICAgIHJldHVybiBhcjtcclxuICAgIH07XHJcblxyXG4gICAgX19hd2FpdCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbiAgICB9O1xyXG5cclxuICAgIF9fYXN5bmNHZW5lcmF0b3IgPSBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICAgICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgICAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgICAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgICAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICAgICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG4gICAgfTtcclxuXHJcbiAgICBfX2FzeW5jRGVsZWdhdG9yID0gZnVuY3Rpb24gKG8pIHtcclxuICAgICAgICB2YXIgaSwgcDtcclxuICAgICAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxuICAgIH07XHJcblxyXG4gICAgX19hc3luY1ZhbHVlcyA9IGZ1bmN0aW9uIChvKSB7XHJcbiAgICAgICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgICAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgICAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICAgICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG4gICAgfTtcclxuXHJcbiAgICBfX21ha2VUZW1wbGF0ZU9iamVjdCA9IGZ1bmN0aW9uIChjb29rZWQsIHJhdykge1xyXG4gICAgICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICAgICAgcmV0dXJuIGNvb2tlZDtcclxuICAgIH07XHJcblxyXG4gICAgX19pbXBvcnRTdGFyID0gZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICAgICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICBfX2ltcG9ydERlZmF1bHQgPSBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICAgICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGV4cG9ydGVyKFwiX19leHRlbmRzXCIsIF9fZXh0ZW5kcyk7XHJcbiAgICBleHBvcnRlcihcIl9fYXNzaWduXCIsIF9fYXNzaWduKTtcclxuICAgIGV4cG9ydGVyKFwiX19yZXN0XCIsIF9fcmVzdCk7XHJcbiAgICBleHBvcnRlcihcIl9fZGVjb3JhdGVcIiwgX19kZWNvcmF0ZSk7XHJcbiAgICBleHBvcnRlcihcIl9fcGFyYW1cIiwgX19wYXJhbSk7XHJcbiAgICBleHBvcnRlcihcIl9fbWV0YWRhdGFcIiwgX19tZXRhZGF0YSk7XHJcbiAgICBleHBvcnRlcihcIl9fYXdhaXRlclwiLCBfX2F3YWl0ZXIpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2dlbmVyYXRvclwiLCBfX2dlbmVyYXRvcik7XHJcbiAgICBleHBvcnRlcihcIl9fZXhwb3J0U3RhclwiLCBfX2V4cG9ydFN0YXIpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX3ZhbHVlc1wiLCBfX3ZhbHVlcyk7XHJcbiAgICBleHBvcnRlcihcIl9fcmVhZFwiLCBfX3JlYWQpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX3NwcmVhZFwiLCBfX3NwcmVhZCk7XHJcbiAgICBleHBvcnRlcihcIl9fYXdhaXRcIiwgX19hd2FpdCk7XHJcbiAgICBleHBvcnRlcihcIl9fYXN5bmNHZW5lcmF0b3JcIiwgX19hc3luY0dlbmVyYXRvcik7XHJcbiAgICBleHBvcnRlcihcIl9fYXN5bmNEZWxlZ2F0b3JcIiwgX19hc3luY0RlbGVnYXRvcik7XHJcbiAgICBleHBvcnRlcihcIl9fYXN5bmNWYWx1ZXNcIiwgX19hc3luY1ZhbHVlcyk7XHJcbiAgICBleHBvcnRlcihcIl9fbWFrZVRlbXBsYXRlT2JqZWN0XCIsIF9fbWFrZVRlbXBsYXRlT2JqZWN0KTtcclxuICAgIGV4cG9ydGVyKFwiX19pbXBvcnRTdGFyXCIsIF9faW1wb3J0U3Rhcik7XHJcbiAgICBleHBvcnRlcihcIl9faW1wb3J0RGVmYXVsdFwiLCBfX2ltcG9ydERlZmF1bHQpO1xyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvdmFsdWUtZXF1YWwvY2pzL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL3dhcm5pbmcvd2FybmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vbW9kdWxlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vdmVuZG9yXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
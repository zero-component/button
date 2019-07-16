(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{170:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(11),classnames=__webpack_require__(409),classnames_default=__webpack_require__.n(classnames),lodash_omit=__webpack_require__(246),lodash_omit_default=__webpack_require__.n(lodash_omit);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var BLACK_LIST=["prefixCls","className","style","href","target","htmlType","className","disabled","onClick"],button_Button=function(_React$Component){function Button(){var _getPrototypeOf2,_this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Button);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}(this,(_getPrototypeOf2=_getPrototypeOf(Button)).call.apply(_getPrototypeOf2,[this].concat(args))),_defineProperty(_assertThisInitialized(_this),"handleClick",function(e){var _this$props=_this.props,disabled=_this$props.disabled,onClick=_this$props.onClick;disabled||onClick&&onClick(e)}),_this}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Button,react["Component"]),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Button,[{key:"wrapValueBySpan",value:function wrapValueBySpan(children){return null==children?null:react.Children.map(children,function(child){return"string"==typeof child?react.createElement("span",null,child):child})}},{key:"renderLink",value:function renderLink(classes,children){var _this$props2=this.props,disabled=_this$props2.disabled,_this$props2$href=_this$props2.href,href=void 0===_this$props2$href?"":_this$props2$href,target=_this$props2.target,nodeProps=lodash_omit_default()(this.props,BLACK_LIST);return react.createElement("a",_extends({},disabled?{}:{href:href,target:target},nodeProps,{className:classes,onClick:this.handleClick}),children)}},{key:"renderButton",value:function renderButton(classes,children){var _this$props3=this.props,disabled=_this$props3.disabled,htmlType=_this$props3.htmlType,nodeProps=lodash_omit_default()(this.props,BLACK_LIST);return react.createElement("button",_extends({},nodeProps,htmlType?{type:htmlType}:{},{className:classes,disabled:disabled,onClick:this.handleClick}),children)}},{key:"render",value:function render(){var _this$props4=this.props,disabled=_this$props4.disabled,children=_this$props4.children,prefixCls=_this$props4.prefixCls,className=_this$props4.className,renderName=_this$props4.href?"renderLink":"renderButton",classes=classnames_default()(prefixCls,className,_defineProperty({},"".concat(prefixCls,"-disabled"),disabled));return this[renderName](classes,this.wrapValueBySpan(children))}}]),Button}();_defineProperty(button_Button,"defaultProps",{prefixCls:"zero-button",className:"",style:{},disabled:!1});__webpack_exports__.a=button_Button},404:function(module,exports,__webpack_require__){var content=__webpack_require__(843);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(845)(content,options);content.locals&&(module.exports=content.locals)},408:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(44),__webpack_require__(45),__webpack_require__(58),__webpack_require__(36),__webpack_require__(241),__webpack_require__(2),__webpack_require__(242),__webpack_require__(243),__webpack_require__(46),__webpack_require__(47),__webpack_require__(48);var react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(11),react__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__),_src__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(170);__webpack_require__(404);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}var _ref=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_12__.a,null,"12345 copy"),Test=function(_React$Component){function Test(){return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Test),_possibleConstructorReturn(this,_getPrototypeOf(Test).apply(this,arguments))}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Test,react__WEBPACK_IMPORTED_MODULE_11___default.a.Component),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Test,[{key:"render",value:function render(){return _ref}}]),Test}();Test.displayName="Test",__webpack_exports__.a=Test,Test.__docgenInfo={description:"",methods:[],displayName:"Test"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/button-copy.js"]={name:"Test",docgenInfo:Test.__docgenInfo,path:"examples/button-copy.js"})},410:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(44),__webpack_require__(45),__webpack_require__(58),__webpack_require__(36),__webpack_require__(241),__webpack_require__(2),__webpack_require__(242),__webpack_require__(243),__webpack_require__(46),__webpack_require__(47),__webpack_require__(48);var react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(11),react__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__),_src__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(170);__webpack_require__(404);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}var _ref=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_12__.a,null,"12345"),Test=function(_React$Component){function Test(){return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Test),_possibleConstructorReturn(this,_getPrototypeOf(Test).apply(this,arguments))}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Test,react__WEBPACK_IMPORTED_MODULE_11___default.a.Component),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Test,[{key:"render",value:function render(){return _ref}}]),Test}();Test.displayName="Test",__webpack_exports__.a=Test,Test.__docgenInfo={description:"",methods:[],displayName:"Test"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/button.js"]={name:"Test",docgenInfo:Test.__docgenInfo,path:"examples/button.js"})},411:function(module,exports,__webpack_require__){__webpack_require__(412),__webpack_require__(515),module.exports=__webpack_require__(516)},516:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(245);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({options:{theme:{name:"@z2o/button",brandUrl:"https://github.com/zero-component/button#readme",brandTitle:"@z2o/button"}}}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){__webpack_require__(678)},module)}.call(this,__webpack_require__(277)(module))},678:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(407),_examples_button_copy__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(408),_examples_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(410),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_examples_button_copy__WEBPACK_IMPORTED_MODULE_2__.a,null),_ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_examples_button__WEBPACK_IMPORTED_MODULE_3__.a,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("@z2o/button",module).add("button-copy",function(){return _ref}).add("button",function(){return _ref2})}.call(this,__webpack_require__(277)(module))},843:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(844)(!1)).push([module.i,".zero-button {\n  background-color: red;\n}\n",""])}},[[411,1,2]]]);
//# sourceMappingURL=main.4460e870867af4469b8b.bundle.js.map
"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_urls=require("./../consts/urls.js"),urls=_interopRequireWildcard(_urls),Result=function(e){function t(){var e,r,n,o;_classCallCheck(this,t);for(var a=arguments.length,i=Array(a),u=0;u<a;u++)i[u]=arguments[u];return r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.config={navigationBarTitleText:"都城快餐",disableScroll:!0},n.components={},n.data={bgUrl:urls.BG_RESULT,msg:"",delta:1,type:"success",content:""},n.computed={},n.methods={handleCheckButtonClick:function(){var e=this;_wepy2.default.navigateBack({delta:parseInt(e.delta)})}},n.events={},o=r,_possibleConstructorReturn(n,o)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(){var e=this;for(var t in e.$wxpage.options)e[t]=e.$wxpage.options[t]}}]),t}(_wepy2.default.page);Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Result,"pages/result"));
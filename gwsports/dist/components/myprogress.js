"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),MyProgress=function(e){function t(){var e,r,o,n;_classCallCheck(this,t);for(var u=arguments.length,s=Array(u),a=0;a<u;a++)s[a]=arguments[a];return r=o=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.props={progress:{type:Number,default:0},showLabel:{type:Boolean,default:!0},borderRadius:{type:Boolean,default:!0},section:{type:Number,default:1},min:{type:Number,default:0},max:{type:Number,default:100},height:{type:Number,default:36},color:{type:String,default:"#58A5FB"},backgroundColor:{type:String,default:"#E9E9E9"}},o.computed={labels:function(){for(var e=this,t=[],r=(e.max-e.min)/e.section,o=e.min;o<e.max;o+=r)t.push(o);return t.push(e.max),t}},n=r,_possibleConstructorReturn(o,n)}return _inherits(t,e),t}(_wepy2.default.component);exports.default=MyProgress;
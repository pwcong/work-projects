"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),_wepy=require("./npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy);require("./npm/wepy-async-function/index.js");var _default=function(e){function t(){_classCallCheck(this,t);var e=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.config={pages:["pages/index","pages/customer/customer","pages/customer/customer_give","pages/customer/customer_center","pages/customer/customer_bill","pages/customer/customer_bill_all","pages/manager/manager","pages/manager/manager_setting","pages/manager/manager_switch","pages/manager/manager_manage","pages/manager/manager_modify","pages/manager/manager_select","pages/manager/manager_bill","pages/cashier/cashier","pages/cashier/cashier_code","pages/cashier/cashier_center","pages/cashier/cashier_bill","pages/result","pages/msg"],window:{backgroundTextStyle:"light",navigationBarBackgroundColor:"#fff",navigationBarTitleText:"WeChat",navigationBarTextStyle:"black"},networkTimeout:{request:1e4,downloadFile:1e4}},e.globalData={user:null,token:null,secret:null,expires_in:null,time_step:null,key:null},e.use("requestfix"),e}return _inherits(t,e),_createClass(t,[{key:"clearLoginStat",value:function(){var e=this;e.globalData.user=null,e.globalData.token=null,e.globalData.secret=null,e.globalData.expires_in=null,e.globalData.time_step=null,wx.removeStorageSync("user"),wx.removeStorageSync("token"),wx.removeStorageSync("secret"),wx.removeStorageSync("expires_in"),wx.removeStorageSync("time_step")}},{key:"onLaunch",value:function(){}}]),t}(_wepy2.default.app);App(require("./npm/wepy/lib/wepy.js").default.$createApp(_default,void 0));
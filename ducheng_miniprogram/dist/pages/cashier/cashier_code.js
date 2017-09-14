"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function o(a,n){try{var l=t[a](n),u=l.value}catch(e){return void r(e)}if(!l.done)return Promise.resolve(u).then(function(e){o("next",e)},function(e){o("throw",e)});e(u)}return o("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_trade=require("./../../utils/trade/trade.js"),_trade2=_interopRequireDefault(_trade),_trade3=require("./../../network/api/trade.js"),tradeApi=_interopRequireWildcard(_trade3),CashierCode=function(e){function t(){var e,r,o,a;_classCallCheck(this,t);for(var n=arguments.length,l=Array(n),u=0;u<n;u++)l[u]=arguments[u];return r=o=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.config={navigationBarTitleText:"收款",disableScroll:!0},o.components={},o.data={amount:"",verify_code:"",code:"",keys:[{value:"1",flag:1,class:"key-border-bottom"},{value:"2",flag:1,class:"key-border-right key-border-bottom key-border-left"},{value:"3",flag:1,class:"key-border-bottom"},{value:"4",flag:1,class:"key-border-bottom"},{value:"5",flag:1,class:"key-border-right key-border-bottom key-border-left"},{value:"6",flag:1,class:"key-border-bottom"},{value:"7",flag:1,class:"key-border-bottom"},{value:"8",flag:1,class:"key-border-right key-border-bottom key-border-left"},{value:"9",flag:1,class:"key-border-bottom"},{value:"",flag:0,class:"key-2"},{value:"0",flag:1,class:"key-border-right key-border-left"},{value:"",flag:-1,class:"key-2",icon:"../../assets/imgs/keyboard_delete.png"}]},o.computed={},o.methods={handleCheckButtonClick:function(){var e=this;if(!e.code||18!=e.code.length)return void _wepy2.default.showModal({title:"提示",content:"请输入正确的识别码",showCancel:!1});e.checkout(e.$parent.globalData.token,_trade2.default.formatAmount(e.amount),e.code,e.verify_code,"")},handleKeyButtonClick:function(e){var t=this,r=t.keys[e];switch(r.flag){case 1:t.code.length<18&&(t.code+=r.value);break;case-1:t.code=t.code.slice(0,t.code.length-1)}}},o.events={},a=r,_possibleConstructorReturn(o,a)}return _inherits(t,e),_createClass(t,[{key:"checkout",value:function(){function e(e,r,o,a,n){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t,r,o,a,n){var l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l=null,_wepy2.default.showLoading({title:"收款中",mask:!0}),e.prev=2,e.next=5,tradeApi.checkout(t,r,o,a,n);case 5:l=e.sent,e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(2),_wepy2.default.navigateTo({url:"../result?msg=收款失败&content="+e.t0+"&type=warn"}),e.abrupt("return");case 12:return e.prev=12,_wepy2.default.hideLoading(),e.finish(12);case 15:_wepy2.default.navigateTo({url:"../result?msg=成功收款&content=￥"+l.order.amount});case 16:case"end":return e.stop()}},e,this,[[2,8,12,15]])}));return e}()},{key:"onLoad",value:function(){var e=this;for(var t in e.$wxpage.options)e[t]=e.$wxpage.options[t]}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(CashierCode,"pages/cashier/cashier_code"));
"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,i){try{var o=t[a](i),u=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_eventbus=require("./../../eventbus/eventbus.js"),_eventbus2=_interopRequireDefault(_eventbus),_time=require("./../../utils/time.js"),_time2=_interopRequireDefault(_time),_string=require("./../../utils/string.js"),_string2=_interopRequireDefault(_string),_auth=require("./../../network/api/auth.js"),authApi=_interopRequireWildcard(_auth),_stat=require("./../../network/api/stat.js"),statApi=_interopRequireWildcard(_stat),Manager=function(e){function t(){var e,n,r,a;_classCallCheck(this,t);for(var i=arguments.length,o=Array(i),u=0;u<i;u++)o[u]=arguments[u];return n=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.config={navigationBarTitleText:"运营管理",disableScroll:!0},r.components={},r.data={nickname:"",branchStat:null,money:null,branch:null,renewTimer:null,peopleIconUrl:"../../assets/imgs/icon_people_fill.png"},r.computed={},r.methods={handleSwitchButtonClick:function(e){_wepy2.default.navigateTo({url:"manager_switch"})},handleBillButtonClick:function(e){var t=this;_wepy2.default.navigateTo({url:"manager_bill?branch_id="+t.branch.id+"&branch_name="+t.branch.name})},handleManageButtonClick:function(e){var t=this;_wepy2.default.navigateTo({url:"manager_manage?branch_id="+t.branch.id+"&branch_name="+t.branch.name})},handleSettingButtonClick:function(e){_wepy2.default.navigateTo({url:"manager_setting"})}},r.events={},a=n,_possibleConstructorReturn(r,a)}return _inherits(t,e),_createClass(t,[{key:"renew",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,t.renewTimer&&(clearTimeout(t.renewTimer),t.renewTimer=null,t.$apply()),n=null,e.prev=3,e.next=6,authApi.renew(t.$parent.globalData.token);case 6:n=e.sent,e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(3),_wepy2.default.showModal({title:"更新失败",content:e.t0,showCancel:!1}),e.abrupt("return");case 13:return e.prev=13,e.finish(13);case 15:t.$parent.globalData.token=n.token,t.$parent.globalData.expires_in=n.expires_in,t.$parent.globalData.secret=n.secret,t.$parent.globalData.time_step=n.time_step,t.renewTimer=setTimeout(function(){t.renew()},_time2.default.timeSpace(n.expires_in)),t.$apply();case 21:case"end":return e.stop()}},e,this,[[3,9,13,15]])}));return e}()},{key:"initRenewTimer",value:function(){var e=this;e.renewTimer=setTimeout(function(){e.renew()},_time2.default.timeSpace(e.$parent.globalData.expires_in))}},{key:"loadBranch",value:function(e){this.branch=e}},{key:"loadBranchStat",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this,r=null,_wepy2.default.showLoading({title:"获取中",mask:!0}),e.prev=3,e.next=6,statApi.branchTodayStat(n.$parent.globalData.token,t);case 6:r=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),_wepy2.default.showModal({title:"获取失败",content:e.t0,showCancel:!1});case 12:return e.prev=12,_wepy2.default.hideLoading(),e.finish(12);case 15:n.branchStat=r.stat,n.money=_string2.default.formatPrice(parseFloat(r.stat.total)-parseFloat(r.stat.total_refunded),2),n.$apply();case 18:case"end":return e.stop()}},e,this,[[3,9,12,15]])}));return e}()},{key:"onShow",value:function(){var e=this;e.branch&&e.branch.id&&e.loadBranchStat(e.branch.id)}},{key:"onLoad",value:function(){var e=this;e.nickname=e.$parent.globalData.user.nickname||e.$parent.globalData.user.username,e.initRenewTimer(),_eventbus2.default.subscribe("manager-loadbranch",function(t){e.loadBranch(t)})}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Manager,"pages/manager/manager"));
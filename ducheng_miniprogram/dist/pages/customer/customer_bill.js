"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function a(n,o){try{var u=t[n](o),c=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(c).then(function(e){a("next",e)},function(e){a("throw",e)});e(c)}return a("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_date=require("./../../utils/date.js"),_date2=_interopRequireDefault(_date),_stat=require("./../../network/api/stat.js"),statApi=_interopRequireWildcard(_stat),PAGE_LIMIT=20,CustomerBill=function(e){function t(){var e,r,a,n;_classCallCheck(this,t);for(var o=arguments.length,u=Array(o),c=0;c<o;c++)u[c]=arguments[c];return r=a=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.config={navigationBarTitleText:"月度帐单",enablePullDownRefresh:!0,backgroundTextStyle:"dark"},a.components={},a.data={currentPage:1,loadingMore:!1,hasMore:!1,calendarIconUrl:"../../assets/imgs/icon_calendar.png",moneyIconUrl:"../../assets/imgs/icon_home.png",record:{year:"-",month:"-",out:"-",in:"-",details:[]}},a.computed={},a.methods={handleCalendarButtonClick:function(e){},handleCalendarChange:function(e){var t=this,r=e.detail.value.split("-");t.record.year=parseInt(r[0]),t.record.month=parseInt(r[1]),t.currentPage=1,t.record.details=[],t.loadStat(t.record.year,t.record.month),t.loadRecords(t.record.year,t.record.month)},handleAllBillButtonClick:function(e){_wepy2.default.navigateTo({url:"customer_bill_all"})},handleLoadMore:function(e){var t=this;!t.loadingMore&&t.hasMore&&(t.loadingMore=!0,t.$apply(),t.loadRecords(t.record.year,t.record.month))}},a.events={},n=r,_possibleConstructorReturn(a,n)}return _inherits(t,e),_createClass(t,[{key:"initDate",value:function(){var e=this,t=new Date;e.record.year=t.getFullYear(),e.record.month=t.getMonth()+1,e.$apply()}},{key:"loadRecords",value:function(){function e(e,r){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t,r){var a,n,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this,n=_date2.default.maxDate(t,r),o=null,e.prev=3,e.next=6,statApi.customerOrder(a.$parent.globalData.token,t+"-"+_date2.default.format(r)+"-01 00:00:00",t+"-"+_date2.default.format(r)+"-"+n+" 23:59:59",a.currentPage,PAGE_LIMIT);case 6:o=e.sent,e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(3),e.abrupt("return");case 12:return e.prev=12,_wepy2.default.stopPullDownRefresh(),a.loadingMore=!1,a.$apply(),e.finish(12);case 17:a.record.details=[].concat(_toConsumableArray(a.record.details),_toConsumableArray(o.orders.map(function(e){var t="充值"==e.type||"退款"==e.type||"团餐客户拨款"==e.type||"受赠"==e.type,r=null;switch(e.type){case"转赠":try{var a=JSON.parse(e.payload);r=e.type+"("+(a.toUsername||a.toUserId||"未知")+")"}catch(t){r=e.branch_name||e.type}break;case"受赠":try{var n=JSON.parse(e.payload);r=e.type+"("+(n.fromUsername||n.fromUserId||"未知")+")"}catch(t){r=e.branch_name||e.type}break;default:r=e.branch_name||e.type}return{datetime:e.created_at.substring(5,16),inout:t?"+"+e.amount:"-"+e.amount,balance:e.balance_after||"-",action:r}}))),o.orders.length===PAGE_LIMIT?(a.currentPage+=1,a.hasMore=!0):a.hasMore=!1,a.$apply();case 20:case"end":return e.stop()}},e,this,[[3,9,12,17]])}));return e}()},{key:"loadStat",value:function(){function e(e,r){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t,r){var a,n,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this,n=_date2.default.maxDate(t,r),_wepy2.default.showLoading({title:"获取中",mask:!0}),o=null,e.prev=4,e.next=7,statApi.customerStat(a.$parent.globalData.token,t+"-"+_date2.default.format(r)+"-01 00:00:00",t+"-"+_date2.default.format(r)+"-"+n+" 23:59:59");case 7:o=e.sent,e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(4),_wepy2.default.showModal({title:"获取失败",content:e.t0,showCancel:!1}),e.abrupt("return");case 14:return e.prev=14,_wepy2.default.hideLoading(),e.finish(14);case 17:a.record.in=o.stat.total_topup,a.record.out=o.stat.total_purchase,a.$apply();case 20:case"end":return e.stop()}},e,this,[[4,10,14,17]])}));return e}()},{key:"onPullDownRefresh",value:function(){var e=this;e.currentPage=1,e.record.details=[],e.loadStat(e.record.year,e.record.month),e.loadRecords(e.record.year,e.record.month)}},{key:"onShow",value:function(){}},{key:"onLoad",value:function(){var e=this;e.initDate(),e.loadStat(e.record.year,e.record.month),e.loadRecords(e.record.year,e.record.month)}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(CustomerBill,"pages/customer/customer_bill"));
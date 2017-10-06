"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function a(n,o){try{var u=t[n](o),l=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(l).then(function(e){a("next",e)},function(e){a("throw",e)});e(l)}return a("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_date=require("./../../utils/date.js"),_date2=_interopRequireDefault(_date),_stat=require("./../../network/api/stat.js"),statApi=_interopRequireWildcard(_stat),PAGE_LIMIT=20,CustomerBillAll=function(e){function t(){var e,r,a,n;_classCallCheck(this,t);for(var o=arguments.length,u=Array(o),l=0;l<o;l++)u[l]=arguments[l];return r=a=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.config={navigationBarTitleText:"全部帐单",enablePullDownRefresh:!0,backgroundTextStyle:"dark"},a.components={},a.data={moneyIconUrl:"../../assets/imgs/icon_home.png",currentPage:1,loadingMore:!1,hasMore:!1,record:{year:"-",month:"-",out:"-",in:"-",details:[]}},a.computed={},a.methods={handleLoadMore:function(e){var t=this;!t.loadingMore&&t.hasMore&&(t.loadingMore=!0,t.$apply(),t.loadRecords())}},a.events={},n=r,_possibleConstructorReturn(a,n)}return _inherits(t,e),_createClass(t,[{key:"loadRecords",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,a,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,r=new Date,a=r.getFullYear()+"-"+_date2.default.format(r.getMonth()+1)+"-"+_date2.default.format(r.getDate())+" "+_date2.default.format(r.getHours())+":"+_date2.default.format(r.getMinutes())+":"+_date2.default.format(r.getSeconds()),n=null,e.prev=4,e.next=7,statApi.customerOrder(t.$parent.globalData.token,"2017-01-01 00:00:00",a,t.currentPage,PAGE_LIMIT);case 7:n=e.sent,e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(4),e.abrupt("return");case 13:return e.prev=13,_wepy2.default.stopPullDownRefresh(),t.loadingMore=!1,t.$apply(),e.finish(13);case 18:t.record.details=[].concat(_toConsumableArray(t.record.details),_toConsumableArray(n.orders.map(function(e){var t="充值"==e.type||"退款"==e.type||"团餐客户拨款"==e.type||"受赠"==e.type,r=null;switch(e.type){case"转赠":try{var a=JSON.parse(e.payload);r=e.type+"("+(a.toUsername||a.toUserId||"未知")+")"}catch(t){r=e.branch_name||e.type}break;case"受赠":try{var n=JSON.parse(e.payload);r=e.type+"("+(n.fromUsername||n.fromUserId||"未知")+")"}catch(t){r=e.branch_name||e.type}break;default:r=e.branch_name||e.type}return{datetime:e.created_at.substring(5,16),inout:t?"+"+e.amount:"-"+e.amount,balance:e.balance_after||"-",action:r}}))),n.orders.length===PAGE_LIMIT?(t.currentPage+=1,t.hasMore=!0):t.hasMore=!1,t.$apply();case 21:case"end":return e.stop()}},e,this,[[4,10,13,18]])}));return e}()},{key:"loadStat",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,a,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,r=new Date,a=r.getFullYear()+"-"+_date2.default.format(r.getMonth()+1)+"-"+_date2.default.format(r.getDate())+" "+_date2.default.format(r.getHours())+":"+_date2.default.format(r.getMinutes())+":"+_date2.default.format(r.getSeconds()),_wepy2.default.showLoading({title:"获取中",mask:!0}),n=null,e.prev=5,e.next=8,statApi.customerStat(t.$parent.globalData.token,"2017-01-01 00:00:00",a);case 8:n=e.sent,e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(5),_wepy2.default.showModal({title:"获取失败",content:e.t0,showCancel:!1}),e.abrupt("return");case 15:return e.prev=15,_wepy2.default.hideLoading(),e.finish(15);case 18:t.record.in=n.stat.total_topup,t.record.out=n.stat.total_purchase,t.$apply();case 21:case"end":return e.stop()}},e,this,[[5,11,15,18]])}));return e}()},{key:"initDate",value:function(){var e=this,t=new Date;e.record.year=t.getFullYear(),e.record.month=t.getMonth()+1,e.$apply()}},{key:"onPullDownRefresh",value:function(){var e=this;e.currentPage=1,e.record.details=[],e.loadStat(),e.loadRecords()}},{key:"onLoad",value:function(){var e=this;e.initDate(),e.loadStat(),e.loadRecords()}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(CustomerBillAll,"pages/customer/customer_bill_all"));
"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,o){try{var i=t[a](o),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_cutline=require("./../../components/cutline.js"),_cutline2=_interopRequireDefault(_cutline),_eventbus=require("./../../eventbus/eventbus.js"),_eventbus2=_interopRequireDefault(_eventbus),_date=require("./../../utils/date.js"),_date2=_interopRequireDefault(_date),_string=require("./../../utils/string.js"),_string2=_interopRequireDefault(_string),_index=require("./../../consts/index.js"),consts=_interopRequireWildcard(_index),_branch=require("./../../network/api/branch.js"),branchApi=_interopRequireWildcard(_branch),_stat=require("./../../network/api/stat.js"),statApi=_interopRequireWildcard(_stat),PAGE_LIMIT=20,ManagerBill=function(e){function t(){var e,n,r,a;_classCallCheck(this,t);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return n=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.config={navigationBarTitleText:"对账",disableScroll:!0},r.$props={cutline1:{label:"选择条件"},cutline2:{label:"账单明细"}},r.$events={},r.components={cutline1:_cutline2.default,cutline2:_cutline2.default},r.data={ready:!1,loadingMore:!1,hasMore:!1,currentPage:1,range:[consts.YEARS,consts.MONTHS,consts.DATES,consts.HOURS,consts.MINUTES],rightArrowIconUrl:"../../assets/imgs/nav_icon_back.png",condition:{start:{year:2017,month:1,date:1,hour:0,minute:0},end:{year:2017,month:1,date:1,hour:0,minute:0},selectedCashiers:[],selectType:1},record:{inCounts:"-",inMoney:"-",outCounts:"-",outMoney:"-",money:"-",details:[]},branch_name:null,branch_id:null},r.computed={startDateTime:function(){return this.getDateTime("start")},endDateTime:function(){return this.getDateTime("end")},selectedCashiersAfterComputed:function(){var e="";switch(this.condition.selectType){case 1:e="全部员工";break;case 2:e="部分员工"}return e}},r.methods={handleStartDateTimeChange:function(e){if(this.condition.start.year=consts.YEARS[e.detail.value[0]].value,this.condition.start.month=consts.MONTHS[e.detail.value[1]].value,this.condition.start.date=consts.DATES[e.detail.value[2]].value,this.condition.start.hour=consts.HOURS[e.detail.value[3]].value,this.condition.start.minute=consts.MINUTES[e.detail.value[4]].value,this.record.details=[],this.currentPage=1,!_date2.default.check(this.condition.start.year,this.condition.start.month,this.condition.start.date))return void _wepy2.default.showModal({title:"提示",content:"起始时间无效",showCancel:!1});this.loadCashiersStat(),this.loadCashiersOrders(this.currentPage)},handleEndDateTimeChange:function(e){if(this.condition.end.year=consts.YEARS[e.detail.value[0]].value,this.condition.end.month=consts.MONTHS[e.detail.value[1]].value,this.condition.end.date=consts.DATES[e.detail.value[2]].value,this.condition.end.hour=consts.HOURS[e.detail.value[3]].value,this.condition.end.minute=consts.MINUTES[e.detail.value[4]].value,this.record.details=[],this.currentPage=1,!_date2.default.check(this.condition.start.year,this.condition.start.month,this.condition.start.date))return void _wepy2.default.showModal({title:"提示",content:"起始时间无效",showCancel:!1});this.loadCashiersStat(),this.loadCashiersOrders(this.currentPage)},handleSelectCashierButtonClick:function(e){var t=this;_wepy2.default.navigateTo({url:"manager_select?branch_id="+t.branch_id+"&branch_name="+t.branch_name})},handleLoadMore:function(e){var t=this;!t.loadingMore&&t.hasMore&&(t.loadingMore=!0,t.$apply(),t.loadCashiersOrders(t.currentPage))}},r.events={},a=n,_possibleConstructorReturn(r,a)}return _inherits(t,e),_createClass(t,[{key:"getDateTime",value:function(e){var t=this.condition[e];return t.year+"/"+_date2.default.format(t.month)+"/"+_date2.default.format(t.date)+" "+_date2.default.format(t.hour)+":"+_date2.default.format(t.minute)}},{key:"formatDateTime",value:function(e,t,n,r,a,o){return e+"-"+_date2.default.format(t)+"-"+_date2.default.format(n)+" "+_date2.default.format(r)+":"+_date2.default.format(a)+":"+_date2.default.format(o)}},{key:"loadCashiers",value:function(){var e=this;return new Promise(function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(n,r){var a,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=null,_wepy2.default.showLoading({title:"获取中",mask:!0}),t.prev=2,t.next=5,branchApi.getInfo(e.$parent.globalData.token,e.branch_id);case 5:a=t.sent,t.next=13;break;case 8:return t.prev=8,t.t0=t.catch(2),_wepy2.default.showModal({title:"获取失败",content:t.t0,showCancel:!1}),r(),t.abrupt("return");case 13:return t.prev=13,_wepy2.default.hideLoading(),t.finish(13);case 16:o=a.branch.staffs.filter(function(e){return 2===e.user_type}),e.condition.selectedCashiers=o.map(function(e){return e.id}),e.$apply(),n();case 20:case"end":return t.stop()}},t,this,[[2,8,13,16]])}));return function(e,n){return t.apply(this,arguments)}}())}},{key:"loadCashiersStat",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this,t.$apply(),n=1e8*t.condition.start.year+1e6*t.condition.start.month+1e4*t.condition.start.date+100*t.condition.start.hour+t.condition.start.month,!((r=1e8*t.condition.end.year+1e6*t.condition.end.month+1e4*t.condition.end.date+100*t.condition.end.hour+t.condition.end.month)<n)){e.next=6;break}return e.abrupt("return");case 6:return a=null,_wepy2.default.showLoading({title:"获取中",mask:!0}),e.prev=8,e.next=11,statApi.cashiersStat(t.$parent.globalData.token,t.condition.selectedCashiers.join(","),t.formatDateTime(t.condition.start.year,t.condition.start.month,t.condition.start.date,t.condition.start.hour,t.condition.start.minute,0),t.formatDateTime(t.condition.end.year,t.condition.end.month,t.condition.end.date,t.condition.end.hour,t.condition.end.minute,0));case 11:a=e.sent,e.next=18;break;case 14:return e.prev=14,e.t0=e.catch(8),_wepy2.default.showModal({title:"获取失败",content:e.t0,showCancel:!1}),e.abrupt("return");case 18:return e.prev=18,_wepy2.default.hideLoading(),e.finish(18);case 21:t.record.inCounts=a.stat.times,t.record.inMoney=a.stat.total,t.record.outCounts=a.stat.refund_times,t.record.outMoney=a.stat.total_refunded,t.record.money=_string2.default.formatPrice(parseFloat(a.stat.total)-parseFloat(a.stat.total_refunded),2),t.$apply();case 27:case"end":return e.stop()}},e,this,[[8,14,18,21]])}));return e}()},{key:"loadCashiersOrders",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,r,a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this,r=1e8*n.condition.start.year+1e6*n.condition.start.month+1e4*n.condition.start.date+100*n.condition.start.hour+n.condition.start.month,!((a=1e8*n.condition.end.year+1e6*n.condition.end.month+1e4*n.condition.end.date+100*n.condition.end.hour+n.condition.end.month)<r)){e.next=6;break}return _wepy2.default.showModal({title:"提示",content:"请选择正确的时间区间",showCancel:!1}),e.abrupt("return");case 6:return o=null,e.prev=7,e.next=10,statApi.cashiersOrder(n.$parent.globalData.token,n.condition.selectedCashiers.join(","),n.formatDateTime(n.condition.start.year,n.condition.start.month,n.condition.start.date,n.condition.start.hour,n.condition.start.minute,0),n.formatDateTime(n.condition.end.year,n.condition.end.month,n.condition.end.date,n.condition.end.hour,n.condition.end.minute,0),t,PAGE_LIMIT);case 10:o=e.sent,e.next=16;break;case 13:return e.prev=13,e.t0=e.catch(7),e.abrupt("return");case 16:return e.prev=16,n.loadingMore=!1,e.finish(16);case 19:n.record.details=[].concat(_toConsumableArray(n.record.details),_toConsumableArray(o.orders.map(function(e){var t=e.created_at.split(" ");return{date:t[0],time:t[1],money:e.amount,cashier:e.operator_nickname,status:e.has_refunded?0:1}}))),o.orders.length===PAGE_LIMIT?(n.currentPage+=1,n.hasMore=!0):n.hasMore=!1,n.$apply();case 22:case"end":return e.stop()}},e,this,[[7,13,16,19]])}));return e}()},{key:"initTime",value:function(){var e=this,t=new Date,n=t.getFullYear(),r=t.getMonth()+1,a=t.getDate();e.condition.start.year=n,e.condition.start.month=r,e.condition.start.date=a,e.condition.start.hour=0,e.condition.start.minute=0,e.condition.end.year=n,e.condition.end.month=r,e.condition.end.date=a,e.condition.end.hour=t.getHours(),e.condition.end.minute=t.getMinutes(),e.$apply()}},{key:"onShow",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this,e.prev=1,t.ready){e.next=5;break}return e.next=5,t.loadCashiers();case 5:t.record.details=[],t.$apply(),t.loadCashiersStat(),t.loadCashiersOrders(t.currentPage),t.ready=!0,t.$apply(),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(1);case 15:return e.prev=15,e.finish(15);case 17:case"end":return e.stop()}},e,this,[[1,13,15,17]])}));return e}()},{key:"onLoad",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this;for(n in t.$wxpage.options)t[n]=t.$wxpage.options[n];t.initTime(),_eventbus2.default.subscribe("manager_bill-setcashiers",function(e){t.condition.selectedCashiers=e.cashiers,t.condition.selectType=e.selectAll?1:2,t.ready=!0,t.record.details=[],t.currentPage=1,t.$apply()});case 4:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(ManagerBill,"pages/manager/manager_bill"));
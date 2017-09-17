"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,t){function n(a,i){try{var o=r[a](i),u=o.value}catch(e){return void t(e)}if(!o.done)return Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)});e(u)}return n("next")})}}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function _inherits(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_tradeCrypto=require("./../../utils/trade/trade-crypto.js"),_tradeCrypto2=_interopRequireDefault(_tradeCrypto),_qrcode=require("./../../utils/qrcode.js"),_qrcode2=_interopRequireDefault(_qrcode),_time=require("./../../utils/time.js"),_time2=_interopRequireDefault(_time),_eventbus=require("./../../eventbus/eventbus.js"),_eventbus2=_interopRequireDefault(_eventbus),_auth=require("./../../network/api/auth.js"),authApi=_interopRequireWildcard(_auth),_user=require("./../../network/api/user.js"),userApi=_interopRequireWildcard(_user),_trade=require("./../../network/api/trade.js"),tradeApi=_interopRequireWildcard(_trade),Customer=function(e){function r(){var e,t,n,a;_classCallCheck(this,r);for(var i=arguments.length,o=Array(i),u=0;u<i;u++)o[u]=arguments[u];return t=n=_possibleConstructorReturn(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(o))),n.config={navigationBarTitleText:"个人会员",disableScroll:!0},n.components={},n.data={peopleIconUrl:"../../assets/imgs/icon_people_fill.png",moneyIconUrl:"../../assets/imgs/icon_home.png",canvasContext:null,user:{nickName:"",company:"",balance:"-",payCode:"",verifyCodes:[]},renewTimer:null,verifyTimer:null,qrcodeTimer:null},n.computed={},n.methods={handleBillButtonClick:function(e){_wepy2.default.navigateTo({url:"customer_bill"})},handleCenterButtonClick:function(e){_wepy2.default.navigateTo({url:"customer_center"})},handleGiveButtonClick:function(e){_wepy2.default.navigateTo({url:"customer_give"})}},n.events={},a=t,_possibleConstructorReturn(n,a)}return _inherits(r,e),_createClass(r,[{key:"verify",value:function(){function e(e){return r.apply(this,arguments)}var r=_asyncToGenerator(regeneratorRuntime.mark(function e(r){var t,n,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,n=null,e.prev=2,e.next=5,tradeApi.notification(t.$parent.globalData.token,r);case 5:n=e.sent,e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(2),e.abrupt("return");case 11:return e.prev=11,e.finish(11);case 13:n.has_order&&(a=t.user.verifyCodes.indexOf(r),a>-1&&(t.user.verifyCodes.splice(a,1),t.$apply()),t.initCode(),t.reloadUserInfo(),_wepy2.default.navigateTo({url:"../result?msg=成功付款&content=￥"+n.order.amount}));case 14:case"end":return e.stop()}},e,this,[[2,8,11,13]])}));return e}()},{key:"initVerifyTimer",value:function(){var e=this;e.verifyTimer&&(clearInterval(e.verifyTimer),e.verifyTimer=null),e.verifyTimer=setInterval(function(){e.user.verifyCodes.forEach(function(r){e.verify(r)})},1e3),e.$apply()}},{key:"renew",value:function(){function e(){return r.apply(this,arguments)}var r=_asyncToGenerator(regeneratorRuntime.mark(function e(){var r,t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this,r.renewTimer&&(clearTimeout(r.renewTimer),r.renewTimer=null,r.$apply()),t=null,e.prev=3,e.next=6,authApi.renew(r.$parent.globalData.token);case 6:t=e.sent,e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(3),_wepy2.default.showModal({title:"更新失败",content:e.t0,showCancel:!1}),e.abrupt("return");case 13:return e.prev=13,_wepy2.default.stopPullDownRefresh(),e.finish(13);case 16:r.$parent.globalData.token=t.token,r.$parent.globalData.expires_in=t.expires_in,r.$parent.globalData.secret=t.secret,r.$parent.globalData.time_step=t.time_step,r.renewTimer=setTimeout(function(){r.renew()},_time2.default.timeSpace(t.expires_in)),r.$apply(),r.initCode();case 23:case"end":return e.stop()}},e,this,[[3,9,13,16]])}));return e}()},{key:"initRenewTimer",value:function(){var e=this;e.renewTimer=setTimeout(function(){e.renew()},_time2.default.timeSpace(e.$parent.globalData.expires_in))}},{key:"initQRCodeTimer",value:function(){var e=this;e.qrcodeTimer=setInterval(function(){e.initCode()},1e3*e.$parent.globalData.time_step)}},{key:"initCode",value:function(){var e=this,r=e.$parent.globalData,t=r.secret,n=r.time_step,a=new _tradeCrypto2.default(t,n),i=r.user.id,o=a.generatePayCode(i);new _qrcode2.default(e.canvasContext,{width:192,height:192}).makeCode(o.payCode),e.user.payCode=o.payCode,e.user.verifyCodes.push(o.payCode),e.user.verifyCodes.length>2&&e.user.verifyCodes.shift(),e.$apply()}},{key:"reloadUserInfo",value:function(){function e(){return r.apply(this,arguments)}var r=_asyncToGenerator(regeneratorRuntime.mark(function e(){var r,t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this,t=null,e.prev=2,e.next=5,userApi.getInfo(r.$parent.globalData.token);case 5:t=e.sent,e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(2),_wepy2.default.showModal({title:"获取失败",content:e.t0,showCancel:!1}),e.abrupt("return");case 12:return e.prev=12,e.finish(12);case 14:r.$parent.globalData.user=t.user,r.loadUserInfo();case 16:case"end":return e.stop()}},e,this,[[2,8,12,14]])}));return e}()},{key:"loadUserInfo",value:function(){var e=this,r=e.$parent.globalData;r.user&&(e.user.nickName=r.user.nickname,e.user.balance=r.user.balance,r.user.company&&(e.user.company=r.user.company.remark)),e.$apply()}},{key:"onHide",value:function(){var e=this;e.verifyTimer&&(clearInterval(e.verifyTimer),e.verifyTimer=null),e.qrcodeTimer&&(clearInterval(e.qrcodeTimer),e.qrcodeTimer=null)}},{key:"onShow",value:function(){this.reloadUserInfo(),this.initVerifyTimer(),this.initQRCodeTimer()}},{key:"onLoad",value:function(){var e=this;e.canvasContext=_wepy2.default.createCanvasContext("qrcode"),e.initRenewTimer(),e.initCode(),_eventbus2.default.subscribe("customer-loaduserinfo",function(){e.loadUserInfo()})}}]),r}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Customer,"pages/customer/customer"));
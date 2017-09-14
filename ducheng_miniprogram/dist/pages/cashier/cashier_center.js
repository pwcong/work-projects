"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,s){try{var o=t[a](s),u=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_eventbus=require("./../../eventbus/eventbus.js"),_eventbus2=_interopRequireDefault(_eventbus),_user=require("./../../network/api/user.js"),userApi=_interopRequireWildcard(_user),CashierCenter=function(e){function t(){var e,n,r,a;_classCallCheck(this,t);for(var s=arguments.length,o=Array(s),u=0;u<s;u++)o[u]=arguments[u];return n=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.config={navigationBarTitleText:"个人中心",disableScroll:!0},r.components={},r.data={userInfoChanged:!1,userInfo:{nickName:""},oldPassword:"",newPassword:"",newCheckPassword:"",peopleIconUrl:"../../assets/imgs/icon_people_fill.png",lockIconUrl:"../../assets/imgs/icon_lock_fill.png",quitIconUrl:"../../assets/imgs/icon_quit.png"},r.computed={},r.methods={handleSubmitButtonClick:function(){var e=this;return _asyncToGenerator(regeneratorRuntime.mark(function t(){var n,r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e,!n.userInfoChanged){t.next=20;break}return r=null,_wepy2.default.showLoading({title:"提交中",mask:!0}),t.prev=4,t.next=7,userApi.modifyInfo(n.$parent.globalData.token,null,n.userInfo.nickName);case 7:r=t.sent,t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(4),_wepy2.default.navigateTo({url:"../msg?type=warn&msg=修改失败&delta=1"}),t.abrupt("return");case 14:return t.prev=14,_wepy2.default.hideLoading(),t.finish(14);case 17:n.userInfoChanged=!1,n.setUserInfo(r.user),_eventbus2.default.emit("cashier-loaduserinfo");case 20:if(!(n.oldPassword||n.newPassword||n.newCheckPassword)){t.next=44;break}if(n.oldPassword&&n.newPassword&&n.newCheckPassword){t.next=24;break}return _wepy2.default.showModal({title:"请输入原始密码和新密码",showCancel:!1}),t.abrupt("return");case 24:if(n.newPassword==n.newCheckPassword){t.next=27;break}return _wepy2.default.showModal({title:"两次密码输入不一致",showCancel:!1}),t.abrupt("return");case 27:return a=null,_wepy2.default.showLoading({title:"提交中",mask:!0}),t.prev=29,t.next=32,userApi.modifyPassword(n.$parent.globalData.token,null,n.oldPassword,n.newPassword);case 32:a=t.sent,t.next=39;break;case 35:return t.prev=35,t.t1=t.catch(29),_wepy2.default.navigateTo({url:"../msg?type=warn&msg=请求失败&delta=1"}),t.abrupt("return");case 39:return t.prev=39,_wepy2.default.hideLoading(),t.finish(39);case 42:return _wepy2.default.navigateTo({url:"../msg?type=success&msg=修改成功&delta=-1"}),t.abrupt("return");case 44:_wepy2.default.navigateTo({url:"../msg?type=success&msg=修改成功&delta=1"});case 45:case"end":return t.stop()}},t,e,[[4,10,14,17],[29,35,39,42]])}))()},handleLogoutButtonClick:function(){this.$parent.clearLoginStat(),_wepy2.default.reLaunch({url:"../index"})},handleNickNameChange:function(e){this.userInfoChanged=!0,this.userInfo.nickName=e.detail.value},handleOldPasswordChange:function(e){this.oldPassword=e.detail.value},handleNewPasswordChange:function(e){this.newPassword=e.detail.value},handleNewCheckPasswordChange:function(e){this.newCheckPassword=e.detail.value}},r.events={},a=n,_possibleConstructorReturn(r,a)}return _inherits(t,e),_createClass(t,[{key:"setUserInfo",value:function(e){var t=this;t.$parent.globalData.user=Object.assign({},t.$parent.globalData.user,e),_eventbus2.default.emit("cashier-loaduserinfo"),t.userInfo.nickName=e.nickname,t.$apply()}},{key:"loadUserInfo",value:function(){function e(e,n){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this,t&&t(),a=null,e.prev=3,e.next=6,userApi.getInfo(r.$parent.globalData.token);case 6:a=e.sent,e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(3),_wepy2.default.showModal({title:"获取失败",content:e.t0,showCancel:!1}),e.abrupt("return");case 13:return e.prev=13,n&&n(),e.finish(13);case 16:r.setUserInfo(a.user);case 17:case"end":return e.stop()}},e,this,[[3,9,13,16]])}));return e}()},{key:"onLoad",value:function(){this.loadUserInfo(function(){_wepy2.default.showLoading({title:"获取中",mask:!0})},function(){_wepy2.default.hideLoading()})}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(CashierCenter,"pages/cashier/cashier_center"));
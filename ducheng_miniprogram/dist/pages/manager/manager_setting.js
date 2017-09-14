"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,o){try{var s=t[a](o),i=s.value}catch(e){return void r(e)}if(!s.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}return n("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_user=require("./../../network/api/user.js"),userApi=_interopRequireWildcard(_user),ManagerSetting=function(e){function t(){var e,r,n,a;_classCallCheck(this,t);for(var o=arguments.length,s=Array(o),i=0;i<o;i++)s[i]=arguments[i];return r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.config={navigationBarTitleText:"设置",disableScroll:!0},n.components={},n.data={peopleIconUrl:"../../assets/imgs/icon_people_fill.png",lockIconUrl:"../../assets/imgs/icon_lock_fill.png",quitIconUrl:"../../assets/imgs/icon_quit.png",oldPassword:"",newPassword:"",newCheckPassword:""},n.computed={},n.methods={handleSubmitButtonClick:function(){var e=this;return _asyncToGenerator(regeneratorRuntime.mark(function t(){var r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e,r.oldPassword&&r.newPassword&&r.newCheckPassword){t.next=4;break}return _wepy2.default.showModal({title:"请输入原始密码和新密码",showCancel:!1}),t.abrupt("return");case 4:if(r.newPassword==r.newCheckPassword){t.next=7;break}return _wepy2.default.showModal({title:"两次密码输入不一致",showCancel:!1}),t.abrupt("return");case 7:return n=null,_wepy2.default.showLoading({title:"提交中",mask:!0}),t.prev=9,t.next=12,userApi.modifyPassword(r.$parent.globalData.token,null,r.oldPassword,r.newPassword);case 12:n=t.sent,t.next=19;break;case 15:return t.prev=15,t.t0=t.catch(9),_wepy2.default.navigateTo({url:"../msg?type=warn&msg=修改失败&delta=1"}),t.abrupt("return");case 19:return t.prev=19,_wepy2.default.hideLoading(),t.finish(19);case 22:_wepy2.default.navigateTo({url:"../msg?type=success&msg=修改成功&delta=-1"});case 23:case"end":return t.stop()}},t,e,[[9,15,19,22]])}))()},handleLogoutButtonClick:function(){this.$parent.clearLoginStat(),_wepy2.default.reLaunch({url:"../index"})},handleOldPasswordChange:function(e){this.oldPassword=e.detail.value},handleNewPasswordChange:function(e){this.newPassword=e.detail.value},handleNewCheckPasswordChange:function(e){this.newCheckPassword=e.detail.value}},n.events={},a=r,_possibleConstructorReturn(n,a)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(){}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(ManagerSetting,"pages/manager/manager_setting"));
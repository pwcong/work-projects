"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function request(e,t,r,u){return new Promise(function(a,s){_wepy2.default.request({url:e,method:t,data:r,header:u,success:function(e){200===e.statusCode?e.data&&"SUCCESS"===e.data.code&&e.data.result?a(e.data):s(e.data.message):s(e.errMsg)},fail:function(e){s(e.errMsg)}})})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=request;var _wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy);
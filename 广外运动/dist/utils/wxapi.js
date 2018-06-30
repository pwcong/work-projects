"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function o(u,r){try{var i=t[u](r),c=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(c).then(function(e){o("next",e)},function(e){o("throw",e)});e(c)}return o("next")})}}function getBluetoothAdapterState(){return new Promise(function(e,t){_wepy2.default.getBluetoothAdapterState({success:function(t){e(t)},fail:function(e){t(e)}})})}function getBeacons(){return new Promise(function(e,t){_wepy2.default.getBeacons({success:function(t){e(t)},fail:function(e){t(e)}})})}function startBeaconDiscovery(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3;return new Promise(function(){var n=_asyncToGenerator(regeneratorRuntime.mark(function n(o,u){var r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:r=[],_wepy2.default.startBeaconDiscovery({uuids:e,success:function(){console.log("开始扫描设备..."),wx.onBeaconUpdate(function(e){e&&e.beacons&&e.beacons.length>0&&(r=e.beacons)})},fail:function(e){u(e)}}),setTimeout(function(){_wepy2.default.stopBeaconDiscovery({success:function(){if(console.log("停止设备扫描！"),console.log(r),r.length<=0)return void u();o(r)},fail:function(e){u(e)}})},t);case 3:case"end":return n.stop()}},n,this)}));return function(e,t){return n.apply(this,arguments)}}())}function openBluetoothAdapter(){return new Promise(function(e,t){_wepy2.default.openBluetoothAdapter({success:function(t){e(t)},fail:function(e){t(e)}})})}function login(){return new Promise(function(e,t){_wepy2.default.login({success:function(t){e(t)},fail:function(e){t(e)}})})}function getWeRunData(){return new Promise(function(e,t){_wepy2.default.getWeRunData({success:function(t){e(t)},fail:function(e){t(e)}})})}function getLocation(){return new Promise(function(e,t){_wepy2.default.getLocation({success:function(t){e(t)},fail:function(e){t(e)}})})}function getUserInfo(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"zh_CN";return new Promise(function(n,o){_wepy2.default.getUserInfo({withCredentials:e,lang:t,success:function(e){n(e)},fail:function(e){o(e)}})})}Object.defineProperty(exports,"__esModule",{value:!0});var _wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy);exports.default={openBluetoothAdapter:openBluetoothAdapter,getBluetoothAdapterState:getBluetoothAdapterState,startBeaconDiscovery:startBeaconDiscovery,getBeacons:getBeacons,login:login,getWeRunData:getWeRunData,getLocation:getLocation,getUserInfo:getUserInfo};
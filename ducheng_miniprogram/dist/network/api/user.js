"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getInfo(e,r){return(0,_request2.default)(_api2.default.user.getInfo.url(r),_api2.default.user.getInfo.method,_api2.default.user.getInfo.data(),_api2.default.user.getInfo.header(e))}function getInfos(e,r,s,t){return(0,_request2.default)(_api2.default.user.getInfos.url(),_api2.default.user.getInfos.method,_api2.default.user.getInfos.data(r,s,t),_api2.default.user.getInfos.header(e))}function register(e,r,s,t,u,a,d,f,i,o,l){return(0,_request2.default)(_api2.default.user.register.url(),_api2.default.user.register.method,_api2.default.user.register.data(r,s,t,u,a,d,f,i,o,l),_api2.default.user.register.header(e))}function modifyInfo(e,r,s,t,u,a,d,f,i,o){return(0,_request2.default)(_api2.default.user.modifyInfo.url(r),_api2.default.user.modifyInfo.method,_api2.default.user.modifyInfo.data(s,t,u,a,d,f,i,o),_api2.default.user.modifyInfo.header(e))}function modifyPassword(e,r,s,t){return(0,_request2.default)(_api2.default.user.modifyPassword.url(r),_api2.default.user.modifyPassword.method,_api2.default.user.modifyPassword.data(s,t),_api2.default.user.modifyPassword.header(e))}function freezeUsers(e,r){return(0,_request2.default)(_api2.default.user.freezeUsers.url(),_api2.default.user.freezeUsers.method,_api2.default.user.freezeUsers.data(r),_api2.default.user.freezeUsers.header(e))}function releaseUsers(e,r){return(0,_request2.default)(_api2.default.user.releaseUsers.url(),_api2.default.user.releaseUsers.method,_api2.default.user.releaseUsers.data(r),_api2.default.user.releaseUsers.header(e))}function deleteUsers(e,r){return(0,_request2.default)(_api2.default.user.deleteUsers.url(),_api2.default.user.deleteUsers.method,_api2.default.user.deleteUsers.data(r),_api2.default.user.deleteUsers.header(e))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getInfo=getInfo,exports.getInfos=getInfos,exports.register=register,exports.modifyInfo=modifyInfo,exports.modifyPassword=modifyPassword,exports.freezeUsers=freezeUsers,exports.releaseUsers=releaseUsers,exports.deleteUsers=deleteUsers;var _request=require("./../request.js"),_request2=_interopRequireDefault(_request),_api=require("./api.js"),_api2=_interopRequireDefault(_api);
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function login(e,t){return(0,_request2.default)(_api2.default.auth.login.url(),_api2.default.auth.login.method,_api2.default.auth.login.data(e,t),_api2.default.auth.login.header())}function status(e){return(0,_request2.default)(_api2.default.auth.status.url(),_api2.default.auth.status.method,_api2.default.auth.status.data(),_api2.default.auth.status.header(e))}function renew(e){return(0,_request2.default)(_api2.default.auth.renew.url(),_api2.default.auth.renew.method,_api2.default.auth.renew.data(),_api2.default.auth.renew.header(e))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.login=login,exports.status=status,exports.renew=renew;var _request=require("./../request.js"),_request2=_interopRequireDefault(_request),_api=require("./api.js"),_api2=_interopRequireDefault(_api);
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getInfo(e,a){return(0,_request2.default)(_api2.default.branch.getInfo.url(a),_api2.default.branch.getInfo.method,_api2.default.branch.getInfo.data(),_api2.default.branch.getInfo.header(e))}function search(e,a){return(0,_request2.default)(_api2.default.branch.search.url(a),_api2.default.branch.search.method,_api2.default.branch.search.data(),_api2.default.branch.search.header(e))}function add(e,a,r){return(0,_request2.default)(_api2.default.branch.add.url(),_api2.default.branch.add.method,_api2.default.branch.add.data(a,r),_api2.default.branch.add.header(e))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getInfo=getInfo,exports.search=search,exports.add=add;var _request=require("./../request.js"),_request2=_interopRequireDefault(_request),_api=require("./api.js"),_api2=_interopRequireDefault(_api);
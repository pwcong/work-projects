"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getSystemRunningState(e){return(0,_request2.default)(_api2.default.system.getSystemRunningState.url(),_api2.default.system.getSystemRunningState.method,_api2.default.system.getSystemRunningState.data(),_api2.default.system.getSystemRunningState.header(e))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getSystemRunningState=getSystemRunningState;var _request=require("./../request.js"),_request2=_interopRequireDefault(_request),_api=require("./api.js"),_api2=_interopRequireDefault(_api);
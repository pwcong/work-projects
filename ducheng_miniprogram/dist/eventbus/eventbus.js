"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var BUS={};exports.default={emit:function(e){if(BUS[e]){for(var r=arguments.length,t=Array(r>1?r-1:0),u=1;u<r;u++)t[u-1]=arguments[u];BUS[e].apply(BUS,t)}},subscribe:function(e,r){BUS[e]=r},unsubscribe:function(e){BUS[e]=null}};
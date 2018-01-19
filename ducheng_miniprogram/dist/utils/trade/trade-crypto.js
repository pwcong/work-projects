"use strict";var base64=require("./../base64.js"),notp=require("./vendor/node-notp.js"),InvalidSecret=new TypeError("secret is not correct."),TradeCrypto=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.secret=e,this.InvalidSecret=InvalidSecret,this.key=decryptTOTPKey(e),this.timeStep=t,this.timeOffset=r};TradeCrypto.prototype.generateToken=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return notp.totp.gen(this.key+e,{time:this.timeStep,timeOffset:this.timeOffset})},TradeCrypto.prototype.generateCashierCode=function(e){return this.generateToken(e+"")},TradeCrypto.prototype.generatePayCode=function(e){e=padStart(e+"",8,"0");var t=padStart(Math.floor(100*Math.random())+"",2,"0"),r=this.generateToken();return{payCode:["99",e,t,r].join(""),verifyCode:r}};var padStart=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:" ",o=t-e.length;if(o>0){e=Array(o).fill(r[0]).join("")+e}return e},decryptTOTPKey=function(e){var t=base64.atob(e);if(t.length%2)throw InvalidSecret;for(var r="",o=void 0,n=0;n<t.length;n+=2){if(o=parseInt(t[n+1]+t[n],16),isNaN(o))throw InvalidSecret;r+=String.fromCharCode(o)}return r};module.exports=TradeCrypto;
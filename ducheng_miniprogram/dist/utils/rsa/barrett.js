"use strict";function _interopRequireWildcard(i){if(i&&i.__esModule)return i;var t={};if(null!=i)for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e]);return t.default=i,t}function _classCallCheck(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _createClass=function(){function i(i,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),_bigint=require("./bigint.js"),bigint=_interopRequireWildcard(_bigint),BarrettMu=function(){function i(t){_classCallCheck(this,i),this.modulus=bigint.biCopy(t),this.k=bigint.biHighIndex(this.modulus)+1;var e=new bigint.BigInt;e.digits[2*this.k]=1,this.mu=bigint.biDivide(e,this.modulus),this.bkplus1=new bigint.BigInt,this.bkplus1.digits[this.k+1]=1}return _createClass(i,[{key:"modulo",value:function(i){var t=bigint.biDivideByRadixPower(i,this.k-1),e=bigint.biMultiply(t,this.mu),n=bigint.biDivideByRadixPower(e,this.k+1),r=bigint.biModuloByRadixPower(i,this.k+1),u=bigint.biMultiply(n,this.modulus),o=bigint.biModuloByRadixPower(u,this.k+1),s=bigint.biSubtract(r,o);s.isNeg&&(s=bigint.biAdd(s,this.bkplus1));for(var l=bigint.biCompare(s,this.modulus)>=0;l;)s=bigint.biSubtract(s,this.modulus),l=bigint.biCompare(s,this.modulus)>=0;return s}},{key:"multiplyMod",value:function(i,t){var e=bigint.biMultiply(i,t);return this.modulo(e)}},{key:"powMod",value:function(i,t){var e=new bigint.BigInt;e.digits[0]=1;for(var n=i,r=t;;){if(0!=(1&r.digits[0])&&(e=this.multiplyMod(e,n)),r=bigint.biShiftRight(r,1),0==r.digits[0]&&0==bigint.biHighIndex(r))break;n=this.multiplyMod(n,n)}return e}}]),i}();exports.default=BarrettMu;
!function(){function t(t,i,n,e){this.timer=null,this.onTicker=t||function(){},this.onStart=i||function(){},this.onStop=n||function(){},this.onRestart=e||function(){}}function i(){var t=utils.getUrlParam("sessionId");t&&(window.localStorage.sessionId=t)}function n(){return!!window.localStorage.sessionId}t.prototype.start=function(t){var i=this;i.startTime=t||Date.parse(new Date),i.timer&&(clearInterval(i.timer),i.timer=null),i.timer=setInterval(function(){i.onTicker(i.startTime)},1e3),i.onStart(this.startTime)},t.prototype.stop=function(){this.timer&&(clearInterval(this.timer),this.timer=null),this.onStop(this.startTime)},t.prototype.restart=function(){this.startTime=Date.parse(new Date),this.onRestart(this.startTime)},i(),n()?$('meta[js-sdk="true"]').length:window.location.href="http://www.ppfix.cn/activity/piano_rank/index.html",window.MyTimer=t}();
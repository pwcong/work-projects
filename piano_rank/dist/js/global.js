!function(){function n(){var n=utils.getUrlParam("sessionId");n&&(window.localStorage.sessionId=n)}function o(){return!!window.localStorage.sessionId}function e(){$.ajax({url:i.auth.url(),method:i.auth.method,success:function(n){window.location.href=n},error:function(n){console.log(n)},complete:function(n){}})}var r="http://www.ppfix.cn/piano_rank",i={auth:{url:function(){return r+"/api/wx/authUrl?redirectUri="+window.location.href},method:"GET"},userInfo:{url:function(){return r+"/api/user/info"},method:"GET",headers:function(){return{sessionId:window.localStorage.sessionId}}},modifyUserInfo:{url:function(n,o){return n=n||"",o=o||"",r+"/api/user/update?nickname="+n+"&gender="+o},method:"GET",headers:function(){return{sessionId:window.localStorage.sessionId}}},uploadRecord:{url:function(n,o,e){return n=n||0,o=o||"",e=e||"",r+"/api/user/record/upload?record="+n},method:"GET",headers:function(){return{sessionId:window.localStorage.sessionId}}},dayRanking:{url:function(){return r+"/api/rank/day"},method:"GET",headers:function(){return{sessionId:window.localStorage.sessionId}}},allRecords:{url:function(n){return n=n||"",r+"/api/user/record/all?year="+n},method:"GET",headers:function(){return{sessionId:window.localStorage.sessionId}}}};n(),o()||e(),window.API=i}();
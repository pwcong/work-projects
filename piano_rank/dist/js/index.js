function initUserInfo(){$.ajax({url:API.userInfo.url(),method:API.userInfo.method,headers:API.userInfo.headers(),success:function(e){"SUCCESS"==e.code&&e.result&&($("#avatar").attr("src",e.result.avater||"imgs/avatar.png"),$("#avatar").removeClass("hide"),$("#name").html(e.result.nickname),$("#sex").addClass(1==e.result.gender?"icon-male":2==e.result.gender?"icon-female":""))},error:function(e){},complete:function(e){}})}function uploadRecord(e,t,n){$.ajax({url:API.uploadRecord.url(e,t,n),method:API.uploadRecord.method,headers:API.uploadRecord.headers(),success:function(t){"SUCCESS"!=t.code?weui.alert(t.message,{className:"dialog"}):(weui.toast("记录上传成功",1500),$("#lastRecord").html(e))},error:function(e){weui.alert("记录上传失败",{className:"dialog"})},complete:function(e){}})}$(document).ready(function(){window.localStorage.sessionId&&initUserInfo()}),$(document).ready(function(){$("#btnSwitchManual").click(function(){weui.picker(consts.TIME_PICKER_ITEM_HOUR,[{label:"时",value:"-"}],consts.TIME_PICKER_ITEM_MINUTE,[{label:"分",value:"-"}],{className:"picker",container:"body",defaultValue:[0,0,0],onChange:function(e){},onConfirm:function(e){var t=60*e[0].value+e[2].value;t<1||uploadRecord(t)}})})}),$(document).ready(function(){function e(e){if(e=e||!1,o&&(clearInterval(o),o=null,e)){var t=60*a+s+parseInt(r/60);if(l=moment().format("YYYY-MM-DD hh:mm:ss"),t<1)return;weui.confirm("是否确定上传记录？",function(){uploadRecord(t,c,l)},function(){console.log("取消")},{className:"confirm"})}a=0,s=0,r=0}function t(){e(),c=moment().format("YYYY-MM-DD hh:mm:ss"),o=setInterval(function(){(r+=1)>=60&&(r=0,s++),s>=60&&(s=0,a++),a>=24&&(a=0),$("#hours").html(utils.formatTime(a)),$("#minutes").html(utils.formatTime(s)),$("#seconds").html(utils.formatTime(r))},1e3)}var n=!1,o=null,a=0,s=0,r=0,c=moment().format("YYYY-MM-DD hh:mm:ss"),l=moment().format("YYYY-MM-DD hh:mm:ss");$("#btnSwitch").click(function(){n?($(this).removeClass("active"),n=!1,$("#hours").html("00"),$("#minutes").html("00"),$("#seconds").html("00"),e(!0)):($(this).addClass("active"),n=!0,t())}),$("#btnRestart").click(function(){$("#hours").html("00"),$("#minutes").html("00"),$("#seconds").html("00"),a=0,s=0,r=0,n=!0,$("#btnSwitch").addClass("active"),t()})});
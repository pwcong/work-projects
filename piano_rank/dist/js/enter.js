$(document).ready(function(){window.localStorage.sessionId&&API.getClass(window.localStorage.sessionId,function(e){"SUCCESS"==e.code&&e.result&&(e.result.forEach(function(e,t){var a=document.createElement("option");a.setAttribute("value",e.id),a.innerHTML=e.name,$("#selectClass").append(a)}),API.getUserInfo(window.localStorage.sessionId,function(e){"SUCCESS"==e.code&&e.result&&($("#avatar").attr("src",e.result.avater||"imgs/avatar.png"),$("#avatar").removeClass("hide"),$("#inputNickname").val(e.result.nickname),$("#inputAge").val(e.result.age),$("#selectClass").val(e.result.classId||""),$('input[name="sex"').removeAttr("checked"),$('input[name="sex"][value="'+e.result.gender+'"').attr("checked","checked"))},function(e){},function(e){}))},function(e){},function(e){})}),$(document).ready(function(){$("#btnSubmit").click(function(){var e=$(this),t=$("#inputNickname").val(),a=$('input[name|="sex"]:checked').val(),n=$("#inputAge").val(),i=$("#selectClass").val();t?a?n?i?window.localStorage.sessionId&&(e.attr("disabled","disabled"),e.html("确认中"),API.modifyUserInfo(window.localStorage.sessionId,t,a,n,i,function(t){"SUCCESS"==t.code&&(e.html("已确认"),window.location.href="http://www.ppfix.cn/activity/piano_rank/home.html")},function(e){weui.toast("确认失败",1500)},function(t){e.removeAttr("disabled","disabled"),e.html("确认")})):weui.alert("请选择班级",{className:"dialog"}):weui.alert("请输入年龄",{className:"dialog"}):weui.alert("请选择性别",{className:"dialog"}):weui.alert("请输入昵称",{className:"dialog"})})});
//# sourceMappingURL=enter.js.map

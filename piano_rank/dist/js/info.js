$(document).ready(function(){window.localStorage.sessionId&&API.getClass(window.localStorage.sessionId,function(e){"SUCCESS"==e.code&&e.result&&(e.result.forEach(function(e,a){var t=document.createElement("option");t.setAttribute("value",e.id),t.innerHTML=e.name,$("#selectClass").append(t)}),API.getUserInfo(window.localStorage.sessionId,function(e){"SUCCESS"==e.code&&e.result&&($("#avatar").attr("src",e.result.avater||"imgs/avatar.png"),$("#avatar").removeClass("hide"),$("#inputNickname").val(e.result.nickname),$("#inputAge").val(e.result.age),$("#selectClass").val(e.result.classId||""),$('input[name="sex"').removeAttr("checked"),$('input[name="sex"][value="'+e.result.gender+'"').attr("checked","checked"))},function(e){},function(e){}))},function(e){},function(e){})}),$(document).ready(function(){$("#btnSubmit").click(function(){var e=$(this),a=$("#inputNickname").val(),t=$('input[name|="sex"]:checked').val(),n=$("#inputAge").val(),s=$("#selectClass").val();a?t?n?s?window.localStorage.sessionId&&(e.attr("disabled","disabled"),e.html("提交中"),API.modifyUserInfo(window.localStorage.sessionId,a,t,n,s,function(e){"SUCCESS"==e.code&&weui.toast("修改成功",1500)},function(e){weui.toast("修改失败",1500)},function(a){e.removeAttr("disabled","disabled"),e.html("确定")})):weui.alert("请选择班级",{className:"dialog"}):weui.alert("请输入年龄",{className:"dialog"}):weui.alert("请选择性别",{className:"dialog"}):weui.alert("请输入昵称",{className:"dialog"})}),$("#btnBack").click(function(){window.history.back()})});
//# sourceMappingURL=info.js.map

// 提交表单

;(function(){

    function init(){

        if(window.localStorage.sessionId){
            // window.location.href = 'http://localhost:3000/home.html';
            window.location.href = 'http://www.ppfix.cn/activity/piano_rank/home.html';
        }

    }

    init();


})();


$(document).ready(function () {

    $('#btnSubmit').click(function () {

        var ctx = $(this);

        var password = $('#inputPassword').val();

        if (password != 'xiaowen') {
            weui.alert('密码错误！', {
                className: 'dialog'
            });
            return;
        }

        ctx.html('登陆中');
        ctx.attr('disabled', 'disabled');

        API.getSessionId(
            'http://www.ppfix.cn/activity/piano_rank/enter.html',
            // window.location.href,
            // 'http://localhost:3000/home.html',
            function (data) {
            },
            function (err) {
            },
            function (data) {
                ctx.html('登陆');
                ctx.removeAttr('disabled');
            }
        );


    });


});
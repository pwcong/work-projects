;
(function () {

    function MyTimer(onTicker, onStart, onStop, onRestart) {

        this.timer = null;


        this.onTicker = onTicker || function () {};
        this.onStart = onStart || function () {};
        this.onStop = onStop || function () {};
        this.onRestart = onRestart || function () {};

    }


    MyTimer.prototype.start = function (startTime) {

        var ctx = this;
        ctx.startTime = startTime || Date.parse(new Date());

        if (ctx.timer) {
            clearInterval(ctx.timer);
            ctx.timer = null;
        }

        ctx.timer = setInterval(function () {

            ctx.onTicker(ctx.startTime);

        }, 1000);

        ctx.onStart(this.startTime);

    }

    MyTimer.prototype.stop = function () {


        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }

        this.onStop(this.startTime);
    }

    MyTimer.prototype.restart = function () {

        this.startTime = Date.parse(new Date());

        this.onRestart(this.startTime);


    }



    // 初始化sessionId
    function initSessionId() {
        var sessionId = utils.getUrlParam('sessionId');

        if (sessionId) {
            window.localStorage.sessionId = sessionId;
        }
    }

    // 校验sessionId
    function checkSessionId() {
        return window.localStorage.sessionId ? true : false;
    }

    function init() {

        initSessionId();

        if (!checkSessionId()) {

            // window.location.href = 'http://localhost:3000/index.html';
            window.location.href = 'http://www.ppfix.cn/activity/piano_rank/index.html';

            // 调用授权接口获取sessionId
            // API.getSessionId(
            //     // 'http://www.ppfix.cn/activity/piano_rank/enter.html',
            //     window.location.href,
            //     function (data) {
            //         window.location.href = data;
            //     },
            //     function (err) {
            //         console.log(err);
            //     },
            //     function (data) {

            //     }
            // );
        } else if ($('meta[js-sdk="true"]').length > 0) {

            // API.getSign(
            //     function (data) {

            //         if (!data.code == 'SUCCESS' || !data.result) {
            //             return;
            //         }

            //         var result = data.result;

            //         wx.config({
            //             debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            //             appId: result.appId, // 必填，公众号的唯一标识
            //             timestamp: result.timestamp, // 必填，生成签名的时间戳
            //             nonceStr: result.nonceStr, // 必填，生成签名的随机串
            //             signature: result.signature, // 必填，签名，见附录1
            //             jsApiList: [
            //                 'onMenuShareAppMessage',
            //                 'onMenuShareTimeline',
            //                 // 'onMenuShareQQ',
            //                 // 'onMenuShareWeibo',
            //                 // 'onMenuShareQZone'
            //             ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            //         });
            //     },
            //     function (err) {
            //         console.log(err);
            //     },
            //     function (data) {

            //     }
            // );
        }


    }

    init();

    window.MyTimer = MyTimer;


})();
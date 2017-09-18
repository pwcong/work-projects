;
(function () {

    function MyTimer(initHours, initMinutes, initSeconds, onTicker, onStart, onStop, onRestart) {

        this.timer = null;
        this.hours = initHours || 0;
        this.minutes = initMinutes || 0;
        this.seconds = initSeconds || 0;

        this.onTicker = onTicker || function () {};
        this.onStart = onStart || function () {};
        this.onStop = onStop || function () {};
        this.onRestart = onRestart || function () {};

    }


    MyTimer.prototype.start = function () {

        var ctx = this;

        ctx.onStart(this.hours, this, minutes, this.seconds);

        if (ctx.timer) {
            clearInterval(ctx.timer);
            ctx.timer = null;
        }

        ctx.timer = setInterval(function () {


            ctx.seconds++;

            if (ctx.seconds >= 60) {
                ctx.seconds = 0;
                ctx.minutes++;
            }

            if (ctx.minutes >= 60) {
                ctx.minutes = 0;
                ctx.hours++;
            }

            if (ctx.hours >= 24) {
                ctx.hours = 0;
            }

            ctx.onTicker(ctx.hours, ctx.minutes, ctx.seconds);

        }, 1000);

    }

    MyTimer.prototype.stop = function () {

        this.onStop(this.hours, this.minutes, this.seconds);

        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }

    }

    MyTimer.prototype.restart = function () {

        this.onRestart(this.hours, this.minutes, this.seconds);

        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;


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

            // 调用授权接口获取sessionId
            API.getSessionId(

                function (data) {
                    window.location.href = data;
                },
                function (err) {
                    console.log(err);
                },
                function (data) {

                }
            );
        }

    }

    init();

    window.MyTimer = MyTimer;


})();
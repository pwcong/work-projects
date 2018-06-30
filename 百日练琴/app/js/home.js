// $(document).ready(function () {


//     $('#btnSwitchManual').click(function () {

//         $('#timer').addClass('hide');
//         $('#manual').removeClass('hide');

//     });

//     $('#btnSwitchTimer').click(function () {

//         $('#manual').addClass('hide');
//         $('#timer').removeClass('hide');

//     });

// });

function uploadRecord(sessionId, record, startTime, endTime) {

    API.uploadRecord(
        sessionId,
        record,
        startTime,
        endTime,
        function (data) {


            if (data.code != 'SUCCESS') {
                weui.alert(data.message, {
                    className: 'dialog'
                });
            } else {

                weui.toast('记录上传成功', 1500);
                $('#lastRecord').html(record);
                window.localStorage[moment().format('YYYY-MM-DD')] = true;

            }
        },
        function (err) {

            weui.alert('记录上传失败', {
                className: 'dialog'
            });
        },
        function (data) {

        }

    )

}

// 初始化信息
$(document).ready(function () {

    if (!window.localStorage.sessionId) {
        return;
    }

    API.getUserInfo(
        window.localStorage.sessionId,
        function (data) {

            if (data.code != 'SUCCESS' || !data.result) {
                return;
            }

            $('#avatar').attr('src', data.result.avater || 'imgs/avatar.png');
            $('#avatar').removeClass('hide');
            $('#name').html(data.result.nickname);
            $('#sex').addClass(data.result.gender == 1 ? 'icon-male' : (data.result.gender == 2 ? 'icon-female' : ''));

        },
        function (err) {

        },
        function (data) {

        }
    );


});


// 手动输入计时
$(document).ready(function () {
    // moment().format('YYYY-MM-DD hh:mm:ss');
    $('#btnSwitchManual').click(function () {


        var flag = window.localStorage[moment().format('YYYY-MM-DD')] == 'true' || false;

        if (flag) {
            weui.alert('今天的手动输入次数已用完啦~', {
                className: 'dialog'
            });
            return;
        }


        weui.picker(
            [{
                label: '分钟',
                value: '-'
            }], consts.TIME_PICKER_ITEM_MINUTE, {
                className: 'picker',
                container: 'body',
                defaultValue: [0, 0],
                onChange: function (result) {
                    // console.log(result)
                },
                onConfirm: function (result) {

                    var res = result[1].value;

                    if (res < 1 || !window.localStorage.sessionId) {
                        return;
                    }

                    uploadRecord(window.localStorage.sessionId, res);

                },
            });
    });
});


// 计时器逻辑
$(document).ready(function () {

    var timerFlag = false;

    var myTimer = new MyTimer(
        function (startTime) {

            var t = parseInt((Date.parse(new Date()) - startTime) / 1000);

            $('#hours').html(utils.formatTime(parseInt(t / 3600)));
            $('#minutes').html(utils.formatTime(parseInt(t / 60) % 60));
            $('#seconds').html(utils.formatTime(t % 60));

        },
        function (startTime) {

            var t = parseInt((Date.parse(new Date()) - startTime) / 1000);

            $('#hours').html(utils.formatTime(parseInt(t / 3600)));
            $('#minutes').html(utils.formatTime(parseInt(t / 60) % 60));
            $('#seconds').html(utils.formatTime(t % 60));


        },
        function (startTime) {

            var res = parseInt((Date.parse(new Date()) - startTime) / 60000);

            // var res = hours * 60 + minutes + parseInt(seconds / 60);

            if (res < 1 || !window.localStorage.sessionId) {
                return;
            }

            weui.confirm('是否确定上传记录？', function () {
                uploadRecord(window.localStorage.sessionId, res, null, null);
            }, function () {
                console.log('取消上传记录');
            }, {
                className: 'confirm'
            });

        },
        function (startTime) {
            $('#hours').html('00');
            $('#minutes').html('00');
            $('#seconds').html('00');
            window.sessionStorage.startTime = startTime;

        }
    )

    if (window.sessionStorage.timerFlag == 'true') {

        var startTime = parseInt(window.sessionStorage.startTime || Date.parse(new Date()));

        timerFlag = true;
        $('#btnSwitch').addClass('active');
        myTimer.start(startTime);

    }

    $('#btnSwitch').click(function () {

        if (!timerFlag) {
            $(this).addClass('active');
            timerFlag = true;
            myTimer.start(Date.parse(new Date()));
            window.sessionStorage.startTime = Date.parse(new Date());
        } else {
            $(this).removeClass('active');
            timerFlag = false;
            myTimer.stop();
        }

        window.sessionStorage.timerFlag = timerFlag;

    });



    $('#btnRestart').click(function () {
        myTimer.restart();
    });

});

// $(document).ready(function () {

//     var flag = false;
//     var timer = null;

//     var hours = 0,
//         minutes = 0,
//         seconds = 0,
//         startTime = moment().format('YYYY-MM-DD hh:mm:ss'),
//         endTime = moment().format('YYYY-MM-DD hh:mm:ss');



//     function clearTimer(uploadData) {

//         uploadData = uploadData ? uploadData : false;

//         if (timer) {
//             clearInterval(timer);
//             timer = null;

//             if (uploadData) {

//                 var res = hours * 60 + minutes + parseInt(seconds / 60);
//                 endTime = moment().format('YYYY-MM-DD hh:mm:ss');

//                 if (res < 1 || !window.localStorage.sessionId) {
//                     return;
//                 }

//                 weui.confirm('是否确定上传记录？', function () {

//                     uploadRecord(window.localStorage.sessionId, res, startTime, endTime);

//                 }, function () {
//                     console.log('取消');
//                 }, {
//                     className: 'confirm'
//                 });

//             }

//         }

//         hours = 0;
//         minutes = 0;
//         seconds = 0;

//     }

//     function startTimer() {

//         clearTimer();

//         startTime = moment().format('YYYY-MM-DD hh:mm:ss');

//         timer = setInterval(function () {

//             seconds += 1;

//             if (seconds >= 60) {
//                 seconds = 0;
//                 minutes++;
//             }

//             if (minutes >= 60) {
//                 minutes = 0;
//                 hours++;
//             }

//             if (hours >= 24) {
//                 hours = 0;
//             }

//             $('#hours').html(utils.formatTime(hours));
//             $('#minutes').html(utils.formatTime(minutes));
//             $('#seconds').html(utils.formatTime(seconds));

//         }, 1000);
//     }


//     $('#btnSwitch').click(function () {

//         if (!flag) {

//             $(this).addClass('active');
//             flag = true;

//             startTimer();


//         } else {

//             $(this).removeClass('active');
//             flag = false;


//             $('#hours').html('00');
//             $('#minutes').html('00');
//             $('#seconds').html('00');

//             clearTimer(true);

//         }

//     });

//     $('#btnRestart').click(function () {
//         $('#hours').html('00');
//         $('#minutes').html('00');
//         $('#seconds').html('00');

//         hours = 0;
//         minutes = 0;
//         seconds = 0;

//         flag = true;
//         $('#btnSwitch').addClass('active');
//         startTimer();

//     });

// });
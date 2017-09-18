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

    $('#btnSwitchManual').click(function () {

        weui.picker(
            consts.TIME_PICKER_ITEM_HOUR, [{
                label: '时',
                value: '-'
            }],
            consts.TIME_PICKER_ITEM_MINUTE, [{
                label: '分',
                value: '-'
            }], {
                className: 'picker',
                container: 'body',
                defaultValue: [0, 0, 0],
                onChange: function (result) {
                    // console.log(result)
                },
                onConfirm: function (result) {

                    var res = result[0].value * 60 + result[2].value;

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

    var initHours = 0;
    var initMinutes = 0;
    var initSeconds = 0;

    if (window.localStorage.timerFlag == 'true') {

        initHours = parseInt(window.localStorage.hours || 0);
        initMinutes = parseInt(window.localStorage.minutes || 0);
        initSeconds = parseInt(window.localStorage.seconds || 0);

        $('#hours').html(utils.formatTime(initHours));
        $('#minutes').html(utils.formatTime(initMinutes));
        $('#seconds').html(utils.formatTime(initSeconds));

    }

    var myTimer = new MyTimer(
        initHours, initMinutes, initSeconds,
        function (hours, minutes, seconds) {

            window.localStorage.hours = hours;
            window.localStorage.minutes = minutes;
            window.localStorage.seconds = seconds;

            $('#hours').html(utils.formatTime(hours));
            $('#minutes').html(utils.formatTime(minutes));
            $('#seconds').html(utils.formatTime(seconds));

        },
        function (hours, minutes, seconds) {},
        function (hours, minutes, seconds) {

            var res = hours * 60 + minutes + parseInt(seconds / 60);

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
        function (hours, minutes, seconds) {
            $('#hours').html('00');
            $('#minutes').html('00');
            $('#seconds').html('00');
        }
    )

    if (window.localStorage.timerFlag == 'true') {

        timerFlag = true;
        $('#btnSwitch').addClass('active');
        myTimer.start();
    }

    $('#btnSwitch').click(function () {

        if (!timerFlag) {
            $(this).addClass('active');
            timerFlag = true;
            myTimer.start();
        } else {
            $(this).removeClass('active');
            timerFlag = false;
            myTimer.stop();
        }

        window.localStorage.timerFlag = timerFlag;

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
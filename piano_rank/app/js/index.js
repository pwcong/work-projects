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

function initUserInfo() {

    $.ajax({

        url: API.userInfo.url(),
        method: API.userInfo.method,
        headers: API.userInfo.headers(),
        success: function (data) {

            if (data.code != 'SUCCESS' || !data.result) {
                return;
            }

            $('#avatar').attr('src', data.result.avater || 'imgs/avatar.png');
            $('#avatar').removeClass('hide');
            $('#name').html(data.result.nickname);
            $('#sex').addClass(data.result.gender == 1 ? 'icon-male' : (data.result.gender == 2 ? 'icon-female' : ''));

        },
        error: function (err) {

        },
        complete: function (data) {

        }


    });

}

function uploadRecord(record, startTime, endTime) {

    $.ajax({
        url: API.uploadRecord.url(record, startTime, endTime),
        method: API.uploadRecord.method,
        headers: API.uploadRecord.headers(),
        success: function (data) {

            if (data.code != 'SUCCESS') {
                weui.alert(data.message, {
                    className: 'dialog'
                });
            } else {

                weui.toast('记录上传成功', 1500);
                $('#lastRecord').html(record);

            }
        },
        error: function (err) {

            weui.alert('记录上传失败', {
                className: 'dialog'
            });
        },
        complete: function (data) {

        }

    });

}

// 初始化信息
$(document).ready(function () {

    if (!window.localStorage.sessionId) {
        return;
    }

    initUserInfo();


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

                    if (res < 1) {
                        return;
                    }

                    uploadRecord(res);

                },
            });
    });
});


// 计时器逻辑
$(document).ready(function () {

    var flag = false;
    var timer = null;

    var hours = 0,
        minutes = 0,
        seconds = 0,
        startTime = moment().format('YYYY-MM-DD hh:mm:ss'),
        endTime = moment().format('YYYY-MM-DD hh:mm:ss');



    function clearTimer(uploadData) {

        uploadData = uploadData ? uploadData : false;

        if (timer) {
            clearInterval(timer);
            timer = null;

            if (uploadData) {

                var res = hours * 60 + minutes + parseInt(seconds / 60);
                endTime = moment().format('YYYY-MM-DD hh:mm:ss');

                if (res < 1) {
                    return;
                }

                weui.confirm('是否确定上传记录？', function () {

                    uploadRecord(res, startTime, endTime);

                }, function () {
                    console.log('取消');
                }, {
                    className: 'confirm'
                });

            }

        }

        hours = 0;
        minutes = 0;
        seconds = 0;

    }

    function startTimer() {

        clearTimer();

        startTime = moment().format('YYYY-MM-DD hh:mm:ss');

        timer = setInterval(function () {

            seconds += 1;

            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }

            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }

            if (hours >= 24) {
                hours = 0;
            }

            $('#hours').html(utils.formatTime(hours));
            $('#minutes').html(utils.formatTime(minutes));
            $('#seconds').html(utils.formatTime(seconds));

        }, 1000);
    }


    $('#btnSwitch').click(function () {

        if (!flag) {

            $(this).addClass('active');
            flag = true;

            startTimer();


        } else {

            $(this).removeClass('active');
            flag = false;


            $('#hours').html('00');
            $('#minutes').html('00');
            $('#seconds').html('00');

            clearTimer(true);

        }

    });

    $('#btnRestart').click(function () {
        $('#hours').html('00');
        $('#minutes').html('00');
        $('#seconds').html('00');

        hours = 0;
        minutes = 0;
        seconds = 0;

        flag = true;
        $('#btnSwitch').addClass('active');
        startTimer();

    });

});
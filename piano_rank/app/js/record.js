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

    API.getAllRecords(
        window.localStorage.sessionId,
        null,
        function (data) {

            if (data.code != 'SUCCESS' || !data.result) {
                return;
            }

            var record = 0;

            data.result.forEach(function (item, index) {

                record += item.record;

            });

            $('#practiceTime').html(record);

        },
        function (err) {

        },
        function (data) {

        }
    );

});

// 校验计时器状态
$(document).ready(function () {

    if (window.localStorage.sessionId && window.localStorage.timerFlag == 'true') {

        var hours = parseInt(window.localStorage.hours || 0);
        var minutes = parseInt(window.localStorage.minutes || 0);
        var seconds = parseInt(window.localStorage.seconds || 0);

        setInterval(function () {

            seconds++;

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

            window.localStorage.hours = hours;
            window.localStorage.minutes = minutes;
            window.localStorage.seconds = seconds;

        }, 1000);

    }


});

$(document).ready(function () {


    var calendarWidth = $('.my-calendar').innerWidth();
    var calendarHeight = calendarWidth * 0.87;

    $('#calendar').calendar({
        width: calendarWidth,
        height: calendarHeight,
        // data: [{
        //     date: '2017/9/15',
        //     value: '20分钟'
        // }],
        onSelected: function (view, date, data) {

            if (!data) {
                return;
            }

            weui.alert(data, {
                className: 'dialog'
            });

        }
    });



});
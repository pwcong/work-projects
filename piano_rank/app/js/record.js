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

function initRecords(year) {

    $.ajax({

        url: API.allRecords.url(year),
        method: API.allRecords.method,
        headers: API.allRecords.headers(),
        success: function (data) {

            if (data.code != 'SUCCESS' || !data.result) {
                return;
            }

            var record = 0;

            data.result.forEach(function (item, index) {

                record += item.record;

            });

            $('#practiceTime').html(record);

        },
        error: function (err) {

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
    initRecords();

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
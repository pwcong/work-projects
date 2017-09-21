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
            $('#practiceTime').html(data.result.record);
            $('#duration').html(data.result.insistDay);
        },
        function (err) {

        },
        function (data) {

        }
    );


});

// 校验计时器状态
// $(document).ready(function () {

//     if (window.localStorage.sessionId && window.localStorage.timerFlag == 'true') {

//         var hours = parseInt(window.localStorage.hours || 0);
//         var minutes = parseInt(window.localStorage.minutes || 0);
//         var seconds = parseInt(window.localStorage.seconds || 0);

//         setInterval(function () {

//             seconds++;

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

//             window.localStorage.hours = hours;
//             window.localStorage.minutes = minutes;
//             window.localStorage.seconds = seconds;

//         }, 1000);

//     }


// });


$(document).ready(function () {

    if (!window.localStorage.sessionId) {
        return;
    }

    var calendarWidth = $('.my-calendar').innerWidth();
    var calendarHeight = calendarWidth * 0.87;

    var now = new Date();
    API.getMonthRecords(
        window.localStorage.sessionId,
        now.getFullYear(),
        now.getMonth() + 1,
        function (data) {

            var initData = [];

            if (data.code == 'SUCCESS' && data.result) {

                data.result.forEach(function (item, index) {

                    initData.push({
                        date: item.currentDay,
                        value: item.record
                    });

                });

            }

            $('#calendar').calendar({
                width: calendarWidth,
                height: calendarHeight,
                format: 'yyyy-mm-dd',
                data: initData,
                // data: [],
                onSelected: function (view, date, data) {
                    if (!data) {
                        return;
                    }

                    weui.alert(data + '分钟', {
                        className: 'dialog'
                    });

                },
                viewChange: function (view, y, m) {

                    if (view != 'date' || !y || !m) {
                        return;
                    }

                    API.getMonthRecords(
                        window.localStorage.sessionId,
                        y,
                        m,
                        function (data) {

                            var changeData = {};

                            if (data.code == 'SUCCESS' && data.result) {

                                data.result.forEach(function (subItem, subIndex) {
                                    changeData[new Date(subItem.currentDay).getDate()] = subItem.record;
                                });

                            }

                            $('.date-items > li:nth-child(2) li:not(.old)').each(function (idx, el) {

                                if (!changeData[idx+1]) {
                                    return;
                                }

                                if($(el).find('i.dot').length > 0){
                                    return;
                                }

                                var dotEl = document.createElement('i');
                                dotEl.className = 'dot';

                                $(el).append(dotEl);
                                $(el).click(function(e){

                                    weui.alert(changeData[idx+1] + '分钟', {
                                        className: 'dialog'
                                    });

                                });

                            });

                        },
                        function (err) {},
                        function (data) {}

                    );

                }
            });

        },
        function (err) {

        },
        function (data) {


        }

    );





});
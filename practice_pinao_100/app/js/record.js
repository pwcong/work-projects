$(document).ready(function () {


    var calendarWidth = $('.my-calendar').innerWidth();
    var calendarHeight = calendarWidth * 0.87;

    $('#calendar').calendar({
        width: calendarWidth,
        height: calendarHeight,
        data: [
            // {
            //     date: '2015/12/24',
            //     value: 'Christmas Eve'
            // }
        ],
        onSelected: function (view, date, data) {
            // console.log('view:' + view)
            // alert('date:' + date)
            // console.log('data:' + (data || 'None'));
        }
    });



});
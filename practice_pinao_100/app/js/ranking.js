$(document).ready(function () {


    $('#showTimeRanking').click(function () {

        $(this).addClass('active');
        $('#showDayRanking').removeClass('active');

        $('#timeRanking').removeClass('hide');
        $('#dayRanking').addClass('hide');


    });

    $('#showDayRanking').click(function () {

        $(this).addClass('active');
        $('#showTimeRanking').removeClass('active');

        $('#dayRanking').removeClass('hide');
        $('#timeRanking').addClass('hide');
    });

});
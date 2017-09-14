$(document).ready(function () {


    $('#btnSwitchManual').click(function(){

        $('#timer').addClass('hide');
        $('#manual').removeClass('hide');

    });

    $('#btnSwitchTimer').click(function(){

        $('#manual').addClass('hide');
        $('#timer').removeClass('hide');

    });



});
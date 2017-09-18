function RankingItem(ranking, avatar, name, sex, score) {
    this.ranking = ranking;
    this.media = ranking == 1 ? 'icon-gold' : (ranking == 2 ? 'icon-silver' : (ranking == 3 ? 'icon-copper' : 'icon-medal'));
    this.avatar = avatar || 'imgs/avatar.png';
    this.name = name || '-';
    this.sex = sex == 2 ? 'icon-female' : (sex == 1 ? 'icon-male' : '');
    this.score = score || '-';
}

RankingItem.prototype.makeHTML = function () {

    var rankingItemDIV = document.createElement('div');
    rankingItemDIV.className = 'item';

    rankingItemDIV.innerHTML = '\
        <div class="left">\
            <span class="medal icon ' + this.media + '">' + (this.ranking > 3 ? this.ranking : '') + '</span>\
            <img class="avatar" src="' + this.avatar + '" alt="avatar">\
            <span class="name">' + this.name + '</span>\
            <span class="sex icon ' + this.sex + '"></span>\
        </div>\
        <div class="right">' + this.score + '</div>';

    return rankingItemDIV;

}

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

        });

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

    API.getDayRanking(
        window.localStorage.sessionId,
        function (data) {

            if (data.code != 'SUCCESS' || !data.result || !data.result.list) {
                return;
            }

            data.result.list.forEach(function (item, index) {

                var rankingItem = new RankingItem(index + 1, item.avater, item.nickname, item.gender, item.record);

                $('#timeRanking .tips').before(rankingItem.makeHTML());
            });


        },
        function (err) {

        },
        function (data) {

        }

    );


});

// 初始化排行榜navbar
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

// 初始化数据
// $(document).ready(function () {

//     var items = [{
//             media: 1,
//             avatar: '',
//             name: 'Pwcong',
//             sex: 1,
//             score: 100
//         },
//         {
//             media: 2,
//             avatar: '',
//             name: 'Pwcong',
//             sex: 0,
//             score: 80
//         },
//         {
//             media: 3,
//             avatar: '',
//             name: 'Pwcong',
//             sex: 2,
//             score: 60
//         },
//         {
//             media: 4,
//             avatar: '',
//             name: 'Pwcong',
//             sex: 1,
//             score: 40
//         }
//     ];

//     items.forEach(function (item, index) {

//         var rankingItem = new RankingItem(item.media, item.avatar, item.name, item.sex, item.score);


//         $('#timeRanking .tips').before(rankingItem.makeHTML());

//         $('#dayRanking .tips').before(rankingItem.makeHTML());

//     });

// });
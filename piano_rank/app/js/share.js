function RankingItem(ranking, avatar, name, sex, score) {
    this.ranking = ranking;
    this.media = ranking == 1 ? 'icon-gold' : (ranking == 2 ? 'icon-silver' : (ranking == 3 ? 'icon-copper' : 'icon-medal'));
    this.avatar = avatar || 'imgs/avatar.png';
    this.name = name || '-';
    this.sex = sex == 2 ? 'icon-female' : (sex == 1 ? 'icon-male' : '');
    this.score = score || 0;
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

var PAGE_SIZE = 10;
var pageNo_1 = 1;
var pageOffset_1 = 0;
var hasMore_1 = false;

var pageNo_2 = 1;
var pageOffset_2 = 0;
var hasMore_2 = false;

function loadRecordsRank(pageNo, onSuccess, onFail, onComplete) {

    API.getAllRecordsRank(
        pageNo,
        PAGE_SIZE,
        function (data) {

            onSuccess && onSuccess(data);

            if (data.code != 'SUCCESS' || !data.result || !data.result.list) {
                return;
            }

            data.result.list.forEach(function (item, index) {

                var rankingItem = new RankingItem(index + pageOffset_1 + 1, item.avater, item.nickname, item.gender, item.record);

                $('#timeRanking .tips').before(rankingItem.makeHTML());

            });

            pageOffset_1 += data.result.list.length;


        },
        function (err) {
            onFail && onFail(err);
        },
        function (data) {
            onComplete && onComplete();
        }

    );

}

function loadDaysRecords(pageNo, onSuccess, onFail, onComplete) {

    API.getAllDaysRank(
        pageNo,
        PAGE_SIZE,
        function (data) {

            onSuccess && onSuccess(data);

            if (data.code != 'SUCCESS' || !data.result || !data.result.list) {
                return;
            }

            data.result.list.forEach(function (item, index) {

                var rankingItem = new RankingItem(index + pageOffset_2 + 1, item.avater, item.nickname, item.gender, item.insistDay);

                $('#dayRanking .tips').before(rankingItem.makeHTML());

            });

            pageOffset_2 += data.result.list.length;

        },
        function (err) {
            onFail && onFail(err);
        },
        function (data) {
            onComplete && onComplete();
        }

    );

}

// 初始化信息
$(document).ready(function () {


    $('#avatar').attr('src', utils.getUrlParam('a') || 'imgs/avatar.png');
    $('#avatar').show();
    $('#name').html(utils.getUrlParam('n') || '-');

    switch (utils.getUrlParam('s')) {
        case '1':
            $('#sex').addClass('icon-male');
            break;
        case '2':

            $('#sex').addClass('icon-female');
            break;
        default:
            break;
    }

    $('#practiceTime').html(utils.getUrlParam('ar') || 0);
    $('#duration').html(utils.getUrlParam('i') || 0);

    loadRecordsRank(pageNo_1,
        function (data) {

            if (!data.code == 'SUCCESS' || !data.result) {
                return;
            }

            console.log(data);

            if (data.result.totalPage > pageNo_1) {

                pageNo_1++;
                hasMore_1 = true;

                $('#timeRanking .tips').html('加载更多');

            } else {
                hasMore_1 = false;
                $('#timeRanking .tips').html('没有了~');
            }

        },
        function (err) {

        },
        function () {

        }
    );

    loadDaysRecords(pageNo_2,
        function (data) {
            if (!data.code == 'SUCCESS' || !data.result) {
                return;
            }

            if (data.result.totalPage > pageNo_2) {

                pageNo_2++;
                hasMore_2 = true;

                $('#dayRanking .tips').html('加载更多');

            } else {
                hasMore_2 = false;
                $('#dayRanking .tips').html('没有了~');
            }
        },
        function (err) {

        },
        function () {

        }
    );

    $('#timeRanking .tips').click(function (e) {

        if (hasMore_1) {

            $('#timeRanking .tips').html('加载中');

            loadRecordsRank(pageNo_1,
                function (data) {

                    if (!data.code == 'SUCCESS' || !data.result) {
                        return;
                    }


                    if (data.result.totalPage > pageNo_1) {

                        pageNo_1++;
                        hasMore_1 = true;

                        $('#timeRanking .tips').html('加载更多');

                    } else {
                        hasMore_1 = false;
                        $('#timeRanking .tips').html('没有了~');
                    }

                },
                function (err) {

                },
                function () {

                }
            );
        }
    });

    $('#dayRanking .tips').click(function (e) {

        if (hasMore_2) {

            $('#dayRanking .tips').html('加载中');

            loadDaysRecords(pageNo_2,
                function (data) {
                    if (!data.code == 'SUCCESS' || !data.result) {
                        return;
                    }

                    if (data.result.totalPage > pageNo_2) {

                        pageNo_2++;
                        hasMore_2 = true;

                        $('#dayRanking .tips').html('加载更多');

                    } else {
                        hasMore_2 = false;
                        $('#dayRanking .tips').html('没有了~');
                    }
                },
                function (err) {

                },
                function () {

                }
            );



        }


    });


    // API.getAllRecordsRank(
    //     function (data) {

    //         if (data.code != 'SUCCESS' || !data.result || !data.result.list) {
    //             return;
    //         }

    //         data.result.list.forEach(function (item, index) {

    //             var rankingItem = new RankingItem(index + 1, item.avater, item.nickname, item.gender, item.record);

    //             $('#timeRanking .tips').before(rankingItem.makeHTML());
    //         });


    //     },
    //     function (err) {

    //     },
    //     function (data) {

    //     }

    // );

    // API.getAllDaysRank(
    //     function (data) {

    //         if (data.code != 'SUCCESS' || !data.result || !data.result.list) {
    //             return;
    //         }

    //         data.result.list.forEach(function (item, index) {

    //             var rankingItem = new RankingItem(index + 1, item.avater, item.nickname, item.gender, item.insistDay);

    //             $('#dayRanking .tips').before(rankingItem.makeHTML());
    //         });


    //     },
    //     function (err) {

    //     },
    //     function (data) {

    //     }

    // );




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
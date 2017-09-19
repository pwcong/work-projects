// $(document).ready(function () {

//     $('#btnCheck').click(function (e) {

//         wx.onMenuShareAppMessage({
//             title: '123',
//             desc: '123',
//             // link: 'http://www.ppfix.cn/activity/piano_rank/index.html',
//             // imgUrl: 'http://www.ppfix.cn/activity/piano_rank/imgs/logo.png',
//             link: window.location.href,
//             imgUrl: 'http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg',
//             trigger: function (res) {
//                 // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
//                 alert('用户点击发送给朋友');
//             },
//             success: function (res) {
//                 alert('已分享');
//             },
//             cancel: function (res) {
//                 alert('已取消');
//             },
//             fail: function (res) {
//                 alert(JSON.stringify(res));
//             }
//         });

//     })

// });

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





// 初始化信息
$(document).ready(function () {

    if (!window.localStorage.sessionId) {
        return;
    }

    // var nickname = '-';
    // var sex = 0;
    // var avatar = window.location.host + '/imgs/avatar.png';
    // var insistDay = 0;
    // var record = 0;
    // var allRecords = 0

    API.getUserInfo(
        window.localStorage.sessionId,
        function (data) {

            if (data.code != 'SUCCESS' || !data.result) {
                return;
            }

            $('#avatar').attr('src', data.result.avater || 'imgs/avatar.png');
            $('#avatar').show();
            $('#name').html(data.result.nickname);
            $('#sex').addClass(data.result.gender == 1 ? 'icon-male' : (data.result.gender == 2 ? 'icon-female' : ''));
            $('#practiceTime').html(data.result.record);
            $('#duration').html(data.result.insistDay);

            // nickname = data.result.nickname;
            // insistDay = data.result.insistDay;
            // sex = data.result.gender;
            // avatar = data.result.avater;
            // allRecords = data.result.record;

            var infoData = data.result;

            API.getSign(

                function (data) {

                    if (!data.code == 'SUCCESS' || !data.result) {
                        return;
                    }

                    var result = data.result;

                    wx.config({
                        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: result.appId, // 必填，公众号的唯一标识
                        timestamp: result.timestamp, // 必填，生成签名的时间戳
                        nonceStr: result.nonceStr, // 必填，生成签名的随机串
                        signature: result.signature, // 必填，签名，见附录1
                        jsApiList: [
                            'onMenuShareAppMessage',
                            'onMenuShareTimeline',
                            // 'onMenuShareQQ',
                            // 'onMenuShareWeibo',
                            // 'onMenuShareQZone'
                        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                    });

                    wx.onMenuShareTimeline({
                        title: '晓雯音乐广州市桥分校百日练琴第三季活动',
                        desc: infoData.nickname + '小朋友在晓雯音乐百日练琴计划中坚持了' + infoData.insistDay + '天，累计练习了' + infoData.record + '分钟',
                        link: 'http://www.ppfix.cn/activity/piano_rank/share.html?n=' + infoData.nickname + '&a=' + infoData.avater + '&s=' + infoData.gender + '&ar=' + infoData.record + '&i=' + infoData.insistDay,
                        imgUrl: infoData.avater,
                        success: function (res) {
                            // alert('已分享');
                        },
                        cancel: function (res) {
                            // alert('已取消');
                        }
                    });

                    wx.onMenuShareAppMessage({
                        title: '晓雯音乐广州市桥分校百日练琴第三季活动',
                        desc: infoData.nickname + '小朋友在晓雯音乐百日练琴计划中坚持了' + infoData.insistDay + '天，累计练习了' + infoData.record + '分钟',
                        link: 'http://www.ppfix.cn/activity/piano_rank/share.html?n=' + infoData.nickname + '&a=' + infoData.avater + '&s=' + infoData.gender + '&ar=' + infoData.record + '&i=' + infoData.insistDay,
                        imgUrl: infoData.avater,
                        success: function (res) {
                            // alert('已分享');
                        },
                        cancel: function (res) {
                            // alert('已取消');
                        }
                    });


                },
                function (err) {
                    console.log(err);
                },
                function (data) {

                }
            );


        },
        function (err) {

        },
        function (data) {

        }
    );

    // API.getDayRecords(
    //     window.localStorage.sessionId,
    //     function (data) {

    //         if (data.code != 'SUCCESS' || !data.result) {
    //             return;
    //         }

    //         var t = 0;

    //         data.result.forEach(function (item, index) {

    //             t += item.record;

    //         });

    //         record = t;

    //     },
    //     function (err) {

    //     },
    //     function (data) {

    //     }
    // );

    API.getAllRecordsRank(
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

    API.getAllDaysRank(
        function (data) {

            if (data.code != 'SUCCESS' || !data.result || !data.result.list) {
                return;
            }

            data.result.list.forEach(function (item, index) {

                var rankingItem = new RankingItem(index + 1, item.avater, item.nickname, item.gender, item.insistDay);

                $('#dayRanking .tips').before(rankingItem.makeHTML());
            });


        },
        function (err) {

        },
        function (data) {

        }

    );


    // setTimeout(function () {

    //     wx.onMenuShareAppMessage({
    //         title: nickname + '小朋友在晓雯音乐百日练琴计划中坚持了' + insistDay + '天，今天练琴' + record + '分钟。',
    //         desc: '',
    //         link: window.location.host + 'share.html?n=' + nickname + '&a=' + avatar + '&s=' + sex + '&ar=' + allRecords + '&i=' + insistDay,
    //         imgUrl: avatar,
    //         trigger: function (res) {
    //             // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
    //             alert('用户点击发送给朋友');
    //         },
    //         success: function (res) {
    //             alert('已分享');
    //         },
    //         cancel: function (res) {
    //             alert('已取消');
    //         },
    //         fail: function (res) {
    //             alert(JSON.stringify(res));
    //         }
    //     });

    //     wx.onMenuShareTimeline({
    //         title: nickname + '小朋友在晓雯音乐百日练琴计划中坚持了' + insistDay + '天，今天练琴' + record + '分钟。',
    //         desc: '',
    //         link: window.location.host + 'share.html?n=' + nickname + '&a=' + avatar + '&s=' + sex + '&ar=' + allRecords + '&i=' + insistDay,
    //         imgUrl: avatar,
    //         trigger: function (res) {
    //             // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
    //             alert('用户点击发送给朋友');
    //         },
    //         success: function (res) {
    //             alert('已分享');
    //         },
    //         cancel: function (res) {
    //             alert('已取消');
    //         },
    //         fail: function (res) {
    //             alert(JSON.stringify(res));
    //         }
    //     });

    // }, 3000);







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
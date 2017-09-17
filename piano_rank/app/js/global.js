;
(function () {

    var API_BASE = 'http://www.ppfix.cn/piano_rank';

    var API = {

        auth: {
            url: function () {
                return API_BASE + '/api/wx/authUrl?redirectUri=' + window.location.href;
            },
            method: 'GET'
        },
        userInfo: {
            url: function () {
                return API_BASE + '/api/user/info';
            },
            method: 'GET',
            headers: function () {
                return {
                    sessionId: window.localStorage.sessionId
                }
            }
        },
        modifyUserInfo: {
            url: function (nickname, gender) {

                nickname = nickname || '';
                gender = gender || '';

                return API_BASE + '/api/user/update?nickname=' + nickname + '&gender=' + gender;
            },
            method: 'GET',
            headers: function () {
                return {
                    sessionId: window.localStorage.sessionId
                }
            }
        },
        uploadRecord: {
            url: function (record, beginTime, endTime) {

                record = record || 0;
                beginTime = beginTime || '';
                endTime = endTime || '';

                // return API_BASE + '/api/user/record/upload?record=' + record + '&beginTime=' + beginTime + '&endTime=' + endTime;
                return API_BASE + '/api/user/record/upload?record=' + record;
            },
            method: 'GET',
            headers: function () {
                return {
                    sessionId: window.localStorage.sessionId
                }
            }
        },
        dayRanking: {
            url: function () {
                return API_BASE + '/api/rank/day';
            },
            method: 'GET',
            headers: function () {
                return {
                    sessionId: window.localStorage.sessionId
                }
            }
        },
        allRecords: {
            url: function (year) {

                year = year || '';

                return API_BASE + '/api/user/record/all?year=' + year;
            },
            method: 'GET',
            headers: function () {
                return {
                    sessionId: window.localStorage.sessionId
                }
            }
        }


    }



    // 初始化sessionId
    function initSessionId() {
        var sessionId = utils.getUrlParam('sessionId');

        if (sessionId) {
            window.localStorage.sessionId = sessionId;
        }
    }

    // 校验sessionId
    function checkSessionId() {
        return window.localStorage.sessionId ? true : false;
    }

    // 调用授权接口获取sessionId
    function getSessionId() {

        $.ajax({
            url: API.auth.url(),
            method: API.auth.method,
            success: function (data) {
                window.location.href = data;
            },
            error: function (err) {
                console.log(err);
            },
            complete: function (data) {

            }
        })

    }

    function init() {

        initSessionId();

        if (!checkSessionId()) {
            getSessionId();
        }

    }

    init();

    window.API = API;

})();
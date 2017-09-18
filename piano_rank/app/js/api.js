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
            headers: function (sessionId) {
                return {
                    sessionId: sessionId
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
            headers: function (sessionId) {
                return {
                    sessionId: sessionId
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
            headers: function (sessionId) {
                return {
                    sessionId: sessionId
                }
            }
        },
        dayRanking: {
            url: function () {
                return API_BASE + '/api/rank/day';
            },
            method: 'GET',
            headers: function (sessionId) {
                return {
                    sessionId: sessionId
                }
            }
        },
        allRecords: {
            url: function (year) {

                year = year || '';

                return API_BASE + '/api/user/record/all?year=' + year;
            },
            method: 'GET',
            headers: function (sessionId) {
                return {
                    sessionId: sessionId
                }
            }
        }

    }

    function getSessionId(onSuccess, onError, onComplete) {

        $.ajax({
            url: API.auth.url(),
            method: API.auth.method,
            success: function (data) {
                onSuccess && onSuccess(data);
            },
            error: function (err) {
                onError && onError(err);
            },
            complete: function (data) {
                onComplete && onComplete();
            }
        });
    }

    function getUserInfo(sessionId, onSuccess, onError, onComplete) {

        $.ajax({

            url: API.userInfo.url(),
            method: API.userInfo.method,
            headers: API.userInfo.headers(sessionId),
            success: function (data) {
                onSuccess && onSuccess(data);
            },
            error: function (err) {
                onError && onError(err);
            },
            complete: function (data) {
                onComplete && onComplete();
            }

        });

    }


    function uploadRecord(sessionId, record, startTime, endTime, onSuccess, onError, onComplete) {

        $.ajax({
            url: API.uploadRecord.url(record, startTime, endTime),
            method: API.uploadRecord.method,
            headers: API.uploadRecord.headers(sessionId),
            success: function (data) {
                onSuccess && onSuccess(data);
            },
            error: function (err) {
                onError && onError(err);
            },
            complete: function (data) {
                onComplete && onComplete();
            }

        });

    }

    function modifyUserInfo(sessionId, nickname, sex, onSuccess, onError, onComplete) {

        $.ajax({

            url: API.modifyUserInfo.url(nickname, sex),
            method: API.modifyUserInfo.method,
            headers: API.modifyUserInfo.headers(sessionId),
            success: function (data) {
                onSuccess && onSuccess(data);
            },
            error: function (err) {
                onError && onError(err);
            },
            complete: function (data) {
                onComplete && onComplete();
            }


        });
    }

    function getAllRecords(sessionId, year, onSuccess, onError, onComplete) {
        $.ajax({

            url: API.allRecords.url(year),
            method: API.allRecords.method,
            headers: API.allRecords.headers(sessionId),
            success: function (data) {
                onSuccess && onSuccess(data);
            },
            error: function (err) {
                onError && onError(err);
            },
            complete: function (data) {
                onComplete && onComplete();
            }


        });
    }

    function getDayRanking(sessionId, onSuccess, onError, onComplete) {

        $.ajax({

            url: API.dayRanking.url(),
            method: API.dayRanking.method,
            headers: API.dayRanking.headers(sessionId),
            success: function (data) {
                onSuccess && onSuccess(data);
            },
            error: function (err) {
                onError && onError(err);
            },
            complete: function (data) {
                onComplete && onComplete();
            }


        });

    }

    if (!window.API) {
        window.API = {};
    }

    window.API.getSessionId = getSessionId;
    window.API.getUserInfo = getUserInfo;
    window.API.uploadRecord = uploadRecord;
    window.API.modifyUserInfo = modifyUserInfo;
    window.API.getAllRecords = getAllRecords;
    window.API.getDayRanking = getDayRanking;


})();
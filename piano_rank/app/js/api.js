;
(function () {

    var API_BASE = 'http://www.ppfix.cn/piano_rank';

    var API = {

        auth: {
            url: function (targetUrl) {
                return API_BASE + '/api/wx/authUrl?redirectUri=' + targetUrl;
            },
            method: 'GET'
        },
        sign: {
            url: function () {
                return API_BASE + '/api/wx/jsapiSign?url=' + window.location.href;
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
            url: function (nickname, gender, age, grade) {

                nickname = nickname || '';
                gender = gender || '';
                age = age || 0;
                grade = grade || '';

                return API_BASE + '/api/user/update?nickname=' + nickname + '&gender=' + gender + '&age=' + age + '&classId=' + grade;
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
        dayRecords: {
            url: function () {
                return API_BASE + '/api/user/record/day';
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
        },
        allRecordsRank: {
            url: function (pageNo, pageSize) {

                pageNo = pageNo || 1;
                pageSize = pageSize || 100;

                return API_BASE + '/api/rank/orderByRecord?pageNo=' + pageNo + '&pageSize=' + pageSize;
            },
            method: 'GET',
            headers: function (sessionId) {
                return {
                    sessionId: sessionId
                }
            }
        },
        allDaysRank: {
            url: function (pageNo, pageSize) {

                pageNo = pageNo || 1;
                pageSize = pageSize || 100;

                return API_BASE + '/api/rank/orderByDay?pageNo=' + pageNo + '&pageSize=' + pageSize;
            },
            method: 'GET',
            headers: function (sessionId) {
                return {
                    sessionId: sessionId
                }
            }
        },
        getClass: {
            url: function (pageNo, pageSize) {

                pageNo = pageNo || 1;
                pageSize = pageSize || 100;

                return API_BASE + '/api/user/getClass?pageNo=' + pageNo + '&pageSize=' + pageSize;
            },
            method: 'GET',
            headers: function (sessionId) {
                return {
                    sessionId: sessionId
                }
            }
        },

    }


    function getSessionId(url, onSuccess, onError, onComplete) {

        $.ajax({
            url: API.auth.url(url),
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

    function getSign(onSuccess, onError, onComplete) {

        $.ajax({
            url: API.sign.url(),
            method: API.sign.method,
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

    function modifyUserInfo(sessionId, nickname, sex, age, grade, onSuccess, onError, onComplete) {

        $.ajax({

            url: API.modifyUserInfo.url(nickname, sex, age, grade),
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

    function getDayRecords(sessionId, onSuccess, onError, onComplete) {

        $.ajax({

            url: API.dayRecords.url(),
            method: API.dayRecords.method,
            headers: API.dayRecords.headers(sessionId),
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

    function getAllDaysRank(onSuccess, onError, onComplete) {

        $.ajax({

            url: API.allDaysRank.url(),
            method: API.allDaysRank.method,
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

    function getAllRecordsRank(onSuccess, onError, onComplete) {

        $.ajax({

            url: API.allRecordsRank.url(),
            method: API.allRecordsRank.method,
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
    
    function getClass(sessionId, onSuccess, onError, onComplete) {

        $.ajax({

            url: API.getClass.url(),
            method: API.getClass.method,
            headers: API.getClass.headers(sessionId),
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
    window.API.getDayRecords = getDayRecords;
    window.API.getAllDaysRank = getAllDaysRank;
    window.API.getAllRecordsRank = getAllRecordsRank;
    window.API.getSign = getSign;
    window.API.getClass = getClass;


})();
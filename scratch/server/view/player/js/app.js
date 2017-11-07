(function () {
    'use strict';

    var stage;

    var config = {

        // scratch项目详情
        projectId: 1,
        projectTitle: 'Untitled',
        projectAuthor: 'Unknown',

        // 按键
        keys: [

            {
                name: 'A',
                code: 65
            },
            {
                name: 'B',
                code: 66
            },
            {
                name: '空格',
                code: 32
            }

        ],

        turbo: false,
        fullScreen: true,
        aspectX: 4,
        aspectY: 3,
        resolutionX: 480,
        resolutionY: 360,
    }

    var container = document.querySelector('.container');

    var player = document.querySelector('.player');

    var loading = document.querySelector('#loading');
    var progressBar = document.querySelector('#progressBar');

    var error = document.querySelector('#error');
    var tools = document.querySelector('#tools');

    var controller = document.querySelector('.controller');
    var action = document.querySelector('.action');

    P.resolution = config.resolutionX;
    P.showWebGLError = function (e) {
        console.error(e);
    }

    function triggerKeyboardEvent(el, keyCode) {
        var eventObj = document.createEventObject ?
            document.createEventObject() : document.createEvent("Events");

        if (eventObj.initEvent) {
            eventObj.initEvent("keydown", true, true);
        }

        eventObj.keyCode = keyCode;
        eventObj.which = keyCode;

        el.dispatchEvent ? el.dispatchEvent(eventObj) : el.fireEvent("onkeydown", eventObj);

    }

    function getQueryString(key) {
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
        var result = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    }

    function calculateSize(el) {

        var _w = $(el).innerWidth();
        var _h = $(el).innerHeight();

        var w = Math.min(_w, _h * config.aspectX / config.aspectY);

        if (!config.fullScreen) {
            w = config.resolutionX;
        }
        var h = w * config.aspectY / config.aspectX;

        if (!config.fullScreen) {
            h = config.resolutionY;
        }

        return {
            w: w,
            h: h
        };

    }


    // 初始化配置
    function initConfig() {

        var id = getQueryString('id');
        var author = getQueryString('author');
        var title = getQueryString('title');

        config.projectId = id ? id : config.projectId;
        config.projectAuthor = author ? author : config.projectAuthor;
        config.projectTitle = title ? title : config.projectTitle;

        var keys = getQueryString('keys');
        if (keys) {

            var kvs = keys.split('+');
            config.keys = [];

            for (var i = 0; i < kvs.length; i++) {

                var t = kvs[i].split('-');

                if (t.length < 2) {
                    continue;
                }

                config.keys.push({
                    name: t[0],
                    code: t[1]
                });

            }

        }

    }

    function initView() {

        //禁用长按菜单
        document.oncontextmenu = function (e) {
            //或者return false;
            e.preventDefault();
        };

        // 初始化播放器和控制器尺寸
        var size = calculateSize(container);
        player.style.height = size.h + 'px';
        player.style.width = size.w + 'px';
        controller.style.height = $(container).innerHeight() - size.h + 'px';

        // 初始化项目详情
        $('#title').html(config.projectTitle);
        $('#author').html(config.projectAuthor);

        // 初始化自定义按键
        for (var i = 0; i < config.keys.length; i++) {
            $(action).append($('<button type="button" data-code="' + config.keys[i].code + '">' + config.keys[i].name + '</button>'));
        }


    }

    // 初始化播放器
    function initPlayer() {

        function resize() {

            var size = calculateSize(container);

            // player.style.left = (window.innerWidth - w) / 2 + 'px';
            // player.style.top = (window.innerHeight - h) / 2 + 'px';
            player.style.height = size.h + 'px';
            player.style.width = size.w + 'px';

            controller.style.height = $(container).innerHeight() - size.h + 'px';

            if (!stage) {
                return;
            }

            stage.setZoom(size.w / 480, size.h / 360);
            stage.draw();

        }

        function showError(e) {

            loading.style.display = 'none';
            error.style.display = 'flex';
            console.error(e);

        }

        var request = P.IO.loadScratchr2Project(config.projectId);

        request.onload = function (s) {

            loading.style.display = 'none';
            tools.style.display = 'flex';

            stage = s;
            resize();

            s.isTurbo = config.turbo;
            // s.start();
            // s.triggerGreenFlag();

            player.appendChild(s.root);
            s.focus();
            s.handleError = showError;

        };
        request.onerror = showError;
        request.onprogress = function (e) {
            progressBar.innerHTML = parseInt(10 + e.loaded / e.total * 90);
        };

        // P.IO.loadScratchr2ProjectTitle(config.projectId, function (title) {
        //     document.title = config.projectTitle = title;
        // });

        window.addEventListener('resize', resize);



    }

    // 初始化控制器
    function initController() {

        var upTimer = null;
        var downTimer = null;
        var leftTimer = null;
        var rightTimer = null;

        $('#btnRestart').click(function () {
            if (!stage) {
                return;
            }

            stage.start();
            stage.triggerGreenFlag();
            stage.focus();

            tools.style.display = 'none';
            $('.controller').addClass('active');
            $('.details').removeClass('active');

        });

        $('#btnStart').click(function () {
            if (!stage) {
                return;
            }


            stage.start();
            stage.triggerGreenFlag();
            stage.focus();

            tools.style.display = 'none';
            $('.controller').addClass('active');
            $('.details').removeClass('active');

        });

        $('#btnStop').click(function () {

            if (!stage) {
                return;
            }

            stage.pause();

            tools.style.display = 'flex';
            $('.controller').removeClass('active');
            $('.details').addClass('active');

        });

        $('#btnUp').on('touchstart', function () {
            if (!stage) {
                return;
            }

            if (upTimer) {
                clearInterval(upTimer);
            }

            triggerKeyboardEvent(stage.canvas, 38);
            triggerKeyboardEvent(stage.canvas, 87);
            upTimer = setInterval(function () {

                triggerKeyboardEvent(stage.canvas, 38);
                triggerKeyboardEvent(stage.canvas, 87);

            }, 15);

        });


        $('#btnUp').on('touchend', function () {
            if (upTimer) {
                clearInterval(upTimer);
                upTimer = null;
            }

        });
        $('#btnDown').on('touchstart', function () {
            if (!stage) {
                return;
            }

            if (downTimer) {
                clearInterval(downTimer);
            }

            triggerKeyboardEvent(stage.canvas, 40);
            triggerKeyboardEvent(stage.canvas, 83);
            downTimer = setInterval(function () {

                triggerKeyboardEvent(stage.canvas, 40);
                triggerKeyboardEvent(stage.canvas, 83);

            }, 15);

        });


        $('#btnDown').on('touchend', function () {
            if (downTimer) {
                clearInterval(downTimer);
                downTimer = null;
            }

        });
        $('#btnLeft').on('touchstart', function () {
            if (!stage) {
                return;
            }

            if (leftTimer) {
                clearInterval(leftTimer);
            }

            triggerKeyboardEvent(stage.canvas, 37);
            triggerKeyboardEvent(stage.canvas, 65);
            leftTimer = setInterval(function () {

                triggerKeyboardEvent(stage.canvas, 37);
                triggerKeyboardEvent(stage.canvas, 65);

            }, 15);

        });


        $('#btnLeft').on('touchend', function () {
            if (leftTimer) {
                clearInterval(leftTimer);
                leftTimer = null;
            }

        });
        $('#btnRight').on('touchstart', function () {
            if (!stage) {
                return;
            }

            if (rightTimer) {
                clearInterval(rightTimer);
            }

            triggerKeyboardEvent(stage.canvas, 39);
            triggerKeyboardEvent(stage.canvas, 68);
            rightTimer = setInterval(function () {

                triggerKeyboardEvent(stage.canvas, 39);
                triggerKeyboardEvent(stage.canvas, 68);

            }, 15);

        });


        $('#btnRight').on('touchend', function () {
            if (rightTimer) {
                clearInterval(rightTimer);
                rightTimer = null;
            }

        });


        $('.action').click(function (e) {

            if (!stage) {
                return;
            }

            var code = $(e.target).attr('data-code');

            if (code) {
                triggerKeyboardEvent(stage.canvas, parseInt(code));
            }

        })



        // $('#btnUp').mousedown(function () {
        //     if (!stage) {
        //         return;
        //     }

        //     console.log('ok');
        //     triggerKeyboardEvent(stage.canvas, 38);
        // });

    }

    // 入口逻辑
    function init() {


        initConfig();
        initView();
        initPlayer();
        initController();

    }

    init();

}());
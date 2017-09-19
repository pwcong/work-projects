// 初始化信息
$(document).ready(function () {

    if (!window.localStorage.sessionId) {
        return;
    }

    API.getClass(
        window.localStorage.sessionId,
        function (data) {

            if (data.code != 'SUCCESS' || !data.result) {
                return;
            }

            data.result.forEach(function (item, index) {

                var selectOption = document.createElement('option');

                selectOption.setAttribute('value', item.id);
                selectOption.innerHTML = item.name;

                $('#selectClass').append(selectOption);

            });

            API.getUserInfo(
                window.localStorage.sessionId,
                function (data) {

                    if (data.code != 'SUCCESS' || !data.result) {
                        return;
                    }

                    $('#avatar').attr('src', data.result.avater || 'imgs/avatar.png');
                    $('#avatar').removeClass('hide');
                    $('#inputNickname').val(data.result.nickname);
                    $('#inputAge').val(data.result.age);
                    $('#selectClass').val(data.result.classId || '');

                    $('input[name="sex"').removeAttr('checked');
                    $('input[name="sex"][value="' + data.result.gender + '"').attr('checked', 'checked');

                },
                function (err) {

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


});

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


// 修改头像
// $(document).ready(function () {

//     $('#inputAvatar').change(function (e) {

//         if ($(this).prop('files').length < 1) {
//             return;
//         }

//         $('#avatar').attr('src', window.URL.createObjectURL($(this).prop('files')[0]));

//         // console.log($(this).prop('files'));

//     });

// });

// 提交表单
$(document).ready(function () {

    $('#btnSubmit').click(function () {

        var ctx = $(this);

        var nickName = $('#inputNickname').val();
        var sex = $('input[name|="sex"]:checked').val();
        var age = $('#inputAge').val();
        var selectClass = $('#selectClass').val();

        if (!nickName) {
            weui.alert('请输入昵称', {
                className: 'dialog'
            });
            return;
        }

        if (!sex) {
            weui.alert('请选择性别', {
                className: 'dialog'
            });
            return;
        }

        if (!age) {
            weui.alert('请输入年龄', {
                className: 'dialog'
            });
            return;
        }

        if (!selectClass) {
            weui.alert('请选择班级', {
                className: 'dialog'
            });
            return;
        }


        if (!window.localStorage.sessionId) {
            return;
        }

        // var data = new FormData(); 

        // data.append('nickname', $('#inputNickname').val());

        // data.append('sex', $('input[name|="sex"]:checked').val());

        // var files = $('#inputAvatar').prop('files');

        // if (files.length > 0) {
        //     var avatar = $('#inputAvatar').prop('files');
        //     data.append('avatar', files[0]);  
        // }

        // var loading = weui.loading('提交中', {
        //     className: 'loading'
        // });

        // $.ajax({  
        //     url: '#',
        //     type: 'POST',
        //     data: data,
        //     cache: false,
        //     processData: false,
        //     contentType: false,
        //     success: function (data) {

        //     },
        //     error: function (e) {

        //     },
        //     complete: function (data) {
        //         loading.hide();
        //     }
        // });

        ctx.attr('disabled', 'disabled');
        ctx.html('提交中');

        API.modifyUserInfo(
            window.localStorage.sessionId,
            nickName,
            sex,
            age,
            selectClass,
            function (data) {

                if (data.code != 'SUCCESS') {
                    return;
                }

                weui.toast('修改成功', 1500);

            },
            function (err) {
                weui.toast('修改失败', 1500);
            },
            function (data) {
                ctx.removeAttr('disabled', 'disabled');
                ctx.html('确定');
            }

        );

    });


    $('#btnBack').click(function () {
        window.history.back();
    });

});
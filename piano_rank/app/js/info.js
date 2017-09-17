function initUserInfo() {

    $.ajax({

        url: API.userInfo.url(),
        method: API.userInfo.method,
        headers: API.userInfo.headers(),
        success: function (data) {

            if (data.code != 'SUCCESS' || !data.result) {
                return;
            }

            $('#avatar').attr('src', data.result.avater || 'imgs/avatar.png');
            $('#avatar').removeClass('hide');
            $('#inputNickname').val(data.result.nickname);

            $('input[name="sex"').removeAttr('checked');
            $('input[name="sex"][value="' + data.result.gender + '"').attr('checked', 'checked');
        },
        error: function (err) {

        },
        complete: function (data) {

        }


    });

}

// 初始化信息
$(document).ready(function () {

    if (!window.localStorage.sessionId) {
        return;
    }

    initUserInfo();

});


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

        if (!$('#inputNickname').val()) {
            weui.alert('请输入昵称', {
                className: 'dialog'
            });
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

        var sex = $('input[name|="sex"]:checked').val();
        var nickname = $('#inputNickname').val();


        $.ajax({

            url: API.modifyUserInfo.url(nickname, sex),
            method: API.modifyUserInfo.method,
            headers: API.modifyUserInfo.headers(),
            success: function (data) {

                if (data.code != 'SUCCESS') {
                    return;
                }

                weui.toast('修改成功', 1500);
                
            },
            error: function (err) {   
                weui.toast('修改失败', 1500);
            },
            complete: function (data) {

            }


        });

    });


});
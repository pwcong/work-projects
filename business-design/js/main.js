$(document).ready(function() {
  // 表单数据
  var formData = {
    selectedCount: 0,
    needCount: 0,
    maxCount: 0,
    selectedImgs: [],
    name: '',
    phone: '',
    taobao: '',
    qq: '',
    message: ''
  };

  function showToast(text, timeout) {
    var tip = $('<div class="toast"></div>').appendTo($(document.body));
    var tipWrapper = $('<div class="toast-wrapper"></div>').appendTo(tip);
    tipWrapper.html(text);

    setTimeout(function() {
      tip.remove();
    }, timeout || 1000);
  }

  // 步骤-选择尺寸
  function handleToStep1() {
    $('.step').hide();
    $('#step1').show();

    $('.toolbar button').hide();
    $('#btnSelectPhotos').show();
    $('#btnSubmitOrder').show();
  }

  // 步骤-选择相片
  function handleToStep2() {
    $('.step').hide();
    $('#step2').show();

    $('.toolbar button').hide();
    $('#btnBackTo1').show();
    $('#btnNextTo4').show();
  }

  // 步骤-提交订单
  function handleToStep3() {
    $('.step').hide();
    $('#step3').show();

    $('.toolbar button').hide();
    $('#btnBackTo2').show();
    $('#btnSubmitOrder').show();
  }

  // 提交订单(此处获取所有选择的数据并提交)
  function handleToStep4() {
    // TODO
  }

  // 底部功能按钮事件
  $('.toolbar button').click(function(e) {
    var _step = $(this).attr('data-step');

    var step = parseInt(_step);

    if (step == 1) {
      handleToStep1();
    } else if (step == 2) {
      if (!$('input[name=size]:checked').get(0)) {
        showToast('请选择印品尺寸');
      } else {
        handleToStep2();
      }
    } else if (step == 3) {
      if (formData.selectedImgs.length < formData.needCount) {
        showToast('请至少上传并选择' + formData.needCount + '张图片');
      } else if (formData.selectedImgs.length > formData.maxCount) {
        showToast('最多选择' + formData.maxCount + '张图片');
      } else {
        handleToStep3();
      }
    } else if (step == 4) {
      handleToStep4();
    }
  });

  // 开始上传图片（此处模拟上传）
  function startUploadImg(file) {
    var reader = new FileReader();
    reader.onload = function(e) {
      // <li class="img-ing">
      //   <div class="preview" style="background-image: url(imgs/test.jpg)">
      //     <span class="btn-remove">×</span>
      //     <div class="process"></div>
      //   </div>
      // </li>
      var ingImg = $('<li class="img-ing"></li>').appendTo($('.imgs-ing'));
      var preview = $('<div class="preview"></div>').appendTo(ingImg);
      preview.css('background-image', 'url(' + e.target.result + ')');

      var btnRemove = $('<span class="btn-remove">×</span>').appendTo(preview);

      var processNode = $('<div class="process"></div>').appendTo(preview);

      // Timer模拟上传逻辑
      var process = 0;
      var timer = setInterval(function() {
        if (process >= 100) {
          clearInterval(timer);
          addNewUploadedImg(file);
          ingImg.remove();
        }
        process++;
        processNode.css('width', process + '%');
      }, 50);

      btnRemove.click(function() {
        clearInterval(timer);
        ingImg.remove();
      });

      // 本地接口模拟上传逻辑
      // var uploadForm = new FormData();
      // uploadForm.set('file', file);
      // var xhr = new XMLHttpRequest();
      // var isXHRCancel = false;
      // xhr.open('POST', 'http://127.0.0.1:7001/api/attachment/upload', true);
      // xhr.onload = function() {
      //   if (xhr.readyState == 4 && xhr.status == 200) {
      //     if (!isXHRCancel) {
      //       addNewUploadedImg(file);
      //     }
      //     ingImg.remove();
      //   }
      // };
      // xhr.onprogress = function(e) {
      //   processNode.css('width', Math.round((e.loaded / e.total) * 100) + '%');
      // };
      // xhr.send(uploadForm);
      // btnRemove.click(function() {
      //   isXHRCancel = true;
      //   ingImg.remove();
      // });
    };

    reader.readAsDataURL(file);
  }

  // 上传完成
  function addNewUploadedImg(file) {
    var reader = new FileReader();
    reader.onload = function(e) {
      // <li class="img">
      //   <label>
      //     <input name="img" type="checkbox" checked class="hidden">
      //     <div class="preview" style="background-image: url(imgs/test.jpg)"></div>
      //   </label>
      // </li>

      var li = $('<li class="img"></li>').appendTo($('.imgs'));
      var label = $('<label></label>').appendTo(li);

      $('<input name="img" type="checkbox" class="hidden">').appendTo(label);
      var preview = $('<div class="preview"></div>').appendTo(label);

      preview.css('background-image', 'url(' + e.target.result + ')');
    };
    reader.readAsDataURL(file);
  }

  // 上传图片按钮事件
  $('#inputFiles').change(function(e) {
    var files = $(this).get(0).files || [];

    $.each(files, function(index, file) {
      startUploadImg(file);
    });
  });

  // 获取图片选择状态
  function updateCount() {
    var selectedCount = 0;
    var selectedImgs = $('input[name=img]:checked');
    selectedCount = selectedImgs.length;
    $('#selectedCount').html(selectedCount);

    var needCount = 0;
    var maxCount = 0;
    var sizeInput = $('input[name=size]:checked');
    needCount = parseInt(sizeInput.attr('data-need'));
    maxCount = parseInt(sizeInput.attr('data-max'));
    $('#needCount').html(needCount);
    $('#maxCount').html(maxCount);

    formData.selectedImgs = selectedImgs;
    formData.selectedCount = selectedCount;
    formData.maxCount = maxCount;
    formData.needCount = needCount;
  }

  // 监听尺寸选择
  $('.size').click(function() {
    updateCount();
  });
  // 监听图片选择
  $('.imgs').click(function() {
    updateCount();
  });
});

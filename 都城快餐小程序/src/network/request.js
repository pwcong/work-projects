import wepy from 'wepy';

export const RELAUNCH_CODES = [
  'LOGIN_REQUIRED',
  'LOGIN_TOKEN_INVALID',
  'LOGIN_SESSION_EXPIRED',
  'LOGIN_USER_NOT_EXISTS',
  'LOGIN_USER_SUSPENDED'
];

export default function request(url, method, data, header, handleCode = true) {
  return new Promise((resolve, reject) => {
    wepy.request({
      url,
      method,
      data,
      header,
      success(res) {
        if (res.statusCode == 200) {
          // 判断是否需要重新登录
          if (res && res.data && handleCode && RELAUNCH_CODES.indexOf(res.data.code) > -1) {
            const msg = res.data.message;

            wepy.removeStorageSync('user');
            wepy.removeStorageSync('token');
            wepy.removeStorageSync('secret');
            wepy.removeStorageSync('time_step');
            wepy.removeStorageSync('branch');

            wepy.reLaunch({
              url: `../index?msg=${msg}`
            });
            
            return;
          }

          if (res.data && res.data.success) {
            resolve(res.data);
          } else {
            reject(res.data.message);
          }
        } else {
          reject(res.errMsg);
        }
      },
      fail(err) {
        // reject(err.errMsg);
        reject('发送请求失败，请稍后重试');
      }
    });
  });
}

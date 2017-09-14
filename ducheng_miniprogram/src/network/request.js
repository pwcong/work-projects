import wepy from 'wepy'

export default function request(url, method, data, header) {

  return new Promise((resolve, reject) => {

    wepy.request({

      url,
      method,
      data,
      header,
      success(res) {

        if(res.statusCode === 200){
          if(res.data && res.data.success){
            resolve(res.data);
          }else{
            reject(res.data.message);
          }
        }else{
          reject(res.errMsg);
        }
      },
      fail(err) {
        reject(err.errMsg);
      }

    });

  });

}

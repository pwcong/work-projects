import request from '../request';

import api from './api';

function uploadRunData(sessionId, code, encryptedData, iv) {

  return request(
    api.sport.uploadRunData.url(),
    api.sport.uploadRunData.method,
    api.sport.uploadRunData.data(code, encryptedData, iv),
    api.sport.uploadRunData.header(sessionId)
  );

}

function signIn(sessionId, localeId, deviceId, deviceMac) {

  return request(
    api.sport.signIn.url(),
    api.sport.signIn.method,
    api.sport.signIn.data(localeId, deviceId, deviceMac),
    api.sport.signIn.header(sessionId)
  );

}

function signOut(sessionId, signId, localeId, deviceId, deviceMac) {

  return request(
    api.sport.signOut.url(),
    api.sport.signOut.method,
    api.sport.signOut.data(signId, localeId, deviceId, deviceMac),
    api.sport.signOut.header(sessionId)
  );

}

function lastSignIn(sessionId) {

  return request(
    api.sport.lastSignIn.url(),
    api.sport.lastSignIn.method,
    api.sport.lastSignIn.data(),
    api.sport.lastSignIn.header(sessionId)
  );

}


// 模拟上传数据
function uploadSportRecord(){

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve();

        }, 1000);

    });

}

export default {
  uploadRunData,
  signIn,
  signOut,
  lastSignIn,
  uploadSportRecord

}

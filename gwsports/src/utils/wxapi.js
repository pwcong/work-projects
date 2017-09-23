import wepy from 'wepy';

function getBluetoothAdapterState() {

  return new Promise((resolve, reject) => {

    wepy.getBluetoothAdapterState({

      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      }
    });
  });

}

function getBeacons() {

  return new Promise((resolve, reject) => {

    wepy.getBeacons({

      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      }
    });
  });

}

function startBeaconDiscovery(uuids) {

  return new Promise((resolve, reject) => {

    wepy.startBeaconDiscovery({
      uuids,
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      }
    });
  });

}

function openBluetoothAdapter() {

  return new Promise((resolve, reject) => {

    wepy.openBluetoothAdapter({
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      }
    });
  });

}

function login() {

  return new Promise((resolve, reject) => {

    wepy.login({
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      }
    });
  });

}

function getWeRunData() {

  return new Promise((resolve, reject) => {

    wepy.getWeRunData({
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      }
    });
  });

}

function getLocation() {

  return new Promise((resolve, reject) => {

    wepy.getLocation({
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      }
    });
  });

}

function getUserInfo(withCredentials = false, lang = 'zh_CN') {

  return new Promise((resolve, reject) => {

    wepy.getUserInfo({
      withCredentials,
      lang,
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      }
    });
  });

}

export default {

  openBluetoothAdapter,
  getBluetoothAdapterState,
  startBeaconDiscovery,
  getBeacons,
  login,
  getWeRunData,
  getLocation,
  getUserInfo

}

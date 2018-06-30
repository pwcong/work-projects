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

function startBeaconDiscovery(uuids, timeout = 5000) {

  return new Promise(async function (resolve, reject) {

    let devices = [];
    wepy.startBeaconDiscovery({
      uuids: uuids,
      success() {
        console.log("开始扫描设备...");
        wx.onBeaconUpdate(res => {
          //请注意，官方文档此处又有BUG，是res.beacons，不是beacons。
          if (res && res.beacons && res.beacons.length > 0) {
            devices = res.beacons;
            //此处最好检测rssi是否等于0，等于0的话信号强度等信息不准确。我是5秒内重复扫描排重。
          }
        });
      },
      fail(err) {
        reject(err);
      }
    });

    setTimeout(() => {
      wepy.stopBeaconDiscovery({
        success() {
          console.log("停止设备扫描！");
          console.log(devices);

          if (devices.length <= 0) {
            reject();
            return;
          }

          resolve(devices);

        },
        fail(err) {
          reject(err);
        }
      });
    }, timeout);

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

const API_BASE = 'http://www.ppfix.cn/gwsport';

const HEADER = {
  'Accept': 'application/json',
  'Content-Type': 'application/x-www-form-urlencoded'
}

export default {

  auth: {
    login: {
      url: () => API_BASE + '/api/wx/login',
      method: 'POST',
      data: (code, encryptedData, iv) => ({
        code,
        encryptedData,
        iv
      }),
      header: () => HEADER
    }
  },
  sport: {
    uploadRunData: {
      url: () => API_BASE + '/api/wx/weRunData/upload',
      method: 'POST',
      data: (code, encryptedData, iv) => ({
        code,
        encryptedData,
        iv
      }),
      header: sessionId => Object.assign({}, HEADER, {
        sessionId
      })
    },

    signIn: {
      url: () => API_BASE + '/api/user/signIn',
      method: 'POST',
      data: (localeId, deviceId, deviceMac) => ({
        localeId,
        deviceId,
        deviceMac
      }),
      header: sessionId => Object.assign({}, HEADER, {
        sessionId
      })
    },

    signOut: {
      url: () => API_BASE + '/api/user/signOut',
      method: 'POST',
      data: (signId, localeId, deviceId, deviceMac) => ({
        signId,
        localeId,
        deviceId,
        deviceMac
      }),
      header: sessionId => Object.assign({}, HEADER, {
        sessionId
      })
    },

    lastSignIn: {
      url: () => API_BASE + '/api/user/latest/signIn',
      method: 'GET',
      data: () => ({}),
      header: sessionId => Object.assign({}, HEADER, {
        sessionId
      })
    },

    getDayRecords: {
      url: () => API_BASE + '/api/user/record/month',
      method: 'GET',
      data: () => ({}),
      header: sessionId => Object.assign({}, HEADER, {
        sessionId
      })
    },

    dayRank: {
      url: () => API_BASE + '/api/rank/day',
      method: 'GET',
      data: (pageNo = 1, pageSize = 20) => ({
        pageNo,
        pageSize
      }),
      header: sessionId => Object.assign({}, HEADER, {
        sessionId
      })
    },



  }

}

const API_BASE = 'https://paymentcard.dcyz.com/api/v1';

const HEADER = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

export default {
  auth: {
    login: {
      url: () => API_BASE + '/auth/login',
      method: 'POST',
      data: (username, password) => ({
        username,
        password
      }),
      header: () => HEADER
    },
    status: {
      url: () => API_BASE + '/auth/status',
      method: 'GET',
      data: () => ({}),
      header: token =>
        Object.assign({}, HEADER, {
          token
        })
    },
    renew: {
      url: () => API_BASE + '/auth/renew',
      method: 'POST',
      data: () => ({}),
      header: token =>
        Object.assign({}, HEADER, {
          token
        })
    }
  },
  user: {
    getInfo: {
      url(userId) {
        if (userId) {
          return API_BASE + '/user/' + userId;
        }
        return API_BASE + '/user/self';
      },
      method: 'GET',
      data: () => ({}),
      header: token =>
        Object.assign({}, HEADER, {
          token
        })
    },
    getInfos: {
      url() {
        return API_BASE + '/users';
      },
      method: 'GET',
      data: (keyword, branch_id, company_id) => ({
        keyword,
        branch_id,
        company_id
      }),
      header: token =>
        Object.assign({}, HEADER, {
          token
        })
    },
    register: {
      url: () => API_BASE + '/user',
      method: 'POST',
      data: (
        username,
        password,
        user_type,
        nickname,
        balance,
        account_type,
        department,
        remark,
        company_id,
        branch_id
      ) => ({
        username,
        password,
        user_type,
        nickname,
        balance,
        account_type,
        department,
        remark,
        company_id,
        branch_id
      }),
      header: token =>
        Object.assign({}, HEADER, {
          token
        })
    },
    modifyInfo: {
      url(user_id) {
        if (user_id) {
          return API_BASE + '/user/' + user_id;
        }
        return API_BASE + '/user/self';
      },
      method: 'POST',
      data: (
        nickname,
        gender,
        identity_number,
        birthday,
        email_address,
        phone_number,
        department_remark,
        remark
      ) => ({
        nickname,
        gender,
        identity_number,
        birthday,
        email_address,
        phone_number,
        department_remark,
        remark
      }),
      header: token =>
        Object.assign({}, HEADER, {
          token
        })
    },
    modifyPassword: {
      url(user_id) {
        if (user_id) {
          return API_BASE + '/user/' + user_id + '/password';
        }
        return API_BASE + '/user/self/password';
      },
      method: 'POST',
      data: (old_password, new_password) => ({
        old_password,
        new_password
      }),
      header: token =>
        Object.assign({}, HEADER, {
          token
        })
    },
    freezeUsers: {
      url: () => API_BASE + '/users/suspend',
      method: 'POST',
      data: user_ids => ({
        user_ids
      }),
      header: token =>
        Object.assign({}, HEADER, {
          token
        })
    },
    releaseUsers: {
      url: () => API_BASE + '/users/suspend/undo',
      method: 'POST',
      data: user_ids => ({
        user_ids
      }),
      header: token =>
        Object.assign({}, HEADER, {
          token
        })
    },
    deleteUsers: {
      url: () => API_BASE + '/users/delete',
      method: 'POST',
      data: user_ids => ({
        user_ids
      }),
      header: token =>
        Object.assign({}, HEADER, {
          token
        })
    },
    giveawayList: {
      url: () => API_BASE + '/user/self/recent-giveaway',
      method: 'GET',
      data: (page = 1, limit = 20) => ({
        page,
        limit
      }),
      header: token =>
        Object.assign({}, HEADER, {
          token
        })
    }
  },
  trade: {
    checkout: {
      url: () => API_BASE + '/trade/checkout',
      method: 'POST',
      data: (amount, customer_code, verify_code, remark) => ({
        amount,
        customer_code,
        verify_code,
        remark
      }),
      header: token =>
        Object.assign({}, HEADER, {
          token
        })
    },
    notification: {
      url: verify_code => API_BASE + '/trade/order/notification/' + verify_code,
      method: 'GET',
      data: () => ({}),
      header: token =>
        Object.assign({}, HEADER, {
          token
        })
    },
    giveaway: {
      url: () => API_BASE + '/trade/giveaway/',
      method: 'POST',
      data: (username, amount) => ({
        username,
        amount
      }),
      header: token =>
        Object.assign({}, HEADER, {
          token
        })
    }
  },
  branch: {
    getInfo: {
      url: branch_id => API_BASE + '/branch/' + branch_id,
      method: 'GET',
      data: () => ({}),
      header: token =>
        Object.assign({}, HEADER, {
          token
        })
    },

    search: {
      url(keyword) {
        if (keyword) {
          return API_BASE + '/branches/' + keyword;
        }
        return API_BASE + '/branches';
      },
      method: 'GET',
      data: () => ({}),
      header: token =>
        Object.assign({}, HEADER, {
          token
        })
    },

    add: {
      url: () => API_BASE + '/branch',
      method: 'POST',
      data: (name, number) => ({
        name,
        number
      }),
      header: token =>
        Object.assign({}, HEADER, {
          token
        })
    }
  },
  stat: {
    cashierSelfTodayOrder: {
      url: () => API_BASE + '/stat/cashier/order/today',
      method: 'GET',
      data: (page = 1, limit = 20) => ({
        page,
        limit
      }),
      header: token =>
        Object.assign({}, HEADER, {
          token
        })
    },
    cashierSelfTodayStat: {
      url: () => API_BASE + '/stat/cashier/stat/today',
      method: 'GET',
      data: () => ({}),
      header: token =>
        Object.assign({}, HEADER, {
          token
        })
    },
    branchTodayStat: {
      url: branch_id => API_BASE + `/stat/branch/${branch_id}/stat/today`,
      method: 'GET',
      data: () => ({}),
      header: token =>
        Object.assign({}, HEADER, {
          token
        })
    },
    cashiersOrder: {
      url: () => API_BASE + `/stat/cashier/order`,
      method: 'GET',
      data: (cashier_ids, from_time, to_time, page = 1, limit = 20) => ({
        id: cashier_ids,
        from_time,
        to_time,
        page,
        limit
      }),
      header: token =>
        Object.assign({}, HEADER, {
          token
        })
    },
    cashiersStat: {
      url: () => API_BASE + `/stat/cashier/stat`,
      method: 'GET',
      data: (cashier_ids, from_time, to_time) => ({
        id: cashier_ids,
        from_time,
        to_time
      }),
      header: token =>
        Object.assign({}, HEADER, {
          token
        })
    },
    customerStat: {
      url: () => API_BASE + `/stat/customer/stat`,
      method: 'GET',
      data: (from_time, to_time) => ({
        from_time,
        to_time
      }),
      header: token =>
        Object.assign({}, HEADER, {
          token
        })
    },
    customerOrder: {
      url: () => API_BASE + `/stat/customer/order`,
      method: 'GET',
      data: (from_time, to_time, page = 1, limit = 20) => ({
        from_time,
        to_time,
        page,
        limit
      }),
      header: token =>
        Object.assign({}, HEADER, {
          token
        })
    }
  },
  system: {
    getSystemRunningState: {
      url: () => API_BASE + '/system/running',
      method: 'GET',
      data: () => ({}),
      header: token =>
        Object.assign({}, HEADER, {
          token
        })
    },
    getSystemTime: {
      url: () => API_BASE + '/system/time',
      method: 'GET',
      data: () => ({}),
      header: () => ({})
    }
  }
};

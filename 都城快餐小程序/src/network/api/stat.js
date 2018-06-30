import request from '../request';
import api from './api';

export function cashierSelfTodayOrder(token, page, limit) {

  return request(
    api.stat.cashierSelfTodayOrder.url(),
    api.stat.cashierSelfTodayOrder.method,
    api.stat.cashierSelfTodayOrder.data(page, limit),
    api.stat.cashierSelfTodayOrder.header(token)
  );

}

export function cashierSelfTodayStat(token) {

  return request(
    api.stat.cashierSelfTodayStat.url(),
    api.stat.cashierSelfTodayStat.method,
    api.stat.cashierSelfTodayStat.data(),
    api.stat.cashierSelfTodayStat.header(token)
  );

}

export function branchTodayStat(token, branch_id) {

  return request(
    api.stat.branchTodayStat.url(branch_id),
    api.stat.branchTodayStat.method,
    api.stat.branchTodayStat.data(),
    api.stat.branchTodayStat.header(token)
  );

}

export function cashiersOrder(token, cashier_ids, from_time, to_time, page, limit) {

  return request(
    api.stat.cashiersOrder.url(),
    api.stat.cashiersOrder.method,
    api.stat.cashiersOrder.data(cashier_ids, from_time, to_time, page, limit),
    api.stat.cashiersOrder.header(token)
  );

}
export function cashiersStat(token, cashier_ids, from_time, to_time) {

  return request(
    api.stat.cashiersStat.url(),
    api.stat.cashiersStat.method,
    api.stat.cashiersStat.data(cashier_ids, from_time, to_time),
    api.stat.cashiersStat.header(token)
  );

}

export function customerStat(token, from_time, to_time) {

  return request(
    api.stat.customerStat.url(),
    api.stat.customerStat.method,
    api.stat.customerStat.data(from_time, to_time),
    api.stat.customerStat.header(token)
  );

}


export function customerOrder(token, from_time, to_time, page, limit) {

  return request(
    api.stat.customerOrder.url(),
    api.stat.customerOrder.method,
    api.stat.customerOrder.data(from_time, to_time, page, limit),
    api.stat.customerOrder.header(token)
  );

}

import request from '../request';
import api from './api';

export function checkout(token, amount, customer_code, verify_code, remark) {

  return request(
    api.trade.checkout.url(),
    api.trade.checkout.method,
    api.trade.checkout.data(amount, customer_code, verify_code, remark),
    api.trade.checkout.header(token)
  );

}

export function notification(token, verify_code) {

  return request(
    api.trade.notification.url(verify_code),
    api.trade.notification.method,
    api.trade.notification.data(),
    api.trade.notification.header(token)
  );

}

import request from '../request';
import api from './api';

export function login(username, password) {

  return request(
    api.auth.login.url(),
    api.auth.login.method,
    api.auth.login.data(username, password),
    api.auth.login.header()
  );

}

export function status(token) {

  return request(
    api.auth.status.url(),
    api.auth.status.method,
    api.auth.status.data(),
    api.auth.status.header(token)
  );

}

export function renew(token) {

  return request(
    api.auth.renew.url(),
    api.auth.renew.method,
    api.auth.renew.data(),
    api.auth.renew.header(token)
  );

}



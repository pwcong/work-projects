import request from '../request';
import api from './api';

export function getInfo(token, branch_id) {

  return request(
    api.branch.getInfo.url(branch_id),
    api.branch.getInfo.method,
    api.branch.getInfo.data(),
    api.branch.getInfo.header(token)
  );

}

export function search(token, keyword) {

  return request(
    api.branch.search.url(keyword),
    api.branch.search.method,
    api.branch.search.data(),
    api.branch.search.header(token)
  );

}

export function add(token, name, number) {

  return request(
    api.branch.add.url(),
    api.branch.add.method,
    api.branch.add.data(name, number),
    api.branch.add.header(token)
  );

}

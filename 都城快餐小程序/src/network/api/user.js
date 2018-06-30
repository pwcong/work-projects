import request from '../request';
import api from './api';

export function getInfo(token, userId) {

  return request(
    api.user.getInfo.url(userId),
    api.user.getInfo.method,
    api.user.getInfo.data(),
    api.user.getInfo.header(token)
  );

}

export function getInfos(token, keyword, branch_id, company_id) {

  return request(
    api.user.getInfos.url(),
    api.user.getInfos.method,
    api.user.getInfos.data(keyword, branch_id, company_id),
    api.user.getInfos.header(token)
  );

}

export function register(token, username, password, user_type, nickname, balance, account_type, department, remark, company_id, branch_id) {

  return request(
    api.user.register.url(),
    api.user.register.method,
    api.user.register.data(username, password, user_type, nickname, balance, account_type, department, remark, company_id, branch_id),
    api.user.register.header(token)
  );

}

export function modifyInfo(token, user_id, nickname, gender, identity_number, birthday, email_address, phone_number, department_remark, remark) {

  return request(
    api.user.modifyInfo.url(user_id),
    api.user.modifyInfo.method,
    api.user.modifyInfo.data(nickname, gender, identity_number, birthday, email_address, phone_number, department_remark, remark),
    api.user.modifyInfo.header(token)
  );

}

export function modifyPassword(token, user_id, old_password, new_password) {

  return request(
    api.user.modifyPassword.url(user_id),
    api.user.modifyPassword.method,
    api.user.modifyPassword.data(old_password, new_password),
    api.user.modifyPassword.header(token)
  );

}

export function freezeUsers(token, user_ids) {

  return request(
    api.user.freezeUsers.url(),
    api.user.freezeUsers.method,
    api.user.freezeUsers.data(user_ids),
    api.user.freezeUsers.header(token)
  );

}

export function releaseUsers(token, user_ids) {

  return request(
    api.user.releaseUsers.url(),
    api.user.releaseUsers.method,
    api.user.releaseUsers.data(user_ids),
    api.user.releaseUsers.header(token)
  );

}

export function deleteUsers(token, user_ids) {

  return request(
    api.user.deleteUsers.url(),
    api.user.deleteUsers.method,
    api.user.deleteUsers.data(user_ids),
    api.user.deleteUsers.header(token)
  );

}

export function giveawayList(token, page, limit) {

  return request(
    api.user.giveawayList.url(),
    api.user.giveawayList.method,
    api.user.giveawayList.data(page, limit),
    api.user.giveawayList.header(token)
  );

}

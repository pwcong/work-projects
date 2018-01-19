import request from '../request';
import api from './api';

export function getSystemRunningState(token) {
  return request(
    api.system.getSystemRunningState.url(),
    api.system.getSystemRunningState.method,
    api.system.getSystemRunningState.data(),
    api.system.getSystemRunningState.header(token)
  );
}

export function getSystemTime() {
  return request(
    api.system.getSystemTime.url(),
    api.system.getSystemTime.method,
    api.system.getSystemTime.data(),
    api.system.getSystemTime.header()
  );
}

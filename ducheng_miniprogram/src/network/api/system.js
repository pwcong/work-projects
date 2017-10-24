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

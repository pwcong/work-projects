import request from '../request';

import api from './api';

function login(code, encryptedData, iv){

    return request(
        api.auth.login.url(),
        api.auth.login.method,
        api.auth.login.data(code, encryptedData, iv),
        api.auth.login.header()
    );


}

export default {
    login
}
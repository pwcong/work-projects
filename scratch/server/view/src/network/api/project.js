import request from '../request';

import api from './api';

function get(id) {

    return request(
        api.project.get.url(id),
        api.project.get.method,
        api.project.get.data(),
        api.project.get.header()
    );

}

function getList(pageNo, pageSize) {

    return request(
        api.project.getList.url(),
        api.project.getList.method,
        api.project.getList.data(pageNo, pageSize),
        api.project.getList.header()
    );

}

export default {
    get,
    getList
}
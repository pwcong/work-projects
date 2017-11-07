import axios from 'axios';

const HEADERS = {

}

export default function (url, method, data, headers) {

    return new Promise((resolve, reject) => {

        const opts = {
            url,
            method,
            data: method === 'POST' ? data : {},
            params: method === 'GET' ? data : {},
            headers: Object.assign({}, HEADERS, headers)
        };

        axios(opts).then(res => {

            if (res.status === 200 && res.data && res.data.code === 200) {
                resolve(res.data.result);
            } else {
                reject(res.data ? res.data.msg : '');
            }

        }).catch(err => {
            reject(err);
        });


    });


}
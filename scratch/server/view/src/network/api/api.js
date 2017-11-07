import consts from '../../consts';

const api = {

    project: {

        get: {
            url: (id) => consts.API_PREFIX + '/project/' + id,
            method: 'GET',
            data: () => ({}),
            header: () => ({})
        },
        getList: {
            url: () => consts.API_PREFIX + '/projects',
            method: 'GET',
            data: (pageNo = 1, pageSize = 20) => ({
                pageNo,
                pageSize
            }),
            header: () => ({})
        }

    }

};

export default api;
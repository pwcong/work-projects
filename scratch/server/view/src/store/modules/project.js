import types from '../types';
import TimeUtils from '../../utils/time';

import projectAPI from '../../network/api/project';

const PAGESIZE = 20;

const store = {

    state: {
        pageNo: 1,

        hasMore: true,
        loading: false,

        list: [
            // {
            //     "id": 4,
            //     "author": "",
            //     "title": "",
            //     "src": ""
            // }
        ]
    },
    getters: {
        timelines: (state) => {

            const res = [];
            const set = {}

            state.list.forEach(item => {

                const t = new Date(item.createdAt);
                const y = t.getFullYear();
                const m = t.getMonth() + 1;
                const d = t.getDate();

                if (!set[y + '']) {

                    set[y + ''] = {};

                    res.push({
                        size: 'large',
                        title: y + ''
                    });

                }

                res.push({
                    size: 'small',
                    date: TimeUtils.format(m) + '-' + TimeUtils.format(d),
                    title: item.title || 'Untitled',
                    author: item.author || 'Unknown',
                    id: item.id
                });

            });

            return res;

        }
    },
    mutations: {
        [types.PROJECT_MUTATION_PAGENO_PLUS]: (state, payload) => {
            state.pageNo++;
        },
        [types.PROJECT_MUTATION_PAGENO_RETURN]: (state, payload) => {
            state.pageNo = 1;
        },
        [types.PROJECT_MUTATION_APPENDLIST]: (state, payload) => {

            state.list = [
                ...state.list,
                ...payload.list
            ];

        },
        [types.PROJECT_MUTATION_CLEANLIST]: (state, payload) => {

            state.list = [];

        },
        [types.PROJECT_MUTATION_LOADING_START]: (state, payload) => {

            state.loading = true;

        },
        [types.PROJECT_MUTATION_LOADING_STOP]: (state, payload) => {

            state.loading = false;

        },

    },
    actions: {

        [types.PROJECT_ACTOPM_GETLIST]: ({
            dispatch,
            commit,
            state
        }, payload) => {

            return new Promise(async function (resolve, reject) {

                commit(types.PROJECT_MUTATION_LOADING_START);

                await new Promise(res => {
                    setTimeout(() => {
                        res()
                    }, 500);
                });

                projectAPI.getList(state.pageNo, PAGESIZE)

                    .then(data => {

                        if (data.list && data.list.length === PAGESIZE) {
                            state.hasMore = true;
                            commit(types.PROJECT_MUTATION_PAGENO_PLUS);
                        } else {
                            state.hasMore = false;
                        }

                        commit(types.PROJECT_MUTATION_APPENDLIST, {
                            list: data.list
                        });

                        commit(types.PROJECT_MUTATION_LOADING_STOP);
                        resolve(data);

                    }).catch(err => {
                        commit(types.PROJECT_MUTATION_LOADING_STOP);
                        reject(err);
                    });

            });

        },
        [types.PROJECT_ACTOPM_REFRESH]: ({
            dispatch,
            commit,
            state
        }, payload) => {

            commit(types.PROJECT_MUTATION_PAGENO_RETURN);
            commit(types.PROJECT_MUTATION_CLEANLIST);

            return dispatch(types.PROJECT_ACTOPM_GETLIST, payload);

        },

    }


}

export default store;
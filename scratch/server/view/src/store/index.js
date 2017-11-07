import Vue from 'vue';
import Vuex from 'vuex';

import projectModule from './modules/project';

Vue.use(Vuex);

const store = new Vuex.Store({

    modules: {

        project: projectModule

    }

});

export default store;
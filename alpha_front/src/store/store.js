import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export default Vuex.Store({
    state: {},
    getters,
    mutations,
    actions,
});

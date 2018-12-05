import Vue from 'vue';
import Vuex from 'vuex';

// eslint-disable-next-line import/no-unresolved
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

const user = JSON.parse(localStorage.getItem('user'));
const state = user
    ? { status: { loggedIn: true }, user }
    : { status: {}, user: null };

export const store = new Vuex.Store({
    state: { state },
    getters,
    mutations,
    actions,
});

export default store;

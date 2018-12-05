import farmerService from '../../services';
import router from '../../router';

const user = JSON.parse(localStorage.getItem('user'));

const actions = {
    login({ dispatch, commit }, { username, password }) {
        commit('loginRequest', { username });

        farmerService.login(username, password)
            .then(
                () => {
                    commit('loginSuccess', user);
                    router.push('/');
                },
                (error) => {
                    commit('loginFailure', error);
                    dispatch('alert/error', error, { root: true });
                },
            );
    },
};

const actionsFarmer = {
    actions,
};

export default actionsFarmer;

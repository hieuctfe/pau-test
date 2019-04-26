import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import 'vue-tel-input/dist/vue-tel-input.css';
const token = localStorage.getItem('token')
const state = {
    searchValue: '' ,
    token : token,
    isLoggedIn : token ? true : false,
    seller : null
};

const moduleStore = {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
}
const moduleName = 'Account'

export {
    moduleStore , moduleName
};

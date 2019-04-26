import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
Vue.use(Vuex)
const state = {
    breadcrumbs : [],
    base_url : process.env.BASE_URL,
    router : null,
    previousRouter : null
}
export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
});



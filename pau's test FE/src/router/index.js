import Vue from 'vue'
import store from '@/store'
import Router from 'vue-router'
import Error404 from '@/components/error-404'

Vue.use(Router)
Vue.component('router-link', Vue.options.components.RouterLink);
Vue.component('router-view', Vue.options.components.RouterView);
const router = new Router({
    routes: [
        {
            path: '*',
            name: 'Error404',
            component: Error404,
            meta: {
                title: '404'
            }
        },
    ],
    mode: 'history',
})

router.beforeEach(async function (to, from, next) {
    var isLoggedIn = store.getters['$_Account/isLoggedIn']
    store.commit('setRouter', to)
    store.commit('setPreviousRouter', from)
    if (to.matched.some(record => record.meta.requiresAuth) && to.meta.requiresAuth != false) {
        if (isLoggedIn) {
            var user = store.getters['$_Account/getUser']
            if (user == null) {
                try {
                    var info = await store.dispatch('$_Account/GET_USER_INFO', {})
                    let data = info.data
                    if (data) {
                        user = data
                        // check some condition here
                    } else {
                        next({name: 'Login'})
                        return;
                    }
                } catch (error) {
                    next(false)
                    return;
                }
            }
        } else {
            next({name: 'Login'})
            return
        }
    } else {
        if (isLoggedIn) {
            if (to.meta.failback == true) {
                next('/')
                return
            }
            var user = store.getters['$_Account/getUser']
            if (user == null) {
                try {
                    await store.dispatch('$_Account/GET_USER_INFO', {})
                } catch (error) {

                }
            }
        }
    }
    next()
})
export default router

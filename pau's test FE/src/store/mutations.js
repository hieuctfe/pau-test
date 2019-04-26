import app from '@/main.js'
export default {
    updateBreadcrumb( state , payload){
        state.breadcrumbs = payload ;
    },
    setLang (state, payload) {
        app.$i18n.locale = payload
        localStorage.setItem('lang' , payload)
        state.lang = payload;
        axios.defaults.headers.common['Content-Language'] = payload
    },
    setRouter(state, payload){
        state.router = payload
    },
    setPreviousRouter(state, payload){
        state.previousRouter = payload
    }
}




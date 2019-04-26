export default {
    getLang(state){
        return state.lang ;
    },
    baseUrl(state){
        return state.base_url
    },
    getRouter(state){
        return state.router
    },
    getPreviousRouter(state){
        return state.previousRouter
    }
}
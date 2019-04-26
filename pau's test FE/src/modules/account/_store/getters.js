export default {
    isLoggedIn(state){
        return state.isLoggedIn
    },
    getUser(state){
        return state.seller
    },
    getSellerToken( state ){
        return state.token
    },
    getBaseUrl(state){
        return state.base_url
    }
}

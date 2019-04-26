export default {
    LOGIN_SUCCESS(state , token){
        state.isLoggedIn = true
        state.token = token
        localStorage.setItem('token' , token )
        axios.defaults.headers.common['Authorization'] = "Bearer " + token
    },
    LOGOUT_SUCCESS(state ){
        state.isLoggedIn = false
        state.token = null
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
    },
    UPDATE_SELLER_INFO( state , payload){
        state.seller = payload
    }
}

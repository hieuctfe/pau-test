export default {
    REGISTER({commit}, userInfo) {
        return new Promise((reslove, reject) => {
            axios.post('/api/auth/register', userInfo).then((res) => {
                // let {status, data} = res.data
                // if (status) {
                //     commit('LOGIN_SUCCESS', data.token)
                // }
                reslove(res)
            }, (error) =>{
                reject(error)
            })
        })
    },
    LOGIN({commit}, {email, password}) {
        return new Promise((reslove, reject) => {
            axios.post('/api/auth/login', {email: email, password: password}).then((res) => {
                let {status, token} = res.data
                if (status) {
                    commit('LOGIN_SUCCESS', token)
                }
                reslove(res)
            })
        })
    },
    LOGOUT({commit}) {
        commit('LOGOUT_SUCCESS')
    },
    GET_USER_INFO({commit}) {
        console.log('goi moi info');
        return new Promise((resolve, reject) => {
            axios.get(`/api/auth/user`).then(res => {
                resolve(res)
                let data = res.data
                commit('UPDATE_SELLER_INFO', data)
            }, error => {
                commit('LOGOUT_SUCCESS')
                reject(error)
            })
        })
    },
    async GET_USER_QUESTION_REGISTER({commit}) {
        return await axios.get(`/api/auth/loadquestion`)
    }
}

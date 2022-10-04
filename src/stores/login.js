const Vuex = require('vuex');

const store = new Vuex.store({
    state: {
        user: null,
        token: null
    },
    mutations: {
        setUser(state, user){
            state.user = user;
        },
        setToken(state, token){
            state.token = token;
        }
    }
})

export default store
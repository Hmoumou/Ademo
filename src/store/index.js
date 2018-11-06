import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedState'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        userinfo:{
            username:'',
            avatar:'',
            desc:'',
            email:'',
            nickname:'',

        }
    },
    mutations:{
        CHANGE_USERINFO(state,userinfo){
            state.userinfo = userinfo
        }
    },
    actions:{},
    //他会在Vuex 初始化的时候逐个去执行里面的函数
    plugins:[createPersistedState({
        storage: {
            getItem: key => sessionStorage.getItem(key),
            // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
            setItem: (key, value) =>
            sessionStorage.setItem(key, value),
            removeItem: key => sessionStorage.removeItem(key),
          },
    })],

})

export default store

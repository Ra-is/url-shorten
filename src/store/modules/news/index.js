import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state(){
        return {
            apikey: "f2ed0c3b14cc4a46ad5f9c2ac6cd9c85",
            newsdata: [],
        }
    },
    mutations,
    actions,
    getters
}

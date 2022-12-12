import { createStore } from 'vuex';
import newModule from './modules/news/index.js'

const store = createStore({
    modules:{
        news: newModule
    }
})
export default store
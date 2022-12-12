export default {
    apikey(state){
        return state.apikey
    },
    newsdata(state){
        return state.newsdata
    },
    hasNews(state){
        return state.newsdata && state.newsdata.length > 0;
    }

    
}
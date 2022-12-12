export default {
    async getAllNews(context,payload){
        
        const apikey = context.getters.apikey
        const category = payload.category;
        // GET https://newsapi.org/v2/everything?q=tesla&from=2022-11-07&sortBy=publishedAt&apiKey=f2ed0c3b14cc4a46ad5f9c2ac6cd9c85
        const response = await fetch(
            `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apikey}`
          );
          const responseData = await response.json();

            if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
            }
            //console.log('news data')
           

           
             if(responseData.status == 'ok')
             {
                const newsdata = []
                
                 var counter = 1;
                for (const key in responseData.articles) {
                    const news = {
                        id: counter,
                        author:  responseData.articles[key].author ?? 'No Author',
                        content: responseData.articles[key].content,
                        description : responseData.articles[key].description,
                        title: responseData.articles[key].title,
                        publishedAt: responseData.articles[key].publishedAt,


                    }
                    counter++

                    newsdata.push(news);
                }
                
                context.commit('setNews', newsdata);
             }
             else {
                const error = new Error('Failed to fetch!');
                throw error;
             }
            

    }
}
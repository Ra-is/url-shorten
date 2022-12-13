<template>
    <div class="bg-black p-10">
        <div class="max-w-6xl m-auto h-48 flex flex-col justify-center items-center">
            
            <span class="text-white font-sans pb-2">Paste the URL to be shortened</span>
        <div class="flex flex-row  w-full p-3 px-10">
            <input type="text" class="bg-white border flex-1 focus:border-none focus:border-black" v-model="user_url">
            <button v-if="!showloading" class="bg-blue-500 text-white p-2" @click="shortenUrl">Shorten</button>
            <button type="button" v-if="showloading" class="flex flex-row p-2 text-white bg-green-500 ..." disabled>
                <svg class="bg-white animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                    <!-- ... -->
                </svg>
                Processing...
            </button>
        </div>
        

         <div v-if="!!my_shorten_url" class="flex flex-row items-center justify-center space-x-3">
            <input class="text-blue-300 bg-black text-center font-sans p-2 focus:outline-none" :value="my_shorten_url" ref="message"  readonly/>
            <button class="bg-green-500 text-white p-1 px-4 rounded-md" @click="copyToClipboard" >Copy</button>
         </div>

          <div v-if="!!has_error" class="flex flex-row items-center justify-center space-x-3">
            <span class="text-red-400 font-serif tracking-widest">{{has_error}}</span>
         </div>
        
          
        
        </div>
       
    </div>
</template>

<script>
export default {
    data(){
        return {
            user_url: null,
            my_shorten_url: null,
            has_error : null,
            showloading: false
        }
    },
methods:{
    copyToClipboard(){
        const element = this.$refs.message;
      element.select();
      element.setSelectionRange(0, 99999);
      document.execCommand('copy');
    },
 

     async shortenUrl() {
        this.has_error = null
        this.showloading = true
    const urlData = {
      long_url: this.user_url,
    };


     const token = import.meta.env.VITE_API_SHORTEN_TOKEN;
      console.log(token)
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "long_url": "https://dev.bitlyting.com/"
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
   
    };
    const response = await fetch(
      `https://api-ssl.bitly.com/v4/shorten`,
      requestOptions
    );

    // const responseData = await response.json();
    const responseData = await response.json();

    if (!response.ok) {
      // error ...
      this.has_error = responseData.message || 'Failed to send request.'
      console.log(responseData.message || 'Failed to send request.')
      this.showloading = false
    }
    else
    {
     this.my_shorten_url = responseData.link
     this.showloading = false
    }

    
  },
}
}
</script>
<template>
    <div class="bg-black p-10">
        <div class="max-w-6xl m-auto h-48 flex flex-col justify-center items-center">
            
            <span class="text-white font-sans pb-2">Paste the URL to be shortened</span>
        <div class="flex flex-row  w-full p-3 px-10">
            <input type="text" class="bg-white border flex-1 focus:border-none focus:border-black" v-model="user_url">
            <button class="bg-blue-500 text-white p-2" @click="shortenUrl">Shorten</button>
        </div>

         <div v-if="!!my_shorten_url" class="flex flex-row items-center justify-center space-x-3">
            <input class="text-white bg-black text-center font-sans p-2 focus:outline-none" :value="my_shorten_url" ref="message"  readonly/>
            <button class="bg-green-500 text-white p-1 px-4 rounded-md" @click="copyToClipboard" >Copy</button>
         </div>
        
          
        
        </div>
       
    </div>
</template>

<script>
export default {
    data(){
        return {
            user_url: null,
            my_shorten_url: null
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
    const urlData = {
      long_url: this.user_url,
    };

  const header = 'Bearer be0ea07d1650ad02da3473d3d720c98a53697725'

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer be0ea07d1650ad02da3473d3d720c98a53697725");
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
      console.log(responseData.message || 'Failed to send request.')
    }
    else
    {
     this.my_shorten_url = responseData.link
    }

    
  },
}
}
</script>
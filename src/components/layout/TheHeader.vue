<template>
    <div class="bg-black p-10">
        <div class="max-w-6xl m-auto h-48 flex flex-col justify-center items-center">
            
            <span class="text-white font-sans pb-2">Paste the URL to be shortened</span>
        <div class="flex flex-row  w-full p-3 px-10">
            <input type="text" class="bg-white border flex-1 focus:border-none focus:border-black" v-model="user_url">
            <button class="bg-blue-500 text-white p-2" @click="shortenUrl">Shorten</button>
        </div>

         <div class="flex flex-row items-center justify-center space-x-3">
            <input class="text-white bg-black text-center font-sans p-2 focus:outline-none" value="test.url.com" ref="message"  readonly/>
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
        }
    },
methods:{
    copyToClipboard(){
        const element = this.$refs.message;
      element.select();
      element.setSelectionRange(0, 99999);
      document.execCommand('copy');
    },
    shortenUrl()
    {
        alert(this.user_url)
        this.user_url = null
    }
}
}
</script>
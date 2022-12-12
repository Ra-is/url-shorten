<template>
       <div class="flex flex-col justify-between">

       <div class="">
      
        <div class="max-w-6xl m-auto h-48 flex flex-row justify-center items-center">
            <feature>
                <img src="../../assets/thumbsup.png"/>
                <template v-slot:header>
                    Easy
                </template>
                 <template #description>
                     Url Shortener is easy and fast effective way to shorten url for your long urls
                </template>
            </feature>
             <feature>
                <img src="../../assets/shortened.png"/>
                <template v-slot:header>
                    Shortened
                </template>
                 <template #description>
                     Any links can be shortener with our powerful algorithms
                </template>
            </feature>

             <feature>
                <img src="../../assets/secure.png"/>
                <template v-slot:header>
                    Secure
                </template>
                 <template #description>
                    With highh level of encryption. Your urls are always safe and secure with https
                </template>
            </feature>

        </div>

        <div class="max-w-6xl m-auto h-48 flex flex-row justify-center items-center mt-2">
            <feature>
                <img src="../../assets/statistics.png"/>
                <template v-slot:header>
                    Statistics
                </template>
                 <template #description>
                    You can see stats on how many users have used your shortened url
                </template>
            </feature>
             <feature>
                <img src="../../assets/reliable.png"/>
                <template v-slot:header>
                    Reliable
                </template>
                 <template #description>
                     We delete any links which is a potential threat to viruses
                </template>
            </feature>

             <feature>
                <img src="../../assets/devices.png"/>
                <template v-slot:header>
                    Devices
                </template>
                 <template #description>
                    Comapatible with smartphonesm tablets and desktops
                </template>
            </feature>

        </div>
       </div>
 
        <div>
            <the-footer></the-footer>
        </div>
        
       
        </div>
        

</template>

<script>
import Feature from "../UI/Feature.vue";
import TheFooter from './TheFooter.vue'
export default {
 components: {
    Feature,
    TheFooter
 }
}
</script>
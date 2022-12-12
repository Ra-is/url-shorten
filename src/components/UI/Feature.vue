<template>
    <div class="flex flex-col items-center justify-center">
        <div class="w-12">
            <slot>
                <img src="../../assets/thumbsup.png"/>
            </slot>
            
        </div>
        <span class="font-bold">
            <slot name="header">
                Easy
                </slot>
        </span>
        <span class="max-w-sm font-sans">
            <slot name="description">
               Url Shortener is easy and fast effective way to shorten url for your long urls
                </slot>
            
        </span>
    </div>
</template>

<script>
export {

}
</script>
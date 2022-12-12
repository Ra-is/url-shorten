<template>
<the-nav-bar></the-nav-bar>
<the-header></the-header>
<the-feature></the-feature>
</template>

<script>
import TheNavBar from './components/layout/TheNavBar.vue'
import TheHeader from './components/layout/TheHeader.vue'
import TheFeature from './components/layout/TheFeature.vue'
export default {
  components:{
    TheHeader,
    TheNavBar,
    TheFeature
  }
 
}
</script>

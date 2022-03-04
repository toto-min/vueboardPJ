<template>
  <div id="nav">
    <Header/>
    <Home/>
    <Footer/>
  </div>
</template>


<script>

import Header from "@/components/common/Header.vue";
import Footer from '@/components/common/Footer.vue';
import Home from '@/components/Home.vue'
export default {
  components:{
    Header,
    Footer,
    Home
  }
}
</script>
<style lang="scss">
@import '@/assets/css/reset/reset.scss';
@import '@/assets/css/common/common.scss';
</style>
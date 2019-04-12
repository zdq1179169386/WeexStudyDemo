<template>
  <div class="wrapper">
    <!-- <maintab-page></maintab-page> -->
    <img src="" >

  </div>
</template>

<script>
import MaintabPage from '@/components/page/MaintabPage'
import config from './config/Config'

export default {
  name: 'App',
  components: {
    MaintabPage,
  },
  data () {
    return {
  
    }
  },
  created(){
    config.getIonFontPath('../../');
  }
}
</script>

<style scoped>
  .wrapper {
    width: 750px;
    justify-content: center;
    align-items: center;
  }
  .iconfont {
    font-family: iconfont
  }
</style>

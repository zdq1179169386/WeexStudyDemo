<template>
  <div class="title" :style="{height: navBarH}">
    <wxc-minibar title="标题"
                   background-color="#009ff0"
                   text-color="#FFFFFF"
                   right-text="更多"
                   @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
                   @wxcMinibarRightButtonClicked="minibarRightButtonClick"></wxc-minibar>
  </div>
</template>

<script>
import { WxcMinibar } from 'weex-ui';
import {Config} from '../config/Config'

export default {
  components:{
    WxcMinibar
  },
  data() {
    return {
      navBarH: Config.navgationBarHeight
    }
  },
}
</script>

<style scoped>

.title{
} 

</style>

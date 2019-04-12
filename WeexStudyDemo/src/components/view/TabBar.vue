<template>
  <div :class="['wapper']">
    <div class="bar-item">
      <text class="iconfont">{{'\ue684'}}</text>
      <text>首页</text>
    </div>
  </div>
</template>

<script>

const iosIconFontPath = 'local:///font/iconfont.ttf';


import { WxcTabBar, Utils } from 'weex-ui';
import config from '../../config/Config'
var dom = weex.requireModule('dom')
export default {
  data(){
    return {

    }
  },
  components:{
    WxcTabBar
  },
  created(){
    // config.initIconFont();
    dom.addRule('fontFace',{
      'fontFamily' : 'zdiconfont',
      'src' : "url('local:///font/iconfont.ttf')"
    })
  }
  
}
</script>

<style scoped>
.wapper {
  background-color: lightgray
}
.iconfont {
  font-family: zdiconfont;
}
</style>

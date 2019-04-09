<template>
  <div class="containter" :style="{width: '750px', height: mainscreenheight}">
    <!-- 导航 -->
    <navgation-bar ></navgation-bar>
    <!-- tabbar -->

  </div>
</template>

<script>
import { Utils, WxcMinibar } from "weex-ui";
import { getRealScreenHeight } from "../config/Config";
import NavgationBar from "./NavigationBar.vue";

const dom = weex.requireModule("dom");
const modal = weex.requireModule("modal");

export default {
  components: {
    NavgationBar
  },
  data() {
    return {
      mainscreenheight: 0
    };
  },
  created() {
    this.mainscreenheight = getRealScreenHeight(Utils);
    console.log(this.mainscreenheight);
  }
};
</script>

<style scoped>
.containter {
  background-color: aqua;
}
</style>

<template>
  <div class="containter" :style="{width: '750px', height: mainscreenheight}">
    <!-- 导航 -->
    <navgation-bar></navgation-bar>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import { Utils, WxcMinibar, WxcTabBar } from "weex-ui";
import { getRealScreenHeight } from "../../config/Config";
import { Config } from "../../config/Config";
import NavgationBar from "../view/NavigationBar.vue";
import TabBar from '../view/TabBar.vue'

const dom = weex.requireModule("dom");
const modal = weex.requireModule("modal");

export default {
  components: {
    NavgationBar,TabBar
  },
  data() {
    return {
      mainscreenheight: 0,
      tabTitles: Config.tabTitles,
      tabStyles: Config.tabStyles
    };
  },
  created() {
    this.mainscreenheight = getRealScreenHeight(Utils);
    // this.mainscreenheight = Utils.env.getPageHeight();
    const { tabStyles } = this;
    const tabPageHeight = Utils.env.getPageHeight();
    this.contentStyle = { height: tabPageHeight };
  }
};
</script>

<style scoped>
.containter {
  background-color: white;
}
.item-container {
  width: 750px;
  background-color: #f2f3f4;
  align-items: center;
  justify-content: center;
}
</style>




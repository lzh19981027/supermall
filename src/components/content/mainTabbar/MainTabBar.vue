<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <!--在src中使用别名需要在前面加'~'-->
      <img slot="item-icon" src="~assets/img/tabbar/black/home_light.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/red/home_light.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/black/apps.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/red/apps.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/black/cart_light.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/red/cart_light.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/black/my_light.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/red/my_light.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>

import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>


</style>

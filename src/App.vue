<template>
  <div id="app">
    <router-view></router-view>
    <banner class="ban">
      <banner-item pah="/home">
        <img slot="tabBar-icon" src="@/assets/imag/banner/home.svg" alt="">
        <div slot="tabBar-text">首页</div>
      </banner-item>
      <banner-item pah="/kind">
        <img slot="tabBar-icon" src="@/assets/imag/banner/particulars.svg" alt="">
        <div slot="tabBar-text">分类</div>
      </banner-item>
      <banner-item pah="/cat" >
        <img slot="tabBar-icon" src="@/assets/imag/banner/shopcat.svg" alt="">
        <div slot="tabBar-text">购物车</div>
      </banner-item>
      <banner-item pah="/my">
        <img slot="tabBar-icon" src="@/assets/imag/banner/my.svg" alt="">
        <div slot="tabBar-text">我的</div>
      </banner-item>
    </banner>
  </div>
</template>


<script>
  import banner from "components/banner/banner";
  import bannerItem from "components/banner/bannerItem";

  export default {
    name: 'App',
    components: {
      banner,
      bannerItem
    },
  }
</script>

<style>
  .ban {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    padding-bottom: 8px;
    border-top: 1px solid #87939A;
    padding-top: 5px;
  }


</style>

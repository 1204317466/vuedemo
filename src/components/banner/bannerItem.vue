<template>
  <div class="mm" @click="tohere">
    <slot name="tabBar-icon"></slot>
    <slot name="tabBar-text"></slot>
  </div>
</template>

<script>
  export default {
    name: "bannerItem",
    props:{
      pah:String
    },
    data(){
      return {

      }
    },
    methods:{
      tohere(){
        this.$router.replace(this.pah)
      }
    },

  }
</script>

<style scoped>
  .mm {
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  img {
    width: 30px;
    height: 30px;
  }

</style>

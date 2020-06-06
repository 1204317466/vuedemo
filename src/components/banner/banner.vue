<template>
   <div class="banner">
     <slot></slot>
   </div>
</template>

<script>
  export default {
    name: "banner",

  }
</script>

<style scoped >
  .banner {
    display: flex;
    justify-content: center;
    align-content: center;
  }


</style>

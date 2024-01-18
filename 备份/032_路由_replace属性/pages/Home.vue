<template>
  <div class="home">
    <img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'HomeA'
  })
  import { onMounted, onUnmounted } from 'vue'
  onMounted(() => {
    console.log('Home mounted!')
  })

  onUnmounted(() => {
    console.log('Home unmounted!')
  })
</script>
  
<style scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>
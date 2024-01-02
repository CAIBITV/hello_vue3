<template>
  <div class="person">
  </div>
</template>

<script lang="ts" setup>
  // 宏定义
  defineOptions({
    name: 'Person'
  })
</script>

<style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin: 0 5px;
  }
  li {
    font-size: 20px;
  }
</style>
<template>
<div class="person">
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="add">点我加1</button>
</div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'PersonA'
  })

  import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
  let sum = ref(0)

  function add() {
    sum.value++
  }

  console.log('子-创建')
  onBeforeMount(() => {
    console.log('子-挂载之前')
  })
  onMounted(() => {
    console.log('子-挂载之后')
  })
  onBeforeUpdate(() => {
    console.log('子-更新之前')
  })
  onUpdated(() => {
    console.log('子-更新之后')
  })
  onBeforeUnmount(() => {
    console.log('子-卸载之前')
  })
  onUnmounted(() => {
    console.log('子-卸载之后')
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
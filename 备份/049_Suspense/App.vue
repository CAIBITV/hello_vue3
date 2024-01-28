<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspense>
        <Child/>
        <template #fallback>
          <h2>加载中...</h2>
        </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'App'
  })

  import Child from './Child.vue'
  import { Suspense } from 'vue'
</script>

<style>
  .app {
    background-color: #ddd;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
  }
</style>
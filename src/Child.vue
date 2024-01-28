<template>
  <div class="child">
    <h3>我是Child组件{{ x }}</h3>
    <h4>当前求和为：{{ sum }}</h4>
    <h4 v-highlight="sum">好开心</h4>
    <Hello/>
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'Child'
  })
  import { ref } from 'vue'
  let sum = ref(0)
</script>

<style>
  .child {
    background-color: skyblue;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
  }
</style>
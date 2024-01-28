<template>
  <div class="child">
    <h3>我是Child组件</h3>
    <h4>当前求和为：{{ sum }}</h4>
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'Child'
  })
  import { ref } from 'vue'
  import axios from 'axios'
  let sum = ref(0)

  let { data:{ content }} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
  console.log(content)
</script>

<style>
  .child {
    background-color: skyblue;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
  }
</style>
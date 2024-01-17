<template>
    <Person ref="ren"/>
    <button @click="showLog">点我打印内容</button>
</template>

<script lang="ts" setup>
  // JS或TS
  import Person from './components/Person.vue'
  defineOptions({
    name: 'App'
  })
  import { ref } from 'vue'

  let ren = ref()
  function showLog(){
    // 可以看到子组件通过defineExpose暴露的数据
    console.log(ren.value)
  }
</script>

<style>
</style>
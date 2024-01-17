<template>
    <Person />
</template>

<script lang="ts" setup>
  import Person from './components/Person.vue'
  defineOptions({
    name: 'App'
  })
  import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
  console.log('父-创建')
  onBeforeMount(() => {
    console.log('父-挂载之前')
  })
  onMounted(() => {
    console.log('父-挂载之后')
  })
  onBeforeUpdate(() => {
    console.log('父-更新之前')
  })
  onUpdated(() => {
    console.log('父-更新之后')
  })
  onBeforeUnmount(() => {
    console.log('父-卸载之前')
  })
  onUnmounted(() => {
    console.log('父-卸载之后')
  })
</script>

<style>
</style>
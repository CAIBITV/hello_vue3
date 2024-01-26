<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}, 放大十倍后：{{ bigSum }} </h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>
  
<script setup lang="ts">
  defineOptions({
      name: 'CountA'
  })
  import { ref, toRefs } from "vue"
  import { useCountStore } from '@/store/Count'
  import { storeToRefs } from 'pinia'
  // 以下两种方式都可以拿到state中的数据
  const countStore = useCountStore()
  /* console.log('countStore', countStore)
  console.log('countStore', countStore.sum)
  console.log('countStore', countStore.$state.sum) */
  // 数据
  let n = ref(1) // 用户选择的数字
  const { sum, bigSum, upperSchool } = storeToRefs(countStore)

  // console.log('!!!!', toRefs(countStore))
  // storeToRefs 只会关注 store 中的数据，不会对方法进行ref包裹
  // console.log('!!!!', storeToRefs(countStore))·

  // 方法
  function add(){
    countStore.increment(n.value) 
  }
  function minus(){
    countStore.sum -= n.value
  }
</script>
  
<style scoped>
  .count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  select,button {
    margin: 0 5px;
    height: 25px;
  }
</style>
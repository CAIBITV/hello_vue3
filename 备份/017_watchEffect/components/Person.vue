<template>
<div class="person">
  <h1>需求：水温达到60℃，或水位达到80cm，则联系服务器</h1>
    <h2 id="demo">水温：{{ temp }}</h2>
    <h2>水位：{{ height }}</h2>
    <button @click="changePrice">水温+10</button>
    <button @click="changeSum">水位+10</button>
</div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'Person'
  })
  import { ref, watch, watchEffect } from 'vue'

  // 数据
  const temp = ref(0)
  const height = ref(0)

  function changeSum() {
    height.value += 10
  }
  function changePrice() {
    temp.value += 10
  }

  // watch([temp, height], (newValue, oldValue) => {
  //   // const [newTemp,newHeight] = value
  //   if (newValue[0] >= 60 || newValue[1] >= 80) {
  //     console.log('水温或水位达到要求，联系服务器')
  //   }
  // })

  // 用watchEffect实现
  const stopWtach = watchEffect(()=>{
    // 室温达到50℃，或水位达到20cm，立刻联系服务器
    if(temp.value >= 50 || height.value >= 20){
      console.log(document.getElementById('demo')?.innerText)
      console.log('联系服务器')
    }
    // 水温达到100，或水位达到50，取消监视
    if(temp.value === 100 || height.value === 50){
      console.log('清理了')
      stopWtach()
    }
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
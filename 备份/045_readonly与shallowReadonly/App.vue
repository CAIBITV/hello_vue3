<template>
  <div class="app">
    <h2>当前sum1为：{{ sum1 }}</h2>
    <h2>当前sum2为：{{ sum2 }}</h2>
    <button @click="changesum1">点我sum1+1</button>
    <button @click="changesum2">点我sum2+1</button>
  </div>
</template>

<script setup lang="ts" name="App">
  import { ref, reactive, readonly, shallowReadonly } from 'vue'

  let sum1 = ref(0)
  let sum2 = readonly(sum1)

  let car1 = reactive({
		brand:'奔驰',
		options:{
			color:'红色',
			price:100
		}
	})
	let car2 = shallowReadonly(car1)

  function changesum1() {
    sum1.value++
  }

  function changesum2() {
    sum2.value++
  }

  function changeBrand2(){
		car2.brand = '宝马'
	}
	function changeColor2(){
		car2.options.color = '绿色'
	}
	function changePrice2(){
		car2.options.price += 10
	}
</script>

<style>
.app {
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
}

button {
  margin: 0 5px;
}
</style>
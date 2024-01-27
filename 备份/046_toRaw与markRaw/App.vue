<template>
  <div class="app">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="rawPerson.age++">修改年龄</button>
    <hr>
    <h2>{{ car2 }}</h2>
    <button @click="car2.price+=10">修改价格</button>
  </div>
</template>

<script setup lang="ts" name="App">
  import { ref, reactive, toRaw, markRaw } from 'vue'
  import mockjs from 'mockjs'

  let person = reactive({
    name: '张三',
    age: 18
  })

  /* let a = ref(10)
  let rawA = toRaw(a)
  console.log('响应式数据', a)
  console.log('原始数据', rawA) */

  // 用于获取一个响应式对象的原始对象
  let rawPerson = toRaw(person)
  /* console.log('响应式数据', person)
  console.log('原始数据', rawPerson) */

  let car = markRaw({ brand: '奔驰', price: 100 })

  let car2 = reactive(car)
  console.log(car)
  console.log(car2)
  
	let mockJs = markRaw(mockjs)
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
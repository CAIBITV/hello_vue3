<template>
  <div class="app">
    <h2>求和为：{{ sum }}</h2>
    <h2>名字为：{{ person.name }}</h2>
    <h2>年龄为：{{ person.age }}</h2>
	<h2>汽车为：{{ car }}</h2>
    <button @click="changeSum">sum+1</button>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
	<span>|</span>
	<button @click="changeBrand">修改品牌</button>
	<button @click="changeColor">修改颜色</button>
	<button @click="changeEngine">修改发动机</button>
	<h3>{{  }}</h3>
  </div>
</template>

<script setup lang="ts" name="App">
import {ref, shallowRef, reactive, shallowReactive, onUpdated, watchEffect, triggerRef} from 'vue'

/* onUpdated(() =>{
  console.log(hook)
}) */

let sum = shallowRef(0)
let person = shallowRef({
  name: 'John',
  age: 30
})

let car = shallowReactive({
  barnd:'奔驰',
  options:{
  	color:'红色',
  	engine:'V8'
  }
})


function changeSum() {
  sum.value++
}

function changeName() {
  person.value.name = 'Tom'
}

function changeAge() {
  person.value.age++
}

function changePerson() {
  person.value = {
    name: 'Jerry',
    age: 18
  }
}

function changeBrand(){
  car.barnd = '宝马'
}
function changeColor(){
  car.options.color = '紫色'
}
function changeEngine(){
  car.options.engine = 'V12'
}

const shallow = shallowRef({
  greet: 'Hello, world'
})

// 触发该副作用第一次应该会打印 "Hello, world"
watchEffect(() => {
  console.log(shallow.value.greet)
})

// 这次变更不应触发副作用，因为这个 ref 是浅层的
shallow.value.greet = 'Hello, universe'

// 打印 "Hello, universe"
triggerRef(shallow)
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
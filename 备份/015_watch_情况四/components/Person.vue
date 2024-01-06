<template>
<div class="person">
  <div class="person">
    <h1>情况四：监视【ref】或【reactive】定义的【对象类型】数据中的某个属性</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改整个车</button>
  </div>
</div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'Person'
  })
  import { ref, reactive, watch } from 'vue'

  let person = reactive({
    name:'张三',
    age:18,
    car:{
      c1:'奔驰',
      c2:'宝马'
    }
  })

  function changeName() {
    person.name += '~'
  }
  function changeAge() {
    person.age += 1
  }
  function changeC1() {
    person.car.c1 = '奥迪'
  }
  function changeC2() {
    person.car.c2 = '大众'
  }
  function changeCar() {
    person.car = {
      c1:'吉利',
      c2:'布加迪'
    }
  }
  console.log(person.car)
  // 监视，情况四：监视响应式对象中的某个属性，且该属性是基本类型的，要写成函数式
  watch(() => { return person.name }, (newVal, oldVal) => {
    console.log('person变化了：', newVal, oldVal)
  })

  // 监听car这个响应式对象
  // 直接监听对象类型的属性,这个car也是响应式对象，当我们改变采用changeCar方法时，就不会触发watch，因为car的地址值发生变化了
  // watch(person.car, (newVal, oldVal) => {
  //   console.log('person.car变化了：', newVal, oldVal)
  // })

  // 监听函数返回值的变化，即地址是否发生改变，changeCar时地址变化，再加上{ deep: true }，就可以监听到changeC1、changeC2的变化了
  // 官方解释：当使用 getter 函数作为源时，回调只在此函数的返回值变化时才会触发。如果你想让回调在深层级变更时也能触发，你需要使用 { deep: true } 强制侦听器进入深层级模式。在深层级模式时，如果回调函数由于深层级的变更而被触发，那么新值和旧值将是同一个对象。
  watch(() => person.car, (newVal, oldVal) => {
    console.log('person.car变化了：', newVal, oldVal)
  }, { deep: true })
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
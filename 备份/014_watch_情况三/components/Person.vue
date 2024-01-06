<template>
  <div class="person">
    <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改person</button>
    <hr>
    <h2>测试：{{ obj.a.b.c }}</h2>
    <button @click="test">修改obj.a.b.c</button>
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'Person'
  })
  import { reactive, watch } from 'vue'
  let person = reactive({ name: '张三', age: 18 })
  let obj = reactive({
    a: {
      b: {
        c: 666
      }
    }
  })

  // 方法
  function changeName() {
    person.name += '~'
  }
  function changeAge() {
    person.age += 1
  }
  function changePerson() {
    // reactive的局限性，这种方式其实没有真正替换 person，只是批量修改了属性（地址没变）
    person = Object.assign(person, { name: '李四', age: 20 })
  }
  function test() {
    obj.a.b.c = 999
  }

  // 监视：情况三：监视【reactive】定义的【对象类型】数据，且默认是开启深度监视的（无法关闭，隐式创建了深层监听）
  watch(person, (newValue, oldValue) => {
    console.log('person发生了改变', newValue, oldValue)
  })

  watch(obj, (newValue, oldValue) => {
    console.log('obj发生了改变', newValue, oldValue)
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
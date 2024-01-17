<template>
<div class="person">
  ???
</div>
</template>

<script setup lang="ts">
  import { type Person, type Persons } from '@/types'
  defineOptions({
    name: 'PersonA'
  })

  let person:Person = {id: '123', name: 'zhangsan', age: 18}
  let personList:Person[] = [
    {id: '123', name: 'zhangsan', age: 18},
    {id: '456', name: 'lisi', age: 20},
    {id: '789', name: 'wangwu', age: 22}
  ]
  let personList1:Array<Person> = [
    {id: '123', name: 'zhangsan', age: 18},
    {id: '456', name: 'lisi', age: 20},
    {id: '789', name: 'wangwu', age: 22}
  ]
  let personList2:Persons = [
    {id: '123', name: 'zhangsan', age: 18},
    {id: '456', name: 'lisi', age: 20},
    {id: '789', name: 'wangwu', age: 22}
  ]
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
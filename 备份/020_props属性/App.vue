<template>
    <Person />
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'
  import { type Persons } from '@/types'
  import Person from './components/Person.vue'
  defineOptions({
    name: 'App'
  })

  let persons = reactive<Persons>([
  {id:'e98219e12',name:'张三',age:18},
   {id:'e98219e13',name:'李四',age:19},
    {id:'e98219e14',name:'王五',age:20}
  ])
</script>

<style>
</style>
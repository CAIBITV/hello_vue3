<template>
<div class="person">
  <h2>{{ a }}</h2>
  <ul>
    <li v-for="p in list" :key="p.id">
      {{ p.name }} - {{ p.age }}
    </li>
  </ul>
</div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'PersonA'
  })
  import { withDefaults } from 'vue'
  import { type Persons } from '@/types'
  // 仅接收
  // defineProps(['a'])
  // 无法直接使用
  // console.log(a)
  // let props = defineProps(['a',  'list'])
  // console.log(props)

  // 接受+类型+必要性
  // let props = defineProps<{list?:Persons, a:string}>()

  // 接受+类型+默认值
  let props = withDefaults(defineProps<{list?:Persons, a?:string}>(), {
    list: () => [{id:'e98219e12',name:'张三',age:18}], a: '啦啦'
  })
  console.log(props)
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
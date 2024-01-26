<template>
    <div class="talk">
      <button @click="getLoveTalk">获取一句土味情话</button>
      <ul>
        <li v-for="talk in talkList" :key="talk.id">{{talk.title}}</li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
    defineOptions({
        name: 'LoveTalk'
    })
    // 数据
    import { useLoveTalkStore } from '@/store/LoveTalk'
    import { storeToRefs } from 'pinia'

    const loveTalkStore = useLoveTalkStore()
    const { talkList } = storeToRefs(loveTalkStore)

    // 方法
    function getLoveTalk(){
      loveTalkStore.getATalk()
    }
  </script>
  
  <style scoped>
    .talk {
      background-color: orange;
      padding: 10px;
      border-radius: 10px;
      box-shadow: 0 0 10px;
    }
  </style>
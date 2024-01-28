<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <input type="text" v-model="msg">
    <hr>
    <h2>{{ msg2 }}</h2>
    <input type="text" v-model="msg2">
  </div>
</template>

<script setup lang="ts" name="App">
  import { ref } from "vue";
  import useMsgRef from "@/hooks/useMsgRef";

  // 使用 Vue 提供的默认的 ref 定义响应式数据，数据一变，页面就更新
  let msg = ref("Hello Vue3");

  // 使用自定义的 useMsgRef 定义响应式数据，数据一变，页面就更新
  let { msg2 } = useMsgRef('Hello Vue3', 3000);
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
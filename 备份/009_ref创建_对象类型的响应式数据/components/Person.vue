<template>
  <div class="person">
    <h2>一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="game in games" :key="game.id">{{ game.name }}</li>
    </ul>
    <button @click="changePrice">修改汽车价格</button>
    <button @click="changeFirstGame">修改第一个游戏</button>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue'
  // 宏定义
  defineOptions({
    name: 'Person'
  })

  let car = ref({ brand: '宝马', price: 50 })
  let games = ref([
    { id: 'ahsgdyfa01', name: '英雄联盟' },
    { id: 'ahsgdyfa02', name: '王者荣耀' },
    { id: 'ahsgdyfa03', name: '原神' }
  ])
  let person = reactive({
    name: '张三',
    age: 18
  })
  console.log('car', car)
  console.log('person', person)

  function changePrice() {
    car.value.price += 10
  }
  function changeFirstGame() {
    games.value[0].name = '博得之门'
  }
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
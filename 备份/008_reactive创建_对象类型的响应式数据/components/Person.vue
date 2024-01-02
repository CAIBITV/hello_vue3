<template>
  <div class="person">
    <h2>一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="game in games" :key="game.id">{{ game.name }}</li>
    </ul>
    <h2>测试：{{ obj.a.b.c.d }}</h2>
    <button @click="changePrice">修改汽车价格</button>
    <button @click="changeFirstGame">修改第一个游戏</button>
    <button @click="changeObj">修改obj</button>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'
  // 宏定义
  defineOptions({
    name: 'Person'
  })

  let car = reactive({ brand: '宝马', price: 50 })
  let games = reactive([
    { id: 'ahsgdyfa01', name: '英雄联盟' },
    { id: 'ahsgdyfa02', name: '王者荣耀' },
    { id: 'ahsgdyfa03', name: '原神' }
  ])
  let obj = reactive({
    a: {
      b: {
        c: {
          d: 666
        }
      }
    }
  })

  function changePrice() {
    car.price += 10
  }
  function changeFirstGame() {
    games[0].name = '博得之门'
  }
  function changeObj() {
    obj.a.b.c.d = 999
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
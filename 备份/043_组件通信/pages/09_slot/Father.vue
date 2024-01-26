<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Game>
        <template #zuoyongyu="{ youxi }">
         <ul>
           <li v-for="item in youxi" :key="item.id">
             {{ item.name }}
           </li>
         </ul>
        </template>
      </Game>
      <Game>
        <template #zuoyongyu="{ youxi }">
          <ol>
            <li v-for="item in youxi" :key="item.id">
              {{ item.name }}
            </li>
          </ol>
        </template>
      </Game>
      <Game>
        <template #zuoyongyu="{ youxi }">
          <h4 v-for="item in youxi" :key="item.id">{{ item.name }}</h4>
        </template>
      </Game>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Game from './Game.vue'
</script>

<style scoped>
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
  .content {
    display: flex;
    justify-content: space-evenly;
  }
  img,video {
    width: 100%;
  }
  h2 {
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
  }
</style>
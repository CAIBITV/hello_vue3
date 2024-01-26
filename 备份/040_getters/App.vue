<template>
  <div>
    <Count/>
    <br>
    <LoveTalk/>
  </div>
</template>

<script lang="ts" setup>
  defineOptions({
      name: 'App'
  })
  import Count from '@/components/Count.vue'
  import LoveTalk from '@/components/LoveTalk.vue'
</script>
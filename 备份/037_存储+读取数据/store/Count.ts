import { defineStore } from 'pinia'

export const useCountStore = defineStore('Count', {
  // 真正存储数据的地方
  /* state(){
    return {
      sum:6
    }
  } */
  state: () => ({
    sum: 6
  })
})
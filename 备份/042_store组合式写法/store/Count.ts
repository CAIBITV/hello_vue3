import { defineStore } from 'pinia'

export const useCountStore = defineStore('Count', {
  // 真正存储数据的地方
  /* state(){
    return {
      sum:6
    }
  } */
  state: () => ({
    sum: 6,
    name: 'jack',
    school: 'B站大学'
  }),
  actions: {
    increment(value: number) {
        if ( this.sum < 10 ) {
          // this指向当前的store实例
          this.sum += value
        }
    },
    decrement(value: number) {
      this.sum -= value
    },
  },
  getters: {
    bigSum:state => state.sum * 10,
    upperSchool():string{
        return this.school.toUpperCase()
    }
  }
})
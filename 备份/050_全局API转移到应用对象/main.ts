import { createApp } from 'vue'
import App from './App.vue'
import Hello from './Hello.vue'

// 创建应用
const app = createApp(App)

app.component('Hello', Hello)

// 注意：下面的写法 ts 语法不知道具体的类型
// app.config.globalProperties.x = 99
declare module 'vue' {
    interface ComponentCustomProperties {
      x: number
    }
  }
// Vue.prototype.x = 99

// 全局指令
app.directive('highlight', (element, { value }) => {
  element.innerText += value
  element.style.color = 'green'
  element.style.backgroundColor = 'yellow'
})

// 挂载应用
app.mount('#app')

setTimeout(() => {
  app.unmount()
}, 3000)
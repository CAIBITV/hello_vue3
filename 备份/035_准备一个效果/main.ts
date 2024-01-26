// 引入createApp用于创建应用
import { createApp } from 'vue'
// 引入App根组件
import App from './App.vue'

// 创建应用
const app = createApp(App)
// 挂载
app.mount('#app')
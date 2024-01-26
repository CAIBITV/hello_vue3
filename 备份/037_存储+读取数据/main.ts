import { createApp } from 'vue'
import App from './App.vue'

// 1.引入 pinia
import { createPinia } from 'pinia'

const app = createApp(App)
// 2.创建 pinia 实例
const pinia = createPinia()
// 3.安装 pinia
app.use(pinia)
app.mount('#app')
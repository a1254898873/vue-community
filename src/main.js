import { createApp } from 'vue'
// 引入 router
import router from './router'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')

import { createApp } from 'vue'
import router from './router/index'
import vuex from './store/index'
import App from './App.vue'

createApp(App).use(router).use(vuex).mount('#app')

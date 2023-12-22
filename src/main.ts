import { createApp } from 'vue'
import 'normalize.css'
import './style/index.scss'
import router from './router'

// import App from './App.vue'
import App from './CSSApp.vue'
createApp(App)


.use(router)
.mount('#app')  
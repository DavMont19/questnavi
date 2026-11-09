import { createApp } from 'vue'
import App from './navigation.vue'  
import router from './Router'        
import './Tailwind/main.css'           


const app = createApp(App)

app.use(router) 
app.mount('#app')


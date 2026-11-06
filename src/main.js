import { createApp } from 'vue'
import App from './navigation.vue'  // Imports your custom root layout shell
import router from './Router'        // Imports your lowercase router folder
import './Tailwind/main.css'           // Imports your lowercase Tailwind styles

// We declare 'app' exactly ONCE here
const app = createApp(App)

app.use(router) 
app.mount('#app')


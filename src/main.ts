import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

if(!navigator.geolocation){
    throw new Error('Tu navegador requiere geolocaliacion');
}


createApp(App)
    .use(store)
    .use(router)
    .mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoianNhbnRhbXYiLCJhIjoiY2ttc2F1djJsMGZ5cDJ3cTVudDlycGpxMiJ9.6rIHHxV8UqO4rZOJz8n8uA';

if(!navigator.geolocation){
    throw new Error('Tu navegador requiere geolocaliacion');
}


createApp(App)
    .use(store)
    .use(router)
    .mount('#app')

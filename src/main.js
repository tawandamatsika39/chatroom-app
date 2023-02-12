import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { firebase_auth } from './firebase/config'

import './assets/main.css'

let app

firebase_auth.onAuthStateChanged(()=> {
    if (!app) {
        app = createApp(App)
        .use(router)
        .mount('#app')

    }
})
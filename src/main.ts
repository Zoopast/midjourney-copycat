import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)

import InlineSvg from 'vue-inline-svg';
app.component('inline-svg', InlineSvg);

app.use(router)

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Vue3DraggableResizable from 'vue3-draggable-resizable'
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'

import vClickOutsideUmd from 'click-outside-vue3'
import { getRouter } from './router'
const router = getRouter();


const app = createApp(App);

app.config.productionTip = false;

app.use(vClickOutsideUmd);
app.use(router);
app.use(Vue3DraggableResizable)
app.use(ElementPlus);
app.mount('#app');

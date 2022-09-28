import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Vue3DraggableResizable from 'vue3-draggable-resizable'
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'

import { Splitpanes } from 'splitpanes'
import { Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

const app = createApp(App);

app.use(Splitpanes)
app.use(Pane)
app.use(Vue3DraggableResizable)
app.use(ElementPlus);
app.mount('#app');

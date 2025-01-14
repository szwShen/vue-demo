 
import '@/styles/index.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import gloablComponent from './components/index';

 
import 'virtual:svg-icons-register'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn
})

app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.use(gloablComponent);

app.mount('#app')

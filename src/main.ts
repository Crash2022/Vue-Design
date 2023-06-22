import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from '@/shared/ui/'
import directives from '@/shared/directives/'

const app = createApp(App)

// глобальный импорт компонент
components.forEach((comp: any) => {
    app.component(comp.name, comp)
})

directives.forEach((dir: any) => {
    app.directive(dir.name, dir)
})

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')

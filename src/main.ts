import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import components from '@/shared/ui/'
// import directives from '@/shared/directives/'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart, faHand, faAddressBook, faCreditCard, faLemon, faHourglass } from '@fortawesome/free-regular-svg-icons'
// @ts-ignore
library.add([faHeart, faHand, faAddressBook, faCreditCard, faLemon, faHourglass])

// const app = createApp(App)

// глобальный импорт компонент
// components.forEach((comp: any) => {
//     app.component(comp.name, comp)
// })
//
// directives.forEach((dir: any) => {
//     app.directive(dir.name, dir)
// })

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(store)
    .use(router)
    .mount('#app')

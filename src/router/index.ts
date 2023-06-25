import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import TypographyPage from "@/pages/TypographyPage.vue"
import ButtonsPage from "@/pages/ButtonsPage.vue"
import InputsPage from '@/pages/InputsPage.vue'
import CheckboxPage from "@/pages/CheckboxPage.vue"
import RadioButtonsPage from "@/pages/RadioButtonsPage.vue"
import TabsPage from "@/pages/TabsPage.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/typography',
    component: TypographyPage
  },
  {
    path: '/buttons',
    component: ButtonsPage
  },
  {
    path: '/inputs',
    component: InputsPage
  },
  {
    path: '/checkbox',
    component: CheckboxPage
  },
  {
    path: '/radiobuttons',
    component: RadioButtonsPage
  },
  {
    path: '/tabs',
    component: TabsPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

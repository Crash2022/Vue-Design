import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import TypographyPage from "@/pages/TypographyPage.vue"
import ButtonsPage from "@/pages/ButtonsPage.vue"
import InputsPage from '@/pages/InputsPage.vue'
import CheckboxPage from "@/pages/CheckboxPage.vue"
import RadioButtonsPage from "@/pages/RadioButtonsPage.vue"
import TabsPage from "@/pages/TabsPage.vue"
import ProgressBarPage from '@/pages/ProgressBarPage.vue'
import TablePage from '@/pages/TablePage.vue'

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
    path: '/radio-buttons',
    component: RadioButtonsPage
  },
  {
    path: '/tabs',
    component: TabsPage
  },
  {
    path: '/progress',
    component: ProgressBarPage
  },
  {
    path: '/table',
    component: TablePage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

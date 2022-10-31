import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/one-contact/:id',
      name: 'one-contact',
      component: () => import('../views/OneContactView.vue')
    },
    {
      path: '/contact-setting',
      name: 'contact-setting',
      component: () => import('@/views/AddEditContact.vue')
    },
  ]
})
export default router

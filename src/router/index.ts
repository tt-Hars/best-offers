import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home/Home.vue'),
        children: [
          {
            path: '',
            name: 'Dashboard',
            component: () => import('@/views/Dashboard/Dashboard.vue')
          },
          {
            path: 'search',
            name: 'Search',
            component: () => import('@/views/SearchList/SearchList.vue'),
            props: true
          }
        ]
      },
      {
        path: 'journey/:id',
        name: 'Journey',
        component: () => import('@/views/Journey/Journey.vue'),
        props: true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  if (from.name === undefined && to.name === 'Search') return { name: 'Dashboard' }
  if (from.name === undefined && to.name === 'Journey') return { name: 'Dashboard' }
})

export default router

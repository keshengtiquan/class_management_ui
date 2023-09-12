import { type RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

const Layouts = () => import('@/layouts/index.vue')

const route:RouteRecordRaw[] = [
  {
    path: '/',
    component: Layouts,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: '首页',
        },
      },
    ],
  },
  {
    path: '/homework',
    component: Layouts,
    redirect: '/completion',
    children: [
      {
        path: '/homework/completion',
        component: () => import('@/views/homework/index.vue'),
        name: 'Completion',
        meta: {
          title: '作业完成情况'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: route
})

export default router
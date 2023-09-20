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
    path: '/photos',
    component: Layouts,
    children: [
      {
        path: '/photos/index',
        component: () => import('@/views/photos/index.vue'),
        name: 'Photos',
        meta: {
          title: '照片'
        }
      },
    ]
  },
  {
    path: '/poetry',
    component: Layouts,
    children: [
      {
        path: '/poetry/index',
        component: () => import('@/views/poetry/index.vue'),
        name: 'Poetry',
        meta: {
          title: '诗词'
        }
      },
    ]
  },
  {
    path: '/homework',
    component: Layouts,
    children: [
      {
        path: '/homework/index',
        component: () => import('@/views/homework/index.vue'),
        name: 'Homework',
        meta: {
          title: '优秀作业'
        }
      },
    ]
  },
  {
    path: '/composition',
    component: Layouts,
    children: [
      {
        path: '/composition/index',
        component: () => import('@/views/composition/index.vue'),
        name: 'Composition',
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: route
})

export default router
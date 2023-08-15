import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import { getCurrentUser } from 'vuefire'

import MainLayout from '@/layouts/main.vue'
import GroupLayout from '@/layouts/group.vue'
import AccountLayout from '@/layouts/account.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/groups/:id',
    component: GroupLayout,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '',
        redirect: { name: 'group-next-event' },
      },
      {
        name: 'group-next-event',
        path: 'next-event',
        component: () => import('@/pages/groups/_id/NextEvent.vue'),
      },
      {
        path: 'events',
        component: () => import('@/pages/groups/_id/Events.vue'),
      },
      {
        path: 'members',
        component: () => import('@/pages/groups/_id/Members.vue'),
      },
      {
        path: 'chat',
        component: () => import('@/pages/groups/_id/Chat.vue'),
      },
    ],
  },
  {
    name: 'event-read',
    path: '/events/:id',
    component: () => import('@/pages/events/_id/Read.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: 'event-edit',
    path: '/events/:id/edit',
    component: () => import('@/pages/events/_id/Edit.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/account',
    component: AccountLayout,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: 'me',
        component: () => import('@/pages/account/Me.vue'),
      },
      {
        path: '',
        redirect: 'me',
      },
    ],
  },
  { path: '/login', component: () => import('@/pages/Login.vue') },
  {
    path: '/',
    component: MainLayout,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '',
        redirect: '/agenda',
      },
      {
        path: 'agenda',
        component: () => import('@/pages/main/Agenda.vue'),
      },
      {
        path: 'discover',
        component: () => import('@/pages/main/Discover.vue'),
      },
      {
        path: 'my-groups',
        component: () => import('@/pages/main/MyGroups.vue'),
      },
      {
        path: 'messages',
        component: () => import('@/pages/main/Messages.vue'),
      },
      {
        path: 'new-event',
        component: () => import('@/pages/main/CreateEvent.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to) => {
  // routes with `meta: { requiresAuth: true }` will check for the users, others won't
  if (to.meta.requiresAuth) {
    const currentUser = await getCurrentUser()
    // if the user is not logged in, redirect to the login page
    if (!currentUser) {
      return {
        path: '/login',
        query: {
          // we keep the current path in the query so we can redirect to it after login
          // with `router.push(route.query.redirect || '/')`
          redirect: to.fullPath,
        },
      }
    }
  }
})

// router.beforeEach((to, _, next) => {
//   if (!['login', 'forgotten-password'].includes(to.name) && !store.getters.isAuthenticated) {
//     next({ name: 'login' })
//   } else {
//     next()
//   }
// })

export default router

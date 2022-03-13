import {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      {path: '', redirect: {name: 'appSystem', query: {'operatingSystem': 'home'}}},
      {path: 'index', name: 'appIndex', component: () => import('pages/AppLayout/Index.vue'),},
      {path: 'system', name: 'appSystem', component: () => import('pages/AppLayout/System.vue'),},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;

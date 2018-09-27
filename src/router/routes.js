
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/create/:escrow_id', component: () => import('pages/AdvancedEscrowPage.vue') },
      {
        path: '/advanced',
        component: () => import('layouts/MyLayout.vue'),
        children: [
          { path: '', component: () => import('pages/Search.vue') },
          { path: ':escrow_id', component: () => import('pages/AdvancedEscrowPage.vue') }
        ]
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

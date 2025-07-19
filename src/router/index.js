import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/Home.vue') },
  { path: '/about', name: 'About', component: () => import('../views/About.vue') },
  { path: '/cart', name: 'Cart', component: () => import('../views/Cart.vue') },
  {
    path: '/change-password',
    name: 'ChangePassword',
    component: () => import('../views/ChangePassword.vue'),
  },
  { path: '/contact', name: 'Contact', component: () => import('../views/Contact.vue') },
  { path: '/login', name: 'Login', component: () => import('../views/Login.vue') },
  { path: '/news', name: 'News', component: () => import('../views/News.vue') },
  { path: '/orders', name: 'Orders', component: () => import('../views/Orders.vue') },
  { path: '/products', name: 'Products', component: () => import('../views/Products.vue') },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: () => import('../views/ProductDetail.vue'),
  },
  { path: '/register', name: 'Register', component: () => import('../views/Register.vue') },
  {
    path: '/admin/products',
    name: 'ManageProduct',
    component: () => import('../views/admin/ManageProduct.vue'),
  },
  {
    path: '/admin/categories',
    name: 'ManageCategories',
    component: () => import('../views/admin/ManageCategories.vue'),
  },
  {
    path: '/admin/orders',
    name: 'ManageOrders',
    component: () => import('../views/admin/ManageOrders.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

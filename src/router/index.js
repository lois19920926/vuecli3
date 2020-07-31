import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('../views/Index.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import('../views/Products.vue'),
      },
      { // 動態路由：在此以取得單一產品ID
        path: '/product/:id',
        name: 'Product',
        component: () => import('../views/Product.vue'),
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/Cart.vue'),
      },
      {
        path: '/order',
        name: 'Order',
        component: () => import('../views/Order.vue'),
      },
      {
        path: '/checkdone',
        name: 'Checkdone',
        component: () => import('../views/Checkdone.vue'),
      },
    ],
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/dashboard/Admin.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/dashboard/Products.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/dashboard/Coupons.vue'),
      },
      {
        path: 'order',
        component: () => import('../views/dashboard/Order.vue'),
      },
      {
        path: 'photos',
        component: () => import('../views/dashboard/Photos.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/detail-product/:id?",
    name: "detail-product",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/Product/DetailProduct.vue"
      ),
  },
  {
    path: '/wishlist',
    name: 'user-wishlist',
    component: () => 
      import(
        /* webpackChunkName: "about" */ "../pages/user/wishlist/index.vue"
      ),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

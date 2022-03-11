import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CartView from "../views/CartView.vue";
import DetailView from "../views/DetailView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: DetailView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

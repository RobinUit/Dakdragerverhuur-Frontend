import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/huurprijzen",
    name: "Huurprijzen",
    component: () => import("../views/Huurprijzen.vue"),
  },
  {
    path: "/reserveren",
    name: "Reserveren",
    component: () => import("../views/Reserveren.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;

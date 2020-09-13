import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AppHuurprijzen from "../views/Huurprijzen.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/huurprijzen",
    component: AppHuurprijzen,
    children: [
      {
        path: "",
        redirect: "dakkoffers",
      },
      {
        path: "dakkoffers",
        name: "Dakkoffers",
        component: () => import("../views/Dakkoffers.vue"),
      },
      {
        path: "fietsendragers",
        name: "Fietsendragers",
        component: () => import("../views/Fietsendragers.vue"),
      },
      {
        path: "dakdragers",
        name: "Dakdragers",
        component: () => import("../views/Dakdragers.vue"),
      },
    ],
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
  {
    path: "*",
    redirect: "/home",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;

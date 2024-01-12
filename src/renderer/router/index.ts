import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    alias: "/index",
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/prices",
    name: "prices",
    component: () => import("@/views/prices.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/contact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

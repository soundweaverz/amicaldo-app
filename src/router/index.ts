import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Users from "../views/Users.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Users",
    component: Users,
  },
  {
    path: "/crews",
    name: "Crews",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "crews" */ "../views/Crews.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

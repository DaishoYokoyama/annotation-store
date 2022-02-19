import { createRouter, createWebHistory } from "vue-router";
import { PageNames } from "@/models";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: PageNames.Login,
      component: () => import("@/pages/LoginPage.vue"),
    },
    {
      path: "/_",
      name: PageNames.Dashboard,
      component: () => import("@/pages/DashboardPage.vue"),
      children: [],
    },
    { path: "/", redirect: { name: PageNames.Login } },
  ],
});

export default router;

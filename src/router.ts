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
      path: "/dashboard",
      name: PageNames.Dashboard,
      component: () => import("@/pages/DashboardPage.vue"),
    },
    { path: "/", redirect: { name: PageNames.Login } },
  ],
});

export default router;

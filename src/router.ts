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
    { path: "/", redirect: { name: PageNames.Login } },
  ],
});

export default router;

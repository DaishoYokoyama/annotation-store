import { createRouter, createWebHistory } from "vue-router";
import { pageNames } from "@/models";

const HelloWorld = () => import("@/pages/HelloWorld.vue");

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/hello-world",
      name: pageNames.HelloWorld,
      component: HelloWorld,
    },
    { path: "/", redirect: { name: pageNames.HelloWorld } },
  ],
});

export default router;

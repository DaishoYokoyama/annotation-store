import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "@/router";
import App from "./App.vue";
import { authService } from "@/firebase";

authService.waitForUser((user) => {
  console.info(user);
});

createApp(App).use(router).use(createPinia()).mount("#app");

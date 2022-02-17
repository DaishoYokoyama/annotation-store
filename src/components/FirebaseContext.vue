<script setup lang="ts">
  import { authService } from "@/firebase";
  import { useProfileStore } from "@/stores/profile";

  const profileStore = useProfileStore();

  authService.waitForUser((user) => {
    profileStore.setUser(user);
  });
</script>

<template>
  <div class="firebase-context">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .firebase-context {
    width: 100vw;
    height: 100vh;
  }
</style>

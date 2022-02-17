<script setup lang="ts">
  import { authService } from "@/firebase";
  import { useNavigate } from "@/hooks/use-navigate";

  const navigate = useNavigate();

  const handleLogout = async () => {
    await authService.signOut();
    navigate.toLogin();
  };
</script>

<template>
  <div class="dashboard-page">
    <h1>Dashboard Page</h1>
    <button @click.stop="handleLogout">とりあえずログアウトボタン</button>
  </div>
</template>

<style lang="scss" scoped>
  .dashboard-page {
    width: 100vw;
    height: 100vh;
    background: $bg-color;
  }
</style>

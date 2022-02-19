<script setup lang="ts">
  import PageNavigation from "@/components/PageNavigation.vue";
</script>

<template>
  <div class="dashboard-page">
    <PageNavigation class="nav" />
    <div class="contents">
      <!-- <router-view /> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .dashboard-page {
    width: 100vw;
    height: 100vh;
    background: $bg-color;
    display: grid;
    grid-template-columns: auto, 1fr;

    .nav {
      grid-column: 1;
    }

    .contents {
      grid-column: 2;
      overflow: auto;
    }
  }
</style>

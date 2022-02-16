<script setup lang="ts">
  import { RouterView } from "vue-router";
</script>

<template>
  <div id="app">
    <RouterView v-slot="{ Component }">
      <Transition name="page-fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<style lang="scss">
  #app {
    width: 100vw;
    height: 100vh;

    color: $font-color;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>

<script setup lang="ts">
  import { RouterView } from "vue-router";
  import UiContext from "@/components/UiContext.vue";
  import FirebaseContext from "@/components/FirebaseContext.vue";
</script>

<template>
  <div id="app">
    <UiContext>
      <FirebaseContext>
        <RouterView v-slot="{ Component }">
          <Transition name="page-fade" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </FirebaseContext>
    </UiContext>
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

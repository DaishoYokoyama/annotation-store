<script setup lang="ts">
  import { computed, withDefaults } from "vue";
  type Props = {
    size?: number;
  };
  const props = withDefaults(defineProps<Props>(), { size: 10 });
  const style = computed(() => {
    const sizeStr = `${props.size}px`;
    return {
      width: sizeStr,
      height: sizeStr,
    };
  });
</script>

<template>
  <div class="spinner" :style="style">
    <div class="double-bounce1"></div>
    <div class="double-bounce2"></div>
  </div>
</template>

<style lang="scss" scoped>
  .spinner {
    width: rem(40);
    height: rem(40);
    position: relative;
    margin: rem(100) auto;
  }
  .double-bounce1,
  .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #ddd;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-animation: sk-bounce 2s infinite ease-in-out;
    animation: sk-bounce 2s infinite ease-in-out;
  }
  .double-bounce2 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }
  @-webkit-keyframes sk-bounce {
    0%,
    100% {
      -webkit-transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1);
    }
  }
  @keyframes sk-bounce {
    0%,
    100% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }
    50% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }
</style>

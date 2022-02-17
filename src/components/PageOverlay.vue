<template>
  <div class="page-overlay">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .page-overlay {
    z-index: 999;
    background: rgba(#000, 40%);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

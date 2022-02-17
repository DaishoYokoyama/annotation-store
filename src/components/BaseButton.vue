<template>
  <button class="base-button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
  .base-button {
    min-width: rem(200);
    height: rem(40);
    padding: 0 rem(24);
    background: $bg-color;
    border: 1px solid $border-color;
    border-radius: rem(5);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: rem(14);

    @include transition(background-color);

    &:hover {
      background: lighten($bg-color, 10%);
    }
  }
</style>

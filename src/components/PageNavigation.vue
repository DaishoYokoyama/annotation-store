<script setup lang="ts"></script>

<template>
  <nav class="page-navigation">
    <h1 class="caption">Project NGI</h1>
    <div class="nav-group">
      <h2 class="nav-group-label">マイデータ</h2>
      <div class="nav-group-item">データセット</div>
      <div class="nav-group-item">タスク</div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  .page-navigation {
    width: rem(180);
    padding: 0 rem(20);
    border-right: 1px solid $border-color;
  }

  .caption {
    font-size: $font-size-large;
    margin: rem(40) 0;
  }

  .nav-group {
    display: flex;
    flex-direction: column;
    gap: rem(8);
    &-label {
      font-size: $font-size-small;
      font-weight: bold;
    }

    &-item {
      font-size: $font-size-small;
      font-weight: 100;
      display: flex;
      align-items: center;
      height: rem(30);
      margin-left: rem(8);
    }
  }
</style>

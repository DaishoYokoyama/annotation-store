<script setup lang="ts">
  import { PageNames } from "@/models";
  import { authService } from "@/firebase";
  import { useNavigate } from "@/hooks/use-navigate";
  import LeftArrowIcon from "@/components/svg/LeftArrowIcon.vue";

  const navigate = useNavigate();

  const handleLogout = async () => {
    await authService.signOut();
    navigate.toLogin();
  };
</script>

<template>
  <div class="page-navigation">
    <h1 class="caption">Project NGI</h1>
    <nav class="navigations">
      <div class="nav-group">
        <h2 class="nav-group-label">マイデータ</h2>
        <router-link
          :to="{ name: PageNames.MyDatasets }"
          active-class="is-active"
          class="nav-group-item clickable"
        >
          データセット管理
        </router-link>
        <router-link
          :to="{ name: PageNames.MyTasks }"
          active-class="is-active"
          class="nav-group-item clickable"
        >
          タスク管理
        </router-link>
      </div>
      <div class="nav-group">
        <h2 class="nav-group-label">タスクを受託する</h2>
        <div class="nav-group-item clickable">タスクを探す</div>
      </div>
    </nav>
    <div class="footer">
      <button class="sign-out clickable" @click.stop="handleLogout">
        <LeftArrowIcon class="nav-icon" />
        <span>ログアウト</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .page-navigation {
    width: rem(180);
    padding: 0 rem(20);
    border-right: 1px solid $border-color;
    display: flex;
    flex-direction: column;
  }

  .caption {
    font-size: $font-size-large;
    margin: rem(40) 0;
  }

  .navigations {
    display: flex;
    flex-direction: column;
    gap: rem(24);
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

      &.is-active {
        color: $accent-color;
      }
    }
  }

  .footer {
    margin-top: auto;
  }

  .sign-out {
    padding: rem(16) 0;
    color: $font-color;
    font-size: $font-size-small;
    display: flex;
    align-items: center;
    gap: $font-size-small;
  }

  .nav-icon {
    width: $font-size-small;
    height: $font-size-small;
    fill: currentColor;
  }

  .clickable {
    color: $font-color;

    @include transition(color);

    &:hover:not(.is-active) {
      color: $font-color-hover;
    }
  }
</style>

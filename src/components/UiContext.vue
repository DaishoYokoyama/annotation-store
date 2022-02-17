<script setup lang="ts">
  import { useUiStore } from "@/stores/ui";
  import { ToastTypes } from "@/models";
  import PageOvelay from "@/components/PageOverlay.vue";
  import Spinner from "@/components/Spinner.vue";
  const ui = useUiStore();
</script>

<template>
  <div class="ui-wrapper">
    <slot />
    <Transition name="fade">
      <PageOvelay v-if="ui.progress">
        <Spinner :size="50" />
      </PageOvelay>
    </Transition>
    <div class="toast-wrapper">
      <TransitionGroup name="toast-list">
        <div
          v-for="toast in ui.toasts"
          :key="toast.id"
          :data-cy="toast.id"
          class="toast-list-item"
          :class="{
            'is-success': toast.type === ToastTypes.Success,
            'is-error': toast.type === ToastTypes.Error,
          }"
        >
          {{ toast.message }}
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .ui-wrapper {
    width: 100vw;
    height: 100vh;

    .toast-wrapper {
      position: fixed;
      z-index: 999999;
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      bottom: rem(16);
      right: rem(16);

      .toast-list {
        &-item {
          max-width: rem(700);
          height: rem(56);
          padding: rem(16);
          margin-top: rem(16);
          background: #fff;
          border-radius: rem(10);
          box-shadow: 0 1px 3px rgba(#000, 12%), 0 1px 2px rgba(#000, 25%);
          display: flex;
          align-items: center;
          transition: 0.25s ease-out;
          &.is-success {
            color: #fff;
            background: #66dc83;
          }
          &.is-error {
            color: #fff;
            background: #e60012;
          }
        }
        &-enter-from,
        &-leave-to {
          opacity: 0;
          transform: translateX(100%);
        }
      }
    }
  }
</style>

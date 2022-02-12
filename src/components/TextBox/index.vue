<script setup lang="ts">
  import {
    reactive,
    withDefaults,
    defineProps,
    defineEmits,
    computed,
  } from "vue";

  type Props = {
    inputType: string;
    placeholder: string;
    modelValue: string;
    errorMessage: string;
    readonly: boolean;
    maxlength?: number;
  };

  const state = reactive({ edited: false });

  const props = withDefaults(defineProps<Props>(), {
    inputType: "text",
    placeholder: "",
    modelValue: "",
    errorMessage: "",
    readonly: false,
  });

  const emit = defineEmits<{
    (event: "update:modelValue", newVal: string): void;
    (event: "keydown:enter", e: Event): void;
  }>();

  const onInput = (e: Event) =>
    emit("update:modelValue", (e.target as HTMLInputElement).value);

  const onEnter = (ev: Event) => emit("keydown:enter", ev);

  const onBlur = () => (state.edited = true);

  const isError = computed(() => state.edited && props.errorMessage !== "");
</script>

<template>
  <div class="text-box">
    <input
      class="input"
      :type="inputType"
      :placeholder="placeholder"
      :value="modelValue"
      :maxlength="maxlength"
      data-cy="input"
      :readonly="readonly"
      @input.stop="onInput"
      @blur.stop="onBlur"
      @keydown.enter.stop="onEnter"
    />
    <transition name="vertical-slide">
      <span v-if="isError" class="error-message">
        {{ errorMessage }}
      </span>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
  .text-box {
    position: relative;
    width: 100%;

    .input {
      width: 100%;
      height: rem(40);
      padding: 0 rem(16);
      background: #fff;
      border-radius: rem(10);
      box-shadow: 0 1px 3px rgba(#000, 12%), 0 1px 2px rgba(#000, 25%);
      font-size: $font-size-small;

      &::placeholder {
        color: #ccc;
      }

      &:read-only {
        cursor: not-allowed;
      }
    }

    .error-message {
      position: absolute;
      bottom: calc(rem(18) * -1);
      left: rem(8);
      color: #c22c2c;
      font-size: rem(12);
      word-break: keep-all;
    }
  }

  .vertical-slide {
    &-enter-active,
    &-leave-active {
      @include transition(opacity, transform);
    }

    &-enter-from,
    &-leave-to {
      transform: translateY(-5px);
      opacity: 0;
    }
  }
</style>

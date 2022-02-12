<script setup lang="ts">
  import { withDefaults, defineProps, defineEmits } from "vue";
  import TextBox from "@/components/TextBox/index.vue";

  type Props = {
    modelValue: string;
    label: string;
    isRequired: boolean;
    readonly: boolean;
    placeholder?: string;
    maxlength?: number;
    errorMessage?: string;
    inputType?: string;
  };

  withDefaults(defineProps<Props>(), {
    modelValue: "",
    isRequired: false,
    readonly: false,
  });

  const emit = defineEmits<{
    (event: "update:modelValue", newValue: string): void;
  }>();
</script>

<template>
  <div class="text-input">
    <div class="label">
      <span class="text">{{ label }}</span>
      <span v-if="isRequired" class="required">*</span>
    </div>
    <TextBox
      ref="boxRef"
      :model-value="modelValue"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :error-message="errorMessage"
      :input-type="inputType"
      :readonly="readonly"
      @update:model-value="emit('update:modelValue', $event)"
    />
  </div>
</template>

<style lang="scss" scoped>
  .text-input {
    margin-bottom: rem(32);
    width: rem(300);
    display: flex;
    flex-direction: column;

    .label {
      margin-bottom: rem(8);
      font-size: $font-size-small;
      font-weight: bold;

      .required {
        color: #c22c2c;
      }
    }
  }
</style>

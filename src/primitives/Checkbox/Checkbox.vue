<template>
  <button
    type="button"
    class="flex aspect-square h-[22px] w-[22px] shrink-0 items-center justify-center p-[2px] transition-colors"
    :class="[
      checked ? 'rounded-xs border-0 bg-primary-3' : 'rounded-xs border-[1.5px] bg-transparent',
      !checked && !error ? 'border-primary-3' : '',
      error && !checked ? 'border-secondary-3-base' : '',
    ]"
    :aria-label="ariaLabel"
    @click="onToggle"
  >
    <svg
      v-if="checked"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3.75 9.75L6.75 12.75L14.25 5.25"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
import type { CheckboxProps } from './types';

defineOptions({ name: 'Checkbox' });

const props = withDefaults(defineProps<CheckboxProps>(), {
  checked: false,
  error: false,
  ariaLabel: 'Checkbox',
});

const emit = defineEmits<{
  'update:checked': [value: boolean];
}>();

const onToggle = () => {
  emit('update:checked', !props.checked);
};
</script>

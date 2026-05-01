<template>
  <button
    @click="clickHandler"
    class="select-button"
    :class="[
      isActive ? 'active' : 'not-active',
      'color-style-' + colorStyle,
      'size-style-' + sizeStyle,
    ]"
    :disabled="isDisabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { SelectButtonProps } from './types';

defineOptions({ name: 'SelectButton' });

withDefaults(defineProps<SelectButtonProps>(), {
  isActive: false,
  sizeStyle: 'm',
  isDisabled: false,
});

const emit = defineEmits(['click']);

const clickHandler = () => {
  emit('click');
};
</script>

<style scoped lang="scss">
@use '../../typography-variables' as *;

.select-button {
  border-style: solid;
  border-width: 1.2px;
  border-radius: var(--radius-xl);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition: all var(--transition-base) ease;
}

.color-style-dark.active {
  border-color: var(--primary-color-1);
  background-color: var(--primary-color-1);
  color: var(--white-alpha-100);
}

.color-style-dark.not-active {
  border-color: var(--grey-100);
  background-color: var(--grey-100);
  color: var(--primary-color-1);
}

.color-style-medium.active {
  border-color: var(--primary-color-3);
  background-color: var(--primary-color-3);
  color: var(--white-alpha-100);
}

.color-style-medium.not-active {
  border-color: var(--primary-color-3);
  background-color: var(--white-alpha-100);
  color: var(--primary-color-3);
}

.color-style-medium:disabled {
  border-color: var(--grey-500);
  background-color: var(--white-alpha-100);
  color: var(--grey-500);
}

.color-style-light.not-active {
  border-color: var(--white-alpha-100);
  background-color: transparent;
  color: var(--white-alpha-100);
}

.size-style-s {
  padding: var(--spacing-xxxs) var(--spacing-xs);
}

.size-style-m {
  padding: var(--spacing-xxs) var(--spacing-s);
}

/* Mobile-only padding override; breakpoint = $typo-desktop-min - 1px (991px) */
@media (max-width: #{$typo-desktop-min - 1px}) {
  .size-style-s,
  .size-style-m {
    padding-top: var(--spacing-xxs);
    padding-bottom: var(--spacing-xxs);
  }
}
</style>

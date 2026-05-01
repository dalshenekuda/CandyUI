<template>
  <button
    v-if="props.type === 'button'"
    @click="clickHandler"
    class="button-action"
    :class="[
      props.ghost ? 'ghost' : props.transparent ? 'transparent' : 'filled',
      'style-' + props.colorStyle,
      { 'no-uppercase': !props.uppercase },
    ]"
    :disabled="props.disabled"
  >
    <slot />
  </button>

  <div
    v-else
    class="block-action"
    :class="[
      props.ghost ? 'ghost' : props.transparent ? 'transparent' : 'filled',
      'style-' + props.colorStyle,
      { 'no-uppercase': !props.uppercase },
    ]"
    @click="clickHandler"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { ButtonProps } from './types';

const props = withDefaults(defineProps<ButtonProps>(), {
  stopPropagation: false,
  disabled: false,
  colorStyle: 'dark',
  type: 'button',
  transparent: false,
  ghost: false,
  uppercase: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const clickHandler = (event: MouseEvent): void => {
  if (props.stopPropagation) {
    event.stopPropagation();
  }
  emit('click', event);
};
</script>

<style scoped>
.button-action,
.block-action {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-xl);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  min-height: 39px;
  padding: var(--spacing-xxs) var(--spacing-s);
  cursor: pointer;
  transition: all var(--transition-base) ease;
}

.button-action.no-uppercase,
.block-action.no-uppercase {
  text-transform: none;
}

.button-action {
  border: none;
  outline: none;
}

.button-action:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
}

.button-action:active:not(:disabled) {
  transform: translateY(0);
}

.style-dark {
  border: 1.2px solid var(--primary-color-1);
}

.style-dark.filled {
  background-color: var(--primary-color-1);
  color: var(--white-alpha-100);
}

.style-dark.filled:disabled {
  background-color: var(--grey-100);
  color: var(--grey-500);
  border: 1.2px solid var(--grey-100);
  cursor: not-allowed;
}

.style-dark.transparent {
  background-color: transparent;
  color: var(--primary-color-1);
}

.style-dark.ghost {
  background-color: transparent;
  border-color: transparent;
  color: var(--primary-color-1);
}

.style-light.ghost {
  background-color: transparent;
  border-color: transparent;
  color: var(--white-alpha-100);
}

.style-light.transparent {
  border: 1.2px solid var(--white-alpha-100);
  background-color: transparent;
  color: var(--white-alpha-100);
}
</style>

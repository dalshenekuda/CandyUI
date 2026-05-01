<template>
  <span
    class="tag"
    :class="[
      { 'text-nowrap': noWrap },
      !customTextColor && textColor && TEXT_COLOR_CLASS[textColor],
    ]"
    :style="[bgStyle, customTextColor ? { color: customTextColor } : null]"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { TagProps } from './types';

defineOptions({ name: 'Tag' });

const props = withDefaults(defineProps<TagProps>(), {
  noWrap: true,
  styleBg: 'neutral',
  customBgColor: null,
  customTextColor: null,
  textColor: 'light',
});

const TEXT_COLOR_CLASS: Record<string, string> = {
  light: 'text-white',
  dark: 'text-primary-1',
};

const BG_COLOR_MAP: Record<string, string> = {
  alarm: 'var(--secondary-color-3-base)',
  yellow: 'var(--secondary-color-5-light)',
  neutral: 'var(--primary-color-2)',
};

const bgStyle = computed(() => ({
  backgroundColor: props.customBgColor ?? BG_COLOR_MAP[props.styleBg] ?? BG_COLOR_MAP.neutral,
}));
</script>

<style scoped lang="scss">
@use '../../typography-mixins' as *;

.tag {
  display: inline-flex;
  align-items: center;
  border-radius: var(--radius-full);
  padding: var(--spacing-4xs) var(--spacing-xxs);
  @include typo-c1;
}
</style>

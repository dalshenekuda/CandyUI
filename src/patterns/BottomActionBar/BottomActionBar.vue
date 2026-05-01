<template>
  <div
    class="sticky bottom-0 left-0 right-0 z-50 w-full border-t rounded-tl-xl rounded-tr-xl"
    :class="isMobile ? mobileClasses : desktopClasses"
    :style="isMobile ? mobileStyle : desktopStyle"
  >
    <div :class="isMobile ? 'w-full' : 'min-w-0'">
      <slot name="left" />
    </div>

    <div :class="isMobile ? 'flex flex-col gap-xxs w-full' : 'flex items-center gap-s shrink-0'">
      <slot name="right" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BottomActionBarProps } from './types';

defineOptions({ name: 'BottomActionBar' });

withDefaults(defineProps<BottomActionBarProps>(), {
  isMobile: false,
});

const desktopClasses =
  'flex flex-row items-center justify-between gap-l px-l py-m bg-primary-4 border-grey-100';
const mobileClasses = 'flex flex-col gap-xxs px-m py-m bg-white-alpha-100 border-primary-6';

const desktopStyle = { boxShadow: 'var(--shadow-bar-desktop)' };
const mobileStyle = { boxShadow: 'var(--shadow-bar-mobile)' };
</script>

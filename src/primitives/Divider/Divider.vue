<template>
  <div class="divider" :style="dividerStyle" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { DividerProps } from './types';

defineOptions({ name: 'Divider' });

const props = withDefaults(defineProps<DividerProps>(), {
  color: 'grey-100',
});

const dividerStyle = computed(() => ({
  backgroundColor: `var(--${props.color})`,
}));
</script>

<style scoped>
.divider {
  height: 1px;
  width: 100%;
}
</style>

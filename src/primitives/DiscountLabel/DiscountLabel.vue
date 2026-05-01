<template>
  <Tag
    v-if="label || slots.default"
    :style-bg="tagStyleBg"
    text-color="light"
    :custom-bg-color="customBgColor"
    :custom-text-color="customTextColor"
  >
    <slot>
      <Text as="span" variant="b3">{{ label }}</Text>
    </slot>
  </Tag>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';
import Tag from '@/primitives/Tag/Tag.vue';
import Text from '@/ui/components/Text.vue';
import type { DiscountLabelProps } from './types';

defineOptions({ name: 'DiscountLabel' });

const props = withDefaults(defineProps<DiscountLabelProps>(), { tagStyle: 'neutral' });
const slots = useSlots();

const isTransparent = computed(() => props.tagStyle === 'transparent');

const tagStyleBg = computed<'neutral' | 'alarm' | 'yellow'>(() => {
  if (props.tagStyle === 'alarm' || props.tagStyle === 'yellow' || props.tagStyle === 'neutral') {
    return props.tagStyle;
  }

  return 'neutral';
});
const customBgColor = computed(() => (isTransparent.value ? 'transparent' : null));
const customTextColor = computed(() => (isTransparent.value ? 'var(--primary-color-3)' : null));
</script>

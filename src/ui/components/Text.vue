<template>
  <component
    :is="props.as ?? textVariantDefaultTag[props.variant]"
    class="ui-text"
    :class="`ui-text--${props.variant}`"
    :style="overrideStyle"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { FontWeight } from '../tokens/typography';
import type { TextColor } from '../tokens/colors';
import { textVariantDefaultTag } from '../styles/textStyles';
import type { TextVariant } from '../styles/textStyles';

const props = withDefaults(
  defineProps<{
    variant?: TextVariant;
    as?: string;
    weight?: FontWeight;
    color?: TextColor;
  }>(),
  {
    variant: 'b2',
  }
);

const overrideStyle = computed(() => {
  const style: Record<string, string> = {};
  if (props.weight) {
    style.fontWeight = `var(--font-weight-${props.weight})`;
  }
  if (props.color) {
    style.color = `var(--${props.color})`;
  }
  return style;
});
</script>

<style lang="scss">
@use '../../typography-mixins' as *;

.ui-text {
  margin: 0;
  font-family: Inter, sans-serif;

  &--h1 {
    @include typo-h1;
  }
  &--h2 {
    @include typo-h2;
  }
  &--h3 {
    @include typo-h3;
  }
  &--h4 {
    @include typo-h4;
  }
  &--s1 {
    @include typo-s1;
  }
  &--s2 {
    @include typo-s2;
  }
  &--b1 {
    @include typo-b1;
  }
  &--b2,
  &--body {
    @include typo-b2;
  }
  &--b3 {
    @include typo-b3;
  }
  &--caption {
    @include typo-c1;
  }
  &--caption2 {
    @include typo-c2;
  }
  &--credit {
    @include typo-credit;
  }
}
</style>

<template>
  <div
    v-if="localVisible"
    :class="[
      'rounded-sm border-[1.5px] border-solid p-s w-full desktop:max-w-[345px]',
      variant === 'notification'
        ? 'bg-primary-6 border-primary-1'
        : 'bg-[var(--semantic-alert-bg)] border-secondary-2-base variant-alert',
    ]"
  >
    <div class="flex items-start gap-s">
      <div class="icon-container shrink-0">
        <InformationIcon :color="iconColor" />
      </div>
      <div class="text-container flex-grow">
        <Text
          as="div"
          variant="caption"
          weight="medium"
          :color="textColor"
          class="leading-none mt-[2px]"
        >
          <slot></slot>
        </Text>
      </div>
      <button
        type="button"
        class="close-button shrink-0 flex items-center justify-center w-[20px] h-[20px] bg-transparent border-none cursor-pointer p-0"
        @click="handleClose"
        aria-label="Close"
      >
        <CloseIcon color-style="dark" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { Text } from '@/ui';
import { InformationIcon, CloseIcon } from '@/primitives/Icon';
import type { AlertMessageProps, AlertMessageEmits } from './types';
import type { TextColor } from '@/ui/tokens/colors';

defineOptions({ name: 'AlertMessage' });

const props = withDefaults(defineProps<AlertMessageProps>(), {
  variant: 'notification',
  visible: true,
});

const emit = defineEmits<AlertMessageEmits>();

const localVisible = ref(props.visible);

watch(
  () => props.visible,
  (newVal) => {
    localVisible.value = newVal;
  }
);

const handleClose = () => {
  localVisible.value = false;
  emit('update:visible', false);
  emit('close');
};

const iconColor = computed(() => {
  return props.variant === 'alert' ? 'var(--secondary-color-2-base)' : 'var(--primary-color-1)';
});

const textColor = computed<TextColor>(() => {
  return props.variant === 'alert' ? 'secondary-color-2-base' : 'primary-color-1';
});
</script>

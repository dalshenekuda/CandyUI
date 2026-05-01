<template>
  <DropdownMenuItem
    :disabled="disabled"
    class="flex min-h-[48px] items-center rounded-sm px-s py-xxs text-primary-color-1 outline-none transition-colors duration-fast hover:bg-background focus:bg-background data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[disabled]:hover:bg-transparent"
    @select="handleSelect"
  >
    <span v-if="icon" class="mr-xxs h-5 w-5">
      <component :is="icon" />
    </span>
    <Text as="span" variant="b3" weight="regular" color="primary-color-1">
      <slot />
    </Text>
    <span v-if="shortcut" class="ml-auto text-secondary">
      <Text as="span" variant="b3" weight="regular">
        {{ shortcut }}
      </Text>
    </span>
  </DropdownMenuItem>
</template>

<script setup lang="ts">
import { DropdownMenuItem } from 'reka-ui';
import Text from '@/ui/components/Text.vue';
import type { DropdownMenuItemProps, DropdownMenuItemEmits } from './types';

defineOptions({ name: 'DropdownMenuItem' });

withDefaults(defineProps<DropdownMenuItemProps>(), {
  disabled: false,
  destructive: false,
});

const emit = defineEmits<DropdownMenuItemEmits>();

const handleSelect = (event: Event) => {
  emit('select', event);
};
</script>

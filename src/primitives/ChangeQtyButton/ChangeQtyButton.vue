<template>
  <!-- type="inButton": full ActionButton when qty=0, stepper when qty>0 -->
  <div v-if="type === 'inButton'" :class="{ 'flex justify-center': buttonStyle === 'light' }">
    <button
      v-if="qty === 0"
      :class="
        buttonStyle === 'light'
          ? 'btn-select-outlined'
          : 'action-button filled style-dark w-full px-s'
      "
      :disabled="isDisabled"
      @click="emit('change-qty', 'plus')"
    >
      <Text
        as="span"
        variant="b3"
        weight="medium"
        :color="buttonStyle === 'light' ? 'primary-color-1' : 'white-alpha-100'"
        >{{ addButtonText }}</Text
      >
    </button>

    <div
      v-else
      :class="
        buttonStyle === 'light'
          ? 'stepper-outlined'
          : ['action-button filled style-dark w-full', size === 'big' ? 'px-20-big' : 'px-20']
      "
    >
      <div class="flex items-center justify-between w-full">
        <button
          class="change-quantity-icon icon-minus relative p-0"
          @click.stop="emit('change-qty', 'minus')"
        >
          <Text
            as="span"
            variant="b2"
            weight="bold"
            :color="buttonStyle === 'light' ? 'primary-color-3' : 'white-alpha-100'"
            >−</Text
          >
        </button>
        <Text
          as="span"
          :variant="size === 'big' ? 'b3' : 'caption'"
          weight="bold"
          :color="buttonStyle === 'light' ? 'primary-color-3' : 'white-alpha-100'"
        >
          {{ qty }}
        </Text>
        <button class="change-quantity-icon relative p-0" @click.stop="emit('change-qty', 'plus')">
          <Text
            as="span"
            variant="b2"
            weight="bold"
            :color="buttonStyle === 'light' ? 'primary-color-3' : 'white-alpha-100'"
            >+</Text
          >
        </button>
      </div>
    </div>
  </div>

  <!-- type="empty": circle icons with qty count -->
  <div
    v-else-if="type === 'empty'"
    class="flex items-center"
    :class="size === 'small' ? 'gap-[0.6rem]' : 'gap-[1.3rem]'"
  >
    <button
      class="change-quantity-icon p-0"
      :disabled="decreaseDisabled"
      @click="emit('change-qty', 'minus')"
    >
      <MinusInCircleIcon
        class="block w-full h-full w-[21px] h-[21px] desktop:w-[24px] desktop:h-[24px]"
      />
    </button>
    <Text as="span" :variant="size === 'small' ? 'b1' : 's1'">{{ qty }}</Text>
    <button
      class="change-quantity-icon p-0"
      :disabled="increaseDisabled"
      @click="emit('change-qty', 'plus')"
    >
      <PlusInCircleIcon
        class="block w-full h-full w-[21px] h-[21px] desktop:w-[24px] desktop:h-[24px]"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { PlusInCircleIcon, MinusInCircleIcon } from '@/primitives/Icon';
import Text from '@/ui/components/Text.vue';
import type { ChangeQtyButtonProps, ChangeQtyButtonEmits } from './types';

defineOptions({ name: 'ChangeQtyButton' });

withDefaults(defineProps<ChangeQtyButtonProps>(), {
  type: 'inButton',
  size: 'small',
  isDisabled: false,
  decreaseDisabled: false,
  increaseDisabled: false,
  addButtonText: 'Add',
  buttonStyle: 'dark',
});

const emit = defineEmits<ChangeQtyButtonEmits>();
</script>

<style scoped lang="scss">
@use '../../typography-variables' as *;

.action-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-weight: var(--font-weight-black);
  text-transform: uppercase;
  min-height: 39px;
  cursor: pointer;
  border: none;

  &.filled.style-dark {
    background-color: var(--primary-color-1);
    color: var(--white-alpha-100);
    border: 1.2px var(--primary-color-1) solid;

    &:disabled {
      background-color: var(--grey-100);
      color: var(--grey-700);
      border-color: var(--grey-100);
    }
  }
}

.px-20 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.px-20-big {
  padding-left: 2rem;
  padding-right: 2rem;
}

.btn-select-outlined {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid var(--primary-color-1);
  border-radius: 24px;
  height: 40px;
  width: 140px;
  font-family: Poppins, sans-serif;
  font-weight: var(--font-weight-semibold);
  font-size: $typo-button-large-size;
  letter-spacing: 0.07em;
  color: var(--primary-color-1);
  cursor: pointer;
  transition: opacity var(--transition-base) ease;

  &:disabled {
    border-color: var(--grey-500);
    color: var(--grey-500);
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    opacity: 0.75;
  }
}

.stepper-outlined {
  display: flex;
  align-items: center;
  border: 1px solid var(--primary-color-3);
  border-radius: 24px;
  height: 40px;
  width: 140px;
  padding: 0 1.25rem;
  background: transparent;
}

.change-quantity-icon {
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
}
</style>

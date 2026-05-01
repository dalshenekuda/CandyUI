<template>
  <DialogRoot :open="modelValue" @update:open="handleOpenChange">
    <DialogPortal>
      <DialogOverlay class="modal-overlay" />

      <DialogContent
        class="modal-wrapper"
        :class="`modal-${size}`"
        @escape-key-down="handleEscapeKeyDown"
        @pointer-down-outside="handlePointerDownOutside"
        @open-auto-focus="$emit('open')"
        @close-auto-focus="$emit('close')"
      >
        <DialogTitle class="sr-only">{{ ariaTitle }}</DialogTitle>

        <div class="modal-container">
          <div class="modal-close-row">
            <DialogClose as-child>
              <div class="modal-header-close">
                <slot name="header-close">
                  <CloseIconModal />
                </slot>
              </div>
            </DialogClose>
          </div>

          <div v-if="$slots.header" class="modal-header">
            <slot name="header" />
          </div>

          <div class="modal-body">
            <slot name="body" />
            <div v-if="bodySvgImage" v-html="bodySvgImage" />
          </div>

          <div
            v-if="$slots.footer"
            class="flex flex-col-reverse desktop:flex-row items-center justify-center gap-xxs desktop:gap-s mb-m"
          >
            <slot name="footer" />
          </div>
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup lang="ts">
import {
  DialogRoot,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogClose,
} from 'reka-ui';
import { CloseIconModal } from '@/primitives/Icon';
import type { ModalProps, ModalEmits } from './types';

defineOptions({ name: 'Modal' });

const props = withDefaults(defineProps<ModalProps>(), {
  modelValue: false,
  size: 'lg',
  noCloseOnBackdrop: false,
  closeOnEscape: true,
  ariaTitle: 'Dialog',
});

const emit = defineEmits<ModalEmits>();

const handleOpenChange = (open: boolean) => {
  emit('update:modelValue', open);
};

const handleEscapeKeyDown = (event: Event) => {
  if (!props.closeOnEscape) {
    event.preventDefault();
  }
};

const handlePointerDownOutside = (event: Event) => {
  if (props.noCloseOnBackdrop) {
    event.preventDefault();
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: var(--overlay-bg);
  z-index: var(--z-popup);
  animation: overlayShow 0.2s ease;
}

.modal-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: var(--z-popup);
  max-height: 90vh;
  overflow-y: auto;
  outline: none;
  animation: contentShow 0.2s ease;
}

.modal-wrapper.modal-md {
  width: min(500px, calc(100vw - 2rem));
}

.modal-wrapper.modal-lg {
  width: min(800px, calc(100vw - 2rem));
}

.modal-wrapper.modal-xl {
  width: min(1200px, calc(100vw - 2rem));
}

.modal-wrapper.modal-full {
  width: calc(100vw - 2rem);
  max-height: 95vh;
}

.modal-container {
  background: var(--white-alpha-100);
  border-radius: var(--radius-xl);
  border: 1px solid var(--primary-color-4);
  box-shadow: var(--shadow-modal);
}

.modal-close-row {
  display: flex;
  justify-content: flex-end;
  padding: 20px 20px 0;
}

.modal-header-close {
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
}

.modal-header {
  padding: var(--spacing-s) var(--spacing-l);
}

.modal-body {
  padding: 0;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

@keyframes overlayShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes contentShow {
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>

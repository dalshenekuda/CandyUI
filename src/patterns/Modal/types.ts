/**
 * Props for the Modal component.
 */
export interface ModalProps {
  /**
   * Whether the modal is currently open.
   * @default false
   */
  modelValue?: boolean;
  /**
   * The size variant of the modal.
   * @default 'lg'
   */
  size?: 'md' | 'lg' | 'xl' | 'full';
  /**
   * Whether to disable closing the modal when clicking on the backdrop.
   * @default false
   */
  noCloseOnBackdrop?: boolean;
  /**
   * Whether to close the modal when pressing the Escape key.
   * @default true
   */
  closeOnEscape?: boolean;
  /**
   * The title for accessibility (screen readers).
   * @default 'Dialog'
   */
  ariaTitle?: string;
  /** Optional SVG image content for the modal body. */
  bodySvgImage?: string;
}

/**
 * Emits for the Modal component.
 */
export interface ModalEmits {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'open'): void;
  (e: 'close'): void;
}

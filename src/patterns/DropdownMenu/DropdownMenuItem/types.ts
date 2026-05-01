import type { Component } from 'vue';

/**
 * Props for the DropdownMenuItem component.
 */
export interface DropdownMenuItemProps {
  /** Whether the item is disabled. */
  disabled?: boolean;
  /** Whether the item has a destructive action style. */
  destructive?: boolean;
  /** Optional icon component to display before the text. */
  icon?: Component;
  /** Optional keyboard shortcut text to display after the text. */
  shortcut?: string;
}

/**
 * Emits for the DropdownMenuItem component.
 */
export interface DropdownMenuItemEmits {
  (e: 'select', event: Event): void;
}

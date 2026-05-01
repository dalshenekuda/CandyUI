/**
 * Props for the SelectButton component.
 */
export interface SelectButtonProps {
  /** Whether the button is currently active/selected. */
  isActive?: boolean;
  /**
   * The size variant of the button.
   * @default 'm'
   */
  sizeStyle?: 's' | 'm';
  /** Whether the button is disabled. */
  isDisabled?: boolean;
  /**
   * The color variant of the button.
   */
  colorStyle?: 'light' | 'medium' | 'dark';
}

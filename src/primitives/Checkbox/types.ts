/**
 * Props for the Checkbox primitive component.
 */
export interface CheckboxProps {
  /**
   * The checked state of the checkbox.
   * @default false
   */
  checked?: boolean;

  /**
   * Whether the checkbox should display an error state when unchecked.
   * @default false
   */
  error?: boolean;

  /**
   * Accessible label for assistive technologies.
   * @default 'Checkbox'
   */
  ariaLabel?: string;
}

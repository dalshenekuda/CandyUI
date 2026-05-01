/**
 * Props for the Button primitive component.
 */
export interface ButtonProps {
  /** Whether to stop event propagation on click */
  stopPropagation?: boolean;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Visual style variant */
  colorStyle?: 'dark' | 'light';
  /** HTML element type or layout behavior */
  type?: 'button' | 'block';
  /** Transparent background with border */
  transparent?: boolean;
  /** No background and no border */
  ghost?: boolean;
  /** Whether to force uppercase text */
  uppercase?: boolean;
}

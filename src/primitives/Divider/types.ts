import type { TextColor } from '@/ui/tokens/colors';

/**
 * Props for the Divider component.
 */
export interface DividerProps {
  /** Resolves to `var(--{color})` from brand tokens (e.g. `primary-color-5` → #A3D5FF). */
  color?: TextColor;
}

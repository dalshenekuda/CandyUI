/**
 * Props for the Tag component.
 */
export interface TagProps {
  /**
   * Whether the tag text should wrap.
   * @default true
   */
  noWrap?: boolean;
  /**
   * The background color variant.
   * @default 'neutral'
   */
  styleBg?: 'neutral' | 'alarm' | 'yellow';
  /** Custom hex or CSS variable for background color. */
  customBgColor?: string | null;
  /** Custom hex or CSS variable for text color. */
  customTextColor?: string | null;
  /**
   * Predefined text color variant.
   * @default 'light'
   */
  textColor?: 'light' | 'dark';
}

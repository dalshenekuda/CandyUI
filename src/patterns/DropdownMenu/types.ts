/**
 * Props for the DropdownMenu component.
 */
export interface DropdownMenuProps {
  /**
   * The side of the trigger where the content should be displayed.
   * @default 'bottom'
   */
  side?: 'top' | 'right' | 'bottom' | 'left';
  /**
   * The distance between the content and the trigger.
   * @default 5
   */
  sideOffset?: number;
  /**
   * The alignment of the content relative to the trigger.
   * @default 'end'
   */
  align?: 'start' | 'center' | 'end';
}

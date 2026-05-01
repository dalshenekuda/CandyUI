/**
 * Props for the Tooltip component.
 */
export interface TooltipProps {
  /** The text content to display inside the tooltip. */
  content: string;
  /**
   * The side of the trigger where the tooltip should be displayed.
   * @default 'top'
   */
  side?: 'top' | 'right' | 'bottom' | 'left';
  /**
   * The distance between the tooltip and the trigger.
   * @default 5
   */
  sideOffset?: number;
  /**
   * The delay in milliseconds before the tooltip is displayed.
   * @default 200
   */
  delayDuration?: number;
}

export type AlertVariant = 'notification' | 'alert';

export interface AlertMessageProps {
  variant?: AlertVariant;
  visible?: boolean;
}

export interface AlertMessageEmits {
  (e: 'update:visible', value: boolean): void;
  (e: 'close'): void;
}

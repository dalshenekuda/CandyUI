export interface ChangeQtyButtonProps {
  qty: number;
  type?: 'inButton' | 'empty';
  size?: 'small' | 'big';
  isDisabled?: boolean;
  decreaseDisabled?: boolean;
  increaseDisabled?: boolean;
  addButtonText?: string;
  buttonStyle?: 'dark' | 'light';
}

export type ChangeQtyButtonEmits = {
  'change-qty': [type: 'plus' | 'minus'];
  'addition-action': [];
};

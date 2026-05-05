import type { App } from 'vue';
import './styles/index.css';

export * from './primitives';

/** Alias for Button — consumed by my-account-proxy and other apps as ActionButton */
export { Button as ActionButton } from './primitives';

// React components
export * from './components/Text/Text';
export * from './components/Button/Button';
export * from './components/Badge/Badge';
export * from './components/Card/Card';
export * from './components/Dialog/Dialog';
export * from './components/Chart/Chart';

import {
  Button,
  Checkbox,
  SelectButton,
  ChangeQtyButton,
  DiscountLabel,
  ContentPlate,
  Loader,
  RemoveIcon,
  PlusInCircleIcon,
  MinusInCircleIcon,
} from './primitives';

export function install(app: App) {
  app.component('Button', Button);
  app.component('Checkbox', Checkbox);
  app.component('ActionButton', Button);
  app.component('Loader', Loader);
  app.component('SelectButton', SelectButton);
  app.component('ChangeQtyButton', ChangeQtyButton);
  app.component('DiscountLabel', DiscountLabel);
  app.component('ContentPlate', ContentPlate);
  app.component('RemoveIcon', RemoveIcon);
  app.component('PlusInCircleIcon', PlusInCircleIcon);
  app.component('MinusInCircleIcon', MinusInCircleIcon);
}

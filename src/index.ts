import type { App } from 'vue';
import './styles/index.css';
import './brand-variables.scss';
import './spacing-variables.scss';
import './typography-variables.scss';

export * from './primitives';
export * from './patterns';
export * from './design-system';
export * from './ui';
export * from './domain-level/entity/subscription';
export * from './domain-level/entity/product';
export * from './domain-level/widgets';

/** Alias for Button — consumed by my-account-proxy and other apps as ActionButton */
export { Button as ActionButton } from './primitives';

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
import { Text } from './ui';
import {
  Tooltip,
  Modal,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  BottomActionBar,
  AlertMessage,
} from './patterns';
import {
  PriceBlock,
  CylinderSelection,
  ProgressBar,
  SectionNotes,
  ProductsWithFilter,
  TermsAndConditions,
} from './domain-level/widgets';
import {
  CylinderCard,
  CylinderQuantityCard,
  CylinderTypeSelector,
  FrequencySelector,
  ProductLine,
  ProductSummary,
  SummaryCylindersIcon,
  SummaryFlavorsIcon,
} from './domain-level/entity/subscription';

export function install(app: App) {
  app.component('Button', Button);
  app.component('Checkbox', Checkbox);
  app.component('ActionButton', Button); // same component, alias for consuming apps
  app.component('Modal', Modal);
  app.component('Text', Text);
  app.component('Loader', Loader);
  app.component('Tooltip', Tooltip);
  app.component('SelectButton', SelectButton);
  app.component('DropdownMenu', DropdownMenu);
  app.component('DropdownMenuItem', DropdownMenuItem);
  app.component('DropdownMenuLabel', DropdownMenuLabel);
  app.component('DropdownMenuSeparator', DropdownMenuSeparator);
  app.component('BottomActionBar', BottomActionBar);
  app.component('ChangeQtyButton', ChangeQtyButton);
  app.component('CylinderSelection', CylinderSelection);
  app.component('ProgressBar', ProgressBar);
  app.component('SectionNotes', SectionNotes);
  app.component('ProductsWithFilter', ProductsWithFilter);
  app.component('DiscountLabel', DiscountLabel);
  app.component('TermsAndConditions', TermsAndConditions);
  app.component('CylinderCard', CylinderCard);
  app.component('CylinderQuantityCard', CylinderQuantityCard);
  app.component('CylinderTypeSelector', CylinderTypeSelector);
  app.component('FrequencySelector', FrequencySelector);
  app.component('ProductLine', ProductLine);
  app.component('ProductSummary', ProductSummary);
  app.component('SummaryCylindersIcon', SummaryCylindersIcon);
  app.component('SummaryFlavorsIcon', SummaryFlavorsIcon);
  app.component('PriceBlock', PriceBlock);
  app.component('ContentPlate', ContentPlate);
  app.component('RemoveIcon', RemoveIcon);
  app.component('PlusInCircleIcon', PlusInCircleIcon);
  app.component('MinusInCircleIcon', MinusInCircleIcon);
  app.component('AlertMessage', AlertMessage);
}

import './styles/index.css';

export * from './components/Text/Text';
export * from './components/Button/Button';
export * from './components/Badge/Badge';
export * from './components/Card/Card';
export * from './components/Dialog/Dialog';

/** Alias for Button — consumed by my-account-proxy and other apps as ActionButton */
export { Button as ActionButton } from './components/Button/Button';

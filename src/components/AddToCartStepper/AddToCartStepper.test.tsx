import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { AddToCartStepper } from './AddToCartStepper';

describe('AddToCartStepper', () => {
  it('renders the add action and calls onAdd when quantity is 0', async () => {
    const user = userEvent.setup();
    const onAdd = vi.fn();

    render(<AddToCartStepper quantity={0} onAdd={onAdd} />);

    await user.click(screen.getByRole('button', { name: 'Add to cart' }));

    expect(onAdd).toHaveBeenCalledOnce();
  });

  it('shows the quantity and calls increase and decrease handlers', async () => {
    const user = userEvent.setup();
    const onIncrease = vi.fn();
    const onDecrease = vi.fn();

    render(<AddToCartStepper quantity={2} onIncrease={onIncrease} onDecrease={onDecrease} />);

    expect(screen.getByText('2')).toBeTruthy();

    await user.click(screen.getByRole('button', { name: 'Increase quantity' }));
    await user.click(screen.getByRole('button', { name: 'Decrease quantity' }));

    expect(onIncrease).toHaveBeenCalledOnce();
    expect(onDecrease).toHaveBeenCalledOnce();
  });
});

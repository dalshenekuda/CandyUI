import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Button } from './Button';

describe('Button', () => {
  it('does not call onClick when disabled', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Button disabled onClick={onClick}>
        Save
      </Button>
    );

    const button = screen.getByRole('button', { name: 'Save' });

    expect(button).toHaveProperty('disabled', true);
    expect(button.getAttribute('aria-busy')).toBeNull();

    await user.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });

  it('sets aria-busy and does not call onClick while loading', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Button loading onClick={onClick}>
        Save
      </Button>
    );

    const button = screen.getByRole('button', { name: 'Save' });

    expect(button).toHaveProperty('disabled', true);
    expect(button.getAttribute('aria-busy')).toBe('true');

    await user.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });

  it('includes the variant classes in className', () => {
    render(<Button variant="destructive">Delete</Button>);

    expect(screen.getByRole('button', { name: 'Delete' }).className).toContain('bg-danger');
  });
});

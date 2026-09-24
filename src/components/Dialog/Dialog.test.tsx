import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from './Dialog';

describe('Dialog', () => {
  it('opens from the trigger and shows the title', async () => {
    const user = userEvent.setup();

    render(
      <Dialog>
        <DialogTrigger>Open dialog</DialogTrigger>
        <DialogContent>
          <DialogTitle>Confirm action</DialogTitle>
          <DialogDescription>Review the details before continuing.</DialogDescription>
        </DialogContent>
      </Dialog>
    );

    expect(screen.queryByRole('dialog')).toBeNull();

    await user.click(screen.getByRole('button', { name: 'Open dialog' }));

    expect(screen.getByRole('dialog', { name: 'Confirm action' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Confirm action' })).toBeTruthy();
  });
});

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Badge } from './Badge';

describe('Badge', () => {
  it('includes the variant classes in className', () => {
    render(<Badge variant="sale">Sale</Badge>);

    expect(screen.getByText('Sale').className).toContain('bg-accent');
  });
});

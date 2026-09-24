import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Text, type TextVariant } from './Text';

describe('Text', () => {
  it.each<[TextVariant, string]>([
    ['body-md', 'P'],
    ['heading-md', 'H3'],
    ['display-2xl', 'H1'],
    ['overline', 'SPAN'],
  ])('renders variant %s as <%s> with the matching typo class', (variant, tagName) => {
    render(<Text variant={variant}>Sample</Text>);

    const element = screen.getByText('Sample');

    expect(element.tagName).toBe(tagName);
    expect(element.classList.contains(`typo-${variant}`)).toBe(true);
  });

  it('uses the as prop instead of the variant default tag', () => {
    render(
      <Text variant="heading-lg" as="span">
        Label
      </Text>
    );

    const element = screen.getByText('Label');

    expect(element.tagName).toBe('SPAN');
    expect(element.classList.contains('typo-heading-lg')).toBe(true);
  });

  it('sets color from the semantic token variable', () => {
    render(<Text color="color-brand">Brand</Text>);

    expect(screen.getByText('Brand').style.color).toBe('var(--color-brand)');
  });

  it('sets font weight from the weight token variable', () => {
    render(<Text weight="semibold">Strong</Text>);

    expect(screen.getByText('Strong').style.fontWeight).toBe('var(--font-weight-semibold)');
  });
});

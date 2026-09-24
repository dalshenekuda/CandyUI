import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ProductCard } from './ProductCard';

describe('ProductCard', () => {
  it('sets data-tone-vars and renders the price node', () => {
    render(
      <ProductCard
        tone="raspberry"
        imageAlt="Sour belts photo"
        imageSrc="https://example.com/sour-belts.jpg"
        title="Sour belts"
        price={<span>4.50 USD</span>}
      />
    );

    const card = screen.getByRole('heading', { name: 'Sour belts' }).closest('[data-tone-vars]');

    expect(card?.getAttribute('data-tone-vars')).toBe('raspberry');
    expect(screen.getByText('4.50 USD')).toBeTruthy();
  });

  it('exposes an accessible No image placeholder when imageSrc is omitted', () => {
    render(<ProductCard imageAlt="Sour belts photo" title="Sour belts" />);

    const placeholder = screen.getByRole('img', { name: 'Sour belts photo' });

    expect(placeholder.textContent).toContain('No image');
  });
});

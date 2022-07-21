
import React from 'react';
import { render } from '@testing-library/react';
import RelatedProducts from '../RelatedProducts';
import renderWithProviders from '../../detail/tests/renderWithProviders';


describe('RelatedProducts contains Related Products Heading', () => {
  test('renders Related Products Heading', () => {
    renderWithProviders(<RelatedProducts />, {preloadedState: {
      relatedProducts: [
      37316,
      37316,
      37318,
      37319,
      37311,
      37313
  ]}});
  });
});

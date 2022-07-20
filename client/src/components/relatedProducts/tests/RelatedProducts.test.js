console.log('STOPS??????????????????????????????')

import React from 'react';
import { render } from '@testing-library/react';
import RelatedProducts from '../RelatedProducts';

describe('RelatedProducts contains Related Products Heading', () => {
  test('renders Related Products Heading', () => {
    render(<RelatedProducts />);
  });
});

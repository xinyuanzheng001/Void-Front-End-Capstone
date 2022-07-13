import { render, waitFor, screen } from '@testing-library/react';
import Select from '../Select';

test('should take sizes argument', async () => {
  const sizes = ['S', 'M', 'L', 'XL'];
  const quantity = [5, 4, 1, 3];
  render(<Select sizes={sizes} quantity={quantity} />);
  const getSizes = await screen.findAllByTestId('size-options');
  const getQuantity = await screen.findAllByTestId('qty-options');
  expect(getQuantity).toHaveLength(5);
  expect(getSizes).toHaveLength(4);
});

import React, { useState } from 'react';
import { FlexContainer } from '../styles/Container.styled';
import { SelectSize, SelectQuantity } from '../styles/Select.styled';

export default function Select({ sizes, quantity }) {
  const [selected, setSelected] = useState('');
  const generateArray = (num) => {
    const range = [];
    for (let i = 0; i < num && i < 15; i++) {
      range.push(i + 1);
    }
    return range;
  };
  const [selectedQuantity, setSelectedQuantity] = useState(
    generateArray(quantity[0])
  );
  const onChangeHandler = (e) => {
    setSelected(sizes.indexOf(e.target.value));
    setSelectedQuantity(generateArray(quantity[sizes.indexOf(e.target.value)]));
  };
  return (
    <FlexContainer>
      <SelectSize name="size" onChange={onChangeHandler}>
        <option>SELECT SIZE</option>
        {sizes.map((size, index) => (
          <option value={size} key={index} data-testid="size-options">
            {size}
          </option>
        ))}
      </SelectSize>
      <SelectQuantity name="quantity">
        {selectedQuantity.map((q, index) => (
          <option value={q} key={index} data-testid="qty-options">
            {q}
          </option>
        ))}
      </SelectQuantity>
    </FlexContainer>
  );
}

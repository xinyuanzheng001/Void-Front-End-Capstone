import React, { useState, useEffect } from 'react';
import {
  SelectSize,
  SelectQuantity,
  AddItem,
  FavIcon
} from '../styles/Select.styled';

export default function SizeSelector({ sizes, defaultSize, onChangeHandler }) {
  const [selectedSize, setSelectedSize] = useState(defaultSize);
  useEffect(() => {
    setSelectedSize(defaultSize);
  }, [defaultSize]);
  const changeSize = (e) => {
    setSelectedSize(e.target.value);
    onChangeHandler(e.target.value);
  };
  return (
    <SelectSize name="size" onChange={changeSize} value={selectedSize}>
      <option value="">SELECT SIZE</option>
      {sizes.map((size, index) => (
        <option value={size} key={index} data-testid="size-options">
          {size}
        </option>
      ))}
    </SelectSize>
  );
}

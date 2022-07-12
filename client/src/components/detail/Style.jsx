import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FlexContainer } from '../styles/Container.styled';
import { FlexImageContainer, CircleImage } from '../styles/Image.styled';
import { LineThroughPrice, DiscountPrice } from '../styles/Price.styled';
import Select from './Select';
import './style.css';

export default function Style() {
  const productStyle = useSelector((state) => state.productStyle);
  const { results } = productStyle.productStyle;
  const [selectedStyle, setSelectedStyle] = useState(0);
  const allKeys = Object.keys(results);
  const allStyles = allKeys.map((key) => [
    results[key].style_id,
    results[key].photos[0]
  ]);
  const skus = results[selectedStyle].skus;
  const sizes = [];
  const quantity = [];
  for (let key in skus) {
    if (skus[key].quantity > 0) {
      sizes.push(skus[key].size);
      quantity.push(skus[key].quantity);
    }
  }
  return (
    <div>
      <p>
        <b>STYLE ></b> SELECTED STYLE
      </p>
      {results[selectedStyle].sale_price === null ? (
        <p>${Number(results[selectedStyle].original_price)}</p>
      ) : (
        <FlexContainer>
          <LineThroughPrice>
            ${Number(results[selectedStyle].original_price)}
          </LineThroughPrice>
          <DiscountPrice>
            <b>${Number(results[selectedStyle].sale_price)}</b>
          </DiscountPrice>
        </FlexContainer>
      )}
      <FlexImageContainer>
        {allStyles.map((style, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`myCheckbox${index}`}
              name="selected"
              checked={selectedStyle === index}
              onChange={() => setSelectedStyle(index)}
            />
            <label htmlFor={`myCheckbox${index}`}>
              <CircleImage src={style[1].thumbnail_url} alt="style img" />
            </label>
          </div>
        ))}
      </FlexImageContainer>
      <Select sizes={sizes} quantity={quantity} />
    </div>
  );
}

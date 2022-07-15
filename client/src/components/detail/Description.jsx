import React from 'react';
import { useSelector } from 'react-redux';
import {
  DescriptionContainer,
  DescriptionText,
  Features,
  CheckIcon
} from '../styles/Description.styled';

export default function Description() {
  const productDetail = useSelector((state) => state.productDetail);
  const { slogan, description, features } = productDetail.productDetail;

  return (
    <DescriptionContainer>
      <DescriptionText>
        <h2>{slogan}</h2>
        <p>{description}</p>
      </DescriptionText>
      <Features>
        {features.map((feature, index) => (
          <p key={index}>
            <CheckIcon className="fa-solid fa-check"></CheckIcon>
            {feature.value}
          </p>
        ))}
      </Features>
    </DescriptionContainer>
  );
}

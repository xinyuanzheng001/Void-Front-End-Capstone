import React from 'react';
import { CheckStyled } from './styles/Outfits.styled';

export default function ComparisonTableEntry({ item }) {
  const { hasRelatedFeature, hasProductFeature, feature } = item;
  var relatedCheck = '';
  var productCheck = '';
  if (hasRelatedFeature) {
    relatedCheck = <CheckStyled className="fa-solid fa-check" />;
  }
  if (hasProductFeature) {
    productCheck = <CheckStyled className="fa-solid fa-check" />;
  }

  return (
    <tr>
      <td>
        <p>{productCheck}</p>
      </td>
      <td>{feature}</td>
      <td>{relatedCheck}</td>
    </tr>
  );
}

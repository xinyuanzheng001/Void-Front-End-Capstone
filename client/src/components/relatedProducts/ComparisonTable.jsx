import React from 'react';
import ComparisonTableEntry from './ComparisonTableEntry';
import combineThem from './Helpers/helperFunctions'

export default function ComparisonTable({
  relatedFeatures,
  relatedName,
  productFeatures,
  productName
}) {
  console.log(relatedFeatures[0]);
  console.log(relatedName);
  console.log({ productFeatures });

  var combinedFeatures = combineThem(relatedFeatures, productFeatures);

  console.log(
    'combinedFeatures',
    combineThem(relatedFeatures, productFeatures)
  );
  var comparisons = combinedFeatures.map((item, index) => {
    console.log({item})
    return (

      <ComparisonTableEntry item={item} key={item.feature + index} />
    )
  })
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th style={{width: '25%', backgroundColor:'#458161'}}>{productName}</th>
            <th style={{width: '50%', backgroundColor:'#458161'}}></th>
            <th style={{width: '25%', backgroundColor:'#458161'}}>{relatedName}</th>
          </tr>
        {comparisons}
        </tbody>
      </table>
    </>
  );
}

import React from 'react';
import { useSelector } from 'react-redux';

export default function ProductBreakdown() {
  const { productMetaData } = useSelector((state) => state.productMetaData);

  const characteristics = productMetaData.characteristics;
  let charartisticList = Object.keys(characteristics);

  const labels = {
    Size: ['A size too small', 'A size too wide'],
    Width: ['Too narrow', 'Too wide'],
    Comfort: ['Uncomfortable', 'Perfect'],
    Quality: ['Poor', 'Perfect'],
    Length: ['Runs short', 'Runs long'],
    Fit: ['Runs tight', 'Runs loose']
  };


  return (
    <>
      {charartisticList.map((char) => {
        return (
          <div key={characteristics[char].id}>
            <p> {char}</p>
            <p>{characteristics[char].value}</p>
            <p>
              {labels[char][0]} {labels[char][1]}
            </p>
          </div>
        );
      })}
    </>
  );
}

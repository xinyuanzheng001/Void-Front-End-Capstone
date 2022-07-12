import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function ImageGallery() {
  const [currentImage, setCurrentImage] = useState('');
  const productStyle = useSelector((state) => state.productStyle);
  const { results } = productStyle.productStyle;
  const show = results[2].photos;
  show.map((item) => console.log('url----', item.url));
  console.log(results);
  return (
    <div
      style={{
        height: '60vh',
        width: '70%',
        border: '1px red solid',
        display: 'flex'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '20px'
        }}
      >
        {show.map((item, index) => (
          <img
            src={item.thumbnail_url}
            alt="img"
            key={index}
            style={{ width: '50px', height: '50px', margin: '5px' }}
            onClick={(e) => setCurrentImage(e.target.src)}
          />
        ))}
      </div>
      <img src={currentImage} />
    </div>
  );
}

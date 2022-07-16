import React from 'react';

import { ImageModalStyle, ImageBodyStyle } from '../styles/Modals.styled';

export default function ImageModal({ show, url }) {
  if (!show) {
    return null;
  }

  console.log(show);

  return (
    <ImageModal>
      <ImageBodyStyle>
        <img src={url}></img>
      </ImageBodyStyle>
    </ImageModal>
  );
}

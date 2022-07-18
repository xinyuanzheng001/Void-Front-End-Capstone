import React from 'react';
import ReactDOM from 'react-dom';

import { Modal, ModalImage } from '../styles/Modals.styled';

export default function ImageModal({ showImage, setShowImage, url }) {
  if (!showImage[1] || url !== showImage[0]) {
    return;
  }

  return ReactDOM.createPortal(
    <Modal
      onClick={() => {
        setShowImage([url, false]);
      }}
    >
      <ModalImage>
        <img
          src={url}
          onClick={() => {
            setShowImage([url, false]);
          }}
        ></img>
      </ModalImage>
    </Modal>,
    document.getElementById('root')
  );
}

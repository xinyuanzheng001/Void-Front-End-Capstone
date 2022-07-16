import React, { useState } from 'react';

//Components
import ImageModal from './ImageModal';

//Helper Functions
import isImage from '../helpers/isImage';

//Styles
import { ReviewImages } from '../styles/ReviewTiles.styled';

export default function ReviewStars({ photos }) {
  const [show, setShow] = useState(false);

  const galleryBuilder = (photoArray) => {
    let gallery = [];

    for (let photo of photoArray) {
      if (isImage(photo.url)) {
        gallery.push(
          <span key={photo.id}>
            <img

              src={photo.url}
              onClick={() => setShow(true)}
            ></img>
            <ImageModal show={show} url={photo.url} />
          </span>
        );
      }
    }
    return gallery;
  };

  return <ReviewImages>{galleryBuilder(photos)}</ReviewImages>;
}

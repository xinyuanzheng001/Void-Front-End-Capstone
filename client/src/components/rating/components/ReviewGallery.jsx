import React from 'react';

//Helper Functions
import isImage from '../helpers/isImage';

//Styles
import { ReviewImages } from '../styles/ReviewTiles.styled';

export default function ReviewStars({ photos }) {
  const galleryBuilder = (photoArray) => {
    let gallery = [];

    for (let photo of photoArray) {
      if (isImage(photo.url)) {
        gallery.push(<img key={photo.id} src={photo.url}></img>);
      }
    }
    return gallery;
  };

  return <ReviewImages>{galleryBuilder(photos)}</ReviewImages>;
}

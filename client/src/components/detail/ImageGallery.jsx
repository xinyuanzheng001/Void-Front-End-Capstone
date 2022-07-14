import React, { useState, useEffect } from 'react';
import {
  FillImage,
  SquareImage,
  SquareImageContainer,
  ImageGalleryContainer,
  FSiconUpDownArrow,
  FSiconLeftRightArrow,
  FillImageContainer,
  FSiconExpand,
  FSRightArrowAndExpandContainer
} from '../styles/Image.styled';

export default function ImageGallery({ style, expandViewController }) {
  const [currentImage, setCurrentImage] = useState('');
  const [displayList, setDisplayList] = useState([]);
  const [firstImageIndex, setFirstImageIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandView, setExpandView] = useState(false);
  useEffect(() => {
    setCurrentImage(style[0].url);
    if (style.length > 7) {
      setDisplayList(style.slice(0, 7));
    } else {
      setDisplayList(style.slice());
    }
    setFirstImageIndex(0);
    setCurrentImageIndex(0);
  }, [style]);
  const onClickHandler = (src) => {
    setCurrentImage(src);
    let a;
    for (let i = 0; i < style.length; i++) {
      if (src === style[i].url) {
        a = i;
      }
    }
    setCurrentImage(src);
    setCurrentImageIndex(a);
  };
  const nextDisplayList = () => {
    setDisplayList(style.slice(firstImageIndex + 1, firstImageIndex + 8));
    setFirstImageIndex(firstImageIndex + 1);
  };
  const prevDisplayList = (reset) => {
    if (reset !== undefined) {
      setDisplayList(style.slice(0, 7));
    }
    setDisplayList(
      style.slice(
        firstImageIndex - 1 >= 0 ? firstImageIndex - 1 : 0,
        firstImageIndex === 0 ? 7 : firstImageIndex + 6
      )
    );
    setFirstImageIndex(firstImageIndex - 1 >= 0 ? firstImageIndex - 1 : 0);
  };
  const nextDisplayImage = () => {
    if (currentImageIndex >= 3) {
      nextDisplayList();
    }
    setCurrentImage(style[currentImageIndex + 1].url);
    setCurrentImageIndex(currentImageIndex + 1);
  };
  const prevDisplayImage = () => {
    if (currentImageIndex > 6) {
      prevDisplayList();
    } else {
      prevDisplayList(1);
    }
    setCurrentImage(style[currentImageIndex - 1].url);
    setCurrentImageIndex(currentImageIndex - 1);
  };
  const expandViewHandler = () => {
    expandViewController(!expandView);
    setExpandView(!expandView);
  };
  return (
    <ImageGalleryContainer style={{ width: expandView ? '100%' : '' }}>
      {/* <SquareImageContainer style={{ margin: 'auto 0' }}> */}
      <SquareImageContainer>
        {displayList.length !== 0 && displayList[0].url !== style[0].url && (
          <FSiconUpDownArrow
            className="fa-solid fa-angle-up"
            onClick={prevDisplayList}
            // style={{ marginBottom: '25px' }}
          ></FSiconUpDownArrow>
        )}
        {displayList.map((item, index) => (
          <SquareImage
            src={item.url}
            alt="img"
            key={index}
            onClick={(e) => onClickHandler(e.target.src)}
            style={{
              border: currentImage === item.url ? '2px red solid' : ''
            }}
          />
        ))}
        {displayList.length !== 0 &&
          displayList[displayList.length - 1].url !==
            style[style.length - 1].url && (
            <FSiconUpDownArrow
              className="fa-solid fa-angle-down"
              onClick={nextDisplayList}
              // style={{ marginTop: '25px' }}
            ></FSiconUpDownArrow>
          )}
      </SquareImageContainer>
      <FillImageContainer>
        {displayList.length !== 0 && currentImageIndex !== 0 && (
          <FSiconLeftRightArrow
            className="fa-solid fa-angle-left"
            onClick={prevDisplayImage}
            style={{ paddingLeft: '30px' }}
          />
        )}
        <FillImage src={currentImage} />
        <FSRightArrowAndExpandContainer>
          <FSiconExpand
            className="fa-solid fa-expand"
            onClick={expandViewHandler}
          ></FSiconExpand>
          {displayList.length !== 0 &&
            currentImageIndex !== style.length - 1 && (
              <FSiconLeftRightArrow
                className="fa-solid fa-angle-right"
                onClick={nextDisplayImage}
                style={{ paddingBottom: '25px' }}
              />
            )}
        </FSRightArrowAndExpandContainer>
      </FillImageContainer>
    </ImageGalleryContainer>
  );
}

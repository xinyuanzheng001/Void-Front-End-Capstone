import React, { useState, useEffect } from 'react';
import {
  SideBySideMagnifier,
  GlassMagnifier,
  Magnifier,
  MagnifierContainer,
  PictureInPictureMagnifier,
  MagnifierPreview,
  MagnifierZoom
} from 'react-image-magnifiers';
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
import SquareThumbnailImage from './SquareThumbnailImage';
import minus from '../../../images/minus.png';

export default function ImageGallery({ style, expandViewController }) {
  const [currentImage, setCurrentImage] = useState('');
  const [displayList, setDisplayList] = useState([]);
  const [firstImageIndex, setFirstImageIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandView, setExpandView] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [start, setStart] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [test, setTest] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, []);
  const handleMouseMove = (event) => {
    setCoords({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop
    });
  };
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

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    console.log(window.innerWidth, windowWidth);
  }, []);

  console.log();
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
    if (firstImageIndex + 7 < style.length) {
      setDisplayList(style.slice(firstImageIndex + 1, firstImageIndex + 8));
      setFirstImageIndex(firstImageIndex + 1);
    }
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
    setZoom(false);
  };
  return (
    <>
      {displayList.length !== 0 && (
        <SquareThumbnailImage
          displayList={displayList}
          prevDisplayList={prevDisplayList}
          onClickHandler={onClickHandler}
          currentImage={currentImage}
          nextDisplayList={nextDisplayList}
          style={style}
        />
      )}
      <ImageGalleryContainer
        style={{ width: expandView ? '100%' : '', overflow: 'hidden' }}
      >
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
          {displayList.length !== 0 && currentImageIndex !== 0 && !test && (
            <FSiconLeftRightArrow
              className="fa-solid fa-angle-left"
              onClick={prevDisplayImage}
              style={{ paddingLeft: '30px' }}
            />
          )}
          {/* {expandView && windowWidth > 768 ? ( */}
          {expandView ? (
            zoom ? (
              <MagnifierContainer
                style={{ maxWidth: '100%', display: 'flex', maxHeight: '100%' }}
              >
                <MagnifierPreview
                  imageSrc={currentImage}
                  style={{ width: '25%', margin: 'auto 5%' }}
                  onZoomStart={() => setStart(true)}
                  onZoomEnd={() => setStart(false)}
                />
                {start ? (
                  <MagnifierZoom
                    imageSrc={currentImage}
                    style={{ width: '62.5%', maxHeight: '100%' }}
                  />
                ) : (
                  <img
                    src={currentImage}
                    style={{
                      width: '62.5%',
                      objectFit: 'contain',
                      maxHeight: '100%',
                      transform: test ? 'scale(2.5)' : '',
                      transformOrigin: `${coords.x}px ${coords.y}px`
                    }}
                    onClick={() => setTest(!test)}
                    onMouseMove={handleMouseMove}
                  />
                )}
              </MagnifierContainer>
            ) : (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  // overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <img
                  id="img_id"
                  src={currentImage}
                  onClick={() => setZoom(true)}
                  style={{
                    transform: test ? 'scale(2.5)' : '',
                    transformOrigin: `${coords.x}px ${coords.y}px`,
                    objectFit: 'contain',
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    cursor: test ? 'zoom-out' : 'crosshair'
                  }}
                  onClick={() => setTest(!test)}
                  onMouseMove={handleMouseMove}
                />
              </div>
            )
          ) : (
            <FillImage
              id="img_id"
              src={currentImage}
              onClick={expandViewHandler}
            />
          )}
          {!test && (
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
          )}
        </FillImageContainer>
      </ImageGalleryContainer>
    </>
  );
}

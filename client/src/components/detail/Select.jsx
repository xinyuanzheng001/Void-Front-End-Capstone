import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlexContainer, FlexSelectContainer } from '../styles/Container.styled';
import { SingleStarOutline, HeartIcon } from '../styles/Stars.styled';
import {
  SelectSize,
  SelectQuantity,
  AddItem,
  FavIcon,
  ErrorMsg,
  SuccessMsg
} from '../styles/Select.styled';
import addItemToCart from '../../actions/cartAction';
import star from '../../images/star.png';
import heart from '../../images/heart-solid.svg';
import SizeSelector from './SizeSelector';
import QtySelector from './QtySelector';

export default function Select({ sizes, quantity, style }) {
  const localCarts = JSON.parse(localStorage.getItem('cartItems'));

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQty, setSelectedQty] = useState(1);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const productDetail = useSelector((state) => state.productDetail);
  const { id, name } = productDetail.productDetail;

<<<<<<< HEAD
  // const [defaultSize, setDefaultSize] = useState('');
  // const [defaultQty, setDefaultQty] = useState(0);
  // const [fav, setFav] = useState(false);

  // useEffect(() => {
  //   const currentProduct = localCarts.filter(
  //     (item) => item.product_id === id && item.style_id === style.style_id
  //   );
  //   if (currentProduct.length >= 1) {
  //     setDefaultSize(currentProduct[0].selected_size);
  //     setDefaultQty(currentProduct[0].selected_qty);
  //     setFav(currentProduct[0].favorite);
  //   } else {
  //     setDefaultSize('');
  //     setDefaultQty(0);
  //     setFav(false);
  //   }
  //   console.log(currentProduct);
  //   console.log(defaultSize);
  //   console.log(defaultQty);
  // }, [style.style_id]);
=======
>>>>>>> cfdacdfaf5ec75c5eb24b638e5fa7630e60073d4
  const currentProduct = localCarts
    ? localCarts.filter(
        (item) => item.product_id === id && item.style_id === style.style_id
      )
    : [];
<<<<<<< HEAD
  const defaultQty =
    currentProduct.length >= 1 ? currentProduct[0].selected_qty : 0;
  const defaultSize =
    currentProduct.length >= 1 ? currentProduct[0].selected_size : '';
=======
  const [defaultQty, setDefaultQty] = useState(
    currentProduct.length >= 1 ? currentProduct[0].selected_qty : 1
  );
  const [defaultSize, setDefaultSize] = useState(
    currentProduct.length >= 1 ? currentProduct[0].selected_size : ''
  );
>>>>>>> cfdacdfaf5ec75c5eb24b638e5fa7630e60073d4
  const fav = currentProduct.length >= 1 ? currentProduct[0].favorite : false;
  useEffect(() => {
    if (currentProduct.length !== 0) {
      setDefaultQty(currentProduct[0].selected_qty);
      setDefaultSize(currentProduct[0].selected_size);
      setSelectedSize(currentProduct[0].selected_size);
      setSelectedQty(currentProduct[0].selected_qty);
    } else {
      setDefaultQty(1);
      setDefaultSize('');
      setSelectedQty(1);
      setSelectedSize('');
    }
    setError(false);
    setSuccess(false);
  }, [style.style_id]);
  const dispatch = useDispatch();

  const generateArray = (num) => {
    const range = [];
    for (let i = 0; i < num && i < 15; i++) {
      range.push(i + 1);
    }
    return range;
  };
  const [selectedQuantity, setSelectedQuantity] = useState(
    generateArray(quantity[0])
  );
  const onChangeHandler = (s) => {
    setSelectedQuantity(generateArray(quantity[sizes.indexOf(s)]));
    setSelectedSize(s);
  };

  const onQtyChangeHandler = (q) => {
    setSelectedQty(q);
  };

  const addItemHandler = () => {
    if (selectedSize === '') {
      setError(true);
      setSuccess(false);
    } else {
      const item = {
        product_id: id,
        product_name: name,
        selected_size: selectedSize,
        selected_qty: selectedQty,
        style_id: style.style_id,
        style_name: style.name,
        price:
          style.sale_price === null ? style.original_price : style.sale_price,
        favorite: true
      };
      dispatch(addItemToCart(item));
      setError(false);
      setSuccess(true);
    }
  };
  return (
    <>
      {error && <ErrorMsg>Please Select a Size</ErrorMsg>}
      {success && <SuccessMsg>Added to your cart</SuccessMsg>}
      <FlexSelectContainer>
        <SizeSelector
          sizes={sizes}
          defaultSize={selectedSize}
          onChangeHandler={onChangeHandler}
        />
        <QtySelector
          selectedQuantity={selectedQuantity}
          defaultQty={selectedQty}
          onQtyChangeHandler={onQtyChangeHandler}
        />
      </FlexSelectContainer>
      <FlexContainer>
        <AddItem onClick={addItemHandler}>
          <p>
            <span style={{ margin: 'auto 0', marginLeft: '15px' }}>
              ADD TO BAG
            </span>
            <i
              className="fa-solid fa-plus"
              style={{ float: 'right', marginRight: '15px' }}
            ></i>
          </p>
        </AddItem>
        <FavIcon>
          <div style={{ margin: 'auto' }}>
            <p style={{ textAlign: 'center' }}>
              {fav ? (
                // <SingleStarOutline src={heart} style={{ color: 'red' }} />
                <i
                  className="fa-solid fa-heart"
                  style={{
                    color: 'red',
                    padding: 'auto',
                    fontSize: '25px'
                  }}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-star"
                  style={{
                    fontSize: '25px',
                    color: 'lightgreen'
                  }}
                ></i>
              )}
            </p>
          </div>
        </FavIcon>
      </FlexContainer>
    </>
  );
}

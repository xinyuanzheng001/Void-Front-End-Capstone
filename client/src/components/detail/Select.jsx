import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlexContainer, FlexSelectContainer } from '../styles/Container.styled';
import { SingleStarOutline, HeartIcon } from '../styles/Stars.styled';
import {
  SelectSize,
  SelectQuantity,
  AddItem,
  FavIcon
} from '../styles/Select.styled';
import addItemToCart from '../../actions/cartAction';
import star from '../../images/star.png';
import heart from '../../images/heart-solid.svg';

export default function Select({ sizes, quantity, style }) {
  const localCarts = JSON.parse(localStorage.getItem('cartItems'));

  const [error, setError] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQty, setSelectedQty] = useState(1);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const productDetail = useSelector((state) => state.productDetail);
  const { id, name } = productDetail.productDetail;

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
  const currentProduct = localCarts
    ? localCarts.filter(
        (item) => item.product_id === id && item.style_id === style.style_id
      )
    : [];
  const defaultQty =
    currentProduct.length >= 1 ? currentProduct[0].selected_qty : 0;
  const defaultSize =
    currentProduct.length >= 1 ? currentProduct[0].selected_size : '';
  const fav = currentProduct.length >= 1 ? currentProduct[0].favorite : false;
  console.log(currentProduct);
  console.log(defaultQty);
  console.log(defaultSize);
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
  const onChangeHandler = (e) => {
    setSelectedQuantity(generateArray(quantity[sizes.indexOf(e.target.value)]));
    setSelectedSize(e.target.value);
  };

  const addItemHandler = () => {
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
  };
  return (
    <>
      <FlexSelectContainer>
        <SelectSize
          name="size"
          onChange={onChangeHandler}
          defaultValue={defaultSize}
        >
          <option value="">SELECT SIZE</option>
          {sizes.map((size, index) => (
            <option value={size} key={index} data-testid="size-options">
              {size}
            </option>
          ))}
        </SelectSize>
        <SelectQuantity
          name="quantity"
          onChange={(e) => setSelectedQty(e.target.value)}
          defaultValue={Number(defaultQty)}
        >
          {selectedQuantity.map((q, index) => (
            <option value={q} key={index} data-testid="qty-options">
              {q}
            </option>
          ))}
        </SelectQuantity>
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

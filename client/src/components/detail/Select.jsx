import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlexContainer, FlexSelectContainer } from '../styles/Container.styled';
import { SingleStarOutline } from '../styles/Stars.styled';
import {
  SelectSize,
  SelectQuantity,
  AddItem,
  FavIcon
} from '../styles/Select.styled';
import addItemToCart from '../../actions/cartAction';
import star from '../../images/star.png';

export default function Select({ sizes, quantity, style }) {
  const [fav, setFav] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQty, setSelectedQty] = useState(1);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [defaultSize, setDefaultSize] = useState('');
  const [defaultQty, setDefaultQty] = useState(0);
  const [error, setError] = useState(false);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const productDetail = useSelector((state) => state.productDetail);
  const { id, name } = productDetail.productDetail;

  useEffect(() => {
    setCurrentProduct(cartItems.filter((item) => item.product_id === id));
    if (currentProduct.length !== 0) {
      console.log(currentProduct[0].selected_qty);
      console.log(currentProduct[0].selected_size);
      setDefaultQty(Number(currentProduct[0].selected_qty));
      setDefaultSize(currentProduct[0].selected_size);
      console.log('-------------');
    }
  }, [id]);

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
      favorite: fav
    };
    console.log(item);
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
          {currentProduct.length === 0 && <option value="">SELECT SIZE</option>}
          {sizes.map((size, index) => (
            <option value={size} key={index} data-testid="size-options">
              {size}
            </option>
          ))}
        </SelectSize>
        <SelectQuantity
          name="quantity"
          onChange={(e) => setSelectedQty(e.target.value)}
          defaultValue={defaultQty}
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
              <SingleStarOutline src={star} />
            </p>
          </div>
        </FavIcon>
      </FlexContainer>
    </>
  );
}

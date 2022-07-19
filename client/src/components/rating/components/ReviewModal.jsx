import React, { useState } from 'react';
import ReactDOM from 'react-dom';

//Styles
import { Modal, ModalReviewStyle } from '../styles/Modals.styled';
import { ReviewButton } from '../styles/ReviewButton.styled';

export default function ModalReview({
  showForm,
  setShowForm,
  productName,
  id,
  characteristics
}) {
  const [reviewSummary, setReviewSummary] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  let charartisticList = Object.keys(characteristics);

  const labels = {
    Size: ['A size too small', 'A size too wide'],
    Width: ['Too narrow', 'Too wide'],
    Comfort: ['Uncomfortable', 'Perfect'],
    Quality: ['Poor', 'Premium'],
    Length: ['Runs short', 'Runs long'],
    Fit: ['Runs tight', 'Runs loose']
  };
  console.log(showForm);

  if (!showForm) {
    return;
  }

  return ReactDOM.createPortal(
    <Modal
      onClick={() => {
        setShowForm(false);
      }}
    >
      <ModalReviewStyle onClick={(e) => e.stopPropagation()}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const review = {
              product_id: id,
              rating: 0, //Add stars
              summary: reviewSummary,
              body: reviewBody,
              recommend: false, //Add radio
              name: nickname,
              email: email,
              characteristics: {
                characterisitic_id: 0 //Add radio for each
              }
            };
            setShowForm(!showForm);
          }}
        >
          <h3>Write Your Review</h3>
          <h4>About the {productName}</h4>
          <label htmlFor="review-summary">Review Summary</label>
          <input
            id="review-summary"
            type="text"
            maxLength="60"
            onChange={(e) => {
              setReviewSummary(e.target.value);
            }}
          ></input>
          <label htmlFor="review-body">Review Body*</label>
          <textarea
            id="review-body"
            required
            maxLength="1000"
            cols="50"
            rows="20"
            placeholder="Why did you like the product or not?"
            onChange={(e) => {
              setReviewBody(e.target.value);
            }}
          ></textarea>
          <label htmlFor="nickname">Your Nickname *</label>
          <input
            id="yourNickname"
            required
            type="text"
            maxLength="60"
            placeholder="Example: jackson11!"
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          ></input>
          <p>For privacy reasons, do not use your full name or email address</p>
          <label htmlFor="email">Your email *</label>
          <input
            id="email"
            required
            type="email"
            maxLength="60"
            placeholder="Example: jackson11@email.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <p>For authentication reasons, you will not be emailed</p>
          <ReviewButton>Submit Review</ReviewButton>
        </form>
      </ModalReviewStyle>
    </Modal>,
    document.getElementById('root')
  );
}

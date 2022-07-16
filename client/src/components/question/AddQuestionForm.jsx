import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function AddQuestionForm(props) {
  const [questionText, setQuestionText] = useState('');
  const [questionName, setQuestionName] = useState('');
  const [questionEmail, setQuestionEmail] = useState('');

  async function postQuestion() {
    const config = {
      params: { product_id: props.product_id},
      headers: {
        Authorization: process.env.API_KEY
      },
      // data: {
      //   body: questionText,
      //   name: questionName,
      //   email: questionEmail,
      //   product_id: props.product_id
      // }
    };
      return axios.post(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions`, config)
  }

  return (
    <div>
      <h3>Ask Your Question</h3>
      <h4>About the {props.productName}</h4>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          postQuestion()
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        }}
      >
        <label htmlFor="yourQuestion">Your Question</label>
        <textarea
          id="yourQuestion"
          required
          maxLength="1000"
          cols="50"
          rows="20"
          placeholder="Question"
          onChange={(e) => {
            setQuestionText(e.target.value);
          }}
        ></textarea>
        <label htmlFor="yourNickName">What is your nickname</label>
        <input
          id="yourNickname"
          required
          type="text"
          maxLength="60"
          placeholder="Example: jackson11!"
          onChange={(e) => {
            setQuestionName(e.target.value);
          }}
        ></input>
        <p>For privacy reasons, do not use your full name or email address</p>
        <label htmlFor="yourEmail">Your email</label>
        <input
          id="yourEmail"
          required
          type="email"
          maxLength="60"
          placeholder="Why did you like the product or not?"
          onChange={(e) => {
            setQuestionEmail(e.target.value);
          }}
        ></input>
        <p>For authentication reasons, you will not be emailed</p>
        <button>Submit A Question</button>
      </form>
    </div>
  );
}

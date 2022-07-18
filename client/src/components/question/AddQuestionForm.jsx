import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { QuestionModal, ModalForm } from './styles/QuestionModal';
import ReactDOM from 'react-dom';

export default function AddQuestionForm(props) {
  const [questionText, setQuestionText] = useState('');
  const [questionName, setQuestionName] = useState('');
  const [questionEmail, setQuestionEmail] = useState('');

  async function postQuestion() {
    var data = JSON.stringify({
      body: `${questionText}`,
      name: `${questionName}`,
      email: `${questionEmail}`,
      product_id: Number(props.product_id)
    });
    var config = {
      method: 'post',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions',
      headers: {
        Authorization: `${process.env.API_KEY}`,
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return ReactDOM.createPortal(
    (<QuestionModal>
      <ModalForm>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postQuestion();
            props.setQuestionForm(!props.showQuestionForm);
          }}
        >
          <h3>Ask Your Question</h3>
          <h4>About the {props.productName}</h4>
          <button
            onClick={() => props.setQuestionForm(!props.showQuestionForm)}
          >
            Close Form
          </button>
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
      </ModalForm>
    </QuestionModal>)
  , document.getElementById('root'));
}

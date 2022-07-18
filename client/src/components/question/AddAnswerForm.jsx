import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { QuestionModal, ModalForm } from './styles/QuestionModal';

export default function AddAnswerForm(props) {
  const [answerText, setAnswerText] = useState('');
  const [answerName, setAnswerName] = useState('');
  const [answerEmail, setAnswerEmail] = useState('');

  async function postAnswer() {
    var data = JSON.stringify({
      body: `${answerText}`,
      name: `${answerName}`,
      email: `${answerEmail}`,
      photos: []
    });
    var config = {
      method: 'post',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${Number(
        props.question_id
      )}/answers`,
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

  return (
    <QuestionModal>
      <ModalForm>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postAnswer();
            console.log('Thanks for the Answer!');
            props.setAnswerForm(!props.showAnswerForm);
          }}
        >
          <h3>Submit your Answer</h3>
          <h4>productName:Question Body</h4>
          <button onClick={() => props.setAnswerForm(!props.showAnswerForm)}>
            Close Form
          </button>
          <label htmlFor="yourQuestion">Your Answer</label>
          <textarea
            required
            id="yourAnswer"
            required
            maxLength="1000"
            cols="50"
            rows="20"
            placeholder="Answer"
            onChange={(e) => {
              setAnswerText(e.target.value);
            }}
          ></textarea>
          <label htmlFor="yourNickName">What is your nickname</label>
          <input
            id="yourNickname"
            required
            type="text"
            maxLength="60"
            placeholder="Example: jack543!"
            onChange={(e) => {
              setAnswerName(e.target.value);
            }}
          ></input>
          <p>For privacy reasons, do not use your full name or email address</p>
          <label htmlFor="yourEmail">Your email</label>
          <input
            id="yourEmail"
            required
            type="email"
            maxLength="60"
            placeholder="Example: jack@email.com"
            onChange={(e) => {
              setAnswerEmail(e.target.value);
            }}
          ></input>
          <p>For authentication reasons, you will not be emailed</p>
          <input
            multiple
            id="input"
            name="files[]"
            onChange={(e) => {
              if (document.getElementById('input').files.length < 5) {
                console.log(document.getElementById('input').files);
              }
            }}
            type="file"
            name="img"
            accept="image/*"
          />
          <button>Submit An Answer</button>
        </form>
      </ModalForm>
    </QuestionModal>
  );
}

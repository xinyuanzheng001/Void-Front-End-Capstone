import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function AddAnswerForm(props) {
  const [answerText, setAnswerText] = useState('');
  const [answerName, setAnswerName] = useState('');
  const [answerEmail, setAnswerEmail] = useState('');

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('Thanks for the Answer!');
        }}
      >
        <h3>Submit your Answer</h3>
        <h4>productName:Question Body</h4>
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
    </div>
  );
}

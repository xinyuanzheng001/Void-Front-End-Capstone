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
        Hi, add an answer!
        <input
          required
          type="text"
          placeholder="Answer"
          onChange={(e) => {
            setAnswerText(e.target.value);
          }}
        ></input>
        <input
          required
          type="text"
          placeholder="Nickname"
          onChange={(e) => {
            setAnswerName(e.target.value);
          }}
        ></input>
        <input
          required
          type="text"
          placeholder="E-mail Address"
          onChange={(e) => {
            setAnswerEmail(e.target.value);
          }}
        ></input>
        <button>Upload Photos</button>
        <button>Submit An Answer</button>
      </form>
    </div>
  );
}

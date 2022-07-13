import React from 'react';
import Answer from './Answer';
import HelpfulQuestion from './HelpfulQuestion';

export default function Question(props) {
  return (
    <div style={{ padding: '10px' }}>
      <h2 style={{ display: 'inline' }}>Q: </h2>
      <span>{props.question.question_body}</span>
      <HelpfulQuestion />
      <Answer />
    </div>
  );
}

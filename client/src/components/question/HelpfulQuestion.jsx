import React from 'react';

export default function HelpfulQuestion(props) {
  return (
    <div style={{ display: 'inline' }}>
      <span style={{ margin: '10px' }}>
        Helpful?
        <u
          style={{ margin: '5px' }}
          onClick={(e) => console.log('Thanks for the feedback!')}
        >
          Yes
        </u>
        <span>({props.helpfulness})</span>
      </span>
      <span style={{ margin: '10px' }}>|</span>
      <u
        onClick={() => props.setAnswerForm(!props.showAnswerForm)}
        style={{ margin: '10px' }}
      >
        Add Answer
      </u>
    </div>
  );
}

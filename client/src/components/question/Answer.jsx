import React from 'react';
import HelpfulAnswer from './HelpfulAnswer';
import LoadAnswers from './LoadAnswers';

export default function Answer(props) {
  return (
    <div style={{marginTop:'10px'}}>
      <div>
        <h2 style={{ display: 'inline' }}>A: </h2>
        <span>{props.answer.body}</span>
      </div>
      <span>
        by UserNameHere
        <span style={{margin:'5px'}}>DateGoesHere</span>
        <HelpfulAnswer />
      </span>
      <LoadAnswers />
    </div>
  );
}

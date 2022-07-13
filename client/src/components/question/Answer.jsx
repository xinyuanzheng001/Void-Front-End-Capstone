import React from 'react';
import HelpfulAnswer from './HelpfulAnswer';

export default function Answer(props) {
  return (
    <div style={{marginTop:'10px'}}>
      <div>
        <h2 style={{ display: 'inline' }}>A: </h2>
        <span>{props.answer.body}</span>
      </div>
      <span>
        by {props.answer.answerer_name}
        <span style={{margin:'5px'}}>{props.answer.date}</span>
        <HelpfulAnswer helpfulness={props.answer.helpfulness}/>
      </span>
    </div>
  );
}

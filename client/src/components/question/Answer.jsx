import React from 'react';
import HelpfulAnswer from './HelpfulAnswer';
import moment from 'moment';

export default function Answer(props) {
  return (
    <div style={{marginTop:'10px'}}>
      <div>
        <h3 style={{ display: 'inline' }}>A: </h3>
        <span>{props.answer.body}</span>
      </div>
      <span>
        by {props.answer.answerer_name}
        <span style={{margin:'5px'}}>{moment(`${props.answer.date}`).format("LL")}</span>
        <HelpfulAnswer helpfulness={props.answer.helpfulness}/>
      </span>
    </div>
  );
}

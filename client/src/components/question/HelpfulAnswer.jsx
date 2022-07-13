import React from 'react';

export default function HelpfulAnswer(props) {
  return (
    <div style={{ display: 'inline' }, {padding:'10px'}}>
      <span style={{ margin: '10px' }}>
        Helpful?
        <u style={{ margin: '5px' }}>Yes</u>
        <span>(#OfYeses)</span>
      </span>
      <span style={{ margin: '10px' }}>|</span>
      <u style={{ margin: '5px' }}>Report</u>
    </div>
  );
}

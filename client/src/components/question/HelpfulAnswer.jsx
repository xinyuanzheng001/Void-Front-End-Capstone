import React from 'react';

export default function HelpfulAnswer(props) {
  return (
    <div style={({ display: 'inline' }, { padding: '10px' })}>
      <span
        style={{ margin: '10px' }}
        onClick={() => console.log('Thanks for the feedback!')}
      >
        Helpful?
        <u style={{ margin: '5px' }}>Yes</u>
        <span>({props.helpfulness})</span>
      </span>
      <span style={{ margin: '10px' }}>|</span>
      <u
        style={{ margin: '5px' }}
        onClick={() => props.reportAnswer()}
      >
        Report
      </u>
    </div>
  );
}

import React from 'react';
import Answer from './Answer';
import HelpfulQuestion from './HelpfulQuestion';

export default function Question() {
  return (
    <div style={{ padding: '10px' }}>
      <h2 style={{ display: 'inline' }}>Q: </h2>
      <span>Question Text Goes Here!</span>
      <HelpfulQuestion />
      <Answer />
    </div>
  );
}

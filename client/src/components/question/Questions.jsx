import React from 'react';
import Question from './Question';
import MoreQuestions from './MoreQuestions';
import AddAQuestion from './AddAQuestion';

export default function Questions() {
  return (
    <div>
      <h2>Questions & Answers</h2>
      <div>
        <Question />
        <Question />
      </div>
      <MoreQuestions />
      <AddAQuestion />
    </div>
  );
}

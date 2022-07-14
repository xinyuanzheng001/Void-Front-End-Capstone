import React from 'react';
import Answer from './Answer';
import HelpfulQuestion from './HelpfulQuestion';
import LoadAnswers from './LoadAnswers';
import AddAnswerForm from './AddAnswerForm';
import { useState } from 'react';

export default function Question(props) {
  const [showAnswerForm, setAnswerForm] = useState(false);

  let AnswerList = Object.keys(props.question.answers)
    .slice(0, 2)
    .map((objKey) => {
      return (
        <Answer
          key={props.question.answers[objKey].id}
          answer={props.question.answers[objKey]}
        />
      );
    });

  let showLoadAnswers =
    Object.keys(props.question.answers).length > 2 ? <LoadAnswers /> : <></>;

  let answerForm;
  if (showAnswerForm) {
    answerForm = <AddAnswerForm />;
  }

  return (
    <div style={{ padding: '10px' }}>
      <h2 style={{ display: 'inline' }}>Q: </h2>
      <span>{props.question.question_body}</span>
      <HelpfulQuestion
        helpfulness={props.question.question_helpfulness}
        setAnswerForm={setAnswerForm}
        showAnswerForm={showAnswerForm}
      />
      {AnswerList}
      {showLoadAnswers}
      {answerForm}
    </div>
  );
}

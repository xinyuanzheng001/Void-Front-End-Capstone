import React from 'react';
import Answer from './Answer';
import HelpfulQuestion from './HelpfulQuestion';
import AddAnswerForm from './AddAnswerForm';
import { useState } from 'react';
import { ReviewButton } from '../rating/styles/ReviewButton.styled'

export default function Question(props) {
  const [showAnswerForm, setAnswerForm] = useState(false);
  const [howManyAnswers, setHowManyAnswers] = useState(2);

  let AnswerList = Object.keys(props.question.answers)
    .slice(0, howManyAnswers)
    .map((objKey) => {
      return (
        <Answer
          key={props.question.answers[objKey].id}
          answer={props.question.answers[objKey]}
        />
      );
    });

  let showLoadAnswers =
    Object.keys(props.question.answers).length > howManyAnswers ? (
      <ReviewButton onClick={() => setHowManyAnswers(howManyAnswers + 2)}>
        Load More Answers
      </ReviewButton>
    ) : (
      <></>
    );

  let answerForm;
  if (showAnswerForm) {
    answerForm = <AddAnswerForm />;
  }

  return (
    <div style={{ padding: '10px' }}>
      <h3 style={{ display: 'inline' }}>Q: {props.question.question_body} </h3>
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

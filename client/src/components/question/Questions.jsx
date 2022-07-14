import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Question from './Question';
import MoreQuestions from './MoreQuestions';
import AddAQuestion from './AddAQuestion';
import { useParams } from 'react-router';
import getProductQuestion from '../../actions/productQuestionAction';
import AddAnswerForm from './AddAnswerForm';
import AddQuestionForm from './AddQuestionForm';

export default function Questions() {
  let { id } = useParams();
  id = id >= 37311 ? id : 37311;
  const dispatch = useDispatch();
  const productQuestions = useSelector((state) => state.productQuestion);

  useEffect(() => {
    dispatch(getProductQuestion(id));
  }, [id, dispatch]);

  let QuestionsList;
  let showLoadQuestions;

  if (productQuestions.productQuestions) {
    showLoadQuestions =
      Object.keys(productQuestions.productQuestions.results).length > 4 ? (
        <MoreQuestions />
      ) : (
        <></>
      );

    QuestionsList = productQuestions.productQuestions.results
      .slice(0, 4)
      .map((question) => {
        return <Question key={question.question_id} question={question} />;
      });
  }

  return (
    <div>
      <h2>Questions & Answers</h2>
      <div>{QuestionsList}</div>
      {showLoadQuestions}
      <AddAQuestion />
      <AddAnswerForm />
      <AddQuestionForm />
    </div>
  );
}

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Question from './Question';
import MoreQuestions from './MoreQuestions';
import { useParams } from 'react-router';
import getProductQuestion from '../../actions/productQuestionAction';
import AddAnswerForm from './AddAnswerForm';
import AddQuestionForm from './AddQuestionForm';
import SearchQuestions from './SearchQuestions';

export default function Questions() {
  let { id } = useParams();
  id = id >= 37311 ? id : 37311;
  const dispatch = useDispatch();
  const productQuestions = useSelector((state) => state.productQuestion);
  const [showQuestionForm, setQuestionForm] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    dispatch(getProductQuestion(id));
  }, [id, dispatch]);

  let QuestionsList;
  let showLoadQuestions;
  let questionForm;

  if (showQuestionForm) {
    questionForm = (
      <AddQuestionForm product_id={id} productName={'insertProductName'} />
    );
  }

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
      <SearchQuestions
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div>{QuestionsList}</div>
      {showLoadQuestions}
      <button
        style={{ margin: '10px' }}
        onClick={() => setQuestionForm(!showQuestionForm)}
      >
        Add A Question
      </button>
      {questionForm}
    </div>
  );
}

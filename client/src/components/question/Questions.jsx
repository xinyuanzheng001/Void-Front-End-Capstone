import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Question from './Question';
import { useParams } from 'react-router';
import getProductQuestion from '../../actions/productQuestionAction';
import AddAnswerForm from './AddAnswerForm';
import AddQuestionForm from './AddQuestionForm';
import SearchQuestions from './SearchQuestions';
import { QuestionButton } from './styles/QuestionButton';

export default function Questions() {
  let { id } = useParams();
  id = id >= 37311 ? id : 37311;
  const dispatch = useDispatch();
  const productQuestions = useSelector((state) => state.productQuestion);
  const [showQuestionForm, setQuestionForm] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [howManyQuestions, setHowManyQuestions] = useState(4);

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
      Object.keys(productQuestions.productQuestions.results).length >
      howManyQuestions ? (
        <QuestionButton
          style={{ margin: '10px' }}
          onClick={() => {
            console.log(howManyQuestions);
            setHowManyQuestions(howManyQuestions + 2);
            console.log(howManyQuestions);
          }}
        >
          See More Questions
        </QuestionButton>
      ) : (
        <></>
      );

    QuestionsList = productQuestions.productQuestions.results
      .slice(0, howManyQuestions)
      .map((question) => {
        return <Question key={question.question_id} question={question} />;
      });
  }

  return (
    <>
      <h2>Questions & Answers</h2>
      <div
        style={{
          overflow: 'auto',
          maxHeight: '50vh',
          width: '100%',
          position: 'relative'
        }}
      >
        <SearchQuestions
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <div>{QuestionsList}</div>
      </div>
      <div id='buttonContainer' style={{
  margin: 'auto',
  width: '100%',
  padding: '3%'
}}>
      <QuestionButton
        onClick={() => setQuestionForm(!showQuestionForm)}
      >
        Add A Question
      </QuestionButton>
      {showLoadQuestions}
      </div>
      {questionForm}
    </>
  );
}

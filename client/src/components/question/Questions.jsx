import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Question from './Question';
import MoreQuestions from './MoreQuestions';
import AddAQuestion from './AddAQuestion';
import { useParams } from 'react-router';
import getProductQuestion from '../../actions/productQuestionAction'

export default function Questions() {
  let { id } = useParams();
  id = id >= 37311 ? id : 37311;
  const dispatch = useDispatch();
  const productQuestions = useSelector((state) => state.productQuestions);

  useEffect(() => {
    dispatch(getProductQuestion(id));
  }, [id, dispatch]);

  // let QuestionsList = productQuestions.map((question) => {
  //   return <Question key={Math.random()} question={question}/>
  // })

  return (
    <div>
      <h2>Questions & Answers</h2>
      <div>
        <Question />
        <Question />
       {/* {QuestionsList} */}
      </div>
      <MoreQuestions />
      <AddAQuestion />
    </div>
  );
}

import React from 'react';
import { useState } from 'react';
import { QuestionSearchBar } from './styles/QuestionSearchBar';

export default function SearchQuestions(props) {
  let searchValue = props.searchValue;
  let setSearchValue = props.setSearchValue;

  return (
    <>
      <form
        style={{display:'flex'}}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(`Searching for ${searchValue}`);
        }}
      >
        <QuestionSearchBar
          type="text"
          placeholder="Have a question? Search for answers…"
          onChange={(e) => setSearchValue(e.target.value)}
        ></QuestionSearchBar>
        <button>?</button>
      </form>
    </>
  );
}

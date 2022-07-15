import React from 'react';
import { useState } from 'react';

export default function SearchQuestions(props) {
  let searchValue = props.searchValue;
  let setSearchValue = props.setSearchValue;

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(`Searching for ${searchValue}`);
        }}
      >
        <input
          type="text"
          placeholder="Have a question? Search for answers…"
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <button>?</button>
      </form>
    </>
  );
}

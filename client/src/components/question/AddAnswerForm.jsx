import React from 'react';

export default function AddAnswerForm(props) {
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log('Thanks for the Answer!');
      }}>
        Hi, add an answer!
        <input required type="text" placeholder="Answer"></input>
        <input required type="text" placeholder="Nickname"></input>
        <input required type="text" placeholder="E-mail Address"></input>
        <button>Upload Photos</button>
        <button>Submit An Answer</button>
      </form>
    </div>
  );
}

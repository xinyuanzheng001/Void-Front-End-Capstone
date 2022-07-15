import React from 'react';

export default function AddQuestionForm(props) {
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(`Thanks for the Question!`);
      }}>
        Hi, add a question!
        <input required type="text" placeholder="Question"></input>
        <input required type="text" placeholder="Nickname"></input>
        <input required type="text" placeholder="E-mail Address"></input>
        <button>Submit A Question</button>
      </form>
    </div>
  );
}

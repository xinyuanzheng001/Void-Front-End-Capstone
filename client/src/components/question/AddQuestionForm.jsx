import React from 'react';

export default function AddQuestionForm(props) {
  return (
    <div>
      <form>
        Hi, add a question!
        <input type='text' defaultValue='Question'></input>
        <input type='text' defaultValue='Nickname'></input>
        <input type='text' defaultValue='E-mail Address'></input>
        <button>Submit A Question</button>
      </form>
    </div>
  );
}

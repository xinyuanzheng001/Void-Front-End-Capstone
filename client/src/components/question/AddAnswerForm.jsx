import React from 'react';

export default function AddAnswerForm(props) {
  return (
    <div>
      <form>
        Hi, add an answer!
        <input type="text" defaultValue="Answer"></input>
        <input type="text" defaultValue="Nickname"></input>
        <input type="text" defaultValue="E-mail Address"></input>
        <button>Upload Photos</button>
        <button>Submit An Answer</button>
      </form>
    </div>
  );
}

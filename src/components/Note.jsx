import React from "react";

function Note(words) {
  return (
    <div className="note">
      <h1>{words.title}</h1>
      <p>{words.content}</p>
      <button onClick={words.onDelete}>DELETE</button>
    </div>
  );
}

export default Note;

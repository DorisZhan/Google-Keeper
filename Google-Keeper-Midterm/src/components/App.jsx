import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notesArray from "../notes";

function App() {
  const [notes, setNotes] = useState(notesArray);
  const [noteInput, setNoteInput] = useState({ title: "", content: "" });

  function record(event) {
    const { name, value } = event.target;
    setNoteInput((currentInput) => ({ ...currentInput, [name]: value }));
  }

  function handleAdd(event) {
    event.preventDefault();
    if (noteInput.title && noteInput.content) {
      const highestKey =
        notes.length > 0 ? Math.max(...notes.map((note) => note.key)) : 0;
      const noteToAdd = { ...noteInput, key: highestKey + 1 };

      setNotes((currentNotes) => [...currentNotes, noteToAdd]);
      setNoteInput({ title: "", content: "" });
    }
  }

  function handleDelete(noteKey) {
    setNotes((currentNotes) =>
      currentNotes.filter((note) => note.key !== noteKey)
    );
  }

  return (
    <div>
      <Header />
      <form onSubmit={handleAdd}>
        <input
          name="title"
          placeholder="Title"
          value={noteInput.title}
          onChange={record}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteInput.content}
          onChange={record}
        />
        <button type="submit">Add</button>
      </form>
      {notes.map((note) => (
        <Note
          key={note.key}
          id={note.key}
          title={note.title}
          content={note.content}
          onDelete={handleDelete}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

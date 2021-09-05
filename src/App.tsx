import React from 'react';
import './App.css';
import { NewNoteInput } from './components/NewNoteInput';
import { useSelector } from "react-redux";
import { NotesState } from "./functions/notesReducer"

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  )

  return (
    <div className="wrapper">
      <NewNoteInput addNote={alert} />
      <hr/>
      <ul>
          {
            notes.map((note) => {
              return <li key={note}> {note} </li>
            })
          }
      </ul>
    </div>
  );
}

export default App;

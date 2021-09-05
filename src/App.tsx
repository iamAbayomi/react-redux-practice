import React from 'react';
import './App.css';
import { NewNoteInput } from './components/NewNoteInput';
import { useSelector, useDispatch } from "react-redux";
import { NotesState } from "./functions/notesReducer"
import { addNote } from "./functions/actions";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  )

  const dispatch = useDispatch()

  const onAddNote = (note: string) => {
    dispatch(addNote(note))
  }

  return (
    <div className="wrapper">
      <NewNoteInput addNote={onAddNote} />
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

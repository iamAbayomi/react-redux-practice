import React from 'react';
import './App.css';
import NewNoteInput from './components/NewNoteInput';

function App() {
  return (
    <div className="wrapper">
      <NewNoteInput />
      <hr/>
      <ul>
          <li>Some Note</li>
      </ul>
    </div>
  );
}

export default App;

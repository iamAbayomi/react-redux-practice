import React from 'react';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div>
        <input type="text" name="note" placeholder="Note" />
        <button>Add Note</button>
      </div>
      <hr/>
      <ul>
          <li>Some Note</li>
      </ul>
    </div>
  );
}

export default App;

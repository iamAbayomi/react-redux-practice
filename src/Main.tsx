import React from 'react'
import NoteInput from './components/NoteInput';

function App(){

    return(
        <div>
            <div className="input-section">
                <input
                    type="text"
                    name="note"
                    placeholder="Note"
                />
                <button>Add</button>
            </div>
            <hr/>
            <ul>

            </ul>
        </div>
    )
}

export default App;
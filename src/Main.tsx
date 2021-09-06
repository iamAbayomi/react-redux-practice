import React, { ChangeEvent, useState } from 'react'


function App(){
    const [note, setNote] = useState("")

    let notes: string[] = []

    const updateNote = (event: ChangeEvent<HTMLInputElement>) =>{
            setNote(event.target.value)
    }

    function addToNoteString (note: string){
        notes.push(note)
    }

    return(
        <div>
            <div className="input-section">
                <input
                    onChange={updateNote}
                    value={note}
                    type="text"
                    name="note"
                    placeholder="Note"
                />
                <button>
                    Add
                </button>
            </div>
            <hr/>
            <ul>
                {
                    notes.map((notes) => 
                            <li>{note}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default App;
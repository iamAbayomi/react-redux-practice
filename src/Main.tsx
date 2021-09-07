import React, { ChangeEvent, useState } from 'react'


function App(){
    const [note, setNote] = useState("")
    const [notes, setNotes] = useState([""])
    let notesTemp: string[] = []

    const updateNote = (event: ChangeEvent<HTMLInputElement>) =>{
            setNote(event.target.value)
    }

    function addToNoteString (){
        notesTemp.push(note)
        setNotes(notesTemp)
        console.log("I am here" + note)
        console.log("What is in " + notes)
        setNote("")
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
                <button onClick={addToNoteString}>Add String</button>
            </div>
            <hr/>
            <ul>
                {
                    notes.map((note) => 
                            <li key={note} >{note}</li>
                    )
                }
            </ul>
            
        </div>
    )
}

export default App;
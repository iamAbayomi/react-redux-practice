import React, { ChangeEvent, useState } from 'react'


function App(){
    const [note, setNote] = useState("")
    const [notes, setNotes] = useState<string[]>([])
    let notesTemp: string[] = ['first string']

    const updateNote = (event: ChangeEvent<HTMLInputElement>) =>{
            setNote(event.target.value)
    }

    function addToNoteString (){
        notesTemp.push(note)
        setNotes([
            ...notes,
            note
        ])
        console.log("Note contents" + note)
        console.log("Notes contents " + notes)
        console.log("NotesTemp Contents" + notesTemp)
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
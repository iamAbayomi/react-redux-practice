import React, { ChangeEvent } from "react"

interface NoteInputProps{
    setNote(note: string) : void
}

function NoteInput(setNote : NoteInputProps)  {
    return(
        <div>
            <div>
                <input 
                    type="text"
                    name="note"
                    placeholder="Note"
                />
                <button>Add</button>
            </div>
        </div>
    )
}

export default NoteInput;
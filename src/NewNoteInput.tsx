import React from "react";


const NewNoteInput = () => {
    return(
        <div>
            <div>
                <input type="text" name="note" placeholder="Note" />
                <button>Add Note</button>
            </div>
        </div>
    )
}

export default NewNoteInput
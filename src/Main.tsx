import React from 'react'
import NoteInput from './components/NoteInput';

function App(){
    const [note, setNote] = React.useState([])

    return(
        <div>
            <NoteInput />
            <hr/>
            <ul>
                {
                    note.map((singleNote) =>
                        <li>{singleNote} </li>
                    )
                }

            </ul>
        </div>
    )
}

export default App;
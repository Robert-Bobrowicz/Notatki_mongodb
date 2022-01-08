import React, {useState} from "react";

function NewNote(props) {
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const changeTitleHandler = (event) => {
        const value = event.target.value;
        setTitle(value);
    }

    const changeDescHandler = (event) => {
        const value = event.target.value;
        setDesc(value);
    }

    const addNoteHandler = () => {
        const note = {

            title: title,
            body: desc
        }
        props.onAdd(note);
        setTitle('');
        setDesc('')
        setShowForm(false);
    }

    return (
        showForm ? (
                <div className="note" >
                    <p>Nazwa zadania:</p>
                    <input
                        type="text"
                        value = {title}
                        onChange = {changeTitleHandler}
                    />
                    <p>Opis zadania:</p>
                    <input
                        type="text"
                        value = {desc}
                        onChange = {changeDescHandler}
                    />
                    <br />
                    <button onClick={addNoteHandler}>dodaj</button>
                    <button className="delete" onClick={() => setShowForm(false)}>ukryj formularz</button>
                </div>
            ) : (
                <button className="note" onClick={() => setShowForm(true)}>dodaj notatkę</button>
        )

    )
}

export default NewNote;
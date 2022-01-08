import React, {useState} from "react";


function EditNote(props) {
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

    const editNote = () => {

    }

    return (
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
            <button onClick={() => console.log(' ...save note')}>zapisz</button>
            <button className="delete" onClick={() => setShowForm(false)}>ukryj formularz</button>
        </div>
    );
}

export default EditNote;
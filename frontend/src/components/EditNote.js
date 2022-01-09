import React, {useState} from "react";


function EditNote(props) {
    const [title, setTitle] = useState(props.title);
    const [desc, setDesc] = useState(props.body);

    const changeTitleHandler = (event) => {
        const value = event.target.value;
        setTitle(value);
    }

    const changeDescHandler = (event) => {
        const value = event.target.value;
        setDesc(value);
    }

    const editNote = () => {
        const note = {
            title: title,
            body: desc,
            _id: props._id
        }
        props.onEdit(note);
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
            <button onClick={editNote}>zapisz</button>
        </div>
    );
}

export default EditNote;
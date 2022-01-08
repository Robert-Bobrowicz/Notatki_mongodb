import React from "react";
import "./Notes.css";
import Note from "./Note";

class Notes extends React.Component {
    constructor(props) {
        super(props);

        this.notes = [
            {
                id: "234",
                title: "Zadanie 1",
                body: "Wykonaj zadanie 1"
            },
            {
                id: "235",
                title: "Zadanie 2",
                body: "Wykonaj zadanie 2"
            },{
                id: "236",
                title: "Zadanie 3",
                body: "Wykonaj zadanie 3"
            }
        ];
    }

    render () {
            return (
                <div>
                    <p>Moje notatki:</p>
                    {this.notes.map(note => (
                        <Note title = {note.title} body = {note.body} id = {note.id}/>
                    ))}
                </div>
            );
        }
}

export default Notes;
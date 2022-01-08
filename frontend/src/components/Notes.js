import React from "react";
import "./Notes.css";
import Note from "./Note";
import NewNote from "./NewNote";
import Modal from "react-modal";
import EditNote from "./EditNote";

class Notes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
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
            ],
            showEditModal: false
        }
    }

    deleteNote(id) {
        console.log('usuwanie notatki', id);
        let notes = [...this.state.notes];
        notes = notes.filter(note => note.id !== id);
        this.setState({notes: notes});
    }

    addNote(note) {
        const notes = [...this.state.notes];
        notes.push(note);
        this.setState({notes: notes});
    }

    render () {
            return (
                <div>
                    <p>Moje notatki:</p>
                    <NewNote
                        onAdd = {(note) => this.addNote(note)}
                    />
                    <Modal
                        isOpen = {this.state.showEditModal}
                        contentLabel = "Edycja notatki">
                        {/*//formularz edycji EditNote.js*/}
                        <EditNote />

                    </Modal>
                    {this.state.notes.map(note => (
                        <Note
                            key = {note.id}
                            title = {note.title}
                            body = {note.body}
                            id = {note.id}
                            onDelete = {(id) => this.deleteNote(id)}
                        />
                    ))}
                </div>
            );
        }
}

export default Notes;
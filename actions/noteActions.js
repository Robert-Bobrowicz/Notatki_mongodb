const Note = require('../db/models');
const {port} = require("../config");

    function getAllNotes (req, res) {
        // pobieranie notatek z db

        //wyświetlanie pobranych notatek
        res.status(200).send('API działa');
    }

    function getNote(req, res) {
        res.status(202).send('Info o notatce')
    }

    function saveNote(req, res) {
        // const newNote = new Note({
        //     title: 'zarobić zakupy jedzeniowe3',
        //     body: 'schabowe, wątróbka, kiełbasa sucha'
        // });
        // newNote.save().then(() => console.log('New note has been saved to db.'));

        const title = req.body.title;
        const body = req.body.body;

        res.send(`Notatka została zapisana w db: Tytuł: ${title}, treść: ${body}, serwer działa na porcie ${port}`)
    }

    function updateNote(req, res) {
        const id = req.params.id;
        res.send('Note updated, ID: ' + id);
    }

    function deleteNote(req, res) {
        const id = req.params.id;
        res.send('Note deleted, ID: ' + id);
    }


module.exports = {
    getAllNotes,
    getNote,
    updateNote,
    deleteNote,
    saveNote
};

const Note = require('../db/models');
const {port} = require("../config");

function saveNote(req, res) {
    const newNote = new Note({title: 'zarobić zakupy jedzeniowe3', body: 'mięso lepsze, kawa, śmietanka do kawy, cebula, orzechy'});
    newNote.save().then(() => console.log('New note has been saved to db.'));
    res.send(`Moja nowa strona główna serwera działa na porcie ${port}`)
    };

module.exports = {saveNote};

const mongoose = require('mongoose');

const Note = mongoose.model('Note', {
    title: String,
    body: String
});

// const newNote = new Note({title: 'zarobić zakupy jedzeniowe1', body: 'mięso, kawa, śmietanka do kawy, cebula, orzychy'});
// newNote.save().then(() => console.log('New note has been saved to db.'));

module.exports = Note;
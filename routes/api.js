const express = require('express');
const router = express.Router();
const notesAction = require('../actions/noteActions');

router.get('/', (req,res) => {
    console.log(' ...main page reloaded');
    res.send('Strona główna projektu');
});

//endpoint dla pobierania notatek
router.get('/notes', notesAction.getAllNotes);
router.get('/notes/:id', notesAction.getNote);

//endpoint dla zapisu nowej notatki
router.post('/notes', notesAction.saveNote);

//endpoint dla modyfikacji notatki
router.put('/notes/:id', notesAction.updateNote);

//endpoint dla usunięcia notatki z db
router.delete('/notes/:id', notesAction.deleteNote);


module.exports = {
    router
}
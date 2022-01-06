const express = require('express');
const router = express.Router();
const notesAction = require('../actions/notes');

router.get('/', notesAction.saveNote);

module.exports = {
    router
}
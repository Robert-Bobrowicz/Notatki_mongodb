const Note = require('../db/models');

    async function getAllNotes (req, res) {

        try {
            // pobieranie notatek z db
            const data = await Note.find({})
            console.log(' ...all documents has been read from db');
            //wyświetlanie pobranych notatek
            res.status(200).json(data);
        } catch(err) {
            console.log(err);
            res.status(500).json({message: err.message});
        }
    }

    async function getNote(req, res) {
        try{
            const id = req.params.id;
            const note = await Note.findOne({_id: id});
            console.log(' ...note read');
            res.status(200).json(note);
        } catch(err) {
            console.log(err);
            res.status(500).json({message: err.message});
        }
    }

    async function saveNote(req, res) {
        const title = req.body.title;
        const body = req.body.body;
        const note = new Note({
            title: title,
            body: body
        });
        try {
            await note.save().then(() => console.log(' ...new note has been saved to db.'));
            res.status(200).json(note);
        } catch(err) {
            console.log(err);
            return res.status(422).json({message: err.message});
        }

    }

    async function updateNote(req, res) {
        try {
            const id = req.params.id;
            const title = req.body.title;
            const body = req.body.body;
            const note = await Note.findOne({_id: id});

            note.title = title;
            note.body = body;

            await note.save();
            console.log(` ...note updated ID: ${id}`)
            res.status(201).json(note);
        } catch(err) {
            res.send(err)
        }
    }

    async function deleteNote(req, res) {
        const id = req.params.id;
        await Note.deleteOne({_id: id}).then(() => console.log(` ...note is deleted ID: ${id}`));
        res.sendStatus(204);
    }


module.exports = {
    getAllNotes,
    getNote,
    updateNote,
    deleteNote,
    saveNote
};

const notes = require('express').Router();
const fs = require('fs');
const uuid = require('uuid');


notes.get('/notes', (req,res) => {
    const noteDb = fs.readFileSync('./db/db.json', 'utf-8');
    const notes = JSON.parse(noteDb)
    if(notes) {
        res.json(notes);
    } else {
        res.sendStatus(404);
    }
});

notes.post('/notes', (req, res) => {
    console.log(req.body);

    const noteDb = fs.readFileSync('./db/db.json', 'utf-8');
    const notes = JSON.parse(noteDb);
    const { title, text } = req.body;
    if (notes) {
        const newNote = {
            title,
            text,
            note_id: uuid.v4(),
        };

        //need to append here
        notes.push(newNote)
        fs.writeFileSync('./db/db.json', JSON.stringify(notes))
        res.json(notes)
    } else {
        res.errored('Error in adding note')
    }
})

notes.delete('/notes:note_id', (req, res) => {
    const id = req.params.note_id;
    const noteDb = fs.readFileSync('./db/db.json', 'utf-8');
    let notes = JSON.parse(noteDb)
    const index = notes.findIndex((note) => {
        return note.note_id === id
    })

    if (index !== -1) {
        notes.splice(index, 1);
        fs.writeFileSync('./db/db.json', JSON.stringify(notes));

        res.send('Note deleted')
    } else {
        res.status(404).send('Note does not exist');
    }
});

module.exports = notes;
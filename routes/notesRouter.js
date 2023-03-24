const notes = require('express').Router();
const fs = require('fs');
const path = require('path')
const { noteDb } = require('../db/db.json')
let newNoot = ''


notes.get('/notes', (req,res) => {
    if(noteDb) {
        res.json(noteDb);
    } else {
        res.sendStatus(404);
    }
});

notes.post('/notes', (req, res) => {
    console.log(req.body);

    const { title, text} =  req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
        };

        //need to append here
        fs.writeFile('./db/db.json', JSON.stringify(newNote))
        res.json('Note sucessfully added!')
    } else {
        res.errored('Error in adding note')
    }
})

module.exports = notes;